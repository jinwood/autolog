const Footer = () => {
  return (
    <footer className="bg-gray-700 text-white text-center p-4 mt-8">
      <div className="container mx-auto">
        <p>
          &copy; {new Date().getFullYear()} My Next.js Site. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
