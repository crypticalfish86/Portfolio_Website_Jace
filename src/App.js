import './App.css';
import { MainPage } from './Components/Main_Page';
import { SidePage } from './Components/Side_Page/SidePage';

function App() {
  return (
    <div className="App">
      <SidePage />
      <MainPage />
    </div>
  );
}

export default App;
