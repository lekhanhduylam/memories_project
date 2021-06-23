import { Container, Grid, Grow } from '@material-ui/core';
import { useEffect, useState } from 'react';
import { useAppDispatch } from '../../app/hooks';
import { fetchPosts } from '../../features/Home/components/Posts/postsSlice';
import Form from '../Form/Form';
import Posts from './components/Posts/Posts';
import useStyle from './style';

function Home() {
  const [currentId, setCurrentId] = useState();
  const classes = useStyle();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
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
