# Especificación de Testing
## Del proyecto <Clean-Up>

Versión 0.0.1  
Generada por <Departamento de Testing>  
<Clean-Up Group>  
<18/05/2020>  

## Versiones
| Nombre | Fecha    | Motivos del cambio  | Version   |
| ------ | -------- | ------------------- | --------- |
| Departamento Testing | 18/05/2020 | Primera versión | 0.0.1 |

## Requisitos.
| ID    | Título                         | Descripción                                                                                                                      | Prioridad   | Precedencia        | Tipo         |
|-------|--------------------------------|----------------------------------------------------------------------------------------------------------------------------------|-------------|--------------------|--------------|  
| R1    | Conexión a Internet            | Deberán tener una conexión estable a internet                                                                                    | Fundamental |                    | Funcional    |
| R1.1  | Navegador Web                  | Es necesario que el navegador web soporte HTML5, geolocalización y subida de imágenes                                            | Fundamental |                    | No Funcional |
| R2    | Aplicación de escritorio       | Los agentes necesitan instalar la aplicación en su PC                                                                            | Fundamental | R3, R3.1           | Funcional    |
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
| R7    | Crear incidencias              | El usuario podrán crear incidencias con imágenes, título, descripción y coordenadas                                              | Fundamental | R1, R3, R3.1, R5   | Funcional    |
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

## Pruebas en requisitos.
| ID    | Título                         | Descripción                                                                                                                                                                        |
|-------|--------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|  
| R1    | Conexión a Internet            | Se probará el acceso a la plataforma desde distintos dispositivos limitando la velocidad de internet que tienen.                                                                   |
| R1.1  | Navegador Web                  | Uso de múltiples navegadores: Chrome, Opera, Firefox y Brave tanto en móvil cómo en escritorio para comprobar su funcionamiento                                                    |
| R2    | Caché                          | Comprobar que una vez cargada la página, estando sin conexión la caché funciona                                                                                                    |
| R2.1  | Tamaño Caché                   | Comprobar que realmente el tamaño que almacena la plataforma es el indicado                                                                                                        |
| R2.2  | Encriptación Cache             | Si se implementa.
| R3    | Crear cuenta                   | Pruebas unitarias: creación de cuentas usando cadenas de emojis, usando opciones de codificiación de caracteres distintas, email sin usar @.                                       |
| R3    |                                | Pruebas caja blanca: Creación de multiples cuentas con mismo correo, cuentas de usuario cuyo nombre es código SQL.                                                                 |
| R3.1  | Cuenta agente                  | Comprobar las funciones de la cuenta agente y si un usuario pudiese acceder a ello.                                                                                                |
| R4    | GDPR                           | Tener una página explicando que se cumple la GPDR                                                                                                                                  |
| R5    | Verificación                   | vamos a comprobar el email                                                                                                                                                         |
| R5.1  | Verificación de teléfono       | No vamos a comprobarla                                                                                                                                                             |
| R5.2  | Verificación de cuenta         | Comprobar que llegue la verificación al correo electrónico y que no vuelva a pedir verificación.                                                                                   |
| R6    | Iniciar sesión                 | Pruebas unitarias: Comprobar que el sistema se pare con cada intento fallido.                                                                                                      |
| R6    |                                | Pruebas caja blanca: Multiples intentos de acceso desde distintos dispositivos, fallar en la contraseña de forma intencionada repetidamente.                                       |
| R6.1  | Tiempo de inactividad          | Iniciar sesión con 4 cuentas y dejar en inactividad total una hasta que se le expulse, inactividad parcial otra donde no salte a una nueva página pero siga usando en la que está, |
| R6.1  |                                | por otra parte las dos en las que no nos deberían expulsar, usar la página pero con periodos largos de inactividad de 50 minutos, usar la página de forma intensiva.               |
| R7    | Crear incidencias              | El usuario y agente podrán crear incidencias con imágenes, título, descripción y coordenadas                                                                                       |
| R7.1  | Imágenes en una incidencia     |Creación de múltiples incidencias con la intención de saturar el servidor y ver cómo reacciona, y sando cadenas de emojis, usando opciones de codificiación de caracteres distintas.|
| R7.1.1| Máximo de imágenes             | Subir más de 3 fotos con la incidencia                                                                                                                                             |
| R7.1.2| Formato de imágenes            | Cómo reacciona la plataforma si le pasamos otros formatos de archivos, probando con cada uno de los formatos más conocidos.                                                        |
| R7.1.3| Capacidad de imágenes          | Subir más de 50mb con una sóla foto, con dos fotos y con tres fotos, cambiando el tamaño de cada una.                                                                              |
| R7.2  | Longitud del texto             | Comprobar si realiza la cuenta correctamente con otras codificaciones de carácteres y no permite realizar mensajes de más de 250 carácteres                                        |
| R7.3  | Dirección calle                | Partimos de que el usuario siempre va a introducir una calle correcta, no sabríamos resolver el problema de comprobar que la calle exista y sea correcta sin fuerza bruta          |
| R7.3.1| Formato de dirección calle     | Rellenamos la dirección con formato incorrecto y comprobamos que errores nos saltan                                                                                                |
| R7.4  | Duplicado de incidencias       | Creación de múltiples incidencias iguales con el mismo usuario, y con usuarios distintos.                                                                                          |
| R7.4.1| Reconocimiento duplicados      | Comprobar que introduciendo el mismo CP y la misma calle con combinaciones de tildes, mayúscula y minúscula distintos al nombre el sistema detecte que se refiere a la misma.      |
| R8    | Información al usuario         | Comprobar que tanto el usuario cómo el agente puede acceder a la información legal.                                                                                                |
| R9    | Editar incidencia              | Comprobar que los usuarios tienen capacidad de modificar la información de sus incidencias y no pueden modificar la de otros usuarios                                              |
| R10   | Cerrar incidencia              | Comprobar que el usario puede cerrar sus propios tickets mientras que los agentes pueden cerrar cualquiera                                                                         |
| R11   | Fusionar incidencias           | Testeo si se implementa.                                                                                                                                                           |
| R12   | Seleccionar incidencias        | Comprobar que el agente puede seleccionar varias incidencias y realizar operaciones en ellas                                                                                       |
| R13   | Comentarios                    | Comprobar que únicamente los agentes pueden comentar y que sólo admita texto.                                                                                                      |
| R13.1 | Notificaciones comentarios     | Comprobar que sólo la cuenta usuario relacionada con la incidencia recibe el correo de la notificación.                                                                            |
| R13.2 | Longitud del texto             | Comprobar si cuenta correctamente con otras codificaciones de carácteres y no permite realizar mensajes de más de 250 carácteres.                                                  |
| R14   | Asignación de incidencias      | Testeo si se implementa                                                                                                                                                            |
| R15   | Ajustes de perfil              | Comprobar que tanto el agente cómo el usuario pueden acceder únicamente a sus ajustes de perfil y no intervenir en otros perfiles.                                                 |
| R15.1 | Cambiar datos en ajustes       | Comprobar que tanto el agente cómo el usuario pueden cambiar los datos únicamente a sus ajustes de perfil y no intervenir en otros perfiles.                                       |
| R15.2 | Eliminar cuenta en ajustes     | Comprobar que tanto el agente cómo el usuario pueden eliminar su cuenta en sus ajustes de perfil y no poder eliminar la de otros perfiles.                                         |
| R15.3 | Preferencia de notificaciones  | Comprobar que tanto el agente cómo el usuario pueden cambiar la preferencia de notificaciones únicamente a sus ajustes de perfil y no intervenir en otros perfiles.                |
| R16   | Restablecer contraseña         | Comprobar que tanto el agente cómo el usuario pueden restablecer únicamente su contraseña y no intervenir en otros perfiles.                                                       |
| R17   | Estado de incidencias          | Testeo si se implementa                                                                                                                                                            |
| R18   | Lista de incidencias           | Testeo si se implementa                                                                                                                                                            |
| R18.1 | Máximo numero incidencias      | Testeo si se implementa                                                                                                                                                            |
| R19   | Página de inicio               | Comprobar que para el usuario muestra una lista de sus incidencias, mientras que para el agente muestra la lista de las incidencias asignadas a él.                                |
| R20   | Mapa de incidencias            | Testeo si se implementa                                                                                                                                                            |
| R21   | Estadísticas                   | Testeo si se implementa                                                                                                                                                            |
| R22   | Archivar incidencias           | Testeo si se implementa                                                                                                                                                            |
| R23   | Certificación SSL              | Comrpobar que la página web cumple con los requisitos para la certificación SSL y que los mantiene con el tiempo.                                                                  |
| R24   | Protocolo del servidor         | Testeo si se implementa                                                                                                                                                            |
