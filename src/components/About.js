import React from 'react';
import headshot from '../images/Headshot.jpeg'

const About = () => {
    return (
    <section>
        <h3>About me</h3>
        <img src={headshot} height="200px" width="210px" alt="Strapping young man" />
        <main>
            I'm just a simple guy living in rural Illinois with an interest in computers. I am a veteran. I served three-and-a-half years in the infantry stationed out of Schofield Barracks, Hi. Afterwards, I began to pursue a career in education. I received my Bachelor's Degree in History with a minor in French. After doing some assistant teaching in Ribérac, France, I decided to shift careers towards programming.
        </main>
    </section>
    )
}

export default About