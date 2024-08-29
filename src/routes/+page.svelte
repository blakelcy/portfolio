<script>
  import Nav from "$lib/Nav.svelte";
  import { base } from "$app/paths";
  import Article from "./Article.svelte";
  import Banner from "./Banner.svelte";
  import Pamphlet from "$lib/components/Pamphlet.svelte";
  const pamphlets = [
    {
      title: "Kroger",
      role: "Product Designer",
      description:
        "Lead product designer for Kroger’s Fresh Departments. I was responsible for a web portal and Android application that helped department leaders and associates better account for production amounts in the bakeries, delis and butchers enterprise wide.",
      link: "/case-study/kroger",
      heroImg: "/assets/scenery/mountain-lake.png",
      productImg: "/assets/productImages/kroger/imgBakery.png",
      altText: "Mountain view from the slopes of Humboldt in Colorado",
    },
    {
      title: "CLC Lodging",
      role: "Product Designer & Business Analyst",
      description:
        "Lead product designer for CLC Lodging's request for UX improvements to their mobile application. Heuristic Analysis revealed a need for more recognizable UI patterns and user flows. I led a small team in gathering requirements in order to enhance the application's user experience as well as update it's UI to a more modern feel.",
      link: "/case-study/clc",
      heroImg: "/assets/scenery/river-rapids.png",
      productImg: "/assets/productImages/clc/figure2.png",
      altText:
        "A flowing river cascading over rocks from Yosemite National Park",
    },
    {
      title: "Kwipoo",
      role: "Co-founder",
      description:
        "I am on of the founders of AdventureWare with our first product being Kwipoo, a mobile application that aims to be your personal resource management hub. With Kwipoo we hope to give users opportunities to use and extend the lifespan of the products they buy. With your Things at your fingertips, you can plan events more efficiently, repair items easier, find alternate ways to dispose of things that can help your local economy. Let's make the world better for the next generation.",
      link: "https://www.kwipoo.app/",
      heroImg: "/assets/scenery/mountain-forest.png",
      productImg: "/assets/productImages/kwipoo/kwipooImg.png",
      altText:
        "A forested valley between the mountains of Glacier National Park",
    },
  ];

  // Function to prepend base to internal links
  function getFullPath(link) {
    if (link.startsWith("http")) {
      return link; // External link, return as is
    }
    return `${base}${link}`; // Internal link, prepend base
  }
</script>

<Nav />
<Banner />
<Article title="Consultancy Molds a Product Designer" />
<section>
  <Pamphlet
    pamphlets={pamphlets.map((p) => ({ ...p, link: getFullPath(p.link) }))}
  />
</section>

<style>
  section {
    background-color: #030302;
  }
</style>
