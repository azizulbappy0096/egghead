import Image from "next/image";
import React from "react";
import { Button, Card } from "react-bootstrap";

function Events() {
  return (
    <div className="container-fluid mt-5 pt-4 ">
      <h3 className="h3">egghead Talks and Events</h3>
      <div className="row mt-4">
        <div className="col-12 col-lg-9 flex-grow-1">
          <Card
            className="flex-sm-row-reverse p-3 align-items-center h-100"
            style={{border: "1px solid rgb(165 154 154 / 13%)",
                borderRadius: ".5rem"}}
          >
            <Card.Img
              className="rounded"
              src="/images/eventVideo.webp"
              style={{ objectFit: "fill", width: "250px", border: "1px solid #f5f0f0" }}
            />
            <Card.Body className="text-center text-sm-left">
              <Card.Subtitle
                className="text-uppercase text-muted mt-1"
                style={{ fontSize: "0.7rem", fontWeight: 600 }}
              >
                Optimize your Learning
              </Card.Subtitle>
              <Card.Title className="mt-1"> Learning Tips Every Developer Should Know </Card.Title>
              <Card.Subtitle
                className="text-muted mt-1"
                style={{ fontSize: "0.7rem", fontWeight: 400 }}
              >
                Ceora Ford
              </Card.Subtitle>
              <div className="mt-2">
              <Card.Text>
              Learning will be a constant in your career no matter what you decide to do, especially if you are breaking into tech.
              </Card.Text>
              <Card.Text>
              There are a number of tried and true methods that will allow you to learn more efficiently so that you can keep up with the industry. These evergreen methods will serve you well no matter your level of expertise.
              </Card.Text>
              </div>
            </Card.Body>
          </Card>
        </div>
        <div className="col-12 col-lg-3 mt-2 mt-lg-0">
            <Card className="events__card flex-row flex-lg-column align-items-lg-end p-lg-2 ">
                <Card.Body>
                <Card.Subtitle className="text-uppercase text-muted subtitle">Upcoming Events</Card.Subtitle>
                <Card.Title className="text-white mt-3">Intro to Cloudflare Ecosystem w/ Kristian Freeman</Card.Title>
                <Card.Subtitle>
                    <time className="subtitle mt-1">June 8th @ 12PM PT</time>
                    <button className="bell">
                        <i className="fas fa-bell"></i>
                    </button>
               </Card.Subtitle>
              
                </Card.Body>
                <div className="background w-100">

                </div>
            
               
            </Card>
        </div>
      </div>
    </div>
  );
}

export default Events;
