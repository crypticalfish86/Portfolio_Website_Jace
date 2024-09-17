import { useEffect, useMemo, useState } from "react"
import { SingleExperienceFolder } from "./SingleExperienceFolder";

export const ExperienceFolders = () =>
{
    const experienceFilePaths = useMemo( () =>
        {
            return require.context('../../../Assets/All_Prior_Experience', false, /\.(txt|js|json)$/).keys(); //return an array of filepaths (for use in SingleExperienceFolder's)
        }, []
    )

    const [currentExperienceFoldersHTML, setExperienceFoldersHTML] = useState([]);

    useEffect(
        () =>
        {
            const experienceFoldersHTMLArray = [];
            experienceFilePaths.forEach( (filePath) =>
            {
                experienceFoldersHTMLArray.push(<SingleExperienceFolder />);
            }

            )
            setExperienceFoldersHTML(experienceFoldersHTMLArray);
        }, [experienceFilePaths]
    )

    return(
        <div>
            {currentExperienceFoldersHTML}
        </div>
    )
}