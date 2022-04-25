<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a>
    <img src="https://upload.wikimedia.org/wikipedia/commons/4/43/Cognizant_logo_2022.svg" alt="Logo">
  </a>

<h3 align="center">QA Automation Testing</h3>
<h4 align="center">Sesion 1 - QA Fundamentals</h4>

## Integrantes

* Roberto Bertrand Lizárraga
* Iván Montiel Cardona
* Mungarro Echeverría Héctor
* Salmerón González, Victor

## Desarollo
A continuación realizaremos un método que nos permite hacer conversiones de PascalCase y snake_case a camelCase

### Instrucciones

En el archivo StringOperations.js añade una función llamada: castPasalCaseToCamelCase
Realiza su implementación
En el archivo TestStringOperations.js añade la función testCastPasalCaseToCamelCase
Realiza las pruebas que consideres necesarias
Repite los pasos anteriores ahora para la función castSnakeCaseToCamelCase

### Resultados

`StringOperations.js`
```javascript
const castPascalCaseToSnakeCase = (pascalCaseString) => {
    return pascalCaseString.split(/(?=[A-Z])/).join('_').toLowerCase();
}

const castSnakeCaseToPascalCase = (snakeCaseString) => {
    const words = snakeCaseString.split('_');
    return words.map(word => word[0].toUpperCase() + word.substr(1)).join('');
}

const castPasalCaseToCamelCase = (CamelString) => {
  return CamelString.replace(/\W+(.)/g, function(match, chr) {
      return chr.toUpperCase();
  });
   
}

module.exports = {castPascalCaseToSnakeCase};
```

`TestStringOperations.js`
```javascript
const testCastPasalCaseToCamelCase = () => {
    castPasalCaseToCamelCase("esto es un ejemplo") === "estoEsUnEjemplo" ? console.log("Test 1 paso") : console.log("Test 1 fallo")
    console.log(castPasalCaseToCamelCase("esto es un ejemplo"))
}

const testCastPascalCaseToSnakeCase = () => {
    executeTest("EstoEsUnEjemplo","esto_es_un_ejemplo",castPascalCaseToSnakeCase);
    executeTest("otroEjemplo","otro_ejemplo",castPascalCaseToSnakeCase);
    executeTest("otroejemplo","otroejemplo",castPascalCaseToSnakeCase);
    //castPascalCaseToSnakeCase("EstoEsUnEjemplo") === "esto_es_un_ejemplo" ? console.log("Test 1 pass") : console.log("Test 1 fail")
    //castPascalCaseToSnakeCase("otroEjemplo") === "otro_ejemplo" ? console.log("Test 2 pass") : console.log("Test 2 fail")
    //castPascalCaseToSnakeCase("otroejemplo") === "otroejemplo" ? console.log("Test 3 pass") : console.log("Test 3 fail")
}

const testCastSnakeCaseToPascalCase = () => {
    castSnakeCaseToPascalCase("esto_es_un_ejemplo") === "EstoEsUnEjemplo" ? console.log("Test 1 pass") : console.log("Test 1 fail")
    castSnakeCaseToPascalCase("otro_ejemplo") === "OtroEjemplo" ? console.log("Test 2 pass") : console.log("Test 2 fail")
    castSnakeCaseToPascalCase("otroejemplo") === "Otroejemplo" ? console.log("Test 3 pass") : console.log("Test 3 fail")
}

const testCastPascalCaseToSnakeCase2 = () => {
    const pascalCaseString = "EstoEsUnEjemplo";
    const expectedSnakeCaseString = "Esto_es_un_ejemplo";
    const actualSnakeCaseString = castPascalCaseToSnakeCase(pascalCaseString);
    if (actualSnakeCaseString !== expectedSnakeCaseString) {
        console.log(`Test fail expected output: ${expectedSnakeCaseString} actual output: ${actualSnakeCaseString}`)
    } else {
        console.log("El test paso exitosamente")
    }
}

const executeTest = (input, expectedOutput, functionToExecute) => {
    const actualOutput = functionToExecute(input)

    if (actualOutput !== expectedOutput) {
        console.log(`Test fail. Expected output: ${expectedOutput}  actual output: ${actualOutput}`)
    } else {
        console.log("Test pass")
    }
}

testCastPascalCaseToSnakeCase();
//executeTest();
//testCastPascalCaseToSnakeCase2();
//testCastPasalCaseToCamelCase();
//testCastSnakeCaseToPascalCase();
```

### Reflexiones Finales

Una vez que hayas terminado la actividad responde las siguientes preguntas:

1. **¿Cómo elegiste los casos de prueba para validar el correcto funcionamiento del sistema?**
   * Probar el código con resultados esperados.
2. **¿Después de concluir el reto refactorizaste el código? ¿Qué cambios realizaste?**
    * Modifique las funciones de prueba para que me dieran tres pruebas con datos diferentes, posteriormente hice una prueba executeTest para ahorrar tiempo en la prueba de las funciones ya que esta prueba me daba la oportunidad de probar todas las anteriores sin la necesidad de escribir una prueba para cada caso
3. **¿Utilizaste un método común o múltiples métodos individuales? ¿Por qué?**
    * Utilice un método común ya que la función era básicamente la misma en las conversiones, una cadena de entrada, una de salida y la llamada a la función así que se simplifico con un método común que ingresando los parámetros nos diera los resultados.

## Licencia
Distribuido bajo la licencia MIT. Consulte `LICENCE` para obtener más información.

##### Equipo 2
