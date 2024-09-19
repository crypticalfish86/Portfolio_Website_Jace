/*This div should display with the content of whatever is in the Experience_And_Projects_Context*/

import { useEffect, useState } from "react";

export const ExperienceAndProjectsPage = (props) =>
{
    const objectToDisplay = props.objectToDisplay;

    const [currentDivHTML, setCurrentDivHTML] = useState(<div>Experience And Projects Page</div>)
    
    useEffect( () =>
        {
            if(objectToDisplay.objectType === "Experience")
            {
                setCurrentDivHTML(<div>Experience Page</div>)
            }
            else if(objectToDisplay.objectType === "Project")
            {
                setCurrentDivHTML(<div>Projects Page</div>)
            }
        }, [objectToDisplay]
    )

    return(
        <div id="Whole_Experience_And_Projects_Page_Container">
                {currentDivHTML}
        </div>
    )
}