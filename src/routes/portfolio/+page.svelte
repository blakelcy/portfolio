<!-- Projects.svelte -->
<script>
  import Card from './Card.svelte';

  let cards = [
    {
      title: 'Project 1',
      description: 'Description of Project 1',
      url: 'portfolio/kroger'
    },
    {
      title: 'Project 2',
      description: 'Description of Project 2',
      url: 'https://www.example.com/project2'
    },
    {
      title: 'Project 3',
      description: 'Description of Project 1',
      url: 'https://www.example.com/project1'
    },
    {
      title: 'Project 4',
      description: 'Description of Project 2',
      url: 'https://www.example.com/project2'
    },
    {
      title: 'Project 5',
      description: 'Description of Project 1',
      url: 'https://www.example.com/project1'
    },
    {
      title: 'Project 6',
      description: 'Description of Project 2',
      url: 'https://www.example.com/project2'
    },
    // Add more projects as needed
  ];
</script>

<h1>My Projects</h1>

<div class="projects-grid">
  {#each cards as card (card.title)}
    <Card {card}/>
  {/each}
</div>

<style>
  .projects-grid {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  

 
</style>
