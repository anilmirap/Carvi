import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";


const navItems = [
  { href: "/", label: "Overview" },
  { href: "/dashboard", label: "Dashboard" },
  { href: "/customers", label: "Customers" },
  { href: "/vehicles", label: "Vehicles" },
  { href: "/work-orders", label: "Work Orders" },
  { href: "/quotes", label: "Quotes" },
  { href: "/service-history", label: "Service History" },
  { href: "/settings", label: "Settings" },
];

export const metadata: Metadata = {
  title: "Carvi",
  description: "Carvi workshop operations platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-zinc-50 text-zinc-900 antialiased">
        <div className="min-h-screen">
          <header className="border-b border-zinc-200 bg-white">
            <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.24em] text-zinc-500">Carvi</p>
                <p className="text-sm text-zinc-700">Workshop Operations</p>
              </div>
              <p className="text-sm text-zinc-500">MVP Scaffold</p>
            </div>
            <nav className="mx-auto flex w-full max-w-7xl flex-wrap gap-2 px-6 pb-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-md border border-zinc-200 bg-white px-3 py-1.5 text-sm text-zinc-700 transition hover:border-zinc-400 hover:text-zinc-900"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </header>
          <main className="mx-auto w-full max-w-7xl px-6 py-10">{children}</main>
        </div>
      </body>
    </html>
  );
}
