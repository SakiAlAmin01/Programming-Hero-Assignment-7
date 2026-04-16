const Footer = () => {
  return (
    <footer className="bg-green-900 text-white mt-16">
      <div className="max-w-5xl mx-auto px-6 py-12 text-center">
        
        {/* Title */}
        <h2 className="text-4xl font-bold">KeenKeeper</h2>

        {/* Subtitle */}
        <p className="text-gray-300 mt-4 max-w-xl mx-auto">
          Your personal shelf of meaningful connections. Browse, tend, and nurture
          the relationships that matter most.
        </p>

        {/* Social Links */}
        <div className="mt-6">
          <p className="text-sm mb-3">Social Links</p>

          <div className="flex justify-center gap-4">
            <div className="bg-white text-black w-10 h-10 flex items-center justify-center rounded-full cursor-pointer">
              f
            </div>
            <div className="bg-white text-black w-10 h-10 flex items-center justify-center rounded-full cursor-pointer">
              in
            </div>
            <div className="bg-white text-black w-10 h-10 flex items-center justify-center rounded-full cursor-pointer">
              X
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-green-700 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-300">
          
          <p>© 2026 KeenKeeper. All rights reserved.</p>

          <div className="flex gap-6 mt-4 md:mt-0">
            <span className="cursor-pointer hover:text-white">Privacy Policy</span>
            <span className="cursor-pointer hover:text-white">Terms of Service</span>
            <span className="cursor-pointer hover:text-white">Cookies</span>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;