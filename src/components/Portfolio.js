import React from 'react';
import mongooseImg from '../images/mongoose-img.jpg';
import sequelizeImg from '../images/sequelize-img.jpg';
import groupOneImg from '../images/group-project-1-img.jpg';
import weatherImg from '../images/weather-img.jpg';
import blogImg from '../images/project2-splash2.jpg';
import regexImg from '../images/regex-img.jpg';

const Portfolio = () => {
    return (
        <section id="portfolio">
            <h3>Portfolio</h3>
            <main>
                <h3>These are some of the apps that I have created!</h3>
                <section className="portfolio-section">
                    <img src={mongooseImg} alt="A request being fufilled on Postman" height="500px" width="1000px" />
                    <br></br>
                    <p>This is an app that I worked on to display my NoSQL/Mongoose skills. Theres only a back-end, but if you click below, you can see a demonstration of the routes in Postman</p>
                    <a href="https://www.youtube.com/watch?v=L5iGyYex5sU">Video Demonstration!</a>
                    <br></br>
                    <a href="https://github.com/rjpinks/18-social-media-nosql">Click here to see the repo!</a>
                    <br></br>
                </section>
                <br></br>
                <section className="portfolio-section">
                    <img src={blogImg} alt="A website with users that are special to Ryan, but also some boxers" height="500px" width="1000px" />
                    <br></br>
                    <p>This was a project that I worked on to introduce myself to Handlebars Template Engine. It also uses SQL, but it does not implement an ORM. It is set up similiarly to what a blog or forum would look like.</p>
                    <a href="https://github.com/rjpinks/user-management-app">Click here to check out the repo!</a>
                    <br></br>
                </section>
                <br></br>
                <section className="portfolio-section">
                    <img src={groupOneImg} alt="Really cool website that millenials would love!" height="500px" width="750px" />
                    <br></br>
                    <p>This is an app that I created with some of my collegues. This was the first time that I worked in a group. It gave me tons of Github experience as well as learning how fetch calls work!</p>
                    <a href="https://github.com/Beers-for-Jeers-III/dad-joke-pairings">Click here to check out the repo!</a>
                    <br></br>
                </section>
                <br></br>
                <section className="portfolio-section">
                    <img src={sequelizeImg} alt="A request being fulfilled on Postman" height="500px" width="1000px" />
                    <br></br>
                    <p>This is an app that I added on to. I was given some starter code, and I needed to seed a SQL database using an ODM. Additionally, I needed to finish some calls to query the database. Once again, it is only the back-end, so I included a link to a video demonstration!</p>
                    <a href="https://github.com/rjpinks/13-ecommerce-backend">Click here to go to the repo!</a>
                    <br></br>
                    <a href="https://www.youtube.com/watch?v=kHsmDWrRRJs">The video demonstration!</a>
                    <br></br>
                </section>
                <br></br>
                <section className="portfolio-section">
                    <img src={weatherImg} alt="Screenshot of a cool website that has Early 2000s Taco Bell Water CupTM colors" height="500px" width="1000px" />
                    <br></br>
                    <p>This is an app that will give you the weather of a city that you search. It uses 2 different APIs, and it also implements localStorage! This is another app that I worked on alone. Truthfully, the styling is a little rough, but I had just recently started trying to use things such as Google Fonts.</p>
                    <a href="https://github.com/rjpinks/06-weather-app">Click here to check out the repo!</a>
                    <br></br>
                </section>
                <section className="portfolio-section">
                    <img src={regexImg} alt="A markdown file that explains /^([a-z0-9_.-]+)@([\da-z.-]+).([a-z.]{2,6})$/" height="500px" width="1000px" />
                    <br></br>
                    <p>This isn't so much an app, but it was important none-the-less. This is an explanation of a regex algorithm. I imagine these will be useful in my future when trying to verify user input.</p>
                    <a href="https://github.com/rjpinks/17-regex-tutorial">Click here to check out the repo!</a>
                </section>
            </main>
        </section>
    )
}

export default Portfolio