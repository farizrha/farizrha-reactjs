import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

export const Counter = () => {
    let [count, setCount] = useState(0);

  useEffect( () => {
    setCount(c => c + 1);
  }, [])
  return (
    <div>
        <button onClick={() => setCount(count - 1)}>-</button>
        {' '}<span>{count}</span>{' '}
        <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  )
}
