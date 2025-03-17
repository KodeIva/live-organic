

const Contact = () => {
  return (
    <section className="bg-white flex flex-col m-2 p-4 justify-center items-center"  id="contacts">
        <h2>Get in Touch</h2>
        <form className="bg-blue-50 flex flex-col w-[90%] md:w-[60%] lg:w-[40%] h-auto " action="https://formspree.io/f/manenyqa" method="POST">
            <label htmlFor="email"></label>
            <input className="bg-slate-400 text-white placeholder-white" type="email" placeholder="Your email" />
            <label htmlFor="name"></label>
            <input type="text" />
            <textarea 
              className="bg-slate-400 text-white placeholder-white"
              name="message" 
              id="message" cols="30" rows="10" 
              placeholder="Your message...">
            </textarea>
            <button type="submit">Send</button>
        </form>
    </section>
  )
}

export default Contact