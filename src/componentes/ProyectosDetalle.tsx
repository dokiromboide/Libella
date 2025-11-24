import { useState, useEffect, useMemo } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";
import { Calendar as CalendarComponent } from "./ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "./ui/carousel";
import { MapPin, Home, Calendar, DollarSign, CalendarIcon, CheckCircle2, ArrowLeft } from "lucide-react";

interface ProyectoDetalleProps {
  nombreProyecto: string;
  descripcion: string;
  ubicacion: string;
  fechaEntrega: string;
  lotes: string;
  amenidades: string[];
  porcentajeAvance: number;
  detallesAvance: { nombre: string; porcentaje: number }[];
  imagenBanner: string;
  onVolver?: () => void;
}

export function ProyectoDetalle({
  nombreProyecto,
  descripcion,
  ubicacion,
  fechaEntrega,
  lotes,
  amenidades,
  porcentajeAvance,
  detallesAvance,
  imagenBanner,
  onVolver,
}: ProyectoDetalleProps) {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
  });
  const [date, setDate] = useState<Date>();
  const [time, setTime] = useState("");
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [showProgress, setShowProgress] = useState(false);

  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  // Generar intervalos de tiempo de 30 minutos (optimizado con useMemo)
  const timeSlots = useMemo(() => {
    const slots = [];
    for (let hour = 8; hour < 18; hour++) {
      for (let minute = 0; minute < 60; minute += 30) {
        const period = hour >= 12 ? "PM" : "AM";
        const displayHour = hour > 12 ? hour - 12 : hour === 0 ? 12 : hour;
        const displayMinute = minute.toString().padStart(2, "0");
        slots.push(`${displayHour}:${displayMinute} ${period}`);
      }
    }
    return slots;
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Formulario enviado:", { ...formData, date, time });
    setShowSuccessAlert(true);
    setFormData({ nombre: "", email: "", telefono: "" });
    setDate(undefined);
    setTime("");

    setTimeout(() => {
      setShowSuccessAlert(false);
    }, 5000);
  };

  // Portfolio images - se pasarán como prop o serán las imágenes del banner
  const portfolioImages = useMemo(() => 
    imagenBanner ? [imagenBanner, imagenBanner, imagenBanner, imagenBanner, imagenBanner] : [],
    [imagenBanner]
  );

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-[rgba(198,41,38,0.97)] to-[#403838]">
      {/* Banner Superior */}
      <div className="w-full h-[200px] sm:h-[250px] lg:h-[300px] relative overflow-hidden">
        <img
          src={imagenBanner}
          alt={`Banner ${nombreProyecto}`}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[rgba(0,0,0,0.4)]" />
        
        {/* Botón Volver al Inicio */}
        <div className="absolute top-4 left-4 z-50">
          <Button
            onClick={onVolver}
            className="bg-white hover:bg-gray-100 text-[#c62926] font-semibold flex items-center gap-2 px-4 py-2 rounded-lg shadow-lg transition-all duration-200 hover:shadow-xl"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver
          </Button>
        </div>
        
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-wide text-center font-bold">
            {nombreProyecto}
          </h1>
        </div>
      </div>

      {/* Contenedor Principal */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Sección de Información y Formulario */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {/* Información del Proyecto - Izquierda */}
          <div>
            <Card className="bg-gradient-to-b from-[rgba(227,66,52,0.91)] to-[#403838] border-[rgba(255,255,255,0.1)] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]">
              <CardHeader>
                <CardTitle className="text-white">Descripción del Proyecto</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <p className="text-[rgba(255,255,255,0.8)] mb-4">
                    {descripcion}
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-white mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-[rgba(255,255,255,0.8)]">
                        {ubicacion}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Home className="w-5 h-5 text-white mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-[rgba(255,255,255,0.8)]">
                        {lotes}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-white mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-[rgba(255,255,255,0.8)]">
                        Entrega estimada: {fechaEntrega}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <DollarSign className="w-5 h-5 text-white mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-[rgba(255,255,255,0.8)]">
                        Planes de financiamiento disponibles con las mejores
                        tasas del mercado
                      </p>
                    </div>
                  </div>
                </div>

                <div className="border-t border-[rgba(255,255,255,0.1)] pt-4">
                  <h4 className="mb-3 text-white">Amenidades:</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[rgba(255,255,255,0.8)]">
                    {amenidades.map((amenidad, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-white rounded-full"></span>
                        {amenidad}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Formulario de Visita - Derecha */}
          <div>
            <Card className="bg-gradient-to-b from-[rgba(227,66,52,0.91)] to-[#403838] border-[rgba(255,255,255,0.1)] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]">
              <CardHeader>
                <CardTitle className="text-white">Agendar Visita</CardTitle>
              </CardHeader>
              <CardContent>
                {showSuccessAlert && (
                  <Alert className="mb-4 bg-gradient-to-r from-[rgba(227,66,52,0.91)] to-[rgba(198,41,38,0.97)] border-[rgba(255,255,255,0.3)] animate-in fade-in slide-in-from-top-2 duration-300">
                    <CheckCircle2 className="h-4 w-4 text-white" />
                    <AlertTitle className="text-white">¡Solicitud enviada con éxito!</AlertTitle>
                    <AlertDescription className="text-[rgba(255,255,255,0.9)]">
                      Tu solicitud de visita ha sido enviada. Nos pondremos en contacto contigo pronto para confirmar.
                    </AlertDescription>
                  </Alert>
                )}
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="nombre" className="text-white">Nombre completo</Label>
                    <Input
                      id="nombre"
                      placeholder="Tu nombre"
                      value={formData.nombre}
                      onChange={(e) =>
                        setFormData({ ...formData, nombre: e.target.value })
                      }
                      required
                      className="bg-[rgba(255,255,255,0.1)] border-[rgba(255,255,255,0.2)] text-white placeholder:text-[rgba(255,255,255,0.5)]"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-white">Correo electrónico</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="tu@email.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      required
                      className="bg-[rgba(255,255,255,0.1)] border-[rgba(255,255,255,0.2)] text-white placeholder:text-[rgba(255,255,255,0.5)]"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="telefono" className="text-white">Teléfono</Label>
                    <Input
                      id="telefono"
                      type="tel"
                      placeholder="(123) 456-7890"
                      value={formData.telefono}
                      onChange={(e) =>
                        setFormData({ ...formData, telefono: e.target.value })
                      }
                      required
                      className="bg-[rgba(255,255,255,0.1)] border-[rgba(255,255,255,0.2)] text-white placeholder:text-[rgba(255,255,255,0.5)]"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label className="text-white">Fecha de visita</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={`w-full justify-start text-left bg-[rgba(255,255,255,0.1)] border-[rgba(255,255,255,0.2)] hover:bg-[rgba(255,255,255,0.15)] ${
                            !date ? "text-[rgba(255,255,255,0.5)]" : "text-white"
                          }`}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {date ? (
                            date.toLocaleDateString("es-ES", {
                              weekday: "long",
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            })
                          ) : (
                            <span>Selecciona una fecha</span>
                          )}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <CalendarComponent
                          mode="single"
                          selected={date}
                          onSelect={setDate}
                          disabled={(date) =>
                            date < new Date() || date < new Date("1900-01-01")
                          }
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="time" className="text-white">Hora de visita</Label>
                    <Select value={time} onValueChange={setTime} required>
                      <SelectTrigger className="bg-[rgba(255,255,255,0.1)] border-[rgba(255,255,255,0.2)] text-white">
                        <SelectValue placeholder="Selecciona una hora" />
                      </SelectTrigger>
                      <SelectContent>
                        {timeSlots.map((slot) => (
                          <SelectItem key={slot} value={slot}>
                            {slot}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <Button type="submit" className="w-full bg-[#c62926] hover:bg-[#a82321] text-white">
                    Enviar solicitud
                  </Button>

                  <p className="text-sm text-[rgba(255,255,255,0.7)] text-center">
                    Recibirás una confirmación por correo electrónico
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Botón Ver Avances */}
        <div className="flex justify-center mb-8 sm:mb-12">
          <Button
            onClick={() => setShowProgress(!showProgress)}
            size="lg"
            className="bg-[#c62926] hover:bg-[#a82321] text-white px-6 py-5 sm:px-8 sm:py-6 shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]"
          >
            {showProgress ? "Ocultar avances" : "Ver avances"}
          </Button>
        </div>

        {/* Sección de Progreso */}
        {showProgress && (
          <div className="mb-8 sm:mb-12 animate-in fade-in slide-in-from-top-4 duration-500">
            <Card className="bg-gradient-to-b from-[rgba(227,66,52,0.91)] to-[#403838] border-[rgba(255,255,255,0.1)] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]">
              <CardHeader>
                <CardTitle className="text-white">Avances de Obra - {new Date().toLocaleDateString('es-ES', { year: 'numeric', month: 'long' })}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-white">Progreso general del proyecto</span>
                    <span className="text-white">{porcentajeAvance}%</span>
                  </div>
                  <div className="w-full bg-[rgba(255,255,255,0.2)] rounded-full h-4">
                    <div className="bg-white h-4 rounded-full" style={{ width: `${porcentajeAvance}%` }}></div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                  {detallesAvance.map((detalle, index) => (
                    <div key={index} className="border border-[rgba(255,255,255,0.1)] rounded-lg p-4 bg-[rgba(0,0,0,0.2)]">
                      <p className="text-sm text-[rgba(255,255,255,0.7)] mb-1">{detalle.nombre}</p>
                      <p className="text-white">{detalle.porcentaje}% Completado</p>
                    </div>
                  ))}
                </div>


              </CardContent>
            </Card>
          </div>
        )}

        {/* Carrusel de Portafolio */}
        <div className="mb-8 sm:mb-12 -mx-4 sm:-mx-6 lg:-mx-8">
          <div className="relative mb-6 sm:mb-8 px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-[rgba(255,255,255,0.5)] h-[4px] w-[150px] sm:w-[200px] mx-auto"></div>
            <h2 className="text-center text-white uppercase tracking-wider mt-8 sm:mt-12 mb-6 sm:mb-8">Portafolio</h2>
          </div>
          <div className="relative px-4 sm:px-6 lg:px-8">
            <Carousel
              setApi={setApi}
              className="w-full"
              opts={{
                align: "start",
                loop: true,
                slidesToScroll: 1,
              }}
            >
              <CarouselContent className="-ml-0">
                {portfolioImages.map((imageUrl, index) => (
                  <CarouselItem key={index} className="pl-0 basis-full">
                    <div className="aspect-[16/9] overflow-hidden">
                      <img
                        src={imageUrl}
                        alt={`Imagen del proyecto ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-1 sm:left-4 h-8 w-8 sm:h-10 sm:w-10 bg-[rgba(255,255,255,0.1)] border-[rgba(255,255,255,0.2)] hover:bg-[rgba(255,255,255,0.2)] text-white" />
              <CarouselNext className="right-1 sm:right-4 h-8 w-8 sm:h-10 sm:w-10 bg-[rgba(255,255,255,0.1)] border-[rgba(255,255,255,0.2)] hover:bg-[rgba(255,255,255,0.2)] text-white" />
            </Carousel>

            {/* Indicadores de puntos */}
            <div className="flex justify-center gap-2 mt-4">
              {Array.from({ length: portfolioImages.length }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => api?.scrollTo(index)}
                  className={`h-2 sm:h-3 rounded-full transition-all ${
                    current - 1 === index
                      ? "bg-white w-6 sm:w-8"
                      : "bg-[rgba(255,255,255,0.3)] hover:bg-[rgba(255,255,255,0.5)] w-2 sm:w-3"
                  }`}
                  aria-label={`Ir a imagen ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
