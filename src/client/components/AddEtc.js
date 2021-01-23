import React, { useState } from 'react';
import { connect } from 'react-redux';

import { addEtc } from '../redux/actions';

const AddEtc = ({ addEtc }) => {
  const [text, setText] = useState({ etc: "" });
  
  const handleInputChange = (e) => {
    const { value, name } = e.target;
    setText({ ...text, [name]: value });
  }

  const handleSaveInput = (e) => {
    const etc = text.etc;
    addEtc(etc);
    setText({ etc: "" });
    e.target.previousSibling.value = "";
  }

  return (
    <div>
      <input
        type="text"
        name="etc"
        defaultValue={text.etc}
        onChange={handleInputChange}
      />
      <button onClick={(e) => handleSaveInput(e)}>Save</button>
    </div>
  )
};

export default connect(null, {addEtc})(AddEtc);
