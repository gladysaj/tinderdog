import React, { Component } from 'react';
import  { createDogs } from '../../services/dogService';
import AppContext from '../../AppContext';

class CreateDogForm extends Component {
  state = {
     dog: {},
  };

//complete handlesubmit and handlechange

  // handleChange = (e) => {
  //   let { dog } = this.state;
  //   dog = { ...dog, [e.target.name]: e.target.value};
  //   this.setState({ dog });
  //  };
 
  //  handleSubmit = (e) => {
  //    e.preventDefault();
  //    const { dog } = this.state;
  //    createDogs(dog).then((res) => {
  //      console.log(dog)
  //    })
  //     .catch((res) => console.error(res.response));
  //  }

  render() {
    return (
      <section className="uk-section">
       <div className="uk-container uk-flex uk-flex-center">
        <div className="uk-width-1-2">
         <form className="uk-width-1-1" onSubmit={this.handleSubmit}>
          <div className="uk-margin">
           <label className="uk-form-label" htmlFor="name"> Owner: </label>
            <div className="uk-form-controls">
             <input
              onChange={this.handleChange}
              className="uk-input"
              id="owner"
              type="text"
              name="owner"
              placeholder="Owner" />
           </div>
         
           <div class="uk-margin">
            <div class="uk-form-label"> Give up for adoption? </div>
             <div class="uk-form-controls">
               <label><input class="uk-radio" type="radio" name="radio1"/> Yes </label><br/>
               <label><input class="uk-radio" type="radio" name="radio1"/> No </label>
             </div>
           </div>

            <div className="uk-margin">
             <label className="uk-form-label" htmlFor="name"> Name: </label>
              <div className="uk-form-controls">
               <input
                 onChange={this.handleChange}
                 className="uk-input"
                 id="name"
                 type="text"
                 name="name"
                 placeholder="Name" />
                </div>
              </div>

            <div class="uk-margin">
              <label class="uk-form-label" for="form-stacked-select"> Breed </label>
              <div class="uk-form-controls">
                <select class="uk-select" id="form-stacked-select">
               {/* Add default mixed  */}
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

           <div class="uk-margin">
            <div class="uk-form-label"> Age: </div>
             <div class="uk-form-controls">
               <label><input class="uk-radio" type="radio" name="radio1"/> Puppy </label><br/>
               <label><input class="uk-radio" type="radio" name="radio1"/> Adult </label><br/>
               <label><input class="uk-radio" type="radio" name="radio1"/> Senior </label>
             </div>
           </div>

           <div class="uk-margin">
            <div class="uk-form-label"> Gender: </div>
             <div class="uk-form-controls">
               <label><input class="uk-radio" type="radio" name="radio1"/> Male </label><br/>
               <label><input class="uk-radio" type="radio" name="radio1"/> Female</label>
             </div>
           </div>
      
            <div className="uk-margin">
              <label className="uk-form-label" htmlFor="image"> Image: </label>
                <div className="uk-form-controls">
                  <input
                    onChange={this.handleChange}
                    name="image"
                    className="uk-input"
                    id="image"
                    type="text"
                    placeholder="Image"/>
                </div>
             </div>

              <div className="uk-margin">
                <label className="uk-form-label" htmlFor="description"> Description: </label>
                  <div className="uk-form-controls">
                    <textarea
                       onChange={this.handleChange}
                       className="uk-textarea"
                       name="description"
                       id="description"
                       cols="30"
                       rows="5"></textarea>
                  </div>
              </div>

              <button type="submit" className="uk-button uk-button-primary"> Create Dog </button>
              
            </div>
          </form>
        </div>
      </div>
     </section>
    );
  }
}

CreateDogForm.contextType = AppContext; 

export default CreateDogForm;

