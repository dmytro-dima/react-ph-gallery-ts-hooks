import React, { useEffect, useReducer, useState } from "react";
import { reducer } from "./store/reducer";
import { initialState } from "./store/initialState";
import { ContextApp } from "./hooks";
import { fetchImages } from "./store/actions";
import { ImagesList } from "./pages/images-page";
import { Container, Typography } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Image } from "./pages/image";

export const App: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchImages(dispatch).then(() => setLoading(false));
  }, []);

  return (
    <Router>
      <ContextApp.Provider value={{ state, dispatch }}>
        <Container maxWidth="lg" className="text-center">
          <Typography variant="h4" className="mt-5">
            Photo gallery
          </Typography>
          <Switch>
            <Route exact path="/">
              <ImagesList images={state.images} loading={loading} />
            </Route>
            <Route path="/:id">
              <Image images={state.images} />
            </Route>
          </Switch>
        </Container>
      </ContextApp.Provider>
    </Router>
  );
};
