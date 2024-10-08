import React from "react";

//graphql
import { useQuery } from "@apollo/client";
import { GET_COMMENTS_INFO } from "../../../graphql/queries";

//MUI
import { Avatar, Box, Grid, Typography } from "@mui/material";

const CommentsBox = ({ slug }) => {
  const { loading, data, error } = useQuery(GET_COMMENTS_INFO, {
    variables: {
      slug,
    },
  });

  if (loading) return null;

  if (error) return <h2>Error ...</h2>

  return (
    <Grid
      container
      sx={{ boxShadow: "rgba(0,0,0,0.1) 0px 4px 12px", borderRadius: 4, py: 1 }}
    >
      <Grid item xs={12} m={2} mb={3}>
        <Typography component="p" variant="h6" fontWeight={700} color="primary">
          کامنت‌ها
        </Typography>
      </Grid>
      {data.comments.map((comment) => (
        <Grid
          key={comment.id}
          item
          xs={12}
          sx={{ border: "1px silver solid", borderRadius: 2, p: 1, m: 2 }}
        >
          <Box component="div" display="flex" alignItems="center" mb={1}>
            <Avatar>{comment.name[0]}</Avatar>
            <Typography component="span" variant="p" fontWeight={700} mr={1}>
              {comment.name}{" "}
            </Typography>
          </Box>
          <Typography component="p" variant="p">
            {comment.text}
          </Typography>
        </Grid>
      ))}
    </Grid>
  );
};

export default CommentsBox;
