<script>
  import Nav from "$lib/Nav.svelte";
  import { base } from "$app/paths";
  import Article from "./Article.svelte";
  import Banner from "./Banner.svelte";
  import { krogerImg, clcImg, kwipooImg } from "./images";

  let article1Paragraphs = [
    "",
    // Add more paragraphs as needed
  ];

  let article1Cards = [
    {
      image: krogerImg,
      alt: "ai generated image of a grocery store",
      company: "The Kroger Company * Product Designer UI/UX",
      paragraph1: "Product designer for their fresh department associates.",
      paragraph2: "",
      linkAction: false,
      link: "/case-study/kroger",
    },
    {
      image: clcImg,
      alt: "ai generated image of a truck driver",
      company: "CLC Lodging * Product Designer/Business Analyst",
      paragraph1: "Lead designer and ux consultant for their redesign.",
      paragraph2: "",
      linkAction: false,
      link: "/case-study/clc",
    },
    {
      image: kwipooImg,
      alt: "ai generated image of a truck driver",
      company: "Kwipoo ",
      paragraph1: "Co-Founder, designer and marketer.",
      paragraph2: "",
      link: "https://www.kwipoo.app/",
      linkAction: true,
    },
    // Add more cards as needed
  ];
</script>

<Nav />
<Banner />
<Article
  title="Consultancy Molds a Product Designer"
  articleParagraphs={article1Paragraphs}
  articleCards={article1Cards}
/>
<!-- <Article
  title={"Hobbies"}
  bar={false}
  bordered={false}
  redText={true}
  articleParagraphs={article2Paragraphs}
  articleCards={article2Cards}
/> -->
