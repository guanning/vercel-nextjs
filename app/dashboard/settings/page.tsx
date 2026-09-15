"use client";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);
  return (
    <div>
        <h2>Settings page {count}</h2>
        <button className="bg-black text-white p-2 my-4 rounded-md" onClick={() => setCount(count + 1)}>Click me & increment count</button>
    </div>
  );
}
