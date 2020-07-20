import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

interface SquarePropsInterface {
  value: string;
  onClick: () => void;
}

const Square = (props: SquarePropsInterface): JSX.Element => (
  <button className="square" onClick={(): void => props.onClick()}>
    {props.value}
  </button>
);

interface BoardPropsInterface {
  squares: string[];
}

interface BoardStateInterface {
  squares: string[];
  xIsNext: boolean;
}

class Board extends React.Component<BoardPropsInterface, BoardStateInterface> {
  constructor(props: BoardPropsInterface) {
    super(props);
    this.state = {
      squares: Array(9).fill(''),
      xIsNext: true,
    };
  }

  handleClick(i: number): void {
    const squares = this.state.squares.slice();
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({ squares: squares, xIsNext: !this.state.xIsNext });
  }

  renderSquare(i: number): JSX.Element {
    return (
      <Square
        value={this.state.squares[i]}
        onClick={(): void => this.handleClick(i)}
      />
    );
  }

  render(): JSX.Element {
    const status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');

    return (
      <div>
        <div className="status">{status}</div>
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

class Game extends React.Component {
  render(): JSX.Element {
    return (
      <div className="game">
        <div className="game-board">
          <Board squares={Array(9).fill('')} />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(<Game />, document.getElementById('root'));
