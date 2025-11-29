import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { noticiasData } from '../../datos/noticias';
import { ArrowLeft, Calendar, Clock, Share2, BookOpen } from 'lucide-react';

export default function NoticiaDetalle() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => setIsLoaded(true), 100);
  }, []);

  const noticia = noticiasData.find(item => item.id === id);

  if (!noticia) {
    return (
      <div 
        style={{ 
          minHeight: '100vh',
          background: 'linear-gradient(to bottom, rgba(198,41,38,0.97), #403838)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '16px'
        }}
      >
        <div style={{ textAlign: 'center' }}>
          <div style={{ 
            width: '80px', 
            height: '80px', 
            margin: '0 auto 24px', 
            borderRadius: '50%', 
            backgroundColor: 'rgba(255,255,255,0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <BookOpen style={{ width: '40px', height: '40px', color: 'rgba(255,255,255,0.7)' }} />
          </div>
          <h1 style={{ color: 'white', fontSize: '32px', marginBottom: '16px', fontFamily: 'Arial, sans-serif' }}>
            Noticia no encontrada
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '16px', marginBottom: '32px', fontFamily: 'Arial, sans-serif' }}>
            Lo sentimos, la noticia que buscas no existe o ha sido eliminada.
          </p>
          <button
            onClick={() => { navigate('/'); window.scrollTo(0, 0); }}
            style={{
              backgroundColor: 'white',
              color: '#c62926',
              padding: '12px 32px',
              borderRadius: '9999px',
              border: 'none',
              cursor: 'pointer',
              fontWeight: '600',
              fontSize: '16px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              fontFamily: 'Arial, sans-serif'
            }}
          >
            <ArrowLeft style={{ width: '20px', height: '20px' }} />
            <span>Volver al inicio</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={{ 
      minHeight: '100vh',
      background: 'linear-gradient(to bottom, rgba(198,41,38,0.97), #403838)',
      paddingBottom: '64px'
    }}>
      {/* Header */}
      <header style={{
        backgroundColor: '#c62926',
        height: '64px',
        padding: '0 24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'sticky',
        top: 0,
        zIndex: 50,
        boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)'
      }}>
        <button
          onClick={() => { navigate('/noticias'); window.scrollTo(0, 0); }}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            color: 'white',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            fontFamily: 'Arial, sans-serif'
          }}
        >
          <div style={{
            width: '32px',
            height: '32px',
            borderRadius: '50%',
            backgroundColor: 'rgba(255,255,255,0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <ArrowLeft style={{ width: '16px', height: '16px' }} />
          </div>
          <span style={{ fontSize: '14px', fontWeight: '500' }}>Volver a noticias</span>
        </button>
        
        <button style={{
          width: '32px',
          height: '32px',
          borderRadius: '50%',
          backgroundColor: 'rgba(255,255,255,0.1)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: 'none',
          cursor: 'pointer',
          color: 'white'
        }}>
          <Share2 style={{ width: '16px', height: '16px' }} />
        </button>
      </header>

      {/* Main Content */}
      <main style={{ 
        maxWidth: '800px', 
        margin: '0 auto', 
        padding: '32px 24px',
        position: 'relative'
      }}>
        {/* Decorative blur circles */}
        <div style={{
          position: 'absolute',
          top: '100px',
          right: '-200px',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'rgba(255,255,255,0.05)',
          filter: 'blur(60px)',
          pointerEvents: 'none'
        }} />
        <div style={{
          position: 'absolute',
          top: '400px',
          left: '-200px',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          background: 'rgba(255,255,255,0.05)',
          filter: 'blur(60px)',
          pointerEvents: 'none'
        }} />

        {/* Category Badge */}
        <div style={{
          marginBottom: '24px',
          opacity: isLoaded ? 1 : 0,
          transform: isLoaded ? 'translateY(0)' : 'translateY(16px)',
          transition: 'all 0.6s ease-out'
        }}>
          <span style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '6px 16px',
            borderRadius: '9999px',
            backgroundColor: 'rgba(255,255,255,0.1)',
            border: '1px solid rgba(255,255,255,0.2)',
            color: 'rgba(255,255,255,0.9)',
            fontSize: '12px',
            fontWeight: '500',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            fontFamily: 'Arial, sans-serif'
          }}>
            <span style={{
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              backgroundColor: '#4ade80',
              animation: 'pulse 2s infinite'
            }} />
            Noticia
          </span>
        </div>

        {/* Title */}
        <h1 style={{
          color: 'white',
          fontSize: 'clamp(24px, 5vw, 40px)',
          fontWeight: '700',
          lineHeight: 1.2,
          marginBottom: '24px',
          fontFamily: 'Arial, sans-serif',
          letterSpacing: '-0.02em',
          opacity: isLoaded ? 1 : 0,
          transform: isLoaded ? 'translateY(0)' : 'translateY(16px)',
          transition: 'all 0.6s ease-out 0.1s'
        }}>
          {noticia.title}
        </h1>

        {/* Meta Info */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '20px',
          marginBottom: '32px',
          opacity: isLoaded ? 1 : 0,
          transform: isLoaded ? 'translateY(0)' : 'translateY(16px)',
          transition: 'all 0.6s ease-out 0.2s'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'rgba(255,255,255,0.7)' }}>
            <Calendar style={{ width: '16px', height: '16px' }} />
            <span style={{ fontSize: '14px', fontFamily: 'Arial, sans-serif' }}>{noticia.date}</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'rgba(255,255,255,0.7)' }}>
            <Clock style={{ width: '16px', height: '16px' }} />
            <span style={{ fontSize: '14px', fontFamily: 'Arial, sans-serif' }}>3 min de lectura</span>
          </div>
        </div>

        {/* Divider */}
        <div style={{
          height: '3px',
          width: '120px',
          background: 'linear-gradient(to right, rgba(255,255,255,0.6), transparent)',
          marginBottom: '32px',
          borderRadius: '2px'
        }} />

        {/* Image Thumbnail - Fixed size with inline styles */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          marginBottom: '40px',
          opacity: isLoaded ? 1 : 0,
          transform: isLoaded ? 'translateY(0)' : 'translateY(16px)',
          transition: 'all 0.6s ease-out 0.3s'
        }}>
          <div style={{
            width: '700px',
            height: '300px',
            borderRadius: '16px',
            overflow: 'hidden',
            boxShadow: '0 20px 40px -12px rgba(0,0,0,0.4)',
            border: '2px solid rgba(255,255,255,0.2)',
            position: 'relative'
          }}>
            <img
              src={noticia.image}
              alt={noticia.title}
              style={{
                width: '700px',
                height: '300px',
                objectFit: 'cover',
                display: 'block'
              }}
            />
            {/* Gradient overlay */}
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to top, rgba(0,0,0,0.3), transparent)'
            }} />
          </div>
        </div>

        {/* Excerpt Card */}
        <div style={{
          background: 'linear-gradient(135deg, rgba(227,66,52,0.91) 0%, rgba(64,56,56,0.95) 100%)',
          border: '1px solid rgba(255,255,255,0.15)',
          borderRadius: '20px',
          padding: '28px',
          marginBottom: '32px',
          boxShadow: '0 20px 40px -12px rgba(0,0,0,0.35)',
          position: 'relative',
          overflow: 'hidden',
          opacity: isLoaded ? 1 : 0,
          transform: isLoaded ? 'translateY(0)' : 'translateY(16px)',
          transition: 'all 0.6s ease-out 0.4s'
        }}>
          {/* Accent line */}
          <div style={{
            position: 'absolute',
            left: 0,
            top: 0,
            width: '4px',
            height: '100%',
            background: 'linear-gradient(to bottom, #e34234, transparent)',
            borderRadius: '2px'
          }} />
          
          {/* Quote icon */}
          <div style={{
            position: 'absolute',
            top: '8px',
            right: '16px',
            fontSize: '64px',
            color: 'rgba(255,255,255,0.1)',
            fontFamily: 'Georgia, serif',
            lineHeight: 1
          }}>\"</div>
          
          <p style={{
            color: 'rgba(255,255,255,0.95)',
            fontSize: '17px',
            lineHeight: 1.75,
            fontStyle: 'italic',
            fontFamily: 'Arial, sans-serif',
            paddingLeft: '16px',
            margin: 0
          }}>
            {noticia.excerpt}
          </p>
        </div>

        {/* Full Content */}
        <div style={{
          backgroundColor: 'rgba(255,255,255,0.03)',
          border: '1px solid rgba(255,255,255,0.1)',
          borderRadius: '20px',
          padding: '32px',
          marginBottom: '40px',
          boxShadow: '0 15px 35px -10px rgba(0,0,0,0.25)',
          opacity: isLoaded ? 1 : 0,
          transform: isLoaded ? 'translateY(0)' : 'translateY(16px)',
          transition: 'all 0.6s ease-out 0.5s'
        }}>
          <div style={{
            color: 'rgba(255,255,255,0.9)',
            fontSize: '16px',
            lineHeight: 1.85,
            whiteSpace: 'pre-line',
            fontFamily: 'Arial, sans-serif'
          }}>
            {noticia.fullContent}
          </div>
        </div>

        {/* Tags */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '8px',
          marginBottom: '40px',
          opacity: isLoaded ? 1 : 0,
          transform: isLoaded ? 'translateY(0)' : 'translateY(16px)',
          transition: 'all 0.6s ease-out 0.6s'
        }}>
          {['Construcción', 'Proyectos', 'Libella'].map((tag) => (
            <span
              key={tag}
              style={{
                padding: '6px 14px',
                borderRadius: '9999px',
                backgroundColor: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                color: 'rgba(255,255,255,0.6)',
                fontSize: '12px',
                fontFamily: 'Arial, sans-serif',
                cursor: 'pointer'
              }}
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Divider decorative */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '16px',
          marginBottom: '40px'
        }}>
          <div style={{ flex: 1, height: '1px', background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.2), transparent)' }} />
          <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.2)' }} />
          <div style={{ flex: 1, height: '1px', background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.2), transparent)' }} />
        </div>

        {/* Action Buttons */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          alignItems: 'center',
          opacity: isLoaded ? 1 : 0,
          transform: isLoaded ? 'translateY(0)' : 'translateY(16px)',
          transition: 'all 0.6s ease-out 0.7s'
        }}>
          <button
            onClick={() => { navigate('/noticias'); window.scrollTo(0, 0); }}
            style={{
              backgroundColor: 'white',
              color: '#c62926',
              padding: '14px 40px',
              borderRadius: '9999px',
              border: 'none',
              cursor: 'pointer',
              fontWeight: '600',
              fontSize: '15px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              fontFamily: 'Arial, sans-serif',
              boxShadow: '0 10px 30px -10px rgba(0,0,0,0.3)',
              width: 'fit-content'
            }}
          >
            <ArrowLeft style={{ width: '18px', height: '18px' }} />
            <span>Ver más noticias</span>
          </button>
          
          <button
            onClick={() => { navigate('/'); window.scrollTo(0, 0); }}
            style={{
              backgroundColor: 'rgba(255,255,255,0.1)',
              color: 'white',
              padding: '14px 40px',
              borderRadius: '9999px',
              border: '2px solid rgba(255,255,255,0.25)',
              cursor: 'pointer',
              fontWeight: '600',
              fontSize: '15px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              fontFamily: 'Arial, sans-serif',
              width: 'fit-content'
            }}
          >
            <span>Ir al inicio</span>
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer style={{
        borderTop: '1px solid rgba(255,255,255,0.1)',
        marginTop: '32px',
        padding: '24px'
      }}>
        <p style={{
          textAlign: 'center',
          color: 'rgba(255,255,255,0.4)',
          fontSize: '14px',
          fontFamily: 'Arial, sans-serif',
          margin: 0
        }}>
          © 2025 Libella Perspectiva. Todos los derechos reservados.
        </p>
      </footer>

      {/* Pulse animation keyframes */}
      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
      `}</style>
    </div>
  );
}
