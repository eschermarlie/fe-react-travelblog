import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useMatch,
  useParams
} from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import Home from "./pages/Home";
import ViewPost from "./pages/ViewPost";
import CreatePost from "./pages/CreatePost";

export default function App() {
  return (
      <Router>
        <div>
          {/*<ul>*/}
          {/*  <li>*/}
          {/*    <Link to="/">Home</Link>*/}
          {/*  </li>*/}
          {/*  <li>*/}
          {/*    <Link to="/about">About</Link>*/}
          {/*  </li>*/}
          {/*  <li>*/}
          {/*    <Link to="/topics">Topics</Link>*/}
          {/*  </li>*/}
          {/*</ul>*/}
<NavigationBar/>
          <Routes>
            <Route path="/create" element={<CreatePost />}/>
            {/*<Route path="/topics" element={<Topics />}/>*/}
            <Route path="/" element={<Home />} exact />
            <Route path="/viewPost/:topicId" element={<ViewPost />} exact />
          </Routes>
        </div>
      </Router>
  );
}

function About() {
  return <h2>About</h2>;
}

// function Topics() {
//   let match = useMatch();
//
//   return (
//       <div>
//         <h2>Topics</h2>
//
//         <ul>
//           <li>
//             <Link to={`${match.url}/components`}>Components</Link>
//           </li>
//           <li>
//             <Link to={`${match.url}/props-v-state`}>
//               Props v. State
//             </Link>
//           </li>
//         </ul>
//
//         {/* The Topics page has its own <Routes> with more routes
//           that build on the /topics URL path. You can think of the
//           2nd <Route> here as an "index" page for all topics, or
//           the page that is shown when no topic is selected */}
//         <Routes>
//           <Route path={`${match.path}/:topicId`} element={<Topic />}/>
//           <Route path={match.path}>
//             <h3>Please select a topic.</h3>
//           </Route>
//         </Routes>
//       </div>
//   );
// }

// function Topic() {
//   let { topicId } = useParams();
//   return <h3>Requested topic ID: {topicId}</h3>;
// }