import React, { Component } from "react";

class Form extends Component {
  constructor() {
    super();
    this.state = {
      text: "",
      select : 'option3',
      radio1: '',
      radio2: '',
      checkbox: false,
    };
  }

  submitHandler = (event) => {
    event.preventDefault();
    console.log(this.state);
  };

  changeHandler = (event) => {
    if (event.target.type === 'checkbox') {
      this.setState({
        [event.target.name]: event.target.checked,
      }, () => console.log(this.state))
      // console.log(event.target.checked)
    } else {
      this.setState({
        [event.target.name]: event.target.value,
      }, () => console.log(this.state))
    }
  }

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <input type="text" name="text" value={this.state.text} onChange={this.changeHandler} />
        <br/>
        <br/>
        <br/>
        <select name="select" value={this.state.select} onChange={this.changeHandler}>
          <option value='option1'>option 1</option>
          <option value='option2'>option 2</option>
          <option value='option3'>option 3</option>
          <option value='option4'>option 4</option>
        </select>
        <div>
          <label>گزینه شماره 1</label>
          <input type='radio' name="radio1" value='$1' onChange={this.changeHandler}/>
        </div>
        <div>
          <label>گزینه شماره 1</label>
          <input type='radio' name="radio1" value='$2' onChange={this.changeHandler}/>
        </div>
        <div>
          <label>گزینه شماره 1</label>
          <input type='radio' name="radio1" value='$3' onChange={this.changeHandler}/>
        </div>
        <div>
          <label>گزینه شماره 1</label>
          <input type='radio' name="radio2" value='$1' onChange={this.changeHandler}/>
        </div>
        <div>
          <label>گزینه شماره 1</label>
          <input type='radio' name="radio2" value='$2' onChange={this.changeHandler}/>
        </div>
        <div>
          <label>گزینه شماره 1</label>
          <input type='radio' name="radio2" value='$3' onChange={this.changeHandler}/>
        </div>
        <br/>
        <br/>
        <div>
          <label>گزینه شماره 1</label>
          <input type='checkbox' name="checkbox" value={this.state.checkbox} onChange={this.changeHandler}/>
        </div>
        <button type="submit">submit</button>
      </form>
    );
  }
}

export default Form;
