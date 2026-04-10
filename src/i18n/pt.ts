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
        title: "Protegendo estruturas com soluções ATIVAs",
        description:
          "Pesquisa e desenvolvimento de aplicações especiais para mitigação da biocorrosão em concreto, com foco em durabilidade, desempenho e sustentabilidade em ambientes agressivos.",
        ctaLabel: "Conheça a empresa",
        images: {
          hero01Alt: "Laboratório e caracterização de materiais",
          hero02Alt: "Estruturas de concreto em ambiente agressivo",
          hero03Alt: "Pesquisa aplicada para durabilidade sustentável",
        },
      },
      approach: {
        eyebrow: "Nossa abordagem",
        title: "Materiais e composições para ambientes agressivos",
        description:
          "A Ativa desenvolve composições especiais e realiza caracterização física, química e microbiológica para criar soluções avançadas de mitigação da biocorrosão em estruturas de concreto expostas a condições severas.",
        bullets: [
          "Baixa porosidade e alta resistência mecânica",
          "Mitigação da ação microbiológica",
          "Durabilidade com base científica e aplicada",
        ],
        imagePlaceholder:
          "Imagem recomendada: bancada de pesquisa, amostras cimentícias ou ensaio laboratorial",
        imageCaption:
          "Pesquisa aplicada ao desenvolvimento de composições de alto desempenho.",
      },
      technology: {
        title: "Tecnologia e capacidades",
        description:
          "A atuação da Ativa integra desenvolvimento de materiais, caracterização avançada e validação experimental para aplicação em contextos de alta exigência técnica.",
        cards: [
          {
            title: "Caracterização",
            description:
              "Análises físicas, químicas e microbiológicas para compreender o desempenho dos materiais em ambiente agressivo.",
          },
          {
            title: "Desenvolvimento",
            description:
              "Formulação de composições especiais com ligantes alternativos e uso de passivos ecológicos.",
          },
          {
            title: "Ensaios",
            description:
              "Avaliação de resistência mecânica, porosidade, durabilidade e interação com microrganismos.",
          },
        ],
      },
      applications: {
        title: "Aplicações",
        description:
          "As soluções da Ativa são direcionadas a estruturas sujeitas à deterioração microbiológica, química e operacional em diferentes setores.",
        featured: {
          placeholder:
            "Imagem recomendada: estação de tratamento de esgoto ou estrutura industrial",
          caption: "Aplicações em ambientes sujeitos à biocorrosão.",
        },
        secondary: [
          {
            placeholder:
              "Imagem recomendada: corpos de prova ou matrizes cimentícias",
            caption: "Validação experimental em materiais cimentícios.",
          },
          {
            placeholder:
              "Imagem recomendada: concreto em operação ou ambiente industrial úmido",
            caption: "Durabilidade em contexto real de uso.",
          },
        ],
      },
      cta: {
        title: "Vamos falar sobre seu projeto?",
        description:
          "Entre em contato para discutir demandas técnicas, desenvolvimento de soluções especiais, diagnóstico ou parceria em pesquisa aplicada.",
        primaryButton: "Entrar em contato",
        secondaryButton: "Ver projetos",
      },
    },
    about: {
      hero: {
        eyebrow: "Sobre",
        title: "A trajetória da Ativa Pesquisas",
        description:
          "A Ativa Pesquisas nasceu da convergência entre ciência, inovação e aplicação prática, com foco no desenvolvimento de soluções para mitigação da biocorrosão em estruturas de concreto e na ampliação da durabilidade de materiais em ambientes agressivos.",
        mainPlaceholder:
          "Imagem recomendada: equipe, laboratório ou contexto institucional da empresa",
        trajectoryEyebrow: "Trajetória",
        trajectoryTitle:
          "Pesquisa aplicada que evoluiu para atuação institucional",
        trajectoryDescription:
          "A empresa tem origem em uma trajetória acadêmica e tecnológica voltada ao estudo de concretos de alto desempenho e ao enfrentamento da degradação causada por microrganismos em diferentes contextos estruturais.",
        purposeEyebrow: "Propósito",
        purposeTitle: "Durabilidade, inovação e sustentabilidade",
        purposeDescription:
          "O propósito da Ativa é transformar conhecimento técnico-científico em soluções aplicáveis, duráveis e sustentáveis para estruturas expostas a ambientes severos.",
      },
      founders: {
        eyebrow: "Fundadores",
        title: "Liderança e experiência técnica",
        description:
          "A Ativa reúne uma base técnica multidisciplinar com forte atuação em pesquisa, desenvolvimento e caracterização de materiais.",
        items: [
          {
            name: "Dr. Fernando S. Ortega",
            role: "Co-fundador",
            bio: "Atua na liderança técnico-científica da Ativa, contribuindo com a visão estratégica de desenvolvimento de composições especiais, validação experimental e aplicação de soluções voltadas à durabilidade de estruturas em ambientes agressivos.",
            linkedinLabel: "LinkedIn",
            linkedinUrl: "#",
            photoPlaceholder:
              "Foto recomendada: retrato profissional do fundador",
          },
          {
            name: "Dra. Ivone Regina de Oliveira",
            role: "Co-fundadora",
            bio: "Contribui com sua experiência em pesquisa aplicada, materiais e processos de caracterização, integrando rigor técnico, visão científica e direcionamento institucional para o desenvolvimento das soluções da Ativa.",
            linkedinLabel: "LinkedIn",
            linkedinUrl: "#",
            photoPlaceholder:
              "Foto recomendada: retrato profissional da fundadora",
          },
          {
            name: "Me. Indira Teixeira Oliveira",
            role: "Co-fundadora",
            bio: "Atua no fortalecimento da atuação técnico-institucional da Ativa, apoiando a consolidação da empresa como ponte entre conhecimento acadêmico, desenvolvimento tecnológico e aplicação prática.",
            linkedinLabel: "LinkedIn",
            linkedinUrl: "#",
            photoPlaceholder:
              "Foto recomendada: retrato profissional da fundadora",
          },
        ],
      },
      timeline: {
        eyebrow: "Linha do tempo",
        title: "Principais marcos da trajetória",
        description:
          "A evolução da Ativa é marcada pela conexão entre pesquisa, validação experimental e aplicação em demandas reais.",
        items: [
          {
            year: "Origem",
            title: "Início da pesquisa aplicada",
            description:
              "O trabalho começou a partir de estudos voltados ao desenvolvimento de materiais com maior resistência e durabilidade em ambientes sujeitos à degradação microbiológica.",
          },
          {
            year: "Consolidação",
            title: "Estruturação técnica da proposta",
            description:
              "Com o amadurecimento dos estudos, a atuação passou a integrar formulação de composições especiais, ensaios e caracterização avançada.",
          },
          {
            year: "Expansão",
            title: "Ampliação das aplicações",
            description:
              "A Ativa passou a direcionar sua expertise para contextos industriais, saneamento, armazenamento e outras frentes de alta exigência técnica.",
          },
        ],
      },
      logoInspiration: {
        eyebrow: "Identidade visual",
        title: "A marca da Ativa e sua conexão com inovação",
        description:
          "A identidade visual da Ativa comunica tecnologia, pesquisa aplicada e visão de futuro. Sua construção busca refletir solidez, modernidade e conexão com um ecossistema de inovação alinhado à atuação técnica da empresa.",
        cards: [
          {
            title: "Inspiração arquitetônica",
            description:
              "A marca dialoga com formas e referências associadas à inovação, à estrutura e à evolução tecnológica.",
          },
          {
            title: "Conexão com a cidade",
            description:
              "São José dos Campos reforça esse posicionamento ao representar um ambiente reconhecido por tecnologia, pesquisa e desenvolvimento.",
          },
          {
            title: "Simbologia da marca",
            description:
              "A linguagem visual da Ativa remete a movimento, robustez e construção de soluções com base técnica.",
          },
        ],
        logoPlaceholder:
          "Imagem recomendada: logo da Ativa em aplicação institucional",
        logoCaption: "A marca traduz tecnologia, pesquisa e solidez.",
        landmarkPlaceholder:
          "Imagem recomendada: referência urbana ou arquitetônica de São José dos Campos",
        landmarkCaption:
          "O contexto da cidade fortalece o posicionamento de inovação da empresa.",
      },
      city: {
        eyebrow: "Cidade-sede",
        title: "São José dos Campos como parte da identidade da Ativa",
        description:
          "Estar em São José dos Campos aproxima a Ativa de um ambiente associado à tecnologia, à inovação e ao desenvolvimento científico, fortalecendo sua imagem institucional e sua conexão com soluções de alto valor técnico.",
        cards: [
          {
            title: "Cidade-sede",
            description:
              "A presença em São José dos Campos conecta a empresa a um território reconhecido por sua vocação tecnológica.",
          },
          {
            title: "Inovação e tecnologia",
            description:
              "O contexto regional reforça a proposta da Ativa de atuar com base científica, desenvolvimento e aplicação prática.",
          },
          {
            title: "Identidade regional",
            description:
              "A origem local se integra à narrativa da marca e ao posicionamento institucional da empresa.",
          },
        ],
        imagePlaceholder:
          "Imagem recomendada: vista urbana ou marco arquitetônico de São José dos Campos",
        imageCaption:
          "São José dos Campos como ambiente de inovação e tecnologia.",
      },
      values: {
        eyebrow: "Identidade",
        title: "Valores que orientam a Ativa Pesquisas",
        description:
          "A atuação da Ativa é guiada por compromisso científico, aplicação prática e busca contínua por soluções duráveis e sustentáveis.",
        cards: [
          {
            title: "Pesquisa aplicada",
            description:
              "Transformar conhecimento em soluções técnicas com potencial real de uso.",
          },
          {
            title: "Rigor técnico",
            description:
              "Desenvolver e validar materiais com base em ensaios, caracterização e análise criteriosa.",
          },
          {
            title: "Sustentabilidade",
            description:
              "Buscar desempenho e durabilidade associados ao uso responsável de recursos e materiais.",
          },
        ],
        imagePlaceholder:
          "Imagem recomendada: laboratório, equipe técnica ou material em caracterização",
        imageCaption:
          "Ciência, desenvolvimento e aplicação como base da atuação institucional.",
      },
      partners: {
        eyebrow: "Instituições parceiras",
        title: "Rede institucional e colaboração em pesquisa",
        description:
          "A Ativa valoriza a conexão com universidades, centros de pesquisa, apoiadores e instituições que fortalecem o desenvolvimento técnico e a credibilidade de sua atuação.",
      },
      cta: {
        title: "Quer conhecer melhor nossa trajetória?",
        description:
          "Fale com a Ativa para saber mais sobre a empresa, sua atuação e possibilidades de parceria técnica ou institucional.",
        primaryButton: "Entrar em contato",
        secondaryButton: "Ver projetos",
      },
    },
    technology: {
      hero: {
        eyebrow: "Tecnologia",
        title: "Tecnologia e capacidades da Ativa Pesquisas",
        description:
          "A Ativa combina pesquisa aplicada, desenvolvimento de materiais e validação experimental para criar soluções voltadas à durabilidade de estruturas de concreto em ambientes agressivos.",
        mainPlaceholder:
          "Imagem recomendada: laboratório, análise microscópica ou material em ensaio",
        block01Placeholder:
          "Imagem recomendada: preparação de amostras ou processo experimental",
        block02Placeholder:
          "Imagem recomendada: equipamento de caracterização ou ensaio mecânico",
      },
      capabilities: {
        eyebrow: "Capacidades",
        title: "Competências e recursos tecnológicos",
        description:
          "A atuação tecnológica da Ativa integra análise, formulação, ensaio e validação em um fluxo orientado à aplicação prática.",
        cards: [
          {
            title: "Caracterização",
            description:
              "Avaliação física, química e microbiológica para compreensão aprofundada do desempenho dos materiais.",
          },
          {
            title: "Formulação",
            description:
              "Desenvolvimento de composições especiais com foco em resistência, durabilidade e mitigação da biocorrosão.",
          },
          {
            title: "Ensaios",
            description:
              "Verificação experimental de propriedades mecânicas, microestruturais e de interação com o meio agressivo.",
          },
          {
            title: "Validação",
            description:
              "Comprovação técnica em laboratório e em contextos aplicados para orientar o uso das soluções.",
          },
        ],
      },
      process: {
        eyebrow: "Processo",
        title: "Como a tecnologia é aplicada",
        description:
          "A metodologia da Ativa parte do entendimento do problema e evolui até a validação da solução em base técnica.",
        steps: [
          {
            step: "01",
            title: "Diagnóstico do contexto",
            description:
              "Levantamento das condições de uso, do ambiente agressivo e da necessidade técnica envolvida.",
          },
          {
            step: "02",
            title: "Desenvolvimento da composição",
            description:
              "Formulação de materiais e definição de estratégias de desempenho conforme a aplicação.",
          },
          {
            step: "03",
            title: "Caracterização e ensaios",
            description:
              "Avaliação do comportamento do material por meio de análises laboratoriais e testes específicos.",
          },
          {
            step: "04",
            title: "Validação e direcionamento",
            description:
              "Consolidação dos resultados para orientar aplicação, continuidade da pesquisa ou evolução do projeto.",
          },
        ],
      },
      structure: {
        eyebrow: "Estrutura",
        title: "Laboratório, métodos e desenvolvimento",
        description:
          "A estrutura de trabalho da Ativa é voltada à pesquisa e ao desenvolvimento técnico, com ênfase em ensaios, caracterização e análise de desempenho de materiais.",
        cards: [
          {
            title: "Infraestrutura",
            description:
              "Ambiente voltado ao estudo e validação de composições cimentícias e materiais especiais.",
          },
          {
            title: "Métodos",
            description:
              "Procedimentos baseados em análise experimental, comparação de desempenho e avaliação técnica.",
          },
          {
            title: "Pesquisa aplicada",
            description:
              "Integração entre investigação científica e direcionamento prático para problemas reais.",
          },
        ],
        imagePlaceholder:
          "Imagem recomendada: estrutura técnica, bancada, amostras ou equipamentos",
        imageCaption:
          "Desenvolvimento orientado por método, análise e validação experimental.",
      },
      indicators: {
        eyebrow: "Indicadores",
        title: "Destaques da atuação tecnológica",
        description:
          "A tecnologia da Ativa se destaca pela combinação entre pesquisa, caracterização e aplicação em ambientes desafiadores.",
        items: [
          {
            label: "Foco técnico",
            value: "360°",
            description:
              "Integração entre desenvolvimento, ensaios e interpretação técnica dos resultados.",
          },
          {
            label: "Base",
            value: "P&D",
            description:
              "Atuação sustentada por pesquisa e desenvolvimento de aplicações especiais.",
          },
          {
            label: "Aplicação",
            value: "ALTA",
            description:
              "Direcionamento para contextos de elevada exigência de durabilidade e desempenho.",
          },
        ],
      },
      cta: {
        title: "Quer entender melhor nossa tecnologia?",
        description:
          "Entre em contato para conhecer as capacidades técnicas da Ativa e discutir possibilidades de desenvolvimento, análise ou parceria.",
        primaryButton: "Entrar em contato",
        secondaryButton: "Ver projetos",
      },
    },
    applications: {
      hero: {
        eyebrow: "Aplicações",
        title: "Aplicações das soluções desenvolvidas pela Ativa Pesquisas",
        description:
          "As soluções da Ativa são pensadas para ambientes agressivos e estruturas que exigem elevada durabilidade, resistência e mitigação de processos de deterioração induzidos por microrganismos.",
        featured: {
          placeholder:
            "Imagem recomendada: estrutura de saneamento ou ambiente de pré-tratamento de esgoto",
          caption:
            "Aplicação em contextos sujeitos à biocorrosão e deterioração acelerada.",
        },
        secondary: [
          {
            placeholder:
              "Imagem recomendada: área industrial ou ambiente com alta umidade/agressividade",
            caption: "Aplicações em ambientes industriais severos.",
          },
          {
            placeholder:
              "Imagem recomendada: material em campo ou corpos de prova em exposição",
            caption: "Validação de desempenho em condições representativas.",
          },
        ],
      },
      fronts: {
        eyebrow: "Frentes de aplicação",
        title: "Setores e ambientes de atuação",
        description:
          "A Ativa direciona sua tecnologia para contextos onde o concreto e outros materiais estão sujeitos a degradação microbiológica, química e operacional.",
        cards: [
          {
            placeholder:
              "Imagem recomendada: estação de tratamento ou estrutura sanitária",
            title: "Estações de tratamento",
            description:
              "Aplicações em estruturas expostas a gases, umidade, enxofre e intensa atividade microbiológica.",
          },
          {
            placeholder:
              "Imagem recomendada: ambiente industrial ou piso técnico",
            title: "Infraestrutura industrial",
            description:
              "Uso em instalações que demandam maior resistência a processos de deterioração e desgaste em serviço.",
          },
          {
            placeholder:
              "Imagem recomendada: área com ataque químico ou corrosivo",
            title: "Ambientes com ataque químico",
            description:
              "Soluções voltadas a estruturas expostas a condições que favorecem degradação acelerada do material.",
          },
          {
            placeholder:
              "Imagem recomendada: reservatório, silo ou área de armazenamento",
            title: "Sistemas de armazenamento",
            description:
              "Aplicações em superfícies e estruturas que exigem desempenho superior em contato com meios agressivos.",
          },
        ],
      },
      gallery: {
        eyebrow: "Galeria",
        title: "Exemplos visuais de aplicações",
        description:
          "As imagens podem reforçar a relação entre pesquisa, ensaios, materiais desenvolvidos e os ambientes de uso das soluções da Ativa.",
        items: [
          {
            placeholder:
              "Imagem recomendada: corpos de prova em exposição controlada",
            title: "Exposição experimental",
            description:
              "Avaliação do comportamento de composições em ambiente agressivo.",
          },
          {
            placeholder:
              "Imagem recomendada: matriz cimentícia ou peça desenvolvida",
            title: "Formulação aplicada",
            description:
              "Desenvolvimento de materiais voltados a durabilidade e desempenho.",
          },
          {
            placeholder: "Imagem recomendada: microestrutura em análise ou MEV",
            title: "Análise microestrutural",
            description:
              "Caracterização para compreensão do desempenho e da colonização microbiológica.",
          },
          {
            placeholder:
              "Imagem recomendada: estrutura industrial ou área de processo",
            title: "Contexto industrial",
            description:
              "Aplicações em ambientes de alta exigência operacional.",
          },
          {
            placeholder:
              "Imagem recomendada: estrutura sanitária ou reservatório técnico",
            title: "Ambiente severo",
            description:
              "Uso em condições propícias à biocorrosão e deterioração acelerada.",
          },
        ],
      },
      contexts: {
        eyebrow: "Contextos de uso",
        title: "Aplicações em diferentes cenários técnicos",
        description:
          "A tecnologia da Ativa pode ser adaptada a diferentes frentes, desde saneamento até estruturas especiais com exigência elevada de durabilidade.",
        cards: [
          {
            title: "Saneamento",
            description:
              "Soluções voltadas a estruturas submetidas a umidade, gases agressivos e intensa ação microbiológica.",
          },
          {
            title: "Indústria",
            description:
              "Aplicações em ambientes produtivos que exigem maior desempenho e resistência do material.",
          },
          {
            title: "Armazenamento",
            description:
              "Uso em áreas de contato com insumos, agentes agressivos ou condições críticas de exposição.",
          },
          {
            title: "Estruturas especiais",
            description:
              "Desenvolvimento orientado a demandas específicas, com foco em desempenho técnico e vida útil.",
          },
        ],
        imagePlaceholder:
          "Imagem recomendada: aplicação técnica em estrutura real ou ambiente operacional",
        imageCaption:
          "Tecnologia adaptada a diferentes contextos de uso e exigência.",
      },
      extra: {
        items: [
          {
            placeholder: "Imagem recomendada: ensaio mecânico ou compressão",
            title: "Validação laboratorial",
            description:
              "Ensaios que apoiam a comprovação de desempenho dos materiais desenvolvidos.",
          },
          {
            placeholder:
              "Imagem recomendada: amostras revestidas ou comparação visual",
            title: "Comparação de soluções",
            description:
              "Análise entre composições e estratégias de proteção em ambiente agressivo.",
          },
          {
            placeholder:
              "Imagem recomendada: estrutura em campo ou aplicação piloto",
            title: "Aplicação complementar",
            description:
              "Registro visual de contextos em que a pesquisa se aproxima da prática.",
          },
        ],
      },
      cta: {
        title: "Quer avaliar a aplicação no seu contexto?",
        description:
          "Entre em contato para discutir demandas técnicas, ambientes agressivos e possibilidades de aplicação das soluções da Ativa.",
        primaryButton: "Entrar em contato",
        secondaryButton: "Ver tecnologia",
      },
    },
    projects: {
      hero: {
        eyebrow: "Projetos",
        title: "Projetos e iniciativas desenvolvidos pela Ativa Pesquisas",
        description:
          "A Ativa desenvolve projetos com base em pesquisa aplicada, formulação de materiais e validação experimental, com foco em desempenho, durabilidade e mitigação da biocorrosão.",
        mainPlaceholder:
          "Imagem recomendada: projeto principal, corpos de prova ou aplicação técnica",
        mainCaption:
          "Projeto voltado ao desenvolvimento de concretos de alto desempenho para ambientes agressivos.",
        featuredItems: [
          {
            label: "Projeto em destaque",
            title: "Composições ATIVA: concretos de alto desempenho",
            description:
              "Projeto direcionado ao desenvolvimento de uma composição com alta resistência mecânica, baixa porosidade e maior resistência à biocorrosão em estruturas expostas a ambientes severos.",
          },
          {
            label: "Projeto em destaque",
            title: "Microscopia eletrônica e análise de adesão microbiológica",
            description:
              "Frente de investigação voltada à compreensão da colonização microbiana na superfície do concreto e ao efeito do revestimento na inibição dessa adesão.",
          },
        ],
      },
      portfolio: {
        eyebrow: "Portfólio de projetos",
        title: "Projetos em diferentes frentes de atuação",
        description:
          "Os projetos da Ativa conectam desenvolvimento de materiais, caracterização e aplicação em cenários de alta exigência técnica.",
        cards: [
          {
            placeholder:
              "Imagem recomendada: concreto em ambiente de saneamento",
            category: "Durabilidade",
            title: "Concreto para estruturas de estação de tratamento",
            description:
              "Projeto voltado a estruturas sujeitas à biocorrosão em áreas de pré-tratamento de esgoto.",
          },
          {
            placeholder:
              "Imagem recomendada: ambiente industrial ou estrutura de processo",
            category: "Aplicação industrial",
            title: "Concreto para ambientes industriais agressivos",
            description:
              "Desenvolvimento de soluções para contextos com alta concentração de agentes agressivos.",
          },
          {
            placeholder:
              "Imagem recomendada: corpos de prova ou amostras comparativas",
            category: "Pesquisa aplicada",
            title: "Comparação entre composição usual e composição ATIVA",
            description:
              "Avaliação experimental do desempenho de diferentes composições em exposição controlada.",
          },
          {
            placeholder:
              "Imagem recomendada: ensaio de compressão ou validação mecânica",
            category: "Ensaios",
            title: "Validação mecânica do desempenho",
            description:
              "Ensaios de resistência e desempenho para comprovação técnica das formulações.",
          },
          {
            placeholder:
              "Imagem recomendada: imagem de MEV ou superfície analisada",
            category: "Caracterização",
            title: "Análise microestrutural por MEV",
            description:
              "Estudo da adesão de microrganismos e do comportamento superficial do concreto.",
          },
          {
            placeholder:
              "Imagem recomendada: revestimento, superfície protegida ou amostra tratada",
            category: "Proteção",
            title: "Avaliação do efeito de revestimentos",
            description:
              "Investigação de estratégias para reduzir adesão microbiológica e aumentar a durabilidade.",
          },
        ],
      },
      methodology: {
        eyebrow: "Metodologia",
        title: "Etapas de desenvolvimento dos projetos",
        description:
          "Os projetos da Ativa seguem um fluxo técnico que conecta diagnóstico, desenvolvimento, ensaio e direcionamento de aplicação.",
        steps: [
          {
            step: "01",
            title: "Pesquisa e diagnóstico",
            description:
              "Levantamento do problema, análise do ambiente e definição dos requisitos técnicos.",
          },
          {
            step: "02",
            title: "Desenvolvimento técnico",
            description:
              "Formulação de composições, definição de estratégias e preparação experimental.",
          },
          {
            step: "03",
            title: "Validação e testes",
            description:
              "Execução de ensaios e análises para comprovar desempenho e comportamento do material.",
          },
          {
            step: "04",
            title: "Aplicação e acompanhamento",
            description:
              "Interpretação dos resultados para orientar o uso, o refinamento da solução ou a continuidade do projeto.",
          },
        ],
      },
      highlights: {
        eyebrow: "Diferenciais",
        title: "O que orienta nossos projetos",
        description:
          "Cada projeto da Ativa é conduzido com foco em aplicabilidade, base científica e resposta a problemas reais de durabilidade.",
        cards: [
          {
            title: "Soluções sob medida",
            description:
              "Desenvolvimento orientado às condições específicas de cada ambiente e necessidade.",
          },
          {
            title: "Base científica",
            description:
              "Decisões técnicas sustentadas por ensaios, caracterização e interpretação experimental.",
          },
          {
            title: "Aplicação prática",
            description:
              "Pesquisa pensada para gerar soluções com relevância concreta em campo e em operação.",
          },
        ],
        imagePlaceholder:
          "Imagem recomendada: pesquisa aplicada, ensaio ou contexto de desenvolvimento",
        imageCaption:
          "Projetos orientados por ciência, desempenho e aplicação real.",
      },
      metrics: {
        items: [
          {
            label: "Foco",
            value: "P&D",
            description:
              "Projetos estruturados a partir de pesquisa e desenvolvimento.",
          },
          {
            label: "Abordagem",
            value: "MULTI",
            description:
              "Integração entre análise mecânica, química, microbiológica e microestrutural.",
          },
          {
            label: "Objetivo",
            value: "VIDA ÚTIL",
            description:
              "Direcionamento constante para aumento de durabilidade e desempenho das estruturas.",
          },
        ],
      },
      cta: {
        title: "Quer desenvolver um projeto com a Ativa Pesquisas?",
        description:
          "Entre em contato para discutir desafios técnicos, demandas específicas ou possibilidades de pesquisa aplicada em parceria.",
        primaryButton: "Entrar em contato",
        secondaryButton: "Ver tecnologia",
      },
    },
    contact: {
      hero: {
        eyebrow: "Contato",
        title: "Entre em contato com a Ativa Pesquisas",
        description:
          "Utilize os canais abaixo para falar com a Ativa sobre projetos, parcerias, dúvidas institucionais ou demandas técnicas.",
      },
      main: {
        eyebrow: "Contato institucional",
        title: "Entre em contato",
        description:
          "A Ativa está disponível para conversas sobre pesquisa aplicada, desenvolvimento de soluções especiais, parcerias, análises e demandas técnicas relacionadas à durabilidade de estruturas em ambientes agressivos.",
        email: "contato@ativapesquisas.com.br",
        buttonLabel: "Enviar e-mail",
        imagePlaceholder:
          "Imagem recomendada: bloco institucional, equipe ou laboratório",
        cards: [
          {
            eyebrow: "Canal principal",
            title: "E-mail",
            description: "contato@ativapesquisas.com.br",
          },
          {
            eyebrow: "Telefone",
            title: "Atendimento",
            description: "+55 12 99726-1411",
          },
          {
            eyebrow: "Localização",
            title: "Base institucional",
            description: "São José dos Campos, BR",
          },
        ],
      },
      cta: {
        title: "Vamos conversar?",
        description:
          "Para informações institucionais, projetos, parcerias ou solicitações técnicas, entre em contato pelo e-mail abaixo.",
        primaryButton: "contato@ativapesquisas.com.br",
        secondaryButton: "Conhecer a empresa",
      },
    },
    notFound: {
      title: "Página não encontrada",
      description: "A página que você tentou acessar não existe.",
      buttonLabel: "Voltar para o início",
    },
  },
};
