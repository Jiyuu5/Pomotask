import { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import PomodoroTimer from "./PomodoroTimer";
import TaskListContainer from "./TaskListContainer";
import CurrentTask from "./CurrentTask";

export default function App() {
  const [currentTaskStart, setCurrentTastStart] = useState(null);
  const [currentTaskEnd, setCurrentTaskEnd] = useState(null);
  const [taskList, setTaskList] = useState([]);

  return (
    <main className="mx-auto h-full lg:max-w-7xl flex flex-col">
      <Header />
      <div id="containerTimer" className="basis-full mt-8">
        <PomodoroTimer />
        <CurrentTask />
        <TaskListContainer />
      </div>
      <Footer />
    </main>
  );
}
