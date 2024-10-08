import React from "react";
import { useParams } from "react-router-dom";
import sanitizeHtml from "sanitize-html";

//graphql
import { useQuery } from "@apollo/client";
import { GET_AUTHOR_INFO } from "../../graphql/queries";
import { Avatar, Grid, Typography } from "@mui/material";
import CardEL from "../common/CardEL";
import Loader from "../common/Loader";

const AuthorPage = () => {
  const params = useParams();
  const slug = params.slug;
  const { loading, data, error } = useQuery(GET_AUTHOR_INFO, {
    variables: { slug },
  });

  if (loading) return <div style={{marginTop: '80px'}}><Loader /></div>;

  if (error) return <h2>error...</h2>;

  if (!data.author) return <h2>error...</h2>;

  const {
    author: { avatar, description, name, field, posts },
  } = data;

  console.log(data);
  return (
    <Grid container mt={10} p={3}>
      <Grid
        item
        xs={12}
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Avatar src={avatar.url} sx={{ width: "150px", height: "150px" }} />
        <Typography component="h3" variant="h5" fontWeight={700} mt={4}>
          {name}
        </Typography>
        <Typography component="p" variant="h5" color="text.secondary" mt={2}>
          {field}
        </Typography>
      </Grid>
      <Grid item xs={12} mt={4}>
        <div
          dangerouslySetInnerHTML={{ __html: sanitizeHtml(description.html) }}
        ></div>
      </Grid>
      <Grid item xs={12} mt={4}>
        <Typography component="h3" variant="h5" fontWeight={700}>
          مقالات {name}
        </Typography>
        <Grid container spacing={2} mt={2}>
          {posts.map((post) => (
            <Grid key={post.id} item xs={12} sm={6} md={4}>
              <CardEL {...post} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default AuthorPage;
