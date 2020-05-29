// import React, { Component } from "react";
// import AppContext from "../../AppContext";
// import { updateMyDog, deleteMyDog } from "../../services/dogService";

// class EditDogProfile extends Component {
//   static contextType = AppContext;
//   state = {
//     dog: {},
//   };

//   handleChange = (e) => {
//     let { dog } = this.state;
//     dog = { ...dog, [e.target.name]: e.target.value };
//     console.log(dog, e.target.name);
//     this.setState({ dog });
//   };

//   handleSubmit = (e) => {
//     e.preventDefault();
//     const { dog } = this.state;
//     console.log("este es mi perro", dog);
//     // No se necesita porque ya se tiene la información en el backend: dog[ "owner" ] = this.context.user._id
//     updateMyDog(dog)
//       .then((res) => {
//         //dar feedback al user npm sweet alert
//       })
//       .catch((res) => console.error(res.response));
//     //dar feedback tambien de error
//   };

//   handleSwitch = (type, isSelected) => {
//     const { dog } = this.state;
//     if (type === "adoption") {
//       dog["foster"] = isSelected;
//     }
//     if (type === "age") {
//       dog["age"] = isSelected;
//     }
//     if (type === "gender") {
//       dog["gender"] = isSelected;
//     }
//     this.setState({ dog });
//   };

//   render() {
//     return (
//       <section className="uk-section">
//         <div className="uk-container uk-flex uk-flex-center">
//           <div className="uk-width-1-4@l uk-width-1-4@m uk-width-1-2@s">
//             <form className="uk-width-1-1" onSubmit={this.handleSubmit}>
//               <h1 className="uk-margin-medium-top uk-text-bold uk-text-primary">
//                 {" "}
//                 My dog
//               </h1>
//               <div className="uk-margin">
//                 <div className="uk-margin">
//                   <div className="uk-inline">
//                     <span className="uk-form-icon" uk-icon="icon: user"></span>
//                     <input
//                       onChange={this.handleChange}
//                       className="uk-input"
//                       id="name"
//                       type="text"
//                       name="name"
//                       placeholder=" Dog Name"
//                     />
//                   </div>
//                 </div>

//                 <div className="uk-margin">
//                   <label className="uk-form-label" for="form-stacked-select">
//                     {" "}
//                     Breed{" "}
//                   </label>
//                   <div className="uk-form-controls">
//                     <select
//                       name="breed"
//                       className="uk-select"
//                       id="form-stacked-select"
//                       onChange={this.handleChange}
//                     >
//                       <option selected="true">Mixed</option>
//                       <option>Chihuahua</option>
//                       <option>Dachshund</option>
//                       <option>German Shepherd</option>
//                       <option>Golden Retriever</option>
//                       <option>Labrador Retriever</option>
//                       <option>Schnauzer</option>
//                       <option>Shiba Inu</option>
//                       <option>Siberian Husky</option>
//                       <option>Xoloitzcuintli</option>
//                       <option>Yorkshire Terrier</option>
//                     </select>
//                   </div>
//                 </div>

//                 <div className="uk-margin">
//                   <div className="uk-form-label"> Age: </div>
//                   <div className="uk-form-controls">
//                     <label>
//                       <input
//                         className="uk-radio"
//                         type="radio"
//                         name="radio2"
//                         onChange={() => this.handleSwitch("age", "Puppy")}
//                       />{" "}
//                       Puppy{" "}
//                     </label>
//                     <br />
//                     <label>
//                       <input
//                         // checked="checked"
//                         className="uk-radio"
//                         type="radio"
//                         name="radio2"
//                         onChange={() => this.handleSwitch("age", "Adult")}
//                       />{" "}
//                       Adult{" "}
//                     </label>
//                     <br />
//                     <label>
//                       <input
//                         className="uk-radio"
//                         type="radio"
//                         name="radio2"
//                         onChange={() => this.handleSwitch("age", "Senior")}
//                       />{" "}
//                       Senior{" "}
//                     </label>
//                   </div>
//                 </div>

//                 <div className="uk-margin">
//                   <div className="uk-form-label"> Gender: </div>
//                   <div className="uk-form-controls">
//                     <label>
//                       <input
//                         class="uk-radio"
//                         type="radio"
//                         name="radio3"
//                         onChange={() => this.handleSwitch("gender", "Male")}
//                       />{" "}
//                       Male{" "}
//                     </label>
//                     <br />
//                     <label>
//                       <input
//                         // checked="checked"
//                         class="uk-radio"
//                         type="radio"
//                         name="radio3"
//                         onChange={() => this.handleSwitch("gender", "Female")}
//                       />{" "}
//                       Female
//                     </label>
//                   </div>
//                 </div>

//                 <div className="uk-margin">
//                   <div className="uk-form-label">For adoption</div>
//                   <div className="uk-form-controls">
//                     <label>
//                       <input
//                         className="uk-radio"
//                         type="radio"
//                         name="radio1"
//                         onChange={() => this.handleSwitch("adoption", true)}
//                       />{" "}
//                       Yes{" "}
//                     </label>
//                     <br />
//                     <label>
//                       <input
//                         // checked="checked"
//                         className="uk-radio"
//                         type="radio"
//                         name="radio1"
//                         onChange={() => this.handleSwitch("adoption", false)}
//                       />{" "}
//                       No{" "}
//                     </label>
//                   </div>
//                 </div>

//                 <div className="uk-margin">
//                   <div className="uk-inline">
//                     <span
//                       className="uk-form-icon uk-form-icon-flip"
//                       href="#"
//                       uk-icon="icon: link"
//                     ></span>
//                     <input
//                       onChange={this.handleChange}
//                       name="image"
//                       className="uk-input"
//                       id="image"
//                       type="text"
//                       placeholder="Dog image"
//                     />
//                   </div>
//                 </div>

//                 <div className="uk-margin">
//                   <label className="uk-form-label" htmlFor="description">
//                     {" "}
//                     Description:{" "}
//                   </label>
//                   <div className="uk-form-controls">
//                     <textarea
//                       onChange={this.handleChange}
//                       className="uk-textarea"
//                       name="description"
//                       id="description"
//                       cols="30"
//                       rows="3"
//                     ></textarea>
//                   </div>
//                 </div>

//                 <button type="submit" className="uk-button uk-button-primary">
//                   Update
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </section>
//     );
//   }
// }

// EditDogProfile.contextType = AppContext;

// export default EditDogProfile;
