import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';

interface HeaderProyectosProps {
  logoUrl?: string;
}

export function HeaderProyectos({ logoUrl }: HeaderProyectosProps) {
  const navigate = useNavigate();
  
  const menuItemsLeft = [
    { label: 'INICIO', path: '/' },
    { label: 'SERVICIOS', path: '/#servicios' },
    { label: 'INVERSIONES', path: '/#inversiones' }
  ];
  
  const menuItemsRight = [
    { label: 'PROYECTOS', path: '/proyectos' },
    { label: 'NOSOTROS', path: '/#nosotros' },
    { label: 'CONTACTANOS', path: '/#contactanos' }
  ];

  const handleNavigation = (path: string) => {
    if (path.startsWith('/#')) {
      // Navigate to home with hash
      navigate('/');
      setTimeout(() => {
        const element = document.querySelector(path.substring(1));
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      navigate(path);
    }
  };

  return (
    <motion.header
      className="fixed w-full top-0 z-50"
      style={{ 
        backgroundColor: '#c73028',
        height: '80px'
      }}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="h-full max-w-[1600px] mx-auto flex items-center justify-center px-4 lg:px-[110px]">
        {/* Left Menu */}
        <div className="hidden lg:flex items-center justify-end flex-1 gap-8 xl:gap-[130px]">
          {menuItemsLeft.map((item, index) => (
            <motion.button
              key={item.label}
              onClick={() => handleNavigation(item.path)}
              className="relative text-[#f2f2f2] text-[15px] tracking-[-0.39px] cursor-pointer overflow-hidden group whitespace-nowrap font-['Arial']"
              whileHover={{ scale: 1.08 }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <span className="relative z-10">{item.label}</span>
              <motion.div
                className="absolute bottom-[-4px] left-0 h-[2px] bg-white"
                initial={{ width: 0 }}
                whileHover={{ width: '100%' }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          ))}
        </div>

        {/* Centered Logo */}
        <button
          onClick={() => navigate('/')}
          className="flex-shrink-0 mx-4 lg:mx-[120px] cursor-pointer"
        >
          {logoUrl ? (
            <img
              alt="Libella Logo"
              className="h-[40px] w-[50px] object-cover"
              src={logoUrl}
            />
          ) : (
            <div className="h-[40px] w-[50px] bg-white/20 rounded-md flex items-center justify-center">
              <span className="text-white text-xs">LOGO</span>
            </div>
          )}
        </button>

        {/* Right Menu */}
        <div className="hidden lg:flex items-center justify-start flex-1 gap-8 xl:gap-[130px]">
          {menuItemsRight.map((item, index) => (
            <motion.button
              key={item.label}
              onClick={() => handleNavigation(item.path)}
              className="relative text-[#f2f2f2] text-[15px] tracking-[-0.39px] cursor-pointer overflow-hidden group whitespace-nowrap font-['Arial']"
              whileHover={{ scale: 1.08 }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: (menuItemsLeft.length + index) * 0.1 }}
            >
              <span className="relative z-10">{item.label}</span>
              <motion.div
                className="absolute bottom-[-4px] left-0 h-[2px] bg-white"
                initial={{ width: 0 }}
                whileHover={{ width: '100%' }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center">
          <button className="text-white p-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </motion.header>
  );
}
