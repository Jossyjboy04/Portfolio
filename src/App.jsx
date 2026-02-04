
import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    // Apply theme to document
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const skills = [
    { name: 'HTML5', level: 85 },
    { name: 'CSS3', level: 80 },
    { name: 'Responsive Design', level: 75 },
    { name: 'Tailwind CSS', level: 70 },
    { name: 'Web Accessibility', level: 65 },
    { name: 'Git & Version Control', level: 50 }
  ];

  const projects = [
    {
      title: 'Personal Portfolio Website',
      description: 'A responsive portfolio website built with HTML5 and CSS3, featuring modern design principles',
      tags: ['HTML5', 'CSS3', 'Grid', 'Flexbox'],
      github: 'https://github.com/jossyjboy04',
      demo: '#',
      image: '/images/coding.jpeg'
    },
    {
      title: 'CGPA predictor',
      description: "This interactive application translates the findings of a machine learning project focused on predicting a student's final Cumulative Grade Point Average (CGPA)",
      tags: ['HTML5', 'CSS3', 'Javascript', 'Flexbox'],
      github: 'https://github.com/jossyjboy04',
      demo: 'http://cgpaprediction.vercel.app/',
      image: '/images/coding2.jpeg'
    },
    {
      title: 'Website Clone',
      description: 'A replication of allrecipes.com a website for food recipe using flexbox, grid and animation',
      tags: ['HTML5', 'CSS3', 'Grid', 'Flexbox'],
      github: 'https://github.com/jossyjboy04',
      demo: 'http://replication-neon.vercel.app',
      image: '/images/coding3.jpeg'
    },
    {
      title: 'GPA Calculator',
      description: 'A GPA Calculator to ease Student who wants to track and know their true result',
      tags: ['HTML5', 'CSS3', 'Responsive', 'JavaScript'],
      github: 'https://github.com/jossyjboy04',
      demo: 'http://gpcalc-amber.vercel.app',
      image: '/images/coding4.jpeg'
    }
  ];

  return (
    <div className="App">
      {/* Navigation */}
      <nav className="nav">
        <div className="nav-container">
          <h1 className="logo">Joseph</h1>
          <details>
            <summary></summary>
          
          <div className="nav-links">
            <a href="#home" className="nav-link">Home</a>
            <a href="#about" className="nav-link">About</a>
            <a href="#skills" className="nav-link">Skills</a>
            <a href="#projects" className="nav-link">Projects</a>
            <a href="#contact" className="nav-link">Contact</a>
          </div>
</details>
          <button 
            onClick={toggleTheme} 
            className="theme-toggle"
            aria-label="Toggle theme"
          >
            {darkMode ? '☀️' : '🌙'}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <h2 className="hero-title">
            Oloriojekabe<br />
            Joseph<br />
            <span className="highlight">Okikiola</span>
          </h2>
          <p className="hero-description">
            Aspiring Web Developer passionate about creating beautiful and functional websites with HTML & CSS
          </p>
          
          <div className="cta-buttons">
            <a href="#projects" className="btn btn-primary">View My Work</a>
            <a href="#contact" className="btn btn-secondary">Get In Touch</a>
          </div>

          <div className="social-links">
            <a href="https://github.com/jossyjboy04" target="_blank" rel="noopener noreferrer" className="social-icon">
              <i className="fa fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/joseph-okikiola-3a15882a1" target="_blank" rel="noopener noreferrer" className="social-icon">
              <i className="fa fa-linkedin"></i>
            </a>
            <a href="mailto:olorijoseph2002@gmail.com" className="social-icon">
              <i className="fa fa-envelope"></i>
            </a>
          </div>

          <a href="#about" className="scroll-indicator">⬇️</a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="divider"></div>
          
          <div className="about-grid">
            <div className="about-text">
              <p>
                Hello! I'm Oloriojekabe Joseph Okikiola, a passionate beginner in web development with a strong foundation in HTML and CSS. I discovered my love for coding when I created my first webpages and saw how code transforms into beautiful, interactive experiences.
              </p>
              <p>
                As someone new to the field, I bring fresh perspectives and eagerness to learn. I'm dedicated to mastering the fundamentals of web development while staying current with modern practices and technologies.
              </p>
              <p>
                My goal is to become a skilled full-stack developer, but I believe in building a solid foundation first. Every line of code I write is an opportunity to improve and grow.
              </p>
            </div>

            <div className="about-cards">
              <div className="card">
                <i className="fa fa-code card-icon"></i>
                <strong className="card-title">Clean Code</strong>
                <small className="card-description">Writing semantic, accessible HTML and well-structured CSS</small>
              </div>
              
              <div className="card">
                <i className="fa fa-lightbulb-o card-icon"></i>
                <strong className="card-title">Creative Solutions</strong>
                <small className="card-description">Finding innovative approaches to web design challenges</small>
              </div>
              
              <div className="card">
                <i className="fa fa-book card-icon"></i>
                <strong className="card-title">Goal-Oriented</strong>
                <small className="card-description">Focused on continuous learning and skill development</small>
              </div>
              
              <div className="card">
                <i className="fa fa-user card-icon"></i>
                <strong className="card-title">User Experience</strong>
                <small className="card-description">Creating websites that provide excellent user experience</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section section-alt">
        <div className="container">
          <h2 className="section-title">My Skills</h2>
          <div className="divider"></div>
          <p className="section-description">
            Here are the skills I'm currently working with and continuously improving
          </p>

          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={index} className="skill-card">
                <div className="skill-header">
                  <h3 className="skill-name">{skill.name}</h3>
                  <span className="skill-percentage">{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <div 
                    className="skill-progress" 
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          <div className="learning-badge">
            <em>Currently Learning: </em>
            <span className="badge">JavaScript</span>
            <span className="badge">React</span>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section">
        <div className="container">
          <h2 className="section-title">My Projects</h2>
          <div className="divider"></div>
          <p className="section-description">
            Here are some of the projects I work on as I continue to learn and grow as a developer
          </p>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <img src={project.image} alt={project.title} className="project-image" />
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  
                  <div className="project-tags">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="tag">{tag}</span>
                    ))}
                  </div>

                  <div className="project-links">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                      <i className="fa fa-github"></i> Code
                    </a>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link demo">
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="view-all">
            <a href="https://github.com/jossyjboy04" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
              View All Projects on GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section section-alt">
        <div className="container">
          <h2 className="section-title">Get in Touch</h2>
          <div className="divider"></div>
          <p className="section-description">
            Always open to discussing new opportunities, collaborations, or just having a chat about web development!
          </p>

          <div className="contact-grid">
            <div className="contact-form-wrapper">
              <h3 className="contact-subtitle">Send me a message</h3>
              <form action="https://formspree.io/f/xovdzzqa" method="POST" className="contact-form">
                <input 
                  type="text" 
                  name="Full Name:" 
                  placeholder="Your Name" 
                  required 
                  className="form-input"
                />
                <input 
                  type="email" 
                  name="Email Address:" 
                  placeholder="Your Email" 
                  required 
                  className="form-input"
                />
                <textarea 
                  name="Message:" 
                  placeholder="Your Message" 
                  rows="6" 
                  required 
                  className="form-textarea"
                ></textarea>
                <button type="submit" className="btn btn-primary form-submit">
                  ✉️ Send Message
                </button>
              </form>
            </div>

            <div className="contact-info-wrapper">
              <h3 className="contact-subtitle">Contact Information</h3>
              
              <div className="contact-info-item">
                <i className="fa fa-envelope contact-icon"></i>
                <div>
                  <h4 className="contact-label">Email</h4>
                  <p className="contact-value">olorijoseph2002@gmail.com</p>
                </div>
              </div>

              <div className="contact-info-item">
                <i className="fa fa-phone contact-icon"></i>
                <div>
                  <h4 className="contact-label">Phone</h4>
                  <p className="contact-value">07038640142</p>
                </div>
              </div>

              <div className="contact-info-item">
                <i className="fa fa-map-marker contact-icon"></i>
                <div>
                  <h4 className="contact-label">Location</h4>
                  <p className="contact-value">Ogun, Nigeria</p>
                </div>
              </div>

              <div className="contact-social">
                <h3 className="contact-subtitle">Follow Me</h3>
                <div className="social-links-contact">
                  <a href="https://github.com/jossyjboy04" target="_blank" rel="noopener noreferrer" className="social-icon">
                    <i className="fa fa-github"></i>
                  </a>
                  <a href="https://www.linkedin.com/in/joseph-okikiola-3a15882a1" target="_blank" rel="noopener noreferrer" className="social-icon">
                    <i className="fa fa-linkedin"></i>
                  </a>
                  <a href="https://x.com/JosephOkikiola2" target="_blank" rel="noopener noreferrer" className="social-icon">
                    <i className="fa fa-twitter"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2026 Oloriojekabe Joseph Okikiola. Built with React and lots of learning!</p>
      </footer>
    </div>
  );
}

export default App;