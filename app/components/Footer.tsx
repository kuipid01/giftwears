const Footer = () => {
  return (
    <footer className=" bg-light-gray justify-center flex items-center  text-[20px] tracking-wide h-[50vh] text-dark ">
      <div className=" w-[80%] flex justify-between items-center gap-[20px] mx-auto">
        <div className=" flex flex-col gap-4">
          <h1 className=" font-bold text-[20px]">Gift Wears</h1>
          <ul>
            <li>
              <p>Email:</p>
              <p>Kuipidtech@gmail.com</p>
            </li>
            <li>
              <p>Phone:</p>
              <p>+234 91 5701 666 9</p>
            </li>
          </ul>
        </div>
        <div className=" flex flex-col gap-4">
          <h1 className=" font-bold text-[20px]">Company</h1>
          <ul className=" flex flex-col gap-1">
            <li>About</li>
            <li>Stores</li>
            <li>Career</li>
            <li>Shipping</li>
          </ul>
        </div>
        <div className=" flex flex-col gap-4">
          <h1 className=" font-bold text-[20px]">Socials</h1>
          <ul className=" flex flex-col gap-1">
            <li>Facebook</li>
            <li>Instagram</li>
            <li>Twitter</li>
            <li className=" invisible pointer-events-none">Test</li>
          </ul>
        </div>
        <div className=" flex flex-col gap-4">
          <h1 className=" font-bold text-[20px]">Newsletter</h1>
          <p>
            Subscribe to receive updates, access <br /> to exclusive deals and
            more.
          </p>
          <input
            placeholder="Your email address"
            type="text "
            className=" placeholder:text-dark w-full p-2 h-[50px] outline-none bg-transparent border-2 border-dark"
          />
          <button className=" h-[50px] w-1/2 bg-dark text-white">Submit</button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
