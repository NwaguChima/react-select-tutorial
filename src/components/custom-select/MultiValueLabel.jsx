import React from 'react';
import { components } from 'react-select';

const MultiValueLabel = ({ data, ...props }) => {
  return (
    <components.MultiValueLabel>
      <div className="multivalue__label">
        <p>{data.label}</p>
        <small>
          {data.isConfirmed ? (
            <span className="confirmed">Confirmed</span>
          ) : (
            <span className="queried">Queried</span>
          )}
        </small>
      </div>
    </components.MultiValueLabel>
  );
};

export default MultiValueLabel;
