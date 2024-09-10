import { SidePageButton } from "./SidePageButton"

export const SidePage = () =>
{
    return(
        <div id="Side_Page_Container" className='Container_Box'>
            <div id="Side_Page_Button_Container">
                <SidePageButton name={"Home"}/>
                <SidePageButton name={"Experience"}/>
                <SidePageButton name={"Projects"}/>
                <SidePageButton name={"Contacts"}/>
            </div>
        </div>
    )
}