'use client'

import React from 'react'
import TechCard from '../../components/TechCard'

export default function Skills() {
  const techData = [
    {
      front: 'Next.js',
      back: 'Next.js는 서버사이드 렌더링과 정적 사이트 생성을 지원하는 React 기반 프레임워크입니다. React 애플리케이션을 최적화하고 SEO 성능을 향상시키기 위해 사용됩니다.',
      imageSrc:
        'https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=next.js&logoColor=white',
    },
    {
      front: 'React',
      back: 'React는 사용자 인터페이스를 구축하기 위한 JavaScript 라이브러리입니다. 컴포넌트 기반 아키텍처를 제공하여 UI를 효율적으로 개발하고 관리할 수 있습니다.',
      imageSrc:
        'https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black',
    },
    {
      front: 'TypeScript',
      back: 'TypeScript는 정적 타입을 추가하여 JavaScript를 보완하는 언어입니다. 코드의 가독성을 높이고 대규모 애플리케이션에서의 오류를 사전에 방지하는 데 도움을 줍니다.',
      imageSrc:
        'https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white',
    },
    {
      front: 'HTML',
      back: 'HTML은 웹 페이지의 구조를 정의하는 마크업 언어입니다. 웹 콘텐츠의 뼈대를 구성하며, 웹 브라우저가 콘텐츠를 해석하고 렌더링할 수 있도록 돕습니다.',
      imageSrc:
        'https://img.shields.io/badge/HTML-E34F26?style=flat-square&logo=html5&logoColor=white',
    },
    {
      front: 'CSS',
      back: 'CSS는 HTML 요소의 스타일을 지정하기 위한 스타일링 언어입니다. 레이아웃, 색상, 폰트 등을 정의하며, 반응형 웹 디자인을 구현하는 데 필수적입니다.',
      imageSrc:
        'https://img.shields.io/badge/CSS-1572B6?style=flat-square&logo=css3&logoColor=white',
    },
    {
      front: 'JavaScript',
      back: 'JavaScript는 웹 페이지의 동작을 제어하는 프로그래밍 언어입니다. 비동기 처리, DOM 조작, API 통신 등 동적인 웹 애플리케이션을 구축하는 데 사용됩니다.',
      imageSrc:
        'https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black',
    },
    {
      front: 'Tailwind CSS',
      back: 'Tailwind는 유틸리티 우선 CSS 프레임워크로, 빠르게 스타일링을 적용하고 모듈화된 스타일을 제공합니다. 반응형 디자인 구현에 최적화되어 있습니다.',
      imageSrc:
        'https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white',
    },
    {
      front: 'CSS Modules',
      back: 'CSS Modules는 컴포넌트 기반으로 CSS를 모듈화하여 중복 이름 충돌을 방지하고, 각 컴포넌트에 고유한 클래스 이름을 부여하는 방식입니다.',
      imageSrc:
        'https://img.shields.io/badge/CSS_Modules-000000?style=flat-square&logo=css-modules&logoColor=white',
    },
    {
      front: 'Styled Components',
      back: 'Styled Components는 JavaScript 파일 내에서 CSS를 작성할 수 있는 CSS-in-JS 라이브러리입니다. 동적 스타일링 및 컴포넌트 단위의 스타일링을 효율적으로 구현합니다.',
      imageSrc:
        'https://img.shields.io/badge/Styled_Components-DB7093?style=flat-square&logo=styled-components&logoColor=white',
    },
    {
      front: 'Recoil',
      back: 'Recoil은 React 애플리케이션에서 상태 관리를 돕는 라이브러리입니다. 복잡한 상태를 쉽게 다룰 수 있으며, 비동기 데이터 흐름과 상태 공유를 효율적으로 관리할 수 있습니다.',
      imageSrc:
        'https://img.shields.io/badge/Recoil-3578E5?style=flat-square&logo=recoil&logoColor=white',
    },
    {
      front: 'Context API',
      back: 'Context API는 React에서 전역 상태를 관리하고, 컴포넌트 트리 전체에 데이터를 전달할 때 유용하게 사용할 수 있는 내장 기능입니다.',
      imageSrc:
        'https://img.shields.io/badge/Context_API-61DAFB?style=flat-square&logo=react&logoColor=black',
    },
    {
      front: 'Redux',
      back: 'Redux는 애플리케이션 상태를 중앙에서 관리하는 패턴 및 라이브러리입니다. 상태의 일관성을 유지하고, 상태가 복잡해질 때 효율적으로 처리합니다.',
      imageSrc:
        'https://img.shields.io/badge/Redux-764ABC?style=flat-square&logo=redux&logoColor=white',
    },
    {
      front: 'React Query',
      back: 'React Query는 서버에서 데이터를 쉽게 가져오고 캐싱하는 라이브러리입니다. 비동기 데이터 페칭을 간편하게 처리할 수 있어 성능 최적화에 유용합니다.',
      imageSrc:
        'https://img.shields.io/badge/React_Query-FF4154?style=flat-square&logo=react-query&logoColor=white',
    },
    {
      front: 'Axios',
      back: 'Axios는 HTTP 요청을 쉽게 보낼 수 있는 라이브러리입니다. 비동기 통신을 간단하게 구현하고, API 요청과 응답 처리에 주로 사용됩니다.',
      imageSrc:
        'https://img.shields.io/badge/Axios-5A29E4?style=flat-square&logo=axios&logoColor=white',
    },
    {
      front: 'Zustand',
      back: 'Zustand는 간단하고 직관적인 상태 관리 라이브러리입니다. 간편한 API와 적은 코드량으로 상태 관리를 할 수 있어, 소규모 프로젝트에 적합합니다.',
      imageSrc:
        'https://img.shields.io/badge/Zustand-663399?style=flat-square&logo=zustand&logoColor=white',
    },
    {
      front: 'Fetch API',
      back: 'Fetch API는 네트워크 요청을 위한 최신 브라우저 기능입니다. 비동기 요청을 보내고, JSON, 텍스트, HTML 등 다양한 형식의 응답을 처리할 수 있습니다.',
      imageSrc:
        'https://img.shields.io/badge/Fetch_API-FF9900?style=flat-square&logo=fetch-api&logoColor=white',
    },
    {
      front: 'Jest',
      back: 'Jest는 JavaScript 테스트 프레임워크로, 유닛 테스트 및 통합 테스트를 쉽게 작성할 수 있으며, 테스트 환경을 손쉽게 구축할 수 있습니다.',
      imageSrc:
        'https://img.shields.io/badge/Jest-C21325?style=flat-square&logo=jest&logoColor=white',
    },
    {
      front: 'React Testing Library',
      back: 'React Testing Library는 React 컴포넌트의 테스트를 돕는 도구로, 사용자가 실제로 애플리케이션을 사용하듯 테스트할 수 있는 환경을 제공합니다.',
      imageSrc:
        'https://img.shields.io/badge/React_Testing_Library-E33332?style=flat-square&logo=testing-library&logoColor=white',
    },
    {
      front: 'Yarn',
      back: 'Yarn은 JavaScript 패키지 관리자입니다. 의존성 설치 속도가 빠르며, 프로젝트 의존성 관리에서 효율성을 제공해줍니다.',
      imageSrc:
        'https://img.shields.io/badge/Yarn-2C8EBB?style=flat-square&logo=yarn&logoColor=white',
    },
    {
      front: 'Yarn Berry',
      back: 'Yarn Berry는 Yarn의 새로운 버전으로, 더 나은 성능을 제공하고 프로젝트 크기를 최소화하여 패키지 관리를 더욱 효율적으로 만듭니다.',
      imageSrc:
        'https://img.shields.io/badge/Yarn_Berry-2C8EBB?style=flat-square&logo=yarn&logoColor=white',
    },
    {
      front: 'npm',
      back: 'npm은 Node.js에서 패키지를 관리하는 도구입니다. 패키지 설치 및 버전 관리를 도와주는 중요한 개발 도구입니다.',
      imageSrc:
        'https://img.shields.io/badge/npm-CB3837?style=flat-square&logo=npm&logoColor=white',
    },
    {
      front: 'Webpack',
      back: 'Webpack은 JavaScript 애플리케이션의 모듈 번들러입니다. 모듈 의존성을 관리하고, 코드를 최적화하여 번들링합니다.',
      imageSrc:
        'https://img.shields.io/badge/Webpack-8DD6F9?style=flat-square&logo=webpack&logoColor=black',
    },
    {
      front: 'Vite',
      back: 'Vite는 빠른 개발 서버와 번들러를 제공하는 도구로, 핫 모듈 리로딩 기능을 통해 개발 중 빠른 피드백을 제공합니다.',
      imageSrc:
        'https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white',
    },
    {
      front: 'Git',
      back: 'Git은 분산 버전 관리 시스템으로, 협업 시 코드 변경 사항을 관리하고 기록할 수 있는 필수 도구입니다.',
      imageSrc:
        'https://img.shields.io/badge/Git-F05032?style=flat-square&logo=git&logoColor=white',
    },
    {
      front: 'Firebase',
      back: 'Firebase는 애플리케이션 개발을 위한 백엔드 플랫폼으로, 데이터베이스, 인증, 서버리스 기능을 제공합니다.',
      imageSrc:
        'https://img.shields.io/badge/Firebase-FFCA28?style=flat-square&logo=firebase&logoColor=black',
    },
    {
      front: 'Netlify',
      back: 'Netlify는 정적 사이트를 빠르게 배포할 수 있는 플랫폼입니다. CDN을 통해 전 세계적으로 빠르게 콘텐츠를 제공할 수 있습니다.',
      imageSrc:
        'https://img.shields.io/badge/Netlify-00C7B7?style=flat-square&logo=netlify&logoColor=white',
    },
    {
      front: 'Vercel',
      back: 'Vercel은 Next.js 애플리케이션 배포에 최적화된 플랫폼으로, 빠르고 효율적인 배포를 제공합니다.',
      imageSrc:
        'https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=vercel&logoColor=white',
    },
    {
      front: 'Jenkins',
      back: 'Jenkins는 CI/CD 파이프라인을 구축해 자동화된 배포와 테스트를 지원하는 도구입니다.',
      imageSrc:
        'https://img.shields.io/badge/Jenkins-D24939?style=flat-square&logo=jenkins&logoColor=white',
    },
    {
      front: 'Octopus Deploy',
      back: 'Octopus Deploy는 지속적 배포(CD)를 지원하는 도구로, 배포 파이프라인을 구성하고 관리하는 데 유용합니다.',
      imageSrc:
        'https://img.shields.io/badge/Octopus_Deploy-2D9CDB?style=flat-square&logo=octopusdeploy&logoColor=white',
    },
    {
      front: 'Slack',
      back: 'Slack은 협업과 커뮤니케이션을 위한 메시징 플랫폼입니다. 프로젝트 관리와 팀 간 소통을 원활하게 할 수 있습니다.',
      imageSrc:
        'https://img.shields.io/badge/Slack-4A154B?style=flat-square&logo=slack&logoColor=white',
    },
    {
      front: 'Notion',
      back: 'Notion은 노트 작성과 프로젝트 관리를 위한 도구로, 팀 협업 및 문서 관리를 손쉽게 할 수 있습니다.',
      imageSrc:
        'https://img.shields.io/badge/Notion-000000?style=flat-square&logo=notion&logoColor=white',
    },
    {
      front: 'ESLint',
      back: 'ESLint는 JavaScript 코드 품질을 유지하기 위한 린팅 도구입니다. 코드 스타일과 오류를 자동으로 잡아줍니다.',
      imageSrc:
        'https://img.shields.io/badge/ESLint-4B32C3?style=flat-square&logo=eslint&logoColor=white',
    },
    {
      front: 'Prettier',
      back: 'Prettier는 코드 포맷팅 도구로, 일관된 코드 스타일을 유지하고 가독성을 높이는 데 사용됩니다.',
      imageSrc:
        'https://img.shields.io/badge/Prettier-F7B93E?style=flat-square&logo=prettier&logoColor=white',
    },
    {
      front: 'Storybook',
      back: 'Storybook은 컴포넌트 개발을 위한 UI 도구로, 개별 컴포넌트를 독립적으로 개발 및 테스트할 수 있습니다.',
      imageSrc:
        'https://img.shields.io/badge/Storybook-FF4785?style=flat-square&logo=storybook&logoColor=white',
    },
    {
      front: 'Figma',
      back: 'Figma는 협업 디자인 도구로, 디자이너 및 기획자와 함께 UX/UI 작업을 원활하게 진행할 수 있습니다.',
      imageSrc:
        'https://img.shields.io/badge/Figma-F24E1E?style=flat-square&logo=figma&logoColor=white',
    },
    {
      front: 'Chrome DevTools',
      back: 'Chrome DevTools는 웹 개발을 위한 브라우저 내장 도구로, 디버깅 및 성능 최적화를 도와줍니다.',
      imageSrc:
        'https://img.shields.io/badge/Chrome_DevTools-4285F4?style=flat-square&logo=google-chrome&logoColor=white',
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
        아래는 다양한 프로젝트와 실무에서 활용한 주요 기술들입니다.
        <br />
        클릭하여 기술의 특징과 사용 경험을 알아보세요.
      </p>
      <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
        {techData.map((tech, index) => (
          <TechCard
            key={index}
            frontContent={tech.front}
            backContent={tech.back}
            imageSrc={tech.imageSrc} // 이미지 배지 전달
          />
        ))}
      </div>
    </div>
  )
}
