import React from 'react'
import RenderCard from './RenderCard'

const staffData = [
    {
        subtitle: "FRESH COURSE",
        title: "Accessible Cross-Browser CSS Form Styling",
        author: "Stephanie Eckles・1h 52m・Course",
        image: "/images/staffCss.webp"
    },
    {
        title: "Netlify Serverless Functions and Hasura",
        subtitle: "LEARN SERVERLESS",
        author: "Jason Lengstorf・1h 27m・Course",
        image: "/images/staffNetlify.webp"
    },
    {
        title: "Declarative UIs without CSS with elm-ui",
        subtitle: "LAYOUT DESIGN",
        author: "Flavio Corpa ・1h 27m・Course",
        image: "/images/staffElem.webp"
    },
    {
        title: "Web Development Essentials",
        subtitle: "PRACTICE MAKES PERFECT",
        author: "",
        topics: [
            {
                title: "How to Contribute to an Open Source Project on GitHub",
                author: "Kent C. Dodds・38m ・Course",
                image: "/images/staffGithub.webp"
            },
            {
                title: "Fix Common Git Mistakes",
                author: "Chris Achard・44m・Course",
                image: "/images/staffGitMistake.webp"
            },
            {
                title: "Debug the DOM in Chrome with the Devtools Elements panel",
                author: "Mykola Bilokonsky・25m・Course",
                image: "/images/staffDevTool.webp"
            },
            {
                title: "GraphQL Query Language",
                author: "Mykola Bilokonsky・25m・Course",
                image: "/images/staffGraphql.webp"
            },
        ]
    },
    {
        title: "Develop Accessible Web Apps with React",
        subtitle: "ACCESSIBLE REACT APPLICATIONS",
        author: "Erin Doyle・1h 28m・Course",
        image: "/images/staffReact.webp"
    },
    {
        title: "Start Building Accessible Web Applications Today",
        subtitle: "ACCESSIBLE PORTFOLIO PIECES",
        author: "Marcy Sutton・2h 7m ・ Course",
        image: "/images/staffApp.webp"
    },
    {
        title: "Optimize Daily Workflows",
        summary: "Humans were never meant to repeat joyless tasks in a precise manner, over and over and over. Computers are meant precisely for these types of tasks. Automation is all about saving you time — and these courses are well worth yours. Enjoy!",
        topics: [
            {
                title: "Advanced Bash Automation for Web Developers",
                author: "Cameron Nokes・ Course",
                image: "/images/staffAuto.webp"
            },
            {
                title: "Regex in Javascript",
                author: "Joe Maddalone・ Course",
                image: "/images/staffRegex.webp"
            },
            {
                title: "Use Grep for Fast Search from the Command Line",
                author: "Bonnie Eisenman・ Course",
                image: "/images/staffGrep.webp"
            },
            {
                title: "Wrangle your terminal with tmux",
                author: "Bonnie Eisenman・ Course",
                image: "/images/staffTmux.webp"
            },
            {
                title: "Productive Git for Developers",
                author: "Juri Strumpflohner・ Course",
                image: "/images/staffProduction.webp"
            },
        ]
    }
]

function StaffPicks() {
    return (
        <div className="container-fluid mt-5 pt-4 renderCard">
            <h2 className="h2">Staff Picks and Favorites</h2>
            <div className="row px-2">
                {staffData.map((data, index) => <RenderCard key={index} data={data} col="col-md-4" />)}
            </div>
        </div>
    )
}

export default StaffPicks
