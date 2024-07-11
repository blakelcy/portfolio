<script>
  import Nav from "$lib/Nav.svelte";
  import Article from "./Article.svelte";
  import Banner from "./Banner.svelte";
  import { founderImg, groceryImg, placeholderImg, truckerImg } from "./images";

  let article1Paragraphs = [
    "Without a doubt, my decision to join a contractor software company has accelerated my learning and professional growth beyond my expectations. The dynamic environment and challenges have propelled me to gain valuable experience in multiple industries. I had started with Cardinal Solutions Group in my last semester of my senior college year as an intern. The work, in truth, was tedious as I was entering in content for The Christ Hospitals new website. However, it introduced me into the world of a mid-sized consultancy and a career full of variety. After college I was fortunate enough to work full time for Cardinal Solutions, starting as a developer. While I was pretty garbage at C# and asp.net development, I was pretty decent at front end development. More importantly I enjoyed it. I quickly worked to switch gears and developed my front end expertise. I worked on various projects writing the html and css, from pattern libraries to full scale projects. But as technology evolved, so to were expectations for front end developers. Frameworks like bootstrap reduced the need for custom css.So I decided to transition more into the design side of projects. I had already worked closely with my design coworkers, and I knew my interests did not live in writing javascript, so this felt like the best career move. I still think it was, I enjoyed the processes relevant to design, especially UX research. Talking to users and helping solve problems became a real area of interest for me, which ultimately lead me to co-founding a company with my friend. The aim of which is to help people organize their things and return them sustainably to the earth when they are done with them.",
    // Add more paragraphs as needed
  ];

  let article1Cards = [
    {
      image: groceryImg,
      alt: "ai generated image of a grocery store",
      company: "The Kroger Company * Product Designer UI/UX",
      paragraph1: "Product designer for their fresh department associates.",
      paragraph2: "",
      link: "/case-study/kroger",
    },
    {
      image: truckerImg,
      alt: "ai generated image of a truck driver",
      company: "CLC Lodging * Product Designer/Business Analyst",
      paragraph1: "Lead designer and ux consultant for their redesign.",
      paragraph2: "",
      link: "/case-study/clc",
    },
    {
      image: founderImg,
      alt: "ai generated image of a truck driver",
      company: "Kwipoo",
      paragraph1: "Co-Founder (More to come!)",
      paragraph2: "",
      link: "",
    },
    // Add more cards as needed
  ];

  let article2Paragraphs = [
    "Without a doubt, my decision to join a contractor software company has accelerated my learning and professional growth beyond my expectations. The dynamic environment and challenges have propelled me to gain valuable experience in multiple industries. I had started with Cardinal Solutions Group in my last semester of my senior college year as an intern. The work, in truth, was tedious as I was entering in content for The Christ Hospitals new website. However, it introduced me into the world of a mid-sized consultancy and a career full of variety. After college I was fortunate enough to work full time for Cardinal Solutions, starting as a developer. While I was pretty garbage at C# and asp.net development, I was pretty decent at front end development. More importantly I enjoyed it. I quickly worked to switch gears and developed my front end expertise. I worked on various projects writing the html and css, from pattern libraries to full scale projects. But as technology evolved, so to were expectations for front end developers. Frameworks like bootstrap reduced the need for custom css.So I decided to transition more into the design side of projects. I had already worked closely with my design coworkers, and I knew my interests did not live in writing javascript, so this felt like the best career move. I still think it was, I enjoyed the processes relevant to design, especially UX research. Talking to users and helping solve problems became a real area of interest for me, which ultimately lead me to co-founding a company with my friend. The aim of which is to help people organize their things and return them sustainably to the earth when they are done with them.",
    // Add more paragraphs as needed
  ];

  let article2Cards = [
    {
      image: groceryImg,
      alt: "ai generated image of a grocery store",
      company: "The Kroger Company * Product Designer UI/UX",
      paragraph1: "Product designer for their fresh",
      paragraph2: "department associates.",
    },
    {
      image: truckerImg,
      alt: "ai generated image of a truck driver",
      company: "CLC Lodging ",
      paragraph1: "Lead designer and ux consultant",
      paragraph2: "for their redesign.",
    },
    {
      image: truckerImg,
      alt: "ai generated image of a truck driver",
      company: "CLC Lodging ",
      paragraph1: "Lead designer and ux consultant",
      paragraph2: "for their redesign.",
    },
    // Add more cards as needed
  ];
</script>

<Nav />
<Banner />
<Article
  title="The Growth and Experience of a Consultant"
  articleParagraphs={article1Paragraphs}
  articleCards={article1Cards}
/>
<!-- <Article title={'Hobbies'} bar={false} bordered={false} redText={true}
	articleParagraphs={article2Paragraphs}
	articleCards={article2Cards} /> -->
