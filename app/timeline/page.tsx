import React from 'react'
import TimeLineComponent from '@/components/TimeLineComponent'

const TimelinePage = () => {
  return (
    <div className="mx-auto max-w-4xl p-6">
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Frontend TimeLine
          </h1>
        </div>
      </div>
      <br />
      <h1 className="mb-6 text-center text-3xl font-bold">비전공자에서 전공자로, 나의 성장 기록</h1>
      <br />
      <p className="mb-12 text-center text-lg text-gray-600">
        비개발 경험부터 사이드 프로젝트, 그리고 개발자로서의 다양한 이력까지,
        <br /> 저의 성장 과정을 시간 순으로 정리했습니다.
      </p>
      <TimeLineComponent />
    </div>
  )
}

export default TimelinePage
