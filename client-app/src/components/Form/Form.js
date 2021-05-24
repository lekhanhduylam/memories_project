import React, { useState, useEffect } from 'react'
import { Paper, Typography, TextField, Button } from '@material-ui/core'
import useStyle from './style'
import FileBase from 'react-file-base64'
import { useDispatch, useSelector } from 'react-redux'
import { createPost, updatePost } from '../../actions/posts'


const Form = ({ currentId, setCurrentId }) => {
    const [postData, setPostData] = useState({
        creator: '',
        title: '',
        message: '',
        tags: '',
        selectedFile: ''
    })
    const currentPost = useSelector((state) => currentId ? state.posts.find(p => p._id === currentId) : null)
    const classes = useStyle()
    const dispatch = useDispatch()

    useEffect(() => {
        if (currentPost) {
            setPostData(currentPost)
        }
    }, [currentPost])


    const handleOnSubmit = (e) => {
        e.preventDefault()

        if (currentId) {
            dispatch(updatePost(currentId, postData))
            clear()
        } else {
            dispatch(createPost(postData))
            clear()
        }
    }

    const clear = () => {
        setCurrentId(null)
        setPostData({
            creator: '',
            title: '',
            message: '',
            tags: '',
            selectedFile: ''
        })
    }

    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleOnSubmit}>
                <Typography variant="h6">{currentId ? 'Editing' : 'Creating'} a Memory</Typography>
                <TextField fullWidth variant="outlined" label="Creator" value={postData.creator} onChange={(e) => setPostData({ ...postData, creator: e.target.value })} />
                <TextField fullWidth variant="outlined" label="Title" value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })} />
                <TextField fullWidth variant="outlined" label="Message" value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })} />
                <TextField fullWidth variant="outlined" label="Tags" value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value })} />
                <div className={classes.fileInput}>
                    <FileBase type="file" multipleFile={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })}></FileBase>
                </div>
                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                <Button className={classes.buttonSubmit} variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
            </form>
        </Paper>
    )
}

export default Form