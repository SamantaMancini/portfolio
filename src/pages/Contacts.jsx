import { useEffect } from "react";
import Aos from "aos";
import emailjs from "@emailjs/browser";
import Loading from "../components/Loading";

const Contact = () => {
  const { loading, setLoading } = Loading();

  useEffect(() => {
    emailjs.init(import.meta.env.VITE_SOME_KEY);
    Aos.init({ duration: 750 });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const serviceId = import.meta.env.VITE_APP_SERVICE;
    const templateId = import.meta.env.VITE_APP_TEMPLATE;
    const { name, email, message } = e.target.elements;

    try {
      setLoading(true);
      await emailjs.send(serviceId, templateId, {
        name: name.value,
        email: email.value,
        message: message.value,
        from_name: name.value,
      });
      setLoading(false);
      alert("email successfully sent");
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  return (
    <section className="overflow-x-hidden">
      <div
        data-aos="fade-left"
        className="flex flex-col items-center justify-center"
      >
        <h2 className="text-[52px] font-semibold leading-normal uppercase text-cyan-500">
          Contact me
        </h2>
        <form className="flex flex-col gap-2 lg:w-1/2" onSubmit={handleSubmit}>
          <div className="lg:flex gap-2">
            <label htmlFor="name"></label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full lg:my-3 my-4 rounded-lg bg-slate-800 p-4 border-2 border-[#ff19f3] b_glow text-xl text-slate-500"
              placeholder="Your Name"
              required
            />
            <label htmlFor="email"></label>
            <input
              type="Email"
              id="email"
              name="email"
              className="w-full lg:my-3 my-4 rounded-lg bg-slate-800 p-4 border-2 border-[#ff19f3] b_glow text-xl text-slate-500"
              placeholder="Your Email Address"
              required
            />
          </div>
          <textarea
            id="message"
            name="message"
            className="w-full rounded-lg bg-slate-800 p-4 border-2 border-[#ff19f3] b_glow text-xl text-slate-500 resize-none h-[10rem]"
            placeholder="Your Message"
            rows={10}
            required
          ></textarea>
          <button
            className="neno-button shadow-xl hover:shadow-cyan-800/50 text-white border-2 border-[#ff19f3] bg-[#ff19f3] hover:text-cyan-500 hover:bg-slate-800 rounded-lg py-4 px-8 my-6 uppercase relative overflow-hidden b_glow text-xl text-bold"
            type="submit"
            disabled={loading}
          >
            {loading ? "sending.." : "send"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
