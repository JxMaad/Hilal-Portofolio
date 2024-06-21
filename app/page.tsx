'use client';
import { About } from '@/components/about';
import { Contact } from '@/components/contact';
import { Footer } from '@/components/footer';
import { Hero } from '@/components/hero';
import {Navbar} from '@/components/navbar'
import { Project } from '@/components/projects';
import { Skilss } from '@/components/skills';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      // disable : "phone",
      easing: 'ease-out-cubic',
    });
  });

  return (
    <div>
        {/* Navbar section */}
        <Navbar/>
      <div id='home' className="pt-10 pb-10 md:pt-36 md:pb-32 relative max-w-full min-h-screen mx-auto">
      
        {/* Hero section */}
        <Hero id='home'/>
        {/* about section */}
        <About id='about'/>
        {/* skilss section */}
        <Skilss/>
        {/*  Project Sections*/}
        <Project/>
        {/* contact section */}
        <Contact/>
      </div>
     <Footer/>
    </div>
  );
}

