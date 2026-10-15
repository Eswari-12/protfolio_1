import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface Skill {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function FigmaIcon() {
  return (
    <svg width="44" height="44" viewBox="0 0 38 57" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="1" y="1" width="17" height="17" rx="8.5" stroke="#f5a623" strokeWidth="2" />
      <rect x="20" y="1" width="17" height="17" rx="8.5" stroke="#f5a623" strokeWidth="2" />
      <rect x="1" y="20" width="17" height="17" rx="0" stroke="#f5a623" strokeWidth="2" />
      <circle cx="28.5" cy="28.5" r="8.5" stroke="#f5a623" strokeWidth="2" />
      <rect x="1" y="39" width="17" height="17" rx="8.5" stroke="#f5a623" strokeWidth="2" />
    </svg>
  );
}

function CanvaIcon() {
  return (
    <svg width="44" height="44" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="4" width="32" height="32" rx="4" stroke="#f5a623" strokeWidth="2" />
      <rect x="10" y="10" width="8" height="8" rx="1" stroke="#f5a623" strokeWidth="2" />
      <rect x="22" y="10" width="8" height="8" rx="1" stroke="#f5a623" strokeWidth="2" />
      <rect x="10" y="22" width="8" height="8" rx="1" stroke="#f5a623" strokeWidth="2" />
      <rect x="22" y="22" width="8" height="8" rx="1" stroke="#f5a623" strokeWidth="2" />
    </svg>
  );
}

function BlenderIcon() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 34 L22 10 L34 34 Z" stroke="#f5a623" strokeWidth="2" fill="none" strokeLinejoin="round" />
      <circle cx="22" cy="28" r="5" stroke="#f5a623" strokeWidth="2" />
      <line x1="22" y1="10" x2="22" y2="23" stroke="#f5a623" strokeWidth="1.5" />
    </svg>
  );
}

function MockupIcon() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="5" y="9" width="34" height="22" rx="3" stroke="#f5a623" strokeWidth="2" />
      <path d="M16 31 L28 31 L30 38 L14 38 Z" stroke="#f5a623" strokeWidth="2" fill="none" />
      <rect x="11" y="14" width="22" height="12" rx="1" stroke="#f5a623" strokeWidth="1.5" />
      <circle cx="30" cy="36" r="0" fill="#f5a623" />
    </svg>
  );
}

const skills: Skill[] = [
  {
    icon: <FigmaIcon />,
    title: 'Figma',
    description:
      'Skilled in designing wireframes, prototypes, and high-fidelity UI screens using Figma. Experienced in creating reusable components, design systems, and interactive prototypes for smooth handoff to development.',
  },
  {
    icon: <CanvaIcon />,
    title: 'Canva',
    description:
      'Proficient in Canva for creating polished social media graphics, presentations, and marketing visuals. Comfortable building branded templates and quick design assets without sacrificing visual quality.',
  },
  {
    icon: <BlenderIcon />,
    title: 'Blender',
    description:
      'Experienced in using Blender for 3D modeling, rendering, and basic animation to bring design concepts to life. Comfortable creating simple 3D assets and visuals to enhance UI mockups or product presentations.',
  },
  {
    icon: <MockupIcon />,
    title: 'Mockups',
    description:
      'Skilled in creating realistic device and product mockups to present designs in real-world context. Experienced in turning flat UI screens into polished presentation visuals for portfolios, pitches, and client reviews.',
  },
];

function SkillCard({ skill, index }: { skill: Skill; index: number }) {
  const ref = useScrollAnimation<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className="scale-in bg-[#2d1f10] rounded-2xl p-8 flex flex-col items-center text-center border border-transparent hover:border-[#f5a623]/40 transition-all duration-300 hover:-translate-y-1"
      style={{
        transitionDelay: `${index * 0.1}s`,
        boxShadow: '0 0 0 1px rgba(245,166,35,0.15)',
      }}
    >
      <div className="mb-5">{skill.icon}</div>
      <h3 className="text-white text-lg font-semibold mb-3">{skill.title}</h3>
      <p className="text-white/65 text-[12px] leading-[1.35]">{skill.description}</p>
    </div>
  );
}

export default function Skills() {
  const titleRef = useScrollAnimation<HTMLHeadingElement>();

  return (
    <section id="skills" className="bg-[#1a2332] py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h2
          ref={titleRef}
          className="fade-up text-3xl md:text-[30px] font-semibold text-center mb-12"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          My{' '}
          <span className="text-[#f5a623]" style={{ fontFamily: "'Playfair Display', serif" }}>
            Skills
          </span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {skills.map((skill, i) => (
            <SkillCard key={skill.title} skill={skill} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
