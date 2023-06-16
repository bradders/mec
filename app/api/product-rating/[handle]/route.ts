import { NextResponse } from 'next/server'

export async function GET(request: Request, { params }: { params: { handle: string } }) {

  // should really be dynamic from a real backend: /api/product-ratings/${params.handle}
  const randomRating = Math.floor(Math.random() * (5 - 1 + 1) + 1)

  return NextResponse.json({ rating: randomRating })
}
