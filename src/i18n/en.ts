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
      title: "About",
      subtitle: "Get to know Ativa Pesquisas",
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
      title: "Applications",
      subtitle: "Solution applications",
    },
    projects: {
      title: "Projects",
      subtitle: "Projects and initiatives",
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
