export const Skilss = () => {
  return (
    <div>
      <section id="skils" className="pt-36 pb-36">
        <h1 className="text-center text-2xl font-bold lg:text-4xl">
          My <span className="text-primary">Skills</span>
        </h1>
        <div className="container">
          <div className="flex flex-wrap justify-center">
            <div className="w-full px-4 lg:w-1/3" data-aos='fade-up'>
              <div className="mt-16 border p-5 rounded-md border-primary hover:scale-110 transition duration-500 ease-in-out hover:shadow-primary ">
                <div className="flex gap-x-3">
                  <a href="#" className="py-4 max-w-10">
                    <img src="./React-icon.svg.png" alt="reac" />
                  </a>
                  <a href="#" className="py-3 max-w-10">
                    <img src="./tailwind.svg" alt="reac" />
                  </a>
                  <a href="#" className="py-4 max-w-10">
                    <img src="./Vue.js_Logo_2.svg.png" alt="react" />
                  </a>
                  <a href="#" className="py-3 max-w-10">
                    <img src="./iduLChSb1a.jpeg" alt="react" className="rounded-md" />
                  </a>
                  <a href="#" className="py-3 max-w-10">
                    <img src="./Unofficial_JavaScript_logo_2.svg.png" alt="react" />
                  </a>
                </div>
                <h1 className="font-extrabold text-3xl">Front <span className="text-primary">end</span></h1>
                <h2 className="max-w-xl text-md font-semibold">
                I usually use several languages ​​for the front-end to create intuitive and eye-catching designs for web, such as CSS, React, Vue, Next, Tailwind and also javasript.</h2>
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/3" data-aos='fade-up'>
              <div className="mt-16 border p-4 rounded-md border-primary hover:scale-110 transition duration-500 ease-in-out hover:shadow-primary">
                <div className="flex gap-x-3">
                  <a href="#" className="py-4 max-w-10">
                    <img src="./Laravel.svg.png" alt="react" />
                  </a>
                  <a href="#" className="py-3 max-w-16">
                    <img src="./2560px-Node.js_logo.svg.png" alt="react" />
                  </a>
                </div>
                <h1 className="font-extrabold text-3xl">Back <span className="text-primary">end</span></h1>
                <h2 className="max-w-xl text-md font-semibold">
               For the backend i usually create a restful api using several languages ​​such as laravel and node js, then I can consume it for my front end, so that i can create a web application that can handle on back end side.</h2>
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/3" data-aos='fade-up'>
              <div className="mt-16 border p-4 rounded-md border-primary hover:scale-110 transition duration-500 ease-in-out hover:shadow-primary">
                <div className="flex">
                  <a href="#" className="py-3 max-w-8">
                    <img src="./1667px-Figma-logo.svg.png" alt="react" />
                  </a>
                </div>
                <h1 className="font-extrabold text-3xl">Web <span className="text-primary"> Design</span></h1>
                <h2 className="max-w-xl text-md font-semibold">For web design, I like using Figma because it is very easy to use and the results are quite satisfying so I usually use it. For web design needs. And usually i practice my design on figma</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
