
import { useEffect } from "react";
import "../css/Articles.css"
import Navbar from "./navbar"
let check = false;

function show(id){
    document.getElementById(id).parentElement.style.animation = "extend forwards"
    document.getElementById(id).parentElement.style.animationDuration = "3s"
    console.log(document.getElementById(id).parentElement.style)

    check = true
    
}

function hide(id){
    document.getElementById(id).parentElement.style.animation = "extend_reverse forwards"
    document.getElementById(id).parentElement.style.animationDuration = "3s"




    
    
    check = false
}


export default function Articles(){
    function expand(id){
        if(check === false){
            show(id)
        }else{
            hide(id)
        }
        
    }
    
    return(
        <div>
            <Navbar/>
            <h1 class="title">Articles</h1>
            <div class="container_article">
                <div class="main_container">
                    <div class="article_card" onClick={() => expand("1")}>
                        <div class="outer_card_article">
                            <h1 class="sub_title_article"> Statistics in Sports</h1>
                            <h1 class="sub_date_article">07 July 2023</h1>
                        </div>
                    <div class="inner_card_article">
                        <p class="paragraph" id="1">
                            We all enjoy playing sports. A game of football or basketball does a lot for the 
                                human body. But what if we are going competitive in a sport? If we are planning to represent our nations or just in general trying 
                                to improve our game, then the habit of practicing all day and night eventually becomes ineffective. As a habit, we turn to technology 
                                to find our solution and this is how statistics was introduced into sports. Nowadays we can find all kinds of data on every player. 
                                This not only helps the player identify what they need to work on but also increases their worth as various clubs and teams sign these 
                                players based on their stats. As an individual we can use sensors that collect the data and run algorithms on the data so that we know 
                                what areas you are lacking in and how we should work on them to take our game to the next level. This now helps us focus on what matters 
                                and not on what doesn't
                        </p>
                    </div>
                        
                </div>
                
                </div>
                
                <div class="main_container">
                    <div class="article_card">
                        
                        <div class="outer_card_article">
                            <h1 class="sub_title_article"> Are we the problem ?</h1>
                            <h1 class="sub_date_article">27 June 2023</h1>
                        </div>
                        <div class="inner_card_article">
                            <p class="paragraph">
                            We, as humans have been considered superior to other organisms due to our ability 
                                to solve problems using our intellect and skills. Although nowadays, we are prone to creating our problems rather than solving the 
                                already existing problems rather than solving the already existing problems. These problems have gone overlooked for so long that it impacts our
                                development. An example could be Microsoft Tay, this would have been a big step in the Tech Industry if not for the human behavior coming in the way. 
                                Another example could be the hiring AI created by Amazon, revealing the gender bias among us humans. From being problem solvers to becoming problem 
                                creators, this is not the kind of development we aim for as a community. This raises the question of whether or not instead of searching for problems 
                                to solve, we have become the problem. 
                            </p>
                        </div>
                        
                    </div>
                </div>
                <div class="main_container">
                    <div class="article_card">
                        
                        <div class="outer_card_article">
                            <h1 class="sub_title_article"> Rapid changes</h1>
                            <h1 class="sub_date_article">23 June 2023</h1>
                        </div>
                        <div class="inner_card_article">
                            <p class="paragraph">
                            We all don't need to be reminded that technology advances quickly, just a blink and a new kind of chipset or processor might come out. One example could be how before you would have a 24-pin connector for your motherboard. Well, now that is replaced by 2 x 6-pin connectors. These rapid changes can also be seen in prices. We all remember the good old days when buying a graphic card did not make an irreparable hole in your wallet. Before, the rule was that the more money you are willing to spend, the more performance you get. Well, we now see that rule being broken as you no longer get the same kind of increment in performance no matter how much money you are willing to throw in.
                            </p>
                        </div>
                        
                    </div>
                </div>
                <div class="main_container">
                    <div class="article_card">
                        
                        <div class="outer_card_article">
                            <h1 class="sub_title_article"> Perfection in the Tech Industry</h1>
                            <h1 class="sub_date_article">21 June 2023</h1>
                        </div>
                        <div class="inner_card_article">
                            <p class="paragraph">
                            In the tech industry, perfection is essential.The number of people who are familiar 
                        with Steve Jobs is one example. There is a chance that if you ask the same folks who Andy Rubin is, they won't know. As a community of 
                        people who use and appreciate technology, we all tend to be so preoccupied with the greatest that we never consider the runners up. 
                        Human nature is what it is, and it cannot be changed. Because all you want is the newest iPhone, why should you be concerned about 
                        Andy Rubin, the man who built Android. Because Apple produces some of the best goods, we all covet Apple stuff. Although they are 
                        pricey, the idea that Apple is the finest has already been ingrained in our minds.The key takeaway is that only the person who placed first is ever remembered.
                            </p>
                        </div>
                        
                    </div>
                </div>
                
            </div>
        </div>
    )
}