import { useEffect, useMemo, useState } from "react";
import { SingleExperienceFolder } from "./SingleExperienceFolder";

export const ExperienceFolders = () => {
    
    
    const experienceFilePaths = useMemo(() => {
        const context = require.context('../../../Assets/All_Prior_Experience', false, /\.(txt|js|json)$/); // Get file paths from require.context
        return context.keys().map(context); // Map the keys to turn into static resolved URLS for SingleExperienceFolder to fetch the content for (NOTE MAPPING THE CONTEXT IS ESSENTIAL TO CREATE static/media URLS)
    }, []);

    const [currentExperienceFoldersHTML, setExperienceFoldersHTML] = useState([]); //The HTML contained by this whole component (variable depending on experience filepaths)

    useEffect(() => {
        const experienceFoldersHTMLArray = [];
        experienceFilePaths.forEach((filePath) => {
            experienceFoldersHTMLArray.push(<SingleExperienceFolder key={filePath} filePath={filePath} />);
        });
        setExperienceFoldersHTML(experienceFoldersHTMLArray);
    }, [experienceFilePaths]);

    return (
        <div id="Experience_Folders">
            {currentExperienceFoldersHTML}
        </div>
    );
};