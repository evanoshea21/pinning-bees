"use client";
import React from "react";
import classes from "../styles/Work.module.css";

const description1: string =
  "Pinning Bees case studies shows extremely consistent results, with 100% of pins receiving at least 9,000 impressions and ranging to 25k impressions.";
const description2: string =
  "Our flagship content format is this stunning 3D rendering of your product displayed included in a scroll-stopping animation video.";
const description3: string =
  "This is another case study where we received 19 million impressions in less than 3 months. This is a result of our data-driven strategies.";

const Work = () => {
  const [media, setMedia] = React.useState(1);

  return (
    <div className={classes.main} id="CaseStudies">
      <h1 className={classes.mainHeader}>Our Work</h1>
      <p className={classes.subheader}>Our results speak for themselves.</p>

      <div className={classes.content}>
        {/* MEDIA PANE */}
        <div className={classes.left}>
          <p className={classes.explainerPara}>
            {media === 1 && description1}
            {media === 2 && description2}
            {media === 3 && description3}
          </p>
          <div className={classes.media}>
            {/* MEDIA */}
            <div className={classes.vimeoVid}>
              <div
                style={{
                  padding: "56.25% 0 0 0",
                  position: "relative",
                  marginTop: "auto",
                  marginBottom: "auto",
                }}
              >
                <iframe
                  src="https://player.vimeo.com/video/834939088?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  style={{
                    position: "absolute",
                    top: "0",
                    left: "0",
                    width: "100%",
                    height: "100%",
                  }}
                  title="SodaFInal (3)"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
        {/* SELECTION PANE */}
        <div className={classes.right}>
          <div
            className={classes.row1}
            onClick={() => setMedia(1)}
            style={{
              backgroundColor: media === 1 ? "var(--red)" : "",
              color: media === 1 ? "var(--grey)" : "",
            }}
          >
            <div className={classes.header}>
              <h2>Viral Pins</h2>
              <img src="/icons/arrow-ur.png" alt="arrow"></img>
            </div>
            <p>{description1}</p>
          </div>
          <div
            className={classes.row2}
            onClick={() => setMedia(2)}
            style={{
              backgroundColor: media === 2 ? "var(--red)" : "",
              color: media === 2 ? "var(--grey)" : "",
            }}
          >
            <div className={classes.header}>
              <h2>3D Rendering</h2>
              <img src="/icons/arrow-ur.png" alt="arrow"></img>
            </div>
            <p>{description2}</p>
          </div>
          <div
            className={classes.row3}
            onClick={() => setMedia(3)}
            style={{
              backgroundColor: media === 3 ? "var(--red)" : "",
              color: media === 3 ? "var(--grey)" : "",
            }}
          >
            <div className={classes.header}>
              <h2>Case Study</h2>
              <img src="/icons/arrow-ur.png" alt="arrow"></img>
            </div>
            <p>{description3}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
