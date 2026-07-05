

**Nombre:** Jiménez Mendoza Eduardo

---

## ¿Qué problema resuelve?

Esta librería proporciona un conjunto de utilidades desarrolladas en **JavaScript puro** para validar los datos de entrada en formularios web de registro.

Su objetivo es evitar el ingreso de datos erróneos, como:

- Correos electrónicos con formato incorrecto.
- Contraseñas que no cumplen con los requisitos establecidos.
- Edades inválidas o mal calculadas.

Además, incorpora funciones orientadas al negocio para automatizar el cálculo de precios y la generación de folios de tickets, agilizando la atención al cliente sin depender de frameworks o librerías externas.

---

## Instalación

No requiere **Node.js**, gestores de paquetes ni dependencias externas.

Simplemente se descarga el archivo `utileria.js` y se inclúye en el documento HTML dentro de la etiqueta `<head>`.

```html
<script src="js/utileria.js"></script>
```

---

# Uso y ejemplos

A continuación se muestran algunos ejemplos de cómo utilizar las funciones de la librería.

## 1. Validación de correo electrónico

Evalúa si la cadena de texto ingresada tiene un formato válido de correo electrónico.

```javascript
function Correo(correo){
    //Creacion de una constante que almacene una expresión usando el metodo .test()
    //El cual responde con un booleano, si el texto tiene el formato correcto enotonces 
    //se convierte en true y retorna la función.
    const regular = /^[^\s@]+@[^\s@]+\.[^\s@]+$/ ;
    return regular.test(correo);
}
```

---

## 2. Solo letras

verifica que dentro de la cadena solo esten puras letras y no cualquier otro caracter

```javascript

function Letras(texto) {
    // Acepta letras mayúsculas, minúsculas, espacios y vocales acentuadas
    const regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
    return regex.test(texto);
}
```

---
## 3. longitud

verfica la longitud de una cadena

```javascript
function validarLongitud(numero, maxLongitud) {
    // Convertimos a string por si mandan un tipo number
    let textoNum = numero.toString();
    return textoNum.length <= maxLongitud;
}

```

---

## 4. Cálculo de edad

Calcula la edad exacta de una persona a partir de su fecha de nacimiento.

```javascript
function esMayorDeEdad(fechaNacimiento) {
    const edad = calcularEdad(fechaNacimiento);
    return edad >= 18;
}

```

---
## 5. Verficar si es mayor de edad

Verifica si es mayor de edad o no

```javascript
function esMayorDeEdad(fechaNacimiento) {
    const edad = calcularEdad(fechaNacimiento);
    return edad >= 18;
}
```

---

## 6. Validación de contraseña 

Valida que la contraseña:

- Contenga números.
- Contenga letras (mayusculas y minusculas).
- Contenga caracter especial.
- Tenga un minimo de 8 caracteres.

```javascript
function validarPassword(password) {
     const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&.#_\-+=])[A-Za-z\d@$!%*?&.#_\-+=]{8,}$/;
    return regex.test(password);
}

```

---

## 6. Funciones de negocio

### Calcular total de lavandería

Calcula el costo del servicio aplicando automáticamente un **10% de descuento** cuando el peso supera los **10 kg**.

```javascript
function calcularTotalLavanderia(kilos, precioPorKilo) {
    let total = kilos * precioPorKilo;
    if (kilos > 10) {
        total = total * 0.90; // 10% de descuento
    }
    return total;
}
```

---

### Generar folio de ticket

Genera un identificador único para el ticket utilizando el nombre del usuario.

```javascript
function generarFolioTicket(nombreCliente) {
    let prefijo = "CLI";
    if (nombreCliente && nombreCliente.length >= 3) {
        prefijo = nombreCliente.substring(0, 3).toUpperCase();
    }
    const aleatorio = Math.floor(Math.random() * 9000) + 1000; 
    return `TKT-${prefijo}-${aleatorio}`;
}
```

---

# Funciones incluidas

| Función | Descripción |
|----------|-------------|
| `Correo(correo)` | Valida el formato de un correo electrónico. |
| `Letras(texto)` | Valida que acepte letras mayusculas y minusculas y acentos. |
| `validarLongitud(numero, maxLongitud)` |Valida longitud de numero. |
| `calcularEdad(fechaNacimiento)` | Calcula la edad a partir de una fecha de nacimiento. |
| `esMayorEdad(fechaNacimiento)` | Valida si es mayor de edad. |
| `validarPassword(password)` | Valida que sea un minimo de 8 caracteres y que incluya letras Mayusculas-Minusculas y algún caracter especial. |
| `calcularTotalLavanderia(kilos, precioKilo)` | Calcula el costo total aplicando descuentos cuando corresponde. |
| `generarFolioTicket(nombre)` | Genera un folio único para los tickets de servicio. |

---

# Requisitos

- Navegador web moderno.
- JavaScript habilitado.
- No requiere frameworks.
- No requiere instalación de dependencias.

---
## Captura del formulario

![Formulario](img/uno.png)
![Formulario](img/dos.png)
![Formulario](img/tres.png)


## Video demostrativo

