import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const packages = [
      { id: 1, name: "Pacote Básico", price: 99.99, description: "Acesso básico aos equipamentos" },
      { id: 2, name: "Pacote Premium", price: 199.99, description: "Acesso completo aos equipamentos" },
      { id: 3, name: "Pacote VIP", price: 299.99, description: "Acesso total com acompanhamento personalizado" }
    ];
    return NextResponse.json(packages);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch packages' }, { status: 500 });
  }
}

export async function OPTIONS() {
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
} 