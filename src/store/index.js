import portfolio from "@assets/portfolio_compress.webp";
import documentation from "@assets/documentation.webp";
import website from "@assets/website_compress.webp"

const contents = [
  {
    id: 0,
    tag: "Side project",
    title: "Resumé Website",
    short_description: "Portfolio resume website",
    long_description: `This is the current website. This website aims to develop a modern website - with mobile experiences, dark mode and multiple language included.`,
    img: portfolio,
    link: "https://resonant-vacherin-c71577.netlify.app/",
    including: [
      "AstroJS as static site generator (SSG)",
      "SolidJS for reactivity components",
      "TailwindCSS",
    ],
  },
  {
    id: 1,
    tag: "Side project",
    title: "Documentation website",
    short_description: "Personal documented website",
    long_description: `This website works as a note for my previous snippets and concepts of programming.`,
    img: documentation,
    link: "https://highlander-spirou.github.io/second-documentation/docs/category/pyspark",
    including: [
      "Docusaurus as main site generator",
      "MDX for content management",
      "Self-hosted Algolia for indexing and full text search",
    ],
  },
  {
    id: 2,
    tag: "Side project",
    title: "Food app",
    short_description: "Food app with Gatsby and Strapi",
    long_description: `This website practice GraphQL and modern website development with Gatsby and Strapi`,
    img: website,
    link: "https://highlander-spirou.github.io/second-documentation/docs/category/pyspark",
    including: [
      "Gatsby as frontend and static site generator (SSG)",
      "Strapi for database and headless CMS",
    ],
  },
];

export default contents;
