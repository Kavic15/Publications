import React from 'react';

function MyButton(props) {
  return (
    <div>
        <button onClick={props.onClick} className='btn btn-sm btn-outline-primary'>
            {props.label}
        </button>
    </div>
  );
}

export default MyButton;