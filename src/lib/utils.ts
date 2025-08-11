import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatTelHref(digitsOnly: string): string {
  const clean = digitsOnly.replace(/\D/g, "");
  return `tel:+55${clean}`;
}