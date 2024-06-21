import { FaWhatsapp } from 'react-icons/fa';
import { MdOutlineAttachEmail } from 'react-icons/md';
import { FaCity } from 'react-icons/fa6';
export const Contact = () => {
  interface info {
    email: string;
    no_telp: string;
    addres: string;
  }

  const infos: info[] = [
    {
      email: 'hpsgaming212@gmail.com',
      no_telp: '(+62)-895-1800-1464',
      addres: 'Kab.Bogor Kp. Ciherang Kidul RT 02/02',
    },
  ];
  return (
    <section id="contact" className="pt-28 pb-32">
      <div className="container">
        <div className="w-full px-4">
          <div className="text-center font-bold text-3xl mb-5 md:text-5xl">
            Contact <span className="text-primary">Me</span>
          </div>
          <p className="text-center max-w-lg mx-auto  md:text-xl">Feel Free To Contact Me if you want me to join with your project</p>
        </div>
        <div className="flex flex-wrap items-center justify-center" data-aos="fade-up"  >
          <div className="w-full px-4 lg:w-1/2">
            <div className="max-w-md mx-auto">
              <form className="mt-10">
                <div className="w-full mb-8 px-4">
                  <label htmlFor="name" className="font-bold text-base text-primary">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    className="w-full border-b-2 bg-transparent border-gray-300 p-2 px-0 border-r-0 text-base text-white mt-1 focus:ring-primary appearance-none focus:outline-none focus:ring-0 focus:border-primary peer placeholder:text-sm"
                    placeholder="Field Your Name"
                    id="name"
                  />
                </div>
                <div className="w-full mb-8 px-4">
                  <label htmlFor="email" className="font-bold text-base text-primary">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    className="w-full border-b-2 bg-transparent border-gray-300 p-2 px-0 border-r-0 text-base text-white mt-1 focus:ring-primary appearance-none focus:outline-none focus:ring-0 focus:border-primary peer placeholder:text-sm"
                    placeholder="Your Email Address"
                  />
                </div>
                <div className="w-full mb-8 px-4">
                  <label htmlFor="name" className="font-bold text-base text-primary relative">
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    className="w-full border-b-2 bg-transparent border-gray-300 p-2 px-0 border-r-0 text-base text-white mt-1 focus:ring-primary appearance-none focus:outline-none focus:ring-0 focus:border-primary peer placeholder:text-sm placeholder:absolute"
                   
                  ></textarea>
                </div>
                <div className="px-4">
                  {' '}
                  <button id="send" className="bg-secondary w-full py-3 rounded-md text-lg font-bold hover:bg-primary hover:shadow-md hover:shadow-primary transition duration-300 ease-in-out">
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="pt-20 max-w-full px-4 lg:w-1/2 flex items-center justify-center">
              <div className=" bg-primary opacity-90 relative" data-aos="fade-up">
                <h2 className="font-bold px-4 py-4 text-2xl">another information</h2>
                {infos.map((info, index) => (
                  <div key={index} className="px-4 pb-4">
                    <p className="flex items-center gap-x-3 text-lg font-medium tracking-[2px] hover:text-slate-800 transition duration-300 ease-in-out hover:cursor-pointer">
                      <MdOutlineAttachEmail className="w-[40px] h-[10vh] lg:w-[20px]" /> {info.email}
                    </p>
                    <p className="flex items-center gap-x-3 text-lg font-medium tracking-[2px] hover:text-slate-800 transition duration-300 ease-in-out hover:cursor-pointer">
                      <FaWhatsapp className="w-[40px] h-[10vh] lg:w-[20px]" /> {info.no_telp}
                    </p>
                    <p className="flex items-center gap-x-3 text-lg font-medium tracking-[2px] hover:text-slate-800 transition duration-300 ease-in-out hover:cursor-pointer">
                      <FaCity className="w-[40px] h-[10vh] lg:w-[20px]" /> {info.addres}
                    </p>
                  </div>
                ))}
              </div>
          </div>
        </div>
      </div>
    </section>
  );
};
