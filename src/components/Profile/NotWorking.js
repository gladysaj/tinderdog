// import React, { Component } from "react";
// import DogCard from "../DogCard/index";
// import { getLikes } from "../../services/profileServices"; 

// class Profile extends Component {
//   state = {
//     matches: [],
//     likes: [],
//   };

//   componentDidMount(){
//     getLikes().then((res) => {
//         const { result: likes } = res.data;
//         this.setState({likes});
//         console.log(res);
//     });
//   }

//   render() {
//     return (
//       <section className="uk-section">
//         <div className="uk-container">
//           {this.state.matches.length > 0 ? (
//             <div className="uk-grid">
//               {this.state.matches.map((matches, index) => (
//               <DogCard key={index} {...matches} />
//               ))}
//             </div>
//           ) : (
//             <div className="uk-alert-primary" uk-alert="true">
//               <p>You have no matches yet.</p>
//             </div>
//           )}
//         </div>
//         <div className="uk-container">
//           {this.state.likes.length > 0 ? (
//             <div className="uk-grid">
//               {this.state.likes.map((likes, index) => (
//               <DogCard key={index} {...likes} />
//               ))}
//             </div>
//           ) : (
//             <div className="uk-alert-primary" uk-alert="true">
//               <p>You have no liked dogs yet.</p>
//             </div>
//           )}
//         </div>
//       </section>
//     );
//   }
// }

// export default Profile;


