//
import './App.css';
import { useState, useEffect, useRef } from 'react';

import Viewer from './components/Viewer';
import Controller from './components/Controller';
import Even from './components/even';

function App() {
  const [number, setNumber] = useState(0);
  const [input, setInput] = useState('');
  const isMount = useRef();

  // lifecycle 관리2 - update
  useEffect(() => {
    if (!isMount.current) {
      return;
    }
    console.log('update');
  });

  useEffect(() => {
    if (!isMount.current) {
      return;
    }
    console.log(number, input);
  }, [number, input]);

  // lifecycle 관리1 - mount
  useEffect(() => {
    console.log('mount');
    isMount.current = true;
  }, []);

  const onClickButton = (value) => {
    setNumber(number + value);
  };

  return (
    <div className="App">
      <h1>Simple Counter</h1>

      <section>
        <input
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
      </section>
      <section className="Viewer">
        <Viewer number={number} />
        {number % 2 === 0 ? <Even /> : null}
      </section>
      <section>
        <Controller onClickButton={onClickButton} />
      </section>
    </div>
  );
}

export default App;
