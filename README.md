# hyo814-blog

임효진의 개발 블로그입니다. https://hyo814-blog.vercel.app

지금은 표준데이터 관리 시스템을 만들고 있습니다. 화면에 필요한 데이터를 목업으로 먼저 세워 보고, Django API와 쿼리까지 직접 붙입니다. 2021년 4월 프런트엔드로 시작했고, 그 전에는 산업 AI 판독 시스템과 숙박 큐레이션 플랫폼을 만들었습니다.

요즘 쓴 글

- [같은 표준데이터를 두 화면이 198건과 134건으로 세고 있었다](https://hyo814-blog.vercel.app/blog/같은-표준데이터를-두-화면이-198건과-134건으로-세고-있었다)
- [신청서 항목 모달에서 후보 조회 20회를 2회로 줄였다](https://hyo814-blog.vercel.app/blog/신청서-항목-모달에서-후보-조회-20회를-2회로-줄였다)
- [빨갛게 남아 있던 e2e 25건 중 코드 회귀는 1건이었다](https://hyo814-blog.vercel.app/blog/빨갛게-남아-있던-e2e-25건-중-코드-회귀는-1건이었다)

경력은 [About](https://hyo814-blog.vercel.app/about)과 [Timeline](https://hyo814-blog.vercel.app/timeline)에, 프로젝트별 정리는 [노션 포트폴리오](https://app.notion.com/p/hyo814/Full-Stack-Developer-fafc852db326427793fed95a0387a28a)에 있습니다.

## 실행

Next.js 15, Contentlayer2, Tailwind CSS v3로 만들었습니다.

```bash
yarn install
yarn dev
```

- 글은 `data/blog/`에 MDX로 씁니다. 파일명이 URL이라 공개한 글은 파일명을 바꾸지 않습니다.
- `yarn build`를 돌리면 `app/tag-data.json`이 갱신되니 같이 커밋합니다.
