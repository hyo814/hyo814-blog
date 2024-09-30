import React from 'react'

const TimeLineComponent = () => {
  const experienceData = [
    {
      company: '맥딜리버리',
      startDate: '2016-01-01',
      endDate: '2016-07-31',
      description: '전화주문 접수 및 입력원으로 일하며 다양한 고객 문의를 처리.',
    },
    {
      company: '공간정보기술',
      startDate: '2018-09-01',
      endDate: '2018-12-31',
      description: '데이터 입력원으로 근무하며, 여러 데이터를 관리하고 입력.',
    },
    {
      company: '컴퓨터정보공학부 편입',
      startDate: '2019-03-01',
      endDate: '2021-02-28',
      description: '컴퓨터정보공학부의 전반적인 커리큘럼.',
    },
    {
      company: '나초스',
      startDate: '2019-03-01',
      endDate: '2019-05-31',
      description: '운영체제에 대한 예시를 볼 수 있는 경험을 얻음.',
    },
    {
      company: '계산기',
      startDate: '2019-12-19',
      endDate: '2019-12-26',
      description: 'HTML, CSS, JavaScript를 통해 계산기를 만들어본 경험.',
    },
    {
      company: '카카오톡 클론',
      startDate: '2020-03-25',
      endDate: '2020-03-07',
      description: '카카오톡 클론을 통해 HTML, CSS, JavaScript 학습.',
    },
    {
      company: '그림판 프로젝트',
      startDate: '2020-03-06',
      endDate: '2020-03-28',
      description: 'JavaScript를 통해 다양한 이벤트를 경험.',
    },
    {
      company: '크롬 확장 프로그램',
      startDate: '2020-03-21',
      endDate: '2022-03-21',
      description: '크롬 확장 프로그램 기능을 구현해 본 경험.',
    },
    {
      company: '동아리 FAN',
      startDate: '2020-04-01',
      endDate: '2020-12-31',
      description: '웹 사이트 제작 및 프로젝트 진행 경험.',
    },
    {
      company: '프론트엔드 스터디 페스트 캠퍼스',
      startDate: '2020-04-01',
      endDate: '2020-12-31',
      description: '프론트엔드 스터디 참여 및 실습 경험.',
    },
    {
      company: '영화 사이트',
      startDate: '2020-06-30',
      endDate: '2020-07-04',
      description: '영화 관련 클론 코딩 프로젝트 진행.',
    },
    {
      company: '투두 리스트',
      startDate: '2020-06-30',
      endDate: '2020-07-04',
      description: '상태 관리에 대한 이해를 돕기 위한 투두 리스트 프로젝트 진행.',
    },
    {
      company: '로그인 / 회원가입',
      startDate: '2020-06-30',
      endDate: '2020-07-04',
      description: '회원가입과 로그인 기능을 구현하며 백엔드와 RESTful API 소통 경험.',
    },
    {
      company: '구구단 게임',
      startDate: '2020-06-30',
      endDate: '2020-07-04',
      description: '간단한 게임 기능을 구현해 JavaScript 학습.',
    },
    {
      company: '극도로 한정된 세계 프로젝트',
      startDate: '2020-07-20',
      endDate: '2020-07-31',
      description: '공공 프로젝트에서 공군지형과 AI 사용 기술을 적용.',
    },
    {
      company: '동아리 코마',
      startDate: '2020-08-01',
      endDate: '2020-12-31',
      description: '웹 클론 코딩 프로젝트 진행.',
    },
    {
      company: '게시판 프로젝트',
      startDate: '2020-08-06',
      endDate: '2020-08-30',
      description: 'Django에 대한 이해와 적용 실습.',
    },
    {
      company: '언택트 기술 박람회',
      startDate: '2020-08-18',
      endDate: '2020-09-01',
      description: '다양한 기술 박람회 참여 및 학습.',
    },
    {
      company: '전자정부 Young Frontier',
      startDate: '2020-08-24',
      endDate: '2020-08-26',
      description: 'Spring에 대한 간단한 소프트웨어 이해.',
    },
    {
      company: '블록체인 프로젝트',
      startDate: '2020-09-01',
      endDate: '2020-11-30',
      description: '팀과 함께 블록체인 시스템 보안 구현.',
    },
    {
      company: '운동 사이트 큐피트',
      startDate: '2020-09-01',
      endDate: '2020-11-30',
      description: '가이드 없이 시작해본 운동 관련 프로젝트.',
    },
    {
      company: '케라스',
      startDate: '2020-09-01',
      endDate: '2020-12-31',
      description: '케라스를 통해 다양한 데이터 방식 구현 경험.',
    },
    {
      company: '도서관 홈페이지 구축',
      startDate: '2020-09-01',
      endDate: '2020-12-31',
      description: '자바와 JSP를 사용한 도서관 반응형 홈페이지 구축.',
    },
    {
      company: '트위터 클론',
      startDate: '2020-12-26',
      endDate: '2020-12-29',
      description: 'Firebase를 적용하여 트위터 클론 프로젝트 진행.',
    },
    {
      company: '딥노이드 : 프론트엔드 개발',
      startDate: '2021-04-12',
      endDate: '2022-08-05',
      description: '의료와 산업 AI 솔루션을 개발 및 제공하는 인공지능 전문 기업',
    },
    {
      company: '스테이폴리오 : 프론트엔드 개발',
      startDate: '2022-08-08',
      endDate: '2024-03-01',
      description: '특별한 숙박 공간을 큐레이션하여 고객들에게 독창적인 경험을 제공하는 플랫폼',
    },
    {
      company: '스위그 협업 프로젝트 3기',
      startDate: '2024-01-01',
      endDate: '2024-03-31',
      description: '직짱 건강 플랫폼 구축을 위한 협업 프로젝트 진행.',
    },
    {
      company: 'TripTune',
      startDate: '2024-01-01',
      endDate: '진행 중',
      description: '여행 일정 플랫폼 구축 프로젝트.',
    },
    {
      company: '제로베이스 PRO 5기',
      startDate: '2024-05-01',
      endDate: '2024-08-14',
      description: '프론트엔드 스터디 및 다양한 인터페이스 학습.',
    },
    {
      company: '취준 컴퍼니 22기',
      startDate: '2024-09-23',
      endDate: '진행 중',
      description: '취업 준비를 위한 스터디 및 커피챗 활동.',
    },
  ]

  return (
    <div className="container relative mx-auto px-6">
      <div className="border-l-2 border-blue-600">
        {experienceData.map((experience, index) => (
          <div key={index} className="mb-8 flex items-start">
            <div className="-ml-4 mr-8 flex h-8 w-8 items-center justify-center rounded-full bg-blue-600">
              <span className="text-xl font-semibold text-white">{index + 1}</span>
            </div>
            <div className="w-full rounded-lg bg-white p-6 shadow-lg">
              <div className="mb-2 flex items-center justify-between">
                <span className="text-xl font-semibold text-blue-600">{experience.company}</span>
                <span className="text-sm text-gray-500">
                  {experience.startDate} - {experience.endDate}
                </span>
              </div>
              <p className="text-gray-700">{experience.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TimeLineComponent
