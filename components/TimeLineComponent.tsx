import React from 'react'

const TimeLineComponent = () => {
  const tagColors = {
    회사: 'bg-clayfield text-[#F7F3EC]',
    '개발 전 이력': 'bg-surface text-muted',
    편입: 'bg-primary-100 text-primary-800',
    교육: 'bg-primary-50 text-primary-700',
    사이드프로젝트: 'bg-primary-100 text-primary-800',
    동아리: 'bg-surface text-ink',
    협업: 'bg-surface text-ink',
    스터디: 'bg-surface text-ink',
    공모전: 'bg-primary-50 text-primary-700',
    박람회: 'bg-surface text-muted',
    강연: 'bg-surface text-muted',
    커피챗: 'bg-surface text-muted',
  }

  const experienceData = [
    {
      company: '맥딜리버리 콜센터',
      startDate: '2016-01-01',
      endDate: '2016-07-31',
      description: '전화주문 접수 및 입력원으로 일하며 다양한 고객 문의를 처리. (개발자 전향 이전)',
      tags: ['개발 전 이력'],
    },
    {
      company: '공간정보기술',
      startDate: '2018-09-01',
      endDate: '2018-12-31',
      description:
        '데이터 입력원으로 근무. 이 일을 계기로 개발자 전향을 결심하고 편입을 준비했습니다.',
      tags: ['개발 전 이력'],
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
      tags: ['교육', '스터디'],
    },
    {
      company: '코멘토 > 실제 현업 WEB 개발자와 함께 SW 포트폴리오 제작까지!',
      startDate: '2020-06-10',
      endDate: '2020-07-08',
      description: '현업 개발자 멘토링 직무부트캠프 : 방탈출 서비스 제작.',
      tags: ['교육', '사이드프로젝트'],
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
      description: '데이터 개발 직무 부트캠프 수료.',
      tags: ['교육'],
    },
    {
      company: '딥노이드 : 프론트엔드 개발',
      startDate: '2021-04-12',
      endDate: '2022-08-05',
      description:
        '의료·산업 AI 솔루션 기업. 관세청 불법 복제품 판독 시스템과 공항 보안 검색 판독 시스템의 프런트엔드를 담당했습니다.',
      tags: ['회사'],
    },
    {
      company: '빅데이터 분석 첫걸음 시작하기',
      startDate: '2021-11-10',
      endDate: '2021-12-15',
      description: '국비지원 교육 : 빅데이터 분석 첫걸음 시작하기 (재직 중 수강)',
      tags: ['교육'],
    },
    {
      company: 'python & django로 시작하는 웹 프로그래밍',
      startDate: '2021-11-10',
      endDate: '2022-01-05',
      description: '국비지원 교육 : python & django로 시작하는 웹 프로그래밍 (재직 중 수강)',
      tags: ['교육'],
    },
    {
      company: '스테이폴리오 : 프론트엔드 개발',
      startDate: '2022-08-08',
      endDate: '2024-03-01',
      description:
        '숙박 큐레이션 플랫폼. 프런트엔드로 다국어(일본어) 지원, 무한 스크롤 성능 개선, 웹→앱 전환 UX 개편을 담당했습니다.',
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
      startDate: '2024-05-01',
      endDate: '2025-02-28',
      description:
        '협업형 여행 계획 플랫폼. 2인 팀에서 프런트엔드 전체를 맡아 MVP를 출시했고, 현재도 운영 중입니다.',
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
      endDate: '2024-11-22',
      description: '취업 준비를 위한 스터디 및 커피챗 활동.',
      tags: ['스터디', '커피챗'],
    },
    {
      company: 'AWSKRUG (AWS Korea User Group)',
      startDate: '2025-01-01',
      endDate: '진행 중',
      description: 'AWS 한국 사용자 그룹에서 클라우드·개발 관련 밋업 및 네트워킹 참여.',
      tags: ['스터디', '커피챗'],
    },
    {
      company: "서울 우먼잇츠(IT's)",
      startDate: '2025-01-01',
      endDate: '진행 중',
      description: 'IT 업계 여성 개발자 커뮤니티 활동 및 교류.',
      tags: ['스터디', '커피챗'],
    },
    {
      company: '지슨(GitSN) : 웹 개발',
      startDate: '2025-04-07',
      endDate: '진행 중',
      description:
        'ITS 표준데이터 관리 시스템(SDMS) 개발. 프런트엔드 주력으로 합류해 Django 모델·마이그레이션·쿼리까지 범위를 넓히는 중입니다.',
      tags: ['회사'],
    },
  ]

  return (
    <div className="mt-10">
      <ol className="relative border-l border-line">
        {[...experienceData]
          .sort((a, b) => b.startDate.localeCompare(a.startDate))
          .map((experience, index) => {
            const isJob = experience.tags.includes('회사')
            return (
              <li key={index} className="relative mb-9 pl-7 sm:pl-9">
                <span
                  className={`absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full ring-4 ring-paper ${
                    isJob ? 'bg-clay' : 'bg-line'
                  }`}
                  aria-hidden="true"
                />
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3
                    className={`font-display tracking-tight ${
                      isJob ? 'text-xl font-bold text-ink' : 'text-lg font-bold text-ink/85'
                    }`}
                  >
                    {experience.company}
                  </h3>
                  <span className="measure shrink-0 text-sm text-muted">
                    {experience.startDate} — {experience.endDate}
                  </span>
                </div>
                <p className="mt-2 max-w-2xl text-[15px] leading-7 text-muted">
                  {experience.description}
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {experience.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-medium ${
                        tagColors[tag] || 'bg-surface text-muted'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </li>
            )
          })}
      </ol>
    </div>
  )
}

export default TimeLineComponent
