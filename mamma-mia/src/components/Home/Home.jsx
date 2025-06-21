import React from "react";
import Header from "../Header/Header";
import CardPizza from "../CardPizza/CardPizza";

const Home = () => {
  return (
    <>
      <Header />

      <div className="cards">
        <CardPizza
          img={
            "https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_cl.jpg?alt=media&token=6a9a33da-5c00-49d4-9080-784dcc87ec2c"
          }
          title="Some pizza"
          ingredients="Tasty stuff"
          price="What a bargain!"
        />
        <CardPizza
          img={
            "https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_cl.jpg?alt=media&token=6a9a33da-5c00-49d4-9080-784dcc87ec2c"
          }
          title="Some pizza"
          ingredients="Tasty stuff"
          price="What a bargain!"
        />
        <CardPizza
          img={
            "https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_cl.jpg?alt=media&token=6a9a33da-5c00-49d4-9080-784dcc87ec2c"
          }
          title="Some pizza"
          ingredients="Tasty stuff"
          price="What a bargain!"
        />
      </div>
    </>
  );
};

export default Home;
