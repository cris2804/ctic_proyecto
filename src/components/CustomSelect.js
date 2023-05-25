import React, { useState } from "react";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

const CustomSelect = ({ options, id }) => {
  const [selectedOption, setSelectedOption] = useState(id);
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="custom-select">
      <div className="selected-option" onClick={() => setIsOpen(!isOpen)}>
        <div>{selectedOption}</div>
        {isOpen ? <ArrowDropUpIcon/>:<ArrowDropDownIcon/>}
      </div>
      {isOpen && (
        <div className="options">
          {options.map((option) => (
            <a key={option} onClick={() => handleOptionClick(option)} href={`/calidad-del-aire-interiores-ctic?id=${option}`}>
              {option}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomSelect;
