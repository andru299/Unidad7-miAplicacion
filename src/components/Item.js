import React from 'react';


const Item = (props) => {
  return (
    <div>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <img src={props.image} alt="" />

    </div>
  );
}

export default Item;
