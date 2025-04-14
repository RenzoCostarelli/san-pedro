"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

interface NavItemProps {
  href: string;
  label: string;
}
export default function NavItem({ href, label }: NavItemProps) {
  const path = usePathname();
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (path === href) {
      setActive(true);
    } else {
      setActive(false);
    }
  }, [path, href]);
  return (
    <Link
      href={href}
      className={`font-sans px-4 py-2 hover:bg-gold-light hover:text-gray-dark transition-colors ${
        active ? "bg-gold-light text-gray-dark" : "text-white"
      }`}
      prefetch
    >
      {label}
    </Link>
  );
}
