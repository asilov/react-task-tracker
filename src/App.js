import { useState } from "react";
import Header from "./components/Header";
import Tasks from './components/Tasks'

function App() {
    const [tasks, setTasks] = useState([
			{
				id: 1,
				text: 'Doctors App',
				day: 'Feb 5th at 2:30px',
				reminder: true,
			},
			{
				id: 2,
				text: 'Go shopping',
				day: 'March 5th at 2:30px',
				reminder: true,
			},
			{
				id: 3,
				text: 'Do homework',
				day: 'Apr 5th at 2:30px',
				reminder: true,
			},
		])
  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;
