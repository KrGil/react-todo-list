import './App.css';
import { TodoWrapper } from './components/TodoWrapper';
import RouteChangeTrackter from './components/RouteChangeTrackter';


function App() {
  
  RouteChangeTrackter();

  return (
    <div className="App">
      <TodoWrapper />
    </div>
  );
}

export default App;
