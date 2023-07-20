// import Image from "next/image";
import classes from "../styles/AboutUs.module.css";

interface Props {
  profile: {
    name: string;
    bio: string[];
    image: string;
    title: string;
  };
}

const ProfileBio = ({ profile }: Props) => {
  return (
    <div className={classes.pmain} key={profile.name}>
      <div className={classes.imgSide}>
        <div className={classes.pImgBox}>
          <img src={profile.image} alt="profile-image" />
        </div>

        <h3>{profile.name}</h3>
        <h4
          style={{
            fontWeight: "400",
          }}
        >
          {profile.title}
        </h4>
      </div>
      <div className={classes.bio}>
        {profile.bio.map((str, i) => (
          <p key={`bio${i}`}>{str}</p>
        ))}
      </div>
    </div>
  );
};

export default ProfileBio;
