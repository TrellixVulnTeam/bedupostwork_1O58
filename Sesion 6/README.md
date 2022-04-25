<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a>
    <img src="https://upload.wikimedia.org/wikipedia/commons/4/43/Cognizant_logo_2022.svg" alt="Logo">
  </a>

<h3 align="center">QA Automation Testing</h3>
<h4 align="center">Sesion 6 - Testing processes in agile</h4>

## Integrantes

* Roberto Bertrand Lizárraga
* Iván Montiel Cardona
* Mungarro Echeverría Héctor
* Salmerón González Victor

## Desarollo
A continuación se describen algunas historias de usuario

Al consultar los detalles de una inversión podemos ver el monto final (monto inicial + intereses - impuestos)
El sistema calculará el porcentaje de ISR a pagar
Define los escenarios a probar
Realiza pruebas unitarias o de integración
Implementa la funcionalidad

### Requerimientos

* El usuario podría iniciar sesión utilizando su correo electrónico y contraseña, cuenta de facebook o cuenta de google.
* Si el usuario ingresa una contraseña incorrecta el sistema se lo indicará.
* Si el usuario ingresa un correo electrónico no registrado el sistema se lo indicará.
* Si un usuario intenta iniciar sesión con un correo electrónico ligado a una cuenta de Google de la que ya existe una cuenta, se le indica que el correo indicado ya está registrado y que utilice el botón de Google
* Si un usuario intenta iniciar sesión con un correo electrónico ligado a una cuenta de Facebook de la que ya existe una cuenta, se le indica que el correo indicado ya está registrado y que utilice el botón de Google

### Instrucciones

* Agrega los casos de pruebas que consideres necesarios
* En nuestro archivo app.js crea una nuevo endpoint de tipo GET con ruta get-details que recibirá como queryparam el id de la inversión
* Crear un nuevo método dentro la entidad Investment llamado getFinalAmountAfterTaxes
* Implementa la lógica para calcular los impuestos a pagar
* Implementa la lógica para obtener el valor final de la inversión (monto inicial + intereses - impuestos)
* Ejecuta las pruebas.

### Indicaciones generales

* Historia de usuario general que describa la siguiente funcionalidad: el usuario podría iniciar sesión utilizando su correo electrónico y contraseña, cuenta de facebook o cuenta de google.
* Descripción en formato `BDD` para el requerimiento: si el usuario ingresa una contraseña incorrecta el sistema se lo indicará.
* Descripción en formato `BDD` para el requerimiento: si el usuario ingresa un correo electrónico no registrado el sistema se lo indicará.
* Descripción en formato `BDD` para el requerimiento: si un usuario intenta iniciar sesión con un correo electrónico ligado a una cuenta de Google de la que ya existe una cuenta, se le indica que el correo indicado ya está registrado y que utilice el botón de Google
* Descripción en formato `BDD` para el requerimiento: si un usuario intenta iniciar sesión con un correo electrónico ligado a una cuenta de Facebook de la que ya existe una cuenta, se le indica que el correo indicado ya está registrado y que utilice el botón de Facebook

### Resultados

A continuación video de evidencias: [Evidencias.zip](https://github.com/victorjair/bedupostwork/raw/master/Evidencia%20Postwork%20Sesion%2006.zip)






## Licencia
Distribuido bajo la licencia MIT. Consulte `LICENCE` para obtener más información.

##### Equipo 2

