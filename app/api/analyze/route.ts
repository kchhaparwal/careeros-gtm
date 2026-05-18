import { NextRequest, NextResponse } from 'next/server';
import { analyzeProfile } from '@/lib/claude';

export const maxDuration = 60;

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const goal = formData.get('goal') as string;
    const inputType = formData.get('inputType') as string;

    if (!goal) {
      return NextResponse.json({ error: 'Goal is required' }, { status: 400 });
    }

    let content = '';

    if (inputType === 'pdf') {
      const file = formData.get('file') as File;
      if (!file) {
        return NextResponse.json({ error: 'PDF file is required' }, { status: 400 });
      }
      const arrayBuffer = await file.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      // Dynamic import — pdfjs only loads when actually processing a PDF,
      // never on text requests which was crashing the whole route.
      const { parsePdfBuffer } = await import('@/lib/parsePdf');
      content = await parsePdfBuffer(buffer);
    } else {
      content = formData.get('content') as string;
      if (!content || content.trim().length < 50) {
        return NextResponse.json({ error: 'Please provide more profile content (at least a few sentences).' }, { status: 400 });
      }
    }

    const result = await analyzeProfile(content, goal);
    return NextResponse.json(result);
  } catch (error) {
    console.error('Analysis error:', error);
    return NextResponse.json(
      { error: 'Analysis failed. Please check your API key and try again.' },
      { status: 500 }
    );
  }
}
