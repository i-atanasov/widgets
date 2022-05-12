import React from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import { items } from "./data";

const App = () => {
    return (
        <div>
             <Search />

            {/*<h4 className="ui large header">National records:</h4>
            <Accordion items={items}/>*/}
        </div>
    );
};

export default App;