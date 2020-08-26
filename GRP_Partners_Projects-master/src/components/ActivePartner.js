import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./ActivePartner.css";

function Project(props) {
  return (
    <div>
      <div className="card text-center">
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.projectinfo}</p>
          <button type="button" className="btn btn-success">
            More
          </button>
        </div>
      </div>
    </div>
  );
}

class ActivePartner extends React.Component {
  state = {
    partners: [],
    activePartner: [],
  };
  componentDidMount() {
    axios.get("../data.json").then((res) => {
      const data = res.data;
     // console.log(data);
      this.setState({
        partners: data,
        activePartner: this.props.location.state.partner,
      });
    });
  }

  render() {
    const partners = this.state.partners;
    const activePartner = this.state.activePartner;
    const filterDropdown3 = partners.filter(function (partner) {
      return partner.partnerName === activePartner;
    });
    return (
      <div className="container mt-5">
        <button type="button" className="btn btn-success">
          <Link to="/">
            {" "}
            <i className="fas fa-arrow-left"></i>Partners page
          </Link>
        </button>
        {filterDropdown3.map((activePartner) => (
          <div key={activePartner.partnerId}>
            <div className="row mt-4">
              <div className="col-md-7 ml-0">
                <h2 className="mt-4">{activePartner.partnerName}</h2>
                <div className="content mr-5">
                  <h4 className="mt-5">Vision</h4>
                  <p>{activePartner.Vision}</p>

                  <h4 className="mt-4">Mission</h4>
                  <p>{activePartner.Mission}</p>

                  <h4 className="mt-4">Theme</h4>
                  <p> {activePartner.theme} </p>
                </div>
              </div>
              <div className="col-md-5 center">
                <div className="content mr-4 mt-2">
                  <div className="img-content">
                    <img
                      src={activePartner.logo}
                      className="img-fluid"
                      alt="Sida Logo"
                    />
                  </div>
                  <ul className="partner-info">
                    <li>
                      <i className="fas fa-home fa-2x"></i>
                      {activePartner.headquarter}
                    </li>
                    <li>
                      <i className="fas fa-map-marker-alt fa-2x"></i>
                      {activePartner.workingRegion}
                    </li>
                    <li>
                      <i className="fas fa-at  fa-2x"></i>
                      <a
                        href={activePartner.website}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <b>Visit web site</b>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <section>
                <div className="container mt-4">
                  <h3>Projects</h3>
                  <p>
                    GRP and {activePartner.partnerName} colloborate to perform
                    following projects{" "}
                  </p>
                  <div className="card-deck pb-5">
                    <div className="row">
                      <div className="col-md-4">
                        <Project
                          title="Special title treatment"
                          projectinfo="With supporting text below as a natural lead-in to additional
                        content."
                        />
                      </div>
                      <div className="col-md-4">
                        <Project
                          title="Special title treatment"
                          projectinfo="With supporting text below as a natural lead-in to additional
                        content."
                        />
                      </div>
                      <div className="col-md-4">
                        <Project
                          title="Special title treatment"
                          projectinfo="With supporting text below as a natural lead-in to additional
                        content."
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <hr />
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default ActivePartner;
