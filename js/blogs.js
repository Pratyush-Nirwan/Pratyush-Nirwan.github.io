const API_ENDPOINT="https://dev.to/api/articles?username=pratyushnirwan&per_page=5";

async function fetchBlogPosts(){
    const response = await fetch(API_ENDPOINT);
    const posts = await response.json();
    const blogsGrid = document.getElementById('blogs-grid');
    document.getElementById('loading').style.animation = 'fadeOut 1s ease'
    document.getElementById('loading').style.display = 'none'
  
    for(let post of posts){
        const blog = document.createElement('div');
        blog.id = 'blog-card';
        const link = document.createElement('a');
        const coverImg = document.createElement('img');
        const title = document.createElement('h2');
        const description = document.createElement('p');
        coverImg.src = post.cover_image;
        title.textContent = post.title.toUpperCase();
        title.className = 'text'
        description.textContent = post.description;
        description.className = "general"
        link.href = post.url;
        link.target = "_blank";
        blog.appendChild(coverImg);
        blog.appendChild(title);
        blog.appendChild(description);
        link.appendChild(blog);
        blogsGrid.appendChild(link);
        cardObserver.observe(link);
    }
}
fetchBlogPosts();

function activateBlogCards(entries, observer) {
    entries.forEach((entry) => {

      if (entry.isIntersecting) {
        entry.target.style.scale = 1;
        entry.target.classList.add('blog-card-enter');
      return;
      }else if (entry.boundingClientRect.top > 0) {
        entry.target.style.scale = 0;
        entry.target.classList.remove('blog-card-enter');
      }
    });
  }
  const cardObserver = new IntersectionObserver(activateBlogCards);