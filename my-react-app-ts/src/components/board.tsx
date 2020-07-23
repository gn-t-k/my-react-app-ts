import React from 'react';
import Square from './square';

interface BoardPropsInterface {
  squares: string[];
  onClick: (i: number) => void;
}

interface BoardStateInterface {
  squares: string[];
  xIsNext: boolean;
}

class Board extends React.Component<BoardPropsInterface, BoardStateInterface> {
  renderSquare(i: number): JSX.Element {
    return (
      <Square
        value={this.props.squares[i]}
        onClick={(): void => this.props.onClick(i)}
      />
    );
  }

  render(): JSX.Element {
    return (
      <div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

export default Board;
