import dynamic from 'next/dynamic'

const NewPostForm = dynamic(() => import('@/components/NewPostForm'), { ssr: false })

export default function NewPostPage() {
  return (
    <>
      <h1>Create a New Post</h1>
      <NewPostForm />
    </>
  )
}
