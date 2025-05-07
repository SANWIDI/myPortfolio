import SkillsCard from "./SkillsCard";
//import card in gallery

function SkillsGallery(props) {
  const skillsData = [
    {
      name: "Communication",
      description:
        "Ability to clearly explain ideas, actively listen, and provide constructive feedback.",
      materials: [
        "Team meetings",
        "Project documentation",
        "Client communication",
      ],
    },

    {
      name: "Bilingual",
      description: "Fluent in English, French, and several African dialects.",
      materials: [
        "Multilingual team collaboration",
        "Translation of project documents",
        "Customer support in multiple languages",
      ],
    },

    {
      name: "Problem-Solving",
      description:
        "Logical approach to debugging and resolving issues independently or collaboratively.",
      materials: ["Debugging tools", "Technical documentation"],
    },
    {
      name: "Adaptability",
      description:
        "Willingness to learn new tools and adjust to changing requirements or environments.",
      materials: ["New frameworks", "Online courses", "Tech trends"],
    },
    {
      name: "Time Management",
      description:
        "Effectively prioritizing tasks and meeting deadlines while balancing multiple projects.",
      materials: [
        "To-do apps",
        "Pomodoro technique",
        "A responsibility partner",
      ],
    },
    {
      name: "Team Collaboration",
      description:
        "Working productively with others, sharing ideas, and contributing to group success.",
      materials: ["GitHub collaboration", "Code reviews", "Capstone project"],
    },
  ];

  return (
    <div className="skills-gallery">
      {skillsData.map((prop, index) => (
        <div key={index}>
          <SkillsCard
            name={prop.name}
            description={prop.description}
            materials={prop.materials}
          />
        </div>
      ))}
    </div>
  );
}

export default SkillsGallery;
