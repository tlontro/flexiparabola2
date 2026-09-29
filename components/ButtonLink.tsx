import Link from "next/link";
import { cn } from "@/lib/cn";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "inverse";
  className?: string;
};

const variants = {
  primary: "bg-brand text-white hover:bg-brand-deep",
  secondary: "border border-ink/15 bg-white text-ink hover:border-brand hover:text-brand",
  inverse: "bg-white text-ink hover:bg-paper",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className,
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center px-5 py-3 text-sm font-medium transition-colors duration-200",
        variants[variant],
        className,
      )}
    >
      {children}
    </Link>
  );
}
