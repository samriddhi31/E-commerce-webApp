import React, { useState } from 'react'

function Wheel(props) {
    const [arrayElements, setArrayElements] = useState([
        {
            id: 1,
            name: 'xyz',
        },
        {
            id: 2,
            name: 'abc',
        }
    ]);
  return (
    <div>Wheel</div>
  )
}

export default Wheel