import { Container, Grid, Grow } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getPosts } from '../../actions/posts';
import Form from '../Form/Form';
import Posts from '../Posts/Posts';
import useStyle from './style';

function Home() {
  const [currentId, setCurrentId] = useState(null);
  const classes = useStyle();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <Grow in>
      <Container>
        <Grid
          container
          className={classes.mainContainer}
          justify="space-between"
          alignItems="stretch"
          spacing={4}
        >
          <Grid item xs={12} sm={7}>
            <Posts setCurrentId={setCurrentId} />
          </Grid>
          <Grid item xs={12} sm={5}>
            <Form currentId={currentId} setCurrentId={setCurrentId} />
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
}

export default Home;
