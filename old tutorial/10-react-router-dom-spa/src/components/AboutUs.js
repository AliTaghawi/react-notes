import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
// import AboutTeam from "./common/AboutTeam";
// import AboutWorkPlace from "./common/AboutWorkPlace";

//styles
import styles from "./styles/common.module.css";

// class AboutUs extends Component {
//   next = () => {
//     // this.props.history.push("/blogs"); // brocken
//   };

//   reset = () => {
//     // this.props.history.replace("/"); // brocken
//   };

//   render() {
//     return (
//       <div className={styles.common}>
//         <h1>About Us</h1>
//         <p>{this.props.content}</p>
//         {/* <div>
//           <button onClick={this.next}>next</button>
//           <button onClick={this.reset}>reset</button>
//         </div> */}
//         <div style={{ display: "flex", flexDirection: "column" }}>
//           <Link to="team">About team</Link>
//           <Link to="workplace">About work place</Link>
//         </div>
//         <Outlet />
//         {/* <Routes>
//           <Route path="team" element={<AboutTeam/>} />
//           <Route path="workplace" element={<AboutWorkPlace/>} />
//         </Routes> */}
//       </div>
//     );
//   }
// }


const AboutUs = (props) => {
  // const history = useHistory() // v-5
  // history.push('/') // v-5
  // history.replace('/') // v-5

  const navigate = useNavigate()
  const next = () => {
    navigate('/blogs')
  };

  const reset = () => {
    navigate('/', {replace: true})
  };

  return (
    <div className={styles.common}>
      <h1>About Us</h1>
      <p>{props.content}</p>
      <div>
        <button onClick={next}>next</button>
        <button onClick={reset}>reset</button>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Link to="team">About team</Link>
        <Link to="workplace">About work place</Link>
      </div>
      <Outlet />
      {/* <Routes>
        <Route path="team" element={<AboutTeam/>} />
        <Route path="workplace" element={<AboutWorkPlace/>} />
      </Routes> */}
    </div>
  );
}

export default AboutUs;
