import React from 'react'
import TimeLineComponent from '@/components/TimeLineComponent'

const TimelinePage = () => {
  return (
    <div className="pt-6">
      <h1 className="font-display text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl">
        Timeline
      </h1>
      <p className="mt-4 max-w-2xl text-base leading-7 text-muted">
        2019년 컴퓨터정보공학부 편입으로 방향을 틀었고,{' '}
        <strong className="font-medium text-ink">2021년 4월부터 개발자로 일하고 있습니다.</strong>{' '}
        지금이 세 번째 회사입니다.
      </p>
      <p className="mt-3 max-w-2xl text-sm leading-6 text-muted">
        2024년 3월 ~ 2025년 4월은 이직 준비 기간으로, 2인 팀 사이드 프로젝트 TripTune의 MVP를 만들어
        출시했습니다. 그 앞의 항목들은 편입 이전의 이력과 학부 시절 활동입니다.
      </p>
      <TimeLineComponent />
    </div>
  )
}

export default TimelinePage
