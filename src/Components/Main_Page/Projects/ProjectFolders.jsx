import { useEffect, useMemo, useState } from "react";
import { SingleProjectFolder } from "./SingleProjectFolder";

// Import text file synchronously
function importTextFile(filePath) {
    try {
        // Check the path and import the file
        const textModule = require(`../../../Assets/All_Prior_Work/${filePath}`);
        console.log(`Content imported from ${filePath}:`, textModule.default); // Debugging log
        return textModule.default;
    } catch (error) {
        console.error(`Error importing text file: ${filePath}`, error);
        return "";
    }
}

export const ProjectFolders = () => {
    function importAllWorkObjects(context) {
        let allFilesInAllFoldersAtSource = context.keys();
        let sortedFilesInAllFoldersAtSource = allFilesInAllFoldersAtSource.sort();

        const arrayOfUnprocessedWorkObjectArrays = [];
        let i = 0;
        while (i < sortedFilesInAllFoldersAtSource.length) {
            const singleArrayOfPendingWorkObject = [];
            const currentWorkObjectNumericalCode = sortedFilesInAllFoldersAtSource[i].slice(2, 4);
            while (i < sortedFilesInAllFoldersAtSource.length && sortedFilesInAllFoldersAtSource[i].slice(2, 4) === currentWorkObjectNumericalCode) {
                singleArrayOfPendingWorkObject.push(sortedFilesInAllFoldersAtSource[i]);
                i++;
            }

            arrayOfUnprocessedWorkObjectArrays.push(singleArrayOfPendingWorkObject);
        }

        const arrayOfWorkObjects = [];
        for (let i = 0; i < arrayOfUnprocessedWorkObjectArrays.length; i++) {
            let singularWorkObject = { txtDescription: "", images: [] };
            for (let j = 0; j < arrayOfUnprocessedWorkObjectArrays[i].length; j++) {
                if (arrayOfUnprocessedWorkObjectArrays[i][j].includes(".txt")) {
                    const filePath = arrayOfUnprocessedWorkObjectArrays[i][j].replace('./', '');
                    const txtContent = importTextFile(filePath);
                    singularWorkObject.txtDescription = txtContent;
                } else {
                    singularWorkObject.images.push(context(arrayOfUnprocessedWorkObjectArrays[i][j]));
                }
            }
            arrayOfWorkObjects.push(singularWorkObject);
        }

        return arrayOfWorkObjects;
    }

    const workObjects = useMemo(() => {
        return importAllWorkObjects(require.context('../../../Assets/All_Prior_Work', true, /\.(txt|jpe?g|png)$/));
    }, []);

    const [currentWorkObjectHTML, setWorkObjectHTML] = useState(<div>Project Screen: Empty projects</div>);

    useEffect(() => {
        const workObjectHTML = workObjects.map((workObject, index) => (
            <SingleProjectFolder key={index} images={workObject.images} txtDescription={workObject.txtDescription} />
        ));

        setWorkObjectHTML(workObjectHTML);
    }, [workObjects]);

    return (
        <div id="Project_Folders">
            {currentWorkObjectHTML}
        </div>
    );
};