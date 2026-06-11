export const BUSINESS = {
  name: "Papi Mbow Auto Parts",
  taglineLine1: "La Mécanique Moderne en Action",
  slogan: "Passion Mécanique. Précision Moderne.",
  owner: "M. Papa Samba Mbow",
  ownerRole: "Directeur Général",
  location: "Hann Maristes, Dakar, Sénégal",
  phone: "+221 78 479 79 35",
  phoneHref: "tel:+221784797935",
  landline: "+221 33 832 88 72",
  whatsapp: "221784797935",
  hours: "Lundi – Samedi : 8h – 19h",
  email: "mbowpa93@gmail.com",
  facebook: "https://www.facebook.com/profile.php?id=100063796067423",
  instagram: "https://www.instagram.com/papi_mbow_auto_parts_officiel/",
  tiktok: "https://vt.tiktok.com/ZSQfGt2T9/",
}

export function waLink(message: string) {
  return `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(message)}`
}

export const NAV_LINKS = [
  { label: "Accueil", href: "#accueil" },
  { label: "Services", href: "#services" },
  { label: "Catalogue", href: "#catalogue" },
  { label: "Galerie", href: "#galerie" },
  { label: "À propos", href: "#a-propos" },
  { label: "Contact", href: "#contact" },
]
