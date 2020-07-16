import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

interface SquarePropsInterface {
  value: number;
}

interface SquareStateInterface {
  value: string;
}

class Square extends React.Component<
  SquarePropsInterface,
  SquareStateInterface
> {
  constructor(props: SquarePropsInterface) {
    super(props);
    this.state = {
      value: '',
    };
  }
  render(): JSX.Element {
    return (
      <button
        className="square"
        onClick={(): void => this.setState({ value: 'X' })}
      >
        {this.state.value}
      </button>
    );
  }
}

class Board extends React.Component {
  renderSquare(i: number): JSX.Element {
    return <Square value={i} />;
  }

  render(): JSX.Element {
    const status = 'Next player: X';

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
          <Board />
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
