import "../css/About.css"
import Navbar from "./navbar"
import { useEffect, useRef, useState } from "react"

function adjust(){
    document.querySelector('.timeline2').style.left="25px";
    // document.querySelectorAll('.circle_l').style.justifySelf="start"
    // document.querySelectorAll('.circle_l').style.transform="translate(17px,-1px)"
    // document.querySelectorAll('.circle_r').style.justifySelf="start"
    // document.querySelectorAll('.circle_r').style.transform="translate(17px,-1px)"
    // document.querySelectorAll('.second_programming').style.transform ="translate(0,0)"
    // document.querySelectorAll('.first_programming').style.transform ="translate(0,0)"
    document.querySelectorAll(".circle_l").forEach(element =>{
        element.style.justifySelf = "start"
        element.style.transform="translate(17px,-1px)"
    })
    document.querySelectorAll(".circle_r").forEach(element =>{
        element.style.justifySelf = "start"
        element.style.transform="translate(17px,-1px)"
    })
    document.querySelectorAll(".first_programming").forEach(element => {
        element.style.transform ="translate(0,0)"
        element.style.width ="90%"
    })
    document.querySelectorAll(".second_programming").forEach(element => {
        element.style.transform ="translate(0,0)"
        element.style.width ="90%"
    })
    document.querySelectorAll(".programming_p").forEach(element => {
        element.style.width="100%"
        element.style.textAlign="left"
    })
    document.querySelectorAll(".programming_pr").forEach(element => {
        element.style.width="100%"
        element.style.textAlign="left"
    })

}

export default function About(){
    const inputRef = useRef(0);
    const inputRef2 = useRef(0);
    const[height,setHeight] = useState();
    const[height2,setHeight2] = useState();

    useEffect(() => {
        setHeight(inputRef.current.getBoundingClientRect().height)
        setHeight2(inputRef2.current.getBoundingClientRect().height)
        if (window.screen.availWidth <= 742){
            adjust()
        }
        console.log(height)
        document.querySelector("#timeline").style.height=height +"px"
        document.querySelector(".timeline2").style.height=(height2-50) +"px"

    })
    
    

    return(
        <div>
            
            <Navbar />
            <h1 class="title">
                ABOUT ME
            </h1>
            <div class="timeline" id="timeline"></div>
            <div class="container" ref={inputRef}>
                <div class="first">
                    <div class="circle1"></div>
                    <div class="line1"></div>
                    <h1 class="experience_title">My Experience: </h1> 
                    <p class="experience_p">
                    I learned how to programme on my own. The Internet has taught me a lot. To reach my ability level, I have accumulated knowledge from every possible source. I have assisted numerous individuals and advised numerous more. The programming taught in school never interested me. I didn't realise how interesting this genre is until I started exploring it on my own. Now, I look for solutions to challenges in real life using my abilities and knowledge.
                    </p>
                </div>
                <div class="second">
                    <div class="circle1"></div>
                    <div class="line1"></div>
                    <h1 class="experience_title">My Interests and Hobbies:</h1> 
                    <p class="experience_p">
                    Basketball and Football are my favourite sports. I am also an Amateur Cuber with the fastest time of 19.56s. I like programming and rap music, of course. Eminem is my favourite rapper, and Arsenal is my favourite soccer team. I recently developed an interest in Formula 1.
                    </p>
                </div>
            </div>
            <div class="third">
                    <div class="circle1"></div>
                    
                    <h1 class="experience_title">My programming path: </h1> 
                    
            </div>
            <div class="programming_path" ref={inputRef2}>
                <div class="timeline2" ></div>
                <div class="first_programming">
                    {/* <div class="inner_line1"></div> */}
                    <div class="circle_l"></div>
            
                    {/* <div class="inner_circle"></div> */}
                        <p class="programming_p">
                        I started with a python udemy course
                        </p>
                </div>
                <div class="second_programming">
                {/* <div class="inner_line2"></div> */}
                    <div class="circle_r"></div>
                    {/* <div class="inner_circle2"></div> */}
                    <p class="programming_pr">
                    Then learnt Java so that I could code Minecraft Plugins.
                    </p>
                </div>
                <div class="first_programming">
                    <div>

                    </div>
                    <div class="circle_l"></div>
                    <p class="programming_p">
                     I then moved on to coding tougher programs to push my skills to the limit.
                    </p>
                </div>
                <div class="second_programming">
                    <div>
                    </div>
                    <div class="circle_r"></div>
                    <p class="programming_pr">
                     From there I was intrested in web developement so started learning JavaScript.
                    </p>
                </div>
                <div class="first_programming">
                    <div>

                    </div>
                    <div class="circle_l"></div>
                    <p class="programming_p">
                     I initally started making websites with vanilla JavaScript, HTML and CSS.
                    </p>
                </div>
                <div class="second_programming">
                    <div>
                    </div>
                    <div class="circle_r"></div>
                    <p class="programming_pr">
                     I then moved on to ExpressJS which had made it easier to host websites and multiple pages

                    </p>
                </div>
                <div class="first_programming">
                    <div>

                    </div>
                    <div class="circle_l"></div>
                    <p class="programming_p">
                      I then got into Arduinos and learnt C++ for a Project
                    </p>
                </div>
                <div class="second_programming">
                    <div>
                    </div>
                    <div class="circle_r"></div>
                    <p class="programming_pr">
                     I then learnt ReactJS. It was hard but it saved me a lot of time nowI then moved on to ExpressJS which had made it easier to host websites and multiple pages

                    </p>
                </div>
            </div>
            <div class="first_programming">
                    <div class="circle_l"></div>
                    <p class="programming_p end">
                    I am now currently learning golang and improving my skills in other languages as well
                    </p>
                </div>
            
            
        </div>
      
    )
}