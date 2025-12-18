import { motion } from 'motion/react';
import { MapPin, Tag, Users } from 'lucide-react';
import { Badge } from '../ui/badge';
import { useNavigate } from 'react-router-dom';

interface ProjectCardProps {
  id?: string;
  projectId?: string;
  image: string;
  title: string;
  location: string;
  status: 'en-proceso' | 'finalizado' | 'en-venta';
  date: string;
  units?: number;
  description: string;
  onClick?: () => void;
}

const statusConfig = {
  'en-proceso': { label: 'En Proceso', color: 'bg-[#af2c28]' },
  'finalizado': { label: 'Finalizado', color: 'bg-[#1e1717]' },
  'en-venta': { label: 'En Venta', color: 'bg-[#6b1616]' }
};

export function ProjectCard({ id, projectId, image, title, location, status, date, units, description, onClick }: ProjectCardProps) {
  const navigate = useNavigate();
  const statusInfo = statusConfig[status];

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else if (projectId || id) {
      navigate(`/proyecto/${projectId || id}`, { state: { from: '/proyectos' } });
      window.scrollTo(0, 0);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -10, scale: 1.02 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      onClick={handleClick}
      className="group relative rounded-xl overflow-hidden h-full cursor-pointer"
      style={{
        background: 'linear-gradient(145deg, #0d0d0d 0%, #000000 50%, #0d0d0d 100%)',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.9), inset 0 1px 0 rgba(255, 255, 255, 0.12), inset 0 -1px 0 rgba(0, 0, 0, 0.8)',
      }}
    >
      {/* Satin Shine Effect Overlay */}
      <div className="absolute inset-0 opacity-40 group-hover:opacity-60 transition-opacity duration-500 pointer-events-none"
        style={{
          background: 'linear-gradient(135deg, transparent 0%, rgba(255, 255, 255, 0.06) 25%, rgba(255, 255, 255, 0.18) 50%, rgba(255, 255, 255, 0.06) 75%, transparent 100%)',
        }}
      />

      {/* Glossy Border */}
      <div className="absolute inset-0 rounded-xl border border-white/10 group-hover:border-white/20 transition-colors duration-300 pointer-events-none" />

      {/* Image Container */}
      <div className="relative h-[220px] sm:h-[250px] md:h-[280px] overflow-hidden">
        <motion.img
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />

        {/* Status Badge */}
        <div className="absolute top-3 right-3 md:top-4 md:right-4 z-10">
          <Badge className={`${statusInfo.color} text-white border-0 px-2 py-0.5 md:px-3 md:py-1 text-xs shadow-lg`}>
            {statusInfo.label}
          </Badge>
        </div>

        {/* Image Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

        {/* Reflection Effect on Image */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Content */}
      <div className="relative p-4 md:p-6 flex flex-col flex-grow">
        {/* Subtle inner glow */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />

        <h3 className="relative mb-3 text-[#f2f2f2] group-hover:text-white transition-colors duration-300 drop-shadow-lg">
          {title}
        </h3>

        <p className="relative text-white/70 group-hover:text-white/85 mb-4 md:mb-5 line-clamp-2 text-sm md:text-base transition-colors duration-300">
          {description}
        </p>

        <div className="relative flex flex-col gap-2 md:gap-2.5 mt-auto">
          <div className="flex items-center gap-2 text-white/60 group-hover:text-[#af2c28] transition-colors duration-300">
            <MapPin className="w-3.5 h-3.5 md:w-4 md:h-4 flex-shrink-0" />
            <span className="text-xs md:text-sm line-clamp-1">{location}</span>
          </div>

          <div className="flex items-center gap-2 text-white/60 group-hover:text-[#af2c28] transition-colors duration-300">
            <Tag className="w-3.5 h-3.5 md:w-4 md:h-4 flex-shrink-0" />
            <span className="text-xs md:text-sm">{date}</span>
          </div>

          {units && (
            <div className="flex items-center gap-2 text-white/60 group-hover:text-[#af2c28] transition-colors duration-300">
              <Users className="w-3.5 h-3.5 md:w-4 md:h-4 flex-shrink-0" />
              <span className="text-xs md:text-sm">{units} unidades</span>
            </div>
          )}
        </div>
      </div>

      {/* Glossy Accent Line */}
      <motion.div
        className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[#af2c28] via-[#d93e3e] to-[#af2c28] shadow-lg shadow-[#af2c28]/50"
        initial={{ width: 0 }}
        whileHover={{ width: '100%' }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      />

      {/* Corner Highlights */}
      <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </motion.div>
  );
}
