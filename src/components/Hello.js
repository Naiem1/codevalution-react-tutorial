import React from 'react';


const Hello = () => {
  // return (
  //   <div>
  //     <h1>Hello World</h1>
  //   </div>
  // )

  // Without JSX
  return React.createElement(
    'div',
    {
      id: 'myId',
      className: 'myClass'
    },
    React.createElement('h1', { id: 'title' }, 'Hello World')
  )
}

export default Hello;
