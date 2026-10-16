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
      <rect x="1" y="1" width="17" height="17" rx="8.5" stroke="#2798c5" strokeWidth="2" />
      <rect x="20" y="1" width="17" height="17" rx="8.5" stroke="#2798c5" strokeWidth="2" />
      <rect x="1" y="20" width="17" height="17" rx="0" stroke="#2798c5" strokeWidth="2" />
      <circle cx="28.5" cy="28.5" r="8.5" stroke="#2798c5" strokeWidth="2" />
      <rect x="1" y="39" width="17" height="17" rx="8.5" stroke="#2798c5" strokeWidth="2" />
    </svg>
  );
}

function CanvaIcon() {
  return (
    <svg width="44" height="44" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="4" width="32" height="32" rx="4" stroke="#2798c5" strokeWidth="2" />
      <rect x="10" y="10" width="8" height="8" rx="1" stroke="#2798c5" strokeWidth="2" />
      <rect x="22" y="10" width="8" height="8" rx="1" stroke="#2798c5" strokeWidth="2" />
      <rect x="10" y="22" width="8" height="8" rx="1" stroke="#2798c5" strokeWidth="2" />
      <rect x="22" y="22" width="8" height="8" rx="1" stroke="#2798c5" strokeWidth="2" />
    </svg>
  );
}

function BlenderIcon() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 34 L22 10 L34 34 Z" stroke="#2798c5" strokeWidth="2" fill="none" strokeLinejoin="round" />
      <circle cx="22" cy="28" r="5" stroke="#2798c5" strokeWidth="2" />
      <line x1="22" y1="10" x2="22" y2="23" stroke="#2798c5" strokeWidth="1.5" />
    </svg>
  );
}

function MockupIcon() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="5" y="9" width="34" height="22" rx="3" stroke="#2798c5" strokeWidth="2" />
      <path d="M16 31 L28 31 L30 38 L14 38 Z" stroke="#2798c5" strokeWidth="2" fill="none" />
      <rect x="11" y="14" width="22" height="12" rx="1" stroke="#2798c5" strokeWidth="1.5" />
      <circle cx="30" cy="36" r="0" fill="#2798c5" />
    </svg>
  );
}

const skills: Skill[] = [
  {
    icon: <FigmaIcon />,
    title: 'Figma',
    description:
      'Wireframes, prototypes, design systems, and high-fidelity UI screens built for smooth handoff.',
  },
  {
    icon: <CanvaIcon />,
    title: 'Canva',
    description:
      'Polished social graphics, presentations, and marketing visuals with a strong visual rhythm.',
  },
  {
    icon: <BlenderIcon />,
    title: 'Blender',
    description:
      'Simple 3D assets, modeling, and visual explorations that give product ideas more dimension.',
  },
  {
    icon: <MockupIcon />,
    title: 'Mockups',
    description:
      'Real-world product mockups that help ideas feel tangible in portfolios, pitches, and reviews.',
  },
];

function SkillCard({ skill, index }: { skill: Skill; index: number }) {
  const ref = useScrollAnimation<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className="scale-in skill-interaction relative h-full min-h-[230px] border border-white/20 bg-[#111820] px-3 py-4 text-center sm:px-4 sm:py-5"
      style={{
        transitionDelay: `${index * 0.1}s`,
      }}
    >
      <div className="absolute left-3 top-3 text-[9px] text-white/40 tracking-wide font-light sm:text-[10px]">
        {`0${index + 1}`}
      </div>

      <div className="mt-5 flex justify-center mb-3 text-[#2798c5] sm:mb-4">{skill.icon}</div>

      <h3
        className="text-white text-[16px] font-semibold leading-tight mb-2 sm:text-[17px]"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        {skill.title}
      </h3>

      <p className="mx-auto text-white/70 text-[10px] leading-[1.45] max-w-[170px] sm:max-w-[190px]">
        {skill.description}
      </p>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="bg-[#080b10] py-20 px-6">
      <div className="max-w-[1360px] mx-auto px-2 sm:px-4 lg:px-6">
        <div className="mb-8 text-center">
          <h2
            className="text-3xl md:text-[30px] font-semibold"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            <>
              My{' '}
              <span className="text-[#2798c5]">Skills</span>
            </>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4 lg:gap-6">
          {skills.map((skill, i) => (
            <div key={skill.title} className="min-w-0">
              <SkillCard skill={skill} index={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
