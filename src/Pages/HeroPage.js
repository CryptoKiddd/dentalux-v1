
import { Hero,HeroStats,Services,WorkingHours,Professionals,Navigation, Footer } from "../Components"
export  const HeroPage = () => {
  return (
    <>
      <Navigation />
      <Hero />
       {/* <Professionals /> */}
      <Services />
      <HeroStats />
      <WorkingHours /> 
      <Footer />
    </>
  )
}

