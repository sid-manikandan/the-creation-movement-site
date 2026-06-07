import { defineQuery } from "next-sanity";

export const HOMEPAGE_QUERY = defineQuery(`*[_type == "homepage" && _id == "homepageContent"][0]{
  heroTitle,
  heroSubtitle,
  missionTitle,
  missionText,
  donateTitle,
  donateText,
  donateButtonText,
  donateUrl
}`);
