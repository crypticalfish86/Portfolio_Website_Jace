import { ProjectFolders } from "./Projects/ProjectFolders"

export const Projects = () =>
{
    return(
        <div id="Whole_Projects_Container_Div">
            <div id="Project_Folders_Container" className='Container_Box'>
                <ProjectFolders />
            </div>
            <div id="Listed_Techs_Container" className='Container_Box'>
            ListedTechsContainer
            </div>
        </div>
    )
}