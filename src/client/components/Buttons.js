import React from "react";
import { connect } from 'react-redux';
import { increment, decrement } from '../redux/actions';

const Buttons = ({increment, decrement}) => (
    <div>
      <button onClick={() => increment()}>Increment</button>
      <button onClick={() => decrement()}>Decrement</button>
    </div>
);

export default connect(
  null,
  { increment, decrement }
)(Buttons);
