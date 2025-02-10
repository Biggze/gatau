export function projectsSectionFunctionality(){
  const projects = [
    {
        image: 'project.gif',
        title: 'Capstone Project',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, eligendi maxime harum quo doloribus iusto praesentium',
        role: 'Front End Developer',
      
    },
    {
        image: 'project.gif',
        title: 'Sipetani',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, eligendi maxime harum quo doloribus iusto praesentium',
        role: 'Designer',
       
    },
    {
        image: 'project.gif',
        title: 'auwo',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, eligendi maxime harum quo doloribus iusto praesentium',
        role: 'Designer',
        
    }
  ];

  let projectHTML = '';

  projects.forEach(project => {
    projectHTML+= `
      <div class="project-card">
          <div class="container title-and-description">
            <h2 class="project-title">${project.title}</h2>
            <p class="project-description semi-transparent-word">
              ${project.description}
            </p>
            <button class="call-to-action-btn">Visit Site</button>
          </div>
          <div class="fade-bgColor"></div>
          <div class="container image-and-result">   
            <img class="project-image" src="images and icons/icons/${project.image}" alt="proj-img" />
            <div class="project-result d-flex">
              <div>
                <p class="role semi-transparent-word">Role</p>
                <p class="result">${project.role}</p>
              </div>  
              <div>
              </div>
            </div>
          </div>
        </div>
    `
  });
  
  document.querySelector('.projects-container').innerHTML = projectHTML


}
