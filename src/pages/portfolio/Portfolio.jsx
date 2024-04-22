import React from "react";
import Nav from "../../components/Nav";
import Item from "./components/Item";
import Container from "@mui/material/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Grid from "@mui/material/Grid";
import "bootstrap/dist/css/bootstrap.min.css";

import color from "../../img/portfolio/color.png";
import slider from "../../img/portfolio/slider.jpg";
import card from "../../img/portfolio/card.jpg";
import pagination from "../../img/portfolio/pagination.png";
import random from "../../img/portfolio/randuser.jpg";
import login from "../../img/portfolio/login.png";
import compile from "../../img/portfolio/compile.jpg";
import quiz from "../../img/portfolio/quiz.png";
import blog from "../../img/portfolio/blog.png";
import calculatur from "../../img/portfolio/calculatur.png";
import weather from "../../img/portfolio/weather.jpg";
import bascket from "../../img/portfolio/bascket.jpg";
import SNAKE from "../../img/portfolio/SNAKE.jpg";
import Personal from "../../img/portfolio/personal.jpg";
import Dashboard from "../../img/portfolio/dashbord.jpg";
import Admin from "../../img/portfolio/admin.jpg";

export default function Portfolio() {
  return (
    <>
      <div className="portfolio-top">
        <h1>portfolio</h1>
      </div>

      <Container fixed>
        <Grid style={{ textAlign: "center" }} alignItems="center" container>
          <Grid item xs={12} md={6} lg={4}>
            <Item
              title="Admin Panel"
              href="https://javadamindehghan.github.io/admin-panel/#/dashboard"
              Thumbnail={Admin}
            >
              {" "}
              <img src={Admin} alt="" />
            </Item>
          </Grid>
        <Grid item xs={12} md={6} lg={4}>
            <Item
              title="GAME"
              href="https://javadamindehghan.github.io/snake/"
              Thumbnail={SNAKE}
            >
              {" "}
              <img src={SNAKE} alt="" />
            </Item>
          </Grid>
           <Grid item xs={12} md={6} lg={4}>
            <Item
              title="Dashboard"
              href="https://admin-eight-zeta.vercel.app/"
              Thumbnail={Dashboard}
            >
              {" "}
              <img src={Dashboard} alt="" />
            </Item>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Item
              title="Personal"
              href="https://react-personal-web.vercel.app/"
              Thumbnail={Personal}
            >
              {" "}
              <img src={Personal} alt="" />
            </Item>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Item
              title="bascket"
              href="https://javadamindehghan.github.io/bascket/"
              Thumbnail={bascket}
            >
              {" "}
              <img src={bascket} alt="" />
            </Item>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Item
              title="login"
              href="https://javadamindehghan.github.io/login/"
              Thumbnail={login}
            >
              {" "}
              <img src={login} alt="" />
            </Item>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Item
              title="calculatur"
              href="https://javadamindehghan.github.io/calculatur/"
              Thumbnail={calculatur}
            >
              {" "}
              <img src={calculatur} alt="" />
            </Item>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Item
              title="quiz app"
              href="https://javadamindehghan.github.io/quiz/"
              Thumbnail={quiz}
            >
              {" "}
              <img src={quiz} alt="" />
            </Item>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Item
              title="weather"
              href="https://javadamindehghan.github.io/weather/"
              Thumbnail={weather}
            >
              {" "}
              <img src={weather} alt="" />
            </Item>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Item
              title="compiler"
              href="https://javadamindehghan.github.io/compiler/"
              Thumbnail={compile}
            >
              {" "}
              <img src={compile} alt="" />
            </Item>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Item
              title="pagination"
              href="https://javadamindehghan.github.io/pagination/"
              Thumbnail={pagination}
            >
              {" "}
              <img src={pagination} alt="" />
            </Item>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Item
              title="random user"
              href="https://javadamindehghan.github.io/random-user/"
              Thumbnail={random}
            >
              {" "}
              <img src={random} alt="" />
            </Item>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Item
              title="pick color"
              href="https://javadamindehghan.github.io/color/"
              Thumbnail={color}
            >
              {" "}
              <img src={color} alt="" />
            </Item>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Item
              title="sport slider"
              href="https://javadamindehghan.github.io/football-slider/"
              Thumbnail={slider}
            >
              {" "}
              <img src={slider} alt="" />
            </Item>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Item
              title="card"
              href="https://javadamindehghan.github.io/card/"
              Thumbnail={card}
            >
              {" "}
              <img src={card} alt="" />
            </Item>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Item
              title="blog"
              href="https://javadamindehghan.github.io/menu/"
              Thumbnail={blog}
            >
              {" "}
              <img src={blog} alt="" />
            </Item>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
