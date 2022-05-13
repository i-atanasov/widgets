import React, { useState } from "react";
import Dropdown from "./Dropdown";
import { languages } from "../Languages";

const Translate = () => {
    const [language, setLanguage] = useState(languages[0]);
    const [text, setText] = useState('');

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter text:</label>
                    <input onChange={(e) => {setText(e.target.value); console.log(e.target.value)}}/>
                </div>
            </div>
            <Dropdown label='Select a language' selected={language} onSelectedChange={setLanguage} options={languages}/>
        </div>
    );
};

export default Translate;