# hyo814-blog

임효진의 개발 블로그입니다. https://hyo814-blog.vercel.app

## 실행

Next.js 15, Contentlayer2, Tailwind CSS v3로 만들었습니다.

```bash
yarn install
yarn dev
```

- 글은 `data/blog/`에 MDX로 씁니다. 파일명이 URL이라 공개한 글은 파일명을 바꾸지 않습니다.
- `yarn build`를 돌리면 `app/tag-data.json`이 갱신되니 같이 커밋합니다.
