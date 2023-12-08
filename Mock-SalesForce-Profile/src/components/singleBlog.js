import {Link,useParams,useNavigate } from "react-router-dom";
import { useEffect,useState } from "react";

function SingleBlog(){
    const [blogs,setBlogs] = useState({})
    const {id} = useParams()
    const navigate = useNavigate()
    console.log(id)
    useEffect(()=>{
        fetch(`http://localhost:3001/blogs/${id}`)
        .then(r=>r.json())
        .then(data=>setBlogs(data))
    },[])
    let indeximg = -1
    let indexdiv = -1
    let indexvid = -1
    console.log(blogs.text)
    const test = blogs.text?.map((text)=>{
        if (text === "img"){
        indeximg++
        return <img src={blogs.image[indeximg]}/>
        }
        if (text === "div"){
        indexdiv++
        return <p>{blogs.divider[indexdiv]}</p>
        }
        if (text === "vid"){
        indexvid++
        return <p>{blogs.video[indexvid]}</p>
        }
        return <p>{text}</p>
    })
        

    return(
        <>
            <div>{blogs.title}</div>
            <div>{blogs.author}</div>
            <div>{blogs.date}</div>
            {test}

        </>
    )
}

export default SingleBlog