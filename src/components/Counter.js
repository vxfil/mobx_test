import React, { useContext } from "react";
import {
  Container,
  Button,
  ButtonGroup,
  Badge,
  Row,
  Col,
} from "react-bootstrap";
import { observer } from "mobx-react-lite";
import { rootStoresContext } from "../stores/RootStore";

export const Counter = observer(() => {
  const { counterStore } = useContext(rootStoresContext);
  return (
    <Container>
      <Row>
        <Col>
          <Badge>{counterStore.value}</Badge>
        </Col>
      </Row>
      <Row>
        <Col>
          <ButtonGroup size='lg' className='mb-2'>
            <Button variant='primary' onClick={() => counterStore.increment()}>
              +
            </Button>
            <Button variant='info' onClick={() => counterStore.decrement()}>
              -
            </Button>
          </ButtonGroup>
        </Col>
      </Row>
    </Container>
  );
});
