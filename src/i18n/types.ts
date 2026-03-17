export const AVAILABLE_LANGUAGES = ["pt", "en"] as const;

export type Language = (typeof AVAILABLE_LANGUAGES)[number];

export type SimplePageContent = {
  title: string;
  subtitle: string;
};

export type TranslationSchema = {
  common: {
    language: {
      pt: string;
      en: string;
    };
    buttons: {
      home: string;
      about: string;
      technology: string;
      applications: string;
      projects: string;
      contact: string;
      sendEmail: string;
      backHome: string;
    };
  };
  header: {
    nav: {
      home: string;
      about: string;
      technology: string;
      applications: string;
      projects: string;
      contact: string;
    };
    languageSwitcherLabel: string;
  };
  footer: {
    company: string;
    emailLabel: string;
    email: string;
    rights: string;
  };
  pages: {
    home: SimplePageContent;
    about: SimplePageContent;
    technology: SimplePageContent;
    applications: SimplePageContent;
    projects: SimplePageContent;
    contact: SimplePageContent;
    notFound: {
      title: string;
      description: string;
      buttonLabel: string;
    };
  };
};
