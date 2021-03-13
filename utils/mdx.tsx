
import fs from 'fs'
import path from 'path'

export const CONTENT_PATH = path.join(process.cwd(), 'pages/content')
export const contentFilePath = fs
  .readdirSync(CONTENT_PATH)
  .filter((path) => /\.mdx?$/.test(path))