import { useEffect, useState } from "react";

export const SingleProjectFolder = (props) =>
{
    const txtFile = props.txtFile; //The file containing the work object description
    const images = props.images; //the images of the work object

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
    
    return(
        <div id="Single_Project_Folder">
            SingleProjectFolder
        </div>
    )
}