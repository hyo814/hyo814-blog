'use client'

import React from 'react'
import TechCard from '../../components/TechCard'

export default function Skills() {
  const techData = [
    {
      front: 'Next.js',
      back: 'React 기반의 SSR, SEO 최적화 프레임워크로 빠른 로딩을 보장하며, 대규모 서비스에서 사용.',
      imageSrc:
        'https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=next.js&logoColor=white',
    },
    {
      front: 'React',
      back: 'UI 구축을 위한 JavaScript 라이브러리. 컴포넌트 기반으로 유지보수성과 재사용성 높음.',
      imageSrc:
        'https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black',
    },
    {
      front: 'TypeScript',
      back: '정적 타입 지원으로 코드 안정성 향상. 대규모 프로젝트에서 오류 사전 방지 가능.',
      imageSrc:
        'https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white',
    },
    {
      front: 'CSS Modules',
      back: 'CSS 모듈화로 중복 네임 충돌 방지. 유지보수성과 일관성 향상.',
      imageSrc:
        'https://img.shields.io/badge/CSS_Modules-000000?style=flat-square&logo=css-modules&logoColor=white',
    },
    {
      front: 'Recoil',
      back: 'React에서 상태 관리에 유용한 라이브러리로 비동기 상태를 쉽게 처리 가능.',
      imageSrc:
        'https://img.shields.io/badge/Recoil-3578E5?style=flat-square&logo=recoil&logoColor=white',
    },
    {
      front: 'React Query',
      back: '비동기 데이터 페칭과 캐싱을 위한 라이브러리로, 성능 최적화와 네트워크 비용 절감에 유리.',
      imageSrc:
        'https://img.shields.io/badge/React_Query-FF4154?style=flat-square&logo=react-query&logoColor=white',
    },
    {
      front: 'Styled Components',
      back: 'CSS-in-JS 라이브러리로 동적 스타일링과 컴포넌트 단위의 스타일링이 가능.',
      imageSrc:
        'https://img.shields.io/badge/Styled_Components-DB7093?style=flat-square&logo=styled-components&logoColor=white',
    },
    {
      front: 'Zustand',
      back: '간단한 API를 통해 직관적으로 상태 관리를 제공하는 경량 라이브러리.',
      imageSrc:
        'https://img.shields.io/badge/Zustand-663399?style=flat-square&logo=zustand&logoColor=white',
    },
  ]

  return (
    <div className="flex min-h-screen flex-col items-center bg-gray-100 px-4 py-12 sm:px-6 lg:px-8">
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Frontend Skills
          </h1>
        </div>
      </div>
      <br />
      <p className="mb-8 max-w-2xl text-center text-lg text-gray-600">
        아래는 다양한 프로젝트와 실무에서 활용한 주요 기술들입니다. 각 기술은 제가 프로젝트에서
        채택하고 효율적으로 사용한 이유와 경험을 바탕으로 설명되어 있습니다.
        <br />
        클릭하여 기술의 특징과 사용 경험을 알아보세요.
      </p>
      <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
        {techData.map((tech, index) => (
          <TechCard
            key={index}
            frontContent={tech.front}
            backContent={tech.back}
            imageSrc={tech.imageSrc}
          />
        ))}
      </div>
    </div>
  )
}