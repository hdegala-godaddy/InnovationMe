// Write JavaScript here and press Ctrl+Enter to execute

// Notes
// In Render function of React : return value
//                                should be wrapped in div because render can return back only one element

// Paramter passing in IntegrationComponent
//        Please note how we are passing style parameter and the value {1} as the parameter

//In Button component 
//        Please note we need to parse the style string from parentComponent to send it on to
//         child.

class Button extends React.Component {
  constructor(props) {
    super();
    // Please Note that style parameter has to be passed in as String from top Parameter
    // and need to parse and passed in to style as map
    this.styleParam = JSON.parse(props.styleParam);
  }
  render() {
    return (
      <button style={this.styleParam} onClick={() => this.props.onClickBtn(this.props.incrementValue)}>
        {this.props.incrementValue}
      </button>
    );
  }

}

const DisplayComponent = (props) => {

  const styleValue = JSON.parse(props.styleParam);
  return (
    <div style={styleValue}>
      {props.displayValue}
    </div>
  );
}

class IntegrationComponent extends React.Component {
  state = { counter: 0 };
  onClickCB = (incrValue) => {

    this.setState(() => {

      alert(" incrValue : " + this.state.counter + " " + incrValue);
      return {
        counter: this.state.counter + incrValue
      }
    });
  }

  //Please note how we are passing style parameter and the value {1} as the parameter
  //Need to wrap in div because render can return back only one element
  render() {
    return (
      <div>
        <Button incrementValue={1} styleParam='{"position":"absolute","top":"100px"}' onClickBtn={this.onClickCB} />
        <Button incrementValue={10} styleParam='{"position":"absolute","top":"200px"}' onClickBtn={this.onClickCB} />
        <DisplayComponent displayValue={this.state.counter} styleParam='{"position":"absolute","top":"400px"}' />
      </div>
    );
  }
}

ReactDOM.render(<IntegrationComponent />, mountNode)