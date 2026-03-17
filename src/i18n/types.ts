export const AVAILABLE_LANGUAGES = ["pt", "en"] as const;

export type Language = (typeof AVAILABLE_LANGUAGES)[number];

export type SimplePageContent = {
  title: string;
  subtitle: string;
};

export type HomeCard = {
  title: string;
  description: string;
};

export type HomeGalleryItem = {
  placeholder: string;
  caption: string;
};

export type HomeContent = {
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    ctaLabel: string;
    images: {
      hero01Alt: string;
      hero02Alt: string;
      hero03Alt: string;
    };
  };
  approach: {
    eyebrow: string;
    title: string;
    description: string;
    bullets: [string, string, string];
    imagePlaceholder: string;
    imageCaption: string;
  };
  technology: {
    title: string;
    description: string;
    cards: [HomeCard, HomeCard, HomeCard];
  };
  applications: {
    title: string;
    description: string;
    featured: HomeGalleryItem;
    secondary: [HomeGalleryItem, HomeGalleryItem];
  };
  cta: {
    title: string;
    description: string;
    primaryButton: string;
    secondaryButton: string;
  };
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
    home: HomeContent;
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
