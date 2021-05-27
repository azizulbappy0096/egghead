import React from "react";
import { Card } from "react-bootstrap";

const RenderArticleCard = ({ data }) => {
  return (
    <Card
      className={`flex-sm-row p-3 flex-grow-1 align-items-center ${
        data.id > 1 && "mt-2"
      }`}
    >
      <Card.Img
        className="rounded"
        src={data.image}
        style={{ objectFit: "fill", height: "150px", width: "150px" }}
      />
      <Card.Body className="text-center text-sm-left">
        <Card.Subtitle className="text-uppercase subtitle mt-1">
          {" "}
          {data.subtitle}{" "}
        </Card.Subtitle>
        <Card.Title className="mt-1"> {data.title} </Card.Title>
        <Card.Subtitle
          className="summary font-weight-normal mt-1"
          style={{ fontSize: "0.7rem", fontWeight: 400 }}
        >
          {" "}
          {data.author}{" "}
        </Card.Subtitle>
      </Card.Body>
    </Card>
  );
};

function Gallery() {
  const articleCardData = [
    {
      id: 1,
      title:
        "How I Built My First SaaS Application with Next.js, Stripe, and Firebase",
      subtitle: "article",
      author: "Parker Landon",
      image: "/images/article1.webp",
    },
    {
      id: 2,
      title: "Building Offline-First Mobile Applications Using MongoDB Realm",
      subtitle: "article",
      author: "Nwani Victory",
      image: "/images/article2.webp",
    },
    {
      id: 3,
      title: "Standing Out as A Non-Traditional Applicant",
      subtitle: "talk",
      author: "Shaundai Person ・14m",
      image: "/images/article3.webp",
    },
  ];

  return (
    <div className="container-fluid mt-2">
      <div className="row">
        <div className="col-12 col-md-6 mb-2 mb-md-0 d-flex flex-column">
          <Card className="align-items-center flex-grow-1">
            <Card.Img
              variant="top"
              src="/images/advanceTs.webp"
              style={{ objectFit: "contain", width: "200px" }}
            />
            <Card.Body className="text-center">
              <Card.Title className="">
                {" "}
                Advanced TypeScript Fundamentals{" "}
              </Card.Title>
              <Card.Subtitle
                className="subtitle mt-1"
                style={{ fontSize: "0.7rem", fontWeight: 400 }}
              >
                {" "}
                Marius Schulz{" "}
              </Card.Subtitle>
              <Card.Text className="mt-3 summary">
                Learn the newest language features TypeScript has to offer.
                Learn how to use optional chaining, const assertions,
                conditional types, and more!
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className="align-items-center mt-2 flex-sm-row flex-grow-1">
            <Card.Img
              src="/images/aws.webp"
              style={{ objectFit: "contain", width: "150px" }}
            />
            <Card.Body className="text-center text-sm-left">
              <Card.Subtitle
                className="subtitle text-uppercase"
                style={{ fontSize: "0.7rem", fontWeight: 600 }}
              >
                {" "}
                Course{" "}
              </Card.Subtitle>
              <Card.Title className="mt-2">
                {" "}
                Deploy Ghost to AWS using RDS and EC2{" "}
              </Card.Title>

              <Card.Text className="mt-3 summary">
                Set up a linux server on AWS EC2 with a relational database (AWS
                RDS) connected to deploy a JavaScript platform to.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-12 col-md-6 d-flex flex-column">
          {articleCardData.map((data) => (
            <RenderArticleCard key={data.id} data={data} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Gallery;
