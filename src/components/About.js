import React from 'react';
import headshot from '../images/Headshot.jpeg'

const About = () => {
    return (
    <section id="about">
        <h3>About Me</h3>
        <img src={headshot} height="450px" width="450px" alt="Strapping young man" />
        <br></br>
        <main>
            I'm just a simple guy living in rural Illinois with an interest in computers. I am a veteran, and I consider myself a life-long learner. I served three-and-a-half years in the infantry, and I was stationed out of Schofield Barracks, Hi. Afterwards, I began to pursue a career in Education. I received my Bachelor's Degree in History with a minor in French. After doing some assistant teaching in Ribérac, France, I decided to shift career paths towards programming. Besides the things that I've already mentioned, I've also worked in steel mills, warehouses, restaurants and retail, so I'm a hard worker with communication skills!
        </main>
    </section>
    )
}

export default About