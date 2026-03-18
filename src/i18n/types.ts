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

export type TechnologyCard = {
  title: string;
  description: string;
};

export type TechnologyStep = {
  step: string;
  title: string;
  description: string;
};

export type TechnologyIndicator = {
  label: string;
  value: string;
  description: string;
};

export type TechnologyContent = {
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    mainPlaceholder: string;
    block01Placeholder: string;
    block02Placeholder: string;
  };
  capabilities: {
    eyebrow: string;
    title: string;
    description: string;
    cards: [TechnologyCard, TechnologyCard, TechnologyCard, TechnologyCard];
  };
  process: {
    eyebrow: string;
    title: string;
    description: string;
    steps: [TechnologyStep, TechnologyStep, TechnologyStep, TechnologyStep];
  };
  structure: {
    eyebrow: string;
    title: string;
    description: string;
    cards: [TechnologyCard, TechnologyCard, TechnologyCard];
    imagePlaceholder: string;
    imageCaption: string;
  };
  indicators: {
    eyebrow: string;
    title: string;
    description: string;
    items: [TechnologyIndicator, TechnologyIndicator, TechnologyIndicator];
  };
  cta: {
    title: string;
    description: string;
    primaryButton: string;
    secondaryButton: string;
  };
};

export type ApplicationsImageBlock = {
  placeholder: string;
  caption: string;
};

export type ApplicationsCard = {
  placeholder: string;
  title: string;
  description: string;
};

export type ApplicationsGalleryCard = {
  placeholder: string;
  title: string;
  description: string;
};

export type ApplicationsContextCard = {
  title: string;
  description: string;
};

export type ApplicationsContent = {
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    featured: ApplicationsImageBlock;
    secondary: [ApplicationsImageBlock, ApplicationsImageBlock];
  };
  fronts: {
    eyebrow: string;
    title: string;
    description: string;
    cards: [
      ApplicationsCard,
      ApplicationsCard,
      ApplicationsCard,
      ApplicationsCard,
    ];
  };
  gallery: {
    eyebrow: string;
    title: string;
    description: string;
    items: [
      ApplicationsGalleryCard,
      ApplicationsGalleryCard,
      ApplicationsGalleryCard,
      ApplicationsGalleryCard,
      ApplicationsGalleryCard,
    ];
  };
  contexts: {
    eyebrow: string;
    title: string;
    description: string;
    cards: [
      ApplicationsContextCard,
      ApplicationsContextCard,
      ApplicationsContextCard,
      ApplicationsContextCard,
    ];
    imagePlaceholder: string;
    imageCaption: string;
  };
  extra: {
    items: [ApplicationsCard, ApplicationsCard, ApplicationsCard];
  };
  cta: {
    title: string;
    description: string;
    primaryButton: string;
    secondaryButton: string;
  };
};

export type AboutFounder = {
  name: string;
  role: string;
  bio: string;
  linkedinLabel: string;
  linkedinUrl: string;
  photoPlaceholder: string;
};

export type AboutMilestone = {
  year: string;
  title: string;
  description: string;
};

export type AboutHighlight = {
  title: string;
  description: string;
};

export type AboutContent = {
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    mainPlaceholder: string;
    trajectoryEyebrow: string;
    trajectoryTitle: string;
    trajectoryDescription: string;
    purposeEyebrow: string;
    purposeTitle: string;
    purposeDescription: string;
  };
  founders: {
    eyebrow: string;
    title: string;
    description: string;
    items: AboutFounder[];
  };
  timeline: {
    eyebrow: string;
    title: string;
    description: string;
    items: AboutMilestone[];
  };
  logoInspiration: {
    eyebrow: string;
    title: string;
    description: string;
    cards: AboutHighlight[];
    logoPlaceholder: string;
    logoCaption: string;
    landmarkPlaceholder: string;
    landmarkCaption: string;
  };
  city: {
    eyebrow: string;
    title: string;
    description: string;
    cards: AboutHighlight[];
    imagePlaceholder: string;
    imageCaption: string;
  };
  values: {
    eyebrow: string;
    title: string;
    description: string;
    cards: AboutHighlight[];
    imagePlaceholder: string;
    imageCaption: string;
  };
  partners: {
    eyebrow: string;
    title: string;
    description: string;
  };
  cta: {
    title: string;
    description: string;
    primaryButton: string;
    secondaryButton: string;
  };
};

export type ProjectsFeaturedItem = {
  label: string;
  title: string;
  description: string;
};

export type ProjectsPortfolioCard = {
  placeholder: string;
  category: string;
  title: string;
  description: string;
};

export type ProjectsStage = {
  step: string;
  title: string;
  description: string;
};

export type ProjectsHighlight = {
  title: string;
  description: string;
};

export type ProjectsMetric = {
  label: string;
  value: string;
  description: string;
};

export type ProjectsContent = {
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    mainPlaceholder: string;
    mainCaption: string;
    featuredItems: [ProjectsFeaturedItem, ProjectsFeaturedItem];
  };
  portfolio: {
    eyebrow: string;
    title: string;
    description: string;
    cards: [
      ProjectsPortfolioCard,
      ProjectsPortfolioCard,
      ProjectsPortfolioCard,
      ProjectsPortfolioCard,
      ProjectsPortfolioCard,
      ProjectsPortfolioCard,
    ];
  };
  methodology: {
    eyebrow: string;
    title: string;
    description: string;
    steps: [ProjectsStage, ProjectsStage, ProjectsStage, ProjectsStage];
  };
  highlights: {
    eyebrow: string;
    title: string;
    description: string;
    cards: [ProjectsHighlight, ProjectsHighlight, ProjectsHighlight];
    imagePlaceholder: string;
    imageCaption: string;
  };
  metrics: {
    items: [ProjectsMetric, ProjectsMetric, ProjectsMetric];
  };
  cta: {
    title: string;
    description: string;
    primaryButton: string;
    secondaryButton: string;
  };
};

export type ContactInfoCard = {
  eyebrow: string;
  title: string;
  description: string;
};

export type ContactContent = {
  hero: {
    eyebrow: string;
    title: string;
    description: string;
  };
  main: {
    eyebrow: string;
    title: string;
    description: string;
    email: string;
    buttonLabel: string;
    imagePlaceholder: string;
    cards: [ContactInfoCard, ContactInfoCard, ContactInfoCard];
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
    about: AboutContent;
    technology: TechnologyContent;
    applications: ApplicationsContent;
    projects: ProjectsContent;
    contact: ContactContent;
    notFound: {
      title: string;
      description: string;
      buttonLabel: string;
    };
  };
};
