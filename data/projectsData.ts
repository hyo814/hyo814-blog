interface Project {
  title: string,
  description: string,
  href?: string,
  imgSrc?: string,
}

const projectsData: Project[] = [
  {
    title: '직장인 건강 플랫폼, 직장건강',
    description: `책상에 앉아 일을 많이 하는 당신! 현재 건강 상태가 어떤지 체크해볼까요?`,
    imgSrc: '',
    href: 'https://hyo814.notion.site/3-5fd48f1439f440fdb9fffe0e2e55cac7',
  },
  {
    title: '여행을 함께, TripTune (예정)',
    description: `함께 여행계획을 작성하는 웹프로젝트`,
    imgSrc: '',
    href: 'https://github.com/TripTune-Project',
  },
  {
    title: '동아리 사이트 프로젝트',
    description: `동아리 사이트 프로젝트 - 프론트엔드`,
    imgSrc: '',
    href: 'https://github.com/fancuk',
  },
  {
    title: '히투지투 프로젝트',
    description: `2022 캡스톤, 운동 헬스케어 프로그램 - 프론트엔드`,
    imgSrc: '',
    href: 'https://github.com/schoolproject2020',
  },
]

export default projectsData
