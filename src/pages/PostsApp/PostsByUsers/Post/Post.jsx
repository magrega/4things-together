import { getUser } from '../../../../services/getData';
import './Post.css';

const Post = ({ post, setOpen, setUserModal, setIsModalLoading }) => {

    const openAuthorModal = () => {
        setIsModalLoading(true);
        setOpen(true);
        getUser(post.userId).then(user => {
            setUserModal({
                name: user.name,
                address: `${user.address.city}, ${user.address.street}, ${user.address.suite}`,
                email: user.email,
                phone: user.phone
            });
            setIsModalLoading(false);
        });
    }

    return (
        <div onClick={openAuthorModal} className='post'>
            <p>{post.id}</p>
            <p className='post__title'>{post.title}</p>
            <p className='post__body'>{post.body}</p>
            <p className='post__author'>Click card for author info</p>
        </div>
    );
};

export default Post;