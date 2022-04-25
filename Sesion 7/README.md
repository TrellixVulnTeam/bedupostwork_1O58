<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a>
    <img src="https://upload.wikimedia.org/wikipedia/commons/4/43/Cognizant_logo_2022.svg" alt="Logo">
  </a>

<h3 align="center">QA Automation Testing</h3>
<h4 align="center">Sesion 7 - Integration testing</h4>

## Integrantes

* Roberto Bertrand Lizárraga
* Iván Montiel Cardona
* Mungarro Echeverría Héctor
* Salmerón González Victor

## Desarollo

Durante este postwork continuaremos con el desarrollo del software inversiones implementado durante el work. En este postwork nos enfocaremos en el desarrollo de la UI de nuestro software.

A continuación se describen algunas historias de usuario

* Al consultar los detalles de una inversión podemos ver el monto final (monto inicial + intereses - impuestos).
* El sistema calculará el porcentaje de ISR a pagar.
* Define los escenarios a probar.
* Realiza pruebas unitarias o de integración.
* Implementa la funcionalidad.

### Instrucciones

* Crea una aplicación en `Vue.js`
* Agrega los casos de pruebas que consideres necesarios.
* Crea una nueva view o componente para mostrar el detalles de las inversiones.
* Crear la lógica necesaria para obtener los detalles de la inversión desde nuestra API.
* Ejecuta las pruebas.

### Resultados

A continuación video de evidencias: [Evidencias.mov](https://github.com/victorjair/bedupostwork/raw/master/Sesion%207/Evidencias_Postwork_Sesion_07.mov)


Código Fuente. [investment-be](https://github.com/victorjair/bedupostwork/tree/master/Sesion%207/investment-be)

### Reflexiones Finales

1. **¿Decidiste probar directamente la interfaz gráfica, los casos de uso o ambos? ¿Por qué?**
   * Se probaron directamente los casos de uso, tanto del POST como del GET, esto en gran parte debido a la falta de tiempo para concretar la actividad.
3. **¿Qué ventajas tiene probar directamente la interfaz gráfica?**
   * Mayor control respecto a la información introducida, además de evaluar desde el punto de vista del usuario final.
5. **¿Qué ventaja tiene probar los casos de uso?**
   * Buscar cualquier desperfecto en el codigo implementado y resolverlo antes de la liberación al publico en general, y para documentar las pruebas funcionales.

## Licencia
Distribuido bajo la licencia MIT. Consulte `LICENCE` para obtener más información.

##### Equipo 2
