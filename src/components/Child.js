import React, { memo } from "react";
import { Button, Container } from "react-bootstrap";

const Child = ({ number, setNumber }) => {
  console.log("Сhild component rendered");
  const childIncrementHandler = () => setNumber(number + 1);
  return (
    <Container>
      Child component: {number}
      <Button size='sm' variant='info' onClick={childIncrementHandler}>
        Increment child
      </Button>
    </Container>
  );
};

export default memo(Child);
