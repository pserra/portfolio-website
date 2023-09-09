import { sql } from "@vercel/postgres";
import matter from 'gray-matter'

export async function getPostSlugs() {
  const { rows } = await sql`SELECT slug, created FROM post`;
  console.log(rows)
  return rows
}

export async function getRemotePost({
  params
} : {
  params: { slug: string }
}) {
  const { rows } = await sql`SELECT * FROM post WHERE slug=${params.slug}`;
  console.log(rows)
  return rows[0]
}

export async function getPostBySlug(slug: string, fields: string[] = []) {
  const realSlug = slug;
  const fileContents = await getRemotePost({params: {slug: realSlug}});
  const { data, content } = matter(fileContents.body)

  type Items = {
    [key: string]: string
  }

  const items: Items = {}

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug
    }
    if (field === 'content') {
      items[field] = content
    }

    if (typeof data[field] !== 'undefined') {
      items[field] = data[field]
    }
  })

  return items
}

export async function getAllPosts(fields: string[] = []) {
  const slugs = await getPostSlugs();
  console.log("THIS", slugs)
  let posts = []
  for(let slug of slugs) {
    const post = await getPostBySlug(slug.slug, fields)
    posts.push(post)
  }
  return posts
}
