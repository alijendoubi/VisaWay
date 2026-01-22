"use client";

import type { ReactNode } from "react";
import { LocaleLink } from "@/components/i18n/LocaleLink";
import { cn } from "@/components/ui/cn";

type ButtonVariant = "primary" | "secondary" | "ghost";

type ButtonProps = {
  href?: string;
  onClick?: () => void;
  variant?: ButtonVariant;
  size?: "sm" | "md" | "lg";
  className?: string;
  children: ReactNode;
  ariaLabel?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
};

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all focus-visible:focus-ring disabled:cursor-not-allowed disabled:opacity-60";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-cta-gradient text-white shadow-soft hover:-translate-y-0.5 hover:shadow-glow",
  secondary:
    "bg-white text-ink border border-ink/10 hover:border-ink/20 hover:-translate-y-0.5",
  ghost: "bg-transparent text-ink hover:bg-ink/5"
};

const sizeClasses: Record<NonNullable<ButtonProps["size"]>, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-2.5 text-sm",
  lg: "px-6 py-3 text-base"
};

export const Button = ({
  href,
  onClick,
  variant = "primary",
  size = "md",
  className,
  children,
  ariaLabel,
  type = "button",
  disabled = false
}: ButtonProps) => {
  const classes = cn(baseClasses, variantClasses[variant], sizeClasses[size], className);

  if (href) {
    return (
      <LocaleLink href={href} className={classes} ariaLabel={ariaLabel}>
        {children}
      </LocaleLink>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={classes}
      aria-label={ariaLabel}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
