import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Welcome to Arjun's Website. WIP!
      </h1>
      <p className="mb-4">
        {`Hey! This website isn't done just yet.Keep an eye on it!`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
