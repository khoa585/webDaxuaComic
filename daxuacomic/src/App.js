import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home/Home';
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import DetailedStory from './Components/DetailedStory/DetailedStory';
import Register from './Components/Register/Register';
import ViewsComics from './Components/ViewsComics/ViewsComics';
import Login from './Components/Login/Login';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import AuthContextProvider from "./context/AuthContext";
import RentComic from './Components/RentComic'
import Search from './Components/Search';
import NotFound from './Components/NotFound';
function App() {
  return (
    <AuthContextProvider>
    
      <BrowserRouter>
        <Switch>
          <Route path="/?page=:page" >
            <Home></Home>
          </Route>
          <Route path="/" exact>
            <Home></Home>
          </Route>
          <Route path="/truyen-tranh/:slug/:id" >
            <DetailedStory></DetailedStory>
          </Route>
          <Route path="/login" >
            <Login></Login>
          </Route>
          <Route path="/doc-truyen/:slug/:slug/:id" >
            <ViewsComics></ViewsComics>
          </Route>
          <Route path="/sign-up">
            <Register></Register>
          </Route>
          <Route path="/danh-sach-truyen-thue">
            <RentComic></RentComic>
          </Route>
          <Route path="/tim-kiem/:slug">
            <Search></Search>
          </Route>
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
      <ToastContainer />
    </AuthContextProvider>
  );
}

export default App;
