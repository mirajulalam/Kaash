import React from 'react';

const Footer = () => {
    return (
        <div>
    <footer className="footer p-10 bg-primary text-black">
    <div>
    <span className="footer-title">Services</span> 
    <a className="link link-hover">Light</a> 
    <a className="link link-hover">Sustainability</a> 
    <a className="link link-hover">Technology</a> 
  </div> 
  <div>
    <span className="footer-title">Company</span> 
    <a href='https://www.kaash.eu/' className="link link-hover">About us</a> 
    <a href='https://www.kaash.eu/#conactinfu' className="link link-hover">Contact</a> 
    <a className="link link-hover">Jobs</a> 
  </div> 
  <div>
    <span className="footer-title">Legal</span> 
    <a className="link link-hover">Terms of use</a> 
    <a className="link link-hover">Privacy policy</a> 
    <a className="link link-hover">Cookie policy</a>
  </div>
</footer> 
<footer className="footer px-10 py-4 border-t bg-primary text-black border-primary">
  <div className="items-center grid-flow-col">
    <img className='w-40' src="https://www.kaash.eu/gallery_gen/b6ea7dd686fa817743d40b1b36475f5f_600x188.png"/>
    <p>moien@kaash.eu <br/> 41a rue des Romains, 8041 Luxembourg</p>
  </div> 
  <div className="md:place-self-center md:justify-self-end">
    <div className="grid grid-flow-col gap-4">
      <img className='w-40' src='https://www.kaash.eu/gallery_gen/d1f037cce542c04dbc9a078a7e8c3d31_600x147_0x32_600x232.png'/>
    </div>
  </div>
</footer>
        </div>
    );
};

export default Footer;