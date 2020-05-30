import React, { Component } from "react";
import axios from "axios";

import DogCard from "../DogCard";
import { getMatches, getMyDog } from "../../services/dogService";
import SubNavbar from "./SubNavbar";
import { base_url } from "../../services/variables";

class MyMatches extends Component {
  state = {
    matches: [],
  };

  componentDidMount() {
    getMyDog()
      .then((res) => {
        getMatches(res.data.dogs[0]._id)
          .then((res) => {
            const { result } = res.data;

            result.match.map(match => {
              axios.post(`${base_url}/owner`, {
                owner: match.owner
              }).then(result => {
                if (result.data && result.data.name && result.data.phoneNumber) {
                  const { name, phoneNumber } = result.data;
                  this.setState(prevState => {
                    const newMatch = { ...match, ownerName: name, ownerPhone: phoneNumber };
                    return {
                      matches: [...prevState.matches, newMatch]
                    }
                  });
                } else {
                  this.setState(prevState => {
                    return {
                      matches: [...prevState.matches, match]
                    }
                  });
                }
              }).catch(err => console.log(err));
            });
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  }



  render() {
    return (
      <div>
        <SubNavbar />
        <section>
          <div>
            <div>
              {this.state.matches.length > 0 ? (
                <div>
                  {this.state.matches.map((match, index) => (
                    <DogCard key={index} {...match} />
                  ))}
                </div>
              ) : (
                <div>
                  <h1 className="uk-text-center">No matches</h1>
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default MyMatches;
