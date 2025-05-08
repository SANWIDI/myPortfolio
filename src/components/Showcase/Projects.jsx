import ProjectCard from "./ProjectCard";

function Projects() {
  const projectList = [
    {
      id: 1,
      title: "HTML & SASS",
      description:
        "In this project, I worked with SASS to style my page. I am amazed by how intuitive and powerful it is. The component-based structure makes it fun to build interactive user interfaces, and seeing my changes update in real time is incredibly satisfying. Each new concept, from props to hooks, opens up exciting possibilities. I'm eager to keep learning, build real projects, and grow as a developer. SASS isn’t just cool—it’s inspiring and makes me feel like I can create anything.",
      link: "https://sanwidi.github.io/responsiveDesignBeginners/",
    },
    // {
    //   id: 2,
    //   title: "C#",
    //   description:
    //     "As a student diving into C#, I quickly realized how powerful and elegant the language is. Its clean syntax and strong typing make coding feel structured yet flexible. I enjoy how easy it is to build desktop applications and explore object-oriented programming concepts. Features like LINQ and async programming are both fascinating and incredibly useful. Even as a beginner, I feel like I’m creating real, meaningful software. Learning C# has boosted my confidence and sparked my curiosity to explore more within the .NET ecosystem. It’s not just a programming language—it’s a gateway to building cool, professional-grade applications.",
    //   link: "/project/2",
    // },
    {
      id: 3,
      title: "PHP Laravel",
      description:
        "As a student starting with PHP Laravel and Heroku. Fund Fairy is my capstone project. I am impressed by how smooth and organized web development becomes. Laravel makes things like routing, database connections, and user authentication surprisingly simple with its elegant syntax and built-in tools. I love how features like Blade templating and Eloquent ORM allow me to build dynamic apps faster and more cleanly. It’s exciting to see my projects come to life with just a few lines of code. Laravel takes away a lot of the confusion and lets me focus on creating. Learning it has made backend development feel accessible—and honestly, really cool and rewarding!",
      link: "https://fundfairy.live/",
    },
    {
      id: 4,
      title: "PHP Laravel",
      description:
        "Workopia is a hands on project using PHP Laravel framework. I am impressed by how smooth and organized web development becomes. Laravel makes things like routing, database connections, and user authentication surprisingly simple with its elegant syntax and built-in tools. I love how features like Blade templating and Eloquent ORM allow me to build dynamic apps faster and more cleanly. It’s exciting to see my projects come to life with just a few lines of code. Laravel takes away a lot of the confusion and lets me focus on creating. Learning it has made backend development feel accessible—and honestly, really cool and rewarding!",
      link: "http://workopia.test/",
    },
    {
      id: 5,
      title: "WordPress",
      description:
        "Drip Store is a business platform built with WordPress. I am impressed by how smooth and organized web development becomes. Laravel makes things like routing, database connections, and user authentication surprisingly simple with its elegant syntax and built-in tools. I love how features like Blade templating and Eloquent ORM allow me to build dynamic apps faster and more cleanly. It’s exciting to see my projects come to life with just a few lines of code. Laravel takes away a lot of the confusion and lets me focus on creating. Learning it has made backend development feel accessible—and honestly, really cool and rewarding!",
      link: "https://mireillesanwidi.wordpress.com/",
    },
  ];

  return (
    <div className="projects">
      <h1 className="projects__title">ShowCase</h1>
      <div className="projects__grid">
        {projectList.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
