// // // import React, { useContext } from 'react'
// // // import { RoomContext } from '../context/RoomContext'
// // // import { FaBath, FaBed, FaUserFriends, FaWifi } from 'react-icons/fa'
// // // import { Link } from 'react-router-dom'

// // // const amenitisList = [
// // //   { label: '1-2 person', icon: <FaUserFriends className='text-gray-600' /> },
// // //   { label: 'Bathtub', icon: <FaBath className='text-gray-600' /> },
// // //   { label: 'King size bed', icon: <FaBed className='text-gray-600' /> },
// // //   { label: 'free wifi', icon: <FaWifi className='text-gray-600' /> },
// // // ]

// // // const HotelList = () => {
// // //   const { rooms } = useContext(RoomContext)
// // //   console.log('rooms', rooms); // Check browser console to see room data

// // //   return (
// // //     <div className='bg-[#f7f0eb] py-16 px-4'>
// // //       <div className='max-w-6xl mx-auto'>
// // //         <h2 className='text-4xl font-serif text-center mb-12 text-gray-800'>
// // //           Book your stay and <br /> relax in luxury
// // //         </h2>
        
// // //         <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>  {/* Added responsive grid */}
// // //           {
// // //             rooms && rooms.length > 0 ? (
// // //               rooms.map((room) => {
// // //                 const { id, Image, name, price, description } = room  // Using Image (capital I) to match your data
// // //                 return (
// // //                   <div key={id} className='bg-white shadow rounded-lg overflow-hidden hover:shadow-xl transition-shadow'>
// // //                     <Link to={`/room/${id}`}>
// // //                       <img 
// // //                         src={Image} 
// // //                         alt={name}  
// // //                         className='w-full h-80 object-cover'
// // //                         onError={(e) => {
// // //                           console.log('Image failed to load:', Image);
// // //                           e.target.src = 'https://via.placeholder.com/400x300?text=No+Image';
// // //                         }}
// // //                       />
// // //                     </Link>
                    
// // //                     <div className='p-5'>
// // //                       <h3 className='text-2xl font-semibold text-gray-800 mb-1'>{name}</h3>
// // //                       <p className='text-gray-600 text-lg mb-4'>RS {price}</p>
                      
// // //                       <div className='grid grid-cols-2 gap-4 text-base text-gray-700'>  {/* ✅ Added className */}
// // //                         {
// // //                           amenitisList.map((amenity, idx) => (
// // //                             <div key={idx} className='flex items-center gap-2'>
// // //                               {amenity.icon} 
// // //                               <span>{amenity.label}</span>
// // //                             </div>
// // //                           ))
// // //                         }
// // //                       </div>
// // //                     </div>
// // //                   </div>
// // //                 )
// // //               })
// // //             ) : (
// // //               <p className='text-gray-500 text-center col-span-full'>No rooms available</p>
// // //             )
// // //           }
// // //         </div>
// // //       </div>
// // //     </div>
// // //   )
// // // }

// // // export default HotelList







// // // import React, { useContext } from 'react'
// // // import { RoomContext } from '../context/RoomContext'
// // // import { FaBath, FaBed, FaUserFriends, FaWifi, FaParking, FaTv, FaCoffee, FaSnowflake } from 'react-icons/fa'
// // // import { Link } from 'react-router-dom'

// // // const amenitisList = [
// // //   { id: 1, label: '1-2 person', icon: <FaUserFriends className='text-gray-600' /> },
// // //   { id: 2, label: 'Bathtub', icon: <FaBath className='text-gray-600' /> },
// // //   { id: 3, label: 'King size bed', icon: <FaBed className='text-gray-600' /> },
// // //   { id: 4, label: 'Free WiFi', icon: <FaWifi className='text-gray-600' /> },
// // // ]

// // // const HotelList = () => {
// // //   const { rooms, loading } = useContext(RoomContext)
// // //   console.log('rooms', rooms); // Check browser console to see room data

// // //   // Loading state
// // //   if (loading) {
// // //     return (
// // //       <div className='bg-[#f7f0eb] py-16 px-4 min-h-screen flex items-center justify-center'>
// // //         <div className='text-center'>
// // //           <div className='inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-lime-500'></div>
// // //           <p className='mt-4 text-gray-600'>Loading amazing rooms...</p>
// // //         </div>
// // //       </div>
// // //     )
// // //   }

// // //   return (
// // //     <div className='bg-[#f7f0eb] py-16 px-4 min-h-screen'>
// // //       <div className='max-w-6xl mx-auto'>
// // //         <h2 className='text-4xl font-serif text-center mb-4 text-gray-800'>
// // //           Book your stay and <br /> relax in luxury
// // //         </h2>
// // //         <p className='text-center text-gray-500 mb-12'>
// // //           Discover our handpicked collection of premium rooms
// // //         </p>
        
// // //         <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
// // //           {
// // //             rooms && rooms.length > 0 ? (
// // //               rooms.map((room) => {
// // //                 const { _id, id, Image, name, price, description } = room
// // //                 const roomId = _id || id // Use either _id or id
                
// // //                 return (
// // //                   <div 
// // //                     key={roomId} 
// // //                     className='bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1'
// // //                   >
// // //                     <Link to={`/room/${roomId}`}>
// // //                       <div className='relative'>
// // //                         <img 
// // //                           src={Image} 
// // //                           alt={name}  
// // //                           className='w-full h-80 object-cover'
// // //                           onError={(e) => {
// // //                             console.log('Image failed to load:', Image);
// // //                             e.target.src = 'https://via.placeholder.com/600x400?text=Room+Image';
// // //                           }}
// // //                         />
// // //                         <div className='absolute top-4 right-4 bg-lime-500 text-white px-3 py-1 rounded-full text-sm font-semibold'>
// // //                           Available
// // //                         </div>
// // //                       </div>
// // //                     </Link>
                    
// // //                     <div className='p-6'>
// // //                       <div className='flex justify-between items-start mb-2'>
// // //                         <h3 className='text-2xl font-semibold text-gray-800'>{name}</h3>
// // //                         <span className='text-2xl font-bold text-lime-600'>RS {price}</span>
// // //                       </div>
// // //                       <p className='text-gray-500 text-sm mb-4 line-clamp-2'>
// // //                         {description || 'Luxurious room with amazing amenities'}
// // //                       </p>
                      
// // //                       <div className='grid grid-cols-2 gap-3 text-sm text-gray-700'>
// // //                         {
// // //                           amenitisList.map((amenity) => (
// // //                             <div key={amenity.id} className='flex items-center gap-2 bg-gray-50 px-3 py-2 rounded-lg'>
// // //                               {amenity.icon} 
// // //                               <span>{amenity.label}</span>
// // //                             </div>
// // //                           ))
// // //                         }
// // //                       </div>
                      
// // //                       <Link to={`/room/${roomId}`}>
// // //                         <button className='w-full mt-4 bg-lime-500 hover:bg-lime-600 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200 transform hover:scale-[1.02]'>
// // //                           Book Now →
// // //                         </button>
// // //                       </Link>
// // //                     </div>
// // //                   </div>
// // //                 )
// // //               })
// // //             ) : (
// // //               <div className='col-span-full text-center py-12'>
// // //                 <p className='text-gray-500 text-lg'>No rooms available</p>
// // //                 <p className='text-gray-400 text-sm mt-2'>Check back later for new listings</p>
// // //               </div>
// // //             )
// // //           }
// // //         </div>
// // //       </div>
// // //     </div>
// // //   )
// // // }

// // // export default HotelList



// // import React, { useContext } from 'react'
// // import { RoomContext } from '../context/RoomContext'
// // import { FaBath, FaBed, FaUserFriends, FaWifi, FaParking, FaTv, FaCoffee, FaSnowflake } from 'react-icons/fa'
// // import { Link } from 'react-router-dom'

// // const amenitisList = [
// //   { id: 1, label: '1-2 person', icon: <FaUserFriends className='text-gray-600' /> },
// //   { id: 2, label: 'Bathtub', icon: <FaBath className='text-gray-600' /> },
// //   { id: 3, label: 'King size bed', icon: <FaBed className='text-gray-600' /> },
// //   { id: 4, label: 'Free WiFi', icon: <FaWifi className='text-gray-600' /> },
// // ]

// // const HotelList = () => {
// //   const { rooms, loading } = useContext(RoomContext)
// //   console.log('rooms', rooms); // Check browser console to see room data

// //   // Loading state
// //   if (loading) {
// //     return (
// //       <div className='bg-[#f7f0eb] py-16 px-4 min-h-screen flex items-center justify-center'>
// //         <div className='text-center'>
// //           <div className='inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-lime-500'></div>
// //           <p className='mt-4 text-gray-600'>Loading amazing rooms...</p>
// //         </div>
// //       </div>
// //     )
// //   }

// //   return (
// //     <div className='bg-[#f7f0eb] py-16 px-4 min-h-screen'>
// //       <div className='max-w-6xl mx-auto'>
// //         <h2 className='text-4xl font-serif text-center mb-4 text-gray-800'>
// //           Book your stay and <br /> relax in luxury
// //         </h2>
// //         <p className='text-center text-gray-500 mb-12'>
// //           Discover our handpicked collection of premium rooms
// //         </p>
        
// //         <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
// //           {
// //             rooms && rooms.length > 0 ? (
// //               rooms.map((room) => {
// //                 const { _id, id, Image, image, name, price, description } = room
// //                 const roomId = _id || id // Use either _id or id
                
// //                 // ✅ Get the correct image URL (handle both Image and image)
// //                 const imageUrl = Image || image || 'https://via.placeholder.com/600x400?text=No+Image'
                
// //                 // ✅ Log the image URL to debug
// //                 console.log('Room:', name, 'Image URL:', imageUrl)
                
// //                 return (
// //                   <div 
// //                     key={roomId} 
// //                     className='bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1'
// //                   >
// //                     <Link to={`/room/${roomId}`}>
// //                       <div className='relative'>
// //                         <img 
// //                           src={imageUrl} 
// //                           alt={name}  
// //                           className='w-full h-80 object-cover'
// //                           onError={(e) => {
// //                             console.log('❌ Image failed to load for:', name, 'URL:', imageUrl);
// //                             e.target.src = 'https://via.placeholder.com/600x400?text=No+Image';
// //                           }}
// //                         />
// //                         <div className='absolute top-4 right-4 bg-lime-500 text-white px-3 py-1 rounded-full text-sm font-semibold'>
// //                           Available
// //                         </div>
// //                       </div>
// //                     </Link>
                    
// //                     <div className='p-6'>
// //                       <div className='flex justify-between items-start mb-2'>
// //                         <h3 className='text-2xl font-semibold text-gray-800'>{name}</h3>
// //                         <span className='text-2xl font-bold text-lime-600'>RS {price}</span>
// //                       </div>
// //                       <p className='text-gray-500 text-sm mb-4 line-clamp-2'>
// //                         {description || 'Luxurious room with amazing amenities'}
// //                       </p>
                      
// //                       <div className='grid grid-cols-2 gap-3 text-sm text-gray-700'>
// //                         {
// //                           amenitisList.map((amenity) => (
// //                             <div key={amenity.id} className='flex items-center gap-2 bg-gray-50 px-3 py-2 rounded-lg'>
// //                               {amenity.icon} 
// //                               <span>{amenity.label}</span>
// //                             </div>
// //                           ))
// //                         }
// //                       </div>
                      
// //                       <Link to={`/room/${roomId}`}>
// //                         <button className='w-full mt-4 bg-lime-500 hover:bg-lime-600 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200 transform hover:scale-[1.02]'>
// //                           Book Now →
// //                         </button>
// //                       </Link>
// //                     </div>
// //                   </div>
// //                 )
// //               })
// //             ) : (
// //               <div className='col-span-full text-center py-12'>
// //                 <p className='text-gray-500 text-lg'>No rooms available</p>
// //                 <p className='text-gray-400 text-sm mt-2'>Check back later for new listings</p>
// //               </div>
// //             )
// //           }
// //         </div>
// //       </div>
// //     </div>
// //   )
// // }

// // export default HotelList









// import React, { useContext } from 'react'
// import { RoomContext } from '../context/RoomContext'
// import { FaBath, FaBed, FaUserFriends, FaWifi, FaParking, FaTv, FaCoffee, FaSnowflake, FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa'
// import { Link } from 'react-router-dom'

// const amenitisList = [
//   { id: 1, label: '1-2 person', icon: <FaUserFriends style={{ color: '#6b7280' }} /> },
//   { id: 2, label: 'Bathtub', icon: <FaBath style={{ color: '#6b7280' }} /> },
//   { id: 3, label: 'King size bed', icon: <FaBed style={{ color: '#6b7280' }} /> },
//   { id: 4, label: 'Free WiFi', icon: <FaWifi style={{ color: '#6b7280' }} /> },
// ]

// // Rating Component
// const Rating = ({ rating = 4.5 }) => {
//   const fullStars = Math.floor(rating)
//   const hasHalfStar = rating % 1 >= 0.5
//   const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0)

//   return (
//     <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#fbbf24' }}>
//       {[...Array(fullStars)].map((_, i) => (
//         <FaStar key={`full-${i}`} style={{ fontSize: '14px' }} />
//       ))}
//       {hasHalfStar && <FaStarHalfAlt style={{ fontSize: '14px' }} />}
//       {[...Array(emptyStars)].map((_, i) => (
//         <FaRegStar key={`empty-${i}`} style={{ fontSize: '14px' }} />
//       ))}
//       <span style={{ color: '#9ca3af', fontSize: '12px', marginLeft: '4px' }}>({rating})</span>
//     </div>
//   )
// }

// const HotelList = () => {
//   const { rooms, loading } = useContext(RoomContext)
//   console.log('rooms', rooms)

//   if (loading) {
//     return (
//       <div style={{
//         background: '#f7f0eb',
//         padding: '64px 16px',
//         minHeight: '100vh',
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center'
//       }}>
//         <div style={{ textAlign: 'center' }}>
//           <div style={{
//             display: 'inline-block',
//             width: '48px',
//             height: '48px',
//             border: '4px solid #e5e7eb',
//             borderTop: '4px solid #84cc16',
//             borderRadius: '50%',
//             animation: 'spin 1s linear infinite'
//           }}></div>
//           <p style={{ marginTop: '16px', color: '#6b7280' }}>Loading amazing rooms...</p>
//           <style>{`
//             @keyframes spin {
//               0% { transform: rotate(0deg); }
//               100% { transform: rotate(360deg); }
//             }
//           `}</style>
//         </div>
//       </div>
//     )
//   }

//   return (
//     <div style={{
//       background: '#f7f0eb',
//       padding: '64px 16px',
//       minHeight: '100vh'
//     }}>
//       <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
//         <h2 style={{
//           fontSize: 'clamp(32px, 4vw, 48px)',
//           fontFamily: 'serif',
//           textAlign: 'center',
//           marginBottom: '16px',
//           color: '#1f2937',
//           fontWeight: '700',
//           letterSpacing: '1px'
//         }}>
//           Book your stay and <br /> relax in luxury
//         </h2>
//         <p style={{
//           textAlign: 'center',
//           color: '#6b7280',
//           marginBottom: '48px',
//           fontSize: '16px'
//         }}>
//           Discover our handpicked collection of premium rooms
//         </p>
        
//         <div style={{
//           display: 'grid',
//           gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
//           gap: '40px'
//         }}>
//           {rooms && rooms.length > 0 ? (
//             rooms.map((room) => {
//               const { _id, id, Image, image, name, price, description } = room
//               const roomId = _id || id
//               const imageUrl = Image || image || 'https://via.placeholder.com/600x400?text=No+Image'
              
//               console.log('Room:', name, 'Image URL:', imageUrl)
              
//               return (
//                 <div 
//                   key={roomId} 
//                   style={{
//                     background: 'white',
//                     borderRadius: '16px',
//                     overflow: 'hidden',
//                     boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
//                     transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
//                     cursor: 'pointer'
//                   }}
//                   onMouseEnter={(e) => {
//                     e.currentTarget.style.transform = 'translateY(-8px)'
//                     e.currentTarget.style.boxShadow = '0 20px 60px rgba(0,0,0,0.12)'
//                   }}
//                   onMouseLeave={(e) => {
//                     e.currentTarget.style.transform = 'translateY(0)'
//                     e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.08)'
//                   }}
//                 >
//                   <Link to={`/room/${roomId}`} style={{ textDecoration: 'none' }}>
//                     <div style={{ position: 'relative' }}>
//                       <img 
//                         src={imageUrl} 
//                         alt={name}  
//                         style={{
//                           width: '100%',
//                           height: '320px',
//                           objectFit: 'cover',
//                           display: 'block'
//                         }}
//                         onError={(e) => {
//                           console.log('❌ Image failed to load for:', name, 'URL:', imageUrl);
//                           e.target.src = 'https://via.placeholder.com/600x400?text=No+Image';
//                         }}
//                       />
//                       <div style={{
//                         position: 'absolute',
//                         top: '16px',
//                         right: '16px',
//                         background: 'linear-gradient(135deg, #84cc16, #65a30d)',
//                         color: 'white',
//                         padding: '6px 16px',
//                         borderRadius: '20px',
//                         fontSize: '13px',
//                         fontWeight: '600',
//                         letterSpacing: '0.5px',
//                         boxShadow: '0 4px 12px rgba(132, 204, 22, 0.4)'
//                       }}>
//                         Available
//                       </div>
//                       <div style={{
//                         position: 'absolute',
//                         bottom: '16px',
//                         left: '16px',
//                         background: 'rgba(0,0,0,0.6)',
//                         backdropFilter: 'blur(8px)',
//                         padding: '4px 14px',
//                         borderRadius: '12px',
//                         color: 'white',
//                         fontSize: '12px',
//                         fontWeight: '500',
//                         letterSpacing: '0.5px'
//                       }}>
//                         ★ Premium
//                       </div>
//                     </div>
//                   </Link>
                  
//                   <div style={{ padding: '24px' }}>
//                     <div style={{
//                       display: 'flex',
//                       justifyContent: 'space-between',
//                       alignItems: 'flex-start',
//                       marginBottom: '8px'
//                     }}>
//                       <h3 style={{
//                         fontSize: '22px',
//                         fontWeight: '700',
//                         color: '#1f2937',
//                         margin: 0
//                       }}>
//                         {name}
//                       </h3>
//                       <span style={{
//                         fontSize: '22px',
//                         fontWeight: '800',
//                         color: '#84cc16',
//                         whiteSpace: 'nowrap',
//                         marginLeft: '12px'
//                       }}>
//                         RS {price}
//                       </span>
//                     </div>
                    
//                     <Rating rating={4.5} />
                    
//                     <p style={{
//                       color: '#6b7280',
//                       fontSize: '14px',
//                       margin: '12px 0 16px 0',
//                       lineHeight: '1.6',
//                       display: '-webkit-box',
//                       WebkitLineClamp: 2,
//                       WebkitBoxOrient: 'vertical',
//                       overflow: 'hidden'
//                     }}>
//                       {description || 'Luxurious room with amazing amenities'}
//                     </p>
                    
//                     <div style={{
//                       display: 'grid',
//                       gridTemplateColumns: '1fr 1fr',
//                       gap: '8px',
//                       marginBottom: '16px'
//                     }}>
//                       {amenitisList.map((amenity) => (
//                         <div 
//                           key={amenity.id} 
//                           style={{
//                             display: 'flex',
//                             alignItems: 'center',
//                             gap: '8px',
//                             background: '#f9fafb',
//                             padding: '8px 12px',
//                             borderRadius: '8px',
//                             fontSize: '13px',
//                             color: '#374151',
//                             transition: 'all 0.2s'
//                           }}
//                           onMouseEnter={(e) => {
//                             e.currentTarget.style.background = '#f3f4f6'
//                           }}
//                           onMouseLeave={(e) => {
//                             e.currentTarget.style.background = '#f9fafb'
//                           }}
//                         >
//                           {amenity.icon} 
//                           <span>{amenity.label}</span>
//                         </div>
//                       ))}
//                     </div>
                    
//                     <Link to={`/room/${roomId}`} style={{ textDecoration: 'none' }}>
//                       <button 
//                         style={{
//                           width: '100%',
//                           background: 'linear-gradient(135deg, #84cc16, #65a30d)',
//                           color: 'white',
//                           border: 'none',
//                           padding: '14px 20px',
//                           borderRadius: '10px',
//                           fontSize: '16px',
//                           fontWeight: '600',
//                           cursor: 'pointer',
//                           transition: 'all 0.3s ease',
//                           letterSpacing: '0.5px'
//                         }}
//                         onMouseEnter={(e) => {
//                           e.currentTarget.style.transform = 'scale(1.02)'
//                           e.currentTarget.style.boxShadow = '0 8px 25px rgba(132, 204, 22, 0.4)'
//                         }}
//                         onMouseLeave={(e) => {
//                           e.currentTarget.style.transform = 'scale(1)'
//                           e.currentTarget.style.boxShadow = 'none'
//                         }}
//                       >
//                         Book Now →
//                       </button>
//                     </Link>
//                   </div>
//                 </div>
//               )
//             })
//           ) : (
//             <div style={{
//               gridColumn: '1 / -1',
//               textAlign: 'center',
//               padding: '48px 0'
//             }}>
//               <p style={{ color: '#6b7280', fontSize: '18px' }}>No rooms available</p>
//               <p style={{ color: '#9ca3af', fontSize: '14px', marginTop: '8px' }}>Check back later for new listings</p>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   )
// }

// export default HotelList







import React, { useContext } from 'react'
import { RoomContext } from '../context/RoomContext'
import { FaBath, FaBed, FaUserFriends, FaWifi, FaParking, FaTv, FaCoffee, FaSnowflake, FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const amenitisList = [
  { id: 1, label: '1-2 person', icon: <FaUserFriends style={{ color: '#6b7280' }} /> },
  { id: 2, label: 'Bathtub', icon: <FaBath style={{ color: '#6b7280' }} /> },
  { id: 3, label: 'King size bed', icon: <FaBed style={{ color: '#6b7280' }} /> },
  { id: 4, label: 'Free WiFi', icon: <FaWifi style={{ color: '#6b7280' }} /> },
]

// Rating Component
const Rating = ({ rating = 4.5 }) => {
  const fullStars = Math.floor(rating)
  const hasHalfStar = rating % 1 >= 0.5
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0)

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#fbbf24' }}>
      {[...Array(fullStars)].map((_, i) => (
        <FaStar key={`full-${i}`} style={{ fontSize: '14px' }} />
      ))}
      {hasHalfStar && <FaStarHalfAlt style={{ fontSize: '14px' }} />}
      {[...Array(emptyStars)].map((_, i) => (
        <FaRegStar key={`empty-${i}`} style={{ fontSize: '14px' }} />
      ))}
      <span style={{ color: '#9ca3af', fontSize: '12px', marginLeft: '4px' }}>({rating})</span>
    </div>
  )
}

const HotelList = () => {
  const { rooms, loading } = useContext(RoomContext)
  console.log('rooms', rooms)

  if (loading) {
    return (
      <div style={{
        background: '#f7f0eb',
        padding: '64px 16px',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{
            display: 'inline-block',
            width: '48px',
            height: '48px',
            border: '4px solid #e5e7eb',
            borderTop: '4px solid #84cc16',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite'
          }}></div>
          <p style={{ marginTop: '16px', color: '#6b7280' }}>Loading amazing rooms...</p>
          <style>{`
            @keyframes spin {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
          `}</style>
        </div>
      </div>
    )
  }

  return (
    <div style={{
      background: '#f7f0eb',
      padding: '64px 16px',
      minHeight: '100vh'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{
          fontSize: 'clamp(32px, 4vw, 48px)',
          fontFamily: 'serif',
          textAlign: 'center',
          marginBottom: '16px',
          color: '#1f2937',
          fontWeight: '700',
          letterSpacing: '1px'
        }}>
          Book your stay and <br /> relax in luxury
        </h2>
        <p style={{
          textAlign: 'center',
          color: '#6b7280',
          marginBottom: '48px',
          fontSize: '16px'
        }}>
          Discover our handpicked collection of premium rooms
        </p>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '40px'
        }}>
          {rooms && rooms.length > 0 ? (
            rooms.map((room) => {
              const { _id, id, Image, image, name, price, description } = room
              const roomId = _id || id
              const imageUrl = Image || image || 'https://via.placeholder.com/600x400?text=No+Image'
              
              console.log('Room:', name, 'Image URL:', imageUrl)
              
              return (
                <div 
                  key={roomId} 
                  style={{
                    background: 'white',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-8px)'
                    e.currentTarget.style.boxShadow = '0 20px 60px rgba(0,0,0,0.12)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.08)'
                  }}
                >
                  <Link to={`/room/${roomId}`} style={{ textDecoration: 'none' }}>
                    <div style={{ position: 'relative' }}>
                      <img 
                        src={imageUrl} 
                        alt={name}  
                        style={{
                          width: '100%',
                          height: '320px',
                          objectFit: 'cover',
                          display: 'block'
                        }}
                        onError={(e) => {
                          console.log('❌ Image failed to load for:', name, 'URL:', imageUrl);
                          e.target.src = 'https://via.placeholder.com/600x400?text=No+Image';
                        }}
                      />
                      <div style={{
                        position: 'absolute',
                        top: '16px',
                        right: '16px',
                        background: 'linear-gradient(135deg, #84cc16, #65a30d)',
                        color: 'white',
                        padding: '6px 16px',
                        borderRadius: '20px',
                        fontSize: '13px',
                        fontWeight: '600',
                        letterSpacing: '0.5px',
                        boxShadow: '0 4px 12px rgba(132, 204, 22, 0.4)'
                      }}>
                        Available
                      </div>
                      <div style={{
                        position: 'absolute',
                        bottom: '16px',
                        left: '16px',
                        background: 'rgba(0,0,0,0.6)',
                        backdropFilter: 'blur(8px)',
                        padding: '4px 14px',
                        borderRadius: '12px',
                        color: 'white',
                        fontSize: '12px',
                        fontWeight: '500',
                        letterSpacing: '0.5px'
                      }}>
                        ★ Premium
                      </div>
                    </div>
                  </Link>
                  
                  <div style={{ padding: '24px' }}>
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
                      marginBottom: '8px'
                    }}>
                      <h3 style={{
                        fontSize: '22px',
                        fontWeight: '700',
                        color: '#1f2937',
                        margin: 0
                      }}>
                        {name}
                      </h3>
                      <span style={{
                        fontSize: '22px',
                        fontWeight: '800',
                        color: '#84cc16',
                        whiteSpace: 'nowrap',
                        marginLeft: '12px'
                      }}>
                        RS {price}
                      </span>
                    </div>
                    
                    <Rating rating={4.5} />
                    
                    <p style={{
                      color: '#6b7280',
                      fontSize: '14px',
                      margin: '12px 0 16px 0',
                      lineHeight: '1.6',
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden'
                    }}>
                      {description || 'Luxurious room with amazing amenities'}
                    </p>
                    
                    <div style={{
                      display: 'grid',
                      gridTemplateColumns: '1fr 1fr',
                      gap: '8px',
                      marginBottom: '16px'
                    }}>
                      {amenitisList.map((amenity) => (
                        <div 
                          key={amenity.id} 
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                            background: '#f9fafb',
                            padding: '8px 12px',
                            borderRadius: '8px',
                            fontSize: '13px',
                            color: '#374151',
                            transition: 'all 0.2s'
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.background = '#f3f4f6'
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.background = '#f9fafb'
                          }}
                        >
                          {amenity.icon} 
                          <span>{amenity.label}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Link to={`/room/${roomId}`} style={{ textDecoration: 'none' }}>
                      <button 
                        style={{
                          width: '100%',
                          background: 'linear-gradient(135deg, #84cc16, #65a30d)',
                          color: 'white',
                          border: 'none',
                          padding: '14px 20px',
                          borderRadius: '10px',
                          fontSize: '16px',
                          fontWeight: '600',
                          cursor: 'pointer',
                          transition: 'all 0.3s ease',
                          letterSpacing: '0.5px'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = 'scale(1.02)'
                          e.currentTarget.style.boxShadow = '0 8px 25px rgba(132, 204, 22, 0.4)'
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = 'scale(1)'
                          e.currentTarget.style.boxShadow = 'none'
                        }}
                      >
                        Book Now →
                      </button>
                    </Link>
                  </div>
                </div>
              )
            })
          ) : (
            <div style={{
              gridColumn: '1 / -1',
              textAlign: 'center',
              padding: '48px 0'
            }}>
              <p style={{ color: '#6b7280', fontSize: '18px' }}>No rooms available</p>
              <p style={{ color: '#9ca3af', fontSize: '14px', marginTop: '8px' }}>Check back later for new listings</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default HotelList