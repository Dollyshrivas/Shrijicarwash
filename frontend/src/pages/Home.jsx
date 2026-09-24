import React from "react";
import Hero from "../components/Home/Hero";
import Car from "./Car";
import About from "./About";
import Contact from "./Contact";

function Home() {
	return (
		<div className="home-page">
			<section id="home"><Hero /></section>
			<section id="services"><Car /></section>
			<section id="about"><About /></section>
			<section id="contact"><Contact /></section>
		</div>
	);
}

export default Home;
