# 👩‍💻 Hyo814 — Full-Stack Developer

## 💚 자기소개

안녕하세요, 풀스택 개발자 임효진입니다.
대학교 졸업 후 사무보조 아르바이트를 하다 개발자라는 직업이 궁금해져 컴퓨터정보공학부로 편입했고, 2021년 4월 프런트엔드 개발자로 커리어를 시작했습니다. 재직 합계는 약 4년 반입니다.
산업 AI 판독 시스템, 숙박 큐레이션 플랫폼, ITS 표준데이터 관리 시스템 세 도메인을 거치며 React·Next.js 프런트엔드에서 시작해 지금은 Django 모델·쿼리까지 직접 이어 붙이는 풀스택으로 범위를 넓혔습니다.
개선은 수치로 확인합니다. 메타클래스 목록 쿼리를 300건 기준 [908쿼리·1.6초에서 4쿼리·180ms](https://hyo814-blog.vercel.app/blog/메타클래스-쿼리-최적화-회고)로 줄였고, 목업 시드를 [수작업 49개에서 엑셀 기반 478개 자동 생성](https://hyo814-blog.vercel.app/blog/목업-데이터-엑셀-시드-49에서-478개-자동화)으로 바꿨습니다. 이 블로그의 성과 수치에는 측정 과정을 남긴 개별 글이 근거로 달려 있습니다.
고른 이유와 버린 대안을 같이 남기고, 결정을 뒤집었을 때는 뒤집었다고 적습니다.

## 🔗 링크

- 블로그 [About](https://hyo814-blog.vercel.app/about) · [경력기술서 3편](https://hyo814-blog.vercel.app/tags/경력기술서) · [Timeline](https://hyo814-blog.vercel.app/timeline)
- [노션 포트폴리오](https://app.notion.com/p/hyo814/Full-Stack-Developer-fafc852db326427793fed95a0387a28a)
- [GitHub](https://github.com/hyo814)

## 🛠 이 저장소

Next.js 15 App Router + Contentlayer2 + Tailwind CSS v3 기반 기술 블로그입니다. 글은 `data/blog/`에 MDX로 두고, 파일명이 곧 URL입니다. 이미 공개된 글의 파일명은 바꾸지 않습니다(주소가 깨집니다).

`yarn build`가 태그 집계 `app/tag-data.json`을 다시 만드므로, 글을 추가하면 이 파일도 함께 커밋합니다.

```bash
yarn install
yarn dev     # http://localhost:3000
yarn build
```
