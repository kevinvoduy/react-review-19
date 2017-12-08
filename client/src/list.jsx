import React from 'react';
import Entry from './entry.jsx';

const List = (props) => {
  console.log('list: ', props)
  return (
    <div>
    Siblings:
    {props.list.map(x => <Entry key={x} item={x}/> )}
    </div>
  )
}

export default List;