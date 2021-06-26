import { Button, Paper, TextField, Typography } from '@material-ui/core';
// import { useAppSelector } from 'app/hooks';
import { Post } from 'features/Home/components/Posts/postsSlice';
import { useEffect, useState } from 'react';
// import FileBase from 'react-file-base64'
import { useDispatch } from 'react-redux';
import useStyle from './style';
interface FormProps {
  currentId?: string;
  setCurrentId: any;
}
const initPost: Post = {
  creator: '',
  image: '',
  selectedFile: '',
  tags: '',
  message: '',
  title: '',
};
const Form = ({ currentId, setCurrentId }: FormProps) => {
  const [postData, setPostData] = useState(initPost);
  // const currentPost = useAppSelector((state) =>
  //   currentId ? state.posts.posts.find((p: any) => p._id === currentId) : null
  // );
  const currentPost = null;
  const classes = useStyle();
  const dispatch = useDispatch();

  const getLocalStorageUser = () => {
    return localStorage.getItem('profile')
      ? JSON.parse(localStorage.getItem('profile') || '')
      : null;
  };
  const user = getLocalStorageUser();

  useEffect(() => {
    if (currentPost) {
      // setPostData(currentPost);
    }
  }, [currentPost]);

  const handleOnSubmit = (e: any) => {
    e.preventDefault();

    if (currentId) {
      // dispatch(
      //   updatePost(currentId, { ...postData, name: user?.result?.name })
      // );
      clear();
    } else {
      // dispatch(createPost({ ...postData, name: user?.result?.name }));
      clear();
    }
  };

  const clear = () => {
    setCurrentId(null);
    // setPostData({
    //   title: '',
    //   message: '',
    //   tags: '',
    //   selectedFile: '',
    // });
  };

  if (!user?.result?.name) {
    return (
      <Paper className={classes.paper}>
        <Typography variant="h6" align="center">
          Please sign in to create your own memories and like other memories
        </Typography>
      </Paper>
    );
  }

  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleOnSubmit}
      >
        <Typography variant="h6">
          {currentId ? 'Editing' : 'Creating'} a Memory
        </Typography>
        <TextField
          fullWidth
          variant="outlined"
          label="Title"
          value={postData.title}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
        />
        <TextField
          fullWidth
          variant="outlined"
          label="Message"
          value={postData.message}
          onChange={(e) =>
            setPostData({ ...postData, message: e.target.value })
          }
        />
        {/* <TextField
            fullWidth
            variant="outlined"
            label="Tags"
            value={postData.tags}
            onChange={(e) =>
              setPostData({ ...postData, tags: e.target.value.split(',') })
            }
          /> */}
        <div className={classes.fileInput}>
          {/* <FileBase
              type="file"
              multipleFile={false}
              onDone={({ base64 }) =>
                setPostData({ ...postData, selectedFile: base64 })
              }
            ></FileBase> */}
        </div>
        <Button
          className={classes.buttonSubmit}
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth
        >
          Submit
        </Button>
        <Button
          className={classes.buttonSubmit}
          variant="contained"
          color="secondary"
          size="small"
          onClick={clear}
          fullWidth
        >
          Clear
        </Button>
      </form>
    </Paper>
  );
};

export default Form;
