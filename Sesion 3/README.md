<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a>
    <img src="https://upload.wikimedia.org/wikipedia/commons/4/43/Cognizant_logo_2022.svg" alt="Logo">
  </a>

<h3 align="center">QA Automation Testing</h3>
<h4 align="center">Sesion 3 - Plan, Design & Excecute</h4>

## Integrantes

* Roberto Bertrand Lizárraga
* Iván Montiel Cardona
* Mungarro Echeverría Héctor
* Salmerón González Victor

## Desarollo
Durante nuestro work, desarrollamos un plan de pruebas para un escenario donde nos encontrábamos en Netflix a inicios de los 90s. Ahora debemos crear/adaptar el plan de pruebas para el siguiente escenario:
* Son los años 2000s, Reed Hastings, fundador de Netflix, quiere hacer un cambio en la estrategia de negocios, pasarán de ser un portal de renta de DVD enviados a domicilio a convertirse en una plataforma de streaming.

### Instrucciones

* Define cuál será el plan de pruebas a seguir para este cambio en la estrategia de negocios.
* Considera incluir estrategias de shift left testing.
* El plan de pruebas debe contar con los mismos elementos que el plan de pruebas desarrollado durante el work.

### Resultados

#### Introducción
Alquilar un DVD por internet y enviar el DVD por paquetería al usuario.
Objetivos
* Completar el 90% de los casos de prueba en un período de 45 días laborales.
* Se utilizará MS Teams para la comunicación del personal involucrado.
* El equipo de desarrolladores estarán encargados de las pruebas unitarias.
* Se utilizará el documento “políticas del cliente” como estandar de nivel de servicio.

#### Tareas
Crear las pruebas necesarias para:
* que un nuevo usuario pueda registrarse.
* que el usuario registrado pueda ingresar al Sistema de streaming en línea.
* que el usuario pueda elegir de un catalogo la película deseada.
* que el usuario pueda ver en linea la película elegida.
* que el usuario pueda pagar mensual o anualmente su suscripción.
* Probar la correcta aplicación del cargo.

#### Alcance
Ejecutar la aplicacion en un ambiente de pruebas controlado,  limitando al usuario solo a que realice su inicio de session, se valide sí su suscripción esta vigente, seleccione de un titulo del catálogo existente y la reproducción del titulo seleccionado en línea.

#### Estrategias de prueba.
##### Pruebas unitarias
* ***Definicion***: Se realizaran las pruebas contempladas en la Etapa 1, realizando pruebas unitarias automatizadas diarias durante 3 semanas.
* ***Participantes***: El equipo de QA.
* ***Metodologias***:Las pruebas unitarias basandose en los criterios de aceptación de cada historia integrandolas con CI. Los scripts de prueba serán responsabilidad del equipo QA.  Estas pruebas se llevarán a cabo durante el proceso de desarollo.  Una vez realizadas las pruebas con resultado satisfactorio se enviarán al equipo de Desarrollo.

##### Pruebas de Integracion y sistemas
* ***Definicion***: Se realizaran pruebas de Integracion durante 1 semana despues de las pruebas unitarias.
* ***Participantes***: El equipo de QA.
* ***Metodologías***: Se utilizaran herramientas de pruebas automatizadas tales como selenium y java. Estas pruebas las realizará el equipo de QA. Si el resultado de las pruebas es satisfactorio se integrara a CI y se procederá con las pruebas de desempeño y estres. Esta pruebas se realizaran durante un periodo de 1 semana. Estas pruebas deberán ser producidas en un ambiente de pruebas.

##### Pruebas de desempeño y Estres
* ***Definicion***: Las pruebas de estrés y desempeño llevan al software a casos extremos de uso, tales como un número de usuarios “máximos” conectados al mismo tiempo, redundancia de la aplicacion, consistencia de la aplicacion y los datos, exponer al Sistema a pruebas de seguridad, entre otras.
* ***Participantes***: El equipo de QA y seguridad.
* ***Metodologías***: Se utilizará la metodologia Open Source Security Testing Metodology (OSSTMM) y se llevará a cabo por el equipo de seguridad quien definira los scripts y parámetros de estas pruebas utilizando . Esta pruebas se llevará a cabo durante una semana y en caso de resultados positivos se procedera a su integracion con CI y se procedera con las purebas de Aceptacion del Usuario.

##### Pruebas de Aceptacion del usuario
* ***Definicion***: El representante del stackeholder se encargara de realizar las pruebas de aceptacion de acuerdo a los criterios definidos previamente.
* ***Participantes***: El product Owner.
* ***Metodologías***: El stackeholder o product Owner llevaran a cabo la revision del software basados en los criterios de aceptacion definidos previamente. La aceptacion del producto dependera de que este  funcione de acuerdo a estos criterios. Estas pruebas se realizaran durante un período de 1 semana.

##### Pruebas BATCH
* ***Definicion***: Se definirá un flujo de pruebas automatizadas para ser ejecutadas en lote.
* ***Participantes***: El equipo de QA
* ***Metodologías***: Se ejecutará una vez por semana el lote de pruebas definido.

#### Calendario de pruebas
* **3** Semanas de Desarrollo de pruebas untiarias.
* **1** semana para pruebas de integracion y sistemas.
* **1** semana para pruebas de desempeño y estres.
* **1** semana de pruebas de Aceptacion de usuario.

#### Funcionalidades a probar.
* Permitir al usuario iniciar sesión en la aplicacion.
* Permitir al usuario elegir su película de un catálogo.
* Permitir al usuario visualizar en línea el contenido.
* Adaptabilidad de la calidad de transmisión en base al ancho de banda.
* Permitir al usuario actualizar sus métodos de pago y tipo de suscripción.


#### Funcionalidades que no se probarán.
* No se realizaran pruebas en diferentes ambientes tales como diferentes navegadores, sistemas operativos y/o dispositivos mobiles.
* No se realizan pruebas funcionles de control de acceso tal como “recuperar contraseñas”.

#### Dependencias.
* Contar con un ambiente de pruebas.
* Se requiere un equipo de 4 personas para llevar a cabo este plan de pruebas.
* Se estima un período de 6 semanas.
* Se require de atención por parte del equipo de soporte del cliente para la creacion del ambiente de pruebas.

#### Riesgos.
* Que el ambiente de pruebas no esté operando a tiempo.
* Falta de personal para realizar las pruebas ya sea por inasistencia, enfermedad o disponibilidad.
* Que los requerimientos no este definidos en tiempo o se generen cambios en los mismos.
#### Supuestos.
* En caso de retraso en la aplicacion de las pruebas se aplicaran turnos extra para cumplir con la fecha de entrega.
* Rápida atención del equipo de soporte técnico del cliente.
* Los requerimientos definidos no sufriran cambios mayores.
* Que se cumpla con el objetivo propuesto.

### Reflexiones Finales

1. **¿Qué tan relevantes consideras que son las herramientas a utilizar en la fase de definición de un plan de pruebas?**
   * La selección de las herramientas es muy importante en gran parte ya que los resultados esperados dependera de la experiencia del tester con ellas así como para llevar a cabo la ejecución de las pruebas. 
2. **¿Adaptaste el plan de pruebas existente o creaste uno nuevo? ¿Por qué?**
   * Se adaptó al existente, por mantener los módulos existentes.
3. **¿Qué elementos se pueden mantener relevantes entre el primer plan de pruebas y el segundo?**
   * El segundo plan de pruebas tendrá una mayor cantidad de elementos ya que se incluye una nueva herramienta de pruebas.


## Licencia
Distribuido bajo la licencia MIT. Consulte `LICENCE` para obtener más información.

##### Equipo 2
