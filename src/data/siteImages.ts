import treatmentPlant from "../assets/content/wastewater-treatment-tank.webp";
import microstructure009 from "../assets/content/bac-microstructure-009.webp";
import samplePreparation from "../assets/content/laboratory-sample-preparation.webp";
import specimenSingle from "../assets/content/material-specimen-single.webp";
import specimenPair from "../assets/content/material-specimens-pair.webp";
import culturePreparation from "../assets/content/microbiology-culture-preparation.webp";
import petriDish from "../assets/content/petri-dish-culture.webp";
import ativaSpecimens from "../assets/content/ativa-material-specimens.webp";
import bioBurner from "../assets/content/laboratory-bunsen-burner.webp";
import semDetail from "../assets/content/sem-surface-detail.webp";
import semSurface from "../assets/content/sem-surface.webp";
import freshConcrete from "../assets/content/fresh-concrete.webp";
import labBottles from "../assets/content/laboratory-sample-bottles.webp";
import materialKit from "../assets/content/material-sample-kit.webp";
import specimenFront from "../assets/content/material-specimens-front.webp";
import specimenLight from "../assets/content/material-specimen-light.webp";
import specimenComparison from "../assets/content/material-specimens-comparison.webp";
import specimenCloseup from "../assets/content/material-specimen-closeup.webp";
import specimenSet from "../assets/content/material-specimen-set.webp";
import sampleGroup from "../assets/content/microbiology-sample-group.webp";
import mechanicalTestTall from "../assets/content/mechanical-compression-test.webp";
import mechanicalTest from "../assets/content/compression-test-specimen.webp";
import microbiologyBench from "../assets/content/microbiology-lab-bench.webp";
import looseFiber from "../assets/content/reinforcing-fibers.webp";
import industrialMaterial from "../assets/content/industrial-material-stockpile.webp";
import treatmentWall from "../assets/content/wastewater-treatment-wall.webp";
import cultureAnalysis from "../assets/content/petri-culture-analysis.webp";
import poBacColi from "../assets/content/po-bac-coli-microstructure.webp";
import innovationArch from "../assets/content/innovation-arch.jpg";
import offshoreEnergy from "../assets/content/offshore-energy-platform.png";
import fernando from "../assets/content/founder-fernando.jpeg";
import indira from "../assets/content/founder-indira.png";
import ivone from "../assets/content/founder-ivone.jpeg";

export const siteImages = {
  home: {
    approach: materialKit,
    applications: [treatmentPlant, ativaSpecimens, treatmentWall],
  },
  about: {
    hero: labBottles,
    founders: [fernando, ivone, indira],
    logo: specimenLight,
    landmark: innovationArch,
    city: innovationArch,
    values: cultureAnalysis,
  },
  technology: {
    hero: [semDetail, samplePreparation, mechanicalTest],
    structure: microbiologyBench,
  },
  applications: {
    hero: [treatmentWall, offshoreEnergy, specimenCloseup],
    fronts: [treatmentPlant, industrialMaterial, specimenFront, specimenPair],
    gallery: [culturePreparation, specimenSingle, microstructure009, offshoreEnergy, petriDish],
    contexts: freshConcrete,
    extra: [mechanicalTestTall, specimenSet, looseFiber],
  },
  projects: {
    hero: ativaSpecimens,
    portfolio: [treatmentWall, offshoreEnergy, specimenComparison, mechanicalTest, semSurface, poBacColi],
    highlights: sampleGroup,
  },
  contact: bioBurner,
} as const;
