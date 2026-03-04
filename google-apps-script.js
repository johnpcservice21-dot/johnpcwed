/**
 * Google Apps Script para John PC Service
 * 
 * INSTRUCCIONES:
 * 1. Ve a tu Google Sheet
 * 2. Extensions → Apps Script
 * 3. Borra el código por defecto y pega este
 * 4. Reemplaza TU_SHEET_ID_AQUI con el ID de tu Google Sheet
 * 5. Deploy → New deployment → Web app
 * 6. Execute as: Me, Who has access: Anyone
 * 7. Copia la URL y pégala en useGoogleSheets.ts
 */

function doGet(e) {
  // ⬇️ REEMPLAZA ESTO CON EL ID DE TU GOOGLE SHEET
  const SHEET_ID = '1G7ECqx1tgXQKOY3Pf26rRBa6PPgFos7NZrMavb0ZY2o';
  
  // Headers CORS
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET',
    'Access-Control-Allow-Headers': 'Content-Type'
  };
  
  try {
    const ss = SpreadsheetApp.openById(SHEET_ID);
    
    // ========== PRODUCTOS ==========
    const productsSheet = ss.getSheetByName('Productos');
    if (!productsSheet) {
      throw new Error('No se encontró la hoja "Productos"');
    }
    
    const productsData = productsSheet.getDataRange().getValues();
    const products = [];
    
    // Saltar header (fila 0)
    for (let i = 1; i < productsData.length; i++) {
      const row = productsData[i];
      if (!row[0]) continue; // Saltar filas vacías
      
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
    
    // ========== CATEGORÍAS ==========
    const categoriesSheet = ss.getSheetByName('Categorias');
    const categories = [];
    
    if (categoriesSheet) {
      const categoriesData = categoriesSheet.getDataRange().getValues();
      
      for (let i = 1; i < categoriesData.length; i++) {
        const row = categoriesData[i];
        if (!row[0]) continue;
        
        categories.push({
          id: row[0]?.toString() || '',
          name: row[1]?.toString() || '',
          description: row[2]?.toString() || '',
          image: row[3]?.toString() || ''
        });
      }
    }
    
    // ========== CONFIG ==========
    const configSheet = ss.getSheetByName('Config');
    const config = {};
    
    if (configSheet) {
      const configData = configSheet.getDataRange().getValues();
      
      for (let i = 1; i < configData.length; i++) {
        const row = configData[i];
        if (row[0]) {
          config[row[0]] = row[1]?.toString() || '';
        }
      }
    }
    
    // Respuesta exitosa
    const result = {
      success: true,
      products: products,
      categories: categories,
      config: config,
      lastUpdated: new Date().toISOString()
    };
    
    return ContentService
      .createTextOutput(JSON.stringify(result))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Respuesta de error
    const errorResult = {
      success: false,
      error: error.message,
      products: [],
      categories: [],
      config: {}
    };
    
    return ContentService
      .createTextOutput(JSON.stringify(errorResult))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Función para probar desde el editor
function test() {
  const result = doGet({});
  Logger.log(result.getContent());
}
