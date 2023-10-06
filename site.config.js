const CONFIG = {
  // profile setting (required)
  profile: {
    name: "이호준",
    image: "/leecoder.png", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "BackEnd Developer",
    bio: "반갑습니다. 3년차 개발자 이호준입니다." +
        "포스팅 이관중입니다.",
    email: "leecoder5359@gmail.com",
    linkedin: "",
    github: "leecoder5359",
    instagram: "",
  },
  projects: [
    {
      name: `nest-face-crop`,
      href: "https://github.com/leecoder5359/nest-face-crop",
    },
  ],
  // blog setting (required)
  blog: {
    title: "leecoder",
    description: "welcome to leecoder!",
  },

  // CONFIG configration (required)
  link: "https://leecoder-blog-leecoder5359.vercel.app",
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
      repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO || "",
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
