import { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import PomodoroTimer from "./PomodoroTimer";
import TaskList from "./TaskList";

export default function App() {
  const [currentTaskStart, setCurrentTastStart] = useState(null);
  const [currentTaskEnd, setCurrentTaskEnd] = useState(null);
  const [currentTaskList, setCurrentTaskList] = useState([]);

  return (
    <main className="mx-auto h-full lg:max-w-7xl flex flex-col">
      <Header />
      <div id="containerTimer" className="basis-full mt-8">
        <PomodoroTimer />
        <TaskList />
      </div>
      <Footer />
    </main>
  );
}
