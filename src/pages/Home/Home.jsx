import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import User from '../../img/user.png'
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { handelcurrent } from "../../action/current";
import Aboutcenter from "../About/component/Aboutcenter";
import Container from "@mui/material/Container";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TelegramIcon from '@mui/icons-material/Telegram';

export default function Home({ curser, henel }) {
  const dispatch = useDispatch();

  const classcontent = useRef();

  return (
    <>
     
     
        <section class=" section">
  <div class="home__rectangle"></div>

  <div class="home__container container grid">
    <div class="home__perfil perfil">
      <div class="perfil__content">
        <img src={User} alt="image" class="perfil__img"/>
      </div>
    </div>

    <div class="home__content grid">
      <div class="home__data grid">
        <h1 class="home__name"> Amindehghan </h1>

        <h2 class="home__profession"> Frontend developer</h2>

        <div class="home__social">
          <a href="https://github.com/javadamindehghan" target="_blank" class="home__social-link">
            <GitHubIcon  sx={{fontSize:'50px'}}/>
          </a>

          

          <a href="https://www.linkedin.com/in/javad-amindehghan-b66b52244/" target="_blank" class="home__social-link">
           <LinkedInIcon sx={{fontSize:'50px'}} />
          </a>
        </div>
      </div>

      <a href="./DEHGHAN.pdf" download="" class="home__button button">Download Resume</a>
      <button  onClick={() => dispatch(handelcurrent(1))} class="home__button button"> About Me <NavigateNextIcon/></button>
    </div>
  </div>

</section>

        


      
     
    </>
  );
}
