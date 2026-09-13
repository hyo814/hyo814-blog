# hyo814-blog

임효진의 개발 블로그입니다. https://hyo814-blog.vercel.app

사무보조 아르바이트를 하다 개발을 해 보고 싶어서 컴퓨터정보공학부로 편입했고, 2021년 4월 프런트엔드 개발자로 처음 취업했습니다. 산업 AI 판독 시스템, 숙박 큐레이션 플랫폼을 거쳐 지금은 ITS 표준데이터 관리 시스템을 만들고 있고, React 화면부터 Django 쿼리까지 같이 봅니다.

최근에 쓴 글

- [신청서 항목 모달에서 후보 조회 20회를 2회로 줄였다](https://hyo814-blog.vercel.app/blog/신청서-항목-모달에서-후보-조회-20회를-2회로-줄였다)
- [같은 표준데이터를 두 화면이 198건과 134건으로 세고 있었다](https://hyo814-blog.vercel.app/blog/같은-표준데이터를-두-화면이-198건과-134건으로-세고-있었다)
- [목업 데이터 49개에서 478개로](https://hyo814-blog.vercel.app/blog/목업-데이터-엑셀-시드-49에서-478개-자동화)

경력은 [About](https://hyo814-blog.vercel.app/about), [Timeline](https://hyo814-blog.vercel.app/timeline), [노션 포트폴리오](https://app.notion.com/p/hyo814/Full-Stack-Developer-fafc852db326427793fed95a0387a28a)에 정리해 뒀습니다.

## 실행

Next.js 15, Contentlayer2, Tailwind CSS v3로 만들었습니다.

```bash
yarn install
yarn dev
```

- 글은 `data/blog/`에 MDX로 씁니다. 파일명이 URL이라 공개한 글은 파일명을 바꾸지 않습니다.
- `yarn build`를 돌리면 `app/tag-data.json`이 갱신되니 같이 커밋합니다.
