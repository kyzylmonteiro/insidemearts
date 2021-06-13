import React from "react";
import { Row, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import Fade from "react-reveal/Fade";
import BlockContent from "@sanity/block-content-to-react";

// const serializers = {
//   types: {
//     code: (props) => (
//       <pre data-language={props.node.language}>
//         <code>{props.node.code}</code>
//       </pre>
//     ),
//   },
// }

const ImageSection = (props) => {
  return (
    <div >
      <div
        className="ImageSectionHeading"
        style={{ paddingTop: "10%", paddingBottom: "50px" }}
      >
        <h2 className="sectionHeading">{props.heading}</h2>
      </div>
      <div className="ImageSectionRow">
        <div className="ImageSectionContent">
          <Fade up distance="20%" duration={1000}>
            {/* <p
              className="sectionContent fontSection"
              style={{ textAlign: "justify", textJustify: "inter-word" }}
            >
              {props.content}
            </p> */}

            {/* {props.content.para.map((item) => {
              return (
                <div>
                  {item.heading !== "" && <h3 style={{paddingTop:"2vh"}}>{item.heading}</h3>}
                  <p
                    className="sectionContent fontSection"
                    style={{ textAlign: "justify", textJustify: "inter-word" }}
                  >
                    {item.content}
                  </p>
                </div>
              );
            })} */}
            <div className="sectionContent fontSection"
                    style={{ textAlign: "justify", textJustify: "inter-word",whiteSpace: "pre-line" }} >
            <BlockContent  blocks={props.content} serializers={{hardBreak:false}} hardBreak={{}} imageOptions={{w: "350"}} projectId="6zdwq6tr" dataset="production"/>
            </div>
            {/* {props.content.pointsContent.map((pt) => (
              <div>
                {pt.heading !== "" && <h4 style={{paddingTop:"2vh"}}>{pt.heading}</h4>}
                {pt.points[0] !== "" && (
                  <ul>
                    {pt.points.map((item) => {
                      return <li>{item}</li>;
                    })}
                  </ul>
                )}
              </div>
            ))} */}
          </Fade>
          {/* </Col>
        <Col className="justify-content-center" md={4}> */}
        </div>
        {props.imagesrc && (
          <div className="imageSpacerImageSection">
            <Fade
              up
              distance="20%"
              duration={1000}
              className="react-revealImage"
            >
              <Image
                src={props.imagesrc}
                rounded
                fluid
                style={{
                  padding: "30px",
                }}
              />
            </Fade>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageSection;
