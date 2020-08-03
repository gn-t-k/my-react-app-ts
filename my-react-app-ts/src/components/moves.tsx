import React from 'react';
import { History } from '../domain/entity'

interface MovesProps {
  history: History;
  jumpTo: (move: number) => void;
}

const Moves: React.FC<MovesProps> = ({history, jumpTo}) => (
  <ol>
    { history.map((_, move) => {
      const desc = move ? 'Go to move #' + move : 'Go to game start';
      return (
        <li key={move}>
          <button onClick={(): void => jumpTo(move)}>{desc}</button>
        </li>
      );
    }) }
  </ol>
) 

export default Moves
