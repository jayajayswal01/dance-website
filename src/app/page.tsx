import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "../components/navbar/navbar";
import Hero from "../components/hero/hero";
import Classes from "../components/classes/classes";
import Schedule from "../components/schedule/schedule";
import Instructors from "../components/instructors/instructors";
import About from "../components/about/about";
import Contact from "../components/contact/contact";
import Footer from "../components/footer/footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Classes />
      <Schedule />
      <Instructors />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
