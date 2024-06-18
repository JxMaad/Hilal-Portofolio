export const Project = () => {
  return (
    <div>
      <section id="projects" className="pt-24 pb-20 bg-[#1f252d]">
        <div className="container">
          <div className="w-full px-4 mb-16">
            <div className="text-center font-semibold">
              <h2 className="text-2xl mb-3 md:text-3xl lg:text-4xl">
                Projects i've <span className="text-primary">Created</span>
              </h2>
              <p className="font-medium px-4 md:text-xl lg:text-2xl">Some of the projects I have made to increase my skills</p>
            </div>
          </div>
          <div className="flex flex-wrap w-full px-4 justify-center gap-8" data-aos="fade-up" data-aos-duration="1000">
            <div className="mb-12 lg:w-1/3 border border-primary rounded-md shadow">
              <div className="rounded-md overflow-hidden">
                <img src="/Foto-kelas.png" alt="foto-kelas" width="w-full" />
              </div>
              <h3 className="font-bold mb-3 mt-5 text-2xl px-2">My Class Website</h3>
              <p className="font-extralight tracking-[2px] px-2">This is a website that I have created to collect projects in my class, I created this together with several of my friends.</p>
              <div className="flex gap-x-2 px-2">
                <div className="py-4 max-w-16 grayscale hover:grayscale-0 transition duration-300 ease-in-out">
                  <img src="./React-icon.svg.png" alt="react" />
                </div>
                <div className="py-3 max-w-16 grayscale hover:grayscale-0 transition duration-300 ease-in-out">
                  <img src="./tailwind.svg" alt="react" />
                </div>
              </div>
              <div className="my-4 mx-3 mb-7">
                <a href="https://twinkyxipplgthree.pages.dev/" target="_blank" className="px-7 py-3 bg-primary font-medium text-lg rounded-md">
                  Lihat
                </a>
              </div>
            </div>
            <div className="mb-12 lg:w-1/3 border border-primary rounded-md shadow" data-aos="fade-up" data-aos-duration="1000">
              <div className="rounded-md overflow-hidden">
                <img src="./classmeet-SI.png" alt="foto-kelas" width="w-full" />
              </div>
              <h3 className="font-bold mb-3 mt-5 text-2xl px-2">Information System Classmeet</h3>
              <p className="font-extralight tracking-[2px] px-2">This project was created to display data on the most popular and newest films or movie. Also this project helped me alot about ReactJS</p>
              <div className="flex gap-x-2 px-2">
                <div className="py-4 max-w-16 grayscale hover:grayscale-0 transition duration-300 ease-in-out">
                  <img src="./React-icon.svg.png" alt="react" />
                </div>
                <div className="py-4 max-w-14 grayscale hover:grayscale-0 transition duration-300 ease-in-out">
                  <img src="./Laravel.svg.png" alt="react" />
                </div>
              </div>
              <div className="my-4 mx-3 mb-7">
                <a href="https://hafidz-movie-list.vercel.app/" target="_blank" className="px-7 py-3 bg-primary font-medium text-lg rounded-md hover:bg-secondary">
                  Lihat
                </a>
              </div>
            </div>
            <div className="mb-12 lg:w-1/3 border border-primary rounded-md shadow" data-aos="fade-up" data-aos-duration="1000">
              <div className="rounded-md overflow-hidden">
                <img src="./The-movie.png" alt="foto-kelas" width="w-full" />
              </div>
              <h3 className="font-bold mb-3 mt-5 text-2xl px-2">Movie List </h3>
              <p className="font-extralight tracking-[2px] px-2">This project was created to display data on the most popular and newest films or movie. Also this project helped me alot about ReactJS</p>
              <div className="flex gap-x-2 px-2">
                <div className="py-4 max-w-16 grayscale hover:grayscale-0 transition duration-300 ease-in-out">
                  <img src="./React-icon.svg.png" alt="react" />
                </div>
                <div className="py-3 max-w-16 grayscale hover:grayscale-0 transition duration-300 ease-in-out">
                  <img src="./tailwind.svg" alt="react" />
                </div>
                <img src="./tmdb.svg" alt="daa" className="py-3 max-w-16 grayscale hover:grayscale-0 transition duration-300 ease-in-out" />
              </div>
              <div className="my-4 mx-3 mb-7">
                <a href="https://hafidz-movie-list.vercel.app/" target="_blank" className="px-7 py-3 bg-primary font-medium text-lg rounded-md">
                  Lihat
                </a>
              </div>
            </div>
            <div className="mb-12 lg:w-1/3 border border-primary rounded-md shadow" data-aos="fade-up" data-aos-duration="1000">
              <div className="rounded-md overflow-hidden">
                <img src="./The-movie.png" alt="foto-kelas" width="w-full" />
              </div>
              <h3 className="font-bold mb-3 mt-5 text-2xl px-2">Movie List </h3>
              <p className="font-extralight tracking-[2px] px-2">This project was created to display data on the most popular and newest films or movie. Also this project helped me alot about ReactJS</p>
              <div className="flex gap-x-2 px-2">
                <div className="py-4 max-w-16 grayscale hover:grayscale-0 transition duration-300 ease-in-out">
                  <img src="./React-icon.svg.png" alt="react" />
                </div>
                <div className="py-3 max-w-16 grayscale hover:grayscale-0 transition duration-300 ease-in-out">
                  <img src="./tailwind.svg" alt="react" />
                </div>
                <img src="./tmdb.svg" alt="daa" className="py-3 max-w-16 grayscale hover:grayscale-0 transition duration-300 ease-in-out" />
              </div>
              <div className="my-4 mx-3 mb-7">
                <a href="https://hafidz-movie-list.vercel.app/" target="_blank" className="px-7 py-3 bg-primary font-medium text-lg rounded-md">
                  Lihat
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
