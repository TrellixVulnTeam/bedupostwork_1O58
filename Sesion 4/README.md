<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a>
    <img src="https://upload.wikimedia.org/wikipedia/commons/4/43/Cognizant_logo_2022.svg" alt="Logo">
  </a>

<h3 align="center">QA Automation Testing</h3>
<h4 align="center">Sesion 4 - Automated Test Types</h4>

## Integrantes

* Roberto Bertrand Lizárraga
* Iván Montiel Cardona
* Mungarro Echeverría Héctor
* Salmerón González Victor

## Desarrollo

Durante este postwork debemos implementar un endpoint que funja como sistema de autenticación y nos regrese un token que permita validar la identidad del usuario y sus privilegios en subsecuentes peticion

Define cuál será el plan de pruebas a seguir y describe los casos de uso en formato **GIVEN**, **WHEN**, **THEN**
Protege el endpoint contra ataques de fuerza bruta
Se debe contar con pruebas unitarias, de integración y funcionales.

## Instrucciones

Dentro del repositorio de postworks crea un documento donde se definan los requerimientos en formato GIVEN, WHEN, THEN.
En el archivo app.js crea una nuevo endpoint con la ruta /authentication
Implementa la función getToken dentro del archivo Login.js
Si las credenciales son correctas codificar la información del usuario ( {email: "user@mail.com"} ) Puedes utilizar la función base64
Para proteger contra ataques de fuerza bruta una primera aproximación es limitar el intento de logins para una cuenta. Ejemplo, si la cuenta usuario@mail.com acumula tres intentos de inicio de sesión fallidos, bloquear los intentos de sesión para esta cuenta por 5 minutos.
Añade las pruebas correspondientes en el archivo TestApp.js

## Reflexiones finales

¿Terminaste la actividad? Responde las siguientes preguntas:

En caso de que un token fuese comprometido ¿Como podríamos invalidar el token?
¿Qué estrategia implementaste para proteger el endpoint de ataques de fuerza bruta?
¿Existe duplicidad entre tus pruebas unitarias, de integración y funcionales?

### Resultados

* **GIVEN** un usario
* **WHEN** el usuario ingrese sus credenciales correctamente
* **THEN** el sistema concatenara y codificara su información de usuario.

* **GIVEN** un usuario
* **WHEN** el usuario intente ingresar 3 veces con una contraseña incorrecta
* **THEN** el sistema bloqueara al usuario por 5 minutos.


## Licencia
Distribuido bajo la licencia MIT. Consulte `LICENCE` para obtener más información.

##### Equipo 2