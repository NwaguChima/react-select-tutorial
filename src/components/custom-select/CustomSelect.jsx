import React, { useState } from 'react';
import Select from 'react-select';
import fruitOptions from '../../utils/data';
import Option from './Option';
import MultiValueLabel from './MultiValueLabel';

const CustomSelect = ({ error = false }) => {
  const [showStatus, setShowStatus] = useState(null);

  const selectStyles = {
    control: (base, { isFocused, menuIsOpen }) => {
      return {
        ...base,
        borderRadius: '5px',
        boxShadow: '0px 1px 1px rgba(0, 0, 0, 0.1)',
        border: error ? '1px solid #DE3730' : '1px solid #dfe1e6',
      };
    },
    option: (base, state) => {
      return {
        ...base,
        fontSize: '14px',
      };
    },
    placeholder: (base, state) => ({
      ...base,
      color: error ? '#DE3730' : '#9DB3C1',
    }),
    dropdownIndicator: (base) => ({
      ...base,
      color: error ? '#DE3730' : '#7a869a',
    }),
    singleValue: (base) => ({
      ...base,
      color: error ? '#DE3730' : '#7a869a',
    }),
    indicatorSeparator: (base) => ({
      ...base,
      backgroundColor: error ? '#DE3730' : '#7a869a',
    }),
  };

  return (
    <div className="select__wrapper">
      <Select
        options={fruitOptions}
        placeholder="Please select a fruit"
        styles={selectStyles}
        isMulti
        components={{
          Option: (props) => (
            <Option
              showStatus={showStatus}
              setShowStatus={setShowStatus}
              {...props}
            />
          ),
          MultiValueLabel,
          MultiValueRemove: () => null,
        }}
      />
    </div>
  );
};

export default CustomSelect;
