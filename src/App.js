import logo from './logo.svg';
import './App.css';
// import TaskListComponent from './components/containers/task_list';
import ContactComponent from './components/containers/Contact';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}

        {/* Componente del listado de tareas */}
        {/* <TaskListComponent></TaskListComponent> */}
        
        {/* Componente Contacto */}
        <ContactComponent></ContactComponent>
      </header>
    </div>
  );
}

export default App;
