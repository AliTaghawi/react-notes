import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import sanitizeHtml from 'sanitize-html'

//graphql
import { useQuery } from "@apollo/client";
import { GET_POST_INFO } from "../../graphql/queries";

//MUI
import { Avatar, Box, Grid, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

//components
import Loader from "../common/Loader";
import CommentFrom from "./comment/CommentFrom";
import CommentsBox from "./comment/CommentsBox";

const BlogPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { loading, data, error } = useQuery(GET_POST_INFO, {
    variables: { slug },
  });

  if (loading)
    return (
      <div style={{ marginTop: "80px" }}>
        <Loader />
      </div>
    );

  if (error) return <h2>error...</h2>;

  if (!data.post) return <h2>error...</h2>;

  const {
    post: { title, coverImage, content, author },
  } = data;
  return (
    <Grid container mt={8}>
      <Grid
        item
        xs={12}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography
          component="h2"
          variant="h4"
          fontWeight={700}
          color="primary"
        >
          {title}
        </Typography>
        <ArrowBackIcon onClick={() => navigate(-1)} />
      </Grid>
      <Grid item xs={12} mt={7}>
        <img src={coverImage.url} alt={slug} style={{width: '100%', borderRadius: '16px'}} />
      </Grid>
      <Grid item xs={12} mt={5} display='flex' alignItems='center'>
        <Avatar src={author.avatar.url} sx={{width: 80, height: 80, marginLeft: 2}} />
        <Box component='div'>
          <Typography component='p' variant="h6">{author.name}</Typography>
          <Typography component='p' variant="p" color='text.secondary'>{author.field}</Typography>
        </Box>
      </Grid>
      <Grid item xs={12} mt={5}>
        <div dangerouslySetInnerHTML={{__html: sanitizeHtml(content.html) }}></div>
      </Grid> 
      <Grid item xs={12} mt={7}>
        <CommentFrom slug={slug} />
      </Grid>
      <Grid item xs={12} mt={7}>
        <CommentsBox slug={slug} />
      </Grid>
    </Grid>
  );
};

export default BlogPage;
