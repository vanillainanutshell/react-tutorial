/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this  */

import React, { Component } from 'react';

class InputTodo extends Component {
    state = {
      title: '',
    };

    onChange = (e) => {
      this.setState({
        [e.target.name]: e.target.value,
      });
    };

    handleSubmit = (e) => {
      e.preventDefault();
      if (this.state.title.trim()) {
        this.props.addTodoProps(this.state.title);
        // this setstate to clean the fields on the input
        this.setState({
          title: '',
        });
      } else {
        alert('Please write item');
      }
    }

    render() {
      return (
            <form onSubmit={this.handleSubmit}>
                <input
                 type="text"
                 className="input-text"
                 placeholder="Add todo..."
                 value={this.state.title}
                 onChange={this.onChange}
                 name="title"
                />
                <button>Submit</button>
            </form>
      );
    }
}

export default InputTodo;