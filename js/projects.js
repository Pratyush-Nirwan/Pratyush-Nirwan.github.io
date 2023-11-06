const projectCardsDiv = document.getElementById('project-cards');

  fetch('assets/projects.json')
    .then(response => response.json())
    .then(data => {
      data.projects.forEach(function(project) {
        const projectCard = document.createElement('div');
        projectCard.className = "project-card";

        const projectImg = document.createElement('img');
        projectImg.src = project.thumbnail;
        projectCard.appendChild(projectImg);

        const projectText = document.createElement('div');
        projectText.className = 'project-text';
        projectCard.appendChild(projectText);

        const name = document.createElement('h3');
        name.className = 'text';
        name.innerHTML = project.name.toUpperCase();
        projectText.appendChild(name);

        const desc = document.createElement('p');
        desc.className = 'general';
        desc.innerHTML = truncateText(project.description);
        projectText.appendChild(desc);

        const projectLinks = document.createElement('div');
        projectLinks.className = 'project-links'
        projectText.appendChild(projectLinks);

        const githubLink = document.createElement('a')
        githubLink.href = project.github_link;
        githubLink.innerHTML = '<i class="fa-brands fa-github"></i>';
        githubLink.target = '_blank';
        projectLinks.appendChild(githubLink);

        if(project.demo_link){
          const demo = document.createElement('a');
          demo.href = project.demo_link;
          demo.innerHTML = 'DEMO'
          demo.className = 'text'
          demo.target = '_blank';
          projectLinks.appendChild(demo)
        }
        projectCardsDiv.appendChild(projectCard);
        cardObserver.observe(projectCard);
      });
      const end = document.createElement('h2');
      end.innerHTML = '&lt/projects&gt';
      end.className = 'tag';
      projectCardsDiv.appendChild(end);
    })

    function truncateText(text) {
      if (text.length <= 100) {
        return text;
      }
      return text.slice(0, 100 - 3) + "...";
    }

    function activateProjectCards(entries, observer) {
      entries.forEach((entry) => {

        if (entry.isIntersecting) {
          entry.target.classList.add('project-card-enter');
        return;
        }else if (entry.boundingClientRect.top > 0) {
          entry.target.classList.remove('project-card-enter');
        }
      });
    }
    const cardObserver = new IntersectionObserver(activateProjectCards);
    
