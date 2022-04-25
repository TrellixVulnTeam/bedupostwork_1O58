<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a>
    <img src="https://upload.wikimedia.org/wikipedia/commons/4/43/Cognizant_logo_2022.svg" alt="Logo">
  </a>

<h3 align="center">QA Automation Testing</h3>
<h4 align="center">Sesion 2 - Testing processes in agile</h4>

## Integrantes

* Roberto Bertrand Lizárraga
* Iván Montiel Cardona
* Mungarro Echeverría Héctor
* Salmerón González Victor

## Desarollo
Generar la historia de usuario (formato **AS**, **WANT**, **SO**) y las descripciones `BDD` (formato **GIVEN**, **WHEN**, **THEN**) necesarias para el caso de uso de iniciar sesión en nuestra plataforma.

### Requerimientos

* El usuario podría iniciar sesión utilizando su correo electrónico y contraseña, cuenta de facebook o cuenta de google.
* Si el usuario ingresa una contraseña incorrecta el sistema se lo indicará.
* Si el usuario ingresa un correo electrónico no registrado el sistema se lo indicará.
* Si un usuario intenta iniciar sesión con un correo electrónico ligado a una cuenta de Google de la que ya existe una cuenta, se le indica que el correo indicado ya está registrado y que utilice el botón de Google
* Si un usuario intenta iniciar sesión con un correo electrónico ligado a una cuenta de Facebook de la que ya existe una cuenta, se le indica que el correo indicado ya está registrado y que utilice el botón de Google

### Instrucciones

* En este documento en la sección de indicaciones generales añadiremos lo enlistado en los siguientes puntos.
* Crear una historia de usuario general en formato **AS**, **WANT**, **SO**.
* Crear descripciones para cada uno de los requerimientos en formato **GIVEN**, **WHEN**, **THEN**.

### Indicaciones generales

* Historia de usuario general que describa la siguiente funcionalidad: el usuario podría iniciar sesión utilizando su correo electrónico y contraseña, cuenta de facebook o cuenta de google.
* Descripción en formato `BDD` para el requerimiento: si el usuario ingresa una contraseña incorrecta el sistema se lo indicará.
* Descripción en formato `BDD` para el requerimiento: si el usuario ingresa un correo electrónico no registrado el sistema se lo indicará.
* Descripción en formato `BDD` para el requerimiento: si un usuario intenta iniciar sesión con un correo electrónico ligado a una cuenta de Google de la que ya existe una cuenta, se le indica que el correo indicado ya está registrado y que utilice el botón de Google
* Descripción en formato `BDD` para el requerimiento: si un usuario intenta iniciar sesión con un correo electrónico ligado a una cuenta de Facebook de la que ya existe una cuenta, se le indica que el correo indicado ya está registrado y que utilice el botón de Facebook

### Resultados

* **GIVEN** un usuario **WHEN** ingresa una contraseña incorrecta **THEN** el sistema se lo indicara 
* **GIVEN** un usuario **WHEN** ingresa un correo electrónico no registrado **THEN** el sistema se lo indicara 
* **GIVEN** un usuario **WHEN** intenta iniciar una sesión con un coreo electrónico ligado a una cuenta de Google de la que ya existe una cuenta **THEN** se le indica que el correo indicado ya esta registrado y que utilice el botón de Google 
* **GIVEN** un usuario **WHEN** intenté iniciar sesión con un correo electrónico ligado a una cuenta de Facebook de la que ya existe una cuenta **THEN** se le indica que el correo indicado ya esta registrado y que utilice el botón de Facebook


## Licencia
Distribuido bajo la licencia MIT. Consulte `LICENCE` para obtener más información.

##### Equipo 2
