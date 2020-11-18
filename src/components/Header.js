import React from 'react';
import Item from './Item'


const Header = props => (
  <div>
    <h1>HEADER with some text: {props.text}</h1>
    <Item counterValue={props.counterValue} />
  </div>
)

export default Header;
