




// // import React from 'react'
// // import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa'

// // const Footer = () => {
// //   return (
// //     <footer className='flex flex-col gap-12 px-4 sm:px-8 md:px-16 py-16 bg-black text-white'>
// //       {/* Newsletter Section */}
// //       <div className='grid place-content-center gap-6 text-center'>
// //         <h2 className='text-3xl sm:text-4xl font-bold'>Sign up for exclusive offers</h2>
// //         <div className='flex items-center justify-center max-w-xl mx-auto w-full'>
// //           <input 
// //             type="email" 
// //             placeholder='Enter your email address' 
// //             className='flex-grow px-4 sm:px-6 md:px-10 py-4 border-r-0 border-lime-500 rounded-l-full outline-lime-400 text-white placeholder-gray-500'
// //           />
// //           <button className='bg-lime-400 hover:bg-lime-500 transition-colors text-white px-6 sm:px-8 py-4 rounded-r-full font-bold'>
// //             Join now
// //           </button>
// //         </div>
// //       </div>

// //       {/* Brand & Navigation */}
// //       <div className='flex flex-col justify-between text-center gap-6'>
// //         <div>
// //           <h2 className='text-2xl font-bold'>RESERVE TRAVELS</h2>
// //           <div className='flex justify-center gap-4 mt-3 text-lime-500'>
// //             <a href="#" aria-label="Facebook" className='hover:text-lime-400 transition-colors'>
// //               <FaFacebook className='text-3xl cursor-pointer' />
// //             </a>
// //             <a href="#" aria-label="Instagram" className='hover:text-lime-400 transition-colors'>
// //               <FaInstagram className='text-3xl cursor-pointer' />
// //             </a>
// //             <a href="#" aria-label="YouTube" className='hover:text-lime-400 transition-colors'>
// //               <FaYoutube className='text-3xl cursor-pointer' />
// //             </a>
// //           </div>
// //         </div>
        
// //         <div>
// //           <ul className='flex flex-wrap gap-4 sm:gap-6 justify-center text-base font-medium'>
// //             {['HOME', 'BOOKING', 'ROOMS', 'CONTACT'].map((item) => (
// //               <li key={item} className='cursor-pointer hover:text-lime-400 transition-colors'>
// //                 {item}
// //               </li>
// //             ))}
// //           </ul>
// //         </div>
// //       </div>

// //       {/* Rights Line */}
// //       <p className='text-center text-sm mt-4 border-t border-gray-800 pt-4'>
// //         © 2026 RESERVE TRAVELS. All Rights Reserved.
// //       </p>
// //     </footer>
// //   )
// // }

// // export default Footer



// import React from 'react'
// import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa'

// const Footer = () => {
//   return (
//     <footer className='bg-gradient-to-b from-black to-gray-900 text-white px-4 sm:px-8 md:px-16 py-16'>
//       {/* Premium Newsletter Section */}
//       <div className='max-w-6xl mx-auto'>
//         <div className='grid place-content-center gap-6 text-center mb-16'>
//           <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-lime-400 to-emerald-500 bg-clip-text text-transparent'>
//             Sign up for exclusive offers
//           </h2>
//           <p className='text-gray-400 text-sm sm:text-base'>
//             Get 10% off your first booking and receive exclusive deals
//           </p>
//           <div className='flex items-center justify-center max-w-xl mx-auto w-full'>
//             <input 
//               type="email" 
//               placeholder='Enter your email address' 
//               className='flex-grow px-6 sm:px-8 md:px-10 py-4 bg-gray-800 border-2 border-gray-700 focus:border-lime-400 rounded-l-full outline-none text-white placeholder-gray-500 transition-colors'
//             />
//             <button className='bg-gradient-to-r from-lime-400 to-emerald-500 hover:scale-105 transition-all duration-300 text-black px-6 sm:px-8 md:px-10 py-4 rounded-r-full font-bold shadow-lg shadow-lime-500/25'>
//               Join now →
//             </button>
//           </div>
//         </div>

//         {/* Main Footer Content - Now with justify-between */}
//         <div className='flex flex-col md:flex-row justify-between items-center gap-8 md:gap-0 border-t border-b border-gray-800 py-8'>
//           {/* Brand Section - Left */}
//           <div className='text-center md:text-left'>
//             <h2 className='text-3xl font-bold tracking-wider'>
//               <span className='text-lime-400'>RESERVE</span> TRAVELS
//             </h2>
//             <p className='text-gray-500 text-sm mt-2'>Your Premium Travel Partner</p>
//           </div>

//           {/* Navigation - Center */}
//           <div>
//             <ul className='flex flex-wrap gap-6 md:gap-8 justify-center text-sm font-medium uppercase tracking-wider'>
//               <li className='cursor-pointer hover:text-lime-400 transition-colors relative group'>
//                 HOME
//                 <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-lime-400 group-hover:w-full transition-all duration-300'></span>
//               </li>
//               <li className='cursor-pointer hover:text-lime-400 transition-colors relative group'>
//                 BOOKING
//                 <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-lime-400 group-hover:w-full transition-all duration-300'></span>
//               </li>
//               <li className='cursor-pointer hover:text-lime-400 transition-colors relative group'>
//                 ROOMS
//                 <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-lime-400 group-hover:w-full transition-all duration-300'></span>
//               </li>
//               <li className='cursor-pointer hover:text-lime-400 transition-colors relative group'>
//                 CONTACT
//                 <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-lime-400 group-hover:w-full transition-all duration-300'></span>
//               </li>
//             </ul>
//           </div>

//           {/* Social Icons - Right */}
//           <div className='flex gap-4'>
//             <a 
//               href="#" 
//               aria-label="Facebook"
//               className='w-12 h-12 rounded-full bg-gray-800 hover:bg-lime-400 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-lime-500/25 group'
//             >
//               <FaFacebook className='text-2xl text-gray-400 group-hover:text-black transition-colors' />
//             </a>
//             <a 
//               href="#" 
//               aria-label="Instagram"
//               className='w-12 h-12 rounded-full bg-gray-800 hover:bg-lime-400 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-lime-500/25 group'
//             >
//               <FaInstagram className='text-2xl text-gray-400 group-hover:text-black transition-colors' />
//             </a>
//             <a 
//               href="#" 
//               aria-label="YouTube"
//               className='w-12 h-12 rounded-full bg-gray-800 hover:bg-lime-400 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-lime-500/25 group'
//             >
//               <FaYoutube className='text-2xl text-gray-400 group-hover:text-black transition-colors' />
//             </a>
//           </div>
//         </div>

//         {/* Footer Rights Line */}
//         <div className='flex flex-col sm:flex-row justify-between items-center gap-4 mt-8'>
//           <p className='text-center sm:text-left text-sm text-gray-500'>
//             © 2026 <span className='text-white font-medium'>RESERVE TRAVELS</span>. All Rights Reserved.
//           </p>
//           <div className='flex gap-6 text-xs text-gray-500'>
//             <a href="#" className='hover:text-lime-400 transition-colors'>Privacy Policy</a>
//             <a href="#" className='hover:text-lime-400 transition-colors'>Terms of Service</a>
//             <a href="#" className='hover:text-lime-400 transition-colors'>Cookies</a>
//           </div>
//         </div>
//       </div>
//     </footer>
//   )
// }

// export default Footer











import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='bg-gradient-to-b from-black to-gray-900 text-white px-4 sm:px-8 md:px-16 py-16'>
      {/* Premium Newsletter Section */}
      <div className='max-w-6xl mx-auto'>
        <div className='grid place-content-center gap-6 text-center mb-16'>
          <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-lime-400 to-emerald-500 bg-clip-text text-transparent'>
            Sign up for exclusive offers
          </h2>
          <p className='text-gray-400 text-sm sm:text-base'>
            Get 10% off your first booking and receive exclusive deals
          </p>
          <div className='flex items-center justify-center max-w-xl mx-auto w-full'>
            <input 
              type="email" 
              placeholder='Enter your email address' 
              className='flex-grow px-6 sm:px-8 md:px-10 py-4 bg-gray-800 border-2 border-gray-700 focus:border-lime-400 rounded-l-full outline-none text-white placeholder-gray-500 transition-colors'
            />
            <button className='bg-gradient-to-r from-lime-400 to-emerald-500 hover:scale-105 transition-all duration-300 text-black px-6 sm:px-8 md:px-10 py-4 rounded-r-full font-bold shadow-lg shadow-lime-500/25'>
              Join now →
            </button>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className='flex flex-col md:flex-row justify-between items-center gap-8 md:gap-0 border-t border-b border-gray-800 py-8'>
          {/* Brand Section - Left */}
          <div className='text-center md:text-left'>
            <Link to='/' className='text-3xl font-bold tracking-wider hover:opacity-80 transition-opacity'>
              <span className='text-lime-400'>RESERVE</span> TRAVELS
            </Link>
            <p className='text-gray-500 text-sm mt-2'>Your Premium Travel Partner</p>
          </div>

          {/* Navigation - Center */}
          <div>
            <ul className='flex flex-wrap gap-6 md:gap-8 justify-center text-sm font-medium uppercase tracking-wider'>
              <li>
                <Link 
                  to='/' 
                  className='hover:text-lime-400 transition-colors relative group'
                >
                  HOME
                  <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-lime-400 group-hover:w-full transition-all duration-300'></span>
                </Link>
              </li>
              <li>
                <Link 
                  to='/booking' 
                  className='hover:text-lime-400 transition-colors relative group'
                >
                  BOOKING
                  <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-lime-400 group-hover:w-full transition-all duration-300'></span>
                </Link>
              </li>
              <li>
                <Link 
                  to='/rooms' 
                  className='hover:text-lime-400 transition-colors relative group'
                >
                  ROOMS
                  <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-lime-400 group-hover:w-full transition-all duration-300'></span>
                </Link>
              </li>
              <li>
                <Link 
                  to='/contact' 
                  className='hover:text-lime-400 transition-colors relative group'
                >
                  CONTACT
                  <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-lime-400 group-hover:w-full transition-all duration-300'></span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Icons - Right */}
          <div className='flex gap-4'>
            <a 
              href="https://facebook.com" 
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className='w-12 h-12 rounded-full bg-gray-800 hover:bg-lime-400 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-lime-500/25 group'
            >
              <FaFacebook className='text-2xl text-gray-400 group-hover:text-black transition-colors' />
            </a>
            <a 
              href="https://instagram.com" 
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className='w-12 h-12 rounded-full bg-gray-800 hover:bg-lime-400 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-lime-500/25 group'
            >
              <FaInstagram className='text-2xl text-gray-400 group-hover:text-black transition-colors' />
            </a>
            <a 
              href="https://youtube.com" 
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className='w-12 h-12 rounded-full bg-gray-800 hover:bg-lime-400 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-lime-500/25 group'
            >
              <FaYoutube className='text-2xl text-gray-400 group-hover:text-black transition-colors' />
            </a>
          </div>
        </div>

        {/* Footer Rights Line */}
        <div className='flex flex-col sm:flex-row justify-between items-center gap-4 mt-8'>
          <p className='text-center sm:text-left text-sm text-gray-500'>
            © 2026 <span className='text-white font-medium'>RESERVE TRAVELS</span>. All Rights Reserved.
          </p>
          <div className='flex gap-6 text-xs text-gray-500'>
            <Link to='/privacy' className='hover:text-lime-400 transition-colors'>Privacy Policy</Link>
            <Link to='/terms' className='hover:text-lime-400 transition-colors'>Terms of Service</Link>
            <Link to='/cookies' className='hover:text-lime-400 transition-colors'>Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer