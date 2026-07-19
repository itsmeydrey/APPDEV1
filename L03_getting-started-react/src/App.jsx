import React from "react";
import "./App.css";

const About = () => {
  return (
    <div className="about-page">
      <div className="about-container">
        {/* Header */}
        <header className="header">
          <h1 className="about-title">About Me</h1>
          <p className="about-subtitle">
            Bachelor of Science in Information Systems • 3rd Year
          </p>
        </header>

        <hr />

        {/* Personal Information */}
        <section className="section">
          <h2 className="section-title">Personal Information</h2>

          <ul className="info-list">
            <li>
              <strong>Full Name:</strong> Ydrey Ann Ramirez
            </li>
            <li>
              <strong>Course and Year:</strong> Bachelor of Science in
              Information Systems - 3rd Year
            </li>
            <li>
              <strong>Fun Fact:</strong> I can spend hours improving the design of a project until I'm satisfied with it.
            </li>
          </ul>
        </section>

        <hr />

        {/* Reflection */}
        <section className="section">
          <h2 className="section-title">Reflection</h2>

          <p className="about-description">
            Throughout this course, I have learned a lot about React and why it is one of the most popular JavaScript libraries among developers around the world. Since this subject is called Emerging Technologies, I realized that learning React is important to keep up with current industry trends and avoid being left behind as technology continues to evolve. I also learned that React is flexible and declarative, which means developers only need to describe what they want to display, and React efficiently handles the updates behind the scenes. Aside from React, our previous activities taught me how to create a proper GitHub README file using Markdown. Before this course, we usually relied on AI-generated content and simply copied it into GitHub because Markdown was not the focus of our previous subjects. I also gained a better understanding of Git and GitHub, including how to connect them, synchronize projects, and use essential Git commands. These were topics that we did not pay much attention to before, but I now appreciate how important they are in real-world software development. Through these experiences, I have developed skills in React fundamentals, JSX syntax, Markdown, Git and GitHub version control, repository management, and problem-solving while working with development tools. I believe these skills will become a strong foundation as I continue pursuing a career in Information Systems, particularly in web development and UI/UX design.
          </p>
        </section>

        <hr />
      </div>
    </div>
  );
};

export default About;