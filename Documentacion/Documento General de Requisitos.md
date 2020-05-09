# Especificación de requisitos 
## Del proyecto <Clean-Up>

Versión 0.1  
Generada por <Departamento de Requisitos>  
<Clean-Up Group>  
<27/04/2020>  

Índice
=================
- [Especificación de requisitos](#especificaci%c3%b3n-de-requisitos)
  - [Del proyecto <Clean-Up>](#del-proyecto-clean-up)
- [Índice](#%c3%8dndice)
  - [Versiones](#versiones)
  - [__1. Introducción__](#1-introducci%c3%b3n)
    - [__1.1 Objetivo del documento__](#11-objetivo-del-documento)
    - [__1.2 Ámbito del proyecto__](#12-%c3%81mbito-del-proyecto)
    - [__1.3 Definiciones, acrónimos y abreviaturas__](#13-definiciones-acr%c3%b3nimos-y-abreviaturas)
    - [__1.5 Resumen del documento__](#15-resumen-del-documento)
  - [__2. Vista general del producto__](#2-vista-general-del-producto)
    - [__2.1 Perspectiva del producto__](#21-perspectiva-del-producto)
    - [__2.2 Funciones del producto__](#22-funciones-del-producto)
    - [__2.3 Restricciones del producto__](#23-restricciones-del-producto)
    - [__2.4 Perfiles de usuario__](#24-perfiles-de-usuario)
    - [__2.5 Suposiciones y dependencias__](#25-suposiciones-y-dependencias)
    - [__3 Interfaces externas__](#3-interfaces-externas)
      - [3.1 Interfaces con el usuario](#31-interfaces-con-el-usuario)
      - [__3.2 Interfaces con el Hardware__](#32-interfaces-con-el-hardware)
      - [__3.3 Interfaces con el Software__](#33-interfaces-con-el-software)
  - [__4. Requisitos__](#4-requisitos)
    - [ID - Nombre del requisito](#id---nombre-del-requisito)
      - [Dependencias](#dependencias)
      - [Priodidad](#priodidad)
      - [Justificación](#justificaci%c3%b3n)
    - [__4.1 Precedencia y prioridad__](#41-precedencia-y-prioridad)
    - [__4.2 Funcionales__](#42-funcionales)
    - [__4.3 Calidad de Servicio__](#43-calidad-de-servicio)
      - [__4.3.1 Rendimiento__](#431-rendimiento)
      - [__4.3.2 Seguridad__](#432-seguridad)
      - [__4.5.4 Reusabilidad__](#454-reusabilidad)
      - [4.5.7 Fecha de entrega](#457-fecha-de-entrega)
  - [__5. Verificación__](#5-verificaci%c3%b3n)
  
## Versiones
| Name | Date    | Reason For Changes  | Version   |
| ---- | ------- | ------------------- | --------- |
| Departamento de Requisitos | 27/04/2020 | Primera versión | 0.1 |
| Departamento de Requisitos | 07/05/2020 | Segunda Versión | 0.2 |  

## __1. Introducción__
### __1.1 Objetivo del documento__
Este documento está destinado a ser un primer paso en lo referente a las restricciones y requisitos que debe o puede tener el proyecto. También servirá como pre-contrato entre nuestro cliente y nosotros y para sentar las bases de lo que será el proyecto.
### __1.2 Ámbito del proyecto__
El producto pretende ofrecer y poner a disposición de las diferentes instituciones oficiales de una provincia una plataforma para poder comunicarse de alguna manera con sus ciudadanos sobre la ciudad en la que viven. Para ello, hemos creado una plataforma en la que el ciudadano podrá expresar las mejoras y el mantenimiento que distintas zonas de la ciudad necesitan, así como el Ayuntamiento o las instituciones pertinentes podrán tener conocimientos sobre las prioridades de la población.
Para comunicarse, el ciudadano solo tendrá que subir a través de la aplicación una incidencia que haya en la ciudad, así como desperfectos. Cuantos más ciudadanos se hayan quejado de una incidencia, más prioridad tendrá.

### __1.3 Definiciones, acrónimos y abreviaturas__
- __Usuario:__ serán los ciudadanos que usarán el software para comunicar desperfectos.
- __Agente:__ serán funcionarios del ayuntamiento que resolverán incidencias generadas por usuarios en una provincia de España.
- __Subscripción:__ pago por mensualidad, a través de adeudos por domiciliación.
- __Interfaces:__ es posible entenderlo como una superficie con el objeto de aportar información a través de su textura, forma o color.
- __Cliente:__ es el ayuntamiento en este caso, pero podría extenderse a cualquiera persona o empresa que quisiese adquirir nuestro sistema.
- __RF:__ Requisitos Funcionales.
- __RNF:__ Requisitos No Funcionales.

### __1.5 Resumen del documento__
En este documento se especifican los requisitos que en un principio se han educido para nuestro proyecto. En él podrás visualizar los requisitos, su prioridad, su justificación y las dependencias con otros requisitos. Además se especifican las principales funciones que tendrá el sistema.
## __2. Vista general del producto__
### __2.1 Perspectiva del producto__
Se trata de una plataforma web nueva compuesta por un servidor que atenderá las peticiones de los usuarios y los agentes, una base de datos que almacenará toda la información necesaria para permitir el correcto funcionamiento de la plataforma, y los clientes que permitirán interactuar y recibir información del servidor.
### __2.2 Funciones del producto__
- El usuario podrá crear incidencias con imágenes, titulo, una breve descripción y la dirección de la misma.
- El usuario y el agente tendrán una pestaña en la que puede visualizar las incidencias creadas/asignadas.
- Si varios usuarios suben la misma incidencia, el sistema clasificará la primera incidencia como la principal y las demás como sub-incidencias si el usuario confirma que es la misma.
- Un agente podrá trabajar con esas incidencias que llegan a su portal, permitiéndoles responder a los usuarios para pedir más información o para indicar que está arreglado, por lo que la incidencia cambiaría a otro estado (cerrado). Una vez cerrado, todas las sub-incidencias de esa incidencia principal serán cerradas también, notificando a
todos los usuarios que crearon esas incidencias.

### __2.3 Restricciones del producto__
- Se utilizará una base de datos NoSQL
- Se podrán subir un máximo de tres fotografías por incidencia.
- Los archivos pueden ocupar hasta 10mb, en formato .JPG,    .TIF y :PNG.
- El sistema operativo para la aplicación del administrador será Windows 10 Pro.
- Se usará el certificado https.
- El sistema deberá cumplir la Ley de Protección de Datos de Carácter Personal (LOPD).  

### __2.4 Perfiles de usuario__
Los perfiles de usuarios serán aquellos ciudadanos que se preocupan por sus entornos, ya que la única forma en la que se puede arreglar algo en la vía pública es a través del ayuntamiento.
El uso del software también se podrá ver afectado por la experiencia técnica de cada usuario y su nivel educativo.
Los agentes serán otro perfil de usuario, y son los trabajadores del ayuntamiento a los que se les asignarán las incidencias.
Los adminitradores también son otro perfil de usuario, que son el equipo encargado de administrar todo el sistema.

### __2.5 Suposiciones y dependencias__
El sistema dependerá de otros sistemas y librerías externos:
- NodeJS: Backend hecho en javascript.
- NPM: Gestor de paquetes de NodeJS.
- Firebase de Google: Base de datos nosql, sistema de gestión de usuarios que por correo y/o cuenta de Google, almacenamiento de archivos.
- Bulma: Framework de CSS.
Además, la plataforma empleará un servicio de geolocalizacion con una api de geolocalización (propia del navegador o externa) y un servicio de mapas, o bien OpenStreetMap o Google Maps.

### __3 Interfaces externas__
#### 3.1 Interfaces con el usuario 
Todos usuarios serán presentados con la página de incidencias, que sería equivalente al de inicio, al entrar en la plataforma web. Si el usuario no ha
iniciado sesión, se le presentará la opción de iniciar sesión como viene a continuación:

![Inicio de sesión](https://github.com/tomgreef/clean-up/blob/master/Recursos/Iniciar_Session.jpg)

Una vez haya iniciado sesión tendrá la opción de crear nuevas incidencias o editar/ver las que ya tenga creadas, y además podrá ver lo que sucede por lo demás en su
alrededor. A continuación, un ejemplo de una incidencia creada por un usuario:

![Incidencia](https://github.com/tomgreef/clean-up/blob/master/Recursos/Pagina_Inicial.jpg)

Finalmente, los agentes accederán de la misma forma a la plataforma, pero tendrán un interfaz más ampliado respecto a los usuarios, ya que van tener la posibilidad de
administrar todas las incidencias, y verlas en un mapa con detalles.

![Mapa](https://github.com/tomgreef/clean-up/blob/master/Recursos/Agente_Incidencias.jpg)

#### __3.2 Interfaces con el Hardware__
El sistema necesitará un servidor en el que ejecutar el backend, y los dispositivos de los usuarios y agentes (ordenadores o móviles). En el caso de los dispositivos móviles, necesitarán disponer de GPS. El servicio utilizará el protocolo HTTPS.
#### __3.3 Interfaces con el Software__
La plataforma empleará Firebase de Google como bases de datos, sistema de almacenamiento (Cloud Storage) y autentificación.
La plataforma se comunica con el GPS del smartphone para obtener información geográfica sobre dónde se encuentra el usuario a la hora de crear una incidencia. La comunicación entre la base de datos y el portal web consiste en operaciones relacionadas tanto con la lectura como con la modificación de los datos
## __4. Requisitos__
### ID - Nombre del requisito
Descripción
#### Dependencias 
#### Priodidad
#### Justificación

### __4.1 Precedencia y prioridad__
| ID    | Título                         | Descripción                                                                                                                      | Prioridad   | Precedencia        | Tipo         |
|-------|--------------------------------|----------------------------------------------------------------------------------------------------------------------------------|-------------|--------------------|--------------|  
| R1    | Conexión a Internet            | Deberán tener una conexión estable a internet                                                                                    | Fundamental |                    | No Funcional |
| R1.1  | Navegador Web                  | Es necesario que el navegador web soporte HTML5, geolocalización y subida de imágenes                                            | Fundamental |                    | No Funcional |
| R2    | Aplicación de escritorio       | Los agentes necesitan instalar la aplicación en su PC                                                                            | Fundamental | R3, R3.1           | No Funcional |
| R2.1  | Caché                          | La aplicación de escritorio tendrá un caché para poder trabajar sin conexión a Internet                                          | Fundamental | R3                 | Funcional    |
| R2.2  | Sistema operativo              | Deben tener un sistema operativo Windows 10 home o Pro                                                                           | Fundamental |                    | No Funcional |
| R3    | Crear cuenta                   | Todo el mundo podrá crearse una cuenta desde la plataforma web                                                                   | Fundamental | R1                 | Funcional    |
| R3.1  | Cuenta agente                  | Los agentes tendrán acceso a más funcionalidades que los usuarios normales                                                       | Fundamental | R3.1               | Funcional    |
| R4    | GDPR                           | Los usuarios y agentes deberán aceptar las normas establecidas por Clean-Up sobre la ley de protección de datos                  | Fundamental | R1, R23            | Funcional    |
| R5    | Verificación                   | Los usuarios deben de verificar su teléfono móvil y correo electrónico                                                           | Fundamental | R1, R3             | Funcional    |
| R5.1  | Verificación de teléfono       | Los usuarios verificarán su teléfono a través de un SMS                                                                          | Fundamental | R1, R3             | No Funcional |
| R5.2  | Verificación de cuenta         | Los usuarios verificarán su cuenta a través del correo electrónico                                                               | Fundamental | R1, R3             | No Funcional |
| R6    | Iniciar sesión                 | Cualquier persona registrada podrá iniciar sesión en el sistema desde la plataforma web                                          | Fundamental | R1, R3             | Funcional    |
| R6.1  | Tiempo de inactividad          | La sesión se mantendrá iniciada por un máximo de 1 hora después de que comience la inactividad                                   | Fundamental | R1, R3             | Funcional    |
| R7    | Crear incidencias              | El usuario y agente podrán crear incidencias con imágenes, título, descripción y coordenadas                                     | Fundamental | R1, R3, R3.1, R5   | Funcional    |
| R7.1  | Imágenes en una incidencia     | Las incidencias se deberán subir con imágenes                                                                                    | Fundamental | R1, R1.1, R6       | Funcional    |
| R7.1.1| Máximo de imágenes             | El número máximo de imágenes que se pueden subir son 3                                                                           | Fundamental | R1, R1.1           | No Funcional |
| R7.1.2| Formato de imágenes            | El formato de las imágenes debe ser .PNG o .JPG                                                                                  | Fundamental | R1, R1.1           | No Funcional |
| R7.1.3| Capacidad de imágenes          | Las imágenes ocuparán como máximo 50mb por incidencia                                                                            | Fundamental | R1, R1.1           | No Funcional |
| R7.2  | Longitud del texto             | Los textos estarán limitados a un número máximo de 250 caracteres                                                                | Deseable    |                    | No Funcional |
| R7.3  | Coordenadas GPS                | Las coordenadas se obtienen desde el GPS del móvil o a través del uso de coordenadas                                             | Fundamental | R1, R1.1           | No Funcional |
| R7.3.1| Tipo de coordenadas            | Las coordenadas deberán estar expresadas en grados, minutos y segundos                                                           | Fundamental | R1, R1.1           | No Funcional |
| R7.4  | Duplicado de incidencias       | El sistema reconocerá si la incidencia ya existe en la base de datos, por lo que preguntará al creador si es la misma            | Fundamental |                    | Funcional    |
| R7.4.1| Reconocimiento duplicados      | El sistema reconocerá las posibles incidencias duplicadas a mediante el uso de las coordenadas                                   | Fundamental | R7.3               | No Funcional |
| R8    | Información al usuario         | Se presentará al usuario toda información legal necesaria                                                                        | Fundamental |                    | Funcional    |
| R9    | Editar incidencia              | Los agentes y usuarios podrán editar las incidencias que se les hayan asignado o creado, respectivamente                         | Fundamental | R1, R3, R6         | Funcional    |
| R10   | Eliminar incidencia            | Los agentes y usuarios podrán eliminar las incidencias que se les hayan asignado o creado, respectivamente                       | Fundamental | R1, R3, R6         | Funcional    |
| R11   | Fusionar incidencias           | Los agentes tendrán la posibilidad de fusionar una o varias incidencias                                                          | Deseable    | R1, R3, R6         | Funcional    |
| R12   | Seleccionar incidencias        | Los agentes deberán poder seleccionar varias incidencias a la vez                                                                | Deseable    | R1, R3, R6         | Funcional    |
| R13   | Notificaciones                 | Los usuarios y agentes podrán comentar las incidencias. Tras cada comentario, se notificará a los usuarios implicados            | Fundamental | R1, R3, R6         | Funcional    |
| R13.1 | Recibir notificaciones         | Las notificaciones serán a través de correo electrónico                                                                          | Deseable    | R1, R3, R6         | No Funcional |
| R14   | Asignación de incidencias      | Se podrán asignar las incidencias a un agente                                                                                    | Deseable    | R1, R3             | Funcional    |
| R15   | Ajustes de perfil              | Los agentes y usuarios podrán ajustar su perfil en la sección de ajustes                                                         | Fundamental | R1, R3, R6         | Funcional    |
| R15.1 | Cambiar datos en ajustes       | Los agentes y usuarios podrán cambiar sus datos en la sección de ajustes                                                         | Fundamental | R1, R3, R6         | Funcional    |
| R15.2 | Eliminar cuenta en ajustes     | Los agentes y usuarios podrán eliminar su cuenta en la sección de ajustes                                                        | Fundamental | R1, R3, R6         | Funcional    |
| R15.3 | Preferencia de notificaciones  | Los agentes y usuarios podrán cambiar la prefencia de las notificaciones en la sección de ajustes                                | Fundamental | R1, R3, R6         | Funcional    |
| R16   | Restablecer contraseña         | Los usuarios y agentes podrán restablecer su contraseñas en la pantalla de inicio de sesión y en los ajustes de perfil           | Fundamental | R1, R3, R6         | Funcional    |
| R17   | Estado de incidencias          | Los agentes podrán cambiar el estado de las incidencias                                                                          | Deseable    | R1, R3, R6, R9     | Funcional    |
| R18   | Lista de incidencias           | Los usuarios y agentes tendrán una pestaña donde podrán ver todas las incidencias que hayan creado o sido asignados              | Deseable    | R1, R3, R6         | Funcional    |
| R18.1 | Máximo numero incidencias      | Las listas enseñarán un maximo de 10 incidencias por página                                                                      | Opcional    |                    | No Funcional |
| R19   | Página de inicio               | Muestra una lista de incidencias relevantes al usuario y agente                                                                  | Fundamental | R1, R3, R6         | Funcional    |
| R20   | Mapa de incidencias            | Los agentes tendrán acceso a un mapa con todas las incidencias señalizadas por ubicación                                         | Deseable    | R1, R3, R6         | Funcional    |
| R21   | Estadísticas                   | Los agentes podrán ver una pestaña de estadísticas sobre las incidencias                                                         | Opcional    | R1, R3, R6         | Funcional    |
| R22   | Archivar incidencias           | Las incidencias deberán ser archivadas después de estar más de dos años en estado cerrado                                        | Opcional    | R9                 | Funcional    |
| R23   | Certificación SSL              | Se usarán certificaciones SSL                                                                                                    | Fundamental |                    | No Funcional |
| R24   | Protocolo del servidor         | La web se servira mediante HTTPS                                                                                                 | Deseable    |                    | No Funcional |

### __4.2 Funcionales__
__R2.1 - Caché__  
La aplicación de escritorio tendrá un caché para poder seguir resolviendo un número limitado de incidencias sin tener la conexión a internet.   
__Precedencia:__ R3  
__Prioridad:__ Fundamental  

__R3 - Crear cuenta__  
Todos el mundo podrá crearse una cuenta desde la plataforma web.    
__Precedencia:__ R1  
__Prioridad:__ Fundamental   

__R3.1 - Cuenta Agente__  
Los agentes tendrán acceso a más funcionalidades que los usuarios normales.  
__Precedencia:__ R2  
__Prioridad:__ Fundamental  

__R4 - GDPR__  
Los usuarios y agentes deberán aceptar las normas establecidas por Clean-Up sobre la ley de la protección de datos.  
__Precedencia:__ R1, R23  
__Prioridad:__ Fundamental  

__R5 - Verificación__  
Los usuarios deben de verificar su teléfono móvil y su cuenta.    
__Precedencia:__ R1, R3  
__Prioridad:__ Fundamental  

__R6 - Iniciar sesión__  
Cualquier persona registrada podrá iniciar sesión en el sistema.  
__Precedencia:__ R1, R3    
__Prioridad:__ Fundamental  

__R6.1 - Tiempo de inactividad__  
La sesión se mantendrá iniciada por un máximo de 1 hora después de que comience la inactividad.  
__Precedencia:__ R1, R3    
__Prioridad:__ Fundamental  

__R7 - Crear incidencias__  
El usuario y agente podrán crear incidencias con imágenes, título, descripción y coordenadas para ser resueltos por los agentes del cliente.  
__Precedencia:__ R1, R3, R3.1, R6  
__Prioridad:__ Fundamental  

__R7.1 - Imágenes en una incidencia__  
Las incidencias se deberán subir con imágenes.    
__Precedencia:__ R1, R1.1, R6  
__Prioridad:__ Fundamental  

__R7.4 - Duplicado de incidencia__  
El sistema reconocerá si la incidencia ya existe en la base datos, por lo que pedirá al creador si es la misma. En caso afirmativo, se añadirá esa incidencia como sub-incidencia de la que estaba en la base de datos anteriormente. En caso contrario, se creará una nueva incidencia.  
__Precedencia:__ Ninguna  
__Prioridad:__ Fundamental   

__R8 - Información al usuario__  
Se presentará al usuario toda información necesaria, tanto legal como el funcionamiento del mismo en la parte inferior de la plataforma.  
__Precedencia:__ Ninguna  
__Prioridad:__ Fundamental  

__R9 - Editar una incidencia__  
Los agentes y usuarios podrán editar las incidencias. Los usuarios sólo podrán modificar las incidencias creadas, mientras los agentes puedan cambiar cualquier incidencia. 
La opción de eliminar una incidencia se mostrará a través de un botón que hará que el sistema pida por una confirmación del usuario.  
__Precedencia:__ R1, R3, R6  
__Prioridad:__ Fundamental  

__R10 - Eliminar una incidencia__  
Los agentes y usuarios podrán eliminar las incidencias. Los usuarios sólo podrán modificar las incidencias creadas, mientras los agentes puedan cambiar cualquier incidencia. 
La opción de eliminar una incidencia se mostrará a través de un botón que hará que el sistema pida por una confirmación del usuario.  
__Precedencia:__ R1, R3, R6  
__Prioridad:__ Fundamental  

__R11 - Fusionar incidencias__  
Los agentes tendrán la posibilidad de fusionar una o varias incidencias, seleccionándolas y eligiendo la opción de fusionar. Esto permitirá al agente seleccionar una incidencia como principal y vincular los demás como un sub-incidencia del principal seleccionado.  
__Precedencia:__ R1, R3, R6    
__Prioridad:__ Deseable  

__R12 - Seleccionar incidencias__  
Los agentes deberán poder seleccionar varias incidencias a la vez para poder gestionarlas simultáneamente.  
__Precedencia:__ R1, R3, R6  
__Prioridad:__ Deseable  

__R13 - Notificaciones__  
Tanto los usuarios como los agentes podrán comentar en la sección de comentarios de una incidencia. Tras cada respuesta, se notificará a todos los usuarios implicados, tantos los usuarios comunes como los agentes seleccionados.  
__Precedencia:__   R1, R3, R6  
__Prioridad:__ Fundamental  

__R14 - Asignación de incidencias__  
Se podrán asignar las incidencias a un agente. De esta forma, las notificaciones de incidencias asignados al agente llegarán solamente a este agente.  
__Precedencia:__ R1, R3  
__Prioridad:__ Deseable  

__R15 - Ajustes de perfil__  
Los agentes y usuarios podrán ajustar su perfil en la sección de Ajustes. Aquí podrán cambiar sus datos, eliminar la cuenta, y cambiar la preferencia de notificaciones.  
__Precedencia:__ R1, R3, R6    
__Prioridad:__ Fundamental  

__R15.1 - Cambiar datos en ajustes__  
Los agentes y usuarios podrán cambiar sus datos en la sección de ajustes.  
__Precedencia:__ R1, R3, R6  
__Prioridad:__ Fundamental 

__R15.2 - Eliminar cuenta en ajustes__  
Los agentes y usuarios podrán eliminar su cuenta en la sección de ajustes.  
__Precedencia:__ R1, R3, R6  
__Prioridad:__ Fundamental   

__R15.3 - Cambiar preferencia de notificaciones__    
Los agentes y usuarios podrán cambiar la preferencias de las notificaciones en la sección de ajustes.    
__Precedencia:__ R1, R3, R6   
__Prioridad:__ Fundamental  

__R16 - Restablecer contraseña__  
Los usuarios y agentes podrán restablecer su contraseña en la pantalla de inicio de sesión y en los ajustes de perfil.  
__Precedencia:__ R1, R3, R6    
__Prioridad:__ Fundamental  

__R17 - Estado de incidencias__  
Los agentes podrán cambiar el estado de las incidencias de tal forma que solo
trabajarían con aquellas incidencias que estén en estado "abierta". Y los finalizados estarían en estado "cerrado".  
__Precedencia:__ R1, R3, R6, R9  
__Prioridad:__ Deseable  

__R18 - Lista de incidencias creados/asignados__  
Los usuarios y agentes tendrán una pestaña donde podrán ver todas las incidencias que hayan creado/sido asignado.  
__Precedencia:__ R1, R3, R6  
__Prioridad:__ Deseable 

__R19 - Página de inicio__  
La página principal de la plataforma web para los usuarios será una lista de
incidencias que se ubican en su código postal, mientras que para los agentes será una lista de todas las incidencias que se les hayan asignado y estén abiertas.  
__Precedencia:__ R1, R3, R6  
__Prioridad:__ Fundamental  

__R20 - Mapa con incidencias__  
Los agentes tendrán acceso a un mapa con todas las incidencias señalizadas por ubicación, permitiendo el acceso a cualquier incidencia desde ese mapa.  
__Precedencia:__ R1, R3, R6  
__Prioridad:__ Deseable

__R21 - Estadísticas__  
Los agentes podrán ver en una pestaña de estadísticas donde se verán los tiempos de respuestas y el tiempo en la que se tarda para resolver una incidencia.  
__Precedencia:__ R1, R3, R6  
__Prioridad:__ Opcional  

__R22 - Archivar incidencias__  
Las incidencias deberán ser archivadas después de estar más de dos años en estado cerrado. Se archivarán a una localización especificada por el cliente o agentes.  
__Precedencia:__ R9  
__Prioridad:__ Opcional  

Además, este [enlace](https://github.com/tomgreef/clean-up/blob/master/Documentacion/CasosDeUSoDelGrupo.pdf) te llevará al documento de MagicDraw en el que se describen las principales funcionalidades del sistema

### __4.3 Calidad de Servicio__
#### __4.3.1 Rendimiento__
__R1.1 - Navegador Web__  
Para el correcto funcionamiento de la aplicación, es necesario que el navegador web soporte HTML5, geolocalización y subida de imágenes.  
__Precedencia:__ Ninguna  
__Prioridad:__ Fundamental  

__R2.2 - Sistema operativo__  
Deben tener un sistema operativo de Windows 10 Home o Pro.  
__Precedencia:__ Ninguna  
__Prioridad:__ Fundamental  

__R7.1.1 - Máximo de imágenes__  
El número máximo de imágenes que se pueden subir son 3.    
__Precedencia:__ R1, R1.1  
__Prioridad:__ Fundamental  

__R7.1.2 - Formato de imágenes__  
El formato de las imágenes debe ser .PNG o .JPG.
__Precedencia:__ R1, R1.1  
__Prioridad:__ Fundamental  

__R7.1.3 - Capacidad imágenes__  
Lás imágenes ocuparán como máximo 50mb por incidencia.
__Precedencia:__ R1, R1.1  
__Prioridad:__ Fundamental  

__R7.2 - Amplitud del texto__  
Los textos estarán limitados a un número máximo de 250 caracteres.  
__Precedencia:__ Ninguna  
__Prioridad:__ Deseable  

__R7.3 - Coordenadas GPS__  
Las coordenadas se obtienen desde el GPS del móvil o a través del uso de coordenadas.  
__Precedencia:__ R1, R1.1  
__Prioridad:__ Fundamental  

__R7.3.1 - Tipo de coordenadas__  
Las coordenadas deberán estar expresadas en grados, minutos y segundos.   
__Precedencia:__ R1, R1.1  
__Prioridad:__ Fundamental  

__R7.4.1 - Reconocimiento de duplicados__  
El sistema reconocerá las posibles incidencias duplicadas mediante el uso de las coordenadas.   
__Precedencia:__ 7.3  
__Prioridad:__ Fundamental  

__R13.1 - Recibir notificaciones__  
Las notificaciones serán a traves del correo electrónico.  
__Precedencia:__   R1, R3, R6    
__Prioridad:__ Fundamental  

__R18.1 - Máximo número de incidencias en una lista__   
Las listas enseñarán un máximo de 10 incidencias por página.  
__Precedencia:__ Ninguna    
__Prioridad:__ Opcional   

#### __4.3.2 Seguridad__
__R5.1 - Verificación teléfono__  
Los usuarios verificarán su teléfono a traves de un SMS.   
__Precedencia:__ R1, R3     
__Prioridad:__ Fundamental  

__R5.2 - Verificación cuenta__  
Los usuarios verificarán su cuenta a través del correo electrónico.  
__Precedencia:__ R1, R3    
__Prioridad:__ Fundamental  

__R23 - Certificación SSL__  
Para cumplir con las normas de GDPR, se usarán certificaciones SSL.  
__Precedencia:__ Ninguna  
__Prioridad:__ Fundamental  

__R24 - Protocolo del servidor__  
La web se servirá mediante HTTPS.   
__Precedencia:__ Ninguna  
__Prioridad:__ Fundamental   

#### __4.3.3 Disponibilidad__
__R1 - Conexión a internet__  
Para el uso de la plataforma web, es necesario tener una conexión con el internet estable.  
__Precedencia:__ Ninguna  
__Prioridad:__ Fundamental  

#### __4.5.1__ Instalación__
__R2 - Aplicación de escritorio__  
Los agentes podrán tener instalado la aplicación de escritorio para agentes en su PC, accesible desde la plataforma web.  
__Precedencia:__ R3, R3.1    
__Prioridad:__ Fundamental  

#### __4.5.4 Reusabilidad__
Para la implementación del sistema, se hará uso del servicio que ofrece Google, llamado Firebase.

#### 4.5.7 Fecha de entrega
La fecha máxima de entrega del producto será el 05/06/2020

## __5. Verificación__
- Para verificar la consistencia de este mismo documento podremos a disposición del mismo un equipo destinado a revisarlo exhaustivamente.
- Garantizamos la vigencia de este documento realizando los cambios necesarios en el mismo y siendo acordes a las necesidades del momento de los usuarios.
- Crearemos algún prototipo con diversas funciones para asegurarnos que todo funciona como el cliente quiere y así pueda ir probando versiones anteriores a la versión final.
- Realizaremos pruebas automáticas a nuestro código fuente con herramientas de software ya creadas para buscar errores que el compilador no haya detectado.
