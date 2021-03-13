import fs from 'fs'
import matter from 'gray-matter'
import renderToString from 'next-mdx-remote/render-to-string'
import Head from 'next/head'
import path from 'path'
import Layout from '../layouts/content'
import { contentFilePath, CONTENT_PATH } from '../utils/mdx'

const components = {
  Head,
}

export default function Page({ source, frontMatter }) {
  return (
    <Layout>
      <h1>{frontMatter.title}</h1>
      <div
        dangerouslySetInnerHTML={{ __html: source.renderedOutput}}
      />
    </Layout>
  )
}

export const getStaticProps = async ({ params }) => {
  const contentFile = path.join(CONTENT_PATH, `${params.slug}.mdx`)
  const source = fs.readFileSync(contentFile)

  const { content, data } = matter(source)

  const mdxSource = await renderToString(content, {
    components,
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
    scope: data,
  })

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
    },
  }
}

export const getStaticPaths = async () => {
  const paths = contentFilePath
    // Remove file extensions for page paths
    .map((path) => path.replace(/\.mdx?$/, ''))
    .filter((path) => !path.includes('homepage'))
    // Map the path into the static paths object required by Next.js
    .map((slug) => ({ params: { slug } }))

  return {
    paths,
    fallback: false,
  }
}
