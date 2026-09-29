"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { mainNav, site, type NavItem } from "@/content/site";
import { cn } from "@/lib/cn";

function isCurrent(pathname: string, item: NavItem) {
  if (item.children?.some((child) => pathname === child.href.split("#")[0])) {
    return true;
  }
  if (item.children) return false;
  return pathname === item.href.split("#")[0];
}

export function Header() {
  const pathname = usePathname();
  const menuId = useId();
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const [menuPath, setMenuPath] = useState<string | null>(null);
  const [openMenu, setOpenMenu] = useState<{ label: string; path: string } | null>(null);
  const menuOpen = menuPath === pathname;
  const desktopMenu = openMenu?.path === pathname ? openMenu.label : null;

  useEffect(() => {
    if (!menuOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen && !openMenu) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key !== "Escape") return;
      setOpenMenu(null);
      if (menuOpen) {
        setMenuPath(null);
        menuButtonRef.current?.focus();
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [menuOpen, openMenu]);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex h-[72px] w-full max-w-[1120px] items-center justify-between gap-4 px-5 md:px-8">
        <Link href="/" className="min-w-0" aria-label={`${site.legalName}, página inicial`}>
          <span className="block text-[13px] font-semibold tracking-[0.14em] text-ink sm:text-sm">
            FLEXIPARABOLA II
          </span>
          <span className="block text-[11px] tracking-wide text-steel">Industrial Services</span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Principal">
          {mainNav.map((item) =>
            item.children ? (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setOpenMenu({ label: item.label, path: pathname })}
                onMouseLeave={() => setOpenMenu(null)}
                onFocus={() => setOpenMenu({ label: item.label, path: pathname })}
                onBlur={(event) => {
                  const next = event.relatedTarget;
                  if (!(next instanceof Node) || !event.currentTarget.contains(next)) {
                    setOpenMenu(null);
                  }
                }}
              >
                <Link
                  href={item.href}
                  className={cn(
                    "inline-flex items-center px-3 py-2 text-sm transition-colors",
                    isCurrent(pathname, item) ? "text-brand" : "text-steel hover:text-ink",
                  )}
                  aria-expanded={desktopMenu === item.label}
                  aria-haspopup="true"
                >
                  {item.label}
                </Link>
                {desktopMenu === item.label ? (
                  <ul className="absolute top-full left-0 z-20 min-w-60 border border-line bg-white py-2">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          className={cn(
                            "block px-4 py-2.5 text-sm transition-colors hover:bg-paper",
                            pathname === child.href ? "text-brand" : "text-ink",
                          )}
                          aria-current={pathname === child.href ? "page" : undefined}
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "px-3 py-2 text-sm transition-colors",
                  isCurrent(pathname, item) ? "text-brand" : "text-steel hover:text-ink",
                )}
                aria-current={isCurrent(pathname, item) ? "page" : undefined}
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/contactos"
            className="hidden bg-brand px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-brand-deep sm:inline-flex"
          >
            Falar connosco
          </Link>
          <button
            ref={menuButtonRef}
            type="button"
            className="inline-flex size-11 items-center justify-center border border-line text-ink lg:hidden"
            aria-expanded={menuOpen}
            aria-controls={menuId}
            onClick={() => setMenuPath(menuOpen ? null : pathname)}
          >
            <span className="sr-only">{menuOpen ? "Fechar menu" : "Abrir menu"}</span>
            <MenuIcon open={menuOpen} />
          </button>
        </div>
      </div>

      {menuOpen ? (
        <nav
          id={menuId}
          aria-label="Mobile"
          className="max-h-[calc(100vh-72px)] overflow-y-auto border-t border-line bg-white lg:hidden"
        >
          <ul className="mx-auto w-full max-w-[1120px] px-5 py-3 md:px-8">
            {mainNav.map((item) => (
              <li key={item.label} className="border-b border-line">
                <Link
                  href={item.href}
                  className={cn(
                    "block py-3 text-base",
                    isCurrent(pathname, item) ? "text-brand" : "text-ink",
                  )}
                  aria-current={isCurrent(pathname, item) ? "page" : undefined}
                >
                  {item.label}
                </Link>
                {item.children ? (
                  <ul className="pb-3">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          className={cn(
                            "block py-2 pl-4 text-sm",
                            pathname === child.href ? "text-brand" : "text-steel",
                          )}
                          aria-current={pathname === child.href ? "page" : undefined}
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </li>
            ))}
            <li className="py-4">
              <Link
                href="/contactos"
                className="inline-flex bg-brand px-4 py-3 text-sm font-medium text-white"
              >
                Falar connosco
              </Link>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
      {open ? (
        <path d="M4 4l10 10M14 4L4 14" fill="none" stroke="currentColor" strokeWidth="1.5" />
      ) : (
        <path d="M2 5h14M2 9h14M2 13h14" fill="none" stroke="currentColor" strokeWidth="1.5" />
      )}
    </svg>
  );
}
