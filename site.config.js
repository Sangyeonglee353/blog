const CONFIG = {
  // profile setting (required)
  profile: {
    name: "patiencelee",
    image: "/notion-avatar-left.svg", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "Developer",
    bio: "The tragedy of life begins not with failure, but with complacency.",
    email: "sangyeong.lee353@gmail.com",
    linkedin: "",
    github: "sangyeonglee353",
    instagram: "",
  },
  projects: [
    {
      name: `patiencelee-tech-log`,
      href: "https://github.com/Sangyeonglee353/blog",
    },
  ],
  // blog setting (required)
  blog: {
    title: "patiencelee-tech-log",
    description: "welcome to patiencelee-tech-log!",
  },

  // CONFIG configration (required)
  link: "https://patiencelee.vercel.app",
  since: 2023, // If leave this empty, current year will be used.
  lang: "ko-KR", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: true,
    config: {
      repo: "Sangyeonglee353/blog-comment",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
  revalidateTime: 21600 * 7, // revalidate time for [slug], index
}

module.exports = { CONFIG }
