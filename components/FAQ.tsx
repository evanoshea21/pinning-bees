"use client";
import React from "react";
import $ from "jquery";
import Image from "next/image";
import classes from "../styles/FAQ.module.css";

interface Obj {
  [key: number]: string;
}
interface Obj2 {
  [key: number]: boolean;
}

const FAQ = () => {
  const [qHeight, setQHeight] = React.useState<Obj>({
    0: "120px",
    1: "120px",
    2: "120px",
    3: "120px",
    4: "120px",
    5: "120px",
    6: "120px",
    7: "120px",
  });
  const [arrow, setArrow] = React.useState<Obj2>({
    0: true,
    1: true,
    2: true,
    3: true,
    4: true,
    5: true,
    6: true,
    7: true,
  });
  const imageSize = 30;

  function toggleArrow(n: number) {
    setArrow((prev) => {
      let obj = prev;
      obj[n] = prev[n] ? false : true;
      return obj;
    });
  }

  function toggleHeight(n: number) {
    toggleArrow(n);
    //if current height is not 120, set to 120
    if (qHeight[n] !== "120px") {
      setQHeight((prev) => ({ ...prev, [n]: "120px" }));
    } else {
      // else set to fit content
      let paraHeight = $(".a").eq(n).height() || 10;
      let heightPx = paraHeight + 180 + "px";
      setQHeight((prev) => ({ ...prev, [n]: heightPx }));
    }
  }

  return (
    <div className={classes.main}>
      <h1>FAQs</h1>
      <div className={classes.content}>
        <div
          className={`${classes.qa} qa`}
          onClick={() => toggleHeight(0)}
          style={{ height: qHeight[0] }}
        >
          <h3 className={classes.q}>
            Does my business need to be a certain size to work with the Pinning
            Bees agency?
          </h3>
          <Image
            src={"/icons/toggle.png"}
            width={imageSize}
            height={imageSize}
            alt="arrow"
            style={{
              transform: `rotate(${
                arrow[0] ? "0" : "180"
              }deg) translateY(-50%) `,
              transformOrigin: "50% 0",
              transition: "all .7s ease",
            }}
          />
          <p className={`${classes.a} a`}>
            Your brand does need to be a suitable fit for the demographics of
            the Pinterest platform and a certain size for it to be worth it to
            work with us. If you're curious if you're a good fit, please fill
            out our application, and we can perform a free analysis on your
            brand!
          </p>
        </div>
        <div
          className={classes.qa}
          onClick={() => toggleHeight(1)}
          style={{ height: qHeight[1] }}
        >
          <h3 className={classes.q}>
            How long does Pinterest advertising take to see results?
          </h3>
          <Image
            src={"/icons/toggle.png"}
            width={imageSize}
            height={imageSize}
            alt="arrow"
            style={{
              transform: `rotate(${
                arrow[1] ? "0" : "180"
              }deg) translateY(-50%) `,
              transformOrigin: "50% 0",
              transition: "all .7s ease",
            }}
          />
          <p className={`${classes.a} a`}>
            Since Pinterest is a platform to plan the future, Pinterest
            advertising is a longer buying cycle. It's always our hope that our
            clients are so pleased with the results we deliver, that we develop
            a long term business relationship.
          </p>
        </div>
        <div
          className={classes.qa}
          onClick={() => toggleHeight(2)}
          style={{ height: qHeight[2] }}
        >
          <h3 className={classes.q}>
            How will The Pinning Bees move people from the planning stage to
            buying?
          </h3>
          <Image
            src={"/icons/toggle.png"}
            width={imageSize}
            height={imageSize}
            alt="arrow"
            style={{
              transform: `rotate(${
                arrow[2] ? "0" : "180"
              }deg) translateY(-50%) `,
              transformOrigin: "50% 0",
              transition: "all .7s ease",
            }}
          />
          <p className={`${classes.a} a`}>
            Because the Pinterest platform offers the unique opportunity for
            full-funnel marketing, we are able to leverage the strategies we've
            been perfecting over the years. We build out strategies, and
            campaigns to ensure that we have the message, the right targeting,
            and pin creative to hit every touchpoint in the buyer's journey.
          </p>
        </div>
        <div
          className={classes.qa}
          onClick={() => toggleHeight(3)}
          style={{ height: qHeight[3] }}
        >
          <h3 className={classes.q}>
            Does The Pinning Bees agency work with other platforms as well?
          </h3>
          <Image
            src={"/icons/toggle.png"}
            width={imageSize}
            height={imageSize}
            alt="arrow"
            style={{
              transform: `rotate(${
                arrow[3] ? "0" : "180"
              }deg) translateY(-50%) `,
              transformOrigin: "50% 0",
              transition: "all .7s ease",
            }}
          />
          <p className={`${classes.a} a`}>
            Definitely. We also manage Facebook, and Instagram advertising. It's
            best to keep all social media management under the one roof to keep
            congruent with corporate themed branding and marketing messages.
            Please reach out to our customer service team if you would like to
            learn more.
          </p>
        </div>
        <div
          className={classes.qa}
          onClick={() => toggleHeight(4)}
          style={{ height: qHeight[4] }}
        >
          <h3 className={classes.q}>
            Which Niches are best for Pinterest advertising?
          </h3>
          <Image
            src={"/icons/toggle.png"}
            width={imageSize}
            height={imageSize}
            alt="arrow"
            style={{
              transform: `rotate(${
                arrow[4] ? "0" : "180"
              }deg) translateY(-50%) `,
              transformOrigin: "50% 0",
              transition: "all .7s ease",
            }}
          />
          <p className={`${classes.a} a`}>
            The current most popular niches on PInterest are: Pets, Art, Home
            Decor, Health, Design, DIY & Crafts, Education, Hair & Beauty,
            Women's Fashion, Travel, Sport, Electronics, Gardening, Wedding,
            Children's Fashion, Men's Fashion, Food & Drinks. Because we are
            experts at marketing to all audiences in all niches, we believe that
            businesses who serve any of these target markets will do great.
          </p>
        </div>
        <div
          className={classes.qa}
          onClick={() => toggleHeight(5)}
          style={{ height: qHeight[5] }}
        >
          <h3 className={classes.q}>
            Where is The Pinning Bees Agency Located & What Makes You Different?
          </h3>
          <Image
            src={"/icons/toggle.png"}
            width={imageSize}
            height={imageSize}
            alt="arrow"
            style={{
              transform: `rotate(${
                arrow[5] ? "0" : "180"
              }deg) translateY(-50%) `,
              transformOrigin: "50% 0",
              transition: "all .7s ease",
            }}
          />
          <p className={`${classes.a} a`}>
            We are based out of Seattle, WA in the USA, and have teams that work
            remotely. The Pinning Bees is rapidly becoming the #1 Pinterest
            marketing agency for businesses all around the world. We create a
            solid foundation for all of our successful clients, and employ a
            highly creative team that launches stunning visuals with engaging
            SEO copy to bring optimum results.
          </p>
        </div>
        <div
          className={classes.qa}
          onClick={() => toggleHeight(6)}
          style={{ height: qHeight[6] }}
        >
          <h3 className={classes.q}>
            Why is Pinterest better than Amazon for Google PPC?
          </h3>
          <Image
            src={"/icons/toggle.png"}
            width={imageSize}
            height={imageSize}
            alt="arrow"
            style={{
              transform: `rotate(${
                arrow[6] ? "0" : "180"
              }deg) translateY(-50%) `,
              transformOrigin: "50% 0",
              transition: "all .7s ease",
            }}
          />
          <p className={`${classes.a} a`}>
            1. Ads are up to 40% cheaper on Pinterest than many other
            marketplaces.
            <br />
            <br />
            2. Transactions from customers aren't a one-off, like Google or
            Amazon. Once Pinterest users discover a brand that they're happy
            with, they become big brand advocates.
            <br />
            <br />
            3. Pinterest users spend 85% more in retail than people
            off-Pinterest.
            <br />
            <br />
            4. Pinterest offers a Full funnel solution for brands Vs Amazon and
            Google Ads. Sellers share relevant content with Pinners at every
            stage of their journey.
            <br />
            <br />
            5. Users have a future-mindset which is valuable as an advertising
            platform.
            <br />
            <br />
            6. 97% of the top searches on Pinterest are non-branded, users are
            primed to act, and ready to buy.
          </p>
        </div>

        <div
          className={classes.qa}
          onClick={() => toggleHeight(7)}
          style={{ height: qHeight[7] }}
        >
          <h3 className={classes.q}>
            Why is Pinterest a better option than other Social Media platforms?
          </h3>
          <Image
            src={"/icons/toggle.png"}
            width={imageSize}
            height={imageSize}
            alt="arrow"
            style={{
              transform: `rotate(${
                arrow[7] ? "0" : "180"
              }deg) translateY(-50%) `,
              transformOrigin: "50% 0",
              transition: "all .7s ease",
            }}
          />
          <p className={`${classes.a} a`}>
            1. Unlike other Social media platforms, Pinterest encourages
            outbound links. Pinterest is the best open source platform for all
            SM and marketplaces, and a fantastic source of evergreen free
            traffic.
            <br />
            <br />
            2. Big brands are ignoring Pinterest, they chase after the quick
            wins from dopamine hitting platforms like Tiktok and Instagram.
            Spikes in sales from these platforms can be devastating to a
            business if they don't maintain proper inventory management, and
            scaling steadily can be an issue.
            <br />
            <br />
            3. Pinterest is far more powerful for long tail SEO like marketing
            than any other Social Media platform. Highly specific keyword
            targeting results in more conversions, sales and growth of a
            business for the long term
            <br />
            <br />
            4. Pinterest Pins don't interrupt like with other social media Ads.
            Pins encourage engagement, they inspire, they aren't distracting,
            they are the ultimate decision making tool.
            <br />
            <br />
            5. Pinterest offers the best source of evergreen traffic. Unlike
            other social media platforms such as TikTok, Facebook, and Instagram
            content doesn't get buried in the feed, it continually gets
            reshared. People interact with pins for months, even years after
            posting them. Pins continually grab attention.
            <br />
            <br />
            6. Pinterest creatives reap the highest ROI (return on investment)
            than any other social media platform. The lifespan of a Pin is at
            least 6 months, in fact pins can resurface years later. In
            comparison, Facebook posts last merely 5 hours, for Instagram it's 2
            days, for TikTok it's just an hour.
            <br />
            <br />
            7. Pinterest trends last longer and grow faster than other trends on
            the internet.
            <br />
            <br />
            8. 5 Times More Shopping Intent. The purchasing intent is very high
            on Pinterest, 90% of people come to Pinterest to shop, and have 5
            times more shopping intent Vs any other social media platform
            <br />
            <br />
            9. Pinterest users aren't price driven. 50% of users earn more than
            $100k per year on the US platform. They're not looking for deep
            discounts like with other SM platforms and marketplaces.
            <br />
            <br />
            10. Pinterest Boards can keep conversations fresh, separate and
            contained to the relevant audiences Facebook, Twitter, Instagram etc
            display your brand's content according to the time it was posted,
            which is difficult to manage if you're targeting multiple personals
            or campaigns at once. Pinterest's Pin boards allow you to
            simultaneously keep multiple conversations “fresh”, while also
            keeping them separate and contained to the relevant audiences.
            <br />
            <br />
            11. New Features for Shoppers. Pinterest is continually innovating,
            and has recently introduced many cool features where marketers can
            unleash a vast amount of creativity to grab the attention of their
            target audience.
            <br />
            <br />
            12. Trust. 70% of Pinterest users say they use the platform to find
            products etc they can TRUST. People trust the platform as a source
            of inspiration
            <br />
            <br />
            13. For Marketers using Pinterest for business, this means focusing
            on content that educates, inspires and nurtures. Brands need to be
            conscious of not being too pushy with promotional content - people
            are looking for content that sparks trust.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
