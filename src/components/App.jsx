import PomodoroTimer from "./PomodoroTimer";

export default function App() {
  return (
    <div className="mx-auto lg:max-w-7xl">
      <main>
        <h1 className="text-5xl text-center">Pomotask</h1>
        <PomodoroTimer />
      </main>
    </div>
  );
}
