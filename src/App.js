import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { auth } from "./Firebase";
import About from "./pages/About/About";
import Category from "./pages/Tags/Category";
import Error404 from "./components/Error404";
import Header from "./components/Header";
import Faq from "./pages/Faq/Faq";
import PrivacyPolicy from "./pages/Privacy/PrivacyPolicy";
import TermOfUse from "./pages/Privacy/TermOfUse";
// import Profile from "./components/user/Profile";
// import EditProfile from "./components/user/EditProfile"
import SinglePost from "./pages/Articles/SinglePost";
import CreatePost from "./pages/Articles/CreatePost";
// import Notification from "./pages/Notifications/Notification";
import BottomNav from "./components/BottomNav";
import Search from "./pages/SearchResult/Result";
import { useAuthState } from "react-firebase-hooks/auth";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Home from "./Home";

function App() {

  const [user] = useAuthState(auth)

  return (
    <>
      <BrowserRouter>
        <Header />
        <BottomNav />
        <ToastContainer position="top-center" />
        <Routes>

          {/* <Route path={`/profile/:userId`} element={ <Profile />} />
          <Route path={`/edit-profile/:id`} element={user?.uid ? <EditProfile /> : <Navigate to="/" />} />
          <Route path="/notification" element={user?.uid ? <Notification /> : <Navigate to="/" />} /> */}

          <Route path="/create-post" element={user?.uid ? <CreatePost /> : <Navigate to="/" />} />
          <Route path={`/update-post/:id`} element={user?.uid ? <CreatePost /> : <Navigate to="/" />} />
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/explore" element={<Category />} />
          <Route path="/search-result" element={<Search />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-use" element={<TermOfUse />} />
          <Route path="*" element={<Error404 />} />
          <Route path={`/post/:id`} element={<SinglePost />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
