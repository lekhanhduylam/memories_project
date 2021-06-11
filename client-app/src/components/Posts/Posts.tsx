import Post from './Post/Post'
import { useSelector } from 'react-redux'
import { Grid, CircularProgress } from '@material-ui/core'
import useStyle from './style'

interface PostsProps {
    setCurrentId: any
}
const Posts = ({setCurrentId}: PostsProps) => {
    const posts = useSelector((state: any) => state.posts)
    const classes = useStyle()

    return (
        !posts.length ? <CircularProgress /> : (
            <Grid className={classes.mainContainer} container alignItems="stretch" spacing={3}>
                {posts.map((post: any) => (
                    <Grid key={post._id} item xs={12} sm={6}>
                        <Post setCurrentId={setCurrentId} post={post} />
                    </Grid>
                )
                )}
            </Grid>
        )
    )
}

export default Posts