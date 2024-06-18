
import Link from 'next/link';

  interface HeroProps {
    id : string
  }

export const Hero : React.FC<HeroProps>= ({id}) => {
  
  return (
    <section  className="pt-16 pb-20">
      <div className="container">
        <div className="flex flex-wrap">  
          <div className="w-full lg:w-[65%] self-center px-4">
            <h1 className="text-lg mb-3 md:text-3xl" data-aos='fade-down' data-aos-delay='200' >
              Hello I'M <span>Muhammad Hafidz</span>
            </h1>
            <h2 className="text-xl font-extrabold mb-10 md:text-4xl lg:text-7xl lg:mb-12 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-600 to-cyan-400" data-aos="fade-right" >
              Junior <span className="font-bold lg:block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-600 to-cyan-400" data-aos="fade-right">Web Developer</span>
              <span className="text-primary font-bold lg:block" data-aos="fade-right"> & UI Designer</span>
            </h2>
            <Link data-aos="fade-right" href="#about"className="lg:border-4 border-2 rounded-tr-xl rounded-bl-xl font-semibold text-primary text-lg border-primary px-8 py-3 lg:text-2xl hover:bg-secondary transition duration-300 ease-out hover:text-white">
              About Me
            </Link>
          </div>
          <div className="w-full lg:w-[35%] self-end px-4 ">
            <div className="relative mt-10 top-10 lg:top lg:mt-0 xl:right-7 md:right-0">
              <img src="./hapis.png" alt="not showing" className="max-w-full mx-auto rounded-full overflow-hidden bg-gradient-to-r lg:w-[500px] w-[310px]  from-blue-500 bg-sky-400 to-cyan-400 " data-aos-delay='400' data-aos='fade-up' />
              <div className='absolute top-2 -z-10 bg-sky-500/30 h-[410px] max-w-[500px] mx-auto inset-8 blur-3xl rounded-full'></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
