import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import { items } from "./data";
import { options } from './DropdownOptions';

const App = () => {

    const [selected, setSelected] = useState(options[0]);
    const [showDropdown, setShowDropdown] = useState(true);

    return (
        <div>
            <button onClick={() => setShowDropdown(!showDropdown)}>Toggle dropdown</button>

            {showDropdown ?
                <Dropdown  
                selected={selected} 
                options={options}
                onSelectedChange={setSelected}
                /> : null
            }
            
            {/*<Search />
                <h4 className="ui large header">National records:</h4>
            <Accordion items={items}/>*/}
        </div>
    );
};

export default App;