import type { TranslationSchema } from "./types";

export const en: TranslationSchema = {
  common: {
    language: {
      pt: "PT",
      en: "EN",
    },
    buttons: {
      home: "Home",
      about: "About",
      technology: "Technology",
      applications: "Applications",
      projects: "Projects",
      contact: "Contact",
      sendEmail: "Send email",
      backHome: "Back to home",
    },
  },
  header: {
    nav: {
      home: "Home",
      about: "About",
      technology: "Technology",
      applications: "Applications",
      projects: "Projects",
      contact: "Contact",
    },
    languageSwitcherLabel: "Change language",
  },
  footer: {
    company: "Ativa Pesquisas",
    emailLabel: "Email",
    email: "contato@ativapesquisas.com.br",
    rights: "All rights reserved.",
  },
  pages: {
    home: {
      hero: {
        eyebrow: "Ativa Pesquisas",
        title:
          "Concrete biocorrosion mitigation focused on sustainable durability",
        description:
          "Research and development of special compositions with low porosity, high mechanical strength and microbiological neutralization in aggressive environments.",
        ctaLabel: "Learn about the company",
        images: {
          hero01Alt: "Laboratory and material characterization",
          hero02Alt: "Concrete structures in aggressive environments",
          hero03Alt: "Application and performance in sustainable durability",
        },
      },
      approach: {
        eyebrow: "(Edit) Our approach",
        title: "(Edit) Materials and compositions for aggressive environments",
        description:
          "(Edit this text) Explain in 2–3 lines what you do, how you work and what your technical differential is.",
        bullets: [
          "(Edit) Low porosity",
          "(Edit) Microbiological neutralization",
          "(Edit) Durability and sustainability",
        ],
        imagePlaceholder: "IMAGE HERE (replace with an <img />)",
        imageCaption: "(Optional) short image caption/description.",
      },
      technology: {
        title: "(Edit) Technology and capabilities",
        description:
          "(Edit) A sentence explaining your laboratory, methods, validations, etc.",
        cards: [
          {
            title: "(Edit) Characterization",
            description: "(Edit) SEM, XRD, Raman...",
          },
          {
            title: "(Edit) Development",
            description: "(Edit) Binders, additives...",
          },
          {
            title: "(Edit) Testing",
            description: "(Edit) Durability, strength...",
          },
        ],
      },
      applications: {
        title: "(Edit) Applications",
        description:
          "(Edit) Mention sectors/environments where the solutions apply.",
        featured: {
          placeholder: "IMAGE 1 (replace with an <img />)",
          caption: "(Edit) Application title/caption.",
        },
        secondary: [
          {
            placeholder: "IMAGE 2",
            caption: "(Edit) Caption.",
          },
          {
            placeholder: "IMAGE 3",
            caption: "(Edit) Caption.",
          },
        ],
      },
      cta: {
        title: "(Edit) Shall we talk about your project?",
        description:
          "(Edit) Short invitation for contact: diagnosis, proposal, partnership, etc.",
        primaryButton: "Get in touch",
        secondaryButton: "View projects",
      },
    },
    about: {
      hero: {
        eyebrow: "About",
        title: "(Edit) The story of Ativa Pesquisas",
        description:
          "(Edit) Introductory text presenting the company, its origin and purpose.",
        mainPlaceholder: "MAIN IMAGE / HISTORY",
        trajectoryEyebrow: "(Edit)",
        trajectoryTitle: "(Edit) Our journey",
        trajectoryDescription:
          "(Edit) Short text about the origin and evolution of Ativa Pesquisas.",
        purposeEyebrow: "(Edit)",
        purposeTitle: "(Edit) Purpose",
        purposeDescription:
          "(Edit) Short text about mission, vision or strategic direction.",
      },
      founders: {
        eyebrow: "Founders",
        title: "(Edit) Leadership and technical experience",
        description: "(Edit) Short text introducing the three founders.",
        items: [
          {
            name: "(Edit) Dr. Fernando S. Ortega",
            role: "(Edit) Co-founder",
            bio: "(Edit) Short text about background, education, experience and contribution to Ativa Pesquisas.",
            linkedinLabel: "LinkedIn",
            linkedinUrl: "#",
            photoPlaceholder: "FOUNDER PHOTO",
          },
          {
            name: "(Edit) Dra. Ivone Regina de Oliveira",
            role: "(Edit) Co-founder",
            bio: "(Edit) Short text about background, education, experience and contribution to Ativa Pesquisas.",
            linkedinLabel: "LinkedIn",
            linkedinUrl: "#",
            photoPlaceholder: "FOUNDER PHOTO",
          },
          {
            name: "(Edit) Me. Indira Teixeira Oliveira",
            role: "(Edit) Co-founder",
            bio: "(Edit) Short text about background, education, experience and contribution to Ativa Pesquisas.",
            linkedinLabel: "LinkedIn",
            linkedinUrl: "#",
            photoPlaceholder: "FOUNDER PHOTO",
          },
        ],
      },
      timeline: {
        eyebrow: "Timeline",
        title: "(Edit) Main milestones in the journey",
        description:
          "(Edit) Short text contextualizing the company’s evolution.",
        items: [
          {
            year: "(Edit)",
            title: "(Edit) Origin of the initiative",
            description:
              "(Edit) Short text about the start of the research, motivation and context.",
          },
          {
            year: "(Edit)",
            title: "(Edit) Technical consolidation",
            description:
              "(Edit) Short text about development, validation or institutional advancement.",
          },
          {
            year: "(Edit)",
            title: "(Edit) Expansion and applications",
            description:
              "(Edit) Short text about the maturation of the project and evolution of operations.",
          },
        ],
      },
      logoInspiration: {
        eyebrow: "Visual identity",
        title:
          "(Edit) Ativa’s logo and its inspiration from the Arco da Inovação",
        description:
          "(Edit) Main text explaining that Ativa’s visual identity was inspired by the Arco da Inovação in São José dos Campos and how this connects with research, technology and future.",
        cards: [
          {
            title: "(Edit) Architectural inspiration",
            description:
              "(Edit) Short text about the brand’s inspiration from the Arco da Inovação.",
          },
          {
            title: "(Edit) Connection with the city",
            description:
              "(Edit) Short text about São José dos Campos as headquarters and technological reference.",
          },
          {
            title: "(Edit) Brand symbolism",
            description:
              "(Edit) Short text about the shape, concept and visual meaning of the logo.",
          },
        ],
        logoPlaceholder: "ATIVA LOGO",
        logoCaption: "(Edit) Caption about the brand.",
        landmarkPlaceholder: "PHOTO OF ARCO DA INOVAÇÃO",
        landmarkCaption: "(Edit) Caption about the architectural inspiration.",
      },
      city: {
        eyebrow: "Headquarters city",
        title: "(Edit) São José dos Campos as part of Ativa’s identity",
        description:
          "(Edit) Main text about São José dos Campos being one of the most technological cities in Brazil and how this context strengthens the image and positioning of Ativa Pesquisas.",
        cards: [
          {
            title: "(Edit) Headquarters city",
            description:
              "(Edit) Short text about São José dos Campos and its relevance.",
          },
          {
            title: "(Edit) Innovation and technology",
            description:
              "(Edit) Short text about the city’s technological environment.",
          },
          {
            title: "(Edit) Regional identity",
            description:
              "(Edit) Short text about Ativa’s bond with its local origin.",
          },
        ],
        imagePlaceholder: "IMAGE / SÃO JOSÉ DOS CAMPOS",
        imageCaption: "(Edit) Optional caption about the headquarters city.",
      },
      values: {
        eyebrow: "Identity",
        title: "(Edit) Values that guide Ativa Pesquisas",
        description:
          "(Edit) Brief text about the principles that support the company’s work.",
        cards: [
          {
            title: "(Edit) Applied research",
            description: "(Edit) Short text.",
          },
          {
            title: "(Edit) Technical rigor",
            description: "(Edit) Short text.",
          },
          {
            title: "(Edit) Sustainability",
            description: "(Edit) Short text.",
          },
        ],
        imagePlaceholder: "IMAGE / INSTITUTION / RESEARCH",
        imageCaption: "(Edit) Optional caption.",
      },
      partners: {
        eyebrow: "Partner institutions",
        title: "(Edit) Institutional network and research collaboration",
        description:
          "(Edit) Short text introducing the partner institutions carousel.",
      },
      cta: {
        title: "(Edit) Want to know our journey better?",
        description:
          "(Edit) Short closing text and invitation to get in touch.",
        primaryButton: "Get in touch",
        secondaryButton: "View projects",
      },
    },
    technology: {
      hero: {
        eyebrow: "Technology",
        title: "(Edit) Technology and capabilities of Ativa Pesquisas",
        description: "(Edit) Introductory text for the technology page.",
        mainPlaceholder: "IMAGE / MAIN BLOCK",
        block01Placeholder: "BLOCK 1",
        block02Placeholder: "BLOCK 2",
      },
      capabilities: {
        eyebrow: "Capabilities",
        title: "(Edit) Competencies and technological resources",
        description: "(Edit) Short introductory text for the section.",
        cards: [
          {
            title: "(Edit) Characterization",
            description:
              "(Edit) Short description of the technical capability.",
          },
          {
            title: "(Edit) Formulation",
            description:
              "(Edit) Short description of the technical capability.",
          },
          {
            title: "(Edit) Testing",
            description:
              "(Edit) Short description of the technical capability.",
          },
          {
            title: "(Edit) Validation",
            description:
              "(Edit) Short description of the technical capability.",
          },
        ],
      },
      process: {
        eyebrow: "Process",
        title: "(Edit) How the technology is applied",
        description: "(Edit) Short text explaining the workflow.",
        steps: [
          {
            step: "01",
            title: "(Edit) Step 1",
            description: "(Edit) Short step description.",
          },
          {
            step: "02",
            title: "(Edit) Step 2",
            description: "(Edit) Short step description.",
          },
          {
            step: "03",
            title: "(Edit) Step 3",
            description: "(Edit) Short step description.",
          },
          {
            step: "04",
            title: "(Edit) Step 4",
            description: "(Edit) Short step description.",
          },
        ],
      },
      structure: {
        eyebrow: "Structure",
        title: "(Edit) Laboratory, methods and development",
        description:
          "(Edit) Brief text about technical structure and operation.",
        cards: [
          {
            title: "(Edit) Infrastructure",
            description: "(Edit) Short description.",
          },
          {
            title: "(Edit) Methods",
            description: "(Edit) Short description.",
          },
          {
            title: "(Edit) Applied research",
            description: "(Edit) Short description.",
          },
        ],
        imagePlaceholder: "IMAGE / TECHNICAL STRUCTURE",
        imageCaption: "(Edit) Optional caption.",
      },
      indicators: {
        eyebrow: "Indicators",
        title: "(Edit) Highlights of technological performance",
        description: "(Edit) Short text to contextualize the highlights.",
        items: [
          {
            label: "(Edit)",
            value: "00",
            description: "(Edit) Indicator or technical milestone",
          },
          {
            label: "(Edit)",
            value: "00",
            description: "(Edit) Indicator or technical milestone",
          },
          {
            label: "(Edit)",
            value: "00",
            description: "(Edit) Indicator or technical milestone",
          },
        ],
      },
      cta: {
        title: "(Edit) Want to better understand our technology?",
        description: "(Edit) Short call-to-action text for contact or details.",
        primaryButton: "Get in touch",
        secondaryButton: "View projects",
      },
    },
    applications: {
      hero: {
        eyebrow: "Applications",
        title:
          "(Edit) Applications of the solutions developed by Ativa Pesquisas",
        description:
          "(Edit) Introductory text about use contexts, sectors and environments where the technology can be applied.",
        featured: {
          placeholder: "MAIN IMAGE / HIGHLIGHTED APPLICATION",
          caption: "(Edit) Main caption or highlight of the application.",
        },
        secondary: [
          {
            placeholder: "SECONDARY IMAGE 01",
            caption: "(Edit) Short caption.",
          },
          {
            placeholder: "SECONDARY IMAGE 02",
            caption: "(Edit) Short caption.",
          },
        ],
      },
      fronts: {
        eyebrow: "Application fronts",
        title: "(Edit) Sectors and operating environments",
        description:
          "(Edit) Short text explaining the breadth of applications.",
        cards: [
          {
            placeholder: "IMAGE",
            title: "(Edit) Treatment plants",
            description:
              "(Edit) Short text about the application in structures exposed to aggressive environments.",
          },
          {
            placeholder: "IMAGE",
            title: "(Edit) Industrial infrastructure",
            description:
              "(Edit) Short text about the application in technical structures and facilities.",
          },
          {
            placeholder: "IMAGE",
            title: "(Edit) Chemical attack environments",
            description:
              "(Edit) Short text about the application in areas subject to accelerated degradation.",
          },
          {
            placeholder: "IMAGE",
            title: "(Edit) Storage systems",
            description:
              "(Edit) Short text about the application in reservoirs, containment systems or special surfaces.",
          },
        ],
      },
      gallery: {
        eyebrow: "Gallery",
        title: "(Edit) Visual examples of applications",
        description:
          "(Edit) Short text introducing the image gallery and use contexts.",
        items: [
          {
            placeholder: "IMAGE",
            title: "(Edit) Application 01",
            description: "(Edit) Short image caption.",
          },
          {
            placeholder: "IMAGE",
            title: "(Edit) Application 02",
            description: "(Edit) Short image caption.",
          },
          {
            placeholder: "IMAGE",
            title: "(Edit) Application 03",
            description: "(Edit) Short image caption.",
          },
          {
            placeholder: "IMAGE",
            title: "(Edit) Application 04",
            description: "(Edit) Short image caption.",
          },
          {
            placeholder: "IMAGE",
            title: "(Edit) Application 05",
            description: "(Edit) Short image caption.",
          },
        ],
      },
      contexts: {
        eyebrow: "Use contexts",
        title: "(Edit) Applications in different technical scenarios",
        description:
          "(Edit) Brief text about adapting the technology to different demands and environments.",
        cards: [
          {
            title: "(Edit) Sanitation",
            description: "(Edit) Short text about this application front.",
          },
          {
            title: "(Edit) Industry",
            description: "(Edit) Short text about this application front.",
          },
          {
            title: "(Edit) Storage",
            description: "(Edit) Short text about this application front.",
          },
          {
            title: "(Edit) Special structures",
            description: "(Edit) Short text about this application front.",
          },
        ],
        imagePlaceholder: "IMAGE / TECHNICAL APPLICATION",
        imageCaption: "(Edit) Optional image caption.",
      },
      extra: {
        items: [
          {
            placeholder: "IMAGE",
            title: "(Edit) Complementary application 01",
            description: "(Edit) Short text.",
          },
          {
            placeholder: "IMAGE",
            title: "(Edit) Complementary application 02",
            description: "(Edit) Short text.",
          },
          {
            placeholder: "IMAGE",
            title: "(Edit) Complementary application 03",
            description: "(Edit) Short text.",
          },
        ],
      },
      cta: {
        title: "(Edit) Want to evaluate the application in your context?",
        description:
          "(Edit) Closing text inviting contact or technical assessment.",
        primaryButton: "Get in touch",
        secondaryButton: "View technology",
      },
    },
    projects: {
      hero: {
        eyebrow: "Projects",
        title: "(Edit) Projects and initiatives developed by Ativa Pesquisas",
        description:
          "(Edit) Introductory text about the nature of the projects, scopes of action and technical development.",
        mainPlaceholder: "IMAGE / MAIN PROJECT",
        mainCaption: "(Edit) Caption or summary of the featured project.",
        featuredItems: [
          {
            label: "(Edit) Highlight",
            title: "(Edit) Featured project 01",
            description:
              "(Edit) Short text about the project’s objective, scope and differential.",
          },
          {
            label: "(Edit) Highlight",
            title: "(Edit) Featured project 02",
            description:
              "(Edit) Short text about the project’s objective, scope and differential.",
          },
        ],
      },
      portfolio: {
        eyebrow: "Project portfolio",
        title: "(Edit) Projects across different fronts of action",
        description:
          "(Edit) Short text explaining the types of projects developed.",
        cards: [
          {
            placeholder: "IMAGE",
            category: "(Edit) Category",
            title: "(Edit) Project 01",
            description: "(Edit) Short project description.",
          },
          {
            placeholder: "IMAGE",
            category: "(Edit) Category",
            title: "(Edit) Project 02",
            description: "(Edit) Short project description.",
          },
          {
            placeholder: "IMAGE",
            category: "(Edit) Category",
            title: "(Edit) Project 03",
            description: "(Edit) Short project description.",
          },
          {
            placeholder: "IMAGE",
            category: "(Edit) Category",
            title: "(Edit) Project 04",
            description: "(Edit) Short project description.",
          },
          {
            placeholder: "IMAGE",
            category: "(Edit) Category",
            title: "(Edit) Project 05",
            description: "(Edit) Short project description.",
          },
          {
            placeholder: "IMAGE",
            category: "(Edit) Category",
            title: "(Edit) Project 06",
            description: "(Edit) Short project description.",
          },
        ],
      },
      methodology: {
        eyebrow: "Methodology",
        title: "(Edit) Project development stages",
        description: "(Edit) Short text about how projects are conducted.",
        steps: [
          {
            step: "01",
            title: "(Edit) Research and diagnosis",
            description: "(Edit) Short text about the stage.",
          },
          {
            step: "02",
            title: "(Edit) Technical development",
            description: "(Edit) Short text about the stage.",
          },
          {
            step: "03",
            title: "(Edit) Validation and testing",
            description: "(Edit) Short text about the stage.",
          },
          {
            step: "04",
            title: "(Edit) Application and follow-up",
            description: "(Edit) Short text about the stage.",
          },
        ],
      },
      highlights: {
        eyebrow: "Differentials",
        title: "(Edit) What guides our projects",
        description:
          "(Edit) Brief text about the technical, applied and scientific approach.",
        cards: [
          {
            title: "(Edit) Tailored solutions",
            description: "(Edit) Short text.",
          },
          {
            title: "(Edit) Scientific basis",
            description: "(Edit) Short text.",
          },
          {
            title: "(Edit) Practical application",
            description: "(Edit) Short text.",
          },
        ],
        imagePlaceholder: "IMAGE / PROJECT / APPLIED RESEARCH",
        imageCaption: "(Edit) Optional caption.",
      },
      metrics: {
        items: [
          {
            label: "(Edit)",
            value: "00",
            description: "(Edit) Indicator or number related to projects",
          },
          {
            label: "(Edit)",
            value: "00",
            description: "(Edit) Indicator or number related to projects",
          },
          {
            label: "(Edit)",
            value: "00",
            description: "(Edit) Indicator or number related to projects",
          },
        ],
      },
      cta: {
        title: "(Edit) Want to develop a project with Ativa Pesquisas?",
        description:
          "(Edit) Short closing text and invitation to get in touch.",
        primaryButton: "Get in touch",
        secondaryButton: "View technology",
      },
    },
    contact: {
      title: "Contact",
      subtitle: "Get in touch with Ativa Pesquisas",
    },
    notFound: {
      title: "Page not found",
      description: "The page you tried to access does not exist.",
      buttonLabel: "Back to home",
    },
  },
};
