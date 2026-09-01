import feau from "../assets/logos/colleges/feau.webp";
import ipd from "../assets/logos/colleges/ipd.webp";
import ppgm from "../assets/logos/colleges/ppgm.webp";
import unesp from "../assets/logos/colleges/unesp.webp";
import univap from "../assets/logos/colleges/univap.webp";

export type LogoItem = {
  name: string;
  href?: string;
  src: string;
};

export const colleges: LogoItem[] = [
  { name: "Feau", href: "#", src: feau },
  { name: "IPD", href: "#", src: ipd },
  { name: "PPGM", href: "#", src: ppgm },
  { name: "Unesp", href: "#", src: unesp },
  { name: "Univap", href: "#", src: univap },
];
