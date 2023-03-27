import LoadingButton from '@mui/lab/LoadingButton';
import { Box, CircularProgress } from '@mui/material';
import { useEffect, useState } from 'react';
import AuthorModal from '../../components/postsbyusers/AuthorModal/AuthorModal';
import Post from "../../components/postsbyusers/Post/Post";
import PostsContainer from '../../components/postsbyusers/PostsContainer/PostsContainer';
import { getPosts } from '../../services/getData';

import './PostApp.css';

function PostsApp() {
  const [loading, setLoading] = useState(true);
  const [isButtonLoading, setIsButtonLoading] = useState(false);
  const [isModalLoading, setIsModalLoading] = useState(true);
  const [openModal, setOpenModal] = useState(false);
  const [userModal, setUserModal] = useState(null);
  const [posts, setPosts] = useState(undefined);
  const [page, setPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);

  const updatePostsFromServer = () => {
    getPosts(page)
      .then(posts => {
        setTotalCount(posts.headers.get('x-total-count'));
        return posts.json();
      })
      .then(newPosts => {
        setPosts(prevState => [...(prevState ?? []), ...newPosts]);
        setLoading(false);
        setIsButtonLoading(false);
      })
  };

  const showMore = () => {
    setIsButtonLoading(true);
    setPage(prevValue => prevValue + 1);
  }

  useEffect(() => {
    updatePostsFromServer();
  }, [page]);

  if (loading) {
    return  <div className='initialSpinner'><CircularProgress color="success" /></div>;
  }

  return (
    <>
      <Box className="PostsApp">
        <PostsContainer>
          {
            posts?.map((post) => {
              return <Post
                key={Number(post.id)}
                post={post}
                setOpen={setOpenModal}
                setUserModal={setUserModal}
                setIsModalLoading={setIsModalLoading}
              />
            })
          }
        </PostsContainer>

        {posts?.length < totalCount &&  <LoadingButton
          color="error"
          onClick={showMore}
          loading={isButtonLoading}
          variant="contained"
        >
          <span>Show More</span>
        </LoadingButton>}
      </Box>
      
      <AuthorModal open={openModal} setOpen={setOpenModal} userModal={userModal} setUserModal={setUserModal} isModalLoading={isModalLoading}/>
    </>
  );
}

export default PostsApp;