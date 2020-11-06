import React, { useState, useCallback, useMemo } from "react";
import { Container, Button } from "react-bootstrap";

import Child from "./Child";

const arr = [];
for (let i = 0; i < 500; i++) {
  arr.push(i);
}

export const Parent = () => {
  const [localState, setLocalState] = useState(0);
  const [childState, setChildState] = useState(0);

  const increment = () => setLocalState((prevState) => prevState + 1);
  const incrementChild = (number) => setChildState(number);
  const memoizedCallBack = useCallback((state) => incrementChild(state), []);
  const expensiveFunc = () => {
    console.log("Сalculation of an expensive function...");
    return Math.max(...arr);
  };
  const memoizedValue = useMemo(() => expensiveFunc(), []);

  return (
    <Container>
      <Child number={childState} setNumber={memoizedCallBack} />
      <>
        Parent component: {localState}
        <Button size='sm' onClick={increment}>
          Increment
        </Button>
        <br />
        Largest number: {memoizedValue}
      </>
    </Container>
  );
};
