import { motion } from 'motion/react';
import { Search, SlidersHorizontal } from 'lucide-react';
import { Input } from '../ui/input';
import { Button } from '../ui/button';

interface ProjectFiltersProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  selectedStatus: string;
  onStatusChange: (status: string) => void;
}

const statusOptions = [
  { value: 'todos', label: 'Todos los Proyectos' },
  { value: 'en-proceso', label: 'En Proceso' },
  { value: 'finalizado', label: 'Finalizados' },
  { value: 'en-venta', label: 'En Venta' }
];

export function ProjectFilters({ searchTerm, onSearchChange, selectedStatus, onStatusChange }: ProjectFiltersProps) {
  return (
    <div className="w-full max-w-6xl mx-auto">
      {/* Search Bar */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-6 md:mb-8"
      >
        <div className="relative">
          <Search className="absolute left-3 md:left-4 top-1/2 -translate-y-1/2 w-4 h-4 md:w-5 md:h-5 text-white/40" />
          <Input
            type="text"
            placeholder="Buscar proyectos..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="pl-10 md:pl-12 pr-4 py-5 md:py-6 text-sm md:text-base bg-white/10 backdrop-blur-md border-2 border-white/20 text-white placeholder:text-white/50 focus:border-white/40 focus:bg-white/15 transition-all duration-300 rounded-full"
          />
        </div>
      </motion.div>

      {/* Filter Buttons */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="flex items-start md:items-center gap-3 md:gap-4 flex-wrap"
      >
        <div className="flex items-center gap-2 text-white/70 w-full sm:w-auto mb-1 sm:mb-0">
          <SlidersHorizontal className="w-4 h-4 md:w-5 md:h-5" />
          <span className="text-sm md:text-base">Filtrar:</span>
        </div>
        
        <div className="flex flex-wrap gap-2 md:gap-3">
          {statusOptions.map((option, index) => (
            <motion.div
              key={option.value}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 + index * 0.1 }}
            >
              <Button
                onClick={() => onStatusChange(option.value)}
                variant={selectedStatus === option.value ? 'default' : 'outline'}
                className={`
                  rounded-full px-4 md:px-6 py-2 md:py-2.5 text-xs md:text-sm transition-all duration-300
                  ${selectedStatus === option.value 
                    ? 'bg-white text-[#af2c28] hover:bg-white/90 shadow-lg scale-105 border-2 border-white' 
                    : 'bg-transparent text-white/80 hover:bg-white/10 border-2 border-white/30 hover:border-white/50 hover:text-white'
                  }
                `}
              >
                {option.label}
              </Button>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
