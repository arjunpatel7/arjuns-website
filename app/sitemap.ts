import { getBlogPosts } from './blog/utils'

export const baseUrl = 'https://portfolio-blog-starter.vercel.app'

export default async function sitemap() {
  const blogs = await getBlogPosts()

  const routes = ['', '/blog', '/portfolio', '/resume'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  const posts = blogs.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
  }))

  return [...routes, ...posts]
}
