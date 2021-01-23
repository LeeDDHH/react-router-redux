import React from "react";
import { connect } from 'react-redux';

import { etcToString } from '../redux/etcToString';

const App = ({ value, renderEtc }) => {
  return (
    <div>
      Hello world!
      <div>value is: {value}</div>
      <div>etc is: {renderEtc}</div>
    </div>
  );
}

const mapStateToProps = (state) => {
  const { value, etc } = state.test;
  const renderEtc = etc.length < 1 ? null : etcToString(etc);
  return { value, renderEtc };
};

export default connect(mapStateToProps)(App);
