import Image from 'next/image';
import Link from 'next/link';

export const Hero = () => {
  return (
    <div className="pt-16">
      <div className="container">
        <div className="flex flex-wrap">  
          <div className="w-full lg:w-[60%] self-center px-4">
            <h1 className="text-lg mb-3 md:text-3xl">
              Hello I'M <span>Muhammad Hafidz</span>
            </h1>
            <h2 className="text-xl font-extrabold mb-10 md:text-4xl lg:text-7xl lg:mb-12 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-600 to-cyan-400">
              Junior <span className="font-bold lg:block">Web Developer</span>
              <span className="text-primary font-bold lg:block"> & UI Designer</span>
            </h2>
            <Link href="" className="lg:border-4 border-2 rounded-tr-xl rounded-bl-xl font-semibold text-primary text-lg border-primary px-8 py-3 lg:text-2xl hover:bg-secondary transition duration-300 ease-out hover:text-white">
              About Me
            </Link>
          </div>
          <div className="w-full lg:w-[40%] self-end px-4 ">
            <div className="relative mt-10 lg:mt-0 right-0">
              <Image src="/Foto_1-removebg-preview (1).png" alt="not showing" width={420} height={420} className="max-w-full mx-auto rounded-md overflow-hidden" />
              <span className="">
                <svg className="absolute top-0 -z-10 lg:scale-125" viewBox=" 0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill="#0F62FE"
                    d="M65.5,-51.1C79.1,-35.1,80.4,-8.2,73.4,14.4C66.3,36.9,50.9,55.2,34.1,58.7C17.3,62.1,-0.8,50.7,-16.9,40.8C-32.9,30.8,-46.9,22.4,-51.6,9.5C-56.3,-3.3,-51.8,-20.6,-41.7,-35.7C-31.6,-50.8,-15.8,-63.9,5.1,-67.9C25.9,-72,51.8,-67,65.5,-51.1Z"
                    transform="translate(100 100)"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
