import type { Metadata } from "next";
import '../styles';

export const metadata: Metadata = {
  title: "multi-plug",
  description: "You can testing multi-plug here! Let's ENJOY!",
};

export function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}