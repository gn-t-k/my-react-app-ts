import React from 'react';

type ISquare = 'X' | 'O' | null;

interface SquarePropsInterface {
  value: ISquare;
  onClick: () => void;
}

const Square: React.FC<SquarePropsInterface> = (props) => (
  <button className="square" onClick={(): void => props.onClick()}>
    {props.value}
  </button>
);

export default Square;
