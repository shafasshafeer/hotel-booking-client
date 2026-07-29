// import React, { useContext, useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom'
// import { FaConciergeBell, FaSwimmingPool, FaTv, FaUtensils, FaWifi, FaStar, FaStarHalfAlt, FaRegStar, FaUser, FaEnvelope, FaPhone, FaCalendarAlt, FaUsers, FaHeart, FaShareAlt, FaArrowRight } from 'react-icons/fa'
// import { RoomContext } from '../context/RoomContext'
// import { backendUrl } from '../App'
// import axios from 'axios'
// import { toast } from 'react-toastify'

// const HotelDetails = () => {
//   const { rooms } = useContext(RoomContext)
//   const { id } = useParams()
  
//   const [room, setRoom] = useState(null)
//   const [loading, setLoading] = useState(true)
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     checkin: '',
//     checkout: '',
//     guests: 1,
//     roomName: '',
//     roomId: ''
//   })

//   const Rating = ({ rating = 4.5 }) => {
//     const fullStars = Math.floor(rating)
//     const hasHalfStar = rating % 1 >= 0.5
//     const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0)

//     return (
//       <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
//         <div style={{ display: 'flex', gap: '2px', color: '#fbbf24' }}>
//           {[...Array(fullStars)].map((_, i) => <FaStar key={i} style={{ fontSize: '15px' }} />)}
//           {hasHalfStar && <FaStarHalfAlt style={{ fontSize: '15px' }} />}
//           {[...Array(emptyStars)].map((_, i) => <FaRegStar key={i} style={{ fontSize: '15px' }} />)}
//         </div>
//         <span style={{ color: '#94a3b8', fontSize: '13px', marginLeft: '6px' }}>({rating})</span>
//       </div>
//     )
//   }

//   useEffect(() => {
//     const fetchRoomDetails = async () => {
//       try {
//         setLoading(true)
        
//         const foundRoom = rooms?.find(r => r._id === id || r.id === parseInt(id))
        
//         if (foundRoom) {
//           setRoom(foundRoom)
//           setFormData(prev => ({
//             ...prev,
//             roomName: foundRoom.name,
//             roomId: foundRoom._id || foundRoom.id
//           }))
//           setLoading(false)
//           return
//         }
        
//         const response = await axios.get(`${backendUrl}/api/hotel/rooms/${id}`)
        
//         let roomData = null
//         if (response.data.hotel) {
//           roomData = response.data.hotel
//         } else if (response.data.data) {
//           roomData = response.data.data
//         } else if (response.data.room) {
//           roomData = response.data.room
//         } else {
//           roomData = response.data
//         }
        
//         if (roomData) {
//           setRoom(roomData)
//           setFormData(prev => ({
//             ...prev,
//             roomName: roomData.name,
//             roomId: roomData._id || roomData.id
//           }))
//         } else {
//           toast.error('Room not found')
//         }
//       } catch (error) {
//         console.error('Error fetching room details:', error)
//         toast.error(error.response?.data?.message || 'Failed to load room details')
//       } finally {
//         setLoading(false)
//       }
//     }

//     if (id) {
//       fetchRoomDetails()
//     }
//   }, [id, rooms])

//   const handleInputChange = (e) => {
//     const { name, value } = e.target
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }))
//   }

//   const handleSubmit = async (e) => {
//     e.preventDefault()
    
//     try {
//       const { name, email, phone, checkin, checkout, guests, roomName, roomId } = formData
      
//       if (!name || !email || !phone || !checkin || !checkout) {
//         toast.error('Please fill in all fields')
//         return
//       }
      
//       const reservationData = {
//         name,
//         email,
//         phone,
//         checkin,
//         checkout,
//         guests: Number(guests),
//         roomName,
//         roomId
//       }
      
//       const response = await axios.post(`${backendUrl}/api/reservation/create`, reservationData)
      
//       if (response.data.success) {
//         toast.success('✅ Room booked successfully!')
//         setFormData(prev => ({
//           ...prev,
//           name: '',
//           email: '',
//           phone: '',
//           checkin: '',
//           checkout: '',
//           guests: 1
//         }))
//       } else {
//         toast.error(response.data.message || 'Failed to book room')
//       }
//     } catch (error) {
//       console.error('Error booking room:', error)
//       toast.error(error.response?.data?.message || 'Error booking room. Please try again.')
//     }
//   }

//   if (loading) {
//     return (
//       <div style={{
//         minHeight: '100vh',
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//         background: 'linear-gradient(180deg, #f7f0eb 0%, #f0e8e0 100%)'
//       }}>
//         <div style={{ textAlign: 'center' }}>
//           <div style={{
//             display: 'inline-block',
//             width: '60px',
//             height: '60px',
//             border: '4px solid rgba(132, 204, 22, 0.1)',
//             borderTop: '4px solid #84cc16',
//             borderRadius: '50%',
//             animation: 'spin 1s linear infinite'
//           }}></div>
//           <p style={{ marginTop: '16px', color: '#6b7280' }}>Loading room details...</p>
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

//   if (!room) {
//     return (
//       <div style={{
//         minHeight: '100vh',
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//         background: 'linear-gradient(180deg, #f7f0eb 0%, #f0e8e0 100%)'
//       }}>
//         <div style={{ textAlign: 'center' }}>
//           <p style={{ fontSize: '64px', margin: 0 }}>🏨</p>
//           <p style={{ marginTop: '16px', color: '#6b7280', fontSize: '18px' }}>Room not found</p>
//         </div>
//       </div>
//     )
//   }

//   return (
//     <div style={{
//       background: 'linear-gradient(180deg, #f7f0eb 0%, #f0e8e0 100%)',
//       padding: '40px 20px',
//       minHeight: '100vh'
//     }}>
//       <div style={{
//         maxWidth: '1200px',
//         margin: '0 auto',
//         display: 'flex',
//         flexDirection: 'column',
//         gap: '32px'
//       }}>
//         {/* Breadcrumb */}
//         <div style={{
//           display: 'flex',
//           alignItems: 'center',
//           gap: '8px',
//           color: '#6b7280',
//           fontSize: '14px',
//           padding: '12px 20px',
//           background: 'rgba(255,255,255,0.6)',
//           borderRadius: '12px',
//           backdropFilter: 'blur(10px)'
//         }}>
//           <span style={{ color: '#84cc16' }}>Home</span>
//           <span>›</span>
//           <span style={{ color: '#84cc16' }}>Rooms</span>
//           <span>›</span>
//           <span style={{ color: '#1f2937', fontWeight: '600' }}>{room.name}</span>
//         </div>

//         {/* Main Content - Flex Layout */}
//         <div style={{
//           display: 'flex',
//           flexDirection: 'row',
//           gap: '32px',
//           flexWrap: 'wrap'
//         }}>
//           {/* Left Column - Room Details */}
//           <div style={{
//             flex: '2',
//             minWidth: '300px',
//             display: 'flex',
//             flexDirection: 'column',
//             gap: '24px'
//           }}>
//             {/* Image Section */}
//             <div style={{
//               position: 'relative',
//               borderRadius: '20px',
//               overflow: 'hidden',
//               boxShadow: '0 20px 60px rgba(0,0,0,0.08)'
//             }}>
//               <img 
//                 src={room.Image || room.image || 'https://via.placeholder.com/800x450?text=Room+Image'} 
//                 alt={room.name} 
//                 style={{
//                   width: '100%',
//                   height: '420px',
//                   objectFit: 'cover',
//                   display: 'block'
//                 }}
//                 onError={(e) => {
//                   e.target.src = 'https://via.placeholder.com/800x450?text=Room+Image'
//                 }}
//               />
//               <div style={{
//                 position: 'absolute',
//                 bottom: 0,
//                 left: 0,
//                 right: 0,
//                 height: '40%',
//                 background: 'linear-gradient(transparent, rgba(0,0,0,0.6))',
//                 pointerEvents: 'none'
//               }}></div>
              
//               <div style={{
//                 position: 'absolute',
//                 top: '20px',
//                 left: '20px',
//                 display: 'flex',
//                 gap: '10px',
//                 flexWrap: 'wrap'
//               }}>
//                 <span style={{
//                   background: 'rgba(132, 204, 22, 0.95)',
//                   padding: '6px 18px',
//                   borderRadius: '50px',
//                   color: 'white',
//                   fontSize: '12px',
//                   fontWeight: '600',
//                   letterSpacing: '0.5px',
//                   backdropFilter: 'blur(10px)',
//                   boxShadow: '0 4px 15px rgba(132, 204, 22, 0.3)'
//                 }}>
//                   ✦ Available
//                 </span>
//                 <span style={{
//                   background: 'rgba(255,255,255,0.9)',
//                   padding: '6px 18px',
//                   borderRadius: '50px',
//                   color: '#1f2937',
//                   fontSize: '12px',
//                   fontWeight: '600',
//                   letterSpacing: '0.5px',
//                   backdropFilter: 'blur(10px)',
//                   boxShadow: '0 4px 15px rgba(0,0,0,0.05)'
//                 }}>
//                   ★ Premium
//                 </span>
//               </div>

//               <div style={{
//                 position: 'absolute',
//                 top: '20px',
//                 right: '20px',
//                 display: 'flex',
//                 gap: '10px'
//               }}>
//                 <button style={{
//                   background: 'rgba(255,255,255,0.9)',
//                   backdropFilter: 'blur(10px)',
//                   border: 'none',
//                   borderRadius: '50%',
//                   width: '44px',
//                   height: '44px',
//                   display: 'flex',
//                   alignItems: 'center',
//                   justifyContent: 'center',
//                   cursor: 'pointer',
//                   color: '#1f2937',
//                   transition: 'all 0.3s ease',
//                   boxShadow: '0 4px 15px rgba(0,0,0,0.05)'
//                 }}
//                 onMouseEnter={(e) => {
//                   e.currentTarget.style.background = 'rgba(239, 68, 68, 0.9)'
//                   e.currentTarget.style.color = 'white'
//                   e.currentTarget.style.transform = 'scale(1.1)'
//                 }}
//                 onMouseLeave={(e) => {
//                   e.currentTarget.style.background = 'rgba(255,255,255,0.9)'
//                   e.currentTarget.style.color = '#1f2937'
//                   e.currentTarget.style.transform = 'scale(1)'
//                 }}>
//                   <FaHeart />
//                 </button>
//                 <button style={{
//                   background: 'rgba(255,255,255,0.9)',
//                   backdropFilter: 'blur(10px)',
//                   border: 'none',
//                   borderRadius: '50%',
//                   width: '44px',
//                   height: '44px',
//                   display: 'flex',
//                   alignItems: 'center',
//                   justifyContent: 'center',
//                   cursor: 'pointer',
//                   color: '#1f2937',
//                   transition: 'all 0.3s ease',
//                   boxShadow: '0 4px 15px rgba(0,0,0,0.05)'
//                 }}
//                 onMouseEnter={(e) => {
//                   e.currentTarget.style.background = 'rgba(132, 204, 22, 0.9)'
//                   e.currentTarget.style.color = 'white'
//                   e.currentTarget.style.transform = 'scale(1.1)'
//                 }}
//                 onMouseLeave={(e) => {
//                   e.currentTarget.style.background = 'rgba(255,255,255,0.9)'
//                   e.currentTarget.style.color = '#1f2937'
//                   e.currentTarget.style.transform = 'scale(1)'
//                 }}>
//                   <FaShareAlt />
//                 </button>
//               </div>

//               <div style={{
//                 position: 'absolute',
//                 bottom: '30px',
//                 right: '30px',
//                 background: 'rgba(255,255,255,0.95)',
//                 backdropFilter: 'blur(10px)',
//                 padding: '12px 24px',
//                 borderRadius: '16px',
//                 boxShadow: '0 8px 30px rgba(0,0,0,0.08)',
//                 textAlign: 'right'
//               }}>
//                 <span style={{
//                   color: '#84cc16',
//                   fontSize: '28px',
//                   fontWeight: '800'
//                 }}>
//                   RS {room.price}
//                 </span>
//                 <span style={{
//                   color: '#6b7280',
//                   fontSize: '13px',
//                   marginLeft: '4px',
//                   display: 'block'
//                 }}>
//                   per night
//                 </span>
//               </div>
//             </div>

//             {/* Room Info */}
//             <div style={{
//               background: 'rgba(255,255,255,0.9)',
//               backdropFilter: 'blur(20px)',
//               borderRadius: '20px',
//               padding: '32px',
//               border: '1px solid rgba(255,255,255,0.5)',
//               boxShadow: '0 8px 30px rgba(0,0,0,0.04)'
//             }}>
//               <div style={{
//                 display: 'flex',
//                 justifyContent: 'space-between',
//                 alignItems: 'flex-start',
//                 flexWrap: 'wrap',
//                 gap: '16px',
//                 marginBottom: '16px'
//               }}>
//                 <div>
//                   <h1 style={{
//                     fontSize: 'clamp(24px, 3vw, 32px)',
//                     fontWeight: '700',
//                     color: '#1f2937',
//                     margin: '0 0 8px 0'
//                   }}>
//                     {room.name}
//                   </h1>
//                   <Rating rating={4.5} />
//                 </div>
//               </div>

//               <div style={{
//                 background: 'rgba(247, 240, 235, 0.5)',
//                 borderRadius: '16px',
//                 padding: '20px',
//                 marginBottom: '20px'
//               }}>
//                 <h3 style={{
//                   fontSize: '15px',
//                   fontWeight: '600',
//                   color: '#6b7280',
//                   margin: '0 0 14px 0',
//                   textTransform: 'uppercase',
//                   letterSpacing: '1px'
//                 }}>
//                   Amenities
//                 </h3>
//                 <div style={{
//                   display: 'flex',
//                   flexWrap: 'wrap',
//                   gap: '10px'
//                 }}>
//                   {[
//                     { icon: <FaWifi />, label: 'WiFi' },
//                     { icon: <FaTv />, label: 'TV' },
//                     { icon: <FaUtensils />, label: 'Restaurant' },
//                     { icon: <FaSwimmingPool />, label: 'Pool' },
//                     { icon: <FaConciergeBell />, label: 'Room Service' }
//                   ].map((amenity, index) => (
//                     <div 
//                       key={index}
//                       style={{
//                         display: 'flex',
//                         alignItems: 'center',
//                         gap: '8px',
//                         padding: '8px 16px',
//                         background: 'white',
//                         borderRadius: '50px',
//                         color: '#374151',
//                         fontSize: '13px',
//                         boxShadow: '0 2px 8px rgba(0,0,0,0.03)'
//                       }}
//                     >
//                       <span style={{ color: '#84cc16' }}>{amenity.icon}</span>
//                       {amenity.label}
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               <div>
//                 <h3 style={{
//                   fontSize: '15px',
//                   fontWeight: '600',
//                   color: '#6b7280',
//                   margin: '0 0 12px 0',
//                   textTransform: 'uppercase',
//                   letterSpacing: '1px'
//                 }}>
//                   Description
//                 </h3>
//                 <p style={{
//                   color: '#4b5563',
//                   fontSize: '15px',
//                   lineHeight: '1.8',
//                   margin: 0
//                 }}>
//                   {room.description || room.discription || 'No description available'}
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Right Column - Booking Form */}
//           <div style={{
//             flex: '1',
//             minWidth: '320px',
//             position: 'sticky',
//             top: '24px',
//             alignSelf: 'flex-start'
//           }}>
//             <div style={{
//               background: 'rgba(255,255,255,0.95)',
//               backdropFilter: 'blur(20px)',
//               borderRadius: '20px',
//               padding: '32px',
//               border: '1px solid rgba(255,255,255,0.5)',
//               boxShadow: '0 8px 30px rgba(0,0,0,0.04)'
//             }}>
//               <div style={{
//                 display: 'flex',
//                 alignItems: 'center',
//                 gap: '12px',
//                 marginBottom: '24px',
//                 paddingBottom: '16px',
//                 borderBottom: '1px solid #f3f4f6'
//               }}>
//                 <div style={{
//                   width: '4px',
//                   height: '28px',
//                   background: 'linear-gradient(180deg, #84cc16, #65a30d)',
//                   borderRadius: '4px'
//                 }}></div>
//                 <h2 style={{
//                   fontSize: '22px',
//                   fontWeight: '700',
//                   color: '#1f2937',
//                   margin: 0
//                 }}>
//                   Book Your Stay
//                 </h2>
//               </div>

//               <form onSubmit={handleSubmit} style={{
//                 display: 'flex',
//                 flexDirection: 'column',
//                 gap: '14px'
//               }}>
//                 {/* Name Input */}
//                 <div style={{ position: 'relative' }}>
//                   <FaUser style={{
//                     position: 'absolute',
//                     left: '14px',
//                     top: '50%',
//                     transform: 'translateY(-50%)',
//                     color: '#9ca3af',
//                     fontSize: '14px',
//                     zIndex: 1
//                   }} />
//                   <input 
//                     type="text" 
//                     name="name"
//                     placeholder='Full Name' 
//                     value={formData.name}
//                     onChange={handleInputChange}
//                     style={{
//                       width: '100%',
//                       padding: '13px 16px 13px 42px',
//                       background: '#f9fafb',
//                       border: '2px solid #e5e7eb',
//                       borderRadius: '12px',
//                       fontSize: '14px',
//                       outline: 'none',
//                       transition: 'all 0.3s ease',
//                       color: '#1f2937',
//                       boxSizing: 'border-box'
//                     }}
//                     onFocus={(e) => {
//                       e.currentTarget.style.borderColor = '#84cc16'
//                       e.currentTarget.style.background = 'white'
//                       e.currentTarget.style.boxShadow = '0 0 0 4px rgba(132, 204, 22, 0.1)'
//                     }}
//                     onBlur={(e) => {
//                       e.currentTarget.style.borderColor = '#e5e7eb'
//                       e.currentTarget.style.background = '#f9fafb'
//                       e.currentTarget.style.boxShadow = 'none'
//                     }}
//                     required
//                   />
//                 </div>

//                 {/* Email Input - FIXED STYLING */}
//                 <div style={{ position: 'relative' }}>
//                   <FaEnvelope style={{
//                     position: 'absolute',
//                     left: '14px',
//                     top: '50%',
//                     transform: 'translateY(-50%)',
//                     color: '#9ca3af',
//                     fontSize: '14px',
//                     zIndex: 1
//                   }} />
//                   <input 
//                     type="email" 
//                     name="email"
//                     placeholder='Email Address' 
//                     value={formData.email}
//                     onChange={handleInputChange}
//                     style={{
//                       width: '100%',
//                       padding: '13px 16px 13px 42px',
//                       background: '#f9fafb',
//                       border: '2px solid #e5e7eb',
//                       borderRadius: '12px',
//                       fontSize: '14px',
//                       outline: 'none',
//                       transition: 'all 0.3s ease',
//                       color: '#1f2937',
//                       boxSizing: 'border-box'
//                     }}
//                     onFocus={(e) => {
//                       e.currentTarget.style.borderColor = '#84cc16'
//                       e.currentTarget.style.background = 'white'
//                       e.currentTarget.style.boxShadow = '0 0 0 4px rgba(132, 204, 22, 0.1)'
//                     }}
//                     onBlur={(e) => {
//                       e.currentTarget.style.borderColor = '#e5e7eb'
//                       e.currentTarget.style.background = '#f9fafb'
//                       e.currentTarget.style.boxShadow = 'none'
//                     }}
//                     required
//                   />
//                 </div>

//                 {/* Phone Input */}
//                 <div style={{ position: 'relative' }}>
//                   <FaPhone style={{
//                     position: 'absolute',
//                     left: '14px',
//                     top: '50%',
//                     transform: 'translateY(-50%)',
//                     color: '#9ca3af',
//                     fontSize: '14px',
//                     zIndex: 1
//                   }} />
//                   <input 
//                     type="tel" 
//                     name="phone"
//                     placeholder='Phone Number' 
//                     value={formData.phone}
//                     onChange={handleInputChange}
//                     style={{
//                       width: '100%',
//                       padding: '13px 16px 13px 42px',
//                       background: '#f9fafb',
//                       border: '2px solid #e5e7eb',
//                       borderRadius: '12px',
//                       fontSize: '14px',
//                       outline: 'none',
//                       transition: 'all 0.3s ease',
//                       color: '#1f2937',
//                       boxSizing: 'border-box'
//                     }}
//                     onFocus={(e) => {
//                       e.currentTarget.style.borderColor = '#84cc16'
//                       e.currentTarget.style.background = 'white'
//                       e.currentTarget.style.boxShadow = '0 0 0 4px rgba(132, 204, 22, 0.1)'
//                     }}
//                     onBlur={(e) => {
//                       e.currentTarget.style.borderColor = '#e5e7eb'
//                       e.currentTarget.style.background = '#f9fafb'
//                       e.currentTarget.style.boxShadow = 'none'
//                     }}
//                     required
//                   />
//                 </div>

//                 <div style={{
//                   display: 'flex',
//                   gap: '12px',
//                   flexWrap: 'wrap'
//                 }}>
//                   <div style={{ flex: '1', minWidth: '120px' }}>
//                     <label style={{
//                       fontSize: '12px',
//                       fontWeight: '600',
//                       color: '#6b7280',
//                       display: 'block',
//                       marginBottom: '4px',
//                       textTransform: 'uppercase',
//                       letterSpacing: '0.5px'
//                     }}>
//                       <FaCalendarAlt style={{ display: 'inline', marginRight: '4px', color: '#84cc16' }} />
//                       Check-In
//                     </label>
//                     <input 
//                       type="date" 
//                       name="checkin"
//                       value={formData.checkin}
//                       onChange={handleInputChange}
//                       style={{
//                         width: '100%',
//                         padding: '11px',
//                         background: '#f9fafb',
//                         border: '2px solid #e5e7eb',
//                         borderRadius: '12px',
//                         fontSize: '13px',
//                         outline: 'none',
//                         transition: 'all 0.3s ease',
//                         color: '#1f2937',
//                         cursor: 'pointer',
//                         boxSizing: 'border-box'
//                       }}
//                       onFocus={(e) => {
//                         e.currentTarget.style.borderColor = '#84cc16'
//                         e.currentTarget.style.background = 'white'
//                         e.currentTarget.style.boxShadow = '0 0 0 4px rgba(132, 204, 22, 0.1)'
//                       }}
//                       onBlur={(e) => {
//                         e.currentTarget.style.borderColor = '#e5e7eb'
//                         e.currentTarget.style.background = '#f9fafb'
//                         e.currentTarget.style.boxShadow = 'none'
//                       }}
//                       required
//                     />
//                   </div>

//                   <div style={{ flex: '1', minWidth: '120px' }}>
//                     <label style={{
//                       fontSize: '12px',
//                       fontWeight: '600',
//                       color: '#6b7280',
//                       display: 'block',
//                       marginBottom: '4px',
//                       textTransform: 'uppercase',
//                       letterSpacing: '0.5px'
//                     }}>
//                       <FaCalendarAlt style={{ display: 'inline', marginRight: '4px', color: '#84cc16' }} />
//                       Check-Out
//                     </label>
//                     <input 
//                       type="date" 
//                       name="checkout"
//                       value={formData.checkout}
//                       onChange={handleInputChange}
//                       style={{
//                         width: '100%',
//                         padding: '11px',
//                         background: '#f9fafb',
//                         border: '2px solid #e5e7eb',
//                         borderRadius: '12px',
//                         fontSize: '13px',
//                         outline: 'none',
//                         transition: 'all 0.3s ease',
//                         color: '#1f2937',
//                         cursor: 'pointer',
//                         boxSizing: 'border-box'
//                       }}
//                       onFocus={(e) => {
//                         e.currentTarget.style.borderColor = '#84cc16'
//                         e.currentTarget.style.background = 'white'
//                         e.currentTarget.style.boxShadow = '0 0 0 4px rgba(132, 204, 22, 0.1)'
//                       }}
//                       onBlur={(e) => {
//                         e.currentTarget.style.borderColor = '#e5e7eb'
//                         e.currentTarget.style.background = '#f9fafb'
//                         e.currentTarget.style.boxShadow = 'none'
//                       }}
//                       required
//                     />
//                   </div>
//                 </div>

//                 <div>
//                   <label style={{
//                     fontSize: '12px',
//                     fontWeight: '600',
//                     color: '#6b7280',
//                     display: 'block',
//                     marginBottom: '4px',
//                     textTransform: 'uppercase',
//                     letterSpacing: '0.5px'
//                   }}>
//                     <FaUsers style={{ display: 'inline', marginRight: '4px', color: '#84cc16' }} />
//                     Guests
//                   </label>
//                   <select 
//                     name="guests"
//                     value={formData.guests}
//                     onChange={handleInputChange}
//                     style={{
//                       width: '100%',
//                       padding: '12px 16px',
//                       background: '#f9fafb',
//                       border: '2px solid #e5e7eb',
//                       borderRadius: '12px',
//                       fontSize: '14px',
//                       outline: 'none',
//                       transition: 'all 0.3s ease',
//                       color: '#1f2937',
//                       cursor: 'pointer',
//                       boxSizing: 'border-box'
//                     }}
//                     onFocus={(e) => {
//                       e.currentTarget.style.borderColor = '#84cc16'
//                       e.currentTarget.style.background = 'white'
//                       e.currentTarget.style.boxShadow = '0 0 0 4px rgba(132, 204, 22, 0.1)'
//                     }}
//                     onBlur={(e) => {
//                       e.currentTarget.style.borderColor = '#e5e7eb'
//                       e.currentTarget.style.background = '#f9fafb'
//                       e.currentTarget.style.boxShadow = 'none'
//                     }}
//                   >
//                     {[...Array(5).keys()].map((i) => (
//                       <option key={i + 1} value={i+1}> {i+1} Guest(s)</option>
//                     ))}
//                   </select>
//                 </div>

//                 <button 
//                   type='submit'
//                   style={{
//                     width: '100%',
//                     background: 'linear-gradient(135deg, #84cc16, #65a30d)',
//                     color: 'white',
//                     border: 'none',
//                     padding: '15px',
//                     borderRadius: '12px',
//                     fontSize: '16px',
//                     fontWeight: '700',
//                     cursor: 'pointer',
//                     transition: 'all 0.3s ease',
//                     marginTop: '8px',
//                     display: 'flex',
//                     alignItems: 'center',
//                     justifyContent: 'center',
//                     gap: '10px',
//                     boxShadow: '0 8px 30px rgba(132, 204, 22, 0.25)',
//                     boxSizing: 'border-box'
//                   }}
//                   onMouseEnter={(e) => {
//                     e.currentTarget.style.transform = 'scale(1.02)'
//                     e.currentTarget.style.boxShadow = '0 12px 40px rgba(132, 204, 22, 0.35)'
//                   }}
//                   onMouseLeave={(e) => {
//                     e.currentTarget.style.transform = 'scale(1)'
//                     e.currentTarget.style.boxShadow = '0 8px 30px rgba(132, 204, 22, 0.25)'
//                   }}
//                 >
//                   Book Now
//                   <FaArrowRight style={{ 
//                     fontSize: '16px',
//                     transition: 'transform 0.3s'
//                   }}
//                   onMouseEnter={(e) => {
//                     e.currentTarget.style.transform = 'translateX(4px)'
//                   }}
//                   onMouseLeave={(e) => {
//                     e.currentTarget.style.transform = 'translateX(0)'
//                   }} />
//                 </button>

//                 <p style={{
//                   textAlign: 'center',
//                   color: '#9ca3af',
//                   fontSize: '12px',
//                   margin: '4px 0 0 0'
//                 }}>
//                   ✦ Secure booking. No hidden fees ✦
//                 </p>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default HotelDetails




import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { FaConciergeBell, FaSwimmingPool, FaTv, FaUtensils, FaWifi, FaStar, FaStarHalfAlt, FaRegStar, FaUser, FaEnvelope, FaPhone, FaCalendarAlt, FaUsers, FaHeart, FaShareAlt, FaArrowRight } from 'react-icons/fa'
import { RoomContext } from '../context/RoomContext'
import { backendUrl } from '../App'
import axios from 'axios'
import { toast } from 'react-toastify'

const HotelDetails = () => {
  const { rooms } = useContext(RoomContext)
  const { id } = useParams()
  
  const [room, setRoom] = useState(null)
  const [loading, setLoading] = useState(true)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    checkin: '',
    checkout: '',
    guests: 1,
    roomName: '',
    roomId: ''
  })

  const Rating = ({ rating = 4.5 }) => {
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 >= 0.5
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0)

    return (
      <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
        <div style={{ display: 'flex', gap: '2px', color: '#fbbf24' }}>
          {[...Array(fullStars)].map((_, i) => <FaStar key={i} style={{ fontSize: '15px' }} />)}
          {hasHalfStar && <FaStarHalfAlt style={{ fontSize: '15px' }} />}
          {[...Array(emptyStars)].map((_, i) => <FaRegStar key={i} style={{ fontSize: '15px' }} />)}
        </div>
        <span style={{ color: '#94a3b8', fontSize: '13px', marginLeft: '6px' }}>({rating})</span>
      </div>
    )
  }

  useEffect(() => {
    const fetchRoomDetails = async () => {
      try {
        setLoading(true)
        
        const foundRoom = rooms?.find(r => r._id === id || r.id === parseInt(id))
        
        if (foundRoom) {
          setRoom(foundRoom)
          setFormData(prev => ({
            ...prev,
            roomName: foundRoom.name,
            roomId: foundRoom._id || foundRoom.id
          }))
          setLoading(false)
          return
        }
        
        const response = await axios.get(`${backendUrl}/api/hotel/rooms/${id}`)
        
        let roomData = null
        if (response.data.hotel) {
          roomData = response.data.hotel
        } else if (response.data.data) {
          roomData = response.data.data
        } else if (response.data.room) {
          roomData = response.data.room
        } else {
          roomData = response.data
        }
        
        if (roomData) {
          setRoom(roomData)
          setFormData(prev => ({
            ...prev,
            roomName: roomData.name,
            roomId: roomData._id || roomData.id
          }))
        } else {
          toast.error('❌ Room not found')
        }
      } catch (error) {
        console.error('Error fetching room details:', error)
        toast.error('❌ Failed to load room details')
      } finally {
        setLoading(false)
      }
    }

    if (id) {
      fetchRoomDetails()
    }
  }, [id, rooms])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Validation
    const { name, email, phone, checkin, checkout } = formData
    
    if (!name || !email || !phone || !checkin || !checkout) {
      toast.warning('⚠️ Please fill in all fields')
      return
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      toast.warning('⚠️ Please enter a valid email address')
      return
    }
    
    // Phone validation
    if (phone.length < 10) {
      toast.warning('⚠️ Please enter a valid phone number')
      return
    }
    
    // Date validation
    if (new Date(checkin) < new Date()) {
      toast.warning('⚠️ Check-in date cannot be in the past')
      return
    }
    
    if (new Date(checkout) <= new Date(checkin)) {
      toast.warning('⚠️ Check-out date must be after check-in date')
      return
    }
    
    setIsSubmitting(true)
    
    // Show loading toast
    const loadingToast = toast.loading('⏳ Booking your room...')
    
    try {
      const reservationData = {
        name: name.trim(),
        email: email.trim(),
        phone: phone.trim(),
        checkin,
        checkout,
        guests: Number(formData.guests),
        roomName: formData.roomName,
        roomId: formData.roomId
      }
      
      const response = await axios.post(`${backendUrl}/api/reservation/create`, reservationData)
      
      // Update loading toast to success
      toast.update(loadingToast, {
        render: '✅ Room booked successfully!',
        type: 'success',
        isLoading: false,
        autoClose: 5000,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true
      })
      
      // Additional success notification
      toast.success('🎉 Your booking has been confirmed! Check your email for details.', {
        position: "top-right",
        autoClose: 6000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
      })
      
      // Reset form
      setFormData(prev => ({
        ...prev,
        name: '',
        email: '',
        phone: '',
        checkin: '',
        checkout: '',
        guests: 1
      }))
      
      // Scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' })
      
    } catch (error) {
      console.error('Error booking room:', error)
      
      // Update loading toast to error
      toast.update(loadingToast, {
        render: error.response?.data?.message || '❌ Failed to book room',
        type: 'error',
        isLoading: false,
        autoClose: 5000,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true
      })
      
      // Show detailed error
      if (error.response) {
        toast.error(error.response.data.message || 'Server error occurred', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "colored",
        })
      } else if (error.request) {
        toast.error('❌ Cannot connect to server. Please check your internet connection.', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "colored",
        })
      } else {
        toast.error('❌ An error occurred. Please try again.', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "colored",
        })
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  if (loading) {
    return (
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(180deg, #f7f0eb 0%, #f0e8e0 100%)'
      }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{
            display: 'inline-block',
            width: '60px',
            height: '60px',
            border: '4px solid rgba(132, 204, 22, 0.1)',
            borderTop: '4px solid #84cc16',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite'
          }}></div>
          <p style={{ marginTop: '16px', color: '#6b7280' }}>Loading room details...</p>
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

  if (!room) {
    return (
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(180deg, #f7f0eb 0%, #f0e8e0 100%)'
      }}>
        <div style={{ textAlign: 'center' }}>
          <p style={{ fontSize: '64px', margin: 0 }}>🏨</p>
          <p style={{ marginTop: '16px', color: '#6b7280', fontSize: '18px' }}>Room not found</p>
        </div>
      </div>
    )
  }

  return (
    <div style={{
      background: 'linear-gradient(180deg, #f7f0eb 0%, #f0e8e0 100%)',
      padding: '40px 20px',
      minHeight: '100vh'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        gap: '32px'
      }}>
        {/* Breadcrumb */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          color: '#6b7280',
          fontSize: '14px',
          padding: '12px 20px',
          background: 'rgba(255,255,255,0.6)',
          borderRadius: '12px',
          backdropFilter: 'blur(10px)'
        }}>
          <span style={{ color: '#84cc16' }}>Home</span>
          <span>›</span>
          <span style={{ color: '#84cc16' }}>Rooms</span>
          <span>›</span>
          <span style={{ color: '#1f2937', fontWeight: '600' }}>{room.name}</span>
        </div>

        {/* Main Content - Flex Layout */}
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          gap: '32px',
          flexWrap: 'wrap'
        }}>
          {/* Left Column - Room Details */}
          <div style={{
            flex: '2',
            minWidth: '300px',
            display: 'flex',
            flexDirection: 'column',
            gap: '24px'
          }}>
            {/* Image Section */}
            <div style={{
              position: 'relative',
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: '0 20px 60px rgba(0,0,0,0.08)'
            }}>
              <img 
                src={room.Image || room.image || 'https://via.placeholder.com/800x450?text=Room+Image'} 
                alt={room.name} 
                style={{
                  width: '100%',
                  height: '420px',
                  objectFit: 'cover',
                  display: 'block'
                }}
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/800x450?text=Room+Image'
                }}
              />
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                height: '40%',
                background: 'linear-gradient(transparent, rgba(0,0,0,0.6))',
                pointerEvents: 'none'
              }}></div>
              
              <div style={{
                position: 'absolute',
                top: '20px',
                left: '20px',
                display: 'flex',
                gap: '10px',
                flexWrap: 'wrap'
              }}>
                <span style={{
                  background: 'rgba(132, 204, 22, 0.95)',
                  padding: '6px 18px',
                  borderRadius: '50px',
                  color: 'white',
                  fontSize: '12px',
                  fontWeight: '600',
                  letterSpacing: '0.5px',
                  backdropFilter: 'blur(10px)',
                  boxShadow: '0 4px 15px rgba(132, 204, 22, 0.3)'
                }}>
                  ✦ Available
                </span>
                <span style={{
                  background: 'rgba(255,255,255,0.9)',
                  padding: '6px 18px',
                  borderRadius: '50px',
                  color: '#1f2937',
                  fontSize: '12px',
                  fontWeight: '600',
                  letterSpacing: '0.5px',
                  backdropFilter: 'blur(10px)',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.05)'
                }}>
                  ★ Premium
                </span>
              </div>

              <div style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                display: 'flex',
                gap: '10px'
              }}>
                <button style={{
                  background: 'rgba(255,255,255,0.9)',
                  backdropFilter: 'blur(10px)',
                  border: 'none',
                  borderRadius: '50%',
                  width: '44px',
                  height: '44px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  color: '#1f2937',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.05)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(239, 68, 68, 0.9)'
                  e.currentTarget.style.color = 'white'
                  e.currentTarget.style.transform = 'scale(1.1)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.9)'
                  e.currentTarget.style.color = '#1f2937'
                  e.currentTarget.style.transform = 'scale(1)'
                }}>
                  <FaHeart />
                </button>
                <button style={{
                  background: 'rgba(255,255,255,0.9)',
                  backdropFilter: 'blur(10px)',
                  border: 'none',
                  borderRadius: '50%',
                  width: '44px',
                  height: '44px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  color: '#1f2937',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.05)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(132, 204, 22, 0.9)'
                  e.currentTarget.style.color = 'white'
                  e.currentTarget.style.transform = 'scale(1.1)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.9)'
                  e.currentTarget.style.color = '#1f2937'
                  e.currentTarget.style.transform = 'scale(1)'
                }}>
                  <FaShareAlt />
                </button>
              </div>

              <div style={{
                position: 'absolute',
                bottom: '30px',
                right: '30px',
                background: 'rgba(255,255,255,0.95)',
                backdropFilter: 'blur(10px)',
                padding: '12px 24px',
                borderRadius: '16px',
                boxShadow: '0 8px 30px rgba(0,0,0,0.08)',
                textAlign: 'right'
              }}>
                <span style={{
                  color: '#84cc16',
                  fontSize: '28px',
                  fontWeight: '800'
                }}>
                  RS {room.price}
                </span>
                <span style={{
                  color: '#6b7280',
                  fontSize: '13px',
                  marginLeft: '4px',
                  display: 'block'
                }}>
                  per night
                </span>
              </div>
            </div>

            {/* Room Info */}
            <div style={{
              background: 'rgba(255,255,255,0.9)',
              backdropFilter: 'blur(20px)',
              borderRadius: '20px',
              padding: '32px',
              border: '1px solid rgba(255,255,255,0.5)',
              boxShadow: '0 8px 30px rgba(0,0,0,0.04)'
            }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                flexWrap: 'wrap',
                gap: '16px',
                marginBottom: '16px'
              }}>
                <div>
                  <h1 style={{
                    fontSize: 'clamp(24px, 3vw, 32px)',
                    fontWeight: '700',
                    color: '#1f2937',
                    margin: '0 0 8px 0'
                  }}>
                    {room.name}
                  </h1>
                  <Rating rating={4.5} />
                </div>
              </div>

              <div style={{
                background: 'rgba(247, 240, 235, 0.5)',
                borderRadius: '16px',
                padding: '20px',
                marginBottom: '20px'
              }}>
                <h3 style={{
                  fontSize: '15px',
                  fontWeight: '600',
                  color: '#6b7280',
                  margin: '0 0 14px 0',
                  textTransform: 'uppercase',
                  letterSpacing: '1px'
                }}>
                  Amenities
                </h3>
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '10px'
                }}>
                  {[
                    { icon: <FaWifi />, label: 'WiFi' },
                    { icon: <FaTv />, label: 'TV' },
                    { icon: <FaUtensils />, label: 'Restaurant' },
                    { icon: <FaSwimmingPool />, label: 'Pool' },
                    { icon: <FaConciergeBell />, label: 'Room Service' }
                  ].map((amenity, index) => (
                    <div 
                      key={index}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        padding: '8px 16px',
                        background: 'white',
                        borderRadius: '50px',
                        color: '#374151',
                        fontSize: '13px',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.03)'
                      }}
                    >
                      <span style={{ color: '#84cc16' }}>{amenity.icon}</span>
                      {amenity.label}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 style={{
                  fontSize: '15px',
                  fontWeight: '600',
                  color: '#6b7280',
                  margin: '0 0 12px 0',
                  textTransform: 'uppercase',
                  letterSpacing: '1px'
                }}>
                  Description
                </h3>
                <p style={{
                  color: '#4b5563',
                  fontSize: '15px',
                  lineHeight: '1.8',
                  margin: 0
                }}>
                  {room.description || room.discription || 'No description available'}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Booking Form */}
          <div style={{
            flex: '1',
            minWidth: '320px',
            position: 'sticky',
            top: '24px',
            alignSelf: 'flex-start'
          }}>
            <div style={{
              background: 'rgba(255,255,255,0.95)',
              backdropFilter: 'blur(20px)',
              borderRadius: '20px',
              padding: '32px',
              border: '1px solid rgba(255,255,255,0.5)',
              boxShadow: '0 8px 30px rgba(0,0,0,0.04)'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                marginBottom: '24px',
                paddingBottom: '16px',
                borderBottom: '1px solid #f3f4f6'
              }}>
                <div style={{
                  width: '4px',
                  height: '28px',
                  background: 'linear-gradient(180deg, #84cc16, #65a30d)',
                  borderRadius: '4px'
                }}></div>
                <h2 style={{
                  fontSize: '22px',
                  fontWeight: '700',
                  color: '#1f2937',
                  margin: 0
                }}>
                  Book Your Stay
                </h2>
              </div>

              <form onSubmit={handleSubmit} style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '14px'
              }}>
                {/* Name Input */}
                <div style={{ position: 'relative' }}>
                  <FaUser style={{
                    position: 'absolute',
                    left: '14px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    color: '#9ca3af',
                    fontSize: '14px',
                    zIndex: 1
                  }} />
                  <input 
                    type="text" 
                    name="name"
                    placeholder='Full Name' 
                    value={formData.name}
                    onChange={handleInputChange}
                    style={{
                      width: '100%',
                      padding: '13px 16px 13px 42px',
                      background: '#f9fafb',
                      border: '2px solid #e5e7eb',
                      borderRadius: '12px',
                      fontSize: '14px',
                      outline: 'none',
                      transition: 'all 0.3s ease',
                      color: '#1f2937',
                      boxSizing: 'border-box'
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = '#84cc16'
                      e.currentTarget.style.background = 'white'
                      e.currentTarget.style.boxShadow = '0 0 0 4px rgba(132, 204, 22, 0.1)'
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = '#e5e7eb'
                      e.currentTarget.style.background = '#f9fafb'
                      e.currentTarget.style.boxShadow = 'none'
                    }}
                    required
                  />
                </div>

                {/* Email Input */}
                <div style={{ position: 'relative' }}>
                  <FaEnvelope style={{
                    position: 'absolute',
                    left: '14px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    color: '#9ca3af',
                    fontSize: '14px',
                    zIndex: 1
                  }} />
                  <input 
                    type="email" 
                    name="email"
                    placeholder='Email Address' 
                    value={formData.email}
                    onChange={handleInputChange}
                    style={{
                      width: '100%',
                      padding: '13px 16px 13px 42px',
                      background: '#f9fafb',
                      border: '2px solid #e5e7eb',
                      borderRadius: '12px',
                      fontSize: '14px',
                      outline: 'none',
                      transition: 'all 0.3s ease',
                      color: '#1f2937',
                      boxSizing: 'border-box'
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = '#84cc16'
                      e.currentTarget.style.background = 'white'
                      e.currentTarget.style.boxShadow = '0 0 0 4px rgba(132, 204, 22, 0.1)'
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = '#e5e7eb'
                      e.currentTarget.style.background = '#f9fafb'
                      e.currentTarget.style.boxShadow = 'none'
                    }}
                    required
                  />
                </div>

                {/* Phone Input */}
                <div style={{ position: 'relative' }}>
                  <FaPhone style={{
                    position: 'absolute',
                    left: '14px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    color: '#9ca3af',
                    fontSize: '14px',
                    zIndex: 1
                  }} />
                  <input 
                    type="tel" 
                    name="phone"
                    placeholder='Phone Number' 
                    value={formData.phone}
                    onChange={handleInputChange}
                    style={{
                      width: '100%',
                      padding: '13px 16px 13px 42px',
                      background: '#f9fafb',
                      border: '2px solid #e5e7eb',
                      borderRadius: '12px',
                      fontSize: '14px',
                      outline: 'none',
                      transition: 'all 0.3s ease',
                      color: '#1f2937',
                      boxSizing: 'border-box'
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = '#84cc16'
                      e.currentTarget.style.background = 'white'
                      e.currentTarget.style.boxShadow = '0 0 0 4px rgba(132, 204, 22, 0.1)'
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = '#e5e7eb'
                      e.currentTarget.style.background = '#f9fafb'
                      e.currentTarget.style.boxShadow = 'none'
                    }}
                    required
                  />
                </div>

                <div style={{
                  display: 'flex',
                  gap: '12px',
                  flexWrap: 'wrap'
                }}>
                  <div style={{ flex: '1', minWidth: '120px' }}>
                    <label style={{
                      fontSize: '12px',
                      fontWeight: '600',
                      color: '#6b7280',
                      display: 'block',
                      marginBottom: '4px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px'
                    }}>
                      <FaCalendarAlt style={{ display: 'inline', marginRight: '4px', color: '#84cc16' }} />
                      Check-In
                    </label>
                    <input 
                      type="date" 
                      name="checkin"
                      value={formData.checkin}
                      onChange={handleInputChange}
                      style={{
                        width: '100%',
                        padding: '11px',
                        background: '#f9fafb',
                        border: '2px solid #e5e7eb',
                        borderRadius: '12px',
                        fontSize: '13px',
                        outline: 'none',
                        transition: 'all 0.3s ease',
                        color: '#1f2937',
                        cursor: 'pointer',
                        boxSizing: 'border-box'
                      }}
                      onFocus={(e) => {
                        e.currentTarget.style.borderColor = '#84cc16'
                        e.currentTarget.style.background = 'white'
                        e.currentTarget.style.boxShadow = '0 0 0 4px rgba(132, 204, 22, 0.1)'
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.borderColor = '#e5e7eb'
                        e.currentTarget.style.background = '#f9fafb'
                        e.currentTarget.style.boxShadow = 'none'
                      }}
                      required
                    />
                  </div>

                  <div style={{ flex: '1', minWidth: '120px' }}>
                    <label style={{
                      fontSize: '12px',
                      fontWeight: '600',
                      color: '#6b7280',
                      display: 'block',
                      marginBottom: '4px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px'
                    }}>
                      <FaCalendarAlt style={{ display: 'inline', marginRight: '4px', color: '#84cc16' }} />
                      Check-Out
                    </label>
                    <input 
                      type="date" 
                      name="checkout"
                      value={formData.checkout}
                      onChange={handleInputChange}
                      style={{
                        width: '100%',
                        padding: '11px',
                        background: '#f9fafb',
                        border: '2px solid #e5e7eb',
                        borderRadius: '12px',
                        fontSize: '13px',
                        outline: 'none',
                        transition: 'all 0.3s ease',
                        color: '#1f2937',
                        cursor: 'pointer',
                        boxSizing: 'border-box'
                      }}
                      onFocus={(e) => {
                        e.currentTarget.style.borderColor = '#84cc16'
                        e.currentTarget.style.background = 'white'
                        e.currentTarget.style.boxShadow = '0 0 0 4px rgba(132, 204, 22, 0.1)'
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.borderColor = '#e5e7eb'
                        e.currentTarget.style.background = '#f9fafb'
                        e.currentTarget.style.boxShadow = 'none'
                      }}
                      required
                    />
                  </div>
                </div>

                <div>
                  <label style={{
                    fontSize: '12px',
                    fontWeight: '600',
                    color: '#6b7280',
                    display: 'block',
                    marginBottom: '4px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px'
                  }}>
                    <FaUsers style={{ display: 'inline', marginRight: '4px', color: '#84cc16' }} />
                    Guests
                  </label>
                  <select 
                    name="guests"
                    value={formData.guests}
                    onChange={handleInputChange}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      background: '#f9fafb',
                      border: '2px solid #e5e7eb',
                      borderRadius: '12px',
                      fontSize: '14px',
                      outline: 'none',
                      transition: 'all 0.3s ease',
                      color: '#1f2937',
                      cursor: 'pointer',
                      boxSizing: 'border-box'
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = '#84cc16'
                      e.currentTarget.style.background = 'white'
                      e.currentTarget.style.boxShadow = '0 0 0 4px rgba(132, 204, 22, 0.1)'
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = '#e5e7eb'
                      e.currentTarget.style.background = '#f9fafb'
                      e.currentTarget.style.boxShadow = 'none'
                    }}
                  >
                    {[...Array(5).keys()].map((i) => (
                      <option key={i + 1} value={i+1}> {i+1} Guest(s)</option>
                    ))}
                  </select>
                </div>

                <button 
                  type='submit'
                  disabled={isSubmitting}
                  style={{
                    width: '100%',
                    background: isSubmitting ? '#9ca3af' : 'linear-gradient(135deg, #84cc16, #65a30d)',
                    color: 'white',
                    border: 'none',
                    padding: '15px',
                    borderRadius: '12px',
                    fontSize: '16px',
                    fontWeight: '700',
                    cursor: isSubmitting ? 'not-allowed' : 'pointer',
                    transition: 'all 0.3s ease',
                    marginTop: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '10px',
                    boxShadow: isSubmitting ? 'none' : '0 8px 30px rgba(132, 204, 22, 0.25)',
                    boxSizing: 'border-box',
                    opacity: isSubmitting ? 0.7 : 1
                  }}
                  onMouseEnter={(e) => {
                    if (!isSubmitting) {
                      e.currentTarget.style.transform = 'scale(1.02)'
                      e.currentTarget.style.boxShadow = '0 12px 40px rgba(132, 204, 22, 0.35)'
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isSubmitting) {
                      e.currentTarget.style.transform = 'scale(1)'
                      e.currentTarget.style.boxShadow = '0 8px 30px rgba(132, 204, 22, 0.25)'
                    }
                  }}
                >
                  {isSubmitting ? (
                    <>
                      <span style={{
                        display: 'inline-block',
                        width: '20px',
                        height: '20px',
                        border: '3px solid rgba(255,255,255,0.3)',
                        borderTop: '3px solid white',
                        borderRadius: '50%',
                        animation: 'spin 1s linear infinite'
                      }}></span>
                      Processing...
                    </>
                  ) : (
                    <>
                      Book Now
                      <FaArrowRight style={{ 
                        fontSize: '16px',
                        transition: 'transform 0.3s'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateX(4px)'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateX(0)'
                      }} />
                    </>
                  )}
                </button>

                <p style={{
                  textAlign: 'center',
                  color: '#9ca3af',
                  fontSize: '12px',
                  margin: '4px 0 0 0'
                }}>
                  ✦ Secure booking. No hidden fees ✦
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HotelDetails