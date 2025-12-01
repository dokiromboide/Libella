import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { noticiasData } from '../../datos/noticias';
import NoticiaDetalle from './NoticiaDetalle';
import { ArrowLeft, Calendar, Clock, ArrowRight, Search, TrendingUp, Sparkles, Newspaper } from 'lucide-react';

export default function TodasNoticias() {
  const navigate = useNavigate();
  const [isLoaded, setIsLoaded] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('todas');
  
  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => setIsLoaded(true), 100);
  }, []);

  // Primera noticia como destacada
  const featuredNews = noticiasData[0];
  // Resto de noticias
  const otherNews = noticiasData.slice(0);

  // Filtrar noticias según búsqueda
  const filteredNews = otherNews.filter(noticia => 
    noticia.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    noticia.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const categories = [
    { id: 'todas', label: 'Todas', icon: Newspaper },
    { id: 'proyectos', label: 'Proyectos', icon: TrendingUp },
    { id: 'novedades', label: 'Novedades', icon: Sparkles },
  ];

  return (
    <div style={{ 
      minHeight: '100vh',
      background: 'linear-gradient(180deg, rgba(198,41,38,0.97) 0%, #403838 50%, #2d2424 100%)',
      fontFamily: 'Arial, sans-serif'
    }}>
      {/* Header */}
      <header style={{
        background: 'linear-gradient(90deg, #c62926 0%, #a82220 100%)',
        height: '70px',
        padding: '0 32px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'sticky',
        top: 0,
        zIndex: 50,
        boxShadow: '0 4px 20px rgba(0,0,0,0.3)'
      }}>
        <button
          onClick={() => { navigate('/'); window.scrollTo(0, 0); }}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            color: 'white',
            background: 'rgba(255,255,255,0.1)',
            border: '1px solid rgba(255,255,255,0.2)',
            borderRadius: '9999px',
            padding: '8px 20px',
            cursor: 'pointer',
            transition: 'all 0.3s ease'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.background = 'rgba(255,255,255,0.2)';
            e.currentTarget.style.transform = 'translateX(-4px)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
            e.currentTarget.style.transform = 'translateX(0)';
          }}
        >
          <ArrowLeft style={{ width: '18px', height: '18px' }} />
          <span style={{ fontSize: '14px', fontWeight: '500' }}>Volver al inicio</span>
        </button>

        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          color: 'white'
        }}>
          <Newspaper style={{ width: '24px', height: '24px' }} />
          <span style={{ fontSize: '18px', fontWeight: '600', letterSpacing: '-0.5px' }}>Noticias Libella</span>
        </div>

        <div style={{ width: '150px' }} /> {/* Spacer para centrar */}
      </header>

      {/* Hero Section - Featured Article */}
      <section style={{
        padding: '48px 32px 64px',
        maxWidth: '1400px',
        margin: '0 auto',
        position: 'relative'
      }}>
        {/* Decorative elements */}
        <div style={{
          position: 'absolute',
          top: '100px',
          right: '-100px',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'rgba(255,255,255,0.03)',
          filter: 'blur(80px)',
          pointerEvents: 'none'
        }} />

        {/* Section Label */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          marginBottom: '24px',
          opacity: isLoaded ? 1 : 0,
          transform: isLoaded ? 'translateY(0)' : 'translateY(20px)',
          transition: 'all 0.6s ease-out'
        }}>
          <div style={{
            width: '50px',
            height: '3px',
            background: 'linear-gradient(90deg, rgba(255,255,255,0.8), transparent)',
            borderRadius: '2px'
          }} />
          <span style={{
            color: 'rgba(255,255,255,0.7)',
            fontSize: '13px',
            textTransform: 'uppercase',
            letterSpacing: '2px',
            fontWeight: '600'
          }}>Artículo Destacado</span>
        </div>

        {/* Featured Card */}
        <div 
          onClick={() => { navigate(`/noticia/${featuredNews.id}`); window.scrollTo(0, 0); }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '40px',
            background: 'linear-gradient(135deg, rgba(227,66,52,0.4) 0%, rgba(64,56,56,0.6) 100%)',
            borderRadius: '32px',
            overflow: 'hidden',
            border: '1px solid rgba(255,255,255,0.1)',
            boxShadow: '0 30px 60px -20px rgba(0,0,0,0.5)',
            cursor: 'pointer',
            opacity: isLoaded ? 1 : 0,
            transform: isLoaded ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.7s ease-out 0.1s'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = 'translateY(-8px)';
            e.currentTarget.style.boxShadow = '0 40px 80px -20px rgba(0,0,0,0.6)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 30px 60px -20px rgba(0,0,0,0.5)';
          }}
        >
          {/* Image */}
          <div style={{
            position: 'relative',
            height: '400px',
            overflow: 'hidden'
          }}>
            <img
              src={featuredNews.image}
              alt={featuredNews.title}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transition: 'transform 0.5s ease'
              }}
            />
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to right, rgba(0,0,0,0.5), transparent)'
            }} />
            {/* Badge */}
            <div style={{
              position: 'absolute',
              top: '24px',
              left: '24px',
              background: '#e34234',
              color: 'white',
              padding: '8px 16px',
              borderRadius: '8px',
              fontSize: '12px',
              fontWeight: '700',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              boxShadow: '0 4px 15px rgba(227,66,52,0.4)'
            }}>
              ⭐ Destacado
            </div>
          </div>

          {/* Content */}
          <div style={{
            padding: '40px 40px 40px 0',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
          }}>
            {/* Meta */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '20px',
              marginBottom: '20px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'rgba(255,255,255,0.6)' }}>
                <Calendar style={{ width: '16px', height: '16px' }} />
                <span style={{ fontSize: '14px' }}>{featuredNews.date}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'rgba(255,255,255,0.6)' }}>
                <Clock style={{ width: '16px', height: '16px' }} />
                <span style={{ fontSize: '14px' }}>5 min lectura</span>
              </div>
            </div>

            {/* Title */}
            <h2 style={{
              color: 'white',
              fontSize: 'clamp(28px, 4vw, 40px)',
              fontWeight: '700',
              lineHeight: 1.2,
              marginBottom: '20px',
              letterSpacing: '-1px'
            }}>
              {featuredNews.title}
            </h2>

            {/* Excerpt */}
            <p style={{
              color: 'rgba(255,255,255,0.8)',
              fontSize: '17px',
              lineHeight: 1.7,
              marginBottom: '32px'
            }}>
              {featuredNews.excerpt}
            </p>

            {/* CTA */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              color: 'white',
              fontSize: '15px',
              fontWeight: '600'
            }}>
              <span>Leer artículo completo</span>
              <ArrowRight style={{ width: '18px', height: '18px' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Filters & Search Section */}
      <section style={{
        padding: '0 32px 48px',
        maxWidth: '1400px',
        margin: '0 auto'
      }}>
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '24px',
          opacity: isLoaded ? 1 : 0,
          transform: isLoaded ? 'translateY(0)' : 'translateY(20px)',
          transition: 'all 0.6s ease-out 0.3s'
        }}>
          {/* Categories */}
          <div style={{
            display: 'flex',
            gap: '12px',
            flexWrap: 'wrap'
          }}>
            {categories.map((cat) => {
              const IconComponent = cat.icon;
              const isActive = activeFilter === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveFilter(cat.id)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '12px 24px',
                    borderRadius: '12px',
                    border: isActive ? '2px solid rgba(255,255,255,0.4)' : '2px solid rgba(255,255,255,0.1)',
                    background: isActive 
                      ? 'linear-gradient(135deg, rgba(227,66,52,0.6) 0%, rgba(198,41,38,0.4) 100%)' 
                      : 'rgba(255,255,255,0.05)',
                    color: isActive ? 'white' : 'rgba(255,255,255,0.7)',
                    cursor: 'pointer',
                    fontSize: '14px',
                    fontWeight: '500',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <IconComponent style={{ width: '16px', height: '16px' }} />
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Search */}
          <div style={{
            position: 'relative',
            width: '300px',
            maxWidth: '100%'
          }}>
            <Search style={{
              position: 'absolute',
              left: '16px',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '18px',
              height: '18px',
              color: 'rgba(255,255,255,0.4)'
            }} />
            <input
              type="text"
              placeholder="Buscar noticias..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                width: '100%',
                padding: '14px 20px 14px 48px',
                borderRadius: '14px',
                border: '2px solid rgba(255,255,255,0.1)',
                background: 'rgba(255,255,255,0.05)',
                color: 'white',
                fontSize: '14px',
                outline: 'none',
                transition: 'all 0.3s ease'
              }}
              onFocus={(e) => {
                e.target.style.borderColor = 'rgba(255,255,255,0.3)';
                e.target.style.background = 'rgba(255,255,255,0.1)';
              }}
              onBlur={(e) => {
                e.target.style.borderColor = 'rgba(255,255,255,0.1)';
                e.target.style.background = 'rgba(255,255,255,0.05)';
              }}
            />
          </div>
        </div>
      </section>

      {/* Section Title */}
      <section style={{
        padding: '0 32px 32px',
        maxWidth: '1400px',
        margin: '0 auto'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '16px',
          opacity: isLoaded ? 1 : 0,
          transform: isLoaded ? 'translateY(0)' : 'translateY(20px)',
          transition: 'all 0.6s ease-out 0.4s'
        }}>
          <h2 style={{
            color: 'white',
            fontSize: '28px',
            fontWeight: '700',
            letterSpacing: '-0.5px'
          }}>
            Últimas Noticias
          </h2>
          <div style={{
            flex: 1,
            height: '2px',
            background: 'linear-gradient(90deg, rgba(255,255,255,0.2), transparent)',
            borderRadius: '1px'
          }} />
          <span style={{
            color: 'rgba(255,255,255,0.5)',
            fontSize: '14px'
          }}>
            {filteredNews.length} artículos
          </span>
        </div>
      </section>

      {/* News Grid */}
      <section style={{
        padding: '0 32px 80px',
        maxWidth: '1400px',
        margin: '0 auto'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
          gap: '32px'
        }}>
          {filteredNews.map((noticia, index) => (
            <article
              key={noticia.id}
              onClick={() => { navigate(`/noticia/${noticia.id}`); window.scrollTo(0, 0); }}
              style={{
                background: 'linear-gradient(145deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 100%)',
                borderRadius: '24px',
                overflow: 'hidden',
                border: '1px solid rgba(255,255,255,0.1)',
                cursor: 'pointer',
                opacity: isLoaded ? 1 : 0,
                transform: isLoaded ? 'translateY(0)' : 'translateY(40px)',
                transition: `all 0.6s ease-out ${0.5 + index * 0.1}s`
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-12px) scale(1.02)';
                e.currentTarget.style.boxShadow = '0 30px 60px -15px rgba(0,0,0,0.5)';
                e.currentTarget.style.borderColor = 'rgba(227,66,52,0.5)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
              }}
            >
              {/* Image Container */}
              <div style={{
                position: 'relative',
                height: '220px',
                overflow: 'hidden'
              }}>
                <img
                  src={noticia.image}
                  alt={noticia.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease'
                  }}
                  onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                  onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                />
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(180deg, rgba(198,41,38,0.3) 0%, transparent 40%, rgba(0,0,0,0.6) 100%)'
                }} />
                
                {/* Category Tag */}
                <div style={{
                  position: 'absolute',
                  top: '16px',
                  left: '16px',
                  background: 'rgba(0,0,0,0.6)',
                  backdropFilter: 'blur(10px)',
                  color: 'white',
                  padding: '6px 14px',
                  borderRadius: '8px',
                  fontSize: '11px',
                  fontWeight: '600',
                  textTransform: 'uppercase',
                  letterSpacing: '1px'
                }}>
                  Noticia
                </div>

                {/* Date Badge */}
                <div style={{
                  position: 'absolute',
                  bottom: '16px',
                  left: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  color: 'white',
                  fontSize: '13px'
                }}>
                  <Calendar style={{ width: '14px', height: '14px' }} />
                  {noticia.date}
                </div>
              </div>

              {/* Content */}
              <div style={{ padding: '28px' }}>
                <h3 style={{
                  color: 'white',
                  fontSize: '20px',
                  fontWeight: '700',
                  lineHeight: 1.3,
                  marginBottom: '14px',
                  letterSpacing: '-0.3px'
                }}>
                  {noticia.title}
                </h3>

                <p style={{
                  color: 'rgba(255,255,255,0.65)',
                  fontSize: '14px',
                  lineHeight: 1.6,
                  marginBottom: '24px',
                  display: '-webkit-box',
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden'
                }}>
                  {noticia.excerpt}
                </p>

                {/* Read More */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    color: '#e34234',
                    fontSize: '14px',
                    fontWeight: '600'
                  }}>
                    <span>Leer más</span>
                    <ArrowRight style={{ width: '16px', height: '16px' }} />
                  </div>

                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    color: 'rgba(255,255,255,0.4)',
                    fontSize: '12px'
                  }}>
                    <Clock style={{ width: '12px', height: '12px' }} />
                    <span>3 min</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Empty State */}
        {filteredNews.length === 0 && (
          <div style={{
            textAlign: 'center',
            padding: '80px 20px',
            color: 'rgba(255,255,255,0.5)'
          }}>
            <Search style={{ width: '48px', height: '48px', marginBottom: '16px', opacity: 0.5 }} />
            <p style={{ fontSize: '18px' }}>No se encontraron noticias</p>
            <p style={{ fontSize: '14px', marginTop: '8px' }}>Intenta con otros términos de búsqueda</p>
          </div>
        )}
      </section>

      {/* Back to Home CTA */}
      <section style={{
        padding: '0 32px 100px',
        maxWidth: '1400px',
        margin: '0 auto'
      }}>
        <div style={{
          background: 'linear-gradient(135deg, rgba(227,66,52,0.3) 0%, rgba(64,56,56,0.5) 100%)',
          borderRadius: '24px',
          padding: '48px',
          textAlign: 'center',
          border: '1px solid rgba(255,255,255,0.1)'
        }}>
          <h3 style={{
            color: 'white',
            fontSize: '24px',
            fontWeight: '700',
            marginBottom: '12px'
          }}>
            ¿Quieres conocer más sobre Libella?
          </h3>
          <p style={{
            color: 'rgba(255,255,255,0.6)',
            fontSize: '16px',
            marginBottom: '32px'
          }}>
            Descubre nuestros proyectos, servicios y mucho más
          </p>
          <button
            onClick={() => { navigate('/'); window.scrollTo(0, 0); }}
            style={{
              background: 'white',
              color: '#c62926',
              padding: '16px 40px',
              borderRadius: '14px',
              border: 'none',
              cursor: 'pointer',
              fontSize: '16px',
              fontWeight: '700',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
              transition: 'all 0.3s ease'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.3)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.2)';
            }}
          >
            <ArrowLeft style={{ width: '18px', height: '18px' }} />
            Volver al inicio
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        borderTop: '1px solid rgba(255,255,255,0.1)',
        padding: '32px',
        textAlign: 'center'
      }}>
        <p style={{
          color: 'rgba(255,255,255,0.4)',
          fontSize: '14px'
        }}>
          © 2025 Libella Perspectiva. Todos los derechos reservados.
        </p>
      </footer>
    </div>
  );
}
