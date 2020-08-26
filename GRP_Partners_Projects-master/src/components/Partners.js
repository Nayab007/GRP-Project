import React, { Component } from "react";
import "./Partners.css";
import { Link } from "react-router-dom";
import axios from "axios";

class Partners extends Component {
  constructor(props) {
    super(props);
    this.state = {
      partners: [],
      continent: "",
      theme: "",
    };
  }
  handleChange = (event) => {
    this.setState({ continent: event.target.value });
    this.setState({ theme: event.target.value });
  };
  getUnique(arr, comp) {
    const unique = arr
      //store the comparison values in array
      .map((e) => e[comp])

      // store the keys of the unique objects
      .map((e, i, final) => final.indexOf(e) === i && i)

      // eliminate the dead keys & store unique objects
      .filter((e) => arr[e])
      .map((e) => arr[e]);

    return unique;
  }

  componentDidMount() {
    axios
      .get("../data.json")
      .then((response) => {
        const arr = response.data;
        // console.log(arr)
        this.setState({
          partners: arr,
        });
      })
      .catch(function (error) {
       // console.log(error);
        // console.log("error getting library", error.status);
      });
  }

  render() {
    const uniqueContinent = this.getUnique(this.state.partners, "continent");
    const partners = this.state.partners;
    const continent = this.state.continent;

    const filterDropdown = partners.filter(function (result) {
      return result.continent === continent;
    });

    const uniqueTheme = this.getUnique(this.state.partners, "theme");
    const partners1 = this.state.partners;
    const theme = this.state.theme;

    const filterDropdown1 = partners1.filter(function (result) {
      return result.theme === theme;
    });
    if (this.state.continent || this.state.theme)
      return (
        <form>
          <div className="container Search-filter">
            <div>
              Search by continent:
              <select value={this.state.continent} onChange={this.handleChange}>
                <option value="">Select Continent</option>
                {uniqueContinent.map((continent) => (
                  <option key={continent.partnerId} value={continent.continent}>
                    {continent.continent}
                  </option>
                ))}
              </select>
            </div>
            <div>
              Search by theme:
              <select value={this.state.theme} onChange={this.handleChange}>
                <option value="">Select Theme</option>
                {uniqueTheme.map((theme) => (
                  <option key={theme.partnerId} value={theme.theme}>
                    {theme.theme}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="container mt-4">
            <div className="row">
              {filterDropdown.map((continent) => (
                <div
                  key={continent.partnerId}
                  className=" col-lg-4 col-md-4 col-sm-6 col-sx-6"
                >
                  <div className="card card-block">
                  <Link
                        to={{
                          pathname: `/partner/${continent.partnerId}`,
                          state: { partner: continent.partnerName },
                        }}
                      >
                    <div className="item">
                      <img
                        src={continent.logo}
                        alt={continent.partnerName}
                        className="img"
                      />
                    </div>
                    </Link>
                    <hr />
                    <div className="partner-text">
                      <h5 className="card-title mb-1">
                        {continent.partnerName}
                      </h5>
                      <div className="card-text">
                        <p>Working Region:{" "}
                        {continent.workingRegion.length < 20
                          ? `${continent.workingRegion}`
                          : `${continent.workingRegion.substring(
                              0,
                              60
                            )} and more`} </p>
                        <p>Type: {continent.type}</p> 
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="container mt-4">
            <div className="row">
              {filterDropdown1.map((theme) => (
                <div
                  key={theme.partnerId}
                  className="col-lg-4 col-md-4 col-sm-6 col-sx-6"
                >
                  <div className="card card-block">
                  <Link
                        to={{
                          pathname: `/partner/${theme.partnerId}`,
                          state: { partner: theme.partnerName },
                        }}>
                    <div className="item">
                      <img
                        src={theme.logo}
                        alt={theme.partnerName}
                        className="img"
                      />
                     </div>
                    </Link>
                    <hr />
                    <div className="partner-text">
                      <h5 className="card-title mb-1">{theme.partnerName}</h5>
                      <div className="card-text">
                        <p>Working Region:{" "}
                        {theme.workingRegion.length < 20
                          ? `${theme.workingRegion}`
                          : `${theme.workingRegion.substring(0, 60)} and more`} </p>
                        <p>Type: {theme.type}</p> 
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </form>
      );
    else if (this.state.partners)
      return (
        <form>
          <div className="container Search-filter">
            <div>
              Search by continent:
              <select value={this.state.continent} onChange={this.handleChange}>
                <option value="">Select Continent</option>
                {uniqueContinent.map((continent) => (
                  <option key={continent.partnerId} value={continent.continent}>
                    {continent.continent}
                  </option>
                ))}
              </select>
            </div>
            <div>
              Search by theme:
              <select value={this.state.theme} onChange={this.handleChange}>
                <option value="">Select Theme</option>
                {uniqueTheme.map((theme) => (
                  <option key={theme.partnerId} value={theme.theme}>
                    {theme.theme}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="container mt-4">
            <div className="row">
              {partners.map((partner) => (
                <div
                  key={partner.partnerId}
                  className=" col-lg-4 col-md-6 col-sm-6 col-sx-6"
                >
                  <div className="card card-block">
                  <Link
                        to={{
                          pathname: `/partner/${partner.partnerName}`,
                          state: { partner: partner.partnerName },
                        }}
                      >
                    <div className="item">
                   
                      <img
                        src={partner.logo}
                        alt={partner.partnerName}
                        className="img"
                      />
                    </div>
                    </Link>
                    <hr />
                    <div className="partner-text">
                      <h5 className="card-title mb-1">{partner.partnerName}</h5>
                      <div className="card-text">
                        <p>Working Region:{" "}
                        {partner.workingRegion.length < 20
                          ? `${partner.workingRegion}`
                          : `${partner.workingRegion.substring(
                              0, 60 )} and more`} </p>
                        <p>Type: {partner.type}</p> 
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </form>
      );
  }
}
export default Partners;
