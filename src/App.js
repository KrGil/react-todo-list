import './App.css';
import { TodoWrapperLocalStorage } from './components/TodoWrapperLocalStorage';
import RouteChangeTrackter from './components/RouteChangeTrackter';


function App() {
  
  RouteChangeTrackter();

  return (
    <div className="App">
      <TodoWrapperLocalStorage />
    </div>
  );
}

export default App;
