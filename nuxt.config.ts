// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from "@nuxt/bridge";

const TITLE = "Maickell Vilela - UI/UX Designer & Frontend Developer";
const GENERAL_DESCRIPTION =
  "I am a UI/UX designer with a dedication to creating intuitive and aesthetically pleasing user experiences. With a deep understanding of Design Systems and hands-on experience with Figma, I bring my designs to life using modern frontend technologies such as Vue.js, Tailwind CSS, Nuxt, and HTML/CSS. My attention to detail extends to the quality assurance process, where I use tools like Cypress and Jest to ensure the final product meets high standards. Whether it's in Brazilian Portuguese, English, Spanish or French, my goal is to create solutions that deliver value to users and the business. Let's work together!";
const KEYWORDS =
  "frontend developer, agile designer, design system, Figma, Vue.js, Tailwind CSS, Nuxt, Cypress, Jest, HTML, CSS, JavaScript";
const OG_IMAGE_URL =
  "https://maickellvilela.github.io/portfolio/public/MaickellVilela-cover.jpg";
const WEBSITE_URL = "https://maickellvilela.github.io/portfolio/";

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
          content: OG_IMAGE_URL,
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
          content: OG_IMAGE_URL,
        },
        { property: "og:locale", content: "en_US" },
        { property: "og:locale:alternate", content: "pt_BR" },
        { property: "og:locale:alternate", content: "fr_FR" },
        { property: "og:locale:alternate", content: "es_ES" },
        { name: "msapplication-TileColor", content: "#050e1c" },
        {
          name: "msapplication-config",
          content:
            "https://maickellvilela.github.io/portfolio/public/browserconfig.xml",
        },
        { name: "theme-color", content: "#050E1C" },
      ],
      link: [
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "https://maickellvilela.github.io/portfolio/public/apple-touch-icon.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: "https://maickellvilela.github.io/portfolio/public/favicon-32x32.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: "https://maickellvilela.github.io/portfolio/public/favicon-16x16.png",
        },
        {
          rel: "manifest",
          href: "https://maickellvilela.github.io/portfolio/public/site.webmanifest",
        },
        {
          rel: "mask-icon",
          href: "https://maickellvilela.github.io/portfolio/public/safari-pinned-tab.svg",
          color: "#050e1c",
        },
        {
          rel: "shortcut icon",
          href: "https://maickellvilela.github.io/portfolio/public/favicon.ico",
        },
      ],
    },
  },
  ssr: false,
  modules: ["@nuxtjs/tailwindcss", "@vueuse/nuxt", "@nuxt/content"],
});
