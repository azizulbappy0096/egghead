import React from "react";
import Image from "next/image";
import Gallery from "./Gallery";
import Events from "./Events";
import CourseAndTopics from "./CourseAndTopics";
import StaffPicks from "./StaffPicks";
import DigitalGarden from "./DigitalGarden";
import RenderCard from "./RenderCard";

// dummy data
const resourceData = [
  { id: 1, name: "React", image: "/images/react.webp" },
  { id: 2, name: "JvaScript", image: "/images/js.webp" },
  { id: 3, name: "CSS", image: "/images/css.webp" },
  { id: 4, name: "Angular", image: "/images/angular.webp" },
  { id: 5, name: "Node", image: "/images/node.webp" },
  { id: 6, name: "TypeScript", image: "/images/ts.webp" },
  { id: 7, name: "GraphQL", image: "/images/graphql.webp" },
  { id: 8, name: "AWS", image: "/images/AWS.webp" },
];

const buildPortfolioSection = [
  {
    title: "Introduction to Cloudflare Workers",
    subtitle: "PORTFOLIO PROJECT",
    author: "Kristian Freeman",
    summary:
      "Create and deploy a Cloudflare Worker that will examine the request for location data, and render HTML featuring information for the closest concert taking place based on the nearest regional Cloudflare Location.",
    image: "/images/portfolioCloud.webp",
  },
  {
    title: "Create an eCommerce Store with Next.js and Stripe Checkout",
    subtitle: "ACCEPT PAYMENTS AND SELL PRODUCTS",
    author: "Colby Fayock",
    summary:
      "E-commerce is here to stay and as professional developers we need to understand how to build fully custom stores for our clients using the best modern tools available.",
    image: "/images/portfolioStripe.webp",
  },
];

const otherResources = {
  webSevices: {
    title: "Deep Dive into AWS 🤯",
    subtitle: "AMAZON WEB SERVICES",
    summary:
      "Amazon Web Services (AWS) has over 165 services. Not sure where to start? Let these courses guide you through quickly getting up and running on AWS.",
    topics: [
      {
        title: "Build an App with the AWS Cloud Development Kit",
        author: "Tomasz Łakomy・1h 4m・Course",
        image: "/images/otherKit.webp",
      },
      {
        title: "Using DynamoDB with Next.js",
        author: "Lee Robinson・30m・Course",
        image: "/images/otherDynamo.webp",
      },
      {
        title: "DynamoDB: The Node.js DocumentClient",
        author: "Chris Biscardi・17m・Course",
        image: "/images/AWS.webp",
      },
      {
        title: "Intro to DynamoDB",
        author: "Chris Biscardi・15m・Course",
        image: "/images/AWS.webp",
      },
      {
        title: "Learn AWS Lambda from scratch",
        author: "Tomasz Łakomy・21m・Course",
        image: "/images/AWS.webp",
      },
      {
        title:
          "Use AWS Billing & Cost Management Dashboard to keep your AWS bill to minimum",
        author: "Tomasz Łakomy・4m・Course",
        image: "/images/AWS.webp",
      },
      {
        title:
          "Converting a Serverless App to run on AWS Lambda and DynamoDB with Serverless Framework",
        author: "Chris Biscardi・42m・Course",
        image: "/images/AWS.webp",
      },
    ],
  },
  community: {
    subtitle: "COMMUNITY RESOURCE",
    title: "Learn Something New",
    summary:
      "A Community Resource is a course that is free to access for all. The instructor of this course requested it to be open to the public.",
    topics: [
      {
        title: "Get Started with Reason",
        author: "Nik Graf・1h 13m・Course",
        image: "/images/otherGet.webp",
      },
      {
        title: "Introduction to State Machines Using XState",
        author: "Kyle Shevlin・53m・Course",
        image: "/images/otherX.webp",
      },
      {
        title: "Immutable JavaScript Data Structures with Immer",
        author: "Michel Weststrate・59m・Course",
        image: "/images/otherImmer.webp",
      },
      {
        title: "Practical Git for Everyday Professional Use",
        author: "Trevor Miller・1h ・Course",
        image: "/images/otherGit.webp",
      },
      {
        title: "Build an App with React Suspense",
        author: "Michael Chan・1h 23m・Course",
        image: "/images/otherSuspence.webp",
      },
      {
        title:
          "Scalable Offline-Ready GraphQL Applications with AWS AppSync & React",
        author: "nader dabit・64m・Course",
        image: "/images/otherAppSync.webp",
      },
      {
        title: "GraphQL Data in React with Apollo Client",
        author: "Nik Graf・23m・Course",
        image: "/images/otherApollo.webp",
      },
    ],
  },
  extraCard: [
    {
      title: "Video Analysis App with NextJS and Symbl.ai",
      subtitle: "CREATE AI-POWERED TRANSCRIPTS",
      author: "Vladimir Novick・38m・Course",
      image: "/images/otherSymbl.webp",
    },
    {
      title: "Headless WordPress with GraphQL",
      subtitle: "CONTENT MANAGEMENT SYSTEM",
      author: "Kevin Cunningham・59m・Course",
      image: "/images/otherWordpress.webp",
    },
  ],
};

const RenderResource = ({ data }) => {
  return (
    <li>
      <div className="w-full d-flex flex-column align-items-center">
        <div className="">
          <Image
            src={data.image}
            alt="Picture of React logo"
            className="align-self-center"
            height="50"
            width="50"
            layout="intrinsic"
          />
        </div>
        <p className="align-self-center text-bold mt-2"> {data.name} </p>
      </div>
    </li>
  );
};

function HomeMain() {
  return (
    <main className="mt-5">
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <h5 className="text-capitalize"> What's new</h5>
            <section className="homeMain__jumbotron d-flex flex-column flex-md-row md:justify-content-between align-items-center rounded px-4 py-5 ">
              <div className="flex-grow-1">
                <Image
                  src="/images/image.webp"
                  alt="Jumbotron"
                  height={250}
                  width={250}
                  layout="fixed"
                />
              </div>
              <div className="jumbotron__inner ml-4 text-center text-md-left">
                <h6 className="text-uppercase mb-2 title">
                  LISTEN AND RESPOND TO EVENTS
                </h6>
                <h2 className="text-capitalize text-white mb-4 display-6 h2">
                  Your Ultimate Guide to Understanding DOM Events
                </h2>
                <div className="d-flex align-items-center justify-content-md-start justify-content-center mb-3">
                  <Image
                    src="/images/jumbotronAuthor.webp"
                    className="rounded-circle image-fluid"
                    alt="Author"
                    height={30}
                    width={30}
                  />
                  <span className="ml-2 text-white name">Alex Reardon</span>
                </div>
                <h6 className="text-white summary">
                  Whether you are just starting out with frontend engineering or
                  you are a seasoned veteran, this course will provide a strong
                  understanding of the DOM Event system.
                </h6>
              </div>
            </section>
          </div>
        </div>
      </div>
      <Gallery />
      <div className="container-fluid mt-5 pt-4 ">
        <h3 className="text-center h3">
          Browse Curated Developer Resources on the Best Tools
        </h3>
        <ul className="list-unstyled d-grid grid-col p-3 p-md-5">
          {resourceData.map((data) => (
            <RenderResource key={data.id} data={data} />
          ))}
        </ul>
      </div>
      <Events />
      <CourseAndTopics />
      <StaffPicks />
      <DigitalGarden />
      <div className="container-fluid mt-5 pt-4">
        <h2 className="h2"> Build a New Portfolio Project </h2>
        <div className="row mt-2">
          {buildPortfolioSection.map((data, index) => (
            <RenderCard
              key={index}
              data={data}
              col="col-md-6"
              direction="md-row"
              text="left"
            />
          ))}
        </div>
      </div>
      <div className="container-fluid mt-5 pt-4">
        <div className="row">
          <RenderCard data={otherResources.webSevices} 
          col="col-lg-4"
          direction="md-column"
          text="left"
          />
          <RenderCard data={otherResources.community} 
          col="col-lg-4"
          direction="md-column"
          text="left"
          />
          <div className="col-auto">
              <div className="row">
              {otherResources.extraCard.map((data, index) => (
            <RenderCard
              key={index}
              data={data}
              col=" "
              direction="md-column"
              text="text-center"
              border={true}
            />
          ))}
              </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default HomeMain;
