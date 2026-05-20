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
      <body>
        <div className="min-h-screen bg-zinc-100 text-zinc-900">
          <div className="mx-auto grid min-h-screen max-w-[1600px] grid-cols-1 lg:grid-cols-[260px_minmax(0,1fr)]">
            <aside className="border-r border-zinc-200 bg-white px-5 py-6">
              <div className="space-y-2 border-b border-zinc-200 pb-6">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500">Carvi</p>
                <p className="text-sm font-medium text-zinc-900">Özel serviste yeni standart.</p>
                <p className="text-xs text-zinc-600">Workshop Operations MVP</p>
              </div>

              <nav className="mt-6 space-y-1">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block rounded-md px-3 py-2 text-sm font-medium text-zinc-700 transition hover:bg-zinc-100 hover:text-zinc-900"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </aside>

            <div className="flex min-h-screen flex-col">
              <header className="border-b border-zinc-200 bg-white px-6 py-5 lg:px-10">
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-zinc-500">Workshop workspace</p>
                <h1 className="mt-1 text-lg font-semibold tracking-tight text-zinc-900">Operations platform shell</h1>
              </header>
              <main className="flex-1 px-6 py-8 lg:px-10">{children}</main>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
