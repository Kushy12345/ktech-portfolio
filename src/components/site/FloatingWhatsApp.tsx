import { site } from "@/data/site";

/** Fixed WhatsApp contact action. */
export function FloatingWhatsApp() {
  const href = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
    "Hi Tarfa, I found K-Tech Technologies online and I'd like to discuss a project.",
  )}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      aria-label="Chat with K-Tech Technologies on WhatsApp"
      className="group fixed bottom-5 right-5 z-50 flex min-h-14 min-w-14 items-center gap-3 rounded-full border border-gold/30 bg-surface-2/90 px-4 py-3 shadow-[var(--shadow-gold)] backdrop-blur-xl transition-transform duration-300 hover:scale-[1.03]"
    >
      <svg viewBox="0 0 24 24" className="h-6 w-6 fill-gold" aria-hidden="true">
        <path d="M12.04 2c-5.46 0-9.9 4.44-9.9 9.9 0 1.75.46 3.45 1.32 4.95L2 22l5.3-1.38a9.86 9.86 0 004.74 1.2c5.46 0 9.9-4.43 9.9-9.9S17.5 2 12.04 2zm0 18.03c-1.5 0-2.98-.4-4.27-1.16l-.3-.18-3.15.82.85-3.07-.2-.32a8.13 8.13 0 01-1.25-4.32c0-4.48 3.65-8.12 8.13-8.12s8.12 3.64 8.12 8.12c0 4.49-3.64 8.13-8.13 8.13zm4.47-6.09c-.24-.12-1.45-.71-1.67-.79-.22-.08-.39-.12-.55.12-.16.25-.63.8-.77.96-.14.16-.28.18-.52.06-.24-.12-1.03-.38-1.96-1.21-.72-.65-1.21-1.45-1.35-1.69-.14-.24-.02-.38.1-.5.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.55-1.33-.75-1.81-.2-.48-.4-.42-.55-.42h-.47c-.16 0-.42.06-.63.3-.22.24-.83.81-.83 1.98 0 1.17.85 2.3.97 2.46.12.16 1.67 2.62 4.06 3.58 2.39.96 2.39.64 2.82.6.43-.04 1.39-.57 1.59-1.11.2-.55.2-1.01.14-1.11-.06-.1-.22-.16-.46-.28z" />
      </svg>
      <span className="hidden text-sm font-semibold text-foreground sm:inline">WhatsApp me</span>
    </a>
  );
}
