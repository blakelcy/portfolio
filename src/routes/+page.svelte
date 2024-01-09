<script>
	import Article from './Article.svelte';
	import Banner from './Banner.svelte';
	import { groceryImg, placeholderImg, truckerImg } from './images';

	let article1Paragraphs = [
		'Without a doubt, my decision to join a contractor software company has accelerated my learning and professional growth beyond my expectations. The dynamic environment and challenges have propelled me to gain valuable experience in multiple industries.',
		'I had started with Cardinal Solutions Group in my last semester of my senior college year as an intern. The work, in truth, was tedious as I was entering in content for The Christ Hospitals new website. However, it introduced me into the world of a mid-sized consultancy and '
		// Add more paragraphs as needed
	];

	let article1Cards = [
		{
			image: groceryImg,
			alt: 'Image 1',
			company: 'The Kroger Company ',
			paragraph1: 'Product designer',
			paragraph2: 'for their fresh department associates.'
		},
		{
			image: truckerImg,
			alt: 'Image 2',
			company: 'CLC Lodging ',
			paragraph1: 'Lead designer and ux',
			paragraph2: 'consultant for redesign.'
		}
		// Add more cards as needed
	];
</script>

<Banner />
<Article
	title="The Growth and Experience of a Consultant"
	articleParagraphs={article1Paragraphs}
	articleCards={article1Cards}
/>
<Article title={'Hobbies'} bar={false} bordered={false} />