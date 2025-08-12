import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import { company, features } from "@/config/company";

const Index = () => {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: company.name,
    url: company.urls.site,
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: `+55 ${company.phones.assistance24h.tel}`,
        contactType: "customer support",
        areaServed: "BR",
        availableLanguage: ["pt-BR"],
      },
      {
        "@type": "ContactPoint",
        telephone: `+55 ${company.phones.salesWhatsApp.tel}`,
        contactType: "sales",
        areaServed: "BR",
        availableLanguage: ["pt-BR"],
      },
    ],
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <main>
        {/* Hero (com logo e CTA no topo, sem header separado) */}
        <section className="bg-hero-gradient text-primary-foreground">
          <div className="container pt-6 md:pt-10 pb-8 md:pb-16">
            <div className="mb-8 max-w-[1280px] mx-auto flex items-center justify-between gap-3 min-h-[56px] md:min-h-[64px]">
          <a href="#" aria-label="Página inicial FACILITE" className="flex items-center gap-3">
            <img
                  src={company.assets.logo}
              alt="Logotipo FACILITE Proteção Veicular"
                  className="h-12 md:h-14 w-auto"
              loading="eager"
              decoding="async"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = "/logoreta.png";
                  }}
            />
          </a>
          <Button
            asChild
            variant="cta"
            aria-label="Fazer cotação pelo WhatsApp"
                className="hover-scale h-12 md:h-14 px-6 md:px-10 text-sm md:text-lg md:rounded-lg leading-none mx-auto md:mx-0"
          >
                <a href={company.urls.whatsappCTA} target="_blank" rel="noopener noreferrer">
              Faça sua cotação
            </a>
          </Button>
        </div>
            
            <div className="hero-card mx-auto max-w-[1280px] sm:px-6 text-foreground w-full overflow-hidden md:overflow-visible">
              <div className="mx-auto max-w-[1120px] grid gap-3 md:gap-6 lg:gap-8 md:grid-cols-2 items-center text-left">
              <div>
                <h1 className="font-roboto text-[26px] sm:text-[30px] md:text-5xl font-bold leading-snug tracking-tight text-primary whitespace-nowrap text-center md:text-left">
                  <span className="inline">Facilite,</span>
                  <span className="inline"> e fique seguro.</span>
              </h1>
                <ul className="mt-6 space-y-3 pl-3.5 md:pl-1" aria-label="Benefícios principais">
                  {[
                    "Cobertura completa, carros e motos",
                    "Assistência 24h em todo o Brasil",
                    "Proteção sem burocracia",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <CheckCircle2 className="text-accent shrink-0" aria-hidden size={20} />
                      <span className="text-sm md:text-lg text-foreground leading-snug whitespace-nowrap">{item}</span>
                  </li>
                ))}
              </ul>
                <div className="mt-6 md:mt-8 flex flex-wrap items-center justify-center md:justify-start gap-4">
                  <Button
                    asChild
                    size="lg"
                    variant="cta"
                    aria-label="Fazer cotação pelo WhatsApp"
                    className="hover-scale h-12 md:h-14 px-6 md:px-8 text-sm md:text-lg"
                  >
                    <a href={company.urls.whatsappCTA} target="_blank" rel="noopener noreferrer">
                      Clique e faça sua cotação
                    </a>
                  </Button>
                </div>
              </div>
              <div className="relative z-10 flex justify-center md:justify-end">
                <img
                  src={company.assets.hero}
                  alt="Carro e moto - FACILITE Proteção Veicular"
                  className="pointer-events-none select-none h-auto w-full max-w-xl md:max-w-2xl lg:max-w-3xl -translate-y-1 md:translate-y-4 lg:translate-y-6 md:-translate-x-10 lg:-translate-x-14 scale-[1.38] md:scale-[1.5] -mb-10 md:-mb-16 z-10 object-contain"
                  loading="eager"
                    decoding="async"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = "/carrofundo.png";
                  }}
                  />
                </div>
              </div>
            </div>
            {/* Selo na faixa azul: mobile centralizado, desktop alinhado ao início */}
            <div className="mt-4 md:mt-6 max-w-[1120px] mx-auto flex items-center justify-center md:justify-start gap-3 md:gap-4 text-primary-foreground pl-0 md:pl-4">
              <img
                src={company.assets.susepBadge}
                alt="Selo SUSEP - FACILITE Proteção Veicular"
                className="h-12 w-auto md:h-16"
                loading="lazy"
                decoding="async"
              />
              <div className="text-center md:text-left text-sm md:text-lg leading-tight">
                <span className="block">Responsabilidade com você.</span>
                <span className="block">Regulamentado pela SUSEP.</span>
              </div>
            </div>
          </div>
        </section>

        {/* Coberturas */}
        <section className="bg-background">
          <div className="container pt-6 pb-6 md:py-14">
            <div className="grid grid-cols-4 gap-4 sm:grid-cols-5 md:grid-cols-5">
              {features.map(({ iconSrc, label }) => {
                const mobileColStart =
                  label === "Carro reserva"
                    ? "col-start-2 sm:col-start-auto md:col-start-auto"
                    : label === "Furto/Roubo"
                      ? "col-start-3 sm:col-start-auto md:col-start-auto"
                      : "";
                return (
                <div key={label} className={`flex flex-col items-center text-center gap-1.5 ${mobileColStart}`}>
                  <img src={iconSrc} alt={label} className="h-9 w-9 md:h-14 md:w-14 object-contain icon-shadow-soft" />
                  <span className="text-[11px] md:text-sm font-semibold text-primary leading-tight">{label}</span>
                </div>
              );})}
            </div>
          </div>
        </section>

        {/* Faixa de confiança (barra dentro do container) */}
        <section className="bg-background">
          <div className="container pb-6 md:pb-16">
            <div className="mx-auto w-full max-w-[1120px] rounded-2xl border border-border bg-secondary px-6 py-4 md:px-10 md:py-6 shadow-soft">
              <div className="flex items-center justify-center gap-2 md:gap-1 lg:gap-1 text-center">
                <img src="/iconecarro.png" alt="Proteção veicular" className="h-10 w-10 md:h-20 md:w-20 object-contain" />
                <p className="text-primary leading-snug">
                  <span className="block font-bold text-base whitespace-nowrap md:inline md:text-2xl md:whitespace-nowrap">Não é só proteção, é confiança.</span>
                  <span className="block text-sm md:inline md:text-2xl md:ml-2">E disso, a gente entende.</span>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Seção: Por que a Facilite é referência (após ícones e faixa) */}
        <section className="bg-background">
          <div className="container pt-2 pb-8 md:py-12">
              <div className="grid items-center gap-6 md:grid-cols-2 -mt-2 md:mt-0">
              {/* Texto */}
              <div className="max-w-[560px] md:-mt-4">
                <h2 className="font-roboto text-2xl md:text-4xl font-bold text-primary mb-4 md:mb-6 text-center md:text-left">
                  Por que a Facilite é referência em proteção veicular?
                </h2>
                <ul className="space-y-3 md:space-y-3 max-w-xl mx-auto md:mx-0">
                  {[
                    "Cobertura completa para carros e motos",
                    "Assistência 24h em todo o Brasil",
                    "Proteção contra roubo, furto, incêndio e colisão",
                    "Sem análise de perfil e sem burocracia",
                    "Rede ampla de oficinas credenciadas",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 text-accent shrink-0" aria-hidden size={20} />
                      <span className="text-base md:text-lg text-primary leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
                {/* CTA azul: abaixo dos bullets (mobile e desktop) */}
                <div className="mt-4 md:mt-6">
                  <Button
                    asChild
                    size="lg"
                    variant="default"
                    aria-label="Fazer cotação pelo WhatsApp"
                    className="hover-scale h-12 md:h-14 px-6 md:px-8 text-sm md:text-lg w-full md:w-auto"
                  >
                    <a href={company.urls.whatsappCTA} target="_blank" rel="noopener noreferrer">
                      Clique e faça sua cotação
                    </a>
                  </Button>
                </div>
              </div>

              {/* Imagem com sobreposição ao fundo laranja */}
              <div className="flex flex-col items-center mt-8 md:mt-6">
                <div className="relative rounded-2xl bg-accent overflow-visible h-[230px] md:h-[320px] w-full shadow-soft">
                {/* Logo de fundo com baixa opacidade */}
                <img
                  src="/logobranca.png"
                  alt=""
                  aria-hidden
                  className="absolute inset-0 m-auto h-[60%] w-auto opacity-10 pointer-events-none select-none"
                />
                <img
                  src="/funcionario.png"
                  alt="Colaborador FACILITE"
                  className="absolute inset-x-0 mx-auto bottom-0 h-[118%] md:h-[126%] w-auto object-contain drop-shadow-xl z-10"
                  loading="lazy"
                  decoding="async"
                />
                </div>
                
                {/* Card transparente com o ponto "Atendimento rápido e humanizado" (link para WhatsApp) */}
                <a
                  href={company.urls.whatsappCTA}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Iniciar atendimento rápido e humanizado pelo WhatsApp"
                  className="mt-4 block w-full rounded-2xl border border-border bg-transparent px-5 py-3 hover:shadow-elevated shadow-soft transition-shadow transition-colors hover:bg-secondary/60 cursor-pointer hover-scale"
                >
                  <div className="flex items-center justify-center gap-2 text-center">
                    <CheckCircle2 className="text-accent" aria-hidden size={22} />
                    <span className="text-primary text-sm md:text-base">Atendimento rápido e humanizado</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border bg-background">
          <div className="container grid gap-8 md:gap-12 pt-4 pb-8 md:pt-4 md:pb-10 md:grid-cols-2 md:items-center">
          {/* Coluna: Identidade e dados da empresa */}
            <div className="md:space-y-1 md:pr-8">
            <img
              src="/logolaranja.png"
              alt="Logotipo FACILITE Proteção Veicular"
              className="h-10 md:h-12 w-auto"
              loading="lazy"
              decoding="async"
            />
              {/* Telefones (logo abaixo da logo) - apenas mobile */}
              <div className="mt-6 flex flex-col items-start gap-1 md:hidden">
                <p className="text-sm leading-tight text-foreground">
                  <span className="font-semibold text-primary">{company.phones.assistance24h.label}:</span> {company.phones.assistance24h.display}
                </p>
                <p className="text-sm leading-tight text-foreground">
                  <span className="font-semibold text-primary">Financeiro:</span> {company.phones.financeAndBroadcast.display}
                </p>
                <p className="text-sm leading-tight text-foreground">
                  <span className="font-semibold text-primary">{company.phones.salesWhatsApp.label}:</span> {company.phones.salesWhatsApp.display}
                </p>
              </div>
              <p className="mt-8 md:mt-12 text-sm leading-tight text-foreground">
              <span className="font-semibold text-primary">Empresa:</span> {company.name}
            </p>
            <p className="text-sm leading-tight text-foreground">
              <span className="font-semibold text-primary">CNPJ:</span> {company.cnpj}
            </p>
            <p className="text-sm leading-tight text-foreground">
              <span className="font-semibold text-primary">Endereço:</span> {company.address}
            </p>
          </div>
          {/* Coluna: Contatos + CTA */}
            <div className="hidden md:flex flex-col items-start md:items-end gap-1.5 md:pl-8">
            <p className="text-sm leading-tight text-foreground">
              <span className="font-semibold text-primary">{company.phones.assistance24h.label}:</span> {company.phones.assistance24h.display}
            </p>
            <p className="text-sm leading-tight text-foreground">
              <span className="font-semibold text-primary">Financeiro:</span> {company.phones.financeAndBroadcast.display}
            </p>
            <p className="text-sm leading-tight text-foreground">
              <span className="font-semibold text-primary">{company.phones.salesWhatsApp.label}:</span> {company.phones.salesWhatsApp.display}
            </p>
          </div>
        </div>
        <div className="pb-8 text-center text-xs text-primary/80">
          <span>© {new Date().getFullYear()} FACILITE Proteção Veicular.</span>
          <span className="block md:inline"> Todos os direitos reservados.</span>
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
