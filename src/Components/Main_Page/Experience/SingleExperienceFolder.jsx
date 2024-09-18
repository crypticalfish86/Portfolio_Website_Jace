import { useEffect, useState } from "react";

export const SingleExperienceFolder = (props) =>
{
    const filepathForTxt = props.filePath;

    const [experienceFileContent, setExperienceFileContent] = useState("");

    useEffect( () =>
        {
            fetch(filepathForTxt)//read file
            .then(response => response.text()) //read the file contents as text
            .then(text => setExperienceFileContent(text)) //set the contents of the txt file as a string in the usestate hook "experienecFileContent"
            .catch(error => console.log(error))
        }, [filepathForTxt]

    )

    return(
        <div>
            Experience Folder
        </div>
    )
}