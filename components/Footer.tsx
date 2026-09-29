import Link from "next/link";
import { contactDetails, footerColumns, legalNav, site } from "@/content/site";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-graphite text-on-dark">
      <div className="mx-auto grid w-full max-w-[1120px] gap-8 px-5 py-10 sm:grid-cols-2 md:px-8 lg:grid-cols-4">
        <div>
          <p className="text-sm font-semibold tracking-[0.14em] text-white">FLEXIPARABOLA II</p>
          <p className="mt-3 text-sm leading-relaxed">{site.legalName}</p>
          <address className="mt-3 text-sm not-italic text-white">{contactDetails.locality}</address>
        </div>

        {footerColumns.map((column) => (
          <nav key={column.title} aria-label={column.title}>
            <p className="text-xs font-medium tracking-[0.16em] text-white uppercase">{column.title}</p>
            <ul className="mt-3 space-y-2">
              {column.links.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm transition-colors hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}

        <div>
          <p className="text-xs font-medium tracking-[0.16em] text-white uppercase">Contacto</p>
          <p className="mt-3 text-sm">
            <a className="break-all text-white hover:underline" href={`mailto:${contactDetails.email}`}>
              {contactDetails.email}
            </a>
          </p>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex w-full max-w-[1120px] flex-col gap-3 px-5 py-4 text-xs md:flex-row md:items-center md:justify-between md:px-8">
          <p>© {new Date().getFullYear()} {site.legalName}</p>
          <ul className="flex gap-4">
            {legalNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition-colors hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
