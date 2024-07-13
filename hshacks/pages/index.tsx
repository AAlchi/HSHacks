import Summary from "./components/summary/Summary";
import FAQ from "./components/faq/FAQ";
import Footer from "./components/global/footer/Footer";
import Header from "./components/global/header/Header";
import Landing from "./components/landing/Landing";
import Schedule from "./components/schedule/Schedule";
import Sponsors from "./components/sponsors/Sponsors";
import Team from "./components/team/Team";

export default function Home() {
  return (
    <>
      <Header />
      <Landing />
      <Summary />
      <Sponsors />
      <Schedule />
      <Team />
      <FAQ />
      <Footer />
    </>
  );
}
