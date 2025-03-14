

const Contact = () => {
  return (
    <section id="contacts">
        <h2>Send an email</h2>
        <form action="https://formspree.io/f/manenyqa" method="POST">
            <label htmlFor="email"></label>
            <input type="email" placeholder="Your Email" />
            <label htmlFor="name"></label>
            <input type="text" />
            <textarea 
           
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