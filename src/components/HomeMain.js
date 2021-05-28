import React from "react";

// components
import Image from "next/image";
import Gallery from "./Gallery";
import Events from "./Events";
import CourseAndTopics from "./CourseAndTopics";
import StaffPicks from "./StaffPicks";
import DigitalGarden from "./DigitalGarden";
import RenderCard from "./RenderCard";

// dummy data
import {
  resourceData,
  otherResources,
  buildPortfolioSection,
} from "../shared/data";

const RenderResource = ({ data }) => {
  return (
    <li>
      <a href="#" className="text-decoration-none">
        <div className="w-full d-flex flex-column align-items-center">
          <Image
            src={data.image}
            alt="Picture of React logo"
            className="align-self-center"
            height="50"
            width="50"
            layout="intrinsic"
          />

          <p className="align-self-center text-bold mt-2"> {data.name} </p>
        </div>
      </a>
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
                <h6 className="text-uppercase mb-2 subtitle">
                  LISTEN AND RESPOND TO EVENTS
                </h6>
                <h2 className="text-capitalize text-white mb-4 display-6 h2 title">
                  <a href="#" className="text-decoration-none">
                    Your Ultimate Guide to Understanding DOM Events
                  </a>
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
      <div className="container-fluid mt-5 pt-4 renderCard">
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
      <div className="container-fluid mt-5 pt-4 renderCard">
        <div className="row">
          <RenderCard
            data={otherResources.webSevices}
            col="col-lg-4"
            direction="md-column"
            text="left"
          />
          <RenderCard
            data={otherResources.community}
            col="col-lg-4"
            direction="md-column"
            text="left"
          />
          <div className="col-auto">
            <div className="row h-100">
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
