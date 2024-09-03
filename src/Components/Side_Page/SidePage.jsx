import { SidePageButton } from "./SidePageButton"

export const SidePage = () =>
{
    return(
        <div id="Side_Page_Container" className='Container_Box'>
            <SidePageButton name={"Home"}/>
            <SidePageButton name={"Experience"}/>
            <SidePageButton name={"Projects"}/>
            <SidePageButton name={"Contacts"}/>
        </div>
    )
}