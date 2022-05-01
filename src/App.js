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
