import React from 'react'

const TimeLineComponent = () => {
  const tagColors = {
    계약직: 'bg-red-100 text-red-800',
    편입: 'bg-yellow-100 text-yellow-800',
    사이드프로젝트: 'bg-purple-100 text-purple-800',
    동아리: 'bg-pink-100 text-pink-800',
    협업: 'bg-teal-100 text-teal-800',
    스터디: 'bg-orange-100 text-orange-800',
    공모전: 'bg-emerald-100 text-emerald-800',
    박람회: 'bg-rose-100 text-rose-800',
    커피챗: 'bg-orange-100 text-orange-800',
  }
  
  const experienceData = [
    {
      company: '맥딜리버리 콜센터',
      startDate: '2016-01-01',
      endDate: '2016-07-31',
      description: '전화주문 접수 및 입력원으로 일하며 다양한 고객 문의를 처리.',
      tags: ['계약직'],
    },
    {
      company: '공간정보기술',
      startDate: '2018-09-01',
      endDate: '2018-12-31',
      description: '데이터 입력원으로 근무하며, 여러 데이터를 관리하고 입력.',
      tags: ['계약직'],
    },
    {
      company: '컴퓨터정보공학부',
      startDate: '2019-03-01',
      endDate: '2021-02-28',
      description: '컴퓨터정보공학부의 전반적인 커리큘럼.',
      tags: ['편입'],
    },
    {
      company: '패스트 캠퍼스 > 프론트엔드',
      startDate: '2020-04-01',
      endDate: '2020-12-31',
      description: '프론트엔드 스터디 참여 및 실습 경험.',
      tags: ['스터디'],
    },
    {
      company: '코멘토 > 실제 현업 WEB 개발자와 함께 SW 포트폴리오 제작까지!',
      startDate: '2020-06-10',
      endDate: '2020-07-08',
      description: '실제 현업 WEB 개발자와 함께 SW 포트폴리오 제작까지! : 방탈출 제작',
      tags: ['사이드프로젝트'],
    },
    {
      company: '극도로 한정된 세계 프로젝트',
      startDate: '2020-07-20',
      endDate: '2020-07-31',
      description: '공모전을 통해 이전까지 배워왔던 프론트엔드 기술을 복습.',
      tags: ['사이드프로젝트', '협업', '공모전'],
    },
    {
      company: '코마',
      startDate: '2020-08-01',
      endDate: '2020-12-31',
      description: '웹 클론 코딩 프로젝트 진행.',
      tags: ['동아리', '협업', '사이드프로젝트'],
    },
    {
      company: '언택트 기술 박람회',
      startDate: '2020-08-18',
      endDate: '2020-09-01',
      description: '다양한 기술 박람회 참여 및 학습.',
      tags: ['박람회'],
    },
    {
      company: '전자정부 Young Frontier',
      startDate: '2020-08-24',
      endDate: '2020-08-26',
      description: 'Spring에 대한 간단한 소프트웨어 이해.',
      tags: ['강연'],
    },
    {
      company: '운동 사이트 큐피트',
      startDate: '2020-09-01',
      endDate: '2020-11-30',
      description: '가이드 없이 시작해본 운동 관련 프로젝트.',
      tags: ['사이드프로젝트', '협업'],
    },
    {
      company: '코멘토 > SQL 입문 부터 활용까지 데이터 분석 보고서 작성과 대시보드 개발',
      startDate: '2021-02-21',
      endDate: '2021-03-21',
      description: '데이터 개발 직무 부트 캠프',
      tags: ['사이드프로젝트'],
    },
    {
      company: '딥노이드 : 프론트엔드 개발',
      startDate: '2021-04-12',
      endDate: '2022-08-05',
      description: '의료와 산업 AI 솔루션을 개발 및 제공하는 인공지능 전문 기업.',
      tags: ['회사'],
    },
    {
      company: '빅데이터 분석 첫걸음 시작하기',
      startDate: '2021-11-10',
      endDate: '2021-12-15',
      description: '국비지원 : 빅데이터 분석 첫걸음 시작하기',
      tags: ['사이드프로젝트'],
    },
    {
      company: 'python & django로 시작하는 웹 프로그래밍',
      startDate: '2021-11-10',
      endDate: '2022-01-05',
      description: '국비지원 : python & django로 시작하는 웹 프로그래밍',
      tags: ['회사'],
    },
    {
      company: '스테이폴리오 : 프론트엔드 개발',
      startDate: '2022-08-08',
      endDate: '2024-03-01',
      description: '특별한 숙박 공간을 큐레이션하여 고객들에게 독창적인 경험을 제공하는 플랫폼.',
      tags: ['회사'],
    },
    {
      company: '스위그 협업 프로젝트 3기',
      startDate: '2024-01-01',
      endDate: '2024-03-31',
      description: '직장 건강 플랫폼 구축을 위한 협업 프로젝트 진행.',
      tags: ['사이드프로젝트', '협업'],
    },
    {
      company: 'TripTune',
      startDate: '2024-01-01',
      endDate: '진행 중',
      description: '여행 일정 플랫폼 구축 프로젝트.',
      tags: ['사이드프로젝트', '협업'],
    },
    {
      company: '제로베이스 PRO 5기',
      startDate: '2024-05-01',
      endDate: '2024-08-14',
      description: '프론트엔드 스터디 및 다양한 인터페이스 학습.',
      tags: ['스터디', '커피챗'],
    },
    {
      company: '취준 컴퍼니 22기',
      startDate: '2024-09-23',
      endDate: '진행 중',
      description: '취업 준비를 위한 스터디 및 커피챗 활동.',
      tags: ['스터디', '커피챗'],
    },
  ]
  
  return (
    <div className="container mx-auto px-6 py-8">
      <div className="border-l-4 border-blue-600 pl-8">
        {[...experienceData].reverse().map((experience, index) => (
          <div key={index} className="mb-8 flex items-start">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600">
              <span className="text-xl font-bold text-white">{experienceData.length - index}</span>
            </div>
            <div className="ml-6 w-full rounded-lg bg-gray-50 p-6 shadow-md transition-all hover:shadow-lg">
              <div className="mb-2 flex items-center justify-between">
                <span className="text-2xl font-semibold text-blue-600">{experience.company}</span>
                <span className="text-sm text-gray-500">
                  {experience.startDate} - {experience.endDate}
                </span>
              </div>
              <p className="text-gray-700">{experience.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {experience.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className={`inline-block rounded-full px-3 py-1 text-sm font-semibold ${tagColors[tag] || 'bg-gray-100 text-gray-800'}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TimeLineComponent
