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

import { CardComponent } from "./CardComponent";

export const Mobx = observer(() => {
  const { counterStore } = useContext(rootStoresContext);
  const { postsStore } = useContext(rootStoresContext);
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
      <Row>
        <Col className='flex-column'>
          <Button variant='warning' onClick={() => postsStore.fetchPosts()}>
            Fetch posts
          </Button>
          {postsStore.posts.map((post) => {
            return (
              <CardComponent
                key={post.id}
                title={post.title}
                content={post.body}
              />
            );
          })}
        </Col>
      </Row>
    </Container>
  );
});
