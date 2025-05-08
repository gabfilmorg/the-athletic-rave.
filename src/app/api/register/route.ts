import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(request: Request) {
  try {
    const { email, fullName, packageId } = await request.json();
    if (!email || !fullName || !packageId) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }
    const registration = await prisma.registration.create({
      data: { email, fullName, packageId },
    });
    return NextResponse.json({ success: true, registration });
  } catch (error: any) {
    return NextResponse.json({ error: error?.message || 'Registration failed' }, { status: 500 });
  }
}

export async function OPTIONS() {
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
} 