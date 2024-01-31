import React, { useEffect, useState } from 'react'

const Pagina = () => {
    // const [load,setLoad] = useState(false)
    const[post,setPost] = useState([])

    console.log(post, "posttt");
    const [currentpage ,setCurrentpage] = useState(1)
    const [postperpage,setPostperpage] = useState(10)
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response)=>response.json())
        .then((data)=>{


            setPost(data)
        })
    },[])

    let lastindex = currentpage*postperpage
    let firstindex = lastindex-postperpage
    
    console.log(lastindex, firstindex, "last and first");
    
    let currentpost = post.slice(firstindex, lastindex)

    console.log(currentpost, "Current Post");


    let pageNo = []
    for(let i=1;i<=Math.ceil(post.length/postperpage);i++){
        pageNo.push(i)
    }
    function pagi (item){
        setCurrentpage(item)
    }
    function pervious(){
        if(currentpage>1){
            setCurrentpage(currentpage-1)
        }
        else{
            setCurrentpage(Math.ceil(post.length/postperpage))
        }
    }
    function next (){
        if(currentpage<Math.ceil(post.length/postperpage)){
            setCurrentpage(currentpage+1)
        }
        else{
            setCurrentpage(1)
        }
    }
  return (
    <div>
        <h1>PAGINATION</h1>
        <ul>
           {currentpost.map((item)=>{
            return(<li>{item.id}{item.title}</li>)
           })}
        </ul>
        <div>
            {pageNo.map((item)=>{
                return(<button onClick={()=>pagi(item)}>{item}</button>)
            })}
        </div>
        <button onClick={pervious}>pervious</button>
        <button onClick={next}>next</button>


    </div>
  )
}

export default Pagina