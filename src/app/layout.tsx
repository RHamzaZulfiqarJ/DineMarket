import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { GlobalStateProvider } from '../context/GlobalStateContext';
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DineMarket",
  description: "Browse products, manage your cart, and shop at DineMarket.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html suppressHydrationWarning lang="en">
      <body className={inter.className}>
        <GlobalStateProvider>
          {children}
          <Toaster closeButton richColors position="top-right" />
        </GlobalStateProvider>
      </body>
    </html>
  );
}
