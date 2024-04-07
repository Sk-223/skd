import React from 'react';
import profile from '../../images/profile.png';

const About = () => {
  return (
    <div>
      <h2>Hello 👋</h2>
      <img src={profile} alt='photo of Sharon Kaufman' width={'200px'} height={'auto'}/>
      <p>
      I'm a passionate software engineer dedicated to improving people's lives through innovative solutions. As a child, I enjoyed creating art and designing, which naturally led me to pursue UX/UI design. I became certified and learned the importance of user-centric design. However, I wanted to have a greater impact and ownership, so I started learning to code. The challenge and creativity of the field drew me in, and I fell in love with it.

Currently, I'm participating in a fellowship called Formation, dedicating over 40 hours a week to learning and practicing data structures, algorithms, computer science, and system design fundamentals. This program offers instruction from industry-leading professionals from companies like Google, Meta, Netflix, and more.

Despite coming from a non-traditional background, I'm well-equipped to handle pressure in fast-paced environments and collaborate effectively with cross-functional teams of UX and software engineers. I'm always eager to learn and improve my skills to make a meaningful impact on users' lives through technology.

—Based in Pittsburgh, PA.
      </p>
    </div>
  );
}

export default About;
