import React, { Fragment, useEffect, useRef, useState } from "react";
import { SendButton } from "../Common/ButtonComponent";
import emailjs from "@emailjs/browser";

const ContactSection = () => {
  const emailRef = useRef();
  const nameRef = useRef();
  const contentRef = useRef();
  const subjectRef = useRef();
  const [loading, setLoading] = useState(false);

  useEffect(() => emailjs.init("Pn5qMC_amvYKu3IaN"), []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const serviceId = "service_igqpl27";
    const templateId = "template_e59rg5f";
    try {
      setLoading(true);
      await emailjs.send(serviceId, templateId, {
        email: emailRef.current.value,
        name: nameRef.current.value,
        recipient: emailRef.current.value,
        content: contentRef.current.value,
        subject: subjectRef.current.value,
      });
      alert("Your message succesfully sent to Aldrin Villalobos")
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <Fragment>
      <section className="space-y-4 max-w-screen-2xl mx-auto">
        <div className="">
          <div className="border-b-4 flex justify-between">
            <h2 className="mb-0 sm:text-h6Mobile md:text-h6 tracking-tight font-semibold text-gray-900 dark:text-white border-t-4 border-r-4 border-l-4 w-fit p-2">
              Contact
            </h2>
          </div>
          <p className="my-8 font-light sm:text-center md:text-start text-gray-500 dark:text-gray-400 sm:text-aboutMobile md:text-about">
            Ready to stand out in the digital world? Let's craft your unique
            online presence!
          </p>
          <form action="#" className="space-y-8" onSubmit={handleSubmit}>
            <div>
              <label
                for="email"
                className="block mb-2 text-body1 font-medium text-gray-900 dark:text-gray-300"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                className="shadow-sm bg-gray-50 border-4 border-gray-300 text-gray-900 text-sm focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="name@gmail.com"
                ref={emailRef}
                required
              />
            </div>
            <div>
              <label
                for="name"
                className="block mb-2 text-body1 font-medium text-gray-900 dark:text-gray-300"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 border-4 border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Full name"
                ref={nameRef}
                required
              />
            </div>
            <div>
              <label
                for="subject"
                className="block mb-2 text-body1 font-medium text-gray-900 dark:text-gray-300"
              >
                Subject
              </label>
              <input
                type="text"
                id="name"
                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 border-4 border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Subject"
                ref={subjectRef}
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label
                for="message"
                className="block mb-2 text-body1 font-medium text-gray-900 dark:text-gray-400"
              >
                Your message
              </label>
              <textarea
                id="message"
                rows="6"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 shadow-sm border-4 border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Leave a comment..."
                ref={contentRef}
              ></textarea>
            </div>
            <SendButton>Send message</SendButton>
          </form>
        </div>
      </section>
    </Fragment>
  );
};

export default ContactSection;
