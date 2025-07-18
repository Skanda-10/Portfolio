'use client';

import { useState, useEffect } from 'react';
import FloatingParticles from '@/components/FloatingParticles';
import SkillCircle from '@/components/SkillCircle';
import Timeline from '@/components/Timeline';
import ProjectCard from '@/components/ProjectCard';
import { Download, Mail, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const skills = [
  { name: 'Java', level: 85 },
  { name: 'Spring Boot', level: 75 },
  { name: 'SQL', level: 80 },
  { name: 'Database', level: 85 },
  { name: 'DSA', level: 60 },
  { name: 'Python', level: 40 }
];

const education = [
  {
    year: '2020 - 2021',
    title: 'HSC – PCM',
    company: "St. Antony's Matriculation Higher Secondary School, Chennai",
    description: 'Scored 91.1% in PCM stream.'
  },
  {
    year: '2018 - 2019',
    title: 'SSLC',
    company: "St. Antony's Matriculation Higher Secondary School, Chennai",
    description: 'Scored 86.4%.'
  }
];

const experiences = [
  {
    year: '2021 - 2025',
    title: 'Bachelor of Engineering (ECE)',
    company: 'Velammal Engineering College, Chennai',
    description: 'Graduated focusing on electronics transitioning to IT. GPA: 8.27/10.'
  },
  {
    year: '2023',
    title: 'In-Plant Training',
    company: 'CodeBind Technologies',
    description: '15-day Arduino-based projects: LED blinking, traffic light simulation, basic I/O.'
  },
  {
    year: '2024',
    title: 'Web Development Intern',
    company: 'Eagle Tech IT Solutions',
    description: '15-day internship building an interactive weather app using OpenWeatherMap API. Learned HTTP calls, async JavaScript, and UI basics.'
  }
];

const projects = [
  {
    title: 'Mini Bank App',
    description: 'Spring Boot + MySQL CRUD app managing accounts with deposits, withdrawals, and JSON API responses.',
    image: '/port_images/bank.png',
    technologies: ['Java', 'Spring Boot', 'MySQL'],
    link: 'https://github.com/Skanda-10/Mini_Bank'
  },
  {
    title: 'Railway Reservation System',
    description: 'Java console app managing bookings, cancellations, waiting lists across AC, Non-AC, Sleeper coaches with seat-type logic.',
    image: '/port_images/train.png',
    technologies: ['Java', 'OOP', 'Console'],
    link: 'https://github.com/Skanda-10/RailwayBookingSystem-OOP'
  },
  {
    title: 'Cab Booking LLD',
    description: 'Console-based cab allocation system using OOP and LLD principles, fare calc, driver-passenger mapping.',
    image: '/port_images/cab.png',
    technologies: ['Java', 'LLD', 'OOP'],
    link: 'https://github.com/Skanda-10/CabBookingSystem-OOPS'
  },
  {
    title: 'Library Management LLD',
    description: 'Library system simulation with user login, lending, return, penalties, built with modular OOP separation.',
    image: '/port_images/lib.png',
    technologies: ['Java', 'LLD', 'Console'],
    link: 'https://github.com/Skanda-10/LibraryManagementOOP'
  }
];

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-black text-white overflow-x-hidden">
      <FloatingParticles />

      {/* Planet Effects */}
      <div
        className="fixed right-0 top-1/4 w-96 h-96 rounded-full opacity-20 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 30% 30%, #4f46e5, #1e1b4b, transparent)',
          transform: `translateY(${scrollY * 0.3}px)`,
        }}
      />
      <div
        className="fixed left-0 top-1/2 w-64 h-64 rounded-full opacity-15 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 70% 70%, #dc2626, #7f1d1d, transparent)',
          transform: `translateY(${scrollY * 0.2}px)`,
        }}
      />

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center relative px-4">
        <div className="text-center space-y-8 animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            SKANDA
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl">
            Java Backend Developer & Tech Explorer
          </p>
          <div className="flex gap-6 justify-center">
            <a href="mailto:skanda.tls2@example.com" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="border-blue-500 text-blue-400 hover:bg-blue-500/10">
                <Mail className="w-5 h-5 mr-2" />Contact
              </Button>
            </a>
            <a href="https://github.com/Skanda-10" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="border-purple-500 text-purple-400 hover:bg-purple-500/10">
                <Github className="w-5 h-5 mr-2" />GitHub
              </Button>
            </a>
            <a href="https://www.linkedin.com/in/skanda-tl-147139272/" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="border-pink-500 text-pink-400 hover:bg-pink-500/10">
                <Linkedin className="w-5 h-5 mr-2" />LinkedIn
              </Button>
            </a>

          </div>
        </div>
        <div className="absolute bottom-8 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full p-1">
            <div className="w-1 h-3 bg-gray-400 rounded-full mx-auto animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* About Me */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gray-900/50 border-gray-700 backdrop-blur-sm">
            <CardContent className="p-8">
              <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                About Me
              </h2>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <p className="text-gray-300 text-lg leading-relaxed">
                    I'm a passionate Java Backend Developer skilled in building clean, maintainable backends with Spring Boot and SQL.
                  </p>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    I've built end-to-end systems like Railway Reservation, Cab Booking, Library Management, and Mini Bank apps, and enjoy diving into DSA challenges.
                  </p>
                  <a href="/Resume.pdf" download>
                    <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                      <Download className="w-5 h-5 mr-2" />Download CV
                    </Button>
                  </a>

                </div>
                <div className="relative">
                  <div className="w-64 h-64 mx-auto rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                    <div className="w-48 h-48 rounded-full bg-gradient-to-r from-blue-600/30 to-purple-600/30 flex items-center justify-center">
                      <div className="w-32 h-32 rounded-full bg-gradient-to-r from-blue-700/40 to-purple-700/40"></div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Skills */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
                        {skills.map((s, i) => (
                          <SkillCircle key={s.name} name={s.name} level={s.level} delay={i * 200} />
                        ))}
                      </div>
                    </div>
                  </section>

                  {/* Education & Experience */}
                  <section className="py-20 px-4">
                    <div className="max-w-4xl mx-auto grid lg:grid-cols-2 gap-12">
                      <div>
                        <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                          Education
                        </h2>
                        <Timeline experiences={education} />
                      </div>
                      <div>
                        <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                          Experience
                        </h2>
                        <Timeline experiences={experiences} />
                      </div>
                    </div>
                  </section>

                  {/* Projects */}
                  <section className="py-20 px-4">
                    <div className="max-w-6xl mx-auto">
                      <h2 className="text-4xl font-bold mb-16 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                        Projects
                      </h2>
                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((p, i) => (
                          <ProjectCard key={p.title} project={p} delay={i * 100} />
                        ))}
                      </div>
                    </div>
                  </section>

                  {/* Footer */}
                  <footer className="py-12 px-4 border-t border-gray-800 text-center max-w-4xl mx-auto">
                    <p className="text-gray-400">© 2025 Skanda. Made with ❤️ and a lot of ☕</p>
                  </footer>
                </div>
              );
            }
