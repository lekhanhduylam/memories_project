import React from 'react'
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core'
import useStyle from './style'
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt'
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import DeleteIcon from '@material-ui/icons/Delete'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import moment from 'moment'
import { useDispatch } from 'react-redux'
import { deletePost, likePost } from '../../../actions/posts'


interface PostProps {
  post: any;
  setCurrentId: React.Dispatch<React.SetStateAction<any>>;
}

const Post = (props: PostProps) => {
  const classes = useStyle()
  const dispatch = useDispatch();
  const user = localStorage.getItem('profile') ? JSON.parse(localStorage.getItem('profile') || '') : null

  const Like = () => {
    if (props.post.likes.length > 0) {
      return props.post.likes.find(
        (like: any) => like === (user?.result?.googleId || user?.result._id)
      ) ? (
        <>
          <ThumbUpAltIcon fontSize="small" />
          &nbsp;
          {props.post.likes.length > 2
            ? `You and ${props.post.likes.length - 1} others`
            : `${props.post.likes.length} like${props.post.likes.length > 1 ? 's' : ''}`}
        </>
      ) : (
        <>
          <ThumbUpAltOutlinedIcon fontSize="small" />
          &nbsp;{props.post.likes.length}&nbsp;
          {props.post.likes.length === 1 ? 'like' : 'likes'}
        </>
      );
    }

    return (
      <>
        <ThumbUpAltOutlinedIcon fontSize="small" />
        &nbsp;Like
      </>
    );
  };

    return (
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={props.post.selectedFile}
          title={props.post.title}
        />
        <div className={classes.overlay}>
          <Typography variant="h6">{props.post.name}</Typography>
          <Typography variant="body2">
            {moment(props.post.createdAt).fromNow()}
          </Typography>
        </div>
        {(user?.result?.googleId === props.post?.creator ||
          user?.result?._id === props.post?.creator) && (
          <div className={classes.overlay2}>
            <Button
              style={{ color: 'white' }}
              size="small"
              onClick={() => {
                props.setCurrentId(props.post._id);
              }}
            >
              <MoreHorizIcon fontSize="default" />
            </Button>
          </div>
        )}

        <div className={classes.details}>
          <Typography variant="body2" color="textSecondary">
            {(props.post.tags || []).map((tag: string) => `#${tag} `)}
          </Typography>
        </div>
        <Typography variant="h5" className={classes.title} gutterBottom>
          {props.post.title}
        </Typography>
        <CardContent>
          <Typography variant="body2" component="p" color="textSecondary">
            {props.post.message}
          </Typography>
        </CardContent>
        <CardActions className={classes.cardActions}>
          <Button
            size="small"
            color="primary"
            disabled={!user?.result}
            onClick={() => {
              dispatch(likePost(props.post._id));
            }}
          >
            <Like />
          </Button>
          {(user?.result?.googleId === props.post?.creator ||
            user?.result?._id === props.post?.creator) && (
            <Button
              size="small"
              color="primary"
              onClick={() => {
                dispatch(deletePost(props.post._id));
              }}
            >
              <DeleteIcon fontSize="small" />
              Delete
            </Button>
          )}
        </CardActions>
      </Card>
    );
}

export default Post