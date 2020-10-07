import React, { Component } from 'react';
import Particles from 'react-particles-js';
import particlesOption from './particlesOption';
export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
        <Particles params={particlesOption } className="particles" />
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="col-md-12">
                    <div className="about-desc"> 
                    <span className="heading-meta">About Us</span>
                    <h2 className="colorlib-heading">Who Am I?</h2>
                    <p className="wai">I am the only person I know completely. However, still when people ask me to tell something about myself, I often get perplexed. I am study about computer science and my passion is web devlopment it is only one field which is really happy to me with working.</p>
                    <p className="wai">Hii Friend I'm AB. he was study about biology science before learn about computer science. People call me by different names in one of the best is AB.</p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
        
        <section className="colorlib-about">
        <div className="colorlib-narrow-content">
        <Particles params={particlesOption } className="particles" /> 
            <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">What I do?</span>
                <h2 className="colorlib-heading">Here are some of my expertise</h2>
            </div>
            </div>
            <div className="row row-pt-md">
            <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                <span className="icon">
                    <i className="icon-bulb" />
                </span>
                <div className="desc">
                    <h3>FRONTEND DEVLOPMENT </h3>
                    <p>I am work with ejs template for make a structure like a html page, and use sass pre processor for Design a website CSS and I am also use ReactJS for more attractive and efficiency to load page.</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                <span className="icon">
                    <i className="icon-phone3" />
                </span>
                <div className="desc">
                    <h3>BACKEND DEVLOPMENT</h3>
                    <p>Backend Work for interact with user to server then user easily retrieve thier data and that is also use for authentication process it is provide security. I am use nodejs for backend programming, NodeJS is javascript Runtime Enviroment and also use ExpressJS that is Nodejs framework.</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-5">
                <span className="icon">
                    <i className="icon-data" />
                </span>
                <div className="desc">
                    <h3>DATABASE DESIGN</h3>
                    <p>Database is one of my favourite field. It is huge type of learning. I am familiarize with DBMS/RDBMS, Oracle Database, MySQL, MongoDB.</p>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
      </div>
    )
  }
}
