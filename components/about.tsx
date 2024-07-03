import { FaPerson } from "react-icons/fa6";
import { LuGamepad2 } from "react-icons/lu";
import { CiCalendarDate } from "react-icons/ci";
import React from "react";

interface AboutProps {
    id : string
}
export const About : React.FC<AboutProps> = ({id}) => {
    return (
        <div >
            
           <div   className="relative -z-10"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#1f252d" fillOpacity="1" d="M0,64L60,64C120,64,240,64,360,74.7C480,85,600,107,720,112C840,117,960,107,1080,96C1200,85,1320,75,1380,69.3L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg></div>

           <section id={id} className="pt-10 pb-20 bg-[#1f252d]"  >
               <div className="container" >
                <div className="flex flex-wrap md:flex-row-reverse justify-center" >
                        <div className="w-full px-4 lg:w-1/2"  data-aos="fade-up">
                            <h1 className="font-bold text-2xl mb-3 lg:text-5xl">About <span className="text-primary">Me</span></h1>
                            <h2 className="font-semibold text-lg lg:text-2xl mb-3">My Name <span className="text-primary">Muhammad Hafidz </span></h2>
                            <p className="max-w-xl leading-relaxed tracking-[3px] text-md mb-3 lg:text-lg">Hello everyone, my name is Muhammad Hafidz Furqon, I was born in Bogor and this is a glimpse of me, I am a student majoring in software and game development and I have create some website development also web design, I am committed to working and can develop experience in IT field.
                            </p>
                            <button className="border px-5 py-2 hover:bg-primary transition duration-300 ease-in-out text-lg">Download CV</button>
                        </div>
                       <div className="w-full lg:w-1/2 flex md:justify-normal justify-center my-9 lg:my-0 relative">
                        <div className="absolute max-w-full px-2 bg-primary shadow left-2 z-10 top-2 rounded-md flex h-7 items-center justify-center font-medium" data-aos="fade-up"><CiCalendarDate  className="w-5"/>18 Januari 2007</div>
                        <div className="absolute w-[90px] bg-primary shadow -right-3 z-10 top-10 rounded-md flex h-7 items-center justify-center font-medium lg:right-20" data-aos="fade-up"><FaPerson className="w-5"/>ENFJ</div>
                        <div className="absolute w-[90px] bg-primary shadow left-0 z-10 -bottom-0 rounded-md flex h-7 items-center justify-center font-medium text-md px-2" data-aos="fade-up"><LuGamepad2  className="w-5"/>Futsal</div>
                        <img src="./hapis-2.jpg" alt="image" className='w-[400px] relative top-0 rounded-md lg:w-[500px]' data-aos='flip-left'/>
                       </div>
                </div>
               </div>
           </section>
        </div>
    )
    }