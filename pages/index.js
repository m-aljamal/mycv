import Navbar from "../src/components/Navbar";
import About from "../src/components/About";
import CV from "../src/components/CV";
import Projects from "../src/components/Projects";
import Main from "../src/components/Main";
export default function Home() {
  return (
    <div className="bg-primary-color">
      <div className="container">
        <div className="flex  gap-5  pt-10">
          <div>
            <Navbar />
          </div>
          <div className="w-full">
            <Main />
            <About />
            <CV />
            <Projects />
          </div>
        </div>
      </div>
    </div>
  );
}
