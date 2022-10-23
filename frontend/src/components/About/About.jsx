import { Typography } from "@mui/material";
import React from "react";
import "./About.css";

const About = ({ about }) => {
	return (
		<div className="about">
			<div className="aboutContainer">
				<Typography>{about.quote}</Typography>
			</div>
			<div className="aboutContainer2">
				<div>
					<img
						src={about.avatar.url}
						alt="rb"
						className="aboutAvatar"
					/>
					<Typography
						variant="h4"
						style={{ margin: "1vmax 0", color: "black" }}
					>
						{about.name}
					</Typography>
					<Typography>{about.title}</Typography>
					<Typography
						style={{ margin: "1vmax 0", textAlign: "center" }}
					>
						{about.subtitle}
					</Typography>
				</div>
				<div>
					<Typography
						style={{
							wordSpacing: "5px",
							lineheught: "50px",
							letterSpacing: "5px",
							textAlign: "right",
						}}
					>
						I am Ritam, an Electronics and Communication Engineer by
						degree but a Software Engineer by passion.<br></br>I
						enjoy working on projects and development.
					</Typography>
				</div>
			</div>
		</div>
	);
};

export default About;