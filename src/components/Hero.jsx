// import React from 'react'
// import bgimage from '../assets/hero.avif'

// const Hero = () => {
//   return (
//     <div className='relative h-[100vh] w-full bg-cover bg-center bg-no-repeat' style={{backgroundImage:`url(${bgimage})`}}> 
    
//     <div className='absolute inset-0 bg-gray-900 opacity-30 z-10'></div>
    
//     <div className='relative z-20 flex flex-col items-center justify-center h-full text-center text-white px-4'>
//       <h2 className='text-lg mb-4 tracking-widest uppercase'>Where Luxury Meets Diner</h2>
//       <h1 className='text-4xl font-bold mb-6'>RESERVE <span>TRAVELS</span></h1>
//       <button className='bg-lime-500 text-black font-bold py-3 px-6 rounded-lg hover:bg-lime-600 transition'>BOOK YOUR STAY</button>
//     </div>
    
//     </div>
//   )
// }

// export default Hero













import React from 'react'
import bgimage from '../assets/hero.avif'

const Hero = () => {
  return (
    <div style={{
      position: 'relative',
      height: '100vh',
      width: '100%',
      backgroundImage: `url(${bgimage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed',
      overflow: 'hidden'
    }}>
      {/* Gradient Overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(135deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.7) 100%)',
        zIndex: 10
      }}></div>
      
      {/* Animated Background Glow */}
      <div style={{
        position: 'absolute',
        top: '-50%',
        left: '-50%',
        width: '200%',
        height: '200%',
        background: 'radial-gradient(circle at 30% 50%, rgba(132, 204, 22, 0.1) 0%, transparent 70%)',
        animation: 'pulseGlow 8s ease-in-out infinite',
        zIndex: 1
      }}></div>
      
      {/* Content */}
      <div style={{
        position: 'relative',
        zIndex: 20,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        textAlign: 'center',
        padding: '0 20px',
        maxWidth: '900px',
        margin: '0 auto'
      }}>
        {/* Decorative Line Above */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '20px',
          marginBottom: '20px'
        }}>
          <div style={{
            width: '60px',
            height: '2px',
            background: 'linear-gradient(90deg, transparent, #84cc16)'
          }}></div>
          <span style={{
            color: '#84cc16',
            fontSize: '14px',
            letterSpacing: '6px',
            textTransform: 'uppercase',
            fontWeight: '300',
            fontFamily: 'serif'
          }}>
            Where Luxury Meets Dinner
          </span>
          <div style={{
            width: '60px',
            height: '2px',
            background: 'linear-gradient(90deg, #84cc16, transparent)'
          }}></div>
        </div>
        
        {/* Main Title */}
        <h1 style={{
          fontSize: 'clamp(48px, 10vw, 96px)',
          fontWeight: '800',
          color: 'white',
          marginBottom: '10px',
          textShadow: '0 4px 30px rgba(0,0,0,0.5)',
          letterSpacing: '4px',
          fontFamily: 'serif',
          lineHeight: '1.1'
        }}>
          RESERVE
          <span style={{
            background: 'linear-gradient(135deg, #84cc16, #65a30d)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            display: 'inline-block',
            marginLeft: '12px'
          }}>
            TRAVELS
          </span>
        </h1>
        
        {/* Subtitle */}
        <p style={{
          color: 'rgba(255,255,255,0.8)',
          fontSize: 'clamp(16px, 2vw, 22px)',
          marginBottom: '40px',
          fontWeight: '300',
          letterSpacing: '2px',
          fontFamily: 'serif',
          maxWidth: '600px',
          textShadow: '0 2px 20px rgba(0,0,0,0.3)'
        }}>
          Experience unparalleled luxury and create memories that last a lifetime
        </p>
        
        {/* Button */}
        <button
          style={{
            background: 'linear-gradient(135deg, #84cc16, #65a30d)',
            color: 'white',
            border: 'none',
            padding: '18px 50px',
            borderRadius: '50px',
            fontSize: '16px',
            fontWeight: '600',
            letterSpacing: '2px',
            textTransform: 'uppercase',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            boxShadow: '0 8px 32px rgba(132, 204, 22, 0.4)',
            position: 'relative',
            overflow: 'hidden'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-3px) scale(1.02)'
            e.currentTarget.style.boxShadow = '0 12px 48px rgba(132, 204, 22, 0.6)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0) scale(1)'
            e.currentTarget.style.boxShadow = '0 8px 32px rgba(132, 204, 22, 0.4)'
          }}
        >
          <span style={{ position: 'relative', zIndex: 2 }}>
            Book Your Stay
          </span>
          <span style={{
            position: 'absolute',
            top: 0,
            left: '-100%',
            width: '100%',
            height: '100%',
            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
            transition: 'all 0.6s ease',
            transform: 'skewX(-20deg)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.left = '100%'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.left = '-100%'
          }}></span>
        </button>
        
        {/* Scroll Indicator */}
        <div style={{
          position: 'absolute',
          bottom: '40px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px',
          animation: 'bounceDown 2s infinite'
        }}>
          <span style={{
            color: 'rgba(255,255,255,0.6)',
            fontSize: '12px',
            letterSpacing: '2px',
            textTransform: 'uppercase'
          }}>
            Scroll
          </span>
          <div style={{
            width: '20px',
            height: '20px',
            borderRight: '2px solid rgba(255,255,255,0.4)',
            borderBottom: '2px solid rgba(255,255,255,0.4)',
            transform: 'rotate(45deg)'
          }}></div>
        </div>
      </div>

      {/* Animation Keyframes */}
      <style>{`
        @keyframes pulseGlow {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.5; }
          50% { transform: translate(10%, 5%) scale(1.2); opacity: 1; }
        }
        
        @keyframes bounceDown {
          0%, 100% { transform: translateY(0); opacity: 0.6; }
          50% { transform: translateY(10px); opacity: 1; }
        }
        
        @keyframes shimmer {
          0% { transform: translateX(-100%) skewX(-20deg); }
          100% { transform: translateX(200%) skewX(-20deg); }
        }
      `}</style>
    </div>
  )
}

export default Hero