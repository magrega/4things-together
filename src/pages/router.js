import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import NavAndFooter from '../components/NavAndFooter/NavAndFooter';
import Counter from './Counter';
import EmojiApp from './EmojiApp/EmojiApp';
import Home from './Home';
import PostsApp from './PostsApp/PostsApp';

export const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<NavAndFooter />}>
        <Route index element={<Home />} />
        <Route path='counter' element={<Counter counter={0}/>} />
        <Route path='emojilist' element={<EmojiApp/>} />
        <Route path='postsbyusers' element={<PostsApp/>} />
    </Route>
))