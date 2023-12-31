import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Tooltip from "@mui/material/Tooltip";

export function DogCard({ image, title, isFavorite, onFavoriteClick }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader title={title} />
      <CardMedia component="img" height="300" image={image} alt="dog picture" />
      <CardContent>
        <Typography variant="body2" color="text.secondary"></Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Tooltip
          title={isFavorite ? "Remove from favorites" : "Add to favorites"}
        >
          <IconButton
            aria-label="add to favorites"
            onClick={onFavoriteClick}
            color={isFavorite ? "secondary" : ""}
          >
            <FavoriteIcon />
          </IconButton>
        </Tooltip>
      </CardActions>
    </Card>
  );
}
