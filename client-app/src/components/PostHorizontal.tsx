import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardMedia,
  createStyles,
  Grid,
  makeStyles,
  Paper,
  Theme,
  Typography,
  useTheme
} from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      boxShadow: 'none',
      maxHeight: '210px',
    },
    cover: {
      maxWidth: '240px',
      borderRadius: '6px',
      maxHeight: '150px',
    },
    content: {
      padding: 0,
      paddingLeft: theme.spacing(2)
    },
    textTruncate: {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      display: '-webkit-box',
      WebkitLineClamp: 3,
      WebkitBoxOrient: 'vertical',
    },
    postAuthorAvatar: {
      width: theme.spacing(4),
      height: theme.spacing(4),
      marginRight: theme.spacing(1)
    }
  })
);

const PostHorizontal = () => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.cover}
        component="img"
        image="https://images.unsplash.com/photo-1507088861996-1ff7e386e23e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1055&q=80"
      ></CardMedia>
      <CardContent className={classes.content}>
        <Typography className={classes.textTruncate} gutterBottom variant="h6">
          Title Series Nhà bạn có gì hay: Biến nhà trở nên vui vẻ hơn, an tâm
          chống dịch hiệu quả
        </Typography>
        <Typography
          className={classes.textTruncate}
          gutterBottom
          variant="subtitle1"
        >
          Series Nhà bạn có gì hay: Biến nhà trở nên vui vẻ hơn, an tâm chống
          dịch hiệu quả Bữa giờ dịch, anh em ở nhà nhiều, nên mình tạo ra một
          chỗ để anh em có thể vào chia sẻ những món đồ hay, các thủ thuật, kinh
          nghiệm về việc làm cho căn nhà trở nên vui vẻ, hấp dẫn, dễ chịu hơn.
        </Typography>
        <Box justifyContent="start" display="flex" alignItems="center" >
          <Avatar className={classes.postAuthorAvatar} src="https://images.unsplash.com/photo-1606122017369-d782bbb78f32?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80"></Avatar>
          <Typography variant="subtitle2" color="primary" style={{marginRight: theme.spacing(1)}}>
            Lâm Lê
          </Typography>
          <Typography variant="body1" color="textSecondary">
            - 2h - Thông tin công nghệ
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default PostHorizontal;
