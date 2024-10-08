import React from "react";
import { Link } from "react-router-dom";

//MUI
import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Divider,
  Typography,
} from "@mui/material";

const CardEL = ({ author, coverImage, slug, title }) => {
  // console.log({author,coverImage, id, slug, title})
  return (
    <Card sx={{ boxShadow: "rgba(0,0,0,.1) 0px 4px 12px", borderRadius: 4 }}>
      {author && (
        <CardHeader
          avatar={<Avatar alt={author.name} src={author.avatar.url} />}
          title={
            <Typography
              component="p"
              variant="p"
              fontWeight={600}
              color="text.secondary"
              mr={1}
            >
              {author.name}
            </Typography>
          }
        />
      )}

      <CardMedia component="img" height="194" image={coverImage.url} />
      <CardContent>
        <Typography
          component="h3"
          variant="p"
          color="text.primary"
          fontWeight={600}
        >
          {title}
        </Typography>
      </CardContent>
      <Divider variant="middle" sx={{ margin: "10px" }} />
      <CardActions>
        <Link
          to={`/blogs/${slug}`}
          style={{ textDecoration: "none", width: "100%" }}
        >
          <Button variant="outlined" size="small" sx={{ width: "100%" }}>
            مطالعه مقاله
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default CardEL;
