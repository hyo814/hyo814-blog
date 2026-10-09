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
    title: '교통 데이터 플랫폼',
    kind: '실무',
    period: '2025.04 — 현재',
    stack: 'Django · PostgreSQL · D3.js · jsTree · Playwright',
    description: `등록 신청, 트리 구조, 설문조사, 시각화, Playwright QA 자동화를 맡고 있습니다. 프런트엔드로 합류해 지금은 모델과 쿼리까지 직접 다룹니다.`,
    href: '/blog/2025년도~현재의-교통-데이터-플랫폼',
  },
  {
    title: '숙박 큐레이션 플랫폼 프런트엔드',
    kind: '실무',
    period: '2022.08 — 2024.03',
    stack: 'TypeScript · Next.js · SWR · Emotion',
    description: `일본어 다국어 적용, 프로모션·프리오더, 가격 표시, 웹→앱 전환과 이벤트 태깅을 맡았습니다.`,
    href: '/blog/2022년도~2024년도의-숙박-큐레이션-플랫폼',
  },
  {
    title: '산업 AI 판독 시스템 프런트엔드',
    kind: '실무',
    period: '2021.04 — 2022.08',
    stack: 'JavaScript · React · WebSocket',
    description: `관세청 불법 복제품 판독 시스템과 공항 보안 검색 판독 시스템의 화면을 맡아, 웹소켓 실시간 판독 화면을 만들고 바닐라 JS 화면을 React SPA로 옮겼습니다.`,
    href: '/blog/2021년도~2022년도의-산업-ai-솔루션',
  },
  {
    title: '냉장고 재고 관리 서비스, 갈무리부엌',
    kind: '사이드 프로젝트',
    period: '2026.09',
    stack: 'React · TypeScript · Vite · Flask · PostgreSQL · Claude API',
    description: `원티드 AI Championship 2026 출품작. 냉장고 재고·레시피·장보기를 잇는 모바일 웹으로, 일주일 동안 커밋 894개를 Claude Code 에이전트에게 맡기고 무엇을 만들지와 만들지 않을지를 정했습니다.`,
    href: '/blog/갈무리부엌-일주일-커밋-894개를-에이전트에게-맡기고-내가-한-일',
    githubHref: 'https://github.com/hyo814/galmuri-kitchen',
  },
  {
    title: '여행을 함께, TripTune',
    kind: '사이드 프로젝트',
    period: '2024.06 — 현재',
    stack: 'Next.js · TypeScript · React Query · STOMP',
    description: `2인 팀으로 함께 여행 계획을 세우는 웹 서비스로, 프런트엔드 전체를 맡아 MVP를 6개월 만에 출시했고 지금도 운영 중입니다.`,
    imgSrc: '/static/images/triptune/image12.png',
    href: '/blog/웹 기술로 만드는 협업형 여행 계획 플랫폼 TripTune 개발',
    githubHref: 'https://github.com/TripTune-Project/TripTune-Frontend',
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
    stack: 'React · Flask',
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
    stack: 'Django · SQLite · Bootstrap 5 · Kakao Maps',
    description: `2020년 부트캠프에서 만든 방탈출 리뷰 사이트를 2026년에 Django 6으로 다시 짰습니다. 로그인이 오타로 항상 실패하고 글쓰기 URL이 없던 원본을 카테고리 모델 하나로 정리한 기록입니다. 2020년 부트캠프 기록은 글 첫 문단에서 이어집니다.`,
    imgSrc: '/static/images/escape/image2.png',
    href: '/blog/6년-전-방탈출-사이트를-다시-열었더니-글을-쓸-수-없는-게시판이었다',
    githubHref: 'https://github.com/hyo814/escape-plus',
  },
]

export default projectsData
