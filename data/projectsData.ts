interface Project {
  title: string
  description: string
  kind: '실무' | '사이드 프로젝트' | '학부·교육'
  period: string
  stack?: string
  href?: string
  imgSrc?: string
  githubHref?: string
}

const projectsData: Project[] = [
  {
    title: 'ITS 표준데이터 관리 시스템(SDMS)',
    kind: '실무',
    period: '2025.04 — 현재',
    stack: 'Django · PostgreSQL · D3.js · jsTree · Playwright',
    description: `ISO 14817-2 기반 표준데이터 모델링부터 분류체계·메타클래스 트리, D3 시각화, Open API 포털, Playwright QA 자동화까지. 프런트엔드 주력으로 합류해 Django 모델·마이그레이션·쿼리로 범위를 넓히는 중입니다.`,
    href: '/blog/2025년도~현재의-sdms',
  },
  {
    title: '숙박 큐레이션 플랫폼 프런트엔드',
    kind: '실무',
    period: '2022.08 — 2024.03',
    stack: 'TypeScript · Next.js · SWR · Styled-Components',
    description: `일본어 다국어 지원, 무한 스크롤 성능 개선, 웹→앱 전환 UX 개편과 이벤트 태깅을 맡았습니다.`,
    href: '/blog/2022년도~2024년도의-숙박-큐레이션-플랫폼',
  },
  {
    title: '산업 AI 판독 시스템 프런트엔드',
    kind: '실무',
    period: '2021.04 — 2022.08',
    stack: 'JavaScript · React · Redux · WebSocket',
    description: `관세청 불법 복제품 판독 시스템과 공항 보안 검색 판독 시스템의 화면을 맡아, 바닐라 JS 기반 화면을 React SPA로 전환하고 웹소켓 실시간 판독 화면을 구현했습니다.`,
    href: '/blog/2021년도~2022년도의-산업-ai-솔루션',
  },
  {
    title: '여행을 함께, TripTune',
    kind: '사이드 프로젝트',
    period: '2024.05 — 현재',
    stack: 'Next.js · TypeScript · React Query · STOMP',
    description: `2인 팀으로 함께 여행 계획을 세우는 웹 서비스로, 프런트엔드 전체를 맡아 MVP를 6개월 만에 출시했고 지금도 운영 중입니다.`,
    imgSrc: '/static/images/triptune/image12.png',
    href: '/blog/웹 기술로 만드는 협업형 여행 계획 플랫폼 TripTune 개발',
    githubHref: 'https://github.com/TripTune-Project/TripTune-Frontend',
  },
  {
    title: 'PyNews — Django 뉴스레터 서비스',
    kind: '사이드 프로젝트',
    period: '2026',
    stack: 'Django · feedparser · BeautifulSoup4 · Render',
    description: `RSS 9개 소스에서 백엔드 관련 글을 수집·정제·태깅하는 파이프라인과, UUID 토큰 기반 구독/해지 뉴스레터를 Django로 만들었습니다.`,
    href: '/blog/feedparser-bs4로-rss-파이프라인-만들기',
    githubHref: 'https://github.com/hyo814/python-news',
  },
  {
    title: '직장인 건강 플랫폼, 직짱건강',
    kind: '사이드 프로젝트',
    period: '2024.01 — 2024.03',
    stack: 'React · TypeScript',
    description: `스위그 협업 프로젝트 3기. 백엔드를 기다리지 않고 설문 인터페이스를 먼저 완성하는 방식으로 진행했습니다.`,
    imgSrc: '/static/images/zigzzang/image1.png',
    href: '/blog/직짱-건강-직장인을-위한-올인원-헬스케어-서비스-개발',
    githubHref: 'https://github.com/SWYP-3rd-period-1-team/JopJjangHealth-frontend',
  },
  {
    title: '큐피트 (H2J2) — 홈트레이닝 웹',
    kind: '학부·교육',
    period: '2020',
    stack: 'React · Redux · Flask · TensorFlow.js',
    description: `대학 종합설계(졸업작품). 프런트엔드를 맡았고, 자세 교정 영상 처리를 서버에서 브라우저(TensorFlow.js·ml5)로 옮긴 첫 성능 개선 경험이 남은 프로젝트입니다.`,
    imgSrc: '/static/images/히투지투/image01.png',
    href: '/blog/당신의-운동-파트너-큐피트',
    githubHref: 'https://github.com/schoolproject2020/H2J2-frontend',
  },
  {
    title: '동아리 사이트 프로젝트',
    kind: '학부·교육',
    period: '2021',
    stack: 'JavaScript · HTML/CSS',
    description: `학내 동아리 홍보·관리용 웹사이트. 배경지식 없이 시작해 범위를 줄여 완주한 기록입니다.`,
    imgSrc: '/static/images/fancuk/image.png',
    href: '/blog/동아리-사이트-만들기-프로젝트',
    githubHref: 'https://github.com/fancuk',
  },
  {
    title: '코멘토 직무부트캠프 — escape-plus 리팩터',
    kind: '학부·교육',
    period: '2020 제작 · 2026 리팩터',
    stack: 'JavaScript · Vite',
    description: `현업 웹 개발자 멘토링으로 만든 방탈출 포트폴리오를 6년 뒤 escape-plus로 다시 손본 기록입니다.`,
    imgSrc: '/static/images/escape/image2.png',
    href: '/blog/실제-현업-web-개발자와-함께-sw-포트폴리오-제작까지',
    githubHref: 'https://github.com/hyo814/escape-plus',
  },
]

export default projectsData
