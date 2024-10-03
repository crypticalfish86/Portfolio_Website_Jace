import { useContext, useEffect, useMemo, useState } from "react";
import { ExperienceAndProjectsContext } from "../../Experience_And_Projects_Context";

/*
    This renders the single project folders as well as loads their content into the "ExperienceAndProjects" page to display when one of these components is clicked
*/


export const SingleProjectFolder = (props) =>
{

    
    //Use the asynchronous function "fetch" to turn the .txt filepath into the content of that file
    const txtFile = props.txtFile; //The file containing the work object description
    const images = props.images; //the images of the work object
    const [txtFileContent, setFileContent] = useState('');//state to store the raw .txt file content as a string
    useEffect( () =>
        {
            fetch(txtFile) //read the file
            .then(response => response.text()) //read the file contents as text
            .then(text => setFileContent(text)) //Set the file contents as the state "file content"
            .catch(error => console.log(error)) //if there is an error console log it
        }, [txtFile]
    )
    

    const projectObject = useMemo( () => //this is the project object to be sent up to the parent context allowing us to trigger the page change to this specific project
        {
            return {objectType : "Project",title: getSpecificContentAfterStringMarker("TITLE:"), date: getSpecificContentAfterStringMarker("DATE:"), technologiesUsed: getSpecificContentAfterStringMarker("TECHNOLOGIES_USED:"),  description : getSpecificContentAfterStringMarker("DESCRIPTION:"), images : images}
        }, [txtFileContent]
    )
        function getSpecificContentAfterStringMarker(stringMarker) //this child function returns the specific content after a stringMarker e.g. COMPANY_NAME and before the next stringMarker e.g.JOB_Name
        {
            const fullContent = txtFileContent;
            const startIndex = txtFileContent.indexOf(stringMarker);//returns the index of the start of the stringMarker in the content

            if(startIndex !== -1) //Check to ensure the stringMarker has been found before proceeding
            {
                const entireStringAfterStringMarker = fullContent.slice(startIndex + stringMarker.length)
                const nextStringMarkerInContent = entireStringAfterStringMarker.match(/\b\w*[A-Z]{3,}\w*\b/) //Finds the next word containing more than 3 capital letters in it

                if (nextStringMarkerInContent)
                {
                    return entireStringAfterStringMarker.slice(0, entireStringAfterStringMarker.indexOf(nextStringMarkerInContent[0])).trim() //returns all the content after stringMarker but before next stringMarker with any whitespace trimmed off
                }
                else
                {
                    return entireStringAfterStringMarker;
                }
            }
            else
            {
                return "Error string not found"
            }
        }




    const {currentProjectOrExperienceObject, setProjectOrExperienceCurrentObject} = useContext(ExperienceAndProjectsContext);//The context to pass the project object to so app can change the main page if folder is clicked
    function openProjectPage(event)
    {
        event.preventDefault();
        setProjectOrExperienceCurrentObject(projectObject)
    }

    return(
        <div id="Single_Project_Folder" onClick={(event) => {openProjectPage(event)}}>
            SingleProjectFolder
        </div>
    )
}