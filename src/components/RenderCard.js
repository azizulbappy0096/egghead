import React from "react"
import { Card } from "react-bootstrap"


function RenderTopics ({topics}) {
    return(
        <ul className="list-unstyled m-0">
            {topics.map((topic, index) => (
                <li key={index}>
                    {topic.image && (<Card className="flex-row align-items-center" style={{border: "none"}}>
                            <Card.Img src={topic.image} alt={topic.title}
                               style={{height: 50, width: 50}}
                                />
                                <Card.Body className="py-2">
                                    <Card.Title className="custom-h2">
                                        {topic.title}
                                    </Card.Title>
                                    <Card.Subtitle className="subtitle custom-h3 font-weight-normal">
                                        <time> {topic.subtitle} </time>
                                    </Card.Subtitle>
                                </Card.Body>
                        </Card>)
                    }
                    {!topic.image && (
                        <Card.Title className="custom-h2">
                        <span className="mr-2 font-weight-normal"> {index + 1} </span>  {topic.title}
                        </Card.Title>
                    )}
                </li>
            ))}
        </ul>
    )
}

function RenderCard ({data, col, direction, text, border}) {
    return(
        <div className={`col-12 ${col ? col : "col-lg-4"} px-md-1 mb-2`}>
            <Card className={`h-100 flex-${direction} align-items-center p-2 ${!border && "border-0"}`}>
            {data.image && <Card.Img 
                src={data.image}
                alt={data.title}
                className="align-self-center pt-2"
                style={{
                    objectFit: "contain",
                    width: "150px",
                   
                  }}
            />}
            <Card.Body >
            {data.subtitle && (
                <Card.Subtitle className={`${text ? text : "text-center"} text-uppercase subtitle mt-2`}>
                {data.subtitle}
            </Card.Subtitle>
            )}
            <Card.Title className={`${text ? text : "text-center"} text-capitalize mt-2`}>
                {data.title}
            </Card.Title>
            {data.author && (
                <Card.Subtitle className={`${text ? text : "text-center"} subtitle font-weight-normal mt-2 mb-2`}>
                {data.author}
            </Card.Subtitle>
            )}
            {data.summary && <Card.Text className="summary">
                {data.summary}
                </Card.Text>}
                {data.topics && <RenderTopics topics={data.topics} />}
            </Card.Body>
        </Card>
        </div>
    )
}

export default RenderCard