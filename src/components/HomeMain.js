import React from "react";
import Image from "next/image";
import Gallery from "./Gallery";

// dummy data
const resourceData = [
    {
        id: 1,
        name: "React",
        image: "/images/react.webp"
    },
    {
        id: 2,
        name: "JvaScript",
        image: "/images/js.webp"
    },
    {id: 3,
        name: "CSS",
        image: "/images/css.webp"
    },
    {id: 4,
        name: "Angular",
        image: "/images/angular.webp"
    },
    {id: 5,
        name: "Node",
        image: "/images/node.webp"
    },
    {id: 6,
        name: "TypeScript",
        image: "/images/ts.webp"
    },
    {id: 7,
        name: "GraphQL",
        image: "/images/graphql.webp"
    },
    {id: 8,
        name: "AWS",
        image: "/images/AWS.webp"
    },
]

const RenderResource = ({ data }) => {
  return (
    <li>
      <div className="w-full d-flex flex-column align-items-center">
      <div className="">
      <Image
        src={data.image}
        alt="Picture of React logo"
        className="align-self-center"
        height={50}
        width={50}
        layout="fixed"
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
                <h2 className="text-capitalize text-white mb-4 display-6">
                  Your Ultimate Guide to Understanding DOM Events
                </h2>
                <div className="d-flex align-items-center justify-content-start md:justify-content-center mb-4">
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
      <div className="container-fluid mt-5">
        <h2 className="text-center">Browse Curated Developer Resources on the Best Tools</h2>
        <ul className="list-unstyled d-grid grid-8 grid-4 mt-5">
            {resourceData.map(data => <RenderResource key={data.id} data={data} />)}
        </ul>
      </div>
    </main>
  );
}

export default HomeMain;
