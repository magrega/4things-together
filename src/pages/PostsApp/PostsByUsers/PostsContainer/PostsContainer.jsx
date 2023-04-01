
import './PostsContainer.css';

const PostsContainer = ({ children }) => {

  return (
    <div className="posts-container">
      {children}
    </div>
  );
};

export default PostsContainer;