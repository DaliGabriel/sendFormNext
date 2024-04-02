import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const data = await request.json();

  console.log(data.Username)

  return NextResponse.json({
    data
  });
  
}
