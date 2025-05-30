import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import Logo from '/assets/LOGO/Logo2.png';
import {
  Avatar,
  IconButton,
  Menu,
  MenuItem,
  ListItemIcon,
  Divider,
} from '@mui/material';
import {
  Logout as LogoutIcon,
  Login as LoginIcon,
  PersonAdd as RegisterIcon,
  Dashboard as DashboardIcon,
  Visibility as TilesIcon,
  AdminPanelSettings as AdminIcon,
} from '@mui/icons-material';
const Navbar = ({ user, isLoggedIn }) => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('home');
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleOpen = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const go = (path) => {
    handleClose();
    navigate(path);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsOpen(false);
    }
  };

  useEffect(() => {
    const handleScrollChange = () => {
      const sections = ['home', 'product', 'features', 'blog', 'contact'];
      let currentSection = 'home';

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (
            rect.top <= window.innerHeight / 2 &&
            rect.bottom >= window.innerHeight / 2
          ) {
            currentSection = section;
          }
        }
      });

      setActiveTab(currentSection);
    };

    window.addEventListener('scroll', handleScrollChange);
    return () => {
      window.removeEventListener('scroll', handleScrollChange);
    };
  }, []);

  return (
    <nav className='fixed w-full top-0 z-50 bg-gray-800 shadow-md p-4'>
      <div className='flex justify-between items-center max-w-7xl mx-auto px-4'>
        <img
          src={Logo}
          alt='Logo'
          className='h-8 cursor-pointer z-50'
          onClick={() => handleScroll('home')}
        />

        <button
          onClick={toggleMenu}
          className={`md:hidden text-white text-2xl z-50`}
        >
          <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
        </button>

        {/* Sidebar Menu */}
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: isOpen ? '0%' : '100%' }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className='fixed top-0 right-0 h-full w-3/4 max-w-xs bg-gray-900 text-white p-6 shadow-lg'
        >
          <button
            onClick={toggleMenu}
            className='absolute top-4 left-4 text-white text-2xl'
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
          <ul className='mt-12 space-y-6 text-lg font-medium'>
            {['home', 'product', 'features', 'blog', 'contact'].map((item) => (
              <li key={item}>
                <button
                  className='block w-full text-left cursor-pointer hover:text-gray-400'
                  onClick={() => handleScroll(item)}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Desktop Menu */}
        <ul className='hidden md:flex space-x-6 text-white text-lg font-medium relative'>
          {['home', 'product', 'features', 'blog', 'contact'].map((item) => (
            <li key={item} className='relative'>
              <button
                className='hover:text-gray-300 p-2 relative cursor-pointer'
                onClick={() => handleScroll(item)}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
              {activeTab === item && (
                <motion.div
                  layoutId='underline'
                  className='absolute left-0 bottom-0 h-1 w-full bg-primary rounded'
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                />
              )}
            </li>
          ))}
        </ul>

        <div className='hidden md:flex items-center'>
          {/* Toggle button (avatar if logged-in, generic icon otherwise) */}
          <IconButton
            onClick={handleOpen}
            size='small'
            sx={{ ml: 1 }}
            aria-controls={open ? 'nav-menu' : undefined}
            aria-haspopup='true'
            aria-expanded={open ? 'true' : undefined}
          >
            {isLoggedIn ? (
              <Avatar
                sx={{ width: 32, height: 32, color: 'black' }}
                alt={user?.userData?.username || 'user'}
                src={user?.userData?.avatarUrl || undefined}
              />
            ) : (
              /* fallback icon */
              <Avatar sx={{ width: 32, height: 32, bgcolor: 'primary.main' }}>
                {user?.userData?.username?.[0]?.toUpperCase() || 'M'}
              </Avatar>
            )}
          </IconButton>

          <Menu
            anchorEl={anchorEl}
            id='nav-menu'
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            PaperProps={{
              elevation: 4,
              sx: {
                mt: 1.5,
                minWidth: 200,
                bgcolor: '#eef2ff',
                color: 'black',
                '& .MuiMenuItem-root:hover': {
                  bgcolor: 'rgba(255,255,255,0.08)',
                },
              },
            }}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
          >
            {/* === Username always shown at top === */}
            <MenuItem
              sx={{
                fontWeight: 'bold',
                opacity: 1,
                cursor: 'default',
                fontSize: '0.95rem',
                '&:hover': {
                  bgcolor: 'transparent',
                },
              }}
            >
              {user?.userData?.username ?? 'User'}
            </MenuItem>
            <Divider sx={{ bgcolor: 'rgba(255,255,255,0.15)' }} />

            {/* Always visible */}
            <MenuItem onClick={() => go('/tiles-view')}>
              <ListItemIcon>
                <TilesIcon fontSize='small' sx={{ color: 'black' }} />
              </ListItemIcon>
              Visualize your Tiles
            </MenuItem>

            {!isLoggedIn && (
              <>
                <MenuItem onClick={() => go('/login')}>
                  <ListItemIcon>
                    <LoginIcon fontSize='small' sx={{ color: 'black' }} />
                  </ListItemIcon>
                  Login
                </MenuItem>
                <MenuItem onClick={() => go('/register')}>
                  <ListItemIcon>
                    <RegisterIcon fontSize='small' sx={{ color: 'black' }} />
                  </ListItemIcon>
                  Register
                </MenuItem>
              </>
            )}

            {isLoggedIn && (
              <>
                <MenuItem onClick={() => go('/logout')}>
                  <ListItemIcon>
                    <LogoutIcon fontSize='small' sx={{ color: 'black' }} />
                  </ListItemIcon>
                  Logout
                </MenuItem>

                {user?.userData?.isAdmin && (
                  <MenuItem onClick={() => go('/admin')}>
                    <ListItemIcon>
                      <AdminIcon fontSize='small' sx={{ color: 'black' }} />
                    </ListItemIcon>
                    Admin
                  </MenuItem>
                )}
              </>
            )}
          </Menu>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
