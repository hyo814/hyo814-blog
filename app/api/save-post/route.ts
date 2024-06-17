import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

interface PostData {
  title: string
  date: string
  tags: string[]
  summary: string
  content: string
}

export async function POST(request: NextRequest) {
  // @ts-ignore
  const { title, date, tags, summary, content }: PostData = await request.json()
  const formattedTags = tags.join(', ')
  const fileName = title.toLowerCase().split(' ').join('-') + '.mdx'
  const filePath = path.join(process.cwd(), 'data/blog', fileName)

  const fileContent = `---
title: ${title}
date: '${date}'
tags: [${formattedTags}]
draft: false
summary: '${summary}'
---

${content}
`

  try {
    fs.writeFileSync(filePath, fileContent)
    return NextResponse.json({ message: 'Post saved successfully' }, { status: 200 })
  } catch (err) {
    return NextResponse.json({ error: 'Failed to save post' }, { status: 500 })
  }
}
