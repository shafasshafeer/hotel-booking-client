import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaBars, FaTimes, FaSearch } from 'react-icons/fa'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav style={{
      background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0f172a 100%)',
      padding: '0 24px',
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      borderBottom: '1px solid rgba(132, 204, 22, 0.1)',
      boxShadow: '0 4px 30px rgba(0,0,0,0.3)'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '80px'
      }}>
        {/* Logo */}
        <Link to='/' style={{ textDecoration: 'none' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{
              width: '40px',
              height: '40px',
              background: 'linear-gradient(135deg, #84cc16, #65a30d)',
              borderRadius: '10px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '20px',
              fontWeight: '700',
              color: 'white'
            }}>
              RT
            </div>
            <div>
              <h2 style={{
                fontSize: '24px',
                fontWeight: '700',
                margin: 0,
                color: 'white',
                letterSpacing: '1px'
              }}>
                Reserve <span style={{
                  background: 'linear-gradient(135deg, #84cc16, #65a30d)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>Travels</span>
              </h2>
              <p style={{
                fontSize: '9px',
                margin: 0,
                color: 'rgba(255,255,255,0.3)',
                letterSpacing: '3px',
                textTransform: 'uppercase'
              }}>
                Luxury Stays
              </p>
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '32px'
        }}>
          <ul style={{
            display: 'flex',
            listStyle: 'none',
            margin: 0,
            padding: 0,
            gap: '32px',
            alignItems: 'center'
          }}>
            <li>
              <NavLink 
                to='/'
                style={({ isActive }) => ({
                  color: isActive ? '#84cc16' : 'rgba(255,255,255,0.7)',
                  textDecoration: 'none',
                  fontSize: '14px',
                  fontWeight: '500',
                  letterSpacing: '0.5px',
                  transition: 'all 0.3s ease',
                  position: 'relative',
                  paddingBottom: '4px'
                })}
              >
                Home
                <span style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  width: '0%',
                  height: '2px',
                  background: 'linear-gradient(90deg, #84cc16, #65a30d)',
                  transition: 'width 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.width = '100%'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.width = '0%'
                }}></span>
              </NavLink>
            </li>
            <li>
              <NavLink 
                to='/rooms'
                style={({ isActive }) => ({
                  color: isActive ? '#84cc16' : 'rgba(255,255,255,0.7)',
                  textDecoration: 'none',
                  fontSize: '14px',
                  fontWeight: '500',
                  letterSpacing: '0.5px',
                  transition: 'all 0.3s ease',
                  position: 'relative',
                  paddingBottom: '4px'
                })}
              >
                Rooms
                <span style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  width: '0%',
                  height: '2px',
                  background: 'linear-gradient(90deg, #84cc16, #65a30d)',
                  transition: 'width 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.width = '100%'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.width = '0%'
                }}></span>
              </NavLink>
            </li>
            <li>
              <NavLink 
                to='/booking'
                style={({ isActive }) => ({
                  color: isActive ? '#84cc16' : 'rgba(255,255,255,0.7)',
                  textDecoration: 'none',
                  fontSize: '14px',
                  fontWeight: '500',
                  letterSpacing: '0.5px',
                  transition: 'all 0.3s ease',
                  position: 'relative',
                  paddingBottom: '4px'
                })}
              >
                Booking
                <span style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  width: '0%',
                  height: '2px',
                  background: 'linear-gradient(90deg, #84cc16, #65a30d)',
                  transition: 'width 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.width = '100%'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.width = '0%'
                }}></span>
              </NavLink>
            </li>
            <li>
              <NavLink 
                to='/contact'
                style={({ isActive }) => ({
                  color: isActive ? '#84cc16' : 'rgba(255,255,255,0.7)',
                  textDecoration: 'none',
                  fontSize: '14px',
                  fontWeight: '500',
                  letterSpacing: '0.5px',
                  transition: 'all 0.3s ease',
                  position: 'relative',
                  paddingBottom: '4px'
                })}
              >
                Contact
                <span style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  width: '0%',
                  height: '2px',
                  background: 'linear-gradient(90deg, #84cc16, #65a30d)',
                  transition: 'width 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.width = '100%'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.width = '0%'
                }}></span>
              </NavLink>
            </li>
          </ul>

          {/* Search Icon */}
          <div style={{
            borderLeft: '1px solid rgba(255,255,255,0.06)',
            paddingLeft: '24px'
          }}>
            <button style={{
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.06)',
              borderRadius: '50%',
              width: '40px',
              height: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: 'rgba(255,255,255,0.5)',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(132, 204, 22, 0.1)'
              e.currentTarget.style.borderColor = 'rgba(132, 204, 22, 0.3)'
              e.currentTarget.style.color = '#84cc16'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.05)'
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'
              e.currentTarget.style.color = 'rgba(255,255,255,0.5)'
            }}>
              <FaSearch style={{ fontSize: '16px' }} />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu}
            style={{
              display: 'none',
              background: 'transparent',
              border: 'none',
              color: 'white',
              fontSize: '28px',
              cursor: 'pointer',
              padding: '4px'
            }}
            className='md:hidden'
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div style={{
        display: isMenuOpen ? 'block' : 'none',
        background: 'rgba(10, 10, 10, 0.98)',
        backdropFilter: 'blur(20px)',
        padding: '20px 24px',
        borderTop: '1px solid rgba(255,255,255,0.05)'
      }}>
        <ul style={{
          listStyle: 'none',
          margin: 0,
          padding: 0,
          display: 'flex',
          flexDirection: 'column',
          gap: '16px'
        }}>
          <li>
            <Link to='/' style={{
              color: 'white',
              textDecoration: 'none',
              fontSize: '16px',
              fontWeight: '500',
              display: 'block',
              padding: '8px 0',
              borderBottom: '1px solid rgba(255,255,255,0.03)'
            }}
            onClick={toggleMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to='/rooms' style={{
              color: 'white',
              textDecoration: 'none',
              fontSize: '16px',
              fontWeight: '500',
              display: 'block',
              padding: '8px 0',
              borderBottom: '1px solid rgba(255,255,255,0.03)'
            }}
            onClick={toggleMenu}>
              Rooms
            </Link>
          </li>
          <li>
            <Link to='/booking' style={{
              color: 'white',
              textDecoration: 'none',
              fontSize: '16px',
              fontWeight: '500',
              display: 'block',
              padding: '8px 0',
              borderBottom: '1px solid rgba(255,255,255,0.03)'
            }}
            onClick={toggleMenu}>
              Booking
            </Link>
          </li>
          <li>
            <Link to='/contact' style={{
              color: 'white',
              textDecoration: 'none',
              fontSize: '16px',
              fontWeight: '500',
              display: 'block',
              padding: '8px 0'
            }}
            onClick={toggleMenu}>
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile Responsive Styles */}
      <style>{`
        @media (max-width: 768px) {
          .md\\:hidden {
            display: block !important;
          }
          nav ul {
            display: none !important;
          }
          nav > div > div:last-child > div:first-child {
            display: none !important;
          }
          nav > div > div:last-child > button {
            display: flex !important;
          }
        }
        @media (min-width: 769px) {
          .md\\:hidden {
            display: none !important;
          }
        }
      `}</style>
    </nav>
  )
}

export default Navbar