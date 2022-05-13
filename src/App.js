import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Route from "./components/Route";
import Header from "./components/Header";
import { items } from "./data";
import { options } from './DropdownOptions';
import Translate from './components/Translate'

const App = () => {

    const [selected, setSelected] = useState(options[0]);
    const [showDropdown, setShowDropdown] = useState(true);

    return (
        <div>
            <Header />
            <Route path='/'>
                <h4 className="ui small header">National records:</h4>
                <Accordion items={items}/>; 
            </Route>
            <Route path='/list'>
                <Search />;
            </Route>
            <Route path='/dropdown'>
                <button onClick={() => setShowDropdown(!showDropdown)}>Toggle dropdown</button>
                    {showDropdown ?
                        <Dropdown 
                        label='Select a color:' 
                        selected={selected} 
                        options={options}
                        onSelectedChange={setSelected}
                        /> : null
                    }
            </Route>
            <Route path='/translate'>
                <Translate />
            </Route>             
            
        </div>
    );
};


export default App;