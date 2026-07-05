# Librería de Validaciones JS - Proyecto Lavandería

## ¿Qué problema resuelve?
Esta librería proporciona un conjunto de utilidades ligeras en JavaScript puro (Vanilla JS) para validar los datos de entrada en formularios web de registro. Específicamente, está adaptada para el módulo de atención de la **Lavandería EL Lavadero**, resolviendo el problema de ingresos de datos erróneos (como correos mal formateados, contraseñas que no cumplen el formato o edades incorrectas) y automatiza el cálculo de precios y folios de tickets para agilizar el servicio al cliente sin depender de frameworks pesados.

## Instalación
Para implementar esta librería en tu proyecto, no requieres herramientas de Node ni dependencias. Solo descarga el archivo `utileria.js` y agrégalo en tu documento HTML dentro de la etiqueta `<head>`:

```html
<script src="js/utileria.js"></script>


Uso y Ejemplos de Código

A continuación se muestran ejemplos prácticos de cómo invocar las funciones principales desde cualquier parte de tu script una vez vinculada la librería.

1. Validación de Correo Electrónico:
Evalúa si la cadena de texto ingresada tiene una estructura válida de email.

let esValido = Correo("cliente@correo.com");
console.log(esValido); // Retorna: true

2. Validación de Contraseña de Seguridad (PIN numérico):
Valida que la contraseña contenga únicamente números y tenga un límite máximo de 6 dígitos, tal como lo exige el formulario.

let passValida = validarPassword("123456");
console.log(passValida); // Retorna: true

3. Cálculo de Edad Exacta:
Calcula los años cumplidos de un cliente tomando en cuenta años bisiestos y el mes actual.

let edadCliente = calcularEdad("2003-10-30"); 
console.log("El cliente tiene: " + edadCliente + " años");

4. Funciones de Negocio (Sección Libre):
Automatización de tareas específicas para la lavandería.

// Calcula el costo de 12 kilos a $20 el kilo (aplica 10% de descuento automático al pasar de 10kg)
let totalCosto = calcularTotalLavanderia(12, 20);
console.log("Total a cobrar: $" + totalCosto); // Retorna: 216

// Genera un identificador de ticket basado en el nombre
let miFolio = generarFolioTicket("Eduardo");
console.log("Folio generado: " + miFolio); // Retorna: TKT-EDU-5432