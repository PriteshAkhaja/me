import React, { Component } from 'react';
import Particles from 'react-particles-js';
import particlesOption from './particlesOption';
export default class Projects extends Component {
	constructor(){
		super();
		this.state= {title: 'Click to copy!!'}
	 }
	 
	render() {

    return (
      <div>
				<section className="colorlib-work" data-section="projects">
				<Particles params={particlesOption } className="particles" />
					<div className="colorlib-narrow-content">
						<div className="row">
							<div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
								<span className="heading-meta">My Work</span>
								<h2 className="colorlib-heading animate-box">Recent Projects</h2>
							</div>
						</div>
						 
						<div className="row">
							<div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
								<div className="project" style={{backgroundImage: 'url(images/img-1.png)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="https://nasa-api-react.web.app/" rel="noopener noreferrer" target="_blank">Nasa DOP</a></h3>
											<span>React Website using NASA APOD apis. In this app you can show every day new image which is provide by nasa. I call nasa api to Nasa DOP. </span>
											<p className="icon">
												<span>
												<a style={{cursor: "pointer"}} onClick={() =>  {navigator.clipboard.writeText('https://nasa-api-react.web.app/'); this.setState({title:'Copied!!'}); }}><i className="icon-link" />{this.state.title} </a>
												</span>
												{/* <span><a href="#"><i className="icon-eye" /> 100</a></span>
												<span><a href="#"><i className="icon-heart" /> 49</a></span> */}
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInRight">
								<div className="project" style={{backgroundImage: 'url(images/img-2.png)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="https://github.com/ankitbavadiya/newsab" rel="noopener noreferrer" target="_blank">NewsAB</a></h3>
											<span>React Website using News Api. In this app you can show all types of news with category wise. I was not deploy this app because of you can't use News APIs for free when you live to server. You can use only localhost for free version of News Api. I add new feature in this site with theme changer like <b>dark mode</b>. if you check this project then vist the github repo.</span>
											<p className="icon">
												<span>
													<a style={{cursor: "pointer"}} onClick={() =>  {navigator.clipboard.writeText('https://github.com/ankitbavadiya/newsab'); this.setState({title:'Copied!!'}); }}><i className="icon-link" />{this.state.title} </a>	
												</span>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInTop">
								<div className="project" style={{backgroundImage: 'url(images/img-3.png)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="https://art76.netlify.app/" rel="noopener noreferrer" target="_blank">Art76</a></h3>
											<span>This is simple react portfolio for artist. This is show art galley with images and contact to artist. I was use fade effect on scroll for every elements.</span>
											<p className="icon">
												<span>
													<a style={{cursor: "pointer"}} onClick={() =>  {navigator.clipboard.writeText('https://art76.netlify.app/');  this.setState({title:'Copied!!'}); }}><i className="icon-link" />{this.state.title} </a>	
												</span>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInBottom">
								<div className="project" style={{backgroundImage: 'url(images/img-4.jpg)', opacity: '0.8'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">Work 04</a></h3>
											<h3>Comming Soon...</h3>
											<span>Application</span>
											<p className="icon">
												<span><a href="#"><i className="icon-share3" /></a></span>
												<span><a href="#"><i className="icon-eye" /> 100</a></span>
												<span><a href="#"><i className="icon-heart" /> 49</a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
								<div className="project" style={{backgroundImage: 'url(images/img-5.jpg)', opacity: '0.8'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">Work 05</a></h3>
											<h3>Comming Soon...</h3>
											<span>Graphic, Logo</span>
											<p className="icon">
												<span><a href="#"><i className="icon-share3" /></a></span>
												<span><a href="#"><i className="icon-eye" /> 100</a></span>
												<span><a href="#"><i className="icon-heart" /> 49</a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInRight">
								<div className="project" style={{backgroundImage: 'url(images/img-6.jpg)', opacity: '0.8'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">Work 06</a></h3>
											<h3>Comming Soon...</h3>
											<span>Web Design</span>
											<p className="icon">
												<span><a href="#"><i className="icon-share3" /></a></span>
												<span><a href="#"><i className="icon-eye" /> 100</a></span>
												<span><a href="#"><i className="icon-heart" /> 49</a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						{/* <div className="row">
							<div className="col-md-12 animate-box">
								<p><a href="#" className="btn btn-primary btn-lg btn-load-more">Load more <i className="icon-reload" /></a></p>
							</div>
						</div> */}
					</div>
				</section>
      </div>
    )
  }
}
