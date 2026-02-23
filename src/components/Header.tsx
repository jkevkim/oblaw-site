"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-bold tracking-tight"
          aria-label="Go to homepage"
        >
          Olsen & Brueggeman, APC.
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 text-sm font-semibold">
          <Link href="/firm">Firm</Link>
          <Link href="/practice-areas">Practice Areas</Link>
          <Link href="/attorneys">Attorneys</Link>
          <Link href="/locations">Location(s)</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <div className="space-y-1">
            <span className={`block h-0.5 w-6 bg-black transition ${open && "rotate-45 translate-y-1.5"}`} />
            <span className={`block h-0.5 w-6 bg-black transition ${open && "opacity-0"}`} />
            <span className={`block h-0.5 w-6 bg-black transition ${open && "-rotate-45 -translate-y-1.5"}`} />
          </div>
        </button>
      </div>

      {/* Mobile Menu Panel */}
      {open && (
        <nav
          className={`md:hidden overflow-hidden border-t bg-white transition-[max-height,opacity,transform] duration-500 ease-out ${
          open
            ? "max-h-96 opacity-100 translate-y-0"
            : "max-h-0 opacity-0 -translate-y-2"
          }`}
        >
          <ul className="flex flex-col px-6 py-4 gap-4 text-sm font-medium">
            <Link href="/firm" onClick={() => setOpen(false)}>Firm</Link>
            <Link href="#">Practice Areas</Link>
            <Link href="#">Attorneys</Link>
            <Link href="#">Location(s)</Link>
            <Link href="#">Contact</Link>
          </ul>
        </nav>
      )}
    </header>
  );
}