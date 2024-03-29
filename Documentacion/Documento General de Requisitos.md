### __Especificación de requisitos del proyecto Clean-Up__ 



### __Documento generado por :__ 
 
   ### __Departamento de Requisitos de Clean Up__
   

Índice
=================
* 1 [Introducción](#1-introducción)
  * 1.1 [Objetivo del documento](#11-objetivo-del-documento)
  * 1.2 [Ámbito del proyecto](#12-ámbito-del-proyecto)
  * 1.3 [Definiciones, acrónimos y abreviaturas](#13-definiciones-acrónimos-y-abreviaturas)  
  * 1.4 [Resumen del documento](#14-resumen-del-documento) 

* 2 [Vista general del producto](#2-vista-general-del-producto)
  * 2.1 [Perspectiva del producto](#21-perspectiva-del-producto)
  * 2.2 [Funciones del producto](#22-funciones-del-producto)
  * 2.3 [Restricciones del producto](#23-restricciones-del-producto)
  * 2.4 [Perfiles de usuario](#24-perfiles-de-usuario)
  * 2.5 [Suposiciones y dependencias](#25-suposiciones-y-dependencias)

* 3 [Interfaces externas](#3-interfaces-externas)
    * 3.1 [Interfaces con el Usuario](#31-interfaces-con-el-usuario)
    * 3.2 [Interfaces con el Hardware](#32-interfaces-con-el-hardware)
    * 3.3 [Interfaces con el Software](#33-interfaces-con-el-software)

* 4 [Requisitos](#4-requisitos)
  * 4.1 [Precedencia y prioridad](#41-precedencia-y-prioridad) 
  * 4.2 [Funcionales](#42-funcionales)
  * 4.3 [Calidad de Servicio](#43-calidad-de-servicio)
    * 4.3.1 [Rendimiento](#431-rendimiento)
    * 4.3.2 [Seguridad](#432-seguridad)
    * 4.3.3 [Disponibilidad](#433-disponibilidad)  
    * 4.3.4 [Reusabilidad](#434-reusabilidad)
    * 4.3.5 [Fecha de Entrega](#435-fecha-de-entrega)
    
* 5 [Verificación](#5-verificación)
 
  
## Versiones
| Name | Date    | Reason For Changes  | Version   |
| ---- | ------- | ------------------- | --------- |
| Departamento de Requisitos | 27/04/2020 | Primera versión:Propuesta del equipo | 0.1 |
| Departamento de Requisitos | 07/05/2020 | Segunda Versión:Primera cita con el cliente | 0.2 |  
| Departamento de Requisitos | 20/05/2020 | Tercera Versión: Confirmación del cliente y del equipo | 1.0 | 
| Departamento de Requisitos | 31/05/2020 | Cuarta Versión: Puesta en común con el equipo de implementación | 1.1 |
| Departamento de Requisitos | 02/06/2020 | Quinta Versión : Confirmación del cliente y del equipo | 1.2 |

## __1. Introducción__
### __1.1 Objetivo del documento__
Este documento está destinado a ser un primer paso en lo referente a las restricciones y requisitos que debe o puede tener el proyecto. También servirá como pre-contrato entre nuestro cliente y el grupo Clean Up y para sentar las bases de lo que será el proyecto.
### __1.2 Ámbito del proyecto__
El producto pretende ofrecer y poner a disposición de las diferentes instituciones oficiales de una provincia una plataforma para poder comunicarse de alguna manera con sus ciudadanos sobre la ciudad en la que viven. Para ello, hemos creado una plataforma en la que el ciudadano podrá expresar las mejoras y el mantenimiento que distintas zonas de la ciudad necesitan, así como el Ayuntamiento o las instituciones pertinentes podrán tener conocimientos sobre las prioridades de la población.
Para comunicarse, el ciudadano solo tendrá que subir a través de la página web una incidencia que haya en la ciudad, así como desperfectos. Cuantos más ciudadanos se hayan quejado de una incidencia, más prioridad tendrá.

### __1.3 Definiciones, acrónimos y abreviaturas__
- __Ciudadano:__ serán las personas que usarán el software para comunicar desperfectos.
- __Agente:__ serán funcionarios del ayuntamiento que resolverán incidencias generadas por usuarios en una provincia de España.
- __Interfaces:__ es posible entenderlo como una superficie con el objeto de aportar información a través de su textura, forma o color.
- __Cliente:__ es el ayuntamiento en este caso, pero podría extenderse a cualquiera persona o empresa que quisiese adquirir nuestro sistema.
- __RF:__ Requisitos Funcionales.
- __RNF:__ Requisitos No Funcionales.
- __GDPR:__ General Data Protection Regulation,reglamento relativo a la protección de datos de las personas físicas en lo que respecta al tratamiento de datos personales y a la libre circulación de estos datos .

### __1.4 Resumen del documento__
En este documento se especifican los requisitos que en un principio se han educido para nuestro proyecto. En él podrás visualizar los requisitos, su prioridad, su justificación y las dependencias con otros requisitos. Además se especifican las principales funciones que tendrá el sistema.
## __2. Vista general del producto__
### __2.1 Perspectiva del producto__
Se trata de una plataforma web nueva compuesta por un servidor que atenderá las peticiones de los usuarios y los agentes, una base de datos que almacenará toda la información necesaria para permitir el correcto funcionamiento de la plataforma, y los clientes que permitirán interactuar y recibir información del servidor.
### __2.2 Funciones del producto__
- El ciudadano podrá crear incidencias con imágenes, titulo, una breve descripción y la dirección de la misma.  
- El ciudadano y el agente tendrán una pestaña en la que puede visualizar las incidencias creadas/asignadas.  
- Si varios ciudadanos suben la misma incidencia, los agentes podrán anidar las mismas para poder gestionarlas.  
- Un agente podrá trabajar con esas incidencias que llegan a su portal, permitiéndoles responder a los usuarios para pedir más información o para indicar que está arreglado, por lo que la incidencia cambiaría a otro estado (cerrado).   

### __2.3 Restricciones del producto__
- Se utilizará una base de datos NoSQL (Firebase)
- Se podrán subir un máximo de tres fotografías por incidencia.
- Los archivos pueden ocupar hasta 15mb cada uno, en formato .JPG y .PNG.
- El sistema deberá cumplir la Ley de Protección de Datos de Carácter Personal (LOPD).  

### __2.4 Perfiles de usuario__
Los perfiles de usuarios serán aquellos ciudadanos que se preocupan por sus entornos, ya que la única forma en la que se puede arreglar una incidencia ocurrida en la vía pública es a través del ayuntamiento.
El uso del software también se podrá ver afectado por la experiencia técnica de cada usuario y su manejo de la nueva tecnología.
Los agentes serán otro perfil de usuario, y son los trabajadores del ayuntamiento a los que se les asignarán las incidencias.
Los administradores también son otro perfil de usuario, que son el equipo encargado de administrar todo el sistema.

### __2.5 Suposiciones y dependencias__
El sistema dependerá de otros sistemas y librerías externos:
- NodeJS: Backend hecho en javascript.
- NPM: Gestor de paquetes de NodeJS.
- Firebase de Google: Base de datos nosql, sistema de gestión de usuarios que por correo y/o cuenta de Google, almacenamiento de archivos.
- Bulma: Framework de CSS.  
- Vue: Framework de javascript.  
- Buefy: Framework de CSS.  

### __3 Interfaces externas__
#### 3.1 Interfaces con el usuario 
Todos los ciudadanos serán presentados con la página de incidencias, que sería equivalente a la de inicio, al entrar en la plataforma web. Si el usuario no ha iniciado sesión, se le presentará la opción de iniciar sesión como viene a continuación:

![Inicio de sesión](https://github.com/tomgreef/clean-up/blob/master/Recursos/Iniciar_Session.jpg)

Una vez iniciada la sesión tendrá la opción de crear nuevas incidencias, editar/ver las incidencias creadas, y además podrá ver lo que sucede por lo demás a su
alrededor. A continuación, un ejemplo de una incidencia creada por un usuario:

![Incidencia](https://github.com/tomgreef/clean-up/blob/master/Recursos/Pagina_Inicial.jpg)

Finalmente, los agentes accederán de la misma forma a la plataforma, pero tendrán un interfaz más ampliado respecto a los usuarios, ya que van tener la posibilidad de
administrar todas las incidencias, y verlas con sus detalles.

![Mapa](https://github.com/tomgreef/clean-up/blob/master/Recursos/Agente_Incidencias.jpg)

#### __3.2 Interfaces con el Hardware__
El sistema necesitará un servidor en el que ejecutar el backend, y los dispositivos de los usuarios y agentes (ordenadores o móviles). El servicio utilizará el protocolo HTTPS.
#### __3.3 Interfaces con el Software__
La plataforma empleará Firebase de Google como bases de datos, sistema de almacenamiento (Cloud Storage) y autentificación. La comunicación entre la base de datos y el portal web consiste en operaciones relacionadas tanto con la lectura como con la modificación de los datos. Las principales interfaces servirán para iniciar sesión, crear incidencias y visualizar la lista de incidencias.
## __4. Requisitos__

### __4.1 Precedencia y prioridad__
| ID    | Título                         | Descripción                                                                                                                      | Prioridad   | Precedencia        | Tipo         |
|-------|--------------------------------|----------------------------------------------------------------------------------------------------------------------------------|-------------|--------------------|--------------|  
| R1    | Conexión a Internet            | Deberán tener una conexión estable a internet                                                                                    | Fundamental |                    | No Funcional |
| R1.1  | Navegador Web                  | Es necesario que el navegador web soporte HTML5 y subida de imágenes                                            | Fundamental |                    | No Funcional |
| R2   | Cerrar sesión             |Los ciudadanos y agentes pueden cerrar sesión | Fundamental |  R1,R3 ,R6       | Funcional    |       
| R3   | Crear cuenta                   | Todo el mundo podrá crear una cuenta ciudadano desde la plataforma web                                                                   | Fundamental | R1                 | Funcional    |
| R3.1  | Cuenta agente                  | Los agentes tendrán acceso a más funcionalidades que los ciudadanos                                                       | Fundamental | R3              | Funcional    |
| R4    | GDPR                           | Los usuarios y agentes deberán aceptar las normas establecidas por Clean-Up sobre la ley de protección de datos                  | Fundamental | R1, R23            | Funcional    |
| R5    | Verificación                   | Los usuarios deben de verificar su correo electrónico                                                           | Fundamental | R1          | Funcional    |
| R5.1 | Verificación de cuenta         | Los usuarios verificarán su cuenta                                                                | Fundamental | R1,R3             | No Funcional |
| R6    | Iniciar sesión                 | Cualquier persona registrada podrá iniciar sesión en el sistema desde la plataforma web                                          | Fundamental | R1,R3            | Funcional    |
| R6.1  | Tiempo de inactividad          | La sesión se mantendrá iniciada por un máximo de 1 hora después de que comience la inactividad                                   | Opcional | R1        | Funcional    |
| R7    | Crear incidencias              |Solo el ciudadano podrá crear incidencias con imágenes, título, descripción y dirección                    | Fundamental | R1,R3, R5   | Funcional    |
| R7.1  | Imágenes en una incidencia     | Las incidencias se deberán subir con imágenes                                                                                    | Fundamental | R1, R1.1,R3, R6       | Funcional    |
| R7.1.1| Máximo de imágenes             | El número máximo de imágenes que se pueden subir son 3                                                                          | Fundamental | R1, R1.1, R3          | No Funcional |
| R7.1.2| Formato de imágenes            | El formato de las imágenes debe ser .PNG o .JPG                                                                                  | Fundamental | R1, R1.1, R3, R6       | No Funcional |
| R7.1.3| Capacidad de imágenes          | Las imágenes ocuparán, como máximo, 15MB cada una                                                                            | Fundamental | R1, R1.1 , R3,  R6       | No Funcional |
| R7.2  | Longitud del texto             | Los textos estarán limitados a un número máximo de 250 caracteres                                                                | Deseable    |                    | No Funcional |
| R7.3  | Dirección incidencia            |Se pedirá al ciudadano por la dirección de la incidencia              | Fundamental | R1, R1.1 ,R3        | No Funcional |
| R7.3.1| Formato dirección          |La dirección deberá contener la calle, número de puerta y código postal                                                          | Fundamental | R1, R1.1 ,R3          | No Funcional |
| R7.4  | Duplicado de incidencias       | El sistema reconocerá si la incidencia ya existe en la base de datos, por lo que preguntará al creador si es la misma  | Deseable          | R7 | Funcional | 
| R7.4.1| Reconocimiento duplicados      | El sistema reconocerá las posibles incidencias duplicadas mediante la comparación del código postal y calle                | Deseable | R7.3               | No Funcional |
| R8    | Información al usuario         | Se presentará al usuario toda información legal necesaria                                                                        | Fundamental |                    | Funcional    |
| R9    | Editar incidencia              | Los usuarios podrán editar el título y la descripción de las incidencias creadas        | Fundamental | R1, R6 ,R7       | Funcional    |
| R10   | Cerrar incidencia            |  Los agentes podrán cerrar las incidencias que se les hayan asignado                       | Fundamental | R1, R6 ,R7       | Funcional    |
| R11   | Anidar incidencias           |Los agentes tendrán la posibilidad de anidar una o varias incidencias                                                     | Opcional    | R1, R6 , R7      | Funcional    |
| R12   | Seleccionar incidencias        | Los agentes deberán poder seleccionar varias incidencias a la vez                                                                | Deseable    | R1, R6  ,R7       | Funcional    |
| R13   | Comentarios               | Los agentes podrán comentar las incidencias        | Fundamental | R1, R6         | Funcional    |
| R13.1 | Recibir notificaciones         | Las notificaciones serán a través de correo electrónico                                                                          | Deseable    | R1,R3, R6  ,R7       | No Funcional |
| R13.2 | Formato comentarios         | Los comentarios tendrán un límite de 200 caracteres                                                                         | Fundamental    | R1,R3, R5, R6, R7         | No Funcional |
| R14   | Asignación de incidencias      | Se podrán asignar las incidencias a un agente                                                                                    | Deseable    | R1, R3, R7  | Funcional    |
| R15   | Ajustes de perfil              | Los agentes y ciudadanos podrán cambiar el nombre del perfil en la sección de ajustes                                                         | Fundamental | R1,R3, R6         | Funcional    |
| R15.1 | Eliminar cuenta en ajustes     | Los agentes y ciudadanos podrán eliminar su cuenta en la sección de ajustes                                                        | Fundamental | R1,R3, R6         | Funcional    |
| R15.2 | Preferencia de notificaciones  | Los agentes y ciudadanos podrán cambiar la preferencia de las notificaciones en la sección de ajustes                                | Opcional | R1, R3,R6         | Funcional    |
| R16   | Restablecer contraseña         | Los ciudadanos y agentes podrán restablecer su contraseñas en la pantalla de inicio de sesión y en los ajustes de perfil           | Deseable | R1,R3, R6         | Funcional    |
| R17   | Estado de incidencias          | Los agentes podrán cambiar el estado de las incidencias                                                                          | Fundamental   | R1,R3, R6, R9     | Funcional    |
| R18   | Lista de incidencias           | Los ciudadanos y agentes tendrán una pestaña donde podrán ver todas las incidencias que hayan creado o sido asignados              | Deseable    | R1, R3,R6         | Funcional    |
| R18.1 | Máximo numero incidencias      | Las listas enseñarán un maximo de 10 incidencias por página                                                                      | Opcional    |     R1,R3,R6     | No Funcional |
| R19   | Página de inicio               |Muestra una lista de las incidencias creadas por el ciudadano y asignadas al agente.                                                                 | Fundamental | R1, R6         | Funcional    |
| R20   | Mapa de incidencias            | Los agentes tendrán acceso a un mapa con todas las incidencias señalizadas por ubicación                                         | Deseable    | R1,R3, R6         | Funcional    |
| R21   | Estadísticas                   | Los agentes podrán ver una pestaña de estadísticas sobre las incidencias                                                         | Opcional    | R1,R3, R6         | Funcional    |
| R22   | Archivar incidencias           | Las incidencias deberán ser archivadas después de estar más de dos años en estado cerrado                                        | Opcional    |R3, R9                 | Funcional    |
| R23   | Certificación SSL              | Se usarán certificaciones SSL                                                                                                    | Fundamental |                    | No Funcional |
| R24   | Protocolo del servidor         | La web se servira mediante HTTPS                                                                                                 | Deseable    |                    | No Funcional |


### __4.2 Funcionales__

__R2 - Cerrar sesión__  
Los ciudadanos y agentes pueden cerrar sesión.    
__Precedencia:__|  R1,R3 ,R6  
__Prioridad:__ Fundamental 

__R3 - Crear cuenta__  
Todo el mundo podrá crearse una cuenta ciuadano desde la plataforma web.    
__Precedencia:__ R1  
__Prioridad:__ Fundamental   

__R3.1 - Cuenta Agente__  
Los agentes tendrán acceso a más funcionalidades que los ciudadanos.  
__Precedencia:__ R3                                                                                                                                                                                               
__Prioridad:__ Fundamental  

__R4 - GDPR__  
Los ciudadanos y agentes deberán aceptar las normas establecidas por Clean-Up sobre la ley de la protección de datos.  
__Precedencia:__ R1, R23                                                                                                                                                                                                     
__Prioridad:__ Fundamental  

__R5 - Verificación__  
Los ciudadanos deben de verificar su correo electrónico.    
__Precedencia:__ R1                                                                                                        
__Prioridad:__ Fundamental      

__R6 - Iniciar sesión__  
Cualquier persona registrada podrá iniciar sesión en el sistema desde la plataforma web.  
__Precedencia:__  R1, R3                                                                                               
__Prioridad:__ Fundamental  

__R6.1 - Tiempo de inactividad__  
La sesión se mantendrá iniciada por un máximo de 1 hora después de que comience la inactividad.  
__Precedencia:__ R1                                                                                                           
__Prioridad:__ Opcional  

__R7 - Crear incidencias__  
Solo el ciudadano podrá crear incidencias con imágenes, título, descripción y dirección.  
__Precedencia:__   R1, R3, R5                                                                                                
__Prioridad:__ Fundamental  

__R7.1 - Imágenes en una incidencia__  
Las incidencias se deberán subir con imágenes.    
__Precedencia:__ R1, R1.1, R3, R6   
__Prioridad:__ Fundamental  

__R7.4 - Duplicado de incidencia__  
El sistema reconocerá si la incidencia ya existe en la base de datos, por lo que preguntará al creador si es la misma.                      
__Precedencia:__ R7                                                                                                               
__Prioridad:__ Deseable   

__R8 - Información al usuario__  
Se presentará al ciudadano toda información legal necesaria.  
__Precedencia:__ Ninguna                                                                                               
__Prioridad:__ Fundamental  

__R9 - Editar incidencia__  
Los ciudadanos podrán editar el texto de las incidencias creadas.  
__Precedencia:__ R1, R6 ,R7                                                                                                       
__Prioridad:__ Fundamental  

__R10 - Cerrar incidencia__  
Los agentes podrán cerrar las incidencias que se les hayan asignado.    
__Precedencia:__ R1, R6 ,R7                                                                                                         
__Prioridad:__ Fundamental  

__R11 - Anidar incidencias__  
Los agentes tendrán la posibilidad de anidar una o varias incidencias.  
__Precedencia:__ R1, R6 , R7    
__Prioridad:__ Opcional 

__R12 - Seleccionar incidencias__  
Los agentes deberán poder seleccionar varias incidencias a la vez.  
__Precedencia:__ R1, R6 ,R7                 
__Prioridad:__ Deseable  

__R13 -Comentarios__  
Los agentes podrán comentar las incidencias.  
__Precedencia:__  R1, R6   
__Prioridad:__ Fundamental  

__R14 - Asignación de incidencias__  
Se podrán asignar las incidencias a un agente.  
__Precedencia:__ R1, R3, R7   
__Prioridad:__ Deseable  

__R15 - Ajustes de perfil__  
Los agentes y ciudadanos podrán ajustar su perfil en la sección de ajustes.  
__Precedencia:__ R1,R3, R6     
__Prioridad:__ Fundamental  

__R15.1 - Eliminar cuenta en ajustes__  
Los agentes y ciudadanos podrán eliminar su cuenta en la sección de ajustes.  
__Precedencia:__ R1, R3, R6  
__Prioridad:__ Fundamental   

__R15.2 - Preferencia de notificaciones__    
Los agentes y ciudadanos podrán cambiar la preferencias de las notificaciones en la sección de ajustes.    
__Precedencia:__ R1,R3, R6   
__Prioridad:__ Opcional  

__R16 - Restablecer contraseña__  
Los ciudadanos y agentes podrán restablecer su contraseña en la pantalla de inicio de sesión y en los ajustes de perfil.  
__Precedencia:__ R1, R6    
__Prioridad:__ Deseable 

__R17 - Estado de incidencias__  
Los agentes podrán cambiar el estado de las incidencias.  
__Precedencia:__ R1, R6, R9  
__Prioridad:__ Fundamental 

__R18 - Lista de incidencias__  
Los ciudadanos y agentes tendrán una pestaña donde podrán ver todas las incidencias que hayan creado o sido asignados.  
__Precedencia:__ R1, R6  
__Prioridad:__ Deseable 

__R19 - Página de inicio__  
Muestra una lista de las incidencias creadas por el ciudadano y asignadas al agente.   
__Precedencia:__ R1, R6  
__Prioridad:__ Fundamental  

__R20 - Mapa con incidencias__  
Los agentes tendrán acceso a un mapa con todas las incidencias señalizadas por ubicación.  
__Precedencia:__ R1, R3, R6  
__Prioridad:__ Deseable

__R21 - Estadísticas__  
Los agentes podrán ver una pestaña de estadísticas sobre las incidencias.  
__Precedencia:__ R1, R3, R6  
__Prioridad:__ Opcional  

__R22 - Archivar incidencias__  
Las incidencias deberán ser archivadas después de estar más de dos años en estado cerrado.  
__Precedencia:__ R3, R9  
__Prioridad:__ Opcional  

### __4.3 Calidad de Servicio__
#### __4.3.1 Rendimiento__
__R1.1 - Navegador Web__  
Es necesario que el navegador web soporte HTML5 y subida de imágenes.  
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
Lás imágenes ocuparán, como máximo, 15mb cada una.                                                                                            
__Precedencia:__ R1, R1.1                                                                                                                                                                                                                     
__Prioridad:__ Fundamental  

__R7.2 - Longitud del texto__  
Los textos estarán limitados a un número máximo de 250 caracteres.  
__Precedencia:__ Ninguna  
__Prioridad:__ Deseable  

__R7.3 -Dirección incidencia__  
Se le pedirá al ciudadano la dirección de la incidencia.   
__Precedencia:__ R1, R1.1 , R3                                                                                                        
__Prioridad:__ Fundamental  

__R7.3.1 -Formato dirección__  
La dirección deberá contener la calle, número de puerta y código postal.   
__Precedencia:__ R1, R1.1 , R3                                                                                                        
__Prioridad:__ Fundamental  

__R7.4.1 -Reconocimiento duplicados__  
El sistema reconocerá las posibles incidencias duplicadas mediante la comparación del código postal y calle.     
__Precedencia:__ R3, R7.3                                                                                    
__Prioridad:__ Deseable    

__R13.1 - Recibir notificaciones__  
Las notificaciones serán a traves del correo electrónico.  
__Precedencia:__   R1, R3, R6    
__Prioridad:__ Fundamental  

__R13.2 - Formato comentarios__  
Los comentarios tendrán un límite de 200 caracteres.  
__Precedencia:__   R1, R5, R6, R7                                                                                                    
__Prioridad:__ Fundamental  

__R18.1 -  	Máximo numero incidencias__   
Las listas enseñarán un máximo de 10 incidencias por página.  
__Precedencia:__ Ninguna    
__Prioridad:__ Opcional   

#### __4.3.2 Seguridad__

__R5.1 - Verificación cuenta__  
Los ciudadanos verificarán su cuenta.  
__Precedencia:__ R1   
__Prioridad:__ Fundamental  

__R23 - Certificación SSL__  
Se usarán certificaciones SSL.  
__Precedencia:__ Ninguna  
__Prioridad:__ Fundamental  

__R24 - Protocolo del servidor__  
La web se servirá mediante HTTPS.   
__Precedencia:__ Ninguna  
__Prioridad:__ Deseable     

#### __4.3.3 Disponibilidad__

__R1 - Conexión a internet__  
Deberán tener una conexión estable a internet.  
__Precedencia:__ Ninguna  
__Prioridad:__ Fundamental  

#### __4.3.4 Reusabilidad__

Para la implementación del sistema, se hará uso del servicio que ofrece Google, llamado Firebase.

#### 4.3.5 Fecha de entrega

La fecha máxima de entrega del producto será el 08/06/2020

## __5. Verificación__
- Para verificar la consistencia de este mismo documento pondremos a disposición del mismo un equipo destinado a revisarlo exhaustivamente.
- Garantizamos la vigencia de este documento realizando los cambios necesarios en el mismo y siendo acordes a las necesidades del momento de los usuarios.
- Crearemos algún prototipo con diversas funciones para asegurarnos que todo funciona como el cliente quiere y así pueda ir probando versiones anteriores a la versión final.
- Realizaremos pruebas automáticas a nuestro código fuente con herramientas de software ya creadas para buscar errores que el compilador no haya detectado.
