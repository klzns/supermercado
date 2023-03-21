import Link from "next/link";
import type { ReactNode } from "react";

export default function UnauthenticatedTemplate({ children }: { children: ReactNode }) {
  return (
    <div>
      <h1>Supermercado</h1>

      <Link href="/login" className="text-sky-500">Login</Link>
      <Link href="/signup" className="text-sky-500">Signup</Link>
      
      {children}
    </div>
  )
}