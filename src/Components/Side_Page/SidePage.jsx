import { SidePageButton } from "./SidePageButton"

export const SidePage = (props) =>
{
    const setViewedComponentString = props.setViewedComponentString
    return(
        <div id="Side_Page_Container" className='Container_Box'>
            <div id="Side_Page_Button_Container">
                <SidePageButton name={"Home"} setViewedComponentString = {setViewedComponentString}/>
                <SidePageButton name={"Experience"} setViewedComponentString = {setViewedComponentString}/>
                <SidePageButton name={"Projects"} setViewedComponentString = {setViewedComponentString}/>
                <SidePageButton name={"Contacts"} setViewedComponentString = {setViewedComponentString}/>
            </div>
        </div>
    )
}