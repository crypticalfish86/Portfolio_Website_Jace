import { createContext } from "react";

export const ExperienceAndProjectsContext = createContext();

/*
    create context allows us to bypass prop drilling (Which for some reason was causing issues when trying to pass in a non primitive value anyway)
    allowing all of our components (specifically projects and experience comopnents) to access a useState hook used in App
*/ 