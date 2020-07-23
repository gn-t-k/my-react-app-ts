import React from 'react';

interface SquarePropsInterface {
  value: string;
  onClick: () => void;
}

const Square: React.FC<SquarePropsInterface> = (props) => (
  <button className="square" onClick={(): void => props.onClick()}>
    {props.value}
  </button>
);

export default Square;
