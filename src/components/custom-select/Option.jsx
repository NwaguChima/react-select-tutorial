import React from 'react';
import { components } from 'react-select';

const Option = ({
  showStatus,
  setShowStatus,
  value,
  innerProps,
  data,
  children,
  selectOption,
  ...props
}) => {
  console.log('props', showStatus);

  const handleClick = (event) => {
    event.preventDefault();
    event.stopPropagation();
  };

  const handleShowStatus = () => {
    if (value === showStatus) {
      setShowStatus(null);
    } else {
      setShowStatus(value);
    }
  };

  return (
    <components.Option
      {...props}
      innerProps={{ ...innerProps, onClick: handleClick }}
    >
      <div onClick={handleShowStatus} className="option__wrapper">
        <div>{children}</div>
        {showStatus === value && (
          <div className="option__wrapper-btn">
            <button
              onClick={() => selectOption({ ...data, isConfirmed: false })}
            >
              Queried
            </button>
            <button
              onClick={() => selectOption({ ...data, isConfirmed: true })}
            >
              Confirmed
            </button>
          </div>
        )}
      </div>
    </components.Option>
  );
};

export default Option;
