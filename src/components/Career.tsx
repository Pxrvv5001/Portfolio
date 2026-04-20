import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Web Developer</h4>
                <h5>R P Goyal & Sons Pvt Ltd</h5>
              </div>
              <h3>2026–NOW</h3>
            </div>
            <p>
              I took this project from a blank canvas to a fully deployed commercial platform (www.rpgglobal.co.in). As the sole developer, I architected the front-end layout, polished the UI/UX design, and managed the complete technical delivery to successfully establish the brand's digital presence.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Summer Training</h4>
                <h5>CPS with IoT Applications</h5>
              </div>
              <h3>Jul 2025</h3>
            </div>
            <p>
              Expanded my hardware expertise by diving deep into Cyber-Physical Systems (CPS) and Internet of Things (IoT) architecture. Through hands-on experimentation, I built practical experience in real-time sensor integration, developing automated monitoring pipelines that bridge the gap between physical environments and digital control systems.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Smart Irrigation System</h4>
                <h5>using Blynk IoT</h5>
              </div>
              <h3>Nov 2024</h3>
            </div>
            <p>
              To solve real-world water optimization challenges, I co-developed an automated irrigation system powered by Embedded C and Arduino. We used soil moisture sensors to drive real-time logic, allowing users to remotely monitor and control water valves seamlessly through the Blynk mobile application.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Water Level Controller</h4>
                <h5>using 8051</h5>
              </div>
              <h3>Apr 2024</h3>
            </div>
            <p>
              Collaborated with a team to engineer an embedded water management system using an 8051 microcontroller. We programmed automated sensor-driven relays in C to completely prevent water overflow and dangerous motor dry-running, gaining hands-on hardware interfacing experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
