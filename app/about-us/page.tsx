import classes from "@/styles/AboutUs.module.css";
import ProfileBio from "../../components/ProfileBio";

const profiles = [
  {
    image: "/profiles/marie.png",
    bio: [
      "Marie is a best selling author of an eCommerce book, and teaches cutting edge marketing strategies that are sustainable, so sellers can be in the game for the long run. ",

      "In the 2021 Global Amazon Seller Poll, Marie won the 3rd position of Outstanding Contributions & her Amazon FBA Titan Facebook Group ranked in the 2nd position.",

      "With her wealth of experience and expertise in Pinterest marketing, she has the ability to take another company's mission, message, and voice, and get it in front of the right people at the right time through authentic marketing.",

      "“I am a data-driven marketing professional who can visualize each client's ideal strategy and then create a road map to get their business to the next level”",

      "“When I'm not geeking out over creative marketing on Pinterest, you'll find me hiking and adventuring in the great Seattle outdoors with my husband Keith, three kids, and two dogs”.",
    ],
    name: "Marie O'Shea",
    title: "CEO & Founder",
  },
  {
    image: "/profiles/klaidas.png",
    bio: [
      "Klaidas is an Amazon seller and Amazon SEO professional. He's been in the business since 2015, working with hundreds of products and dozens of accounts. He is also a trainer, consultant and frequent speaker known for closely tracking how Amazon platforms are constantly evolving and how to adapt to take advantage of any changes. He's an active participant in FBA Amazon-related events. At times he's appointed as a local moderator, which is one of the ways he continually hones his knowledge and insights.",
      "He is the founder of Shayz Consulting, which supports sellers on Amazon from A to Z: with training and strategic advice as well as the actual legwork needed to create and optimize product pages and ads. He manages accounts, solves issues with seller support, arranges text, design and photo work, and much more.",
    ],
    name: "Klaidas Šiuipys",
    title: "Amazon Expert, PPC Wizard",
  },
  {
    image: "/profiles/eddie.png",
    bio: [
      "Eddie is an expert SEO copywriter quickly gaining a fantastic reputation for his Amazon listing creations throughout the Amazon communities!",

      "He has successfully created/optimized 1500+ listings, including 300+ for Dragonfly Commerce.",

      "“It's all about weaving SEO within the threads of persuasion”, which means to balance the right keyword phrases with well-crafted text.",

      "Eddie has collaborated with Amazon experts such as Riley Bennett (Amazing Marketing Co), Hristo Arakliev (Hyperzon), and Izabela Hamilton (Rankbell). He now has his own Amazon listing services agency.",

      "We are proud to have Eddie and his team as a trusted Pinning Bees partner.",
    ],
    name: "Eddie Wheeler",
    title: "SEO Copywriter",
  },
  {
    image: "/profiles/josh.png",
    bio: [
      "“I am a professional Graphic Designer, exclusively skilled in Pin Designing at a large business Level. I am creative, full of wonderful ideas and equipped with imagination and creativity. As a Professional designer, I lead Pinning Bees team experts to design quality, scroll stopping pins that help to increase your engagement rate”.",
    ],
    name: "Josh Anderson",
    title: "Media Team Leader",
  },
  {
    image: "/profiles/arthur.png",
    bio: [
      "“Try this instead”. That one copywriting suggestion for a single image kickstarted a struggling Amazon listing into high gear and was the birth of Team Gadsby. Since then, the husband wife duo of Arthur and Kelsie Gadsby have collaborated with countless Amazon sellers from first-timers to established national brands that generate millions in revenue",

      "Their careers in sales, marketing and brand consulting are the first things that set them apart. The second is Arthur's writing background (a student of the author of the novel Fight Club, he was taught to “Maximize impact with minimal words”), but their true secret weapon is Kelsie's expertise in SEO",

      "Once Kelsie started using what she'd learned from years in a senior position at a prominent LA-based SEO agency to organically rank clients on the front page of Google, word spread and they've been in demand ever since",
      "“How did you do this??” is feedback “we never get tired of” says Kelsie. “It lets us know what we're doing different works”",
    ],
    name: "Arthur & Kelsie Gatsby",
    title: "SEO Copywriters",
  },
  {
    image: "/profiles/hamza.png",
    bio: [
      "“With my wealth of experience and expertise in Pinterest marketing,SEO copywriting, and the customer journey, I'm the go-to guy for brands looking to take their marketing game to the next level. I'm a highly analytical, data-driven marketing professional, who is here to convince you that Pinterest marketing is not all about creative, aesthetically beautiful pins. It is, actually, also about numbers. And I LOVE numbers! I Perform detailed competitor analysis reports and deep dive into pin analytics, to discover top performing content that we can model for our own pins, using our own spin with the design element, and marketing messages.",
      "When I'm not finding creative ways to look at numbers, I'm hiking and spending time with my wife”.",
    ],
    name: "Hamza Ali",
    title: "Data analyst and visualization expert",
  },
];

export default function AboutUs() {
  return (
    <div className={classes.main}>
      {/* HERO */}

      <div className={classes.hero}>
        <div className={classes.left}>
          <h2>About Us</h2>
          <h1>Helping businesses succeed through the power of Pinterest.</h1>
          <p>
            Pinning Bees Pinterest advertising campaigns are designed for you to
            leverage Pinterest's unique space on the internet—the perfect place
            with natural alignment between consumers and brands. With the
            support of a Pinterest marketing agency like Pinning Bees, your
            business will increase leads and sales by targeting high quality,
            engaged buyers early in their planning process. Your ads have the
            opportunities to generate: Brand Awareness, Traffic, Video Views,
            and Conversions. Pinterest Advertising offers you a Full-Funnel
            Solution for The Growth of your Business.We help businesses of all
            sizes to elevate their marketing game.
          </p>
        </div>
        <div className={classes.right}>
          <img src="/heroAbout.png" alt="image" />
        </div>
      </div>

      {/* OUR STORY */}
      <div className={classes.ourStory}>
        <h1>Our Story</h1>
        <p>
          Pinning Bees started when Marie discovered that Pinterest was the
          ultimate solution to help all Ecommerce sellers thrive during the rise
          of advertisement costs.{" "}
        </p>

        <p>
          Marie has used Pinterest for marketing her own private label products
          over the past 6 years. During this time, Marie found that Pinterest is
          a goldmine of affordable external traffic, and is a great cost
          effective tool to also build brand loyalty.
        </p>
        <p>
          She has spent countless hours on the platform, trying and testing
          different ways to optionally rank her pins.
        </p>
        <p>
          In her efforts to understand the Pinterest algorithm, Marie realized
          that 4 different skill sets are required to reap optimum results:
        </p>
        <ul>
          <li>Digital media designing</li>
          <li>SEO copywriting</li>
          <li>Pinterest marketing</li>
          <li>Pinterest PPC</li>
        </ul>
        <p>
          “Succeeding on Pinterest is a whole different ball game than any other
          social media platform.
        </p>
        <p>
          Having the right Pinterest techniques is gold, and harnessing this
          power to grow brand awareness and increase traffic to a business is
          valuable”.
        </p>
        <p>
          Marie's main drive is to help sellers scale their businesses to the
          next level, in utilizing Pinterest as the ultimate marketing tool.
        </p>
        <p>
          As a team, Pinning Bees thrives to help solve the industry's biggest
          problems, so sellers can be in the game for the long run.
        </p>
      </div>
      {/* OUR CORE VALUES */}
      <div className={classes.ourValues}>
        <h1>Our Core Values</h1>
        <p>
          At Pinning Bees, we're more than just a service provider - we're your
          partner in success. Our philosophy is that all businesses need a
          multi-layered approach to marketing their products on the Pinterest
          platform.
        </p>
        <p>
          Our team has a culture more inherently creative than many of the other
          Pinterest agencies. We know how to determine image keyword relevance,
          and act decisively, in prioritizing success.
        </p>
        <p>
          We emphasize strategic planning into every account, creating a
          structured roadmap for your business that you will not find elsewhere.
        </p>
        <p>
          We perform a thorough market research on your brand, to support
          data-driven content decision making, brand awareness goals, and
          consumer insights for audience targeting.
        </p>
        <p>
          Every marketing decision made on behalf of our clients is carefully
          thought out, well-planned, and thoroughly executed. We are known for
          being dependable, diligent, and innovative. You can rest assured that
          your business is in excellent hands with The Pinning Bees Services.
        </p>
      </div>

      {/* PROFILES */}

      <div className={classes.team}>
        <h1>Meet the Team</h1>
        <div className="profiles">
          {profiles.map((prof) => (
            <ProfileBio profile={prof} />
          ))}
        </div>
      </div>
    </div>
  );
}
