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
      title: "Home",
      subtitle: "Homepage",
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
