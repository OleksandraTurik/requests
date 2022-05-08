import { GetPosts } from './Components/GetPage';
import DeletePost from './Components/DeletePost';
import PutPage from './Components/PutPage';
import PostPage from './Components/PostPage';
import PatchPage from './Components/PatchPage';

import './App.css';

function App() {
  return (
    <div className="App">
      
      <DeletePost />
      <PutPage />
      <PostPage />
      <PatchPage />
      <GetPosts />
    </div>
  );
}

export default App;
