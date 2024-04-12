import React from 'react';
import './About.css'; 
import logo from "../components/images/Delivery.gif";
import deliveryImage from "../components/images/Team goals.gif";
import defaultImage from "../components/images/defaultImage.jpg";


function About() {
  return (
    <div>
      <h1 id="head1">About Us</h1>
      <div className="grid-container">
        <div className="box">
          <img className=' hover:scale-105' src={logo} alt="Delivery Guy" />
          <div>
            <h2 className="mission-title">Our Mission</h2>
            <p className="mission-text">"Our mission at Mela Thone is to provide a revolutionary platform that connects drivers with users, offering seamless delivery services. We strive to enhance convenience and efficiency in the delivery industry by empowering drivers to showcase their services and enabling users to access reliable and timely delivery solutions."</p>
          </div>
        </div>
        <div className="box">
          <div>
            <h2 className="section-title">Our Story</h2>
            <p className="section-text">"Our journey began with a vision to transform the way delivery services are accessed and utilized. Inspired by the growing need for efficient and reliable delivery solutions, we embarked on a mission to create a platform that caters to the needs of both service providers and consumers. As we continue to grow and evolve, our commitment to revolutionizing the delivery industry remains unwavering."</p>
          </div>
          <img className=' hover:scale-105' src={deliveryImage} alt="Delivery Guy" />
        </div>
      </div>
      
      <main>
        <section id="team-members-container">
          < h2 id="head2">Our Team</h2>
          <div className="team-members">
            <div className="team-member">
              <img className="hover:scale-105" src={defaultImage} alt="Team Member" />
              <h3>Yohannes Tigistu</h3>
              <p>Role: Front-end Developer(Team Leader)</p>
            </div>
            <div className="team-member">
    <img className="hover:scale-105" src={defaultImage} alt="Team Member" />
    <h3>Fikru Demlew</h3>
    <p>Role: Front-end Developer</p>
  </div>
  <div className="team-member">
    <img className="hover:scale-105" src={defaultImage} alt="Team Member" />
    <h3>Meklit Melkamu</h3>
    <p>Role: Front-end Developer</p>
  </div>
  <div className="team-member">
    <img className="hover:scale-105" src={defaultImage} alt="Team Member" />
    <h3>Adey Ebuy</h3>
    <p>Role: Front-end Developer</p>
  </div>
  <div className="team-member">
    <img className="hover:scale-105" src={defaultImage} alt="Team Member" />
    <h3>Kenean Yilma</h3>
    <p>Role: Front-end Developer</p>
  </div>
  <div className="team-member">
    <img className="hover:scale-105" src={defaultImage} alt="Team Member" />
    <h3>Liben Gebremedhin </h3>
    <p>Role: Back-end Developer(Team Leader)</p>
  </div>
  <div className="team-member">
    <img className="hover:scale-105" src={defaultImage} alt="Team Member" />
    <h3>Mecha Temesgen</h3>
    <p>Role: Back-end Developer</p>
  </div>
  <div className="team-member">
    <img className="hover:scale-105  transition " src={defaultImage} alt="Team Member" />
    <h3>Selam Demisse</h3>
    <p>Role: Back-end Developer</p>
  </div>
  <div className="team-member">
    <img className="hover:scale-105" src={defaultImage} alt="Team Member" />
    <h3>Medina Nesro</h3>
    <p>Role: Back-end Developer</p>
  </div>          </div>
        </section>
      </main>
    </div>
  );
}

export default About;
