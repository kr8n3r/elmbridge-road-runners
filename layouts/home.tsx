import HeroImage from '../components/heroImage'
export default function Layout({ children}) {
  return (
    <>
    <HeroImage />
    <div className="content">{children}</div>
    </>
  )
}