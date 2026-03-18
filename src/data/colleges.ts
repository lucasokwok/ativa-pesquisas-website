import feau from "../assets/logos/colleges/feau.webp";
import IPD from "../assets/logos/colleges/IPD.webp";
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
  { name: "IPD", href: "#", src: IPD },
  { name: "PPGM", href: "#", src: ppgm },
  { name: "Unesp", href: "#", src: unesp },
  { name: "Univap", href: "#", src: univap },
];
