interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: '직장인 건강 플랫폼, 직짱건강',
    description: `책상에 앉아 일을 많이 하는 당신! 현재 건강 상태가 어떤지 체크해볼까요?`,
    imgSrc: '/static/images/zigzzang/image1.png',
    href: 'https://hyo814-blog.vercel.app/blog/%EC%A7%81%EC%A7%B1-%EA%B1%B4%EA%B0%95-%EC%A7%81%EC%9E%A5%EC%9D%B8%EC%9D%84-%EC%9C%84%ED%95%9C-%EC%98%AC%EC%9D%B8%EC%9B%90-%ED%97%AC%EC%8A%A4%EC%BC%80%EC%96%B4-%EC%84%9C%EB%B9%84%EC%8A%A4-%EA%B0%9C%EB%B0%9C',
  },
  {
    title: '여행을 함께, TripTune',
    description: `함께 여행계획을 작성하는 웹프로젝트`,
    imgSrc: '/static/images/triptune/image12.png',
    href: 'https://hyo814-blog.vercel.app/blog/%EC%9B%B9%20%EA%B8%B0%EC%88%A0%EB%A1%9C%20%EB%A7%8C%EB%93%9C%EB%8A%94%20%ED%98%91%EC%97%85%ED%98%95%20%EC%97%AC%ED%96%89%20%EA%B3%84%ED%9A%8D%20%ED%94%8C%EB%9E%AB%ED%8F%BC%20TripTune%20%EA%B0%9C%EB%B0%9C',
  },
  {
    title: '히투지투 프로젝트',
    description: `2022 캡스톤, 운동 헬스케어 프로그램 - 프론트엔드`,
    imgSrc: '/static/images/히투지투/image01.png',
    href: 'https://hyo814-blog.vercel.app/blog/%EB%8B%B9%EC%8B%A0%EC%9D%98-%EC%9A%B4%EB%8F%99-%ED%8C%8C%ED%8A%B8%EB%84%88-%ED%81%90%ED%94%BC%ED%8A%B8',
  },
  {
    title: '동아리 사이트 프로젝트',
    description: `동아리 사이트 프로젝트 - 프론트엔드`,
    imgSrc: '/static/images/fancuk/image.png',
    href: 'https://hyo814-blog.vercel.app/blog/%EB%8F%99%EC%95%84%EB%A6%AC-%EC%82%AC%EC%9D%B4%ED%8A%B8-%EB%A7%8C%EB%93%A4%EA%B8%B0-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8',
  },
  {
    title: '코멘토 프로그램',
    description: `실제 현업 WEB 개발자와 함께 SW 포트폴리오 제작까지!`,
    imgSrc: '/static/images/escape/image2.png',
    href: 'https://hyo814-blog.vercel.app/blog/%EC%8B%A4%EC%A0%9C-%ED%98%84%EC%97%85-web-%EA%B0%9C%EB%B0%9C%EC%9E%90%EC%99%80-%ED%95%A8%EA%BB%98-sw-%ED%8F%AC%ED%8A%B8%ED%8F%B4%EB%A6%AC%EC%98%A4-%EC%A0%9C%EC%9E%91%EA%B9%8C%EC%A7%80',
  },
]

export default projectsData
