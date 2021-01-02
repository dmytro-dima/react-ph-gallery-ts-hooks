import React, { useContext } from "react";
import { NavLink, useParams } from "react-router-dom";
import { Grid, GridListTileBar, Link } from "@material-ui/core";
import GridListTile from "@material-ui/core/GridListTile";
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";

interface Image {
  id?: string;
  urls?: any;
  user?: any;
  alt_description?: string | null;
}

interface ListProps {
  images: Image[];
}

interface IParams {
  id: string;
}

export const Image: React.FC<ListProps> = ({ images }) => {
  let { id }: IParams = useParams();

  const img: Image | undefined = images.find((img) => img.id === id);

  return (
    <Grid container spacing={3}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link
          component={NavLink}
          to="/"
          color="inherit"
          className="text-decoration-none"
        >
          Home
        </Link>
        <Typography color="textPrimary">Photos</Typography>
      </Breadcrumbs>
      <Grid item xs={12} className="d-flex justify-content-center">
        {img ? (
          <GridListTile key={img.id}>
            <img src={img.urls.regular} alt="img_gallery" />
            <GridListTileBar
              title={img.user.name}
              subtitle={img.alt_description && img.alt_description}
            />
          </GridListTile>
        ) : (
          <h4>Loading...</h4>
        )}
      </Grid>
    </Grid>
  );
};
