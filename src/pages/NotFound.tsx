import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { company } from "@/config/company";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-2">404</h1>
        <p className="text-base text-muted-foreground mb-6">Página não encontrada</p>
        <div className="flex items-center justify-center gap-3">
          <a href="/" className="rounded-lg bg-primary px-4 py-2 text-primary-foreground">
            Voltar para Home
          </a>
          <a
            href={company.urls.whatsappCTA}
            className="rounded-lg bg-accent px-4 py-2 text-accent-foreground"
            target="_blank"
            rel="noopener noreferrer"
          >
            Falar no WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
