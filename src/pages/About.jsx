import Banner from "../components/Banner";
import aboutData from "../__mocks__/aboutData";
import Collapse from "../components/Collapse";
import imageBanner from "../design/aboutbannerDesktop.png";

const About = () => {
  // Switch to display content in the dropdown by title
  const content = (title) => {
    switch (title) {
      case "fiability":
        return aboutData.fiability;
      case "respect":
        return aboutData.respect;
      case "service":
        return aboutData.service;
      case "security":
        return aboutData.security;
      default:
        console.log("default");
        break;
    }
  };

  return (
    <div className="about">
      <Banner image={imageBanner} />
      <div className="about__dropdowns">
        <Collapse title="Fiabilité" content={content("fiability")} />
        <Collapse title="Respect" content={content("respect")} />
        <Collapse title="Service" content={content("service")} />
        <Collapse title="Sécurité" content={content("security")} />
      </div>
    </div>
  );
};

export default About;
