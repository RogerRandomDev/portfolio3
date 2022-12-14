//name,percent proficiency
import {useState,useEffect} from "react"
import {BarChart} from "chartjs"
const mySkills=[
    ["JavaScript",90],
    ["Java",70],
    ["Python",60],
    ["CSS",50],
    ["HTML",65],
    ["C++",30],
    ["GDScript",95]
]


function Skills(){
    const [windowSize,setWindowSize] = useState(window.innerWidth)
    window.addEventListener('resize',(e)=>{setWindowSize(window.innerWidth)})
    useEffect(()=>{

    },[windowSize])
return <>
    <h1 class="text-4xl font-bold text-white w-fit mx-auto" id="Skills">SKILLS</h1>
    <p className="mx-auto w-fit sm:max-w-[75vw] text-xl text-center text-gray-300">
            Skills I have gained through my time programming and a personal scale of experience and understanding of each
    </p>
    <div class="mx-auto flex flex-row flex-wrap sm:w-fit md:w-[87.5vw] w-fit sm:w-[75vw] gap-1 md:gap-2 text-2xl">
        {mySkills.map((skill)=>{
            return (
            <div className="mx-auto bg-black text-center md:w-[20rem] min-h-[1.5rem]" style={windowSize<768?{'min-height':`11.5rem`}:{'min-width':`20rem`}}>
                <p  className="text-center bg-gray-600 text-white font-bold m] sm:min-w-[2.5rem] text-xs sm:text-md sm:text-xl">{skill[0]}</p>
                <div className='bg-gray-800 text-white text-center' style={windowSize<768?{'height':`${skill[1]/10}rem`}:{'width':`${skill[1]/5}rem`}}>{skill[1]}%</div>
                
            </div>
        )})}
    </div>
    <hr />
</>
}



export default Skills