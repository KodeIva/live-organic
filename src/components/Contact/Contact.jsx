

const Contact = () => {
  return (
    <section className="bg-white flex flex-col m-2 p-4 justify-center items-center"  id="contacts">
        <h2>Get in Touch</h2>
        <form className="flex flex-col w-[90%] md:w-[60%] lg:w-[40%] h-auto " action="https://formspree.io/f/manenyqa" method="POST">
        <label htmlFor="email"></label>
            <input className="bg-slate-400 outline-none h-10 my-2 pl-2 rounded-lg text-white placeholder-white" type="email" placeholder="Name" />
            <label htmlFor="email"></label>
            <input className="bg-slate-400 outline-none h-10 my-2 pl-2 rounded-lg text-white placeholder-white" type="email" placeholder="Email" />
            <label htmlFor="name"></label>
            <input type="text" />
            <textarea 
              className="bg-slate-400 outline-none text-white placeholder-white pl-2 pt-2 rounded-lg"
              name="message" 
              id="message" cols="10" rows="8" 
              placeholder="Your message...">
            </textarea>
            <button type="submit">Send</button>
        </form>
    </section>
  )
}

export default Contact