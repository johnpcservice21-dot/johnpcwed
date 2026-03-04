import { useState } from 'react';
import { ChevronDown, ChevronUp, Copy, Check } from 'lucide-react';

export function SetupSection() {
  const [expanded, setExpanded] = useState(true);
  const [copied, setCopied] = useState(false);

  const scriptCode = `function doGet(e) {
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
}`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(scriptCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="setup-instructions" className="py-16 bg-amber-50 border-t border-amber-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          onClick={() => setExpanded(!expanded)}
          className="w-full flex items-center justify-between text-left"
        >
          <div>
            <h2 className="text-2xl font-bold text-amber-900">
              📋 Instrucciones de Configuración
            </h2>
            <p className="text-amber-700 mt-1">
              Conecta tu Google Sheet para gestionar la tienda fácilmente
            </p>
          </div>
          {expanded ? (
            <ChevronUp className="w-6 h-6 text-amber-600" />
          ) : (
            <ChevronDown className="w-6 h-6 text-amber-600" />
          )}
        </button>

        {expanded && (
          <div className="mt-8 space-y-8">
            {/* Paso 1 */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                  1
                </span>
                <h3 className="text-lg font-bold text-gray-900">
                  Crea tu Google Sheet
                </h3>
              </div>
              <p className="text-gray-600 mb-4">
                Crea una nueva hoja de cálculo en Google Sheets con 3 pestañas:
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Productos</h4>
                  <p className="text-sm text-gray-600">
                    Columnas: ID, Nombre, Categoría, Precio, Precio Original, Imagen, Especificaciones, Descripción, En Stock, Destacado
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Categorias</h4>
                  <p className="text-sm text-gray-600">
                    Columnas: ID, Nombre, Descripción, Imagen
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Config</h4>
                  <p className="text-sm text-gray-600">
                    Columnas: Clave, Valor (teléfono, email, dirección, etc.)
                  </p>
                </div>
              </div>
            </div>

            {/* Paso 2 */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                  2
                </span>
                <h3 className="text-lg font-bold text-gray-900">
                  Crea el Script de Google Apps
                </h3>
              </div>
              <p className="text-gray-600 mb-4">
                Ve a Extensions → Apps Script y pega este código:
              </p>
              <div className="relative">
                <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
                  <code>{scriptCode}</code>
                </pre>
                <button
                  onClick={copyToClipboard}
                  className="absolute top-2 right-2 p-2 bg-gray-800 hover:bg-gray-700 rounded-lg text-gray-400 hover:text-white transition-colors"
                >
                  {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Paso 3 */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                  3
                </span>
                <h3 className="text-lg font-bold text-gray-900">
                  Despliega el Script
                </h3>
              </div>
              <ol className="list-decimal list-inside space-y-2 text-gray-600">
                <li>Haz clic en Deploy → New deployment</li>
                <li>Selecciona tipo Web app</li>
                <li>En Execute as, selecciona Me</li>
                <li>En Who has access, selecciona Anyone</li>
                <li>Haz clic en Deploy y copia la URL</li>
              </ol>
            </div>

            {/* Paso 4 */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                  4
                </span>
                <h3 className="text-lg font-bold text-gray-900">
                  Actualiza la Web
                </h3>
              </div>
              <p className="text-gray-600">
                Pega la URL del script en el archivo <code className="bg-gray-100 px-2 py-1 rounded">src/hooks/useGoogleSheets.ts</code> en la constante <code className="bg-gray-100 px-2 py-1 rounded">GOOGLE_SHEETS_API_URL</code> y vuelve a compilar.
              </p>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
              <p className="text-blue-800 text-sm">
                <strong>💡 Tip:</strong> Una vez configurado, tu amigo solo necesita editar el Google Sheet para cambiar precios, agregar productos o modificar imágenes. Los cambios se reflejan automáticamente en la web.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
