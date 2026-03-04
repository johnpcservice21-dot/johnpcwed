# John PC Service - Tienda Web

Tienda web profesional para John PC Service con panel de administración mediante Google Sheets.

## 🚀 Características

- ✅ **Diseño profesional y responsive**
- ✅ **Carrito de compras funcional**
- ✅ **Pedidos por WhatsApp automáticos**
- ✅ **Panel de administración vía Google Sheets**
- ✅ **Sin conocimientos de código necesarios**
- ✅ **Carga rápida y optimizada**

## 📋 Requisitos

- Node.js 18+
- Cuenta de Google
- Cuenta de WhatsApp Business (opcional)

## 🛠️ Instalación Local

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Compilar para producción
npm run build
```

## 🔧 Configuración del Google Sheet

### Paso 1: Crear el Google Sheet

1. Ve a [Google Sheets](https://sheets.google.com) y crea una nueva hoja
2. Crea 3 pestañas con los siguientes nombres exactos:
   - `Productos`
   - `Categorias`
   - `Config`

### Paso 2: Configurar la hoja "Productos"

Columnas (en la primera fila como headers):

| ID | Nombre | Categoria | Precio | Precio Original | Imagen | Especificaciones | Descripcion | En Stock | Destacado |
|----|--------|-----------|--------|-----------------|--------|------------------|-------------|----------|-----------|
| 1 | Laptop Gaming ROG Strix | Laptops | 1899 | 2100 | https://... | RTX 4070, Intel i7... | Laptop potente | si | si |

**Notas:**
- `Precio Original`: Dejar vacío si no hay oferta
- `En Stock` y `Destacado`: Escribir "si" o "no"
- `Imagen`: URL de la imagen (puedes usar Unsplash, Imgur, etc.)

### Paso 3: Configurar la hoja "Categorias"

| ID | Nombre | Descripcion | Imagen |
|----|--------|-------------|--------|
| 1 | Laptops Gaming | Potencia portátil para juegos | https://... |
| 2 | PCs de Escritorio | Sistemas completos | https://... |
| 3 | Componentes | GPUs, CPUs, RAM y más | https://... |

### Paso 4: Configurar la hoja "Config"

| Clave | Valor |
|-------|-------|
| phone | 809.534.4427 |
| whatsapp | 18298488062 |
| email | johnpcservice21@gmail.com |
| address | C/ Duarte No. 21 Libertador de Heredia |
| city | Santo Domingo Oeste |
| country | República Dominicana |
| heroTitle | John PC Service |
| heroSubtitle | Computadoras, reparaciones y componentes gaming |
| ctaText | Contactar por WhatsApp |

### Paso 5: Crear el Script de Google Apps

1. En tu Google Sheet, ve a **Extensions → Apps Script**
2. Borra el código por defecto y pega el siguiente:

```javascript
function doGet(e) {
  // ID de tu Google Sheet (cambia esto)
  const SHEET_ID = 'TU_SHEET_ID_AQUI';
  
  const ss = SpreadsheetApp.openById(SHEET_ID);
  
  // Hoja de Productos
  const productsSheet = ss.getSheetByName('Productos');
  const productsData = productsSheet.getDataRange().getValues();
  const products = [];
  
  // Saltar header
  for (let i = 1; i < productsData.length; i++) {
    const row = productsData[i];
    products.push({
      id: row[0]?.toString() || '',
      name: row[1]?.toString() || '',
      category: row[2]?.toString() || '',
      price: parseFloat(row[3]) || 0,
      originalPrice: parseFloat(row[4]) || null,
      image: row[5]?.toString() || '',
      specs: row[6]?.toString() || '',
      description: row[7]?.toString() || '',
      inStock: row[8]?.toString().toLowerCase() === 'si',
      featured: row[9]?.toString().toLowerCase() === 'si'
    });
  }
  
  // Hoja de Categorías
  const categoriesSheet = ss.getSheetByName('Categorias');
  const categoriesData = categoriesSheet.getDataRange().getValues();
  const categories = [];
  
  for (let i = 1; i < categoriesData.length; i++) {
    const row = categoriesData[i];
    categories.push({
      id: row[0]?.toString() || '',
      name: row[1]?.toString() || '',
      description: row[2]?.toString() || '',
      image: row[3]?.toString() || ''
    });
  }
  
  // Hoja de Config
  const configSheet = ss.getSheetByName('Config');
  const configData = configSheet.getDataRange().getValues();
  const config = {};
  
  for (let i = 1; i < configData.length; i++) {
    const row = configData[i];
    config[row[0]] = row[1]?.toString() || '';
  }
  
  const result = {
    products: products,
    categories: categories,
    config: config
  };
  
  return ContentService
    .createTextOutput(JSON.stringify(result))
    .setMimeType(ContentService.MimeType.JSON);
}
```

3. Reemplaza `TU_SHEET_ID_AQUI` con el ID de tu Google Sheet (está en la URL: `https://docs.google.com/spreadsheets/d/ID_AQUI/edit`)

### Paso 6: Desplegar el Script

1. Haz clic en **Deploy → New deployment**
2. Haz clic en el icono de engranaje ⚙️ y selecciona **Web app**
3. Configura:
   - **Description**: API John PC Service
   - **Execute as**: Me
   - **Who has access**: Anyone
4. Haz clic en **Deploy**
5. Autoriza los permisos (puede que muestre una advertencia de "Google no verificó esta app", haz clic en "Advanced" y "Go to...")
6. Copia la **Web App URL**

### Paso 7: Conectar la Web con el Google Sheet

1. Abre el archivo `src/hooks/useGoogleSheets.ts`
2. Reemplaza la URL en `GOOGLE_SHEETS_API_URL`:

```typescript
const GOOGLE_SHEETS_API_URL = 'https://script.google.com/macros/s/TU_URL_AQUI/exec';
```

3. Vuelve a compilar:

```bash
npm run build
```

## 📁 Estructura del Proyecto

```
app/
├── src/
│   ├── components/       # Componentes reutilizables
│   │   ├── cart/        # Componentes del carrito
│   │   ├── Navigation.tsx
│   │   ├── ProductCard.tsx
│   │   └── CategoryCard.tsx
│   ├── hooks/           # Custom hooks
│   │   ├── useGoogleSheets.ts
│   │   └── useCart.ts
│   ├── sections/        # Secciones de la página
│   │   ├── HeroSection.tsx
│   │   ├── CategoriesSection.tsx
│   │   ├── ProductsSection.tsx
│   │   ├── BenefitsSection.tsx
│   │   ├── CTASection.tsx
│   │   ├── FooterSection.tsx
│   │   └── SetupSection.tsx
│   ├── types/           # TypeScript types
│   │   └── index.ts
│   ├── App.tsx          # Componente principal
│   └── main.tsx         # Punto de entrada
├── dist/                # Archivos compilados
└── index.html
```

## 🎨 Personalización

### Cambiar colores

Edita `tailwind.config.js`:

```javascript
colors: {
  primary: {
    DEFAULT: '#3b82f6', // Cambia este color
    hover: '#2563eb',
  }
}
```

### Cambiar imágenes

Las imágenes se configuran en el Google Sheet. Puedes usar:
- URLs de Unsplash: `https://images.unsplash.com/photo-...`
- URLs de Imgur
- Tu propio hosting de imágenes

## 📱 Funcionalidades del Carrito

- Agregar productos al carrito
- Modificar cantidades
- Eliminar productos
- Vaciar carrito
- Enviar pedido por WhatsApp con lista completa

## 🔒 SEO y Rendimiento

- Meta tags optimizados
- Carga lazy de imágenes
- Código minificado
- Compatible con dispositivos móviles

## 🚀 Despliegue

### Opción 1: Netlify (Recomendado)

1. Crea una cuenta en [Netlify](https://netlify.com)
2. Arrastra la carpeta `dist` a Netlify
3. ¡Listo!

### Opción 2: Vercel

1. Crea una cuenta en [Vercel](https://vercel.com)
2. Conecta tu repositorio de GitHub
3. Configura el comando de build: `npm run build`
4. Directorio de salida: `dist`

### Opción 3: GitHub Pages

1. Instala `gh-pages`:
   ```bash
   npm install --save-dev gh-pages
   ```
2. Agrega a `package.json`:
   ```json
   "homepage": "https://tuusuario.github.io/john-pc-service",
   "scripts": {
     "deploy": "gh-pages -d dist"
   }
   ```
3. Ejecuta `npm run deploy`

## 📝 Tips para tu amigo

### Cómo agregar un nuevo producto

1. Abre el Google Sheet
2. Ve a la pestaña "Productos"
3. Agrega una nueva fila con:
   - ID: número único
   - Nombre: nombre del producto
   - Categoria: debe coincidir con una categoría existente
   - Precio: número sin símbolos
   - Precio Original: número o dejar vacío
   - Imagen: URL de la imagen
   - Especificaciones: texto corto
   - Descripcion: texto más largo
   - En Stock: escribir "si" o "no"
   - Destacado: escribir "si" o "no"
4. ¡Listo! Los cambios aparecen en la web automáticamente

### Cómo cambiar precios

1. Abre el Google Sheet
2. Encuentra el producto
3. Modifica la celda de "Precio"
4. ¡Listo!

### Cómo subir imágenes

**Opción 1: Unsplash (Gratis)**
1. Ve a [Unsplash](https://unsplash.com)
2. Busca una imagen relacionada
3. Haz clic derecho → "Copiar dirección de imagen"
4. Pega en el Google Sheet

**Opción 2: Imgur (Gratis)**
1. Ve a [Imgur](https://imgur.com)
2. Sube tu imagen
3. Copia el link directo
4. Pega en el Google Sheet

## 🐛 Solución de Problemas

### Los productos no aparecen

1. Verifica que el Google Sheet sea público (o compartido con la cuenta del script)
2. Revisa que las pestañas tengan los nombres exactos: Productos, Categorias, Config
3. Verifica que los headers estén en la primera fila
4. Revisa la consola del navegador (F12) para errores

### El carrito no funciona

1. Verifica que el localStorage esté habilitado
2. Limpia el cache del navegador

### WhatsApp no abre

1. Verifica que el número de WhatsApp esté correcto en el Google Sheet
2. El número debe incluir el código de país (ej: 1829... para RD)

## 📞 Soporte

Si tienes problemas, revisa:
1. La consola del navegador (F12)
2. Los logs de Google Apps Script (View → Executions)
3. Que el Google Sheet tenga datos válidos

## 📄 Licencia

MIT License - Libre para uso personal y comercial.

---

**Hecho con ❤️ para John PC Service**#   j o h n - p c - s e r v i c e  
 