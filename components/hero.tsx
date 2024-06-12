import Image from 'next/image';
import Link from 'next/link';

export const Hero = () => {
  return (
    <div className="pt-16">
      <div className="container">
        <div className="flex flex-wrap">
          <div className="w-full self-center px-8">
            <h1 className="text-lg mb-3 md:text-3xl">
              Hello I'M <span>Muhammad Hafidz</span>
            </h1>
            <h2 className="text-xl font-extrabold mb-10 md:text-4xl lg:text-7xl lg:mb-12 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-600 to-cyan-400">
              Junior<span className="font-bold lg:block"> Web Developer</span>
              <span className="text-primary font-bold lg:block"> & UI Designer</span>
            </h2>
            <Link href="" className="lg:border-4 border-2 rounded-tr-xl rounded-bl-xl font-semibold text-primary text-lg border-primary px-8 py-3 lg:text-2xl hover:bg-secondary transition duration-300 ease-out hover:text-white">
              About Me
            </Link>
          </div>
          <div className="w-full self-end px-8 ">
            <div className="relative">
              <Image
              src=''
              alt=''
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
