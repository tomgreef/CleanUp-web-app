# Especificación de Testing
## Del proyecto <Clean-Up>

Versión 1.0  
Generada por **Departamento de Testing**  
**Clean-Up Group**  
**08/06/2020**  

## Versiones
| Nombre               | Fecha      | Motivos del cambio                               | Version |
| -------------------- | ---------- | ------------------------------------------------ | ------- |
| Departamento Testing | 18/05/2020 | Primera versión                                  | 0.0.1   |
| Departamento Testing | 19/05/2020 | Cambios propuesta Tom                            | 0.0.2   |
| Departamento Testing | 31/05/2020 | Adaptación a los cambios de requisitos y formato | 0.0.3   |
| Departamento Testing | 06/06/2020 | Cambios totales y actualización. Formato de pruebas establecido | 0.1  |
| Departamento Testing | 08/06/2020 | Todas las pruebas realizadas y documento completado. | 1.0  |

### __4.1 Precedencia y prioridad__
| ID     | Título                        | Descripción                                                                                                              | Prioridad   | Precedencia        | Tipo         |
| ------ | ----------------------------- | ------------------------------------------------------------------------------------------------------------------------ | ----------- | ------------------ | ------------ |
| R1     | Conexión a Internet           | Deberán tener una conexión estable a internet                                                                            | Fundamental |                    | No Funcional |
| R1.1   | Navegador Web                 | Es necesario que el navegador web soporte HTML5 y subida de imágenes                                                     | Fundamental |                    | No Funcional |
| R2     | Cerrar sesión                 | Los ciudadanos y agentes pueden cerrar sesión                                                                            | Fundamental | R1,R3 ,R6          | Funcional    |
| R3     | Crear cuenta                  | Todo el mundo podrá crear una cuenta ciudadano desde la plataforma web                                                   | Fundamental | R1                 | Funcional    |
| R3.1   | Cuenta agente                 | Los agentes tendrán acceso a más funcionalidades que los ciudadanos                                                      | Fundamental | R3                 | Funcional    |
| R4     | GDPR                          | Los usuarios y agentes deberán aceptar las normas establecidas por Clean-Up sobre la ley de protección de datos          | Fundamental | R1, R23            | Funcional    |
| R5     | Verificación                  | Los usuarios deben de verificar su correo electrónico                                                                    | Fundamental | R1                 | Funcional    |
| R5.1   | Verificación de cuenta        | Los usuarios verificarán su cuenta                                                                                       | Fundamental | R1,R3              | No Funcional |
| R6     | Iniciar sesión                | Cualquier persona registrada podrá iniciar sesión en el sistema desde la plataforma web                                  | Fundamental | R1,R3              | Funcional    |
| R6.1   | Tiempo de inactividad         | La sesión se mantendrá iniciada por un máximo de 1 hora después de que comience la inactividad                           | Opcional    | R1                 | Funcional    |
| R7     | Crear incidencias             | Solo el ciudadano podrá crear incidencias con imágenes, título, descripción y dirección                                  | Fundamental | R1,R3, R5          | Funcional    |
| R7.1   | Imágenes en una incidencia    | Las incidencias se deberán subir con imágenes                                                                            | Fundamental | R1, R1.1,R3, R6    | Funcional    |
| R7.1.1 | Máximo de imágenes            | El número máximo de imágenes que se pueden subir son 3                                                                   | Fundamental | R1, R1.1, R3       | No Funcional |
| R7.1.2 | Formato de imágenes           | El formato de las imágenes debe ser .PNG o .JPG                                                                          | Fundamental | R1, R1.1, R3, R6   | No Funcional |
| R7.1.3 | Capacidad de imágenes         | Las imágenes ocuparán, como máximo, 15MB cada una                                                                        | Fundamental | R1, R1.1 , R3,  R6 | No Funcional |
| R7.2   | Longitud del texto            | Los textos estarán limitados a un número máximo de 250 caracteres                                                        | Deseable    |                    | No Funcional |
| R7.3   | Dirección incidencia          | Se pedirá al ciudadano por la dirección de la incidencia                                                                 | Fundamental | R1, R1.1 ,R3       | No Funcional |
| R7.3.1 | Formato dirección             | La dirección deberá contener la calle, número de puerta y código postal                                                  | Fundamental | R1, R1.1 ,R3       | No Funcional |
| R7.4   | Duplicado de incidencias      | El sistema reconocerá si la incidencia ya existe en la base de datos, por lo que preguntará al creador si es la misma    | Deseable    | R7                 | Funcional    |
| R7.4.1 | Reconocimiento duplicados     | El sistema reconocerá las posibles incidencias duplicadas mediante la comparación del código postal y calle              | Deseable    | R7.3               | No Funcional |
| R8     | Información al usuario        | Se presentará al usuario toda información legal necesaria                                                                | Fundamental |                    | Funcional    |
| R9     | Editar incidencia             | Los usuarios podrán editar el título y la descripción de las incidencias creadas                                         | Fundamental | R1, R6 ,R7         | Funcional    |
| R10    | Cerrar incidencia             | Los agentes podrán cerrar las incidencias que se les hayan asignado                                                      | Fundamental | R1, R6 ,R7         | Funcional    |
| R11    | Anidar incidencias            | Los agentes tendrán la posibilidad de anidar una o varias incidencias                                                    | Opcional    | R1, R6 , R7        | Funcional    |
| R12    | Seleccionar incidencias       | Los agentes deberán poder seleccionar varias incidencias a la vez                                                        | Deseable    | R1, R6  ,R7        | Funcional    |
| R13    | Comentarios                   | Los agentes podrán comentar las incidencias                                                                              | Fundamental | R1, R6             | Funcional    |
| R13.1  | Recibir notificaciones        | Las notificaciones serán a través de correo electrónico                                                                  | Deseable    | R1,R3, R6  ,R7     | No Funcional |
| R13.2  | Formato comentarios           | Los comentarios tendrán un límite de 200 caracteres                                                                      | Fundamental | R1,R3, R5, R6, R7  | No Funcional |
| R14    | Asignación de incidencias     | Se podrán asignar las incidencias a un agente                                                                            | Deseable    | R1, R3, R7         | Funcional    |
| R15    | Ajustes de perfil             | Los agentes y ciudadanos podrán cambiar el nombre del perfil en la sección de ajustes                                    | Fundamental | R1,R3, R6          | Funcional    |
| R15.1  | Eliminar cuenta en ajustes    | Los agentes y ciudadanos podrán eliminar su cuenta en la sección de ajustes                                              | Fundamental | R1,R3, R6          | Funcional    |
| R15.2  | Preferencia de notificaciones | Los agentes y ciudadanos podrán cambiar la preferencia de las notificaciones en la sección de ajustes                    | Opcional    | R1, R3,R6          | Funcional    |
| R16    | Restablecer contraseña        | Los ciudadanos y agentes podrán restablecer su contraseñas en la pantalla de inicio de sesión y en los ajustes de perfil | Deseable    | R1,R3, R6          | Funcional    |
| R17    | Estado de incidencias         | Los agentes podrán cambiar el estado de las incidencias                                                                  | Fundamental | R1,R3, R6, R9      | Funcional    |
| R18    | Lista de incidencias          | Los ciudadanos y agentes tendrán una pestaña donde podrán ver todas las incidencias que hayan creado o sido asignados    | Deseable    | R1, R3,R6          | Funcional    |
| R18.1  | Máximo numero incidencias     | Las listas enseñarán un maximo de 10 incidencias por página                                                              | Opcional    | R1,R3,R6           | No Funcional |
| R19    | Página de inicio              | Muestra una lista de las incidencias creadas por el ciudadano y asignadas al agente.                                     | Fundamental | R1, R6             | Funcional    |
| R20    | Mapa de incidencias           | Los agentes tendrán acceso a un mapa con todas las incidencias señalizadas por ubicación                                 | Deseable    | R1,R3, R6          | Funcional    |
| R21    | Estadísticas                  | Los agentes podrán ver una pestaña de estadísticas sobre las incidencias                                                 | Opcional    | R1,R3, R6          | Funcional    |
| R22    | Archivar incidencias          | Las incidencias deberán ser archivadas después de estar más de dos años en estado cerrado                                | Opcional    | R3, R9             | Funcional    |
| R23    | Certificación SSL             | Se usarán certificaciones SSL                                                                                            | Fundamental |                    | No Funcional |
| R24    | Protocolo del servidor        | La web se servira mediante HTTPS                                                                                         | Deseable    |                    | No Funcional |


## Pruebas en requisitos

Las pruebas se van a realizar en Widnows 10 Pro para comprobar el funcionamiento en ordenadores donde se va a probar su rendimiento en Chrome, Opera y Firefox. En plataformas móviles se comprobará de forma directa el funcionamiento en Android v8.0.0 y mediante las opciones de desarrollo proporcionadas por google chrome, se probará que la web se ajusta bien a las pantallas de iphone X / ipad.

| ID        | Pruebas                                                                                                      |
| --------- | ------------------------------------------------------------------------------------------------------------ |
| R1 y R1.1 | Estos requisitos se comprobarán de forma simultánea conforme se realicen las pruebas de los demás requisitos. |
| R2 y R6   | Se inciará sesión con cada cuenta y se cerrará sesión después, probándose así las dos funcionalidades. |
| R3 y R4   | Se van a crear 4 cuentas de usuario, dos de ellas serán con correos exclusivamente creados para pruebas, pruebascleanup@outlook.es (Cuenta 1) y pruebasclean@gmail.com (Cuenta 2)  y otra con correo personal de cara a tener una cuenta para cada navegador y el móvil. Cómo crear cuenta implica aceptar las normas establecidas por Clean-Up sobre la ley de protección de datos también se comprueba R4. |
| R3.1 | La cuenta agente nos la proporciona directamente el administrador, se le solicitará que se realice con agentecleanup@gmail.com. |
| R5 y 5.1  | Una vez creadas las cuentas se comprobarán que se ha enviado el correo de confirmación de cada cuenta. |
| R6.1 | Se iniciará sesión y se dejarán cronometará el tiempo de inactividad de las cuentas inactivas tomando cómo tiempos principales a 50 minutos, 60 minutos y 70 minutos, donde ya debería de haberse cerrado la cuenta. |
| R7 7.1 7.1.1 7.1.2 7.1.3 7.2 7.3 7.3.1 | Debido a que crear una incidencia implica título, descripción imágenes y dirección, podemos probar todos los requisitos relacionados a la vez creando incidencias con cada usuario. Se crearán un total de 6 incidencias, 3 para requisitos de texto e imágenes, una para la prueba de duplicados y 2 para pruebas de otros requisitos. Siguiendo el apartado formato de los tickets pruebas de R7.|
|7.4 7.4.1| La cuarta incidencia que tendrá mismo código postal (CP) y calle que la incidencia 1 servirá para probar si el sistema detecta duplicados  y le pregunta al usuario. |
| R8 | Se intentará acceder a un apartado donde esté la información legal necesaria para el ciudadano. |
| R9 | Se editarán la descripción de las incidencia 1 y 2 para tener 250 letras y 20 respectivamente, y el título pasará a ser incidencia 1 editado e incidencia 2 editado. |
| R10 | Desde la cuenta agente se probará a cerrar la incidencia 2 (que ya ha sido asignada a él). |
| R11 | Desde la cuenta agente se anidarán las incidencias 5 y 6. |
| R12 | Desde la cuenta agente se probará si puede seleccionar varias incidencias.|
| R13 R13.2 | Desde la cuenta agente se probará a comentar la incidencia 5 y 6, en la primera será un comentario de 199 caracteres y en la segunda de 200.|
| R13.1     | Se comprobará si han llegado alguna notificación al correo de la cuenta a la que se han hecho comentarios. |
| R14       | Se le asignarán todas las incidencias al agente que hemos creado. |
| R15 | Se cambiará el nombre de usuario en Cuenta 1 y Cuenta 2  a Cuenta 1 editado y Cuenta 2 editado. |
| R15.1     | Se borrará la cuenta creada con correo personal. |
| R15.2     | Se cambiarán las preferencia de notificaciones de Cuenta 1 y Cuenta 2. 
| R16       | Se cambiarán las contraseñas de Cuenta 1  y del agente. Ambas en inicio de sesión y en ajustes de usuario. |
| R17 R18 R18.1 R19 | Se crearán 8 incidencias más teniendo un total de 11 en Cuenta 1 para probar que sólo se llegan a mostrar 10 en la vista de usuario y que el agente también se le muestra una lista de máximo 10 incidencias. Además se comprobará que aparezca en cada incidencia su estado. Debido a que la lista se muestra siempre en la página de inicio, se comprará en todo momento si se cumple R19. |
| R20       | Se comprobará que al agente se le muestre un mapa con las incidencias. |
| R21       | Se comprobará que al agente se le muestre estadísticas de las incidencias. |
| R22       | Se comprobará que las incidencias se archiven pasados 2 años. |
| R23 R24   | Se comprobará si la conexión con el servidor es segura y cumple SSL y HTTPS. |

## Formato de los tickets pruebas de R7:
- Título: incidencia 1,  descripción de 20 letras, 1 imagen .png 399KB  y dirección: CP 29000 Calle Larios Nº 1. Cuenta 1. 
- Título: incidencia 2,  descripción de 250 letras, 2 imagenes (15 MB .png y 15 MB.jpg)y dirección: CP 29000 Calle Alameda Nº 1. Cuenta 1.
- Título: incidencia 3,  descripción de 249 letras, 3 imagenes .png 15 MB .jpg 15MB .png 399KB  y dirección: CP 29000 Calle Andalucía Nº 1. Cuenta 1. 
- Título: incidencia 4,  descripción de 20 letras, 1 imagen .png 399KB  y dirección: CP 29000 Calle Larios Nº 1. Cuenta 2. (Incidencia para prueba de duplicados.)
- Título: incidencia 5,  descripción de 20 letras, 1 imagen .png 399KB y dirección: CP 29000 Calle Guindos Nº 1. Cuenta 2.
- Título: incidencia 6,  descripción de 20 letras, 1 imagen .png 399KB y dirección: CP 29000 Calle Rodahuevos Nº 1. Cuenta 2.

## Resultados de las pruebas en requisitos:

En caso se de que algún requisito no funcione correctamente para alguno de los navegadores especificados para las pruebas, se indicará al final del resultado de la prueba. Además se acompañará al documento con las capturas tomadas durante la realización de las pruebas.

| ID        | Resultados                                                                                                   |
| --------- | ------------------------------------------------------------------------------------------------------------ |
| R1 y R1.1 | La plataforma funciona perfectamente teniendo conexión a internet y un navegador web que soporte HTML5 y subida de imágenes. |
| R2 y R6   | Una vez creada la cuenta y verificada, la plataforma permite el inicio y cierre de sesión de forma rápida y pulsando un único botón para iniciar sesión, y otro botón en rojo para cerrar sesión, en el caso de dispositivos móviles, para cerrar sesión primero deben desplegar el menú y luego pulsar el botón. |
| R3 y R4   | Las cuentas se han satisfactoriamente, siendo obligatorio aceptar las condiciones de uso y la política de protección de datos personales cómo está definido en los requisitos. |
| R3.1 | La cuenta de agente se ha creado satisfactoriamente después de pedirle al agente del sistema que la crease.|
| R5 y 5.1  | Los correos de verificacón se recibieron correctamente tanto en gmail cómo en outlook y la plataforma avisa que se ha verificado la cuenta con un mensaje de confirmación. |
| R6.1 | Este requisito no está implementado. |
| R7 7.1 7.1.1 7.1.2 7.1.3 7.2 7.3 7.3.1 | El sistema crea los tickets satisfactoriamente ajustándose a todos los requisitos. |
|7.4 7.4.1| El sistema no ha detectado el duplicado, requisito no implementado. | 
| R8 | En cualquier momento el ciudadano puede acceder a la información legal pulsando en Política de protección de datos personales.
| R9 | Las incidencias permiten editarse correctamente. |
| R10 | El agente puede cerrar la incidencia seleccionándola y pulsando el botón de cerrar. |
| R11 | El agente puede anidar incidencias y estas pasarán a ser subincidencias de la primera seleccionada. |
| R12 | El agente puede seleccionar las incidencias libremente. |
| R13 R13.2 | El agente puede comentar las incidencias con la longitud de texto indicada en el requisito. |
| R13.1     | Este requistio no está implementado, al usuario no le llega ninguna notificación. |
| R14       | Se pueden asignar incidencias al agente, y la incidencia indica a que agente está asignada. |
| R15 | Se permite cambiar el nombre de usuario desde el apartado Mi perfil. |
| R15.1     | La cuenta se puede eliminar accediendo al apartado Mi Perfil, una vez pulsado eliminar perfil te pide confirmación para eliminarla y una vez confirmado te cierra sesión y sale una notificación emergente avisando que se ha eliminado correctamente. |
| R15.2     | No hay ningún apartado para editar la preferencia de notificaciones, así que está no implementado. |
| R16       | No se puede cambiar la contraseña ni en el inicio de sesión ni una vez iniciada, no está implementado. |
| R17 R18 R18.1 R19 | La lista se muestra según especifican los requisitos, creando una nueva página de incidencias en cuanto hay más de 10 para seguir mostrando 10 por página, además en cada incidencia se muestra su correspondiente estado. |
| R20       | No se le muestra ningún mapa donde se sitúen las incidencias al agente, no implementado. |
| R21       | No se le muestra ningún apartado de estadística al agente, no implementado. |
| R22       | Por motivos de tiempo este requisito es imposible probarlo, así que no está testeado, pero hablando con el departamento de desarrollo me han confirmado que no está implementado. |
| R23 R24   | Usando Wireshark se ha comprobado que el servidor usa el protocolo https y SSL para conectarse y para realizar el intercambio de paquetes. |
