import { useEffect, useState } from "react"
import { SidePageButton } from "./Side_Page/SidePageButton"
import { Projects } from "./Main_Page/Projects";

export const MainPage = () =>
{

    const [currentMainPageVariationName, setMainPageVariationName] = useState("Projects");
    const [currentMainPageVariationHTML, setMainPageVariationHTML] = useState(<div>Error, main page failed to load</div>);

    function changeMainPageVariationName(pageName)
    {
        switch(pageName)
        {
            case "Home":
            case "Experience":
            case "Projects":
            case "Contacts":
                setMainPageVariationName(pageName);
                break;
            default:
                setMainPageVariationName("Home")
                break;
        }
    }

    /*Temp set up of function until other pages are created*/
    function changeMainPageVariationHTML(currentPageName)
    {
        setMainPageVariationHTML(<Projects />)
    }
    useEffect(() => {changeMainPageVariationHTML("Projects")}, [])


    return(
        <div id="Main_Page">
            <div id="Zoomed_In_Side_Page_Container"> {/*On Zoom this container becomes visible*/}
                <SidePageButton name={"Home"}/>
                <SidePageButton name={"Experience"}/>
                <SidePageButton name={"Projects"}/>
                <SidePageButton name={"Contacts"}/>
            </div>
            {currentMainPageVariationHTML}
        </div>
    )
}