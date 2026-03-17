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
      title: "Technology",
      subtitle: "Technology and capabilities",
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
