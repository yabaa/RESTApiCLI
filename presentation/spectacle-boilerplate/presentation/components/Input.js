import React, { Component } from 'react'

const requestSample = {
  endpoint: '/api/teams',
  method: 'POST',
  data: {
    "value": "string"
  }
};

class Input extends Component {

  state = {
    value: JSON.stringify(requestSample, null, 2)
  }

  handleSubmit = () => {
    this.props.call(this.state.value)
  }

  handleChange = (event) => {
    this.setState({
      value: event.target.value
    })
  }

  handleTextareaKeydown = evt => {
    if (evt.keyCode === 9) {
      const textarea = evt.target;
      evt.preventDefault();
      var start = textarea.selectionStart;
      var end = textarea.selectionEnd;
      // set textarea value to: text before caret + tab + text after caret
      const spaces = '  ';
      textarea.value =
        textarea.value.substring(0, start) +
        spaces +
        textarea.value.substring(end);

      // put caret at right position again
      textarea.selectionStart = textarea.selectionEnd = start + spaces.length;
    }
  };


  render() {
    return(
        <div className="box" id='payload'>
          <p>
            <textarea
              rows='10'
              onKeyDown={this.handleTextareaKeydown}
              value={this.state.value}
              onChange={this.handleChange}
            />
              <button onClick={this.handleSubmit}>Try it out!</button>
          </p>
        </div>

    )
  }


}

export default Input
