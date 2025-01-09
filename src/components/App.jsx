import Footer from "./Footer";
import Header from "./Header";
import PomodoroTimer from "./PomodoroTimer";

export default function App() {
  return (
    <main className="mx-auto lg:max-w-7xl">
      <Header />
      <PomodoroTimer />
      <Footer />
    </main>
  );
}
