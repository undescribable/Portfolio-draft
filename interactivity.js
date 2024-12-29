// script.js

// Dynamically add project cards
const projects = [
    {
        title: 'Portfolio Website',
        description: 'A personal portfolio website built with HTML, CSS, and JavaScript.',
        link: 'https://github.com/johndoe/portfolio'
    },
    {
        title: 'Weather App',
        description: 'A weather application using JavaScript and the OpenWeather API.',
        link: 'https://github.com/johndoe/weather-app'
    },
    {
        title: 'To-Do List',
        description: 'A simple to-do list application built with JavaScript.',
        link: 'https://github.com/johndoe/to-do-list'
    }
];

// Select the project cards container
const projectContainer = document.querySelector('.project-cards');

// Create project cards dynamically
projects.forEach(project => {
    const card = document.createElement('div');
    card.classList.add('project-card');
    
    const title = document.createElement('h3');
    title.textContent = project.title;
    
    const description = document.createElement('p');
    description.textContent = project.description;
    
    const link = document.createElement('a');
    link.href = project.link;
    link.target = '_blank';
    link.textContent = 'View Project';
    
    card.appendChild(title);
    card.appendChild(description);
    card.appendChild(link);
    
    projectContainer.appendChild(card);
});

// Handle the contact form submission
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    if (name && email && message) {
        alert(`Thank you, ${name}! Your message has been sent.`);
        contactForm.reset(); // Reset the form after submission
    } else {
        alert('Please fill in all fields before submitting.');
    }
});