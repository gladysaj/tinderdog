import React, { Component } from "react";
import Swal from 'sweetalert2';
import { withRouter } from 'react-router-dom';

import { createDogs } from "../../services/dogService";
import AppContext from "../../AppContext";

class CreateDogForm extends Component {
  static contextType = AppContext;
  state = {
    dog: {},
  };

  handleChange = (e) => {
    let { dog } = this.state;
    dog = { ...dog, [e.target.name]: e.target.value };
    console.log(dog, e.target.name);
    this.setState({ dog });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { dog } = this.state;
    // No se necesita porque ya se tiene la información en el backend: dog[ "owner" ] = this.context.user._id
    createDogs(dog)
      .then((res) => {
        //dar feedback al user npm sweet alert de que se pudo crear el perro y enviar a la ruta profile /my dog
        Swal.fire({
          title: 'Congratulations! 🎉',
          text: `You've just created your dog, now go to its profile!`,
          confirmButtonText: 'OK'
        }).then(result => {
          this.props.history.push('/profile/dog');
        });
      })
      .catch((err) => {
        //dar feedback tambien de error que no se pudo crear el perro
        const expectedMsg = 'You have a dog already';
        if (err.response && err.response.data && err.response.data.msg === expectedMsg) {
          Swal.fire('Oops...', 'You can only have one dog!', 'error');
        } else {
          Swal.fire('Oops...', 'There has been an error, try again.', 'error');
        }
      });
  };

  handleSwitch = (type, isSelected) => {
    const { dog } = this.state;
    if (type === "adoption") {
      dog["foster"] = isSelected;
    }
    if (type === "age") {
      dog["age"] = isSelected;
    }
    if (type === "gender") {
      dog["gender"] = isSelected;
    }
    this.setState({ dog });
  };

  render() {
    return (
      <section className="uk-section">
        <div className="uk-container uk-flex uk-flex-center">
          <div className="uk-width-1-4@l uk-width-1-4@m uk-width-1-2@s">
            <form className="uk-width-1-1" onSubmit={this.handleSubmit}>
              <h1 className="uk-margin-medium-top uk-text-bold uk-text-primary">
                {" "}
                Create your Dog
              </h1>
              <div className="uk-margin">
                <div className="uk-margin">
                  <div className="uk-inline">
                    <span className="uk-form-icon" uk-icon="icon: user"></span>
                    <input
                      onChange={this.handleChange}
                      className="uk-input"
                      id="name"
                      type="text"
                      name="name"
                      placeholder=" Dog Name"
                    />
                  </div>
                </div>

                <div className="uk-margin">
                  <label className="uk-form-label" for="form-stacked-select">
                    {" "}
                    Breed{" "}
                  </label>
                  <div className="uk-form-controls">
                    <select
                      name="breed"
                      className="uk-select"
                      id="form-stacked-select"
                      onChange={this.handleChange}
                    >
                      <option selected="true">Mixed</option>
                      <option>Chihuahua</option>
                      <option>Dachshund</option>
                      <option>German Shepherd</option>
                      <option>Golden Retriever</option>
                      <option>Labrador Retriever</option>
                      <option>Schnauzer</option>
                      <option>Shiba Inu</option>
                      <option>Siberian Husky</option>
                      <option>Xoloitzcuintli</option>
                      <option>Yorkshire Terrier</option>
                    </select>
                  </div>
                </div>

                <div className="uk-margin">
                  <div className="uk-form-label"> Age: </div>
                  <div className="uk-form-controls">
                    <label>
                      <input
                        className="uk-radio"
                        type="radio"
                        name="radio2"
                        onChange={() => this.handleSwitch("age", "Puppy")}
                      />{" "}
                      Puppy{" "}
                    </label>
                    <br />
                    <label>
                      <input
                        className="uk-radio"
                        type="radio"
                        name="radio2"
                        onChange={() => this.handleSwitch("age", "Adult")}
                      />{" "}
                      Adult{" "}
                    </label>
                    <br />
                    <label>
                      <input
                        className="uk-radio"
                        type="radio"
                        name="radio2"
                        onChange={() => this.handleSwitch("age", "Senior")}
                      />{" "}
                      Senior{" "}
                    </label>
                  </div>
                </div>

                <div className="uk-margin">
                  <div className="uk-form-label"> Gender: </div>
                  <div className="uk-form-controls">
                    <label>
                      <input
                        class="uk-radio"
                        type="radio"
                        name="radio3"
                        onChange={() => this.handleSwitch("gender", "Male")}
                      />{" "}
                      Male{" "}
                    </label>
                    <br />
                    <label>
                      <input
                        class="uk-radio"
                        type="radio"
                        name="radio3"
                        onChange={() => this.handleSwitch("gender", "Female")}
                      />{" "}
                      Female
                    </label>
                  </div>
                </div>

                <div className="uk-margin">
                  <div className="uk-form-label">For adoption</div>
                  <div className="uk-form-controls">
                    <label>
                      <input
                        className="uk-radio"
                        type="radio"
                        name="radio1"
                        onChange={() => this.handleSwitch("adoption", true)}
                      />{" "}
                      Yes{" "}
                    </label>
                    <br />
                    <label>
                      <input
                        className="uk-radio"
                        type="radio"
                        name="radio1"
                        onChange={() => this.handleSwitch("adoption", false)}
                      />{" "}
                      No{" "}
                    </label>
                  </div>
                </div>

                <div className="uk-margin">
                  <div className="uk-inline">
                    <span
                      className="uk-form-icon uk-form-icon-flip"
                      href="#"
                      uk-icon="icon: link"
                    ></span>
                    <input
                      onChange={this.handleChange}
                      name="image"
                      className="uk-input"
                      id="image"
                      type="text"
                      placeholder="Dog image"
                    />
                  </div>
                </div>

                <div className="uk-margin">
                  <label className="uk-form-label" htmlFor="description">
                    {" "}
                    Description:{" "}
                  </label>
                  <div className="uk-form-controls">
                    <textarea
                      onChange={this.handleChange}
                      className="uk-textarea"
                      name="description"
                      id="description"
                      cols="30"
                      rows="3"
                    ></textarea>
                  </div>
                </div>

                <button type="submit" className="uk-button uk-button-primary">
                  Create Dog
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    );
  }
}

CreateDogForm.contextType = AppContext;

export default withRouter(CreateDogForm);
