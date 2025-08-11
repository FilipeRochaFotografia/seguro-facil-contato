import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-illustration.webp";
import logoImg from "@/assets/facilite-logo.png";
import susepBadge from "@/assets/selo-susep.png";
import {
  Globe2,
  LifeBuoy,
  CloudLightning,
  Car,
  Square,
  ShieldAlert,
  Flame,
  AlertTriangle,
  Truck,
  KeyRound,
  CheckCircle2,
} from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/557391395417?text=Ol%C3%A1%2C%20quero%20uma%20cota%C3%A7%C3%A3o%20na%20FACILITE.";

const features = [
  { icon: Globe2, label: "Cobertura em todo o Brasil" },
  { icon: LifeBuoy, label: "Assistência 24h" },
  { icon: CloudLightning, label: "Fenômenos da natureza" },
  { icon: Car, label: "Capotamento/colisão" },
  { icon: Square, label: "Vidros" },
  { icon: ShieldAlert, label: "Roubo e furto" },
  { icon: Flame, label: "Incêndio" },
  { icon: AlertTriangle, label: "Acidente" },
  { icon: Truck, label: "Guincho" },
  { icon: KeyRound, label: "Carro reserva (quando contratado)" },
];

const Index = () => {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "FACILITE Proteção Veicular",
    url: "https://facilite.lovable.app/",
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+55 800 591 5328",
        contactType: "customer support",
        areaServed: "BR",
        availableLanguage: ["pt-BR"],
      },
      {
        "@type": "ContactPoint",
        telephone: "+55 73 9139-5417",
        contactType: "sales",
        areaServed: "BR",
        availableLanguage: ["pt-BR"],
      },
    ],
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="w-full border-b border-border">
        <div className="container flex items-center justify-between py-4">
          <a href="#" aria-label="Página inicial FACILITE" className="flex items-center gap-3">
            <img
              src={logoImg}
              alt="Logotipo FACILITE Proteção Veicular"
              className="h-10 w-auto"
              loading="eager"
              decoding="async"
            />
          </a>
          <Button
            asChild
            variant="cta"
            aria-label="Fazer cotação pelo WhatsApp"
            className="hover-scale"
          >
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              Faça sua cotação
            </a>
          </Button>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="bg-hero-gradient text-primary-foreground">
          <div className="container grid gap-10 py-16 md:grid-cols-2 md:py-20">
            <div className="flex flex-col justify-center">
              <h1 className="font-heading text-4xl font-extrabold leading-tight md:text-5xl">
                FACILITE, E FIQUE SEGURO.
              </h1>
              <ul className="mt-6 space-y-3" aria-label="Benefícios principais">
                {[
                  "Cobertura completa para carros e motos",
                  "Assistência 24h em todo o Brasil",
                  "Proteção sem burocracia",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 text-accent" aria-hidden size={22} />
                    <span className="text-base md:text-lg">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Button
                  asChild
                  size="lg"
                  variant="cta"
                  aria-label="Fazer cotação pelo WhatsApp"
                  className="hover-scale"
                >
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                    Faça sua cotação no WhatsApp
                  </a>
                </Button>
                <div className="flex items-center gap-3 rounded-lg bg-secondary/40 px-3 py-2">
                  <img
                    src={susepBadge}
                    alt="Selo SUSEP - FACILITE Proteção Veicular"
                    className="h-8 w-auto"
                    loading="lazy"
                    decoding="async"
                  />
                  <p className="text-xs md:text-sm text-primary-foreground/90">
                    Responsabilidade com você. Regulamentado pela SUSEP.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src={heroImg}
                alt="Ilustração de carro azul e moto laranja - FACILITE Proteção Veicular"
                className="mx-auto h-auto w-full max-w-xl rounded-lg shadow-elevated"
                loading="eager"
                decoding="async"
              />
            </div>
          </div>
        </section>

        {/* Coberturas */}
        <section className="bg-background">
          <div className="container py-12 md:py-16">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
              {features.map(({ icon: Icon, label }) => (
                <article
                  key={label}
                  className="flex items-center gap-3 rounded-lg border border-border bg-card p-4 hover-scale"
                >
                  <Icon aria-hidden className="text-accent" />
                  <h3 className="text-base font-semibold">{label}</h3>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Faixa de confiança */}
        <section className="bg-secondary">
          <div className="container flex flex-col items-center justify-between gap-4 py-10 text-center md:flex-row md:text-left">
            <p className="text-lg font-semibold md:text-xl">
              Não é só proteção, é confiança. É disso, a gente entende.
            </p>
            <Button
              asChild
              variant="cta"
              aria-label="Falar no WhatsApp"
              className="hover-scale"
            >
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                Fale conosco no WhatsApp
              </a>
            </Button>
          </div>
        </section>
      </main>

      <footer className="border-t border-border bg-background">
        <div className="container grid gap-6 py-10 md:grid-cols-2">
          <div>
            <img
              src={logoImg}
              alt="Logotipo FACILITE Proteção Veicular"
              className="h-8 w-auto"
              loading="lazy"
              decoding="async"
            />
            <p className="mt-4 text-sm text-muted-foreground">
              Empresa: FACILITE Proteção Veicular
            </p>
            <p className="text-sm text-muted-foreground">CNPJ: PENDENTE</p>
            <p className="text-sm text-muted-foreground">Endereço: PENDENTE</p>
          </div>
          <div className="flex flex-col items-start gap-3 md:items-end">
            <p className="text-sm">Assistência 24h: 0800 591 5328</p>
            <p className="text-sm">Financeiro / Disparos: 73 973 8803-0570 (confirmar)</p>
            <p className="text-sm">WhatsApp para cotação: +55 73 9139-5417</p>
            <Button asChild variant="cta" className="mt-2 hover-scale" aria-label="Fazer cotação">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                Faça sua cotação
              </a>
            </Button>
          </div>
        </div>
        <div className="pb-8 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} FACILITE Proteção Veicular. Todos os direitos reservados.
        </div>
      </footer>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />
    </div>
  );
};

export default Index;
