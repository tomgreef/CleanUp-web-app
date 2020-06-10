### __Arquitectura y diagramas UML__ 



### __Documento generado por :__ 
 
   ### __Departamento de Diseño de Clean Up__
   
## Versiones
| Name | Date    | Reason For Changes  | Version   |
| ---- | ------- | ------------------- | --------- |
| Departamento de Requisitos | 10/06/2020 |  Versión final | 1.0 |

## __Arquitectura utilizada__

Se va a utilizar una arquitectura absada en MVVM (Modelo-Vista-VistaModelo), la cual es implementada por Vue.js, el framework de javascript que será utilizado por el equipo de desarrollo. Esta arquitectura permite utilizar una vista en la que se mostrará al usuario la información formateando los datos de la forma más adecuada, mientras que por otro lado se tiene el modelo que es donde se almacenan los datos e información del sistema que será enviada.

![enter image description here](https://static.packt-cdn.com/products/9781786469946/graphics/image_02_002.jpg)

En el esquema anterior se muestran los dos elementos nombrados y una conexión central de la VistaModelo, la cual se encarga de mantener los datos actualizados a tiempo real mediante una serie de directrices y watchers que vigilan la información mostrada al usuario y la información actual del servidor con el fin de encontrar distintivos y así actualizar los datos.

Se ha optado por esta arquitectura debido al tipo de implementación y sistema que se va a llevar a cabo. Basando el proyecto en un diseño completamente web es conveniente que partes de la misma se actualicen a tiempo real sin necesidad de recargar, para mantener un dinamismo y compromiso de velocidad con el ciudadano. Además, al ser una tecnología utilizada por el equipo de desarrollo en distintas ocasiones se tiene una mejor idea del funcionamiento, mejorando así los tiempos de desarrollo.