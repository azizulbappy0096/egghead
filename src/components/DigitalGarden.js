import React from "react";
import { Card } from "react-bootstrap";
import RenderCard from "./RenderCard";

const innerCard = [
  {
    title: "Create a Digital Garden CLI with Rust",
    subtitle: "CONTENT AUTHORING",
    author: "Chris Biscardi・1h 10m",
    image: "/images/digitalRust.webp",
  },
  {
    title: "Build a Site From Scratch with Next.js",
    subtitle: "CREATE A PORTFOLIO",
    author: "Tomasz Łakomy・37m",
    image: "/images/digitalNext.webp",
  },
  {
    title: "Build a Developer Blog with Gatsby",
    subtitle: "START A BLOG",
    author: "Laurie Barth・35m",
    image: "/images/digitalGatsby.webp",
  },
];

function DigitalGarden() {
  return (
    <div className="container-fluid mt-5 pt-4">
      <div className="row">
        <div className="col">
          <Card className="p-4 flex-md-row align-items-center align-items-md-start border-0">
            <Card.Img
              src="/images/digitalGarden.webp"
              className=""
              style={{
                height: "250px",
                width: "250px",
              }}
            />
            <Card.Body>
              <Card.Subtitle
                className="text-uppercase subtitle"
                style={{ color: "rgba(21,128,61,1)" }}
              >
                LEARN IN PUBLIC WITH A DIGITAL GARDEN
              </Card.Subtitle>
              <h2 className="mt-2 h2">
                Digital Gardening for Developers
              </h2>
              <Card.Text className="summary">
                Success in software development requires deeply layered,
                high-value communication. If you are serious about making an
                impact in your coding career, you should get good at writing
                words as well as code. This an agreed-upon quality for
                developers. And it all starts with having your own digital
                garden.
              </Card.Text>
              <Card.Text className="font-wight-bold summary">
                The phrase "digital garden" is a metaphor for thinking about
                writing and creating that focuses less on the resulting
                "showpiece" and more on the process, care, and craft it takes to
                get there. — <Card.Link href="#">Joel Hooks</Card.Link>
              </Card.Text>
              <div className="row">
                {innerCard.map((data, index) => (
                  <RenderCard data={data} key={index} col="col-12 col-lg-4" border={true} />
                ))}
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default DigitalGarden;
