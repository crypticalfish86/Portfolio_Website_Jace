/*
    This div should display with the content of whatever is in the Experience_And_Projects_Context
    
    ExperienceObject looks like this:
           const experienceObject = 
            {
                objectType: "Experience",//experience objects ALWAYS have this type to differentiate from project/work objects
                companyName: companyName,
                jobName: jobName,
                date: date,
                jobDescription: jobDescription
            }
    
    ProjectObjects look like this (for now, this is subject to change):

    {objectType : "Project", description : txtFileContent, images : images}
*/

import { useEffect, useState } from "react";

export const ExperienceAndProjectsPage = (props) =>
{
    const objectToDisplay = props.objectToDisplay;

    const [currentDivHTML, setCurrentDivHTML] = useState(<div>Experience And Projects Page</div>)
    
    /*If the Object received has the object type "Experience" format html to display an experience page, otherwise format page to look like a projects page*/
    useEffect( () =>
        {
            if(objectToDisplay.objectType === "Experience")
            {
                setCurrentDivHTML(
                    <div id="Experience_Page">
                        <div id="Experience_Title">
                            <div id="Experience_Company_Name">{objectToDisplay.companyName}</div>
                            <div id="Experience_Date">{objectToDisplay.date}</div>
                        </div>
                        <div id="Experience_Information">
                            <div id="Experience_Job_Title">{objectToDisplay.jobName}</div>
                            <div id="Experience_Description">{objectToDisplay.jobDescription}</div>
                        </div>
                    </div>
                )
            }
            else if(objectToDisplay.objectType === "Project")
            {
                setCurrentDivHTML(//note it uses the same divs as experience for format but the div ids are worded just for experience, update this when you have time (not urgent)
                    <div>
                        <div id="Experience_Title">
                            <div id="Experience_Company_Name">{objectToDisplay.title}</div>
                            <div id="Experience_Date">{objectToDisplay.date}</div>
                        </div>
                        <div id="Experience_Information">
                            <div id="Experience_Description">{objectToDisplay.description}</div>
                            <div id="Experience_Job_Title">TechnologiesUsed: {objectToDisplay.technologiesUsed}</div>
                        </div>
                    </div>

                )
            }
        }, [objectToDisplay]
    )

    return(
        <div id="Whole_Experience_And_Projects_Page_Container" className="Container_Box">
                {currentDivHTML}
        </div>
    )
}