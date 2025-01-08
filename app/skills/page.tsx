'use client'

import React from 'react'

export default function Skills() {
  const skillData = [
    {
      category: 'Frontend Skills',
      details: [
        'React.js, Next.js',
        'Recoil, Redux, Zustand, Context API',
        'Styled Components, CSS Modules',
        'React Query, TanStack Query',
        'JavaScript, TypeScript',
        'HTML, CSS',
      ],
    },
    {
      category: 'Version Control & Deployment',
      details: ['Git', 'Vercel', 'Netlify'],
    },
    {
      category: 'Tools',
      details: [
        'Swagger',
        'Slack, Notion',
        'Figma',
        'VSC (Visual Studio Code), WebStorm',
      ],
    },
    {
      category: 'Currently Learning',
      details: [
        'Vite',
        'Vitest',
        'Cypress',
        'Jest',
        'Testing Library',
        'Storybook',
        'Tailwind CSS',
      ],
    },
  ]
  
  return (
    <div className="flex min-h-screen flex-col items-center bg-gray-100 px-4 py-12 sm:px-6 lg:px-8">
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h3 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Frontend Skills
          </h3>
        </div>
      </div>
      <br />
      <table className="table-auto border-collapse border border-gray-300">
        <thead>
        <tr>
          <th className="border border-gray-300 px-4 py-2">Category</th>
          <th className="border border-gray-300 px-4 py-2">Details</th>
        </tr>
        </thead>
        <tbody>
        {skillData.map((skill, index) => (
          <tr key={index}>
            <td className="border border-gray-300 px-4 py-2 font-bold">
              {skill.category}
            </td>
            <td className="border border-gray-300 px-4 py-2">
              <ul>
                {skill.details.map((detail, idx) => (
                  <li key={idx}>{detail}</li>
                ))}
              </ul>
            </td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  )
}
