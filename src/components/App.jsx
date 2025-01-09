import Footer from "./Footer";
import Header from "./Header";
import PomodoroTimer from "./PomodoroTimer";

export default function App() {
  return (
    <main className="mx-auto h-full lg:max-w-7xl flex flex-col">
      <Header />
      <div id="containerTimer" className="basis-full mt-8">
        <PomodoroTimer />
      </div>
      <Footer />
    </main>
  );
}
