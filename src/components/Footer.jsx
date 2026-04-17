const Footer = () => {
  return (
    <footer className="bg-green-900 text-white mt-16">
      <div className="max-w-6xl mx-auto px-6 py-12 text-center">

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold">
          KeenKeeper
        </h2>

        {/* Subtitle */}
        <p className="text-gray-300 mt-4 max-w-xl mx-auto text-sm md:text-base">
          Your personal shelf of meaningful connections. Browse, tend, and nurture
          the relationships that matter most.
        </p>

        {/* Social Links */}
        <div className="mt-6">
          <p className="text-sm mb-3">Social Links</p>

          <div className="flex justify-center gap-4">
            <div className="bg-white text-black w-10 h-10 flex items-center justify-center rounded-full cursor-pointer hover:scale-110 transition">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.4917 1.66675H6.50835C3.47502 1.66675 1.66669 3.47508 1.66669 6.50841V13.4834C1.66669 16.5251 3.47502 18.3334 6.50835 18.3334H13.4834C16.5167 18.3334 18.325 16.5251 18.325 13.4917V6.50841C18.3334 3.47508 16.525 1.66675 13.4917 1.66675ZM10 13.2334C8.21669 13.2334 6.76669 11.7834 6.76669 10.0001C6.76669 8.21675 8.21669 6.76675 10 6.76675C11.7834 6.76675 13.2334 8.21675 13.2334 10.0001C13.2334 11.7834 11.7834 13.2334 10 13.2334ZM14.9334 5.73341C14.8917 5.83341 14.8334 5.92508 14.7584 6.00841C14.675 6.08341 14.5834 6.14175 14.4834 6.18341C14.3834 6.22508 14.275 6.25008 14.1667 6.25008C13.9417 6.25008 13.7334 6.16675 13.575 6.00841C13.5 5.92508 13.4417 5.83341 13.4 5.73341C13.3584 5.63341 13.3334 5.52508 13.3334 5.41675C13.3334 5.30841 13.3584 5.20008 13.4 5.10008C13.4417 4.99175 13.5 4.90841 13.575 4.82508C13.7667 4.63341 14.0584 4.54175 14.325 4.60008C14.3834 4.60841 14.4334 4.62508 14.4834 4.65008C14.5334 4.66675 14.5834 4.69175 14.6334 4.72508C14.675 4.75008 14.7167 4.79175 14.7584 4.82508C14.8334 4.90841 14.8917 4.99175 14.9334 5.10008C14.975 5.20008 15 5.30841 15 5.41675C15 5.52508 14.975 5.63341 14.9334 5.73341Z" fill="#101727" />
              </svg>

            </div>
            <div className="bg-white text-black w-10 h-10 flex items-center justify-center rounded-full cursor-pointer hover:scale-110 transition">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.3334 13.4917C18.3334 16.5251 16.525 18.3334 13.4917 18.3334H12.5C12.0417 18.3334 11.6667 17.9584 11.6667 17.5001V12.6918C11.6667 12.4668 11.85 12.2751 12.075 12.2751L13.5417 12.2501C13.6584 12.2418 13.7584 12.1584 13.7834 12.0418L14.075 10.4501C14.1 10.3001 13.9834 10.1584 13.825 10.1584L12.05 10.1834C11.8167 10.1834 11.6334 10.0001 11.625 9.77509L11.5917 7.73341C11.5917 7.60008 11.7 7.48342 11.8417 7.48342L13.8417 7.45008C13.9833 7.45008 14.0917 7.34176 14.0917 7.20009L14.0583 5.20007C14.0583 5.05841 13.95 4.95008 13.8084 4.95008L11.5583 4.98342C10.175 5.00842 9.07503 6.14175 9.10003 7.52508L9.14169 9.81675C9.15002 10.0501 8.9667 10.2334 8.73336 10.2418L7.73335 10.2584C7.59169 10.2584 7.48336 10.3667 7.48336 10.5084L7.50836 12.0918C7.50836 12.2334 7.61668 12.3417 7.75835 12.3417L8.75836 12.3251C8.99169 12.3251 9.17501 12.5084 9.18334 12.7334L9.25834 17.4834C9.26667 17.9501 8.89167 18.3334 8.42501 18.3334H6.50835C3.47502 18.3334 1.66669 16.5251 1.66669 13.4834V6.50841C1.66669 3.47508 3.47502 1.66675 6.50835 1.66675H13.4917C16.525 1.66675 18.3334 3.47508 18.3334 6.50841V13.4917Z" fill="#101727" />
              </svg>

            </div>
            <div className="bg-white text-black w-10 h-10 flex items-center justify-center rounded-full cursor-pointer hover:scale-110 transition">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.52217 6.77491L15.4785 0H14.0671L8.89516 5.88256L4.76437 0H0L6.24656 8.89547L0 16H1.41155L6.87321 9.78782L11.2356 16H16L9.52183 6.77491H9.52217ZM7.58887 8.97384L6.95596 8.08805L1.92015 1.03974H4.0882L8.15216 6.72795L8.78507 7.61374L14.0677 15.0075H11.8997L7.58887 8.97418V8.97384Z" fill="#101727" />
              </svg>

            </div>
          </div>
        </div>

        {/* Bottom Section Ui */}
        <div className="border-t border-green-700 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-300 gap-4">

          <p className="text-center md:text-left">
            © 2026 KeenKeeper. All rights reserved.
          </p>

          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            <span className="cursor-pointer hover:text-white">
              Privacy Policy
            </span>
            <span className="cursor-pointer hover:text-white">
              Terms of Service
            </span>
            <span className="cursor-pointer hover:text-white">
              Cookies
            </span>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;