import {
  Container,
  createStyles,
  Grid,
  Grow,
  makeStyles,
  Paper,
  Theme
} from '@material-ui/core';
import { useEffect, useState } from 'react';
import { useAppDispatch } from '../../app/hooks';
import PostHorizontal from '../../components/PostHorizontal';
import { fetchPosts } from '../../features/Home/components/Posts/postsSlice';
import Form from '../Form/Form';
import Posts from './components/Posts/Posts';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginTop: theme.spacing(10),
    },
  })
);

function Home() {
  const [currentId, setCurrentId] = useState();
  const classes = useStyles();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [currentId, dispatch]);

  return (
    <Container className={classes.root}>
    <Grid spacing={3} container>
      <Grid item xs={8}>
            <PostHorizontal></PostHorizontal>
            <PostHorizontal></PostHorizontal>
            <PostHorizontal></PostHorizontal>
            <PostHorizontal></PostHorizontal>
      </Grid>
      <Grid item xs={4}></Grid>
    </Grid>
    </Container>
  );
}

export default Home;
