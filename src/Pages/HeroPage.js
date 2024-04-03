
import { Hero,HeroStats,Services,WorkingHours,Professionals,Navigation, Footer } from "../Components"
import HomepageGallery from "../Components/HomepageGallery/HomepageGallery"
export  const HeroPage = () => {
  return (
    <>
      <Navigation />
      <Hero />
       {/* <Professionals /> */}
      <Services />
      <HomepageGallery />
      <HeroStats />
      <WorkingHours /> 
      <Footer />
    </>
  )
}

