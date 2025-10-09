## Tipos de datos en JavaScript
Una variable de JavaScript puede contener 8 tipos de datos:
- **Cadena (string)**
Un texto de caracteres entre comillas.
*Ejemplo:*
```
let color = "Yellow";
let lastName = "Peter";
```
- **Número (number)**
Un número que representa un valor matemático.
```
let length = 16;
let weight = 7.5;
```
- **Bigint**
Un número que representa un entero grande.
```
let x = 2418419n;
let y = BigInt(483911);
```
- **Booleano (boolean)**
Un tipo de datos que representa verdadero o falso.
```
let x = true;
let y = false;
```
- **Objeto**
Una colección de pares clave-valor de datos.
```
// Object
const person = {firstName:"John", lastName:"Doe"};

// Array object
const cars = ["Saab", "Volvo", "BMW"];

// Date object
const date = new Date("2022-03-25");
```
- **Indefinido (undefined)**
Una variable primitiva sin valor asignado.
```
let x;
let y;
```
- **Nulo (null)**
Un valor primitivo que representa la ausencia de objeto.
```
let x = null;
let y = null;
```
- **Símbolo (symbol)**
Un identificador único y primitivo.
```
const x = Symbol();
const y = Symbol();
```