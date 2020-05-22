import React from "react";
import styles from "./App.module.css";
import CardToNumber from "./components/CardToNumber/CardToNumber";
import NumberToCard from "./components/NumberToCard/NumberToCard";
import Stack from "./components/Stack/Stack";
import Home from "./components/Home/Home";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className={styles.App}>
      <div className={styles.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" className={styles.title}>
              Mnemonica Trainer 🃏
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/stack" component={Stack} />
          <Route path="/cardtonumber" component={CardToNumber} />
          <Route path="/numbertocard" component={NumberToCard} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
