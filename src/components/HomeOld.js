import React from 'react';
import { Link } from 'react-router-dom';
import './HomeOld.css'; // Ensure you create and link the CSS file

const Home = () => {
  return (
    <div className="home-container">
      <aside className="sidebar">
        <ul>
          <li><a href="#introduction">Introduction</a></li>
          <li><a href="#about">About Me</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#content">Content Creation</a></li>
          <li><a href="#blog">Review Blog</a></li>
        </ul>
      </aside>
      <main className="content">
        <section id="introduction">
          <h1>Welcome to <i>My</i> Domain</h1>
          <p>This site is the official website of Katacaz,
            a place where I want to share my skills in Game Development and Content Creation
            and even share a bit about myself and my thoughts on things as a review blog.</p>
            <p>Interested? Well feel free to have a look around.</p>
        </section>
        <section id="about">
          <h2>About Me</h2>
          <p>Want to learn more about me, my skillset and the tools I use?</p>
          <Link to="/about"><button>Read More</button></Link>
        </section>
        <section id="projects">
          <h2>Projects</h2>
          <p>Curious about some of the projects I have worked on?</p>
          <Link to="/projects"><button>View Projects</button></Link>
        </section>
        <section id="content">
          <h2>Content Creation</h2>
          <p>I have dabbled a bit with content creation, want to check out some of my content?</p>
          <Link to="/content"><button>See Content</button></Link>
        </section>
        <section id="blog">
          <h2>Review Blog</h2>
          <p>I wanted a place to share my thoughts on various Games, Movies, Shows and the like, interested in hearing what I have to say?</p>
          <Link to="/blog"><button>Read Blog</button></Link>
        </section>
      </main>
    </div>
  );
};

export default Home;
