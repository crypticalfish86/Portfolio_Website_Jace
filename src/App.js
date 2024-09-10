import { useState, useEffect } from 'react';
import './App.css';
import { MainPage } from './Components/Main_Page';
import { SidePage } from './Components/Side_Page/SidePage';
import { Home } from './Components/Main_Page/Home';
import { Experience } from './Components/Main_Page/Experience'
import { Projects } from './Components/Main_Page/Projects'
import { Contacts } from './Components/Main_Page/Contacts'

function App() {

  //Primitive string to pass down to children (prevents undefined component being rendered)
  const [currentViewedComponentString, setCurrentViewedComponentString] = useState("Home")
  //
  const [currentViewedComponentHTML, setCurrentViewedComponentHTML] = useState(<Home />)

  /*When a child sidePageButton changes currentViewed String update the rendered main page component*/
  useEffect(
    () =>
    {
      switch(currentViewedComponentString)
      {
        case "Home":
          setCurrentViewedComponentHTML(<Home />);
          break;
        case "Experience":
          setCurrentViewedComponentHTML(<Experience />);
          break;
        case "Projects":
          setCurrentViewedComponentHTML(<Projects />);
          break;
        case "Contacts":
          setCurrentViewedComponentHTML(<Contacts />);
          break;
        default:
          setCurrentViewedComponentHTML(<Home />)
          break;
      }
    }, [currentViewedComponentString]
  )
  

  return (
    <div className="App">
      <SidePage setViewedComponentString= {setCurrentViewedComponentString}/>
      <MainPage setViewedComponentString={setCurrentViewedComponentString} currentViewedComponentHTML={currentViewedComponentHTML}/>
    </div>
  );
}

export default App;
