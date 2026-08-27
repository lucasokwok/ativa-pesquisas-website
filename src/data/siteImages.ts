import treatmentPlant from "../../Imagens/-DSC0243-JPG.webp";
import microstructure009 from "../../Imagens/009-jpg.webp";
import samplePreparation from "../../Imagens/20230704-120833-jpg.webp";
import specimenSingle from "../../Imagens/20230714-101322-jpg.webp";
import specimenPair from "../../Imagens/20230725-112036-jpg.webp";
import culturePreparation from "../../Imagens/20230814-170011-jpg.webp";
import petriDish from "../../Imagens/20230815-153924-001.webp";
import ativaSpecimens from "../../Imagens/ATIVA-jpg.webp";
import bioBurner from "../../Imagens/Bio3-jpg.webp";
import semDetail from "../../Imagens/capa-jpg-upscayl-2x.webp";
import semSurface from "../../Imagens/capa-jpg.webp";
import freshConcrete from "../../Imagens/Concreto-fresco-jpg.webp";
import labBottles from "../../Imagens/edit-image (2).webp";
import materialKit from "../../Imagens/edit-image (3).webp";
import specimenFront from "../../Imagens/edit-image (4).webp";
import specimenLight from "../../Imagens/edit-image (5).webp";
import specimenComparison from "../../Imagens/edit-image (6).webp";
import specimenCloseup from "../../Imagens/edit-image (7).webp";
import specimenSet from "../../Imagens/edit-image (8).webp";
import sampleGroup from "../../Imagens/edit-image.webp";
import mechanicalTestTall from "../../Imagens/Ensaio-mec-C3-A2nico (1).webp";
import mechanicalTest from "../../Imagens/Ensaio-mec-C3-A2nico.webp";
import microbiologyBench from "../../Imagens/Ensaio-Vanessa-jpg.webp";
import looseFiber from "../../Imagens/Fibra-jpg.webp";
import industrialMaterial from "../../Imagens/IMG-20230607-WA0055.webp";
import treatmentWall from "../../Imagens/Parede-ETE-upscayl-1.webp";
import cultureAnalysis from "../../Imagens/Petri-cultura-jpg.webp";
import poBacColi from "../../Imagens/PO-BAC-Coli-jpg.webp";
import innovationArch from "../../Imagens/arcodainovacaoPeB.jpg";
import offshoreEnergy from "../../Imagens/estacao de coleta de petroleo e eolica no meio do mar.png";
import fernando from "../../Imagens/fernando.jpeg";
import indira from "../../Imagens/indira.png";
import ivone from "../../Imagens/ivone.jpeg";

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
