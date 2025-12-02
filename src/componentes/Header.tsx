import { motion } from 'motion/react';
import imgImageLibellaLogo from "../imagenes/ff8c620bf8477f6cb34fd583907c36620683b38d.png";

export function Header() {
  const menuItemsLeft = ['INICIO', 'SERVICIOS', 'INVERSIONES'];
  const menuItemsRight = ['PROYECTOS', 'NOSOTROS', 'CONTACTANOS'];

  return (
    <motion.header
      className="absolute w-full top-0 z-50"
      style={{ 
        backgroundColor: '#c62926',
        height: '80px'
      }}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="h-full max-w-[1600px] mx-auto flex items-center justify-center" style={{ paddingLeft: '110px', paddingRight: '110px' }}>
        {/* Left Menu */}
        <div className="flex items-center justify-end flex-1" style={{ gap: '130px' }}>
          {menuItemsLeft.map((item, index) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative text-white text-[15px] tracking-[-0.39px] cursor-pointer overflow-hidden group whitespace-nowrap font-['Arial']"
              whileHover={{ scale: 1.08 }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <span className="relative z-10">{item}</span>
              <motion.div
                className="absolute bottom-[-4px] left-0 h-[2px] bg-white"
                initial={{ width: 0 }}
                whileHover={{ width: '100%' }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          ))}
        </div>

        {/* Centered Logo - Fixed position */}
        <div
          className="flex-shrink-0"
          style={{ margin: '0 120px' }}
        >
          <img
            alt="Libella Logo"
            className="h-[40px] w-[50px] object-cover"
            src={imgImageLibellaLogo}
          />
        </div>

        {/* Right Menu */}
        <div className="flex items-center justify-start flex-1" style={{ gap: '130px' }}>
          {menuItemsRight.map((item, index) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative text-white text-[15px] tracking-[-0.39px] cursor-pointer overflow-hidden group whitespace-nowrap font-['Arial']"
              whileHover={{ scale: 1.08 }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: (menuItemsLeft.length + index) * 0.1 }}
            >
              <span className="relative z-10">{item}</span>
              <motion.div
                className="absolute bottom-[-4px] left-0 h-[2px] bg-white"
                initial={{ width: 0 }}
                whileHover={{ width: '100%' }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          ))}
        </div>
      </div>
    </motion.header>
  );
}
