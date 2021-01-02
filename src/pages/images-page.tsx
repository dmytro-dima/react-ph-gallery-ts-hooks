import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import { GridListTileBar } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import { ContextApp } from "../hooks";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
    marginTop: "2rem",
  },
}));

interface Image {
  id?: string;
  urls?: any;
  user?: any;
  alt_description?: string | null;
}
interface ListProps {
  images: Image[];
  loading: boolean;
}

export const ImagesList: React.FC<ListProps> = ({ images, loading }) => {
  const { state } = useContext(ContextApp);
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList className="h-100" cols={3}>
        {!loading &&
          state.images.map((img) => (
            <GridListTile key={img.id} component={NavLink} to={`/${img.id}`}>
              <img src={img.urls.regular} alt="img_gallery" />
              <GridListTileBar
                title={img.user.name}
                subtitle={img.alt_description && img.alt_description}
              />
            </GridListTile>
          ))}
      </GridList>
    </div>
  );
};
