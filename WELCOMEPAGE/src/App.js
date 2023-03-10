import React from "react";

import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { HomePage, LoginPage, RegisterPage, MainView, BlogPage} from "./pages";
import Post1 from "./components/BlogComponents/Posts/Post1";
import SideNavComponent from "./components/RedditComponents/SideNavComponent";
import MainComponents from "./components/RedditComponents/MainComponents";
import RedditPage from "./pages/RedditPage/RedditPage";
import Post1Blog from "./pages/RedditPage/RedditPostPages/Post1Blog";


const App = ()=>{
  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/" element={<HomePage/>} />
        <Route path = "/Login" element={<LoginPage/>} />
        <Route path = "/Register" element={<RegisterPage/>} />
        <Route path = "/MainView" element={<MainView/>} />
        <Route path = "/Reddit" element={<RedditPage/>} />
        <Route path = "/Post1" element={<Post1Blog/>} />






      </Routes>
    </BrowserRouter>
  )
}

export default App;