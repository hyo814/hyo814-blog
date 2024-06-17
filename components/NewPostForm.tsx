'use client'
import React, { useState } from 'react'
import { useRouter } from 'next/router'

export default function NewPostForm() {
  const [title, setTitle] = useState<string>('')
  const [date, setDate] = useState<string>('')
  const [tags, setTags] = useState<string>('')
  const [summary, setSummary] = useState<string>('')
  const [content, setContent] = useState<string>('')
  const router = useRouter()
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const post = {
      title,
      date,
      tags: tags.split(',').map((tag) => tag.trim()),
      summary,
      content,
    }
    const response = await fetch('/api/save-post', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(post),
    })
    if (response.ok) {
      alert('Post saved successfully!')
      await router.push('/')
    } else {
      alert('Failed to save post.')
    }
  }
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-4xl rounded-lg bg-white p-4 shadow-lg">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="title" className="block text-gray-700">
              Title
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="mt-1 w-full rounded border p-2"
            />
          </div>
          <div>
            <label htmlFor="date" className="block text-gray-700">
              Date
            </label>
            <input
              type="date"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
              className="mt-1 w-full rounded border p-2"
            />
          </div>
          <div>
            <label htmlFor="tags" className="block text-gray-700">
              Tags (comma separated)
            </label>
            <input
              type="text"
              id="tags"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              required
              className="mt-1 w-full rounded border p-2"
            />
          </div>
          <div>
            <label htmlFor="summary" className="block text-gray-700">
              Summary
            </label>
            <textarea
              id="summary"
              value={summary}
              onChange={(e) => setSummary(e.target.value)}
              required
              className="mt-1 w-full rounded border p-2"
            />
          </div>
          <div>
            <label htmlFor="content" className="block text-gray-700">
              Content
            </label>
            <textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
              className="mt-1 w-full rounded border p-2"
            />
          </div>
          <button type="submit" className="rounded bg-blue-500 p-2 text-white hover:bg-blue-700">
            Save Post
          </button>
        </form>
      </div>
    </div>
  )
}
