import React from "react";

const Footer = () => {
  return (
    <footer className="bg-base-200 text-base-content pt-10">
      <div className="footer sm:footer-horizontal max-w-7xl mx-auto p-10">
        <nav>
          <h2 className="footer-title text-3xl font-bold">PetWell Care</h2>
          <p className="max-w-xs text-sm">
            Providing love, wellness and comfort for your furry family members.
          </p>
        </nav>

        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Pet Grooming</a>
          <a className="link link-hover">Vet Consultation</a>
          <a className="link link-hover">Pet Training</a>
          <a className="link link-hover">Pet Boarding</a>
        </nav>

        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About Us</a>
          <a className="link link-hover">Our Team</a>
          <a className="link link-hover">Careers</a>
          <a className="link link-hover">Contact</a>
        </nav>

        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms & Conditions</a>
          <a className="link link-hover">Privacy Policy</a>
          <a className="link link-hover">Refund Policy</a>
        </nav>
      </div>

      <div className="text-center pb-5">
        <p>© {new Date().getFullYear()} PetWell Care Haven — All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
