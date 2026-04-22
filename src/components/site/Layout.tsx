import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { FloatingWhatsApp } from "./FloatingWhatsApp";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "var(--background)", color: "var(--foreground)" }}>
      <Navbar />
      <main className="pt-24 md:pt-28">{children}</main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}


