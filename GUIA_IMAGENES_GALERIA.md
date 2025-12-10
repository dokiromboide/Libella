# 📸 Guía: Cómo Agregar Imágenes a la Galería de Proyectos

## 📍 Ubicación del Archivo

Las imágenes de la galería se configuran en:
```
src/datos/proyectos.ts
```

## 🎯 Cómo Agregar Imágenes a un Proyecto

### Opción 1: Usar URLs de Internet (Más Fácil)

Simplemente agrega el array `galeriaImagenes` con las URLs de tus imágenes:

```typescript
"altos-cattleya": {
  nombreProyecto: "Altos de Cattleya",
  // ... otros datos ...
  galeriaImagenes: [
    "https://ejemplo.com/imagen1.jpg",  // Página izquierda
    "https://ejemplo.com/imagen2.jpg",  // Página derecha
    "https://ejemplo.com/imagen3.jpg",  // Página izquierda
    "https://ejemplo.com/imagen4.jpg",  // Página derecha
    "https://ejemplo.com/imagen5.jpg",  // Página izquierda
    "https://ejemplo.com/imagen6.jpg",  // Página derecha
  ]
}
```

### Opción 2: Usar Imágenes Locales (Recomendado para Producción)

#### Paso 1: Guardar las Imágenes
Coloca tus imágenes en la carpeta:
```
src/recursos/imagenes/proyectos/
```

Por ejemplo:
```
src/recursos/imagenes/proyectos/
├── altos-cattleya/
│   ├── galeria-1.jpg
│   ├── galeria-2.jpg
│   ├── galeria-3.jpg
│   └── ...
├── amsterdam/
│   ├── galeria-1.jpg
│   └── ...
```

#### Paso 2: Importar las Imágenes
Al inicio del archivo `proyectos.ts`:

```typescript
// Importar imágenes de Altos de Cattleya
import cattleya1 from "../recursos/imagenes/proyectos/altos-cattleya/galeria-1.jpg";
import cattleya2 from "../recursos/imagenes/proyectos/altos-cattleya/galeria-2.jpg";
import cattleya3 from "../recursos/imagenes/proyectos/altos-cattleya/galeria-3.jpg";

// Importar imágenes de Amsterdam
import amsterdam1 from "../recursos/imagenes/proyectos/amsterdam/galeria-1.jpg";
import amsterdam2 from "../recursos/imagenes/proyectos/amsterdam/galeria-2.jpg";
```

#### Paso 3: Usar las Imágenes Importadas
```typescript
"altos-cattleya": {
  nombreProyecto: "Altos de Cattleya",
  // ... otros datos ...
  galeriaImagenes: [
    cattleya1,
    cattleya2,
    cattleya3,
    // ... más imágenes
  ]
}
```

## 📖 Formato de Libro (2 Páginas)

Las imágenes se muestran de **2 en 2**, como un libro:

```
[Imagen 1] [Imagen 2]  <- Primera vista
[Imagen 3] [Imagen 4]  <- Segunda vista (al hacer clic en →)
[Imagen 5] [Imagen 6]  <- Tercera vista
```

### 💡 Recomendaciones:

1. **Número par de imágenes**: Usa 2, 4, 6, 8, etc. imágenes para que siempre se vean en pares completos.

2. **Imágenes complementarias**: Coloca imágenes que se complementen juntas:
   - Ejemplo: Exterior izquierdo + Exterior derecho
   - Ejemplo: Sala vista 1 + Sala vista 2

3. **Resolución recomendada**: 1200x800 píxeles por imagen (o similar)

4. **Formato**: JPG o PNG

## 🎨 Ejemplo Completo

```typescript
export const proyectosData: Record<string, ProyectoDetalle> = {
  "altos-cattleya": {
    nombreProyecto: "Altos de Cattleya",
    descripcion: "Hermosas parcelas...",
    ubicacion: "Totoró, Cauca",
    fechaEntrega: "2025",
    lotes: "Desde 1000m²",
    amenidades: ["Piscina", "Club house"],
    porcentajeAvance: 75,
    detallesAvance: [
      { nombre: "Terreno", porcentaje: 100 },
      { nombre: "Servicios", porcentaje: 80 }
    ],
    imagenBanner: "https://...",
    
    // ⭐ AQUÍ VAN LAS IMÁGENES DE LA GALERÍA ⭐
    galeriaImagenes: [
      "ruta/imagen1.jpg",  // Página 1 - Izquierda
      "ruta/imagen2.jpg",  // Página 1 - Derecha
      "ruta/imagen3.jpg",  // Página 2 - Izquierda
      "ruta/imagen4.jpg",  // Página 2 - Derecha
      "ruta/imagen5.jpg",  // Página 3 - Izquierda
      "ruta/imagen6.jpg",  // Página 3 - Derecha
    ]
  },
  
  "amsterdam": {
    // ... configuración similar ...
    galeriaImagenes: [
      "ruta/amsterdam1.jpg",
      "ruta/amsterdam2.jpg",
      "ruta/amsterdam3.jpg",
      "ruta/amsterdam4.jpg",
    ]
  }
}
```

## 🔄 Para Convertir PDF a Imágenes

Si tienes un PDF tipo "libro":

1. **Herramientas online**:
   - https://www.ilovepdf.com/pdf_to_jpg
   - https://smallpdf.com/pdf-to-jpg

2. **Configuración recomendada**:
   - Calidad: Alta
   - Formato: JPG
   - Cada página del PDF se convertirá en una imagen

3. **Nombrado**:
   - `proyecto-pagina-01.jpg`
   - `proyecto-pagina-02.jpg`
   - etc.

## ❓ Si No Agregas Imágenes

Si no defines `galeriaImagenes`, el componente usará imágenes de ejemplo por defecto. Pero lo ideal es que cada proyecto tenga sus propias imágenes.

## 🚀 Proyecto por Proyecto

Puedes agregar imágenes solo a algunos proyectos:

```typescript
"altos-cattleya": {
  // ... datos ...
  galeriaImagenes: [ /* tus imágenes */ ]  // ✅ Con galería
},

"amsterdam": {
  // ... datos ...
  // Sin galeriaImagenes  // ❌ Usará imágenes por defecto
}
```

---

¿Necesitas ayuda? Revisa el ejemplo en `altos-cattleya` dentro de `proyectos.ts`
