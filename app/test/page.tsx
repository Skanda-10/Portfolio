'use client';
import React from 'react';
import ProjectCard from '@/Components/ProjectCard';

const testProject = {
  title: 'Test Card',
  description: 'This is a test description.',
  image: '/port_images/bank.png',
  technologies: ['Java', 'Spring Boot'],
  link: 'https://github.com/Skanda-10/Mini_Bank',
};

export default function TestPage() {
  return (
    <div className="min-h-screen bg-black text-white p-10">
      <h1 className="text-3xl font-bold mb-6">Test ProjectCard</h1>
      <ProjectCard project={testProject} delay={0} />
    </div>
  );
}
