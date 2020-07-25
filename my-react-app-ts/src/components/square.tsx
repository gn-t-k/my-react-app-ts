import React from 'react';
import { ISquare } from '../domain/entity';

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
