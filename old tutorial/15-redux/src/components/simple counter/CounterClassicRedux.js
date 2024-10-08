import React from "react";
import { connect } from "react-redux";
import { increase } from "../../redux/simple counter/counterActions";

const CounterClassicRedux = (props) => {
  return (
    <div>
      <h3>Counter - {props.counter}</h3>
      <button onClick={props.increase}>Increase</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    counter: state.counter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increase: () => dispatch(increase()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterClassicRedux);
