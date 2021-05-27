import React from "react";
import { Card } from "react-bootstrap";

const talksData = [
  {
    id: 1,
    title: "Concurrent React from Scratch",
    subtitle: "MENTAL MODELS FOR CONCURRENT REACT",
    author: "Shawn Wang・36m",
    summary:
      "In this talk, we’ll create an effective mental model of Concurrent React by building a tiny clone of React! We will start with a blank JS file and learn about how React renders components, schedules Time-Slicing updates with a Work Loop, and more!",
    image: "/images/shawn.webp",
  },
  {
    id: 2,
    title: "Drawing the Invisible: React Explained ",
    subtitle: "VISUALIZE REACT THROUGH METAPHOR",
    author: "Maggie Appleton・36m",
    summary:
      "A guide to the fundamentals of React explained through five visual metaphors. From component trees to state, Maggie explains the analogies and metaphorical comparisons that helped her 'get' React for the first time.",
    image: "/images/maggie.webp",
  },
];

const RenderTalks = ({ data }) => {
  return (
    <div className="col-12 col-lg-6 flex-grow-1  mt-2 mt-lg-0">
      <Card className="flex-sm-row align-items-center justify-content-center p-4 h-100">
        <Card.Img
          variant="top"
          src={data.image}
          alt={data.author}
          className="rounded"
          style={{
            objectFit: "contain",
            width: "150px",
          }}
        />
        <Card.Body className="text-center text-sm-left">
          <Card.Subtitle className="subtitle">
            <span> {data.subtitle} </span>
          </Card.Subtitle>
          <Card.Title className="mt-2">{data.title}</Card.Title>
          <Card.Subtitle className="subtitle font-weight-normal">
            <span> {data.author} </span>
          </Card.Subtitle>
          <Card.Text className="summary mt-2">{data.summary}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

function Events() {
  return (
    <div className="container-fluid mt-5 pt-4 ">
      <h2 className="h2">egghead Talks and Events</h2>
      <div className="row mt-4">
        <div className="col-12 col-lg-9 flex-grow-1">
          <Card
            className="flex-sm-row-reverse p-3 align-items-center h-100"
            style={{
              border: "1px solid rgb(165 154 154 / 13%)",
              borderRadius: ".5rem",
            }}
          >
            <Card.Img
              className="rounded"
              src="/images/eventVideo.webp"
              style={{
                objectFit: "fill",
                width: "250px",
                border: "1px solid #f5f0f0",
              }}
            />
            <Card.Body className="text-center text-sm-left">
              <Card.Subtitle
                className="text-uppercase text-muted mt-1"
                style={{ fontSize: "0.7rem", fontWeight: 600 }}
              >
                Optimize your Learning
              </Card.Subtitle>
              <Card.Title className="mt-1">
                {" "}
                Learning Tips Every Developer Should Know{" "}
              </Card.Title>
              <Card.Subtitle
                className="subtitle font-weight-normal mt-1"
                style={{ fontSize: "0.7rem", fontWeight: 400 }}
              >
                Ceora Ford
              </Card.Subtitle>
              <div className="mt-2">
                <Card.Text className="summary">
                  Learning will be a constant in your career no matter what you
                  decide to do, especially if you are breaking into tech.
                </Card.Text>
                <Card.Text className="summary">
                  There are a number of tried and true methods that will allow
                  you to learn more efficiently so that you can keep up with the
                  industry. These evergreen methods will serve you well no
                  matter your level of expertise.
                </Card.Text>
              </div>
            </Card.Body>
          </Card>
        </div>
        <div className="col-12 col-lg-3 mt-2 mt-lg-0">
          <Card className="events__card flex-row flex-lg-column align-items-lg-end p-lg-2 ">
            <Card.Body>
              <Card.Subtitle className="text-uppercase text-muted subtitle">
                Upcoming Events
              </Card.Subtitle>
              <Card.Title className="text-white mt-3">
                Intro to Cloudflare Ecosystem w/ Kristian Freeman
              </Card.Title>
              <Card.Subtitle className="subtitle font-weight-normal mt-1">
                <time>June 8th @ 12PM PT</time>
                <button className="bell">
                  <i className="fas fa-bell"></i>
                </button>
              </Card.Subtitle>
            </Card.Body>
            <div className="background w-100"></div>
          </Card>
        </div>
      </div>
      <div className="row mt-4">
        {talksData.map((data) => (
          <RenderTalks key={data.id} data={data} />
        ))}
      </div>
    </div>
  );
}

export default Events;
