import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-5xl font-bold tracking-tight text-gray-400">
        Welcome to io.network
      </h1>
      <Link href="/auth">
        <button className="bg-blue-600 border-4 border-blue-600 hover:border-blue-800 hover:bg-transparent mt-5 rounded-lg py-1 px-3">Enter -&gt;</button>
      </Link>
    </main>
  );
}