import React, { useState, useEffect } from 'react';
import { Mail, Phone, Github, Linkedin, ExternalLink, Code, Database, Globe, Menu, X, Smartphone, Calendar } from 'lucide-react';
import profileImage from './assets/136354786.jpg';
function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-100 text-gray-800">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrollY > 50 ? 'bg-white/90 backdrop-blur-sm shadow-lg border-b border-emerald-100' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">HB</div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">
                Home
              </button>
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">
                About
              </button>
              <button onClick={() => scrollToSection('projects')} className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">
                Projects
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">
                Contact
              </button>
            </div>

            {/* Mobile menu button */}
            <button 
              className="md:hidden text-gray-700"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden bg-white/95 backdrop-blur-sm rounded-lg mb-4 p-4 shadow-lg border border-emerald-100">
              <div className="flex flex-col space-y-4">
                <button onClick={() => scrollToSection('home')} className="text-left text-gray-700 hover:text-emerald-600 transition-colors font-medium">
                  Home
                </button>
                <button onClick={() => scrollToSection('about')} className="text-left text-gray-700 hover:text-emerald-600 transition-colors font-medium">
                  About
                </button>
                <button onClick={() => scrollToSection('projects')} className="text-left text-gray-700 hover:text-emerald-600 transition-colors font-medium">
                  Projects
                </button>
                <button onClick={() => scrollToSection('contact')} className="text-left text-gray-700 hover:text-emerald-600 transition-colors font-medium">
                  Contact
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="w-40 h-40 mx-auto mb-8 rounded-full overflow-hidden shadow-2xl ring-4 ring-white/50 hover:scale-105 transition-transform duration-300">
              <img 
                src={profileImage}
                alt="Hardik Batra" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
            Hardik Batra
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto font-medium">
            Full Stack Developer & Software Engineer
          </p>
          
          <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Passionate about creating innovative web applications and solving complex problems through clean, efficient code. 
            Specializing in MERN stack development with a focus on user experience and scalable solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={() => scrollToSection('projects')}
              className="px-8 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl hover:scale-105"
            >
              <Code size={20} />
              View My Work
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3 border-2 border-emerald-500 text-emerald-600 hover:bg-emerald-500 hover:text-white rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/40 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-gray-800">
                Crafting Digital Experiences
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                I'm a dedicated full-stack developer with expertise in modern web technologies. 
                My journey in software development has been driven by a passion for creating 
                intuitive, scalable, and impactful digital solutions.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                With hands-on experience in the MERN stack, I enjoy tackling complex challenges 
                and transforming ideas into reality through code. I believe in writing clean, 
                maintainable code and staying updated with the latest industry trends.
              </p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {['React.js', 'Node.js', 'MongoDB', 'Express.js', 'TypeScript', 'Tailwind CSS', 'JavaScript', 'Git'].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium border border-emerald-200">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white/60 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-emerald-100 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center shadow-lg">
                    <Globe className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800">Frontend Development</h4>
                    <p className="text-gray-600">React.js, TypeScript, Tailwind CSS</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/60 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-emerald-100 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-lg flex items-center justify-center shadow-lg">
                    <Database className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800">Backend Development</h4>
                    <p className="text-gray-600">Node.js, Express.js, MongoDB</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/60 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-emerald-100 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center shadow-lg">
                    <Code className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800">Full Stack Solutions</h4>
                    <p className="text-gray-600">End-to-end application development</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          
          <div className="grid lg:grid-cols-1 gap-8 max-w-5xl mx-auto">
            {/* LMS Platform */}
            <div className="bg-white/60 backdrop-blur-sm rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-emerald-100">
              <div className="h-64 bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center">
                <div className="text-center">
                  <Database size={64} className="mx-auto mb-4 text-white drop-shadow-lg" />
                  <h3 className="text-2xl font-bold text-white drop-shadow-lg">LMS Platform</h3>
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">
                  Learning Management System
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  A comprehensive learning platform built with the MERN stack featuring user authentication, 
                  course management, interactive content delivery, and real-time progress tracking. 
                  This full-stack application demonstrates modern web development practices and scalable architecture.
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {['React.js', 'Node.js', 'MongoDB', 'Express.js', 'Authentication', 'Real-time'].map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium border border-emerald-200">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <a 
                    href="https://lms-full-stack2-1z9u.vercel.app/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>

            {/* iPhone 15 Pro Website */}
            <div className="bg-white/60 backdrop-blur-sm rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-emerald-100">
              <div className="h-64 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                <div className="text-center">
                  <Smartphone size={64} className="mx-auto mb-4 text-white drop-shadow-lg" />
                  <h3 className="text-2xl font-bold text-white drop-shadow-lg">iPhone 15 Pro</h3>
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">
                  iPhone 15 Pro Website
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  A stunning 3D interactive website showcasing the iPhone 15 Pro, built with modern web technologies. 
                  Features smooth animations, 3D graphics, and responsive design for an immersive user experience. 
                  Demonstrates advanced frontend skills with Three.js and GSAP animations.
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {['React.js', 'Three.js', 'React Three Fiber', 'GSAP', 'Tailwind CSS', 'Vite'].map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium border border-blue-200">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <a 
                    href="https://iphonefrontend.netlify.app/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>

            {/* Habit Tracker */}
            <div className="bg-white/60 backdrop-blur-sm rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-emerald-100">
              <div className="h-64 bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center">
                <div className="text-center">
                  <Calendar size={64} className="mx-auto mb-4 text-white drop-shadow-lg" />
                  <h3 className="text-2xl font-bold text-white drop-shadow-lg">Habit Tracker</h3>
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">
                  Habit Tracker - JavaFX Desktop App
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  A stylish desktop application for tracking daily habits, built with JavaFX and modern UI design principles. 
                  Features persistent data storage with MySQL, clean responsive interface with FlatLaf, and comprehensive 
                  habit management capabilities including progress tracking and data visualization.
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {['JavaFX', 'FlatLaf', 'JDBC', 'MySQL', 'IntelliJ', 'Desktop App'].map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-medium border border-orange-200">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <a 
                    href="https://github.com/HardikCodes0/Full-Stack-Habit-Tracker" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    <Github size={16} />
                    View Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/40 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            I'm always interested in new opportunities and collaborations. 
            Let's discuss how we can work together!
          </p>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <a 
              href="tel:+917827860651"
              className="bg-white/60 backdrop-blur-sm p-6 rounded-lg hover:bg-white/80 transition-all duration-300 group shadow-lg hover:shadow-xl border border-emerald-100"
            >
              <Phone className="mx-auto mb-4 text-emerald-600 group-hover:scale-110 transition-transform" size={32} />
              <h3 className="font-semibold text-gray-800 mb-2">Phone</h3>
              <p className="text-gray-600 text-sm">+91-7827860651</p>
            </a>
            
            <a 
              href="mailto:batrahardik09@gmail.com"
              className="bg-white/60 backdrop-blur-sm p-6 rounded-lg hover:bg-white/80 transition-all duration-300 group shadow-lg hover:shadow-xl border border-emerald-100"
            >
              <Mail className="mx-auto mb-4 text-teal-600 group-hover:scale-110 transition-transform" size={32} />
              <h3 className="font-semibold text-gray-800 mb-2">Email</h3>
              <p className="text-gray-600 text-sm">batrahardik09@gmail.com</p>
            </a>
            
            <a 
              href="https://www.linkedin.com/in/hardik-batra-76768a241"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/60 backdrop-blur-sm p-6 rounded-lg hover:bg-white/80 transition-all duration-300 group shadow-lg hover:shadow-xl border border-emerald-100"
            >
              <Linkedin className="mx-auto mb-4 text-blue-600 group-hover:scale-110 transition-transform" size={32} />
              <h3 className="font-semibold text-gray-800 mb-2">LinkedIn</h3>
              <p className="text-gray-600 text-sm">Connect with me</p>
            </a>
            
            <a 
              href="https://github.com/HardikCodes0"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/60 backdrop-blur-sm p-6 rounded-lg hover:bg-white/80 transition-all duration-300 group shadow-lg hover:shadow-xl border border-emerald-100"
            >
              <Github className="mx-auto mb-4 text-gray-700 group-hover:scale-110 transition-transform" size={32} />
              <h3 className="font-semibold text-gray-800 mb-2">GitHub</h3>
              <p className="text-gray-600 text-sm">View my code</p>
            </a>
          </div>
          
          <div className="text-center">
            <a 
              href="mailto:batrahardik09@gmail.com"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <Mail size={20} />
              Start a Conversation
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-emerald-200 bg-white/30 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto text-center text-gray-600">
          <p>&copy; 2025 Hardik Batra. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;