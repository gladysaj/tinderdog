import React, { Component } from "react";
import DogCard from "../DogCard";


class MyDog extends Component {
    state = {
        dog : [],
    };

    render(){
        return(
            <section className="uk-section">
                <div className="uk-container">
                    <div className="uk-grid">
                        {this.state.dog.length > 0 ? this.state.dog.map((dog, index)=><DogCard key={index} {...dog}/>) : (
                            <div>
                                <h1>No dogs</h1>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        )
    }
}

export default MyDog