## HTTP
### ¿Que es http?
Es un protocolo, es decir, un conjunto de reglas que permite que los dispositivos se entiendan entre sí, que hace posible la transferencia de información en la World Wide Web (WEB). Funciona como un lenguaje estándar para solicitar y entregar recursos, como páginas HTML, imágenes, videos, archivos, etc.
### ¿Cual es la estrucutra de una petición?
Una petición es un mensaje que envía el cliente al servidor para iniciar una acción, como solicitar un documento o enviar datos.

Su estructura consiste en:
 
- Línea de inicio.
- Cabeceras (Headers).
- Cuerpo (Body).

### ¿Cuales son los métodos más usados?
Un método es un verbo de acción que indica la operación que un cliente desea realizar sobre un recurso en un servidor.

Los más usados son:

- **Get:** Solicita una representación del recurso solicitado. No debe tener efectos secundarios en el servidor.
- **Put:** Reemplaza todas las representaciones actuales del recurso de destino con la carga de datos. Si el recurso no existe, lo crea.
- **Post:** Envía datos para ser procesados a un recurso específico. Causa cambios de estado o efectos secundarios en el servidor.
- **Delete:** Elimina el recurso solicitado.
- **Patch:** Aplica modificaciones parciales a un recurso.

### ¿Cuales son los códigos de estado?
Son respuestas de tres dígitos que un servidor web envía al cliente para indicar el resultado de una solicitud.

Los códigos de estado son los siguientes:

- **100:** La solicitud ha sido recibida y el proceso continúa.
- **200:** La solicitud fue recibida, entendida y aceptada.
- **300:** Se necesita una acción adicional por parte del ciente para completar la solicitud.
- **400:** La solicitud contiene una sitaxis incorrecta o no puede ser procesada.
- **500:** El servidor falló en procesar una solicitud aparentemente válida.

### ¿Qué son los encabezados?
Datos adicionales que van junto con una petición o respuesta HTTP. Viajan en pares de forma "nombre:valor". Se llaman así porque son el encabezado de las peticiones o respuestas, es decir, se leen antes del contenido principal.

Es una parte fundamental de la comunicación entre el cliente y el servidor, ya que controlan cuestiones de seguridad, rendimiento, formatos y compatibilidad.

*Ejemplo:*
```
GET/HTTP/1.1
Host:www.pagina.com
User-Agent:Chrome/137
Accept:text.html
```

### ¿Qué es la estructura de una URL?
URL significa Uniform Resource Locator, es una secuencia específica de caracteres que identifica y permite localizar y recuperar una información determinada en internet.

Consiste en:

- **Protocolo:** Indica al navegador a como conectarse a una página (https://).
- **Subdominio:** Cadena de letras o una palabra completa que apacere antes del primer punto de una URL (www.).
- **Dominio:** Parte principal de una URL que identifica a la Web (amazon).
- **Dominio de primer nivel (TLD):** "Top Level Domani", es la parte que va después del nombre de la Web (.com).
- **Subcarpeta:** Carpeta o directorio que se encuentra dentro del directorio superior en la jerarquía de la web (/tecnología).
- **Slug:** Identifica una página específica o una entrada a una Web, ayuda a comprender el contexto (/dispositivos-apple?).
- **Parámetros de URL:** Van después de un signo de interrogación, se componen de claves y valores (iphone).