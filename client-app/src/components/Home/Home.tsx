import { Container, Grid, Grow } from '@material-ui/core';
import { useEffect, useState } from 'react';
import { useAppDispatch } from "../../hooks/hooks";
import Form from '../Form/Form';
import Posts from '../Posts/Posts';
import useStyle from './style';
import {fetchPosts} from '../../store/thunks/postsThunks'

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
