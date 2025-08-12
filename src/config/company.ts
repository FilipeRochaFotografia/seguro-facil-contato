export type PhoneInfo = {
  label: string;
  display: string;
  tel: string; // digits-only for tel: links
};

export type CompanyConfig = {
  name: string;
  cnpj: string;
  address: string;
  phones: {
    assistance24h: PhoneInfo;
    financeAndBroadcast: PhoneInfo;
    salesWhatsApp: PhoneInfo;
  };
  urls: {
    site: string;
    whatsappCTA: string;
    canonical: string;
  };
  assets: {
    logo: string;
    hero: string;
    susepBadge: string;
  };
};

const digits = (value: string) => value.replace(/\D/g, "");

export const company: CompanyConfig = {
  name: "FACILITE Proteção Veicular",
  cnpj: "51.012.452/0001-24",
  address: "Rua Jose Bonifacio, 26 - Centro, Itamaraju - BA",
  phones: {
    assistance24h: {
      label: "Assistência 24h",
      display: "0800 591 5328",
      tel: digits("0800 591 5328"),
    },
    financeAndBroadcast: {
      label: "Financeiro / Disparos",
      display: "73 973 8803-0570",
      // Number provided pelo cliente (mantido exatamente como enviado)
      tel: digits("73 973 8803-0570"),
    },
    salesWhatsApp: {
      label: "WhatsApp para cotação",
      display: "+55 73 9139-5417",
      tel: digits("+55 73 9139-5417"),
    },
  },
  urls: {
    site: "https://facilite.example/", // ajuste quando o domínio estiver definido
    whatsappCTA:
      "https://wa.me/557391395417?text=Ol%C3%A1%2C%20quero%20uma%20cota%C3%A7%C3%A3o%20na%20FACILITE.",
    canonical: "https://facilite.example/",
  },
  assets: {
    logo: "/logoreta.png",
    hero: "/carrofundo.png",
    susepBadge: "/selofacilite.png",
  },
};

export type FeatureItem = {
  label: string;
  iconSrc: string;
};

export const features: FeatureItem[] = [
  { iconSrc: "/coberturaemtodoBrasil.png", label: "Cobertura em todo o Brasil" },
  { iconSrc: "/assistencia.png", label: "Assistência" },
  { iconSrc: "/perda total.png", label: "Perda total" },
  { iconSrc: "/guincho.png", label: "Guincho" },
  { iconSrc: "/coberturaparavidros.png", label: "Cobertura para vidros" },
  { iconSrc: "/colisao.png", label: "Colisão" },
  { iconSrc: "/fenomenosnaturais.png", label: "Fenômenos naturais" },
  { iconSrc: "/incendio.png", label: "Incêndio" },
  { iconSrc: "/carroreserva.png", label: "Carro reserva" },
  { iconSrc: "/furtoroubo.png", label: "Furto/Roubo" },
];


