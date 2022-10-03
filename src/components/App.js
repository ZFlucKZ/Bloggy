import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import CreatePost from './CreatePost';
import PostDetail from './PostDetail';
import { StyleRoot } from 'radium';

function App() {
  return (
    <StyleRoot>
      <div className="container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post/:postId" element={<PostDetail />} />
          <Route path="/create-post" element={<CreatePost />} />
        </Routes>
      </div>
    </StyleRoot>
  );
}

export default App;
