'use client'

import React from 'react'
import TechCard from '../../components/TechCard'

export default function Skills() {
	const techData = [
		{
			front: 'Next.js',
			back: 'Next.js는 서버사이드 렌더링과 정적 사이트 생성을 지원하는 React 기반 프레임워크입니다. React 애플리케이션을 최적화하고 SEO 성능을 향상시키기 위해 사용됩니다. 특히 대규모 트래픽을 다루는 서비스에서 SSR을 통해 빠른 로딩 속도를 보장하며, 정적 페이지 생성 기능을 통해 높은 검색 엔진 노출을 가능하게 합니다. 제가 Next.js를 선택한 이유는 대규모 서비스에서 SEO 성능 향상이 중요했기 때문이며, 특히 빠른 서버 응답이 필요한 프로젝트에서 많은 성과를 냈습니다.',
			imageSrc:
				'https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=next.js&logoColor=white',
		},
		{
			front: 'React',
			back: 'React는 사용자 인터페이스를 구축하기 위한 JavaScript 라이브러리입니다. 컴포넌트 기반 아키텍처를 제공하여 UI를 효율적으로 개발하고 관리할 수 있습니다. 재사용 가능한 컴포넌트를 통해 코드의 유지보수성을 높이고, React Hooks를 활용하여 상태 관리 및 로직을 간결하게 작성하는 데 강점을 보유하고 있습니다. 특히 복잡한 사용자 인터페이스를 쉽게 구성하고, 상태 관리를 효율적으로 처리하는 점에서 많은 관심을 갖고 있고, UI/UX 개선 프로젝트에서 React를 통해 사용자 경험을 크게 향상시킨 경험이 있습니다.',
			imageSrc:
				'https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black',
		},
		{
			front: 'TypeScript',
			back: 'TypeScript는 정적 타입을 추가하여 JavaScript를 보완하는 언어입니다. 코드의 가독성을 높이고 대규모 애플리케이션에서의 오류를 사전에 방지하는 데 도움을 줍니다. 특히 팀 협업 시 타입 정의를 통해 코드의 의도를 명확하게 하여 커뮤니케이션 비용을 줄이고, 생산성을 높이는 데 기여하고 있습니다. 저는 코드 안정성을 확보하고, 예측하지 못한 런타임 오류를 줄이기 위해 TypeScript를 적극적으로 활용하고 있으며, 팀 내에서 생산성 향상에 큰 기여를 하고 있습니다.',
			imageSrc:
				'https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white',
		},
		{
			front: 'CSS Modules',
			back: 'CSS Modules는 컴포넌트 기반으로 CSS를 모듈화하여 중복 이름 충돌을 방지하고, 각 컴포넌트에 고유한 클래스 이름을 부여하는 방식입니다. 이러한 특성 덕분에 대규모 프로젝트에서 유지보수성과 코드의 일관성을 유지하는 데 매우 효과적입니다. 특히 스타일링 시 전역 네임스페이스 오염을 방지할 수 있어서, CSS 코드의 재사용성과 유지보수성을 강화할 수 있어 이를 선택했습니다.',
			imageSrc:
				'https://img.shields.io/badge/CSS_Modules-000000?style=flat-square&logo=css-modules&logoColor=white',
		},
		{
			front: 'Recoil',
			back: 'Recoil은 React 애플리케이션에서 상태 관리를 돕는 라이브러리입니다. 복잡한 상태를 쉽게 다룰 수 있으며, 비동기 데이터 흐름과 상태 공유를 효율적으로 관리할 수 있습니다. 특히 글로벌 상태 관리에 유리하여, 프로젝트에서 여러 컴포넌트 간의 데이터 일관성을 유지하는 데 중요한 역할을 합니다. 저는 비동기 상태 관리와 글로벌 상태를 쉽게 관리할 수 있다는 점에서 Recoil을 채택했으며, 이를 통해 복잡한 데이터 구조를 간단하게 관리한 경험이 있습니다.',
			imageSrc:
				'https://img.shields.io/badge/Recoil-3578E5?style=flat-square&logo=recoil&logoColor=white',
		},
		{
			front: 'React Query',
			back: 'React Query는 서버에서 데이터를 쉽게 가져오고 캐싱하는 라이브러리입니다. 비동기 데이터 페칭을 간편하게 처리할 수 있어 성능 최적화에 유용합니다. 특히 자동 리페칭 기능과 스마트한 캐싱을 통해 네트워크 비용을 절감하고 사용자 경험을 개선하는 데 기여하고 있습니다. 데이터 요청이 많은 프로젝트에서 React Query를 사용하여 로딩 시간과 사용자 대기 시간을 최소화한 경험이 있으며, 이를 통해 서비스 품질을 향상시키는 데 기여했습니다.',
			imageSrc:
				'https://img.shields.io/badge/React_Query-FF4154?style=flat-square&logo=react-query&logoColor=white',
		},
		{
			front: 'Styled Components',
			back: 'Styled Components는 JavaScript 파일 내에서 CSS를 작성할 수 있는 CSS-in-JS 라이브러리입니다. 동적 스타일링 및 컴포넌트 단위의 스타일링을 효율적으로 구현할 수 있습니다. 컴포넌트 기반 스타일링을 통해 코드 재사용성을 높이고, 유지보수성을 향상시키는 데 도움을 주고 있습니다. 특히, 동적 스타일 변경이 필요하거나 테마 변경 기능을 구현할 때 매우 유용하여 이를 적극 활용하고 있습니다.',
			imageSrc:
				'https://img.shields.io/badge/Styled_Components-DB7093?style=flat-square&logo=styled-components&logoColor=white',
		},
		{
			front: 'Zustand',
			back: 'Zustand는 간단하고 직관적인 상태 관리 라이브러리입니다. 간편한 API와 적은 코드량으로 상태 관리를 할 수 있어, 소규모 프로젝트에 적합하며 초기 설정이 복잡하지 않아 신속하게 상태 관리를 구축할 수 있는 장점이 있습니다. 저는 프로젝트 초기 단계에서 복잡한 설정 없이 빠르게 상태 관리를 적용해야 할 때 주로 사용하고 있습니다.',
			imageSrc:
				'https://img.shields.io/badge/Zustand-663399?style=flat-square&logo=zustand&logoColor=white',
		}
	]
	
	return (
		<div className="flex min-h-screen flex-col items-center bg-gray-100 px-4 py-12 sm:px-6 lg:px-8">
			<div className="divide-y divide-gray-200 dark:divide-gray-700">
				<div className="space-y-2 pb-8 pt-6 md:space-y-5">
					<h1
						className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
						Frontend Skills
					</h1>
				</div>
			</div>
			<br/>
			<p className="mb-8 max-w-2xl text-center text-lg text-gray-600">
				아래는 다양한 프로젝트와 실무에서 활용한 주요 기술들입니다. 각 기술은 제가 프로젝트에서 채택하고 효율적으로 사용한 이유와 경험을 바탕으로 설명되어 있습니다.
				<br/>
				클릭하여 기술의 특징과 사용 경험을 알아보세요.
			</p>
			<div style={{display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap'}}>
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
