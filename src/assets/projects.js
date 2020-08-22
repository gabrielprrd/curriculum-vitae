import screenshotTest from './images/screenshot-test.png';

const Projects = [
  {
    title: "Gabriska's  Gif Searcher",
    description: `A RESTful application implementing the MERN stack (MongoDB,
      Express.js, React and Node.js) which users can create an account,
      search for gifs through the Giphy API and save their favorites.`,
    link: 'https://github.com/gabrielprrd/Fullstack-Giphy-App',
    technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Giphy API'],
    img: screenshotTest,
  },
  {
    title: "Nortada's E-commerce Backend",
    description: `The backend of a craft beer e-commerce, consuming the
    Stripe's API to deal with payment process.`,
    link: 'https://github.com/gabrielprrd/nortada-ecommerce-clone-backend',
    technologies: ['Node.js', 'Express.js', 'Stripe API'],
    img: screenshotTest,
  },
  {
    title: "Nortada's E-commerce Frontend",
    description: `The frontend of the previous project, implemented as a Single Page
    Application with React, using Redux to better state management and
    scalability.`,
    link: 'https://github.com/gabrielprrd/nortada-ecommerce-clone-frontend',
    technologies: ['React', 'Redux', 'Stripe API'],
    img: screenshotTest,
  },
  {
    title: 'The Calorie Police',
    description: `React application that calculates user's daily caloric needs,
    save it on LocalStorage and displays meals that fit the diet,
    consuming the Spoonacular API.`,
    link: 'https://github.com/gabrielprrd/The-Calorie-Police',
    technologies: ['React.js', 'Material-UI', 'Spoonacular API'],
    img: screenshotTest,
  },
  {
    title: 'Curriculum Vitae IDE',
    description: `Personal Website containing a resume and portfolio, built with
    React. The idea is to show passion and creativity about software
    development, simulating an IDE, since it’s the platform
    developers have most contact with.

    The main challenge was the user experience, since not every HR
    professional have been exposed to development tools.
    React's Context API + Redux + Styled-components were used to
    make an efficient state management, so the components can
    comunicate properly.`,
    link: 'https://github.com/gabrielprrd/curriculum-vitae',
    technologies: ['React.js', 'Redux', 'Styled Components'],
    img: screenshotTest,
  },
  {
    title: 'Colégio Revisa Website',
    description: `A website built with Vue.js and Firebase to grasp some knowledge
    with these technologies and compare them with other approaches
    like React and a standard backend built with Node.js.`,
    link: 'https://github.com/gabrielprrd/Col-gio-Revisa-Institutional-Website',
    technologies: ['Vue.js', 'Firebase', 'Sass'],
    img: screenshotTest,
  }
];

export default Projects;
