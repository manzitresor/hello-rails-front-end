import './App.css';
import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchGreetings } from './redux/greetings/greetingsSlice';
import Greetings from './components/Greetings';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGreetings());
  }, []);
  return (
    <>
      <Routes>
        <Route path="/" element={<Greetings />} />
      </Routes>
    </>
  );
}

export default App;
