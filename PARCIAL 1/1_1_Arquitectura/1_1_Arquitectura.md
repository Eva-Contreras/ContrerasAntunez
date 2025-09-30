## Arquitectura de las aplicaciones web
### Por el módulo de comunicación:
#### Cliente-Servidor

Tipo de arquitectura que consta de dos elementos: el **servidor** es el que brinda los servicios y el **cliente** es el que los consume, donde cada servidor puede atender a varios clientes, además de que ambos elementos deben estar conectados a una red, como lo es el internet. Un ejemplo de esto puede ser el buscador de Google, en el cual el cliente escribe en la barra la información que busca y el servidor devuelve una lista de opciones con lo que desea.

Sus principales características son: 

- Gestión centralizada
- Uso compartido de recursos
- Integridad de los datos
- Compatibilidad

![Arquitectura Cliente-Servidor](https://contenidos.sucerman.com/nivel4/desarrollo/unidad2/img/modelo-cliente-servidor.png)

#### Punto a punto

Tipo de arquitectura en donde cada elemento juega el papel de **servidor** y **cliente**. A cada elemento se le conoce como *punto* y desempeñan las mismas responsabilidades dependiendo si se requiere procesar o emitir solocitudes de otros puntos. Es una arquitectura mucho más compleja que la de *Cliente-Servidor*, pero es la mejor opcion si se busca un enfoque descentralizado. Un ejemplo de esto es cuando se conectan dos PCs por medio de un cable Ethernet para compartir archivos.

Sus principales características son:

- Enlace directo
- Mayor seguridad
- Baja latencia
- Transmisión rápida y estable

![Arquitectura Punto a Punto](https://javiergarciaescobedo.es/images/stories/despliegue_web/01_implantacion/P2P-network.svg.png)


### Por la manera en que se organiza el código de la aplicación:
#### Monolito

Tipo de arquitectura en la que todos los elementos se encuentran en un mismo lugar, es decir, una única base de código. Este tipo es muy tradicional, ya que si se compara con otros tipos mas modernos, este deja de ser ágil ya que si se encuentra algún error o se realiza algún cambio en una función, se tiene que compilar y probar toda la plataforma. Básicamente el sistema actúa tanto como **cliente** como **servidor**. Un ejemplo de esto son las aplicaciones bancarias, donde todas las acciones se hacen en el mismo sistema.

Sus principales características son:

- Autonomía
- Elementos interconectados
- Una única base de código
- Gestiona múltiples tareas relacionadas

![Arquitectura monolito](https://jugnicaragua.org/wp-content/uploads/2024/05/Monolitico_.png)

#### Sistema en capas

Tipo de arquitectura que consiste en dividir la aplicación en capas para que cada rol este bien definido. Suelen ser 3 o 4 capas, pero las más importantes son 3 que son: la capa de *presentación*, que es en la que el **cliente** interactúa para realizar solicitudes, la capa de *negocio*, que es en la que el **servidor** interactúa para conocer las solicitudes, y la capa de *base de datos*, donde se procesan las soliitudes. Las capas son independientes entre sí para que funcionen por separado, pero al mismo tiempo trabajan comunicandose entre sí todo el tiempo. Un ejemplo de esto es Amazon, ya que ahí los clientes hacen sus pedidos mientras que los que están detrás del sistema realizan los envíos.

Sus principales características son:

- Seguridad
- Separación de responsabilidades
- Fácil de implementar
- Se comunican de forma horizontal

![Arquitectura en capas](https://rjcodeadvance.com/wp-content/uploads/2019/07/Arquitecura-tradicional-en-capas-estilos-de-arquitectura-y-patrones-de-software-1.png)

#### Microservicio

Tipo de arquitectura compleja en la que cada capacidad del sistema se separa en un elemento independiente, es decir, cada tarea que obtiene la aplicación es realizada por diferentes elementos, de esta forma cada microservicio se comunica con los otros haciendo tareas simultaneamente y resolviendo los problemas rápidamente. Muchos comparan esta arquitectura con la monolítica ya que esta es muchísimo más eficiente que la otra, ya que el separar el sistema en microservicios facilita mucho al momento de añadiir elementos sin la necesidad de depurar todo el sistema, es como una versión mejorada de la monolítica. Aquí, el **cliente** y el **servidor** interactúan de una mejor forma. Un ejemplo de esto es Netflix, donde las listas de reproducción, las recomendaciones y los usuarios se encuentran en microservicios diferentes.

Sus principales características son:

- Resilencia mejorada
- Flexibilidad
- Capacidad de recuperación
- Enfoque más abierto

![Arquitectura de Microservicios](https://www.hiberus.com/crecemos-contigo/wp-content/uploads/2024/06/img461.jpg)

#### Serverless

Tipo de arquitectura donde no hay servidores físicos ni maquinas virtuales, todo se encuentra en la nube. Aquí, el **servidor** crea el código y lo manda al proveedor de nube el cual ejecuta todo a cualquier escala. Permite al **cliente** acceder a los servicios, solamente que atenderlo tomará más tiempo y recursos, pero para ello existen los proveedores externos. Un ejemplo de esto es la aplicación de Google Cloud, la cual consiste basicamente en servidores en la nube.

Sus principales características son:

- No cobran si no se usan
- Velocidad y productividad
- Fácil de usar
- Realiza multitareas

![Arquitectura Serverless](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzPd1r7pG23E3Hv5S3uJgBft_s9tj1FWqwxg&s)

*Fuentes:*

- <https://reactiveprogramming.io/blog/es/estilos-arquitectonicos/cliente-servidor>
- <https://www.supermicro.com/es/glossary/client-server-architecture>
- <https://www.open.edu/openlearn/science-maths-technology/an-introduction-web-applications-architecture/content-section-1.1>
- <https://www.sciencedirect.com/topics/computer-science/peer-to-peer-architectures>
- <https://www.studocu.com/latam/document/universidad-del-caribe-republica-dominicana/redes-informaticas-i/la-topologia-punto-a-punto/122607880>
- <https://www.talend.com/resources/monolithic-architecture/>
- <https://vfunction.com/blog/what-is-monolithic-application/>
- <https://www.ibm.com/think/topics/monolithic-architecture>
- <https://reactiveprogramming.io/blog/es/estilos-arquitectonicos/capas>
- <https://invozone.com/blog/web-application-architecture/#what-is-3tier-web-application-architecture>
- <https://www.intel.la/content/www/xl/es/cloud-computing/microservices.html#:~:text=La%20arquitectura%20de%20microservicios%20es,suelto%20de%20una%20interfaz%20est%C3%A1ndar.>
- <https://cloud.google.com/learn/what-is-microservices-architecture?hl=es-419#microservices-architecture-defined>
- <https://www.redhat.com/es/topics/microservices/what-are-microservices>
- <https://relevant.software/blog/serverless-architecture/#What_is_a_serverless_architecture>
- <https://www.datadoghq.com/knowledge-center/serverless-architecture/#benefits-and-challenges-of-serverless-architecture>