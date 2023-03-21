import { initAuth } from '@/modules/initAuth';
import './globals.css'

initAuth()

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
  }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}