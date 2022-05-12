import React, { useState } from "react";

const Dropdown = ({ options, selected, onSelectedChange }) => {
    const renderedOption = options.map((option) => {
        
        return (
            <div 
                key={option.value} 
                className='item'
                onClick={() => onSelectedChange(option)}
            >
                {option.label}
            </div>
        );
    });

    return (
        <div className="ui form">
            <div className="field">
                <label className="label">Select color:</label>
                <div className="ui selection dropdown visible active">
                    <i className="dropdown icon" />
                    <div className="text">
                        {selected.label}
                    </div>
                    <div className="menu visible transition">
                        {renderedOption}
                    </div>
                </div>
            </div>
        </div>
        );
};

export default Dropdown;