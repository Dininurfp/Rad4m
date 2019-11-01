import React from 'react';

const colour = ( props ) => {

  let newColour = ("rgb(" + props.c1 +", "+ props.c2 +", "+ props.c3 +")");

  const divstyle = {
  margin: '5px auto',
  backgroundColor: newColour,
  textAlign: 'center',
  width: '5vw',
  height: '5vw',
  display: 'inline-block'
  };


 return (

    <div style={divstyle}
         onClick={props.clicked}>
    </div>

  );
};

export default colour;