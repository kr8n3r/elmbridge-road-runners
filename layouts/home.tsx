import HeroImage from '../components/heroImage'
import Head from 'next/head'
import { clientName } from '../utils/config'

export default function Layout({ children}) {
  return (
    <>
    <Head>
      <title>{clientName}</title>
    </Head>
    <HeroImage />
    <div className="content">{children}</div>
    </>
  )
}