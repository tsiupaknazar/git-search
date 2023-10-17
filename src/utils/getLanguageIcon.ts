import { IconType } from "react-icons";
import { IoLogoJavascript, IoLogoPython, IoLogoCss3, IoLogoHtml5 } from "react-icons/io5"
import { BiLogoTypescript } from "react-icons/bi"

type LanguageIconMapping = {
    [key: string]: IconType;
};

const languageIcons: LanguageIconMapping = {
    JavaScript: IoLogoJavascript,
    Python: IoLogoPython,
    // ['SCSS', 'CSS']: IoLogoCss3,
    HTML: IoLogoHtml5,
    TypeScript: BiLogoTypescript,
    // Java,
    // CSharp
    // CPlusPlus
    //IoLogoCss3

    // Add more languages and their corresponding icon URLs as needed
};

export function getLanguageIcon(language: string): IconType | undefined {
    return languageIcons[language];
}