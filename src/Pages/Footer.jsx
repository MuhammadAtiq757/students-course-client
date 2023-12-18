
const Footer = () => {
  const footerStyle = {
    backgroundImage: 'url("https://i.ibb.co/6H6mj64/17819902-SL-013020-27540-03.jpg)', 
    backgroundSize: 'cover',
    backgroundPosition: 'center',
};



    return (
      <footer className="footer p-10 bg-base-200  mt-72 text-black font-bold" style={footerStyle}>
      <aside>
        {/* <img className='w-40' src={logo} alt="" /> */}
        <p>TripTrack Travel<br/>Providing reliable tech since 1992</p>
      </aside> 
      <nav>
        <header className="footer-title">Services</header> 
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </nav> 
      <nav>
        <header className="footer-title">Company</header> 
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </nav> 
      <nav>
        <header className="footer-title">Legal</header> 
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </nav>
    </footer>
    );
};

export default Footer;