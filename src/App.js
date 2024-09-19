import { useState, useEffect } from 'react';
import './App.css';
import { MainPage } from './Components/Main_Page';
import { SidePage } from './Components/Side_Page/SidePage';
import { Home } from './Components/Main_Page/Home';
import { Experience } from './Components/Main_Page/Experience'
import { Projects } from './Components/Main_Page/Projects'
import { Contacts } from './Components/Main_Page/Contacts'
import { ExperienceAndProjectsContext } from './Components/Experience_And_Projects_Context';

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
  

  const [currentProjectOrExperienceObject, setProjectOrExperienceCurrentObject] = useState({objectType:"Default"}) //hook to be fed into create context

  //Effect occurs when someone clicks a project or experience folder (and generates a new object)
  useEffect( () =>
  {
    console.log(currentProjectOrExperienceObject)
  }, [currentProjectOrExperienceObject]

  )


  return (
    <div className="App">
      <ExperienceAndProjectsContext.Provider value={{currentProjectOrExperienceObject, setProjectOrExperienceCurrentObject}}>
        <SidePage setViewedComponentString= {setCurrentViewedComponentString}/>
        <MainPage setViewedComponentString={setCurrentViewedComponentString} currentViewedComponentHTML={currentViewedComponentHTML}/>
      </ExperienceAndProjectsContext.Provider>
    </div>
  );
}

export default App;
