import React from "react";
import axios from 'axios';
import { withRouter } from 'react-router';
import Swal from 'sweetalert2';

import DogProfile from '../DogProfile';

class MyDog extends React.Component {
  state = {
    image: '',
    name: '',
    breed: '',
    age: '',
    description: '',
    gender: '',
    hasDog: undefined,
  }

  componentDidMount() {
    axios.get('http://localhost:3000/api/profile-dog').then((response) => {
      const { data } = response;

      this.setState({
        hasDog: true,
        image: data.image,
        name: data.name,
        breed: data.breed,
        age: data.age,
        description: data.description,
        gender: data.gender,
      });
    }).catch(error => {
      this.setState({ hasDog: false });
    });
  }


  showDog() {
    const { hasDog } = this.state;
    if (hasDog === true) {
      return (
        <DogProfile
          image={this.state.image}
          name={this.state.name}
          breed={this.state.breed}
          age={this.state.age}
          description={this.state.description}
          gender={this.state.gender}
        />
      )
    } else if (hasDog === false) {
      Swal.fire({
        title: "You don't have any dog!",
        text: "Sorry, you need to add a dog to see this section.",
        confirmButtonText: "Add my dog",
      }).then((result) => {
        this.props.history.push("/create-dog");
      });
      this.setState({ hasDog: undefined });
      return null;
    } else {
      return null;
    }
  }

  render() {
    return this.showDog()
  }
}

export default withRouter(MyDog);
