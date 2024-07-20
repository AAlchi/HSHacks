import Summary from "./components//homepage_component/summary/Summary";
import FAQ from "./components/homepage_component/faq/FAQ";
import Footer from "./components/global/footer/Footer";
import Header from "./components/global/header/Header";
import Landing from "./components/homepage_component/landing/Landing";
import Schedule from "./components/homepage_component/schedule/Schedule"; 
import Team from "./components/homepage_component/team/Team"; 
import Sponsors from "./components/homepage_component/sponsors/Sponsors";

export default function Home() {
  return (
    <>
      <Header />
      <Landing />
      <Summary />
      <Sponsors />
      {/* <Schedule /> */}
      <Team />
      <FAQ />
      <Footer />
    </>
  );
}
