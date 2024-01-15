import React from 'react'

const Contact = () => {
  return (
    <section
        id="contact"
        className="max-w-contentContainer mx-auto py-10 xl:py-32 flex flex-col gap-4 items-center justify-center"
    >
      <p className="font-titleFont text-lg text-textGreen font-semibold flex items-center  tracking-wide">
        04. What's Next?
      </p>
      <h2 className="font-titleFont text-5xl font-semibold">Get In Touch</h2>
      <p className="max-w-[600px] text-center text-textDark">
      While I am in the early stages of my career and actively seeking new opportunities, I welcome any inquiries or messages. Whether you have a question, want to connect, or just say hi, feel free to reach out, and I'll do my best to respond promptly!
      </p>
      <a href="mailto:abhishekpurty1999@gmail.com">
        <button className="w-40 h-14 mt-6 text-sm font-titleFont border border-textGreen rounded-md text-textGreen tracking-wider hover:bg-hoverColor duration-300">
            Say Hello
        </button>
      </a>
    </section>
  )
}

export default Contact
