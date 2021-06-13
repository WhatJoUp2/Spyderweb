import { useRef, useState } from "react";
import "./App.css";

const db: PoI[] = require("./db.json");

enum Allegiances {
    HERO = "Hero",
    VILLAIN = "Villain",
    NEUTRAL = "Neutral",
}

interface PoI {
    name?: string;
    alias?: string;
    allegiance: Allegiances;
    threatClass: string;
    organization: string;
    appearance: string;
    personality: string;
    powers: string;
    achievements: string;
    notes?: string;
}

function App() {
    const [value, setValue] = useState(
        `Hello! Welcome to the Spyderweb! Currently we have [${db.length}] People of Interest (PoI) in our database. What is your query?` +
            `${
                Math.random() * 100 < 5 ? `\nWARNING: Found ${Math.round(Math.random() * 19000 + 1000)} rule 34 drawings of ALLyss, recomended purging.` : ""
            }\n> `
    );
    const ref = useRef<HTMLTextAreaElement | null>(null);

    const parseName = (poi: PoI) => {
        if (poi.name && poi.alias) return `${poi.alias} (${poi.name})`;
        return (poi.name ? poi.name : poi.alias) || "";
    };

    const handleCommand = (command: string) => {
        if (command.length === 2) {
            setValue(value + "\n> ");
            return;
        }
        const commandName = command.slice(2).split(" ")[0].toLowerCase();
        const commandArg = command.slice(3 + commandName.length);

        switch (commandName) {
            case "info":
                const poi = db.find((p): boolean => {
                    if (p.name && p.name.toLowerCase() === commandArg.toLowerCase()) return true;
                    if (p.alias && p.alias.toLowerCase() === commandArg.toLowerCase()) return true;
                    return false;
                });
                if (poi)
                    setValue(
                        value +
                            `\n\nName: ${poi.name || "Unknown"}` +
                            `\nAlias: ${poi.alias || "N/A"}` +
                            `\nAllegiance: ${poi.allegiance}` +
                            `\nThreat Class: ${poi.threatClass}` +
                            `\nOrganization: ${poi.organization}` +
                            `\n\nAppearance: ${poi.appearance}` +
                            `\n\nPersonality: ${poi.personality}` +
                            `\n\nPowers: ${poi.powers}` +
                            `\n\nAchievements: ${poi.achievements}` +
                            `\n\nAdditional Notes: ${poi.notes}\n\n> `
                    );
                else setValue(value + "\n\n" + commandArg + " not found on the database.\n\n> ");
                break;
            case "list":
                setValue(
                    value +
                        db
                            .filter((poi) => poi.allegiance === Allegiances.HERO)
                            .sort((a, b) => (parseName(a) > parseName(b) ? 1 : -1))
                            .reduce<string>((ret, poi) => `${ret} |${parseName(poi)}\n`, "\n\nHeroes\n") +
                        db
                            .filter((poi) => poi.allegiance === Allegiances.VILLAIN)
                            .sort((a, b) => (parseName(a) > parseName(b) ? 1 : -1))
                            .reduce<string>((ret, poi) => `${ret} |${parseName(poi)}\n`, "\nVillains\n") +
                        db
                            .filter((poi) => poi.allegiance === Allegiances.NEUTRAL)
                            .sort((a, b) => (parseName(a) > parseName(b) ? 1 : -1))
                            .reduce<string>((ret, poi) => `${ret} |${parseName(poi)}\n`, "\nNeutrals\n") +
                        "\n> "
                );
                break;
            case "help":
                setValue(
                    value + "\n\nclear - Cleans the terminal.\ninfo [PoI name] - Prints info of the PoI.\nlist - Shows a list of the PoI in the database\n\n> "
                );
                break;
            case "clear":
                setValue("> ");
                break;
            default:
                setValue(value + "\nError! Command not recognized, please type 'help'.\n> ");
        }
    };

    const handleChangeCapture = (ev: React.KeyboardEvent<HTMLTextAreaElement>) => {
        moveCursorToEnd();
        const newChar = ev.key; //ev.currentTarget.value.slice(-1);
        console.log(newChar);
        switch (newChar) {
            //if enter was pressed
            case "Enter":
                handleCommand(value.split("\n").pop() || "");
                break;
            case "Backspace":
                if (ev.currentTarget.value.endsWith("\n> ")) break;
                else setValue(value.slice(0, -1));
                break;
            case " ":
                if (!value.endsWith("\n> ")) setValue(value + " ");
                break;
            //writes whatever
            default:
                if (newChar.length === 1) setValue(value + newChar);
                else ev.stopPropagation();
        }
    };

    const moveCursorToEnd = () => {
        if (ref) ref.current?.focus();
    };

    return (
        <textarea ref={ref} autoFocus spellCheck={false} className='console' value={value} onKeyDown={handleChangeCapture} onClick={moveCursorToEnd}></textarea>
    );
}

export default App;
