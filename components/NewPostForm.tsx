"use client"
import React, { useState } from 'react'
import {router} from "next/client";
export default function NewPostForm() {
	const [title, setTitle] = useState<string>('')
	const [date, setDate] = useState<string>('')
	const [tags, setTags] = useState<string>('')
	const [summary, setSummary] = useState<string>('')
	const [content, setContent] = useState<string>('')
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
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(post)
		})
		if (response.ok) {
			alert('Post saved successfully!')
			router.push("/")
		} else {
			alert('Failed to save post.')
		}
	}
	return (
		<div className="flex justify-center items-center min-h-screen">
			<div className="w-full max-w-4xl p-4 bg-white shadow-lg rounded-lg">
				<form onSubmit={handleSubmit} className="space-y-4">
					<div>
						<label className="block text-gray-700">Title</label>
						<input
							type="text"
							value={title}
							onChange={(e) => setTitle(e.target.value)}
							required
							className="mt-1 p-2 border rounded w-full"
						/>
					</div>
					<div>
						<label className="block text-gray-700">Date</label>
						<input
							type="date"
							value={date}
							onChange={(e) => setDate(e.target.value)}
							required
							className="mt-1 p-2 border rounded w-full"
						/>
					</div>
					<div>
						<label className="block text-gray-700">Tags (comma separated)</label>
						<input
							type="text"
							value={tags}
							onChange={(e) => setTags(e.target.value)}
							required
							className="mt-1 p-2 border rounded w-full"
						/>
					</div>
					<div>
						<label className="block text-gray-700">Summary</label>
						<textarea
							value={summary}
							onChange={(e) => setSummary(e.target.value)}
							required
							className="mt-1 p-2 border rounded w-full"
						/>
					</div>
					<div>
						<label className="block text-gray-700">Content</label>
						<textarea
							value={content}
							onChange={(e) => setContent(e.target.value)}
							required
							className="mt-1 p-2 border rounded w-full"
						/>
					</div>
					<button
						type="submit"
						className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700"
					>
						Save Post
					</button>
				</form>
			</div>
		</div>
	)
}
