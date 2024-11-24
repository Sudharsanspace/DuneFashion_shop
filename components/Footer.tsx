import { Link } from 'lucide-react';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-customGreen text-white py-4 px-0 sm:px-10 lg:px-20 w-full">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Left side content */}
        <div className="w-full md:w-1/2 pr-0 md:pr-8">
          <h1 className="text-xl font-extrabold mb-4 md:mb-4 font-serif tracking-wide">
            Dune Fashions.
          </h1>
          <p className="text-base font-light leading-relaxed">
            "The World of Premium Life Styles"
          </p>
          {/* This paragraph will be hidden on mobile devices and shown on tablets and larger devices */}
          <p className="text-base font-light leading-relaxed hidden md:block lg:px-0">
            Discover the epitome of elegance and sophistication with our exclusive range of premium lifestyle products. Designed for those who appreciate the finer things in life, our collection offers a seamless blend of luxury, comfort, and style.
          </p>
        </div>

        {/* Right side image */}
        <div className="w-full md:w-1/2 flex justify-center mt-1 md:mt-0">
          <Image
            src="/footer-logo.png" // Replace with your image path
            alt="Footer Image"
            width={150} // Default width for mobile
            height={100} // Default height for mobile
            className="object-cover sm:w-40 sm:h-30 md:w-48 md:h-36 lg:w-56 lg:h-42 xl:w-64 xl:h-48"
          />
        </div>
      </div>

      <div className="text-white font-light mt-4 md:mt-2 mb-0 flex justify-center leading-relaxed">
        <p className="text-sm sm:text-base md:text-sm lg:text-sm">
            Copyright &copy;2024 &mdash; Designed by FineDevelopers.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
