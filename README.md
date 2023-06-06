# line-query

Para elaborar preguntas en la línea de comandos CLI
se necesita utilizar **streams** lo cual hace un
poco dificil hacer preguntas y recojer las respuestas
del usuario, es por eso entra en acción ***line-query***
que hace abstracción mediante la definición de un valor
de referencia **Question** para simplificar la ardua tarea
de elaborar un conjunto de funciones para el trabajo de *prompt*.
  
Este es un simple ejemplo clase **Question**:

```javascript
const { Question } = require("line-query");

const query = new Question([
    ["name", "What's your name? :"],
    ["age", "What's your age old? :"],
    ], management);

function management (response) {
    console.log(response);
}
```