import React from 'react'
import { FaBath, FaCar, FaCocktail, FaConciergeBell, FaShuttleVan, FaSwimmingPool, FaSpa, FaDumbbell, FaWifi, FaUtensils, FaParking, FaSnowflake } from 'react-icons/fa'

const services = [
  {
    icon: <FaShuttleVan size={32} />,
    title: 'Pick up & Drop',
    desc: 'We will pick you up from the airport while you relax in comfort during your ride'
  },
  {
    icon: <FaCar size={32} />,
    title: 'Parking Space',
    desc: 'Secure and spacious parking available for all our guests'
  },
  {
    icon: <FaCocktail size={32} />,
    title: 'Welcome Drink',
    desc: 'Start your stay with a refreshing welcome drink on arrival'
  },
  {
    icon: <FaBath size={32} />,
    title: 'Hot & Cold Water',
    desc: '24/7 hot and cold water supply for your comfort'
  },
  {
    icon: <FaConciergeBell size={32} />,
    title: 'Full Board',
    desc: 'Enjoy all-inclusive dining with our full board service'
  },
  {
    icon: <FaSwimmingPool size={32} />,
    title: 'Swimming Pool',
    desc: 'Take a refreshing dip in our luxurious swimming pool'
  }
]

const Facility = () => {
  return (
    <div style={{
      background: 'linear-gradient(180deg, #f7f0eb 0%, #f0e8e0 100%)',
      padding: '80px 20px',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Decorative Elements */}
      <div style={{
        position: 'absolute',
        top: '-150px',
        right: '-100px',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(132, 204, 22, 0.05) 0%, transparent 70%)',
        borderRadius: '50%',
        pointerEvents: 'none'
      }}></div>
      <div style={{
        position: 'absolute',
        bottom: '-100px',
        left: '-150px',
        width: '500px',
        height: '500px',
        background: 'radial-gradient(circle, rgba(132, 204, 22, 0.03) 0%, transparent 70%)',
        borderRadius: '50%',
        pointerEvents: 'none'
      }}></div>

      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 1
      }}>
        {/* Header */}
        <div style={{
          marginBottom: '48px',
          textAlign: 'center'
        }}>
          <div style={{
            display: 'inline-block',
            background: 'rgba(132, 204, 22, 0.1)',
            padding: '6px 24px',
            borderRadius: '50px',
            marginBottom: '16px',
            border: '1px solid rgba(132, 204, 22, 0.15)'
          }}>
            <p style={{
              fontSize: '13px',
              fontWeight: '600',
              letterSpacing: '3px',
              textTransform: 'uppercase',
              color: '#84cc16',
              margin: 0
            }}>
              ✦ Premium Services
            </p>
          </div>
          <h2 style={{
            fontSize: 'clamp(32px, 4vw, 48px)',
            fontFamily: 'serif',
            fontWeight: '700',
            color: '#1f2937',
            margin: '0 0 8px 0',
            letterSpacing: '-0.5px'
          }}>
            Facilities & <span style={{
              background: 'linear-gradient(135deg, #84cc16, #65a30d)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>Services</span>
          </h2>
          <p style={{
            color: '#6b7280',
            fontSize: '16px',
            maxWidth: '500px',
            margin: '0 auto'
          }}>
            Experience world-class amenities designed for your ultimate comfort
          </p>
        </div>

        {/* Services Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '32px'
        }}>
          {services.map((service, index) => (
            <div 
              key={index} 
              style={{
                background: 'white',
                borderRadius: '20px',
                padding: '32px 28px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.04)',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                border: '1px solid rgba(255,255,255,0.5)',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)'
                e.currentTarget.style.boxShadow = '0 20px 60px rgba(0,0,0,0.08)'
                e.currentTarget.style.borderColor = 'rgba(132, 204, 22, 0.2)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.04)'
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.5)'
              }}
            >
              {/* Hover Glow Effect */}
              <div style={{
                position: 'absolute',
                top: '-50%',
                right: '-50%',
                width: '100%',
                height: '100%',
                background: 'radial-gradient(circle, rgba(132, 204, 22, 0.03) 0%, transparent 70%)',
                borderRadius: '50%',
                pointerEvents: 'none',
                transition: 'all 0.6s ease',
                opacity: 0
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = 1
                e.currentTarget.style.transform = 'scale(1.5)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = 0
                e.currentTarget.style.transform = 'scale(1)'
              }}></div>

              {/* Icon */}
              <div style={{
                background: 'linear-gradient(135deg, #84cc16, #65a30d)',
                borderRadius: '16px',
                padding: '16px',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                marginBottom: '16px',
                boxShadow: '0 8px 30px rgba(132, 204, 22, 0.25)',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05) rotate(-5deg)'
                e.currentTarget.style.boxShadow = '0 12px 40px rgba(132, 204, 22, 0.35)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1) rotate(0deg)'
                e.currentTarget.style.boxShadow = '0 8px 30px rgba(132, 204, 22, 0.25)'
              }}>
                {service.icon}
              </div>

              {/* Content */}
              <h3 style={{
                fontSize: '20px',
                fontWeight: '700',
                color: '#1f2937',
                margin: '0 0 8px 0',
                letterSpacing: '-0.3px'
              }}>
                {service.title}
              </h3>
              <p style={{
                color: '#6b7280',
                fontSize: '14px',
                lineHeight: '1.7',
                margin: 0,
                maxWidth: '100%'
              }}>
                {service.desc}
              </p>

              {/* Decorative Number */}
              <span style={{
                position: 'absolute',
                bottom: '12px',
                right: '16px',
                fontSize: '48px',
                fontWeight: '800',
                color: 'rgba(0,0,0,0.02)',
                fontFamily: 'serif',
                pointerEvents: 'none',
                lineHeight: 1
              }}>
                {String(index + 1).padStart(2, '0')}
              </span>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div style={{
          textAlign: 'center',
          marginTop: '48px',
          padding: '32px',
          background: 'rgba(132, 204, 22, 0.04)',
          borderRadius: '16px',
          border: '1px solid rgba(132, 204, 22, 0.06)'
        }}>
          <p style={{
            color: '#6b7280',
            fontSize: '14px',
            margin: 0,
            letterSpacing: '1px'
          }}>
            ✦ All services are included in your stay ✦
          </p>
        </div>
      </div>
    </div>
  )
}

export default Facility