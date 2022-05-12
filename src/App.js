import React from "react";
import Accordion from "./components/Accordion";
import { items } from "./data";

const App = () => {
    return (
        <div>
            <h4 className="ui large header">National records:</h4>
            <Accordion items={items}/>
        </div>
    );
};

export default App;