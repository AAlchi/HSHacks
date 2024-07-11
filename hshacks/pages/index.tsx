import Summary from "./about/summary/Summary";
import FAQ from "./faq/FAQ";
import Footer from "./global/footer/Footer";
import Header from "./global/header/Header";
import Landing from "./landing/Landing";
import Sponsors from "./sponsors/Sponsors";
import Team from "./team/Team";

export default function Home() {
  return (
    <>
      <Header />
      <Landing />
      <Summary />
      <Sponsors />
      <Team />
      <FAQ />
      <Footer />
    </>
  );
}
