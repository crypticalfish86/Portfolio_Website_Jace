import { useEffect, useState } from "react";

export const SingleExperienceFolder = (props) =>
{
    const filepathForTxt = props.filePath;

    const [experienceFileContent, setExperienceFileContent] = useState(""); //"experienceFileContent" should be a string containing all text in the txt file in "filePathForTxt"

    useEffect( () =>
        {
            fetch(filepathForTxt)//read file
            .then(response => response.text()) //read the file contents as text
            .then(text => setExperienceFileContent(text)) //set the contents of the txt file as a string in the usestate hook "experienecFileContent"
            .catch(error => console.log(error))
        }, [filepathForTxt]

    )


    const [currentExperienceObject, setExperienceObject] = useState({CompanyName: "DefaultName"}); //usestate to

    useEffect( () =>
        {
            setExperienceObject(createExperienceObjectFromFileContent(experienceFileContent)) //set the hook to the experience object (function and details below)
        }, [experienceFileContent]

    )

    /*
        This function takes the content of the txt file which should be structured as follows:
            COMPANY_NAME: "Company_Name"
            JOB_NAME: "Job_Name"
            DATE: "Date"
            JOB_DESCRIPTION: "Job_Description"
        
        And turns it into an experienecObject structured:
            {
                CompanyName: "Company_Name",
                JobName: "Job_Name",
                Date: "Date",
                JobDescription: "Job_Description"
            }
        This is for use in the clickable experience page that is to be created using this information
    */
    
    function createExperienceObjectFromFileContent(fileContent)
    {
        /*Get slices of the whole text*/
        const companyName = getSpecificContentAfterStringMarker("COMPANY_NAME:");
        const jobName = getSpecificContentAfterStringMarker("JOB_NAME:")
        const date = getSpecificContentAfterStringMarker("DATE:");
        const jobDescription = getSpecificContentAfterStringMarker("JOB_DESCRIPTION:") 

        /*Create object*/
        const experienceObject = 
            {
                companyName: companyName,
                jobName: jobName,
                date: date,
                jobDescription: jobDescription
            }
        console.log(experienceObject)

        return experienceObject;//return object
    }
        function getSpecificContentAfterStringMarker(stringMarker) //this child function returns the specific content after a stringMarker e.g. COMPANY_NAME and before the next stringMarker e.g.JOB_Name
        {
            const fullContent = experienceFileContent;
            const startIndex = experienceFileContent.indexOf(stringMarker);//returns the index of the start of the stringMarker in the content

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
    

    return(
        <div id="Single_Experience_Folder">
            {currentExperienceObject.companyName}
        </div>
    )
}