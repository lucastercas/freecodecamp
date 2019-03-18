const e = React.createElement;

class PomodoroClock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      break: 5,
      session: 25,
      minute: 25,
      second: 0,
    };
    this.countSeconds();
  }

  increaseControlLength(control) {
    let obj = {};
    obj[control] = this.state[control] + 1;
    this.setState(obj);
  }

  decreaseControlLength(control) {
    let obj = {};
    obj[control] = this.state[control] - 1;
    this.setState(obj);
  }

  countSeconds() {
    setInterval(() => {
      if (this.state.second === 0) {
        this.setState({
          second: 59,
          minute: this.state.minute - 1,
        });
      } else {
        this.setState({
          second: this.state.second - 1,
        });
      }
    }, 1000);
  }

  render() {
    return e(
      'div',
      {},
      e('h1', {}, 'Pomodoro Clock'),
      e(Control, {
        title: 'Break Length',
        length: this.state.break,
        increase: () => this.increaseControlLength('break'),
        decrease: () => this.decreaseControlLength('break'),
      }),
      e(Control, {
        title: 'Session Length',
        length: this.state.session,
        increase: () => this.increaseControlLength('session'),
        decrease: () => this.decreaseControlLength('session'),
      }),
      e(Clock, { minute: this.state.minute, second: this.state.second }),
      e(Button, { text: 'Start' }),
      e(Button, { text: 'Stop' }),
      e(Button, { text: 'Restart' })
    );
  }
}

class Control extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      length: 0,
    };
  }

  render() {
    return e(
      'div',
      { className: 'length-control' },
      e('h3', {}, this.props.title),
      e(Button, { text: 'Up', click: this.props.increase }),
      e('div', {}, this.props.length),
      e(Button, { text: 'Down', click: this.props.decrease })
    );
  }
}

class Button extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return e(
      'button',
      {
        onClick: () => {
          this.props.click();
        },
      },
      this.props.text
    );
  }
}

class Clock extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return e(
      'div',
      { id: 'clock' },
      e(
        'h2',
        {},
        'Session',
        e('div', {}, this.props.minute, ':', this.props.second)
      )
    );
  }
}

const mainContainer = $('main')[0];
ReactDOM.render(e(PomodoroClock), mainContainer);
