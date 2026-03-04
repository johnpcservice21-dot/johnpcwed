# Plantilla Google Sheet para John PC Service

## Instrucciones Rápidas

1. Crea un nuevo Google Sheet
2. Crea 3 pestañas con estos nombres exactos:
   - `Productos`
   - `Categorias`
   - `Config`
3. Copia los datos de abajo en cada pestaña
4. Sigue las instrucciones del README para conectar

---

## Pestaña: Productos

Copia estas columnas en la primera fila:

```
ID	Nombre	Categoria	Precio	Precio Original	Imagen	Especificaciones	Descripcion	En Stock	Destacado
```

Datos de ejemplo (copia desde la segunda fila):

```
1	Laptop Gaming ROG Strix	Laptops	1899	2100	https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=600&h=400&fit=crop	RTX 4070, Intel i7-13700H, 16GB RAM, 1TB SSD	Potente laptop gaming con la última tecnología NVIDIA	si	si
2	Laptop MSI Raider	Laptops	2299		https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=600&h=400&fit=crop	RTX 4080, Intel i9-13900HX, 32GB RAM, 2TB SSD	Laptop premium para gaming profesional	si	si
3	Laptop Acer Predator	Laptops	1599	1750	https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=600&h=400&fit=crop	RTX 4060, AMD Ryzen 7, 16GB RAM, 512GB SSD	Excelente relación calidad-precio para gamers	si	si
4	PC Gaming Elite	PCs	2499		https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=600&h=400&fit=crop	RTX 4070 Ti, Intel i7-13700K, 32GB RAM, 1TB NVMe	PC de alto rendimiento para gaming 4K	si	si
5	PC Gaming Pro	PCs	1799		https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=600&h=400&fit=crop	RTX 4060 Ti, AMD Ryzen 7 7700X, 16GB RAM, 1TB SSD	PC gaming equilibrada para 1080p y 1440p	si	si
6	PC Gaming Ultimate	PCs	3999		https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=600&h=400&fit=crop	RTX 4090, Intel i9-13900KS, 64GB RAM, 2TB NVMe	La mejor PC gaming del mercado	si	si
7	Monitor Gaming 27" 165Hz	Perifericos	399	450	https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=600&h=400&fit=crop	27 pulgadas, 165Hz, 1ms, IPS, QHD	Monitor gaming con excelente calidad de imagen	si	no
8	Teclado Mecánico RGB	Perifericos	129		https://images.unsplash.com/photo-1595225476474-87563907a212?w=600&h=400&fit=crop	Switches Red, RGB, Layout Español	Teclado mecánico para gaming competitivo	si	no
9	Mouse Gaming Pro	Perifericos	79	99	https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=600&h=400&fit=crop	16000 DPI, 8 botones, RGB	Mouse ergonómico para largas sesiones	si	no
10	Tarjeta Gráfica RTX 4070	Componentes	599		https://images.unsplash.com/photo-1591488320449-011701bb6704?w=600&h=400&fit=crop	12GB GDDR6X, Ray Tracing, DLSS 3	GPU de última generación para gaming	si	no
```

---

## Pestaña: Categorias

Copia estas columnas en la primera fila:

```
ID	Nombre	Descripcion	Imagen
```

Datos de ejemplo:

```
1	Laptops Gaming	Potencia portátil para juegos y trabajo profesional	https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=600&h=400&fit=crop
2	PCs de Escritorio	Sistemas completos personalizados para cada necesidad	https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=600&h=400&fit=crop
3	Componentes	GPUs, CPUs, RAM, SSDs y más para armar tu PC	https://images.unsplash.com/photo-1591488320449-011701bb6704?w=600&h=400&fit=crop
4	Perifericos	Teclados, mouse, monitores y accesorios gaming	https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=600&h=400&fit=crop
```

---

## Pestaña: Config

Copia estas columnas en la primera fila:

```
Clave	Valor
```

Datos:

```
phone	809.534.4427
whatsapp	18298488062
email	johnpcservice21@gmail.com
address	C/ Duarte No. 21 Libertador de Heredia
city	Santo Domingo Oeste
country	República Dominicana
heroTitle	John PC Service
heroSubtitle	Computadoras, reparaciones y componentes gaming
ctaText	Contactar por WhatsApp
```

---

## Notas Importantes

### Formato de Precios
- Usa números sin símbolos: `1899` en lugar de `$1,899`
- Para ofertas, pon el precio original en "Precio Original" y el nuevo en "Precio"

### Imágenes
Puedes usar estas fuentes gratuitas:
- **Unsplash**: `https://images.unsplash.com/photo-...`
- **Pexels**: `https://images.pexels.com/photos/...`
- **Imgur**: Sube tus propias fotos

### Stock y Destacados
- Escribe exactamente: `si` o `no` (minúsculas)
- Los productos destacados aparecen en la página principal

### Categorías
- El nombre de la categoría en productos debe coincidir EXACTAMENTE con el nombre en la pestaña Categorias
- Ejemplo: Si en Categorias pones "Laptops Gaming", en Productos también debe ser "Laptops Gaming"

---

## URL del Google Sheet

Para obtener el ID de tu Google Sheet:
1. Abre el Google Sheet
2. Mira la URL: `https://docs.google.com/spreadsheets/d/ID_AQUI/edit`
3. Copia solo la parte de `ID_AQUI`
4. Pégalo en el archivo `google-apps-script.js`

---

## ¿Necesitas Ayuda?

Revisa el archivo `README.md` para instrucciones completas de configuración.
