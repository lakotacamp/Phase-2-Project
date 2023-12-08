
import React, {useState,useEffect} from "react";
import './App.css';
import {
  Routes,
  Route,
  BrowserRouter
} from "react-router-dom";
import NavBar from './components/NavBar';
import MainPage from './components/MainPage';
import JobsList from './components/JobsList';
import BlogList from './components/BlogList';
import SingleBlog from './components/singleBlog';

function App() {
  const [blogs,setBlogs] = useState([])
  const [jobs,setJobs] = useState([])
  const [searchJobs,setSearchJobs] = useState("")
  
//Taken from MainPage and supplanted here:

  useEffect(()=>{
      fetch('http://localhost:3001/Blogs')
      .then(r=>r.json())
      .then(data=>setBlogs(data))
  },[])

  useEffect(()=>{
      fetch('http://localhost:3001/Jobs')
      .then(r=>r.json())
      .then(data=>setJobs(data))
  },[])

  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/mainpage" element={<MainPage blogs={blogs} jobs={jobs} setSearchJobs={setSearchJobs}/>}/>
        <Route path="/bloglist" element={<BlogList blogs={blogs}/>}/>
        <Route path="/joblist" element={<JobsList jobs={jobs} searchJobs={searchJobs} />}/>
        <Route path="/bloglist/:id" element={<SingleBlog />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
