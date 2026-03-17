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
      hero: {
        eyebrow: "Sobre",
        title: "(Edite) A história da Ativa Pesquisas",
        description:
          "(Edite) Texto introdutório apresentando a empresa, sua origem e propósito.",
        mainPlaceholder: "IMAGEM PRINCIPAL / HISTÓRIA",
        trajectoryEyebrow: "(Edite)",
        trajectoryTitle: "(Edite) Nossa trajetória",
        trajectoryDescription:
          "(Edite) Texto curto sobre a origem e evolução da Ativa Pesquisas.",
        purposeEyebrow: "(Edite)",
        purposeTitle: "(Edite) Propósito",
        purposeDescription:
          "(Edite) Texto curto sobre missão, visão ou direcionamento estratégico.",
      },
      founders: {
        eyebrow: "Fundadores",
        title: "(Edite) Liderança e experiência técnica",
        description: "(Edite) Texto curto apresentando os três fundadores.",
        items: [
          {
            name: "(Edite) Dr. Fernando S. Ortega",
            role: "(Edite) Co-fundador",
            bio: "(Edite) Texto curto sobre trajetória, formação, experiência e contribuição para a Ativa Pesquisas.",
            linkedinLabel: "LinkedIn",
            linkedinUrl: "#",
            photoPlaceholder: "FOTO DO FUNDADOR",
          },
          {
            name: "(Edite) Dra. Ivone Regina de Oliveira",
            role: "(Edite) Co-fundadora",
            bio: "(Edite) Texto curto sobre trajetória, formação, experiência e contribuição para a Ativa Pesquisas.",
            linkedinLabel: "LinkedIn",
            linkedinUrl: "#",
            photoPlaceholder: "FOTO DO FUNDADOR",
          },
          {
            name: "(Edite) Me. Indira Teixeira Oliveira",
            role: "(Edite) Co-fundadora",
            bio: "(Edite) Texto curto sobre trajetória, formação, experiência e contribuição para a Ativa Pesquisas.",
            linkedinLabel: "LinkedIn",
            linkedinUrl: "#",
            photoPlaceholder: "FOTO DO FUNDADOR",
          },
        ],
      },
      timeline: {
        eyebrow: "Linha do tempo",
        title: "(Edite) Principais marcos da trajetória",
        description:
          "(Edite) Texto curto contextualizando a evolução da empresa.",
        items: [
          {
            year: "(Edite)",
            title: "(Edite) Origem da iniciativa",
            description:
              "(Edite) Texto curto sobre o início da pesquisa, motivação e contexto.",
          },
          {
            year: "(Edite)",
            title: "(Edite) Consolidação técnica",
            description:
              "(Edite) Texto curto sobre desenvolvimento, validação ou avanço institucional.",
          },
          {
            year: "(Edite)",
            title: "(Edite) Expansão e aplicações",
            description:
              "(Edite) Texto curto sobre amadurecimento do projeto e evolução da atuação.",
          },
        ],
      },
      logoInspiration: {
        eyebrow: "Identidade visual",
        title: "(Edite) A logo da Ativa e sua inspiração no Arco da Inovação",
        description:
          "(Edite) Texto principal explicando que a identidade visual da Ativa foi inspirada no Arco da Inovação, em São José dos Campos, e como isso se conecta com pesquisa, tecnologia e futuro.",
        cards: [
          {
            title: "(Edite) Inspiração arquitetônica",
            description:
              "(Edite) Texto curto sobre a inspiração da marca no Arco da Inovação.",
          },
          {
            title: "(Edite) Conexão com a cidade",
            description:
              "(Edite) Texto curto sobre São José dos Campos como sede e referência tecnológica.",
          },
          {
            title: "(Edite) Simbologia da marca",
            description:
              "(Edite) Texto curto sobre forma, conceito e significado visual da logo.",
          },
        ],
        logoPlaceholder: "LOGO DA ATIVA",
        logoCaption: "(Edite) Legenda sobre a marca.",
        landmarkPlaceholder: "FOTO DO ARCO DA INOVAÇÃO",
        landmarkCaption: "(Edite) Legenda sobre a inspiração arquitetônica.",
      },
      city: {
        eyebrow: "Cidade-sede",
        title: "(Edite) São José dos Campos como parte da identidade da Ativa",
        description:
          "(Edite) Texto principal sobre São José dos Campos ser uma das cidades mais tecnológicas do Brasil e como esse contexto fortalece a imagem e o posicionamento da Ativa Pesquisas.",
        cards: [
          {
            title: "(Edite) Cidade-sede",
            description:
              "(Edite) Texto curto sobre São José dos Campos e sua relevância.",
          },
          {
            title: "(Edite) Inovação e tecnologia",
            description:
              "(Edite) Texto curto sobre o ambiente tecnológico da cidade.",
          },
          {
            title: "(Edite) Identidade regional",
            description:
              "(Edite) Texto curto sobre o vínculo da Ativa com sua origem local.",
          },
        ],
        imagePlaceholder: "IMAGEM / SÃO JOSÉ DOS CAMPOS",
        imageCaption: "(Edite) Legenda opcional sobre a cidade-sede.",
      },
      values: {
        eyebrow: "Identidade",
        title: "(Edite) Valores que orientam a Ativa Pesquisas",
        description:
          "(Edite) Texto breve sobre os princípios que sustentam a atuação da empresa.",
        cards: [
          {
            title: "(Edite) Pesquisa aplicada",
            description: "(Edite) Texto curto.",
          },
          {
            title: "(Edite) Rigor técnico",
            description: "(Edite) Texto curto.",
          },
          {
            title: "(Edite) Sustentabilidade",
            description: "(Edite) Texto curto.",
          },
        ],
        imagePlaceholder: "IMAGEM / INSTITUIÇÃO / PESQUISA",
        imageCaption: "(Edite) Legenda opcional.",
      },
      partners: {
        eyebrow: "Instituições parceiras",
        title: "(Edite) Rede institucional e colaboração em pesquisa",
        description:
          "(Edite) Texto curto para introduzir o carrossel de instituições parceiras.",
      },
      cta: {
        title: "(Edite) Quer conhecer melhor nossa trajetória?",
        description:
          "(Edite) Texto curto de encerramento e convite para contato.",
        primaryButton: "Entrar em contato",
        secondaryButton: "Ver projetos",
      },
    },
    technology: {
      hero: {
        eyebrow: "Tecnologia",
        title: "(Edite) Tecnologia e capacidades da Ativa Pesquisas",
        description: "(Edite) Texto introdutório da página de tecnologia.",
        mainPlaceholder: "IMAGEM / BLOCO PRINCIPAL",
        block01Placeholder: "BLOCO 1",
        block02Placeholder: "BLOCO 2",
      },
      capabilities: {
        eyebrow: "Capacidades",
        title: "(Edite) Competências e recursos tecnológicos",
        description: "(Edite) Texto curto de introdução da seção.",
        cards: [
          {
            title: "(Edite) Caracterização",
            description: "(Edite) Descrição curta da capacidade técnica.",
          },
          {
            title: "(Edite) Formulação",
            description: "(Edite) Descrição curta da capacidade técnica.",
          },
          {
            title: "(Edite) Ensaios",
            description: "(Edite) Descrição curta da capacidade técnica.",
          },
          {
            title: "(Edite) Validação",
            description: "(Edite) Descrição curta da capacidade técnica.",
          },
        ],
      },
      process: {
        eyebrow: "Processo",
        title: "(Edite) Como a tecnologia é aplicada",
        description: "(Edite) Texto curto explicando o fluxo de atuação.",
        steps: [
          {
            step: "01",
            title: "(Edite) Etapa 1",
            description: "(Edite) Descrição curta da etapa.",
          },
          {
            step: "02",
            title: "(Edite) Etapa 2",
            description: "(Edite) Descrição curta da etapa.",
          },
          {
            step: "03",
            title: "(Edite) Etapa 3",
            description: "(Edite) Descrição curta da etapa.",
          },
          {
            step: "04",
            title: "(Edite) Etapa 4",
            description: "(Edite) Descrição curta da etapa.",
          },
        ],
      },
      structure: {
        eyebrow: "Estrutura",
        title: "(Edite) Laboratório, métodos e desenvolvimento",
        description: "(Edite) Texto breve sobre estrutura e operação técnica.",
        cards: [
          {
            title: "(Edite) Infraestrutura",
            description: "(Edite) Descrição curta.",
          },
          {
            title: "(Edite) Métodos",
            description: "(Edite) Descrição curta.",
          },
          {
            title: "(Edite) Pesquisa aplicada",
            description: "(Edite) Descrição curta.",
          },
        ],
        imagePlaceholder: "IMAGEM / ESTRUTURA TÉCNICA",
        imageCaption: "(Edite) Legenda opcional.",
      },
      indicators: {
        eyebrow: "Indicadores",
        title: "(Edite) Destaques da atuação tecnológica",
        description: "(Edite) Texto curto para contextualizar os destaques.",
        items: [
          {
            label: "(Edite)",
            value: "00",
            description: "(Edite) Indicador ou marco técnico",
          },
          {
            label: "(Edite)",
            value: "00",
            description: "(Edite) Indicador ou marco técnico",
          },
          {
            label: "(Edite)",
            value: "00",
            description: "(Edite) Indicador ou marco técnico",
          },
        ],
      },
      cta: {
        title: "(Edite) Quer entender melhor nossa tecnologia?",
        description:
          "(Edite) Texto curto de chamada para contato ou aprofundamento.",
        primaryButton: "Entrar em contato",
        secondaryButton: "Ver projetos",
      },
    },
    applications: {
      hero: {
        eyebrow: "Aplicações",
        title:
          "(Edite) Aplicações das soluções desenvolvidas pela Ativa Pesquisas",
        description:
          "(Edite) Texto introdutório sobre os contextos de uso, setores e ambientes onde a tecnologia pode ser aplicada.",
        featured: {
          placeholder: "IMAGEM PRINCIPAL / APLICAÇÃO EM DESTAQUE",
          caption: "(Edite) Legenda ou destaque principal da aplicação.",
        },
        secondary: [
          {
            placeholder: "IMAGEM SECUNDÁRIA 01",
            caption: "(Edite) Legenda curta.",
          },
          {
            placeholder: "IMAGEM SECUNDÁRIA 02",
            caption: "(Edite) Legenda curta.",
          },
        ],
      },
      fronts: {
        eyebrow: "Frentes de aplicação",
        title: "(Edite) Setores e ambientes de atuação",
        description:
          "(Edite) Texto curto explicando a amplitude das aplicações.",
        cards: [
          {
            placeholder: "IMAGEM",
            title: "(Edite) Estações de tratamento",
            description:
              "(Edite) Texto curto sobre a aplicação em estruturas expostas a ambientes agressivos.",
          },
          {
            placeholder: "IMAGEM",
            title: "(Edite) Infraestrutura industrial",
            description:
              "(Edite) Texto curto sobre a aplicação em estruturas e instalações técnicas.",
          },
          {
            placeholder: "IMAGEM",
            title: "(Edite) Ambientes com ataque químico",
            description:
              "(Edite) Texto curto sobre a aplicação em áreas sujeitas à degradação acelerada.",
          },
          {
            placeholder: "IMAGEM",
            title: "(Edite) Sistemas de armazenamento",
            description:
              "(Edite) Texto curto sobre a aplicação em reservatórios, contenções ou superfícies especiais.",
          },
        ],
      },
      gallery: {
        eyebrow: "Galeria",
        title: "(Edite) Exemplos visuais de aplicações",
        description:
          "(Edite) Texto curto para introduzir a galeria de imagens e contextos de uso.",
        items: [
          {
            placeholder: "IMAGEM",
            title: "(Edite) Aplicação 01",
            description: "(Edite) Legenda curta da imagem.",
          },
          {
            placeholder: "IMAGEM",
            title: "(Edite) Aplicação 02",
            description: "(Edite) Legenda curta da imagem.",
          },
          {
            placeholder: "IMAGEM",
            title: "(Edite) Aplicação 03",
            description: "(Edite) Legenda curta da imagem.",
          },
          {
            placeholder: "IMAGEM",
            title: "(Edite) Aplicação 04",
            description: "(Edite) Legenda curta da imagem.",
          },
          {
            placeholder: "IMAGEM",
            title: "(Edite) Aplicação 05",
            description: "(Edite) Legenda curta da imagem.",
          },
        ],
      },
      contexts: {
        eyebrow: "Contextos de uso",
        title: "(Edite) Aplicações em diferentes cenários técnicos",
        description:
          "(Edite) Texto breve sobre adaptação da tecnologia a diferentes demandas e ambientes.",
        cards: [
          {
            title: "(Edite) Saneamento",
            description: "(Edite) Texto curto sobre essa frente de aplicação.",
          },
          {
            title: "(Edite) Indústria",
            description: "(Edite) Texto curto sobre essa frente de aplicação.",
          },
          {
            title: "(Edite) Armazenamento",
            description: "(Edite) Texto curto sobre essa frente de aplicação.",
          },
          {
            title: "(Edite) Estruturas especiais",
            description: "(Edite) Texto curto sobre essa frente de aplicação.",
          },
        ],
        imagePlaceholder: "IMAGEM / APLICAÇÃO TÉCNICA",
        imageCaption: "(Edite) Legenda opcional da imagem.",
      },
      extra: {
        items: [
          {
            placeholder: "IMAGEM",
            title: "(Edite) Aplicação complementar 01",
            description: "(Edite) Texto curto.",
          },
          {
            placeholder: "IMAGEM",
            title: "(Edite) Aplicação complementar 02",
            description: "(Edite) Texto curto.",
          },
          {
            placeholder: "IMAGEM",
            title: "(Edite) Aplicação complementar 03",
            description: "(Edite) Texto curto.",
          },
        ],
      },
      cta: {
        title: "(Edite) Quer avaliar a aplicação no seu contexto?",
        description:
          "(Edite) Texto curto de encerramento e convite para contato ou análise técnica.",
        primaryButton: "Entrar em contato",
        secondaryButton: "Ver tecnologia",
      },
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
