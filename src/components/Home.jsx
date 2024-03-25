import Navbar from "./navbar"
import '../css/Home.css'
export default function Home(){
    return (
        <div class="main">
        
        <Navbar />
        <h1 class="title">HEY THERE, MY NAME IS ANSH !</h1>
        <p class="title_p">
        I am a full stack developer.I have made many minecraft plugins, Discord Bots, Arduino Projects, Websites, etc.
        My main languages are Python, Java and I have worked with MongoDB,SQL,etc. If you would like to collaborate with me on any project,
        You can connect with me on Discord or on Github Make sure to check my Youtube channel as well.
        </p>
        <h1 class="on_going_projects_title">On going projects: </h1>
        <ul class="on_going_projects_list">
          <li>Computer Vision based Cube Solver(Kociemba's Algorithm)</li>
          <li>Updating Discord bot</li>
          <li> Voice Assistant using ChatGPT</li>
          <li> Project CLI (To setup different kinds of Projects)</li>
        </ul>
        <h1 class="on_going_projects_title">My thoughts about programming: </h1>
        <p class="p2">
        Indeed, programming is the industry of the future. First off, programming is not something that is taught in schools. You learn to memorise syntax in school in order to correctly answer questions and gain points. Learning if and else loops will never be able to teach programming's actual enjoyment. Although the initial stages of the Process will be tedious, they will be worthwhile. Just one piece of information can enable you to achieve so much more.
        </p>
      </div>
    )
}