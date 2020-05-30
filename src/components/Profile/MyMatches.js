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
                console.log(result);
                if (result.data && result.data.name && result.data.phoneNumber) {
                  const { name, phoneNumber } = result.data;
                  console.log('match', match);
                  this.setState(prevState => {
                    return {
                      matches: [{ ...prevState.matches, ...match, ownerName: name, ownerPhone: phoneNumber }]
                    }
                  });
                } else {
                  this.setState(prevState => {
                    return {
                      matches: [{ ...prevState.matches, ...match }]
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
      {console.log(this.state.matches)}
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
