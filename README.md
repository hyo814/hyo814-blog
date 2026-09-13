# Hyo814 — Full-Stack Developer

## 자기소개

풀스택 개발자 임효진입니다.

대학 졸업 후 사무보조 아르바이트를 하다가 개발이 궁금해져 컴퓨터정보공학부로 편입했습니다. 2021년 4월 프런트엔드 개발자로 일을 시작했고, 재직 기간을 합치면 4년 반쯤 됩니다.

산업 AI 판독 시스템, 숙박 큐레이션 플랫폼, ITS 표준데이터 관리 시스템을 만들었습니다. 처음엔 React·Next.js 화면을 맡았고, 요즘은 Django 모델과 쿼리도 직접 고칩니다.

블로그에 과정을 적어 둔 작업 몇 가지:

- 신청서 항목 모달 후보 조회 [20회 → 2회](https://hyo814-blog.vercel.app/blog/신청서-항목-모달에서-후보-조회-20회를-2회로-줄였다)
- 표준데이터 카드 목록 쿼리 [39개 → 19개](https://hyo814-blog.vercel.app/blog/같은-표준데이터를-두-화면이-198건과-134건으로-세고-있었다)
- 목업 시드 [수작업 49개 → 엑셀 기반 478개 자동 생성](https://hyo814-blog.vercel.app/blog/목업-데이터-엑셀-시드-49에서-478개-자동화)

## 링크

- 블로그 [About](https://hyo814-blog.vercel.app/about) · [경력기술서 3편](https://hyo814-blog.vercel.app/tags/경력기술서) · [Timeline](https://hyo814-blog.vercel.app/timeline)
- [노션 포트폴리오](https://app.notion.com/p/hyo814/Full-Stack-Developer-fafc852db326427793fed95a0387a28a)
- [GitHub](https://github.com/hyo814)

## 이 저장소

Next.js 15 App Router + Contentlayer2 + Tailwind CSS v3 기반 기술 블로그입니다. 글은 `data/blog/`에 MDX로 두고, 파일명이 곧 URL입니다. 이미 공개된 글의 파일명은 바꾸지 않습니다(주소가 깨집니다).

`yarn build`가 태그 집계 `app/tag-data.json`을 다시 만드므로, 글을 추가하면 이 파일도 함께 커밋합니다.

```bash
yarn install
yarn dev     # http://localhost:3000
yarn build
```
