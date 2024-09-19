import { useContext, useEffect, useMemo, useState } from "react";
import { ExperienceAndProjectsContext } from "../../Experience_And_Projects_Context";

export const SingleProjectFolder = (props) =>
{

    const txtFile = props.txtFile; //The file containing the work object description
    const images = props.images; //the images of the work object

    const {currentProjectOrExperienceObject, setProjectOrExperienceCurrentObject} = useContext(ExperienceAndProjectsContext);//The context to pass the project object to so app can change the main page if folder is clicked

    const [txtFileContent, setFileContent] = useState('');//state to store the .txt file content

    //Use the asynchronous function "fetch" to turn the .txt filepath into the content of that file
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
            return {objectType : "Project", description : txtFileContent, images : images}
        }, [txtFileContent]
    )

   
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