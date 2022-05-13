import React, { useState } from "react";
import Dropdown from "./Dropdown";
import Convert from "./Convert";
import { languages } from "../Languages";

const Translate = () => {
    const [language, setLanguage] = useState(languages[0]);
    const [text, setText] = useState('');

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter text (only works on http://localhost:3000/)</label>
                    <input onChange={(e) => setText(e.target.value)}/>
                </div>
            </div>
            <Dropdown label='Select a language' selected={language} onSelectedChange={setLanguage} options={languages}/>
            <hr/>
            <h3 className="ui headet">Output</h3>
            <Convert language={language} text={text}/>
        </div>
    );
};

export default Translate;