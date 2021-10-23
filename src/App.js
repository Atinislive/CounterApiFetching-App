import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import { Grid } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import "./App.css";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import one from "../src/one.png";
import Paper from "@material-ui/core/Paper";
import { styled } from "@material-ui/core/styles";
import Files from "./api.js";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(3),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const App = () => {
  const [Count, setCount] = useState(0);
  const increaseCount = () => {
    setCount(Count + 3);
  };
  const decreaseCount = () => {
    setCount(Count - 3);
  };

  return (
    //  counter

    <div className="App">
    
      <container>
        <Card sx={{ minWidth: 5 }}>
          <CardContent>
            <CardMedia component="img" height="140" image src={one} />
            <Grid container justify="center">
              <Box sx={{ width: 300 }} sx={{ bgcolor: "text.main" }}>
                <h2>COUNTER APP</h2>
                <ButtonGroup>
                  {" "}
                  <Button variant="contained" onClick={increaseCount}>
                    {" "}
                    <AddIcon color="primary" />
                  </Button>
                  <p align="center"> {Count}</p>
                  <Button variant="contained" onClick={decreaseCount}>
                    <RemoveIcon color="primary" />
                  </Button>
                </ButtonGroup>
              </Box>
            </Grid>
          </CardContent>
        </Card>
      </container>
<br/>
      {/* Make grid to fetch api */}
      <h1> Grid and fetch Api </h1>
      <Box sx={{ width: "100%" }}>
        <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={4}>
            <Item>1</Item>
          </Grid>
          <Grid item xs={4}>
            <Item>2</Item>
          </Grid>
          <Grid item sm={4}>
            <Item>3</Item>
          </Grid>
          <Grid item xs={4}>
            <Item>4</Item>
          </Grid>
          <Grid item xs={4}>
            <Item>5</Item>
          </Grid>
          <Grid item xs={4}>
            <Item>6</Item>
          </Grid>
          <Grid item xs={4}>
            <Item>7</Item>
          </Grid>
          <Grid item xs={4}>
            <Item>8</Item>
          </Grid>

          <Grid item xs={4}>
            <Item>4</Item>
          </Grid>
        </Grid>
      </Box>
      <br/><br/>
      <Files />
    </div>
  
  );
};

export default App;
