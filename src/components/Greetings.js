import React from 'react';
import { useSelector } from 'react-redux';

function Greetings() {
  const greetings = useSelector((state) => state.greetings.greetings);
  const randomIndex = Math.floor(Math.random() * greetings.length);

  return (
    <div>
      { greetings.length === 0 ? <p>loading</p> : <p>{greetings[randomIndex].message}</p>}
    </div>
  );
}

export default Greetings;
