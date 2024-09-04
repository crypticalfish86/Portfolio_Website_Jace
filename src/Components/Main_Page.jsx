import { useEffect, useState } from "react"
import { SidePageButton } from "./Side_Page/SidePageButton"
import { Projects } from "./Main_Page/Projects";
import { Home } from "./Main_Page/Home";

export const MainPage = () =>
{
    const [currentMainPageVariationHTML, setMainPageVariationHTML] = useState(<div>Error, main page failed to load</div>);

    

    /*Temp set up of function until other pages are created*/
    function changeMainPageVariationHTML(currentPageName)
    {
        setMainPageVariationHTML(<Home />)
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