// src/data/partners.ts

import curimbaba from "../assets/logos/partners/partner-curimbaba.webp";
import drymax from "../assets/logos/partners/partner-drymax.webp";
import elfusa from "../assets/logos/partners/partner-elfusa.webp";
import jkVidro from "../assets/logos/partners/partner-jk-vidro.webp";
import kuraray from "../assets/logos/partners/partner-kuraray.webp";
import penetron from "../assets/logos/partners/partner-penetron.webp";
import sabesp from "../assets/logos/partners/partner-sabesp.webp";
import votorantin from "../assets/logos/partners/partner-votorantin.webp";
import weerlin from "../assets/logos/partners/partner-weerlin.webp";

export type LogoItem = {
  name: string;
  href?: string; // você preenche depois
  src: string;
};

export const partners: LogoItem[] = [
  { name: "Curimbaba", href: "#", src: curimbaba },
  { name: "Drymax", href: "#", src: drymax },
  { name: "Elfusa", href: "#", src: elfusa },
  { name: "JK Vidro", href: "#", src: jkVidro },
  { name: "Kuraray", href: "#", src: kuraray },
  { name: "Penetron", href: "#", src: penetron },
  { name: "Sabesp", href: "#", src: sabesp },
  { name: "Votorantin", href: "#", src: votorantin },
  { name: "Weerlin", href: "#", src: weerlin },
];
