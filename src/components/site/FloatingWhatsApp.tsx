import { WHATSAPP_URL } from "@/data/villas";

export function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-40 group inline-flex items-center gap-3 rounded-full bg-leaf px-4 py-3 text-white shadow-[var(--shadow-elev)] transition hover:scale-[1.03]"
    >
      <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/15">
        <span className="absolute inset-0 animate-ping rounded-full bg-white/20" />
        <svg viewBox="0 0 32 32" className="h-5 w-5" fill="currentColor">
          <path d="M19.11 17.32c-.27-.13-1.6-.79-1.85-.88-.25-.09-.43-.13-.61.13-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.13-1.13-.42-2.16-1.34-.8-.71-1.34-1.59-1.5-1.86-.16-.27-.02-.42.12-.55.12-.12.27-.32.4-.48.13-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.13-.61-1.47-.83-2.01-.22-.53-.44-.46-.61-.47l-.52-.01c-.18 0-.48.07-.73.34-.25.27-.96.94-.96 2.29 0 1.35.99 2.66 1.13 2.84.13.18 1.95 2.97 4.72 4.16.66.28 1.18.45 1.58.58.66.21 1.27.18 1.74.11.53-.08 1.6-.65 1.83-1.28.23-.63.23-1.17.16-1.28-.07-.11-.25-.18-.52-.31z"/>
          <path d="M26.55 5.4C23.74 2.59 20 .94 16 .94 7.7.94.94 7.7.94 16c0 2.65.69 5.24 2.01 7.52L.85 31.06l7.74-2.03A15 15 0 0 0 16 31.06h.01c8.3 0 15.06-6.76 15.07-15.06 0-4.03-1.57-7.81-4.43-10.6zm-10.55 23.2h-.01a12.5 12.5 0 0 1-6.36-1.74l-.46-.27-4.6 1.21 1.23-4.49-.3-.48a12.5 12.5 0 0 1-1.92-6.66c0-6.92 5.63-12.55 12.55-12.55 3.35 0 6.5 1.31 8.87 3.68a12.45 12.45 0 0 1 3.68 8.87c0 6.92-5.64 12.55-12.55 12.55z"/>
        </svg>
      </span>
      <span className="hidden text-sm font-medium tracking-wide sm:inline">Chat with us</span>
    </a>
  );
}