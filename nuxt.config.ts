// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from "@nuxt/bridge";

const TITLE = "Maickell Vilela - UI/UX Designer & Frontend Developer";
const GENERAL_DESCRIPTION =
  "I am a UI/UX designer with a dedication to creating intuitive and aesthetically pleasing user experiences. With a deep understanding of Design Systems and hands-on experience with Figma, I bring my designs to life using modern frontend technologies such as Vue.js, Tailwind CSS, Nuxt, and HTML/CSS. My attention to detail extends to the quality assurance process, where I use tools like Cypress and Jest to ensure the final product meets high standards. Whether it's in Brazilian Portuguese, English, Spanish or French, my goal is to create solutions that deliver value to users and the business. Let's work together!";
const KEYWORDS =
  "frontend developer, agile designer, design system, Figma, Vue.js, Tailwind CSS, Nuxt, Cypress, Jest, HTML, CSS, JavaScript";
const WEBSITE_URL = "https://maickellvilela.github.io/portfolio/";

const OG_IMAGE = WEBSITE_URL + "MaickellVilela-cover.jpg";
const BROWSER_CONFIG = WEBSITE_URL + "browserconfig.xml";
const APPLE_ICON = WEBSITE_URL + "apple-touch-icon.png";
const ICON_32 = WEBSITE_URL + "favicon-32x32.png";
const ICON_16 = WEBSITE_URL + "favicon-16x16.png";
const MANIFEST = WEBSITE_URL + "site.webmanifest";
const MASK_ICON = WEBSITE_URL + "safari-pinned-tab.svg";
const FAVICON = WEBSITE_URL + "favicon.ico";

export default defineNuxtConfig({
  app: {
    baseURL: "/portfolio/",
    buildAssetsDir: "assets",
    head: {
      charset: "utf-16",
      viewport: "width=device-width, initial-scale=1",
      title: TITLE,
      meta: [
        {
          name: "description",
          content: GENERAL_DESCRIPTION,
        },
        { name: "revisit-after", content: "1 day" },
        { name: "author", content: "Maickell Vilela" },
        {
          name: "keywords",
          content: KEYWORDS,
        },
        {
          property: "og:title",
          content: TITLE,
        },
        {
          property: "og:description",
          content: GENERAL_DESCRIPTION,
        },
        { property: "og:type", content: "website" },
        { property: "og:url", content: WEBSITE_URL },
        {
          property: "og:image",
          content: OG_IMAGE,
        },
        { property: "og:image:width", content: "1200" },
        { property: "og:image:height", content: "630" },
        { name: "twitter:card", content: "summary_large_image" },
        {
          name: "twitter:title",
          content: TITLE,
        },
        {
          name: "twitter:description",
          content: GENERAL_DESCRIPTION,
        },
        {
          name: "twitter:image",
          content: OG_IMAGE,
        },
        { property: "og:locale", content: "en_US" },
        { property: "og:locale:alternate", content: "pt_BR" },
        { property: "og:locale:alternate", content: "fr_FR" },
        { property: "og:locale:alternate", content: "es_ES" },
        { name: "msapplication-TileColor", content: "#050e1c" },
        {
          name: "msapplication-config",
          content: BROWSER_CONFIG,
        },
        { name: "theme-color", content: "#050E1C" },
      ],
      link: [
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: APPLE_ICON,
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: ICON_32,
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: ICON_16,
        },
        {
          rel: "manifest",
          href: MANIFEST,
        },
        {
          rel: "mask-icon",
          href: MASK_ICON,
          color: "#050e1c",
        },
        {
          rel: "shortcut icon",
          href: FAVICON,
        },
      ],
    },
  },

  ssr: false,
  modules: ["@nuxtjs/tailwindcss", "@vueuse/nuxt", "@nuxt/content"],
  compatibilityDate: "2025-02-20",
});