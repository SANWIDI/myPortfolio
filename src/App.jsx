import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import "./App.css";
import "./sass/styles.scss";
import React from "react";
import BioCard from "./components/BioCard";
import SkillsGallery from "./components/SkillsGallery";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import ProjectDetails from "./components/Showcase/ProjectDetails";
import Projects from "./components/Showcase/Projects";
import ThemeToggle from "./components/ThemeToggle";
import ContactForm from "./components/ContactForm";
import ThemeProvider from "./components/ThemeProvider";
import NavBar from "./NavBar";
import Hero from "./Hero";
import Review from "./Review";
import Home from "./Home";
import Footer from "./Footer";

//portfolio-
function App() {
  return (
    <Router basename="/myPortfolio">
      <NavBar />
      <Hero />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/BioCard" element={<BioCard />} />
        <Route path="/SkillsGallery" element={<SkillsGallery />} />
        <Route path="/review" element={<Review />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/project/:id" element={<ProjectDetails />} />

        {/* {
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        
        <Route path="/projects" element={<Projects />} />
       
        <Route path="/project/:id" element={<ProjectDetails />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

//end
//review section
// function App() {
//   return (
//     <div>
//       {/* <ThemeToggle /> */}
//       <Review />
//     </div>
//   );
// }

// export default App;
// end of review

// //Assignment 6
// function App() {
//   return (
//     <div>
//       <ContactForm />
//     </div>
//   );
// }

// export default App;

//end

//start Assignment 9
// function App() {
//   return (
//     <div>
//       <ThemeToggle />
//       <Router>
//         <nav className="navbar">
//           <Link to="/" className="navbar__link navbar__link--home">
//             Home
//           </Link>
//         </nav>
//         <Routes>
//           <Route path="/" element={<Projects />} />
//           <Route path="/project/:id" element={<ProjectDetails />} />
//         </Routes>
//       </Router>
//     </div>
//   );
// }

// export default App;

//end

//start assignment 08

// function App() {
//   const skillsData = [
//     {
//       name: "Communication",
//       description:
//         "Ability to clearly explain ideas, actively listen, and provide constructive feedback.",
//       materials: [
//         "Team meetings",
//         "Project documentation",
//         "Client communication",
//       ],
//     },

//     {
//       name: "Bilingual",
//       description: "Fluent in English, French, and several African dialects.",
//       materials: [
//         "Multilingual team collaboration",
//         "Translation of project documents",
//         "Customer support in multiple languages",
//       ],
//     },

//     {
//       name: "Problem-Solving",
//       description:
//         "Logical approach to debugging and resolving issues independently or collaboratively.",
//       materials: ["Debugging tools", "Technical documentation"],
//     },
//     {
//       name: "Adaptability",
//       description:
//         "Willingness to learn new tools and adjust to changing requirements or environments.",
//       materials: ["New frameworks", "Online courses", "Tech trends"],
//     },
//     {
//       name: "Time Management",
//       description:
//         "Effectively prioritizing tasks and meeting deadlines while balancing multiple projects.",
//       materials: [
//         "To-do apps",
//         "Pomodoro technique",
//         "A responsibility partner",
//       ],
//     },
//     {
//       name: "Team Collaboration",
//       description:
//         "Working productively with others, sharing ideas, and contributing to group success.",
//       materials: ["GitHub collaboration", "Code reviews", "Capstone project"],
//     },
//   ];

//   return (
//     <div>
//       <h1> My Skills</h1>
//       <SkillsGallery skills={skillsData} />
//     </div>
//   );
// }

// export default App;

//end

//Start Assignment 7
// function App() {
//   return (
//     <div>
//       <BioCard />
//     </div>
//   );
// }

// export default App;

//end
