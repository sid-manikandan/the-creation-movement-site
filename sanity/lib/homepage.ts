export type HomepageContent = {
  heroTitle: string;
  heroSubtitle: string;
  missionTitle: string;
  missionText: string;
  donateTitle: string;
  donateText: string;
  donateButtonText: string;
  donateUrl: string;
};

export const fallbackHomepageContent: HomepageContent = {
  heroTitle: "The Creation Movement",
  heroSubtitle:
    "A youth-led nonprofit inspiring young people to become creators through STEM education, creative expression, community support, and real-world service.",
  missionTitle: "Empowering minds. Fueling creators.",
  missionText:
    "We are building programs and partnerships that help students think, build, share, and make an impact.",
  donateTitle: "Next up",
  donateText:
    "The current pages use clean placeholders for bios, partner notes, and forms so the site can grow as you collect final text.",
  donateButtonText: "Donate on GoFundMe",
  donateUrl:
    "https://www.gofundme.com/f/creation-over-consumption-the-creation-movement",
};
