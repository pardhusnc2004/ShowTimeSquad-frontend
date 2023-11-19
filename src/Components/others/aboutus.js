import Footer from '../landingpage/utils/footer'
function AboutUs() {
    const iconStyle = { width: "40px", height: "40px" };
    const handleEmailClick = (email) => {
        window.open(`mailto:${email}`);
    };
    const handleSocialClick = (url) => {
        window.open(url, "_blank");
    };
    const getcolor=()=>{
        if(localStorage.getItem("darkmode")==="yes"){
          return "text-light"
        }
        return "text-dark"
      }
    const TeamMemberCard = ({ name, role, description, email, github, instagram }) => {
        return (
            <div className="col-md-12 mb-4">
                <div className="card bg-light border-dark text-center">
                    <div className="card-body">
                        <h2 className="card-title">{name}</h2>
                        <p className="card-text"><b>{role}</b></p>
                        <p>{description}</p>
                        <div className="mt-3">
                            {/* Email button */}
                            <button className="mr-3" onClick={() => handleEmailClick(email)}>
                                <img src="https://img.icons8.com/color/48/000000/gmail-new.png" alt="Gmail" className="email-logo border-0" style={iconStyle} />
                            </button>
                            {/* GitHub button */}
                            <button onClick={() => handleSocialClick(github)}>
                                <img src="https://github.com/fluidicon.png" alt="GitHub" className="github-logo img-fluid border-0" style={iconStyle} />
                            </button>
                            {/* Instagram button */}
                            <button className="ml-3" onClick={() => handleSocialClick(instagram)}>
                                <img src="https://img.icons8.com/color/48/000000/instagram-new.png" alt="Instagram" className="instagram-logo border-0" style={iconStyle} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
    return (
      <>
  
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-12 text-center">
              <h1 className="text-primary">
                <span className={`${getcolor()}`}><b>About</b></span>
                <span className={`${getcolor()}`}> <b>Us</b></span>
              </h1>
              <p className={`${getcolor()}`}><b>Meet our amazing team! Together we made it possible.</b></p>
            </div>
          </div>
  
          <div className="row">
      <TeamMemberCard
        name="Konathala Venkata Siva Apparao"
        role="BACKEND"
        description="Hello, I have handled server-side logic and API development with knowledge in MERN technologies, ensuring robust backend systems for seamless data flow."
        email="venkatsivaff@gmail.com"
        github="https://github.com/Konathalavenkat"
        instagram="https://instagram.com/venkat._.siva007?igshid=NzZlODBkYWE4Ng=="
        handleEmailClick={handleEmailClick}
        handleSocialClick={handleSocialClick}
        iconStyle={iconStyle}
      />

      <TeamMemberCard
        name="Polisetty Venkata Pardhasaradhi Naidu"
        role="BACKEND"
        description="Hey everyone, I have helped in architecting core backend structures, implementing algorithms, and troubleshooting to maintain high-performance server operations using the MERN technologies."
        email="pardhasaradhi.polisetty@outlook.com"
        github="https://github.com/pardhusnc2004"
        instagram="https://instagram.com/pardhu2004_?igshid=NzZlODBkYWE4Ng=="
        handleEmailClick={handleEmailClick}
        handleSocialClick={handleSocialClick}
        iconStyle={iconStyle}
      />
      
      <TeamMemberCard
        name="Badugu Mohan Kishore"
        role="FRONTEND"
        description="Hello there, I gave my best to build user-friendly interfaces with HTML, Bootstrap, and MERN technologies, focusing on responsiveness and accessibility for an engaging user experience."
        email="mohanbmk007@gmail.com"
        github="https://github.com/MohanBMK"
        instagram="https://instagram.com/alway_s_unny?igshid=NzZlODBkYWE4Ng=="
        iconStyle={iconStyle}
      />

      <TeamMemberCard
        name="Boddepalli Yaswanth"
        role="FRONTEND"
        description="Hey everyone, I helped in making dynamic features using React.js, collaborating with designers to translate concepts into code for visually appealing and interactive web applications."
        email="yaswanthboddepalli1406@gmail.com"
        github="https://github.com/yaswanth1004"
        instagram="https://www.instagram.com/mr_._yaswanth/"
        iconStyle={iconStyle}
      />

      <TeamMemberCard
        name="Srisailapu Brahmaji"
        role="FRONTEND"
        description="Hello, I have helped in bringing creative concepts using MERN frontend technologies, excelling in state management with required tools for cutting-edge and competitive frontend development."
        email="srisailapubrahmaji@gmail.com"
        github="https://github.com/brahmaji2003"
        instagram="https://instagram.com/brahmajisrisailapu?igshid=NzZlODBkYWE4Ng=="
        handleEmailClick={handleEmailClick}
        handleSocialClick={handleSocialClick}
        iconStyle={iconStyle}
      />
  
          </div>
        </div>
        <Footer />
      </>
    )
  }
  
  export default AboutUs;