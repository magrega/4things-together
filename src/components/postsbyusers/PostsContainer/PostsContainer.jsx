
import './PostsContainer.css';

const PostsContainer = ({ children }) => {

  return (
    <div className="PostsContainer">
      {children}
    </div>
  );
};

export default PostsContainer;