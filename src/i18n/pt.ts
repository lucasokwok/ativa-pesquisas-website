import type { TranslationSchema } from "./types";

export const pt: TranslationSchema = {
  common: {
    language: {
      pt: "PT",
      en: "EN",
    },
    buttons: {
      home: "Início",
      about: "Sobre",
      technology: "Tecnologia",
      applications: "Aplicações",
      projects: "Projetos",
      contact: "Contato",
      sendEmail: "Enviar e-mail",
      backHome: "Voltar para o início",
    },
  },
  header: {
    nav: {
      home: "Início",
      about: "Sobre",
      technology: "Tecnologia",
      applications: "Aplicações",
      projects: "Projetos",
      contact: "Contato",
    },
    languageSwitcherLabel: "Alterar idioma",
  },
  footer: {
    company: "Ativa Pesquisas",
    emailLabel: "E-mail",
    email: "contato@ativapesquisas.com.br",
    rights: "Todos os direitos reservados.",
  },
  pages: {
    home: {
      hero: {
        eyebrow: "Ativa Pesquisas",
        title:
          "Mitigação de biocorrosão em concreto com foco em durabilidade sustentável",
        description:
          "Pesquisa e desenvolvimento de composições especiais com baixa porosidade, alta resistência mecânica e neutralização microbiológica em ambientes agressivos.",
        ctaLabel: "Conheça a empresa",
        images: {
          hero01Alt: "Laboratório e caracterização de materiais",
          hero02Alt: "Estruturas de concreto em ambiente agressivo",
          hero03Alt: "Aplicação e desempenho em durabilidade sustentável",
        },
      },
      approach: {
        eyebrow: "(Edite) Nossa abordagem",
        title: "(Edite) Materiais e composições para ambientes agressivos",
        description:
          "(Edite este texto) Explique em 2–3 linhas o que vocês fazem, como atuam e qual diferencial técnico.",
        bullets: [
          "(Edite) Baixa porosidade",
          "(Edite) Neutralização microbiológica",
          "(Edite) Durabilidade e sustentabilidade",
        ],
        imagePlaceholder: "IMAGEM AQUI (substitua por um <img />)",
        imageCaption: "(Opcional) legenda/descrição curta da imagem.",
      },
      technology: {
        title: "(Edite) Tecnologia e capacidades",
        description:
          "(Edite) Uma frase explicando seu laboratório, métodos, validações, etc.",
        cards: [
          {
            title: "(Edite) Caracterização",
            description: "(Edite) SEM, DRX, Raman...",
          },
          {
            title: "(Edite) Desenvolvimento",
            description: "(Edite) Ligantes, aditivos...",
          },
          {
            title: "(Edite) Ensaios",
            description: "(Edite) Durabilidade, resistência...",
          },
        ],
      },
      applications: {
        title: "(Edite) Aplicações",
        description:
          "(Edite) Cite setores/ambientes onde as soluções se aplicam.",
        featured: {
          placeholder: "IMAGEM 1 (substitua por <img />)",
          caption: "(Edite) Título/legenda da aplicação.",
        },
        secondary: [
          {
            placeholder: "IMAGEM 2",
            caption: "(Edite) Legenda.",
          },
          {
            placeholder: "IMAGEM 3",
            caption: "(Edite) Legenda.",
          },
        ],
      },
      cta: {
        title: "(Edite) Vamos falar sobre seu projeto?",
        description:
          "(Edite) Convite curto para contato: diagnóstico, proposta, parceria, etc.",
        primaryButton: "Entrar em contato",
        secondaryButton: "Ver projetos",
      },
    },
    about: {
      title: "Sobre",
      subtitle: "Conheça a Ativa Pesquisas",
    },
    technology: {
      title: "Tecnologia",
      subtitle: "Tecnologia e capacidades",
    },
    applications: {
      title: "Aplicações",
      subtitle: "Aplicações das soluções",
    },
    projects: {
      title: "Projetos",
      subtitle: "Projetos e iniciativas",
    },
    contact: {
      title: "Contato",
      subtitle: "Fale com a Ativa Pesquisas",
    },
    notFound: {
      title: "Página não encontrada",
      description: "A página que você tentou acessar não existe.",
      buttonLabel: "Voltar para o início",
    },
  },
};
