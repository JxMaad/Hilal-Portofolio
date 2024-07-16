export const Footer = () => {
  return (
    <>
      <section className="pt-32 pb-5 bg-footer">
        <div className="container">
          <div className="flex flex-wrap items-center justify-center border-slate-600 border-b-2 pb-24">
            <div className="w-full px-4 md:w-1/3 mt-10">
              <a href="#home">
                <img src="./Logo_Hilal-removebg-preview.png" alt="Hilal Ahmad Mujaddid" className="w-32 h-32 inline-block" />
              </a>
              <h3 className="text-5xl font-bold mb-3">
                Maad
              </h3>
              <p className="text-2xl font-semibold mb-3">
                Contact <span className="text-green-400">Me</span>
              </p>
              <p className="font-semibold tracking-[2px] ">
                lalxmilo0607@gmail.com
              </p>
            </div>
            <div className="w-full px-4 md:w-1/3 mt-56">
              <h3 className="text-3xl font-bold mb-3">Follow Me On</h3>
              <ul className="font-medium tracking-[2px] underline">
                <li>
                  <a href="https://github.com/JxMaad" target="_blank">
                    Github
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/jxmaad/" target="_blank">
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/channel/UCiQGIlgvXzkpoeXU8PW5SIg"
                    target="_blank"
                  >
                    Youtube
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/hilal-ahmad-mujaddid-782ba6310/"
                    target="_blank"
                  >
                    Linkedin
                  </a>
                </li>
                <li>
                  <a href="mailto:lalxmilo0607@gmail.com" target="_blank">
                    Gmail
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-full px-4 md:w-1/3 mt-56">
              <h3 className="text-4xl font-bold mb-3">Links</h3>
              <ul className="font-medium tracking-[2px] underline">
                <li>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#skills">Skills</a>
                </li>
                <li>
                  <a href="#project">Project</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-10 w-full">
            <div className="flex items-center justify-center gap-5">
              <a
                href="https://github.com/JxMAAD"
                target="_blank"
                className="border rounded-full border-abu w-9 h-9 flex items-center justify-center hover:bg-primary hover:border-slate-300 text-white "
              >
                <svg
                  role="img"
                  width="20"
                  className="fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>GitHub</title>
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/hilal-ahmad-mujaddid-782ba6310/"
                target="_blank"
                className="border rounded-full border-abu w-9 h-9 flex items-center justify-center hover:bg-primary hover:border-slate-300 text-white "
              >
                <svg
                  role="img"
                  width="48"
                  className="fill-current"
                  viewBox="0 0 48 48"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Linkedin</title>
                  <path d="M20.9716667,33.5527338 L25.001,33.5527338 L25.001,27.1328007 C25.001,25.439485 25.3213333,23.7988354 27.4206667,23.7988354 C29.491,23.7988354 29.517,25.7351486 29.517,27.2404662 L29.517,33.5527338 L33.5506667,33.5527338 L33.5506667,26.4341413 C33.5506667,22.9381777 32.796,20.2505391 28.711,20.2505391 C26.7483333,20.2505391 25.432,21.3265278 24.8943333,22.3471839 L24.839,22.3471839 L24.839,20.5725357 L20.9716667,20.5725357 L20.9716667,33.5527338 Z M16.423,14.1202696 C15.1273333,14.1202696 14.0823333,15.1682587 14.0823333,16.4595785 C14.0823333,17.7508984 15.1273333,18.7992208 16.423,18.7992208 C17.7133333,18.7992208 18.761,17.7508984 18.761,16.4595785 C18.761,15.1682587 17.7133333,14.1202696 16.423,14.1202696 L16.423,14.1202696 Z M14.4026667,33.5527338 L18.4406667,33.5527338 L18.4406667,20.5725357 L14.4026667,20.5725357 L14.4026667,33.5527338 Z M9.76633333,40 C8.79033333,40 8,39.2090082 8,38.2336851 L8,9.76631493 C8,8.79065843 8.79033333,8 9.76633333,8 L38.234,8 C39.2093333,8 40,8.79065843 40,9.76631493 L40,38.2336851 C40,39.2090082 39.2093333,40 38.234,40 L9.76633333,40 Z" />
                </svg>
              </a>
              <a
                href="https://www.youtube.com/channel/UCiQGIlgvXzkpoeXU8PW5SIg"
                target="_blank"
                className="border rounded-full border-abu w-9 h-9 flex items-center justify-center hover:bg-primary hover:border-slate-300 text-white "
              >
                <svg
                  role="img"
                  width="20"
                  className="fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>YouTube</title>
                  <path d="M23.498 6.186c-.29-1.086-1.142-1.938-2.228-2.228C19.28 3.5 12 3.5 12 3.5s-7.28 0-9.27.458C1.644 4.247.792 5.1.502 6.186.043 8.175.043 12 .043 12s0 3.825.459 5.814c.29 1.086 1.142 1.938 2.228 2.228 1.99.459 9.27.459 9.27.459s7.28 0 9.27-.458c1.086-.29 1.938-1.143 2.228-2.229.458-1.99.458-5.814.458-5.814s.017-3.825-.459-5.814zM9.75 15.568V8.432L15.818 12 9.75 15.568z" />
                </svg>
              </a>
              <a
                href="mailto:lalxmilo0607@gmail.com"
                className="w-9 h-9 text-white border border-abu rounded-full flex items-center justify-center hover:bg-primary"
                target="_blank"
              >
                <svg
                  role="img"
                  className="fill-current"
                  width="20"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Gmail</title>
                  <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/jxmaad/"
                target="_blank"
                className="border rounded-full border-abu w-9 h-9 flex items-center justify-center hover:bg-primary hover:border-slate-300 text-white "
              >
                <svg
                  role="img"
                  width="20"
                  className="fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Instagram</title>
                  <path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.366.062 2.633.332 3.608 1.308.975.975 1.246 2.242 1.308 3.608.058 1.265.069 1.645.069 4.849s-.012 3.584-.07 4.849c-.062 1.366-.332 2.633-1.308 3.608-.975.975-2.242 1.246-3.608 1.308-1.265.058-1.645.069-4.849.069s-3.584-.012-4.849-.07c-1.366-.062-2.633-.331-3.608-1.307-.975-.975-1.246-2.242-1.308-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.849c.062-1.366.331-2.633 1.307-3.608C4.515 2.77 5.782 2.5 7.148 2.438 8.413 2.38 8.793 2.368 12 2.368zM12 0C8.741 0 8.332.015 7.052.072 5.775.13 4.673.414 3.75 1.337 2.827 2.26 2.543 3.362 2.485 4.639 2.428 5.918 2.413 6.327 2.413 9.586s.015 3.668.072 4.947c.058 1.276.342 2.378 1.264 3.301.923.923 2.025 1.207 3.301 1.264 1.276.057 1.685.072 4.947.072s3.668-.015 4.947-.072c1.276-.058 2.378-.342 3.301-1.264.923-.923 1.207-2.025 1.264-3.301.057-1.276.072-1.685.072-4.947s-.015-3.668-.072-4.947c-.058-1.276-.342-2.378-1.264-3.301-.923-.923-2.025-1.207-3.301-1.264C15.668.015 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 6.162 6.162A6.162 6.162 0 0 0 12 5.838zm0 10.162a3.999 3.999 0 1 1 3.999-3.999A3.999 3.999 0 0 1 12 16.162zm6.406-11.845a1.44 1.44 0 1 1-1.44-1.44 1.44 1.44 0 0 1 1.44 1.44z" />
                </svg>
              </a>
            </div>
          </div>
          <div className="text-center pt-12">
            <p>
              &copy; {new Date().getFullYear()} | Built by{' '}
              <span className="text-green-400 font-semibold">
                Hilal Ahmad Mujaddid
              </span>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
