import React from 'react';

function MyButton(props) {
  function handleClick() {
    alert(props.label + ' clicked!');
  }
  return (
    <div>
        <button onClick={handleClick} className='btn btn-sm btn-outline-primary'>
            {props.label}
        </button>
    </div>
  );
}

export default MyButton;