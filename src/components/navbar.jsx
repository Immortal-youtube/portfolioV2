import "../css/navbar.css"
import "../css/index.css"
import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
var dropped = false;
function makeVisible(){
    document.querySelector("#nav").style.animation = 'example forwards'
    document.querySelector("#nav").style.animationDuration = '300ms'
    document.querySelectorAll("#nav > li").forEach(element => {
        element.style.animation="text forwards"
        element.style.animationDuration = "2s"
    })
    
}
function makeInvisible(){
    document.querySelector("#nav").style.animation = 'example_inverse forwards'
    document.querySelector("#nav").style.animationDuration = '300ms'
    document.querySelectorAll("#nav > li").forEach(element => {
        element.style.animation="text_inverse forwards"
        element.style.animationDuration = "2s"
    })
    
}

async function check(){
    if(dropped === false){
        makeVisible()
        dropped = true
    }else{
        makeInvisible()
        dropped = false
    }
    console.log(dropped)

}

async function visible(){
    document.querySelectorAll("#nav > li").forEach(element => {
        element.style.visibility = "visible"
        document.querySelector("#nav").style.display="flex"
    })
    document.querySelector("#dropdown").style.visibility = "hidden"

}
async function invisible(){
    
    document.querySelectorAll("#nav > li").forEach(element => {
        element.style.visibility = "hidden"
        element.style.opacity = 0
        
        document.querySelector("#nav").style.display="inline-grid"
    })
    
    
}
    
export default function Navbar(){
    
    var inputRef = useRef(0);
    let [x_screen,setX_screen] = useState(0) ;
    // let [navtext,setnavtext] = useState("flex space-x-5");
    useEffect(() => {
      setX_screen(window.screen.availWidth);
    },[])
    if(x_screen <= 604){
        invisible()
        
    }else{
        visible()
    }
    return(
        <>
        <nav>

            <ul class="nav" id="nav" ref={inputRef}>
            <button id="dropdown" onClick={check}>
                |||
            </button>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                <a href="/about">About</a>
                </li>
                <li>
                    <a href="/myprojects">My Projects</a>
                </li>
                <li>
                    <a href="/articles">Articles</a>
                </li>
            </ul> 
            
        </nav>
        </>
    )
}