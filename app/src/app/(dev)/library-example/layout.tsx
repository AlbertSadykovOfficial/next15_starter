"use client"; // Рендеринг только на клиенте
import "@/styles/globals.css";
import { TWithChildren } from "@/models/Types/TChildren";

export default function LibLayout({ children }: Readonly<TWithChildren>) {
  return (
    <div className="bg-gray-900">
      <h2>LIBRARY-EXAMPLE Nested Layout</h2>
      <div>{children}</div>
    </div>
  );
}
