// src/app/api/item-price/route.js
import { NextResponse } from "next/server";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const name = searchParams.get("name");

  if (!name) {
    return NextResponse.json({ error: "Missing item name" }, { status: 400 });
  }

  try {
    const url = `https://steamcommunity.com/market/priceoverview/?appid=730&currency=1&market_hash_name=${encodeURIComponent(name)}`;
    const response = await fetch(url);
    const data = await response.json();

    if (!data.success) {
      return NextResponse.json({ error: "Item not found or Steam API failed" }, { status: 404 });
    }

    return NextResponse.json({
      name,
      lowest_price: data.lowest_price,
      median_price: data.median_price,
      volume: data.volume,
    });
  } catch (err) {
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
