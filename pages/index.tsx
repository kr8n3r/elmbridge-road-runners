import fs from 'fs'
import matter from 'gray-matter'
import renderToString from 'next-mdx-remote/render-to-string'
import Head from 'next/head'
import path from 'path'
import Layout from '../layouts/home'
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

export const getStaticProps = async () => {
  const contentFile = path.join(CONTENT_PATH, 'homepage.mdx')
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

