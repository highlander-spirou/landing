import portfolio from "@assets/portfolio_compress.webp";
import website from "@assets/website_compress.webp";


const introductionContent = {
  en: {
    line1: "hello",
    line2: "I'm Nhân Lê",
    line3: "CAPABILITIES 💪:",
    line4: "Create APIs in",
    "line4.1": "and",
    line5: "Fullstack webs with",
    line6: "Contact",
    line7: "read more",
    line8: "Contact information",
  },
  vi: {
    line1: "xinchào",
    line2: "Tôi là Nhân Lê",
    line3: "KỸ NĂNG 💪:",
    line4: "Xây dựng API bằng",
    "line4.1": "và",
    line5: "Fullstack webs với",
    line6: "Liên hệ",
    line7: "Tìm hiểu thêm",
    line8: "Thông tin liên lạc",
  },
};

const educationContent = {
  en: {
    header: "Education",
    line1:
      "I am a graduated at International University, major in Biochemistry. However, I've always interested in technology and had transition myself to software career path back in 2019, as a self-taught student. My knowledge in software engineering comprise of:",
    line2: "Certificates",
  },
  vi: {
    header: "Học vấn",
    line1:
      "Tôi đã tốt nghiệp tại Đại học Quốc tế, chuyên ngành Hóa sinh. Tuy nhiên, tôi luôn niềm đam mê với công nghệ và đã định hướng bản thân sang con đường kĩ thuật phần mềm từ năm 2019, với tư cách là người tự học. Kiến thức của tôi về công nghệ phần mềm bao gồm:",
    line2: "Các chứng chỉ đã đạt",
  },
};

const accordionContent = {
  en: [
    {
      title: "Programming Languages",
      content: (
        <p class="pt-2 leading-relaxed">
          The programming languages that I've learnt are{" "}
          <code class="no-underline cursor-default link link-error">
            Python
          </code>
          ,{" "}
          <code class="no-underline cursor-default link link-error">
            Javascript, Typescript
          </code>
          , <code class="no-underline cursor-default link link-error">SQL</code>
          , and{" "}
          <code class="no-underline cursor-default link link-error">VBA</code>
        </p>
      ),
    },
    {
      title: "Backend technologies",
      content: (
        <div class="pt-2 leading-relaxed">
          <p>
            I've been developing APIs and websites with Python and Javascript
            frameworks, specifically with{" "}
            <code class="no-underline cursor-default link link-error">
              Flask, Django, FastAPI
            </code>{" "}
            (Python), and{" "}
            <code class="no-underline cursor-default link link-error">
              Express
            </code>{" "}
            (JS).
          </p>
          <p>
            I am also able to implement some commons API requirements, including
            Authentication-authorization and Deployment
          </p>
        </div>
      ),
    },
    {
      title: "Frontend technologies",
      content: (
        <div class="pt-2 leading-relaxed">
          <p>
            I am able to develop frontend using{" "}
            <code class="no-underline cursor-default link link-error">
              React, Vue and SolidJS
            </code>{" "}
            and its meta-frameworks including{" "}
            <code class="no-underline cursor-default link link-error">
              NextJS
            </code>{" "}
            .
          </p>
          <p>
            For styling, I am able to work with{" "}
            <code class="no-underline cursor-default link link-error">
              Vanilla CSS, SASS and Tailwind
            </code>
          </p>
        </div>
      ),
    },
    {
      title: "Databases",
      content: (
        <div class="pt-2 leading-relaxed">
          <p>
            I am comfortable to working with most relational database like{" "}
            <code class="no-underline cursor-default link link-error">
              MySQL, PostgreSQL
            </code>{" "}
            via SQL commands and ORMs such as SQLAlchemy (python) and Prisma
            (javascript)
          </p>
          <p>
            Also, I've been working with some SaaS databases, including{" "}
            <code class="no-underline cursor-default link link-error">
              Firebase, Supabase and Mongo Atlas
            </code>
          </p>
        </div>
      ),
    },
    {
      title: "Data structure and algorithm",
      content: (
        <div class="pt-2 leading-relaxed">
          I am able to solve data structure and algorihtm problems easy to
          medium level from Leetcode. I am also familiar with some design
          patterns and OOP, and able to normalize - denormalize databases base
          on star-schema or snowflake
        </div>
      ),
    },
    {
      title: "Others",
      content: (
        <div class="pt-2 leading-relaxed">
          I am able to use linux commands, git, docker and working with Google
          Cloud Platform
        </div>
      ),
    },
  ],
  vi: [
    {
      title: "Ngôn ngữ lập trình",
      content: (
        <p class="pt-2 leading-relaxed">
          Các ngôn ngữ lập trình đã học là{" "}
          <code class="no-underline cursor-default link link-error">
            Python
          </code>
          ,{" "}
          <code class="no-underline cursor-default link link-error">
            Javascript, Typescript
          </code>
          , <code class="no-underline cursor-default link link-error">SQL</code>
          , và{" "}
          <code class="no-underline cursor-default link link-error">VBA</code>
        </p>
      ),
    },
    {
      title: "Kiến thức về Backend",
      content: (
        <div class="pt-2 leading-relaxed">
          <p>
            Xây dựng API bằng{" "}
            <code class="no-underline cursor-default link link-error">
              Flask, Django, FastAPI
            </code>{" "}
            (Python), and{" "}
            <code class="no-underline cursor-default link link-error">
              Express
            </code>{" "}
            (JS).
          </p>
          <p>
            Ngoài ra còn có khả năng xử lí một số yêu cầu liên quan đến API như{" "}
            <code class="no-underline cursor-default link link-error">
              Xác nhận và phân quyền người dùng
            </code>
            ,{" "}
            <code class="no-underline cursor-default link link-error">
              Triển khai API
            </code>
          </p>
        </div>
      ),
    },
    {
      title: "Kiến thức về Frontend",
      content: (
        <div class="pt-2 leading-relaxed">
          <p>
            Sử dụng tốt các thư viện{" "}
            <code class="no-underline cursor-default link link-error">
              React, Vue and SolidJS
            </code>{" "}
            và các thư viện fullstack như{" "}
            <code class="no-underline cursor-default link link-error">
              NextJS
            </code>{" "}
            .
          </p>
          <p>
            Sử dụng các thư viện CSS như{" "}
            <code class="no-underline cursor-default link link-error">
              Vanilla CSS, SASS và Tailwind
            </code>
          </p>
        </div>
      ),
    },
    {
      title: "Database",
      content: (
        <div class="pt-2 leading-relaxed">
          <p>
            Có khả năng xây dựng, kết nối, và truy vấn các CSDL{" "}
            <code class="no-underline cursor-default link link-error">
              MySQL, PostgreSQL
            </code>{" "}
            bằng SQL hay các thư viện ORM bao gồm SQLAlchemy (python) and Prisma
            (javascript)
          </p>
          <p>
            Ngoài ra, từng sử dụng các BaaS như{" "}
            <code class="no-underline cursor-default link link-error">
              Firebase, Supabase and Mongo Atlas
            </code>
          </p>
        </div>
      ),
    },
    {
      title: "Cấu trúc dữ liệu và thuật toán",
      content: (
        <div class="pt-2 leading-relaxed">
          Có khả năng giải các bài toán cấu trúc dữ liệu và thuật toán từ dễ đến
          trung bình từ Leetcode. Ngoài ra, còn có kiến thức liên quan đến OOP,
          design patterns, xây dựng database theo hướng snowflake và star-schema
        </div>
      ),
    },
    {
      title: "Các kĩ năng khác",
      content: (
        <div class="pt-2 leading-relaxed">
          Sử dụng tốt các câu lệnh linux, git, docker, và từng
          học triển khai các dự án mẫu trên Google Cloud Platform
        </div>
      ),
    },
  ],
};

const experienceContent = {
  en: {
    header: "Experiences",
    line1: "I spent one year working as a freelance developer at a logistics company. In that time, I had opportunities to develop and debug React (NextJS) project as well as backends using Flask and FastAPI.",
    line2: "Also, I also spent numberous hours sharpen my skill, doing side projects to learn different ways to build applications, as well as using those side projects to learn new concepts",
    "modal.title1": "About this project",
    "modal.title2": "What's in this project:",

  },
  vi: {
    header: "Kinh nghiệm",
    line1: "Tôi đã dành một năm làm việc với tư cách là lập trình viên tự do tại một công ty Logistics. Vào thời điểm đó, tôi đã có cơ hội phát triển dự án React (NextJS) cũng như xây dựng API bằng Flask và FastAPI.",
    line2: "Ngoài ra, tôi cũng đã dành nhiều giờ để trau dồi kỹ năng của mình, thực hiện các dự án phụ để tìm hiểu các cách khác nhau để xây dựng ứng dụng, cũng như sử dụng các dự án phụ đó để tìm hiểu các khái niệm mới.",
    "modal.title1": "Tổng quan về dự án",
    "modal.title2": "Công nghệ sử dụng:",
  },
}

const cardContent = [
  {
    id: 0,
    tag: "Side project",
    title: "Resumé Website",
    short_description: "Portfolio resume website",
    long_description: `This is the current website. This website aims to develop a website with mobile experiences and dark mode included.`,
    img: portfolio,
    including: [
      "AstroJS as static site generator (SSG)",
      "SolidJS for reactivity components",
      "TailwindCSS",
    ],
  },
];


export { introductionContent, educationContent, accordionContent, experienceContent };
