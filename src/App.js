import React from "react";
import Accordion from "./components/Accordion";

const items = [
    {
        title: 'What is React?',
        content: 'Front end js framework.'
    },
    {
        title: 'Why use it?',
        content: 'It is a favorite among engineers.'
    },
    {
        title: 'How to use it?',
        content: 'By creating components'
    }
];

const App = () => {
    return (
        <div>
            <h2>App</h2>
            <Accordion items={items}/>
        </div>
    );
};

export default App;