

const Contact = () => {
  return (
    <section className="bg-white flex flex-col m-2 p-4 justify-center items-center"  id="contacts">
        <h2 className="text-slate-500 text-3xl font-semibold py-3">Get in Touch</h2>
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
              id="message" cols="30" rows="7" 
              placeholder="Your message...">
            </textarea>
            <button className="bg-slate-400 text-white border-2 border-transparent font-semibold tracking-wider rounded-lg mt-6 h-10 hover:bg-white hover:border-slate-400 hover:text-slate-400 duration-300" type="submit">Submit</button>
        </form>
    </section>
  )
}

export default Contact