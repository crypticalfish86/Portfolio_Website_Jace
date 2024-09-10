import { SidePageButton } from "./Side_Page/SidePageButton"

export const MainPage = (props) =>
{
    const currentViewedComponentHTML = props.currentViewedComponentHTML
    const setViewedComponentString = props.setViewedComponentString

    return(
        <div id="Main_Page">
            <div id="Zoomed_In_Side_Page_Container"> {/*On Zoom this container becomes visible*/}
                <SidePageButton name={"Home"} setViewedComponentString = {setViewedComponentString}/>
                <SidePageButton name={"Experience"} setViewedComponentString = {setViewedComponentString}/>
                <SidePageButton name={"Projects"} setViewedComponentString = {setViewedComponentString}/>
                <SidePageButton name={"Contacts"} setViewedComponentString = {setViewedComponentString}/>
            </div>
            {currentViewedComponentHTML}
        </div>
    )
}