import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import { items } from "./data";
import { options } from './DropdownOptions';

const App = () => {

    const [selected, setSelected] = useState(options[0]);

    return (
        <div>
            <Dropdown  
                selected={selected} 
                options={options}
                onSelectedChange={setSelected}
                />   
            
        {/*<Search />
           <h4 className="ui large header">National records:</h4>
            <Accordion items={items}/>*/}
        </div>
    );
};

export default App;