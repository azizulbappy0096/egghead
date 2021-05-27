import React from 'react'
import RenderCard from "./RenderCard"

const data = {
    intro: {
        title: "Start Learning Here",
        subtitle: "INTRODUCTIONS",
        summary: "These courses will get you started building real-world applications with these tools. They are all excellent introductions if you want to learn something new today.",
        topics: [
            {
                title: "The Beginner's Guide to React",
                subtitle: "Kent C. Dodds・2h 27m ・Course",
                image: "/images/introReact.webp"
            },
            {
                title: "CSS Fundamentals",
                subtitle: "Tyler Clark・33m・Course",
                image: "/images/introCss.webp"
            },
            {
                title: "The Beginner's Guide to Figma",
                subtitle: "Joe Previte・ Course",
                image: "/images/introFigma.webp"
            },
            {
                title: "Up and running with Svelte 3",
                subtitle: "Tomasz Łakomy・26m ・Course",
                image: "/images/introSvelte.webp"
            },
            {
                title: "Develop Basic Web Apps with Vue.js",
                subtitle: "Greg Thoman・16m ・Course",
                image: "/images/introVue.webp"
            },
            {
                title: "Write Your First Program with the Rust Language",
                subtitle: "Pascal Precht・19m ・Course",
                image: "/images/introRust.webp"
            },
        ]
    },
    css: {
        title: "Design with Tailwind CSS Masterclass",
        subtitle: "WRITE MODERN CSS",
        author: "Adam Wathan・3h 4m・Course",
        image: "/images/modernCss.webp",
        topics: [
            {
                title: "Introduction to Tailwind and the Utility First Workflow"
            },
            {
                title: "Design and Implement Common Tailwind Components"
            },
            {
                title: "Build a Responsive Navbar with Tailwind"
            },
            {
                title: "Build and Style a Dropdown in Tailwind"
            },

        ]
    },
    researcPanel: {
        title: "React State Management in 2021",
        subtitle: "RESEARCH PANEL",
        image: "/images/reactState.webp",
        topics: [
            {
                title: "Using Redux in Modern React Apps with Mark Erikson"
            },
            {
                title: "XState for State Management in React Apps with David Khourshid"
            },
            {
                title: "State Management in React with Chance Strickland"
            },
            {
                title: "Using Recoil to Manage Orthogonal State in React Apps with David McCabe"
            },
            {
                title: "State Management in React with Christopher Chedeau"
            },
            {
                title: "State Management in React with Paul Henschel"
            },
            {
                title: "Managing Complex State in React with Jared Palmer"
            },
            {
                title: "Using react-query to Manage Server Data and Cache with Tanner Linsley"
            },
        ]
    }
}

function CourseAndTopics() {
    return (
        <div className="container-fluid mt-5 pt-4">
            <h2 className="h2">Popular Courses &amp; Topics</h2>
            <div className="row px-2">
                <RenderCard data={data.intro} />
                <RenderCard data={data.css} />
                <RenderCard data={data.researcPanel} />
            </div>
        </div>
    )
}

export default CourseAndTopics
