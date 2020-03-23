import React from "react";
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/database";
import Card from "./Card/Card";
class Volunteers extends React.Component {
  state = {
    data: []
  };
  componentDidMount = () => {
    let data = [];
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        let ref = firebase.database().ref("volunteers");
        ref.on("value", snapshot => {
          for (let key in Object.keys(snapshot.val())) {
            data.push(snapshot.val()[Object.keys(snapshot.val())[key]]);
          }
          this.setState({ data: data });
        });
      }
    });
  };
  render() {
    return (
      <>
        {this.state.data.map((item, key) => (
          <Card {...item} key={key} />
        ))}
      </>
    );
  }
}
export default Volunteers;
