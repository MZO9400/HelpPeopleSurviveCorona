import React from "react";
import axios from "axios";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import CovidCard from "../../Components/CovidCard/CovidCard";
import Map from "../Maps/Maps";
import CSS from "./Main.module.css";
import { withRouter } from "react-router-dom";
import img1 from "../../Img/1.png";
import img2 from "../../Img/2.png";
import img3 from "../../Img/3.png";

class Main extends React.Component {
  state = {
    country: "None",
    selectedStats: [],
    allCountries: [],
    countriesStats: [],
    ___isSelectorOpen: false,
    randomBin: 0
  };
  componentDidMount() {
    this.getAllCountries();
    this.fetchData();
    this.getGeoInfo();
    this.setState({ randomBin: Math.floor(Math.random() * 10) % 3 });
  }
  getGeoInfo = () => {
    axios
      .get("https://ipapi.co/json/")
      .then(response => {
        let data = response.data;
        this.setState({
          country: data.country_name
        });
      })
      .catch(error => {
        console.log(error);
      });
  };
  getAllCountries = () => {
    axios({
      method: "GET",
      url:
        "https://coronavirus-monitor.p.rapidapi.com/coronavirus/affected.php",
      headers: {
        "content-type": "application/octet-stream",
        "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
        "x-rapidapi-key": "6031df45bfmshc5765d0ea25d076p1365efjsne5a49e4220bd"
      }
    })
      .then(response => {
        this.setState({ allCountries: response.data.affected_countries });
      })
      .catch(error => {
        console.log(error);
      });
  };
  fetchData = () => {
    axios({
      method: "GET",
      url:
        "https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_country.php",
      headers: {
        "content-type": "application/octet-stream",
        "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
        "x-rapidapi-key": "6031df45bfmshc5765d0ea25d076p1365efjsne5a49e4220bd"
      }
    }).then(response => {
      this.setState({ countriesStats: response.data.countries_stat });
      this.renderData(this.state.country);
    });
  };
  changeHandler = event => {
    this.renderData(event.target.value);
  };
  renderData = name => {
    if (name === "None") {
      this.setState({
        selectedStats: {},
        country: name
      });
      return;
    }
    this.setState({ country: name });
    var country = this.state.countriesStats.filter(item => {
      return item.country_name === name;
    });
    this.setState({ selectedStats: [...country] });
  };
  render() {
    return (
      <div>
        <img
          src={
            this.state.randomBin === 2
              ? img3
              : this.state.randomBin === 0
              ? img1
              : img2
          }
          className={CSS.imgLeft}
          style={{ cursor: "pointer" }}
          onClick={() => this.props.history.push("/provide-a-service")}
        />
        <div className={CSS.main}>
          <FormControl>
            <InputLabel>Country</InputLabel>
            <Select
              native
              value={this.state.country}
              onChange={val => this.changeHandler(val)}
            >
              <option value="None">None</option>
              {this.state.allCountries.map((item, key) => (
                <option value={item} key={key}>
                  {item}
                </option>
              ))}
            </Select>
          </FormControl>
          <div className={CSS.cards}>
            {this.state.selectedStats.map((item, key) => (
              <CovidCard {...item} key={key} />
            ))}
          </div>
          {this.state.countriesStats.length > 0 && (
            <Map stats={this.state.countriesStats} />
          )}
        </div>
      </div>
    );
  }
}

export default withRouter(Main);
