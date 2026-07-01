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
    "A student-led nonprofit that empowers young people to become creators through STEM education, creative expression, community support, and real-world service.",
  missionTitle: "Empowering minds. Fueling creators",
  missionText:
    "We are building programs and partnerships that help students think, build, share, and make an impact.",
  donateTitle: "Help us create more opportunities",
  donateText:
    "Your support helps fund STEM materials, library events, workshops, outreach, and donations to education-focused partners.",
  donateButtonText: "Donate on GoFundMe",
  donateUrl:
    "https://www.gofundme.com/f/creation-over-consumption-the-creation-movement",
};
