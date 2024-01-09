<!-- Project.svelte -->
<script>
  export let card;
</script>

<div class="project-card" >
  <a href={card.url} class="project-image">
    <img src="https://picsum.photos/400" alt={card.title} />
  </a>
  <div class="project-details">
    <h2>{card.title}</h2>
    <p>{card.description}</p>
    <a href={card.url}>View Project</a>
  </div>
</div>

<style>
  .project-card {
    display: flex;
    margin-bottom: 40px;
    background-color: #f5f5f5;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .project-card h2 {
    margin-top: 0;
  }

  .project-card a {
    display: inline-block;
    margin-top: 10px;
    color: #007bff;
    text-decoration: none;
  }

  .project-card a:hover {
    text-decoration: underline;
  }

  .project-image {
    flex: 1;
    max-width: 500px;
    margin-right: 20px;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    cursor: pointer;
  }

  
  

  .project-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  .project-image img:hover {
    transform: scale(1.1);
  }

  .project-details {
    flex: 1;
  }

  .project-details h2 {
    margin-top: 0;
    margin-bottom: 10px;
  }

  .project-details p {
    margin-bottom: 10px;
  }

  .project-details a {
    color: #007bff;
    text-decoration: none;
    display: inline-block;
  }

  .project-details a:hover {
    text-decoration: underline;
  }
</style>
