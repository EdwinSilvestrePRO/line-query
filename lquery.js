const process = require("node:process");
// la clase Question para hacer preguntas desde la terminal.
module.exports.Question = class {
    #_position = 0;
    responses = {}
    constructor (qs, callBack) { 
        this.callBack = callBack;
        this.setQuery(qs);
    }
    setQuery(questions) {
        const [name, question] = questions[this.#_position];
        process.stdout.write(question);
        process.stdin
        .addListener("data", 
        buff=> this.setResponse(name, buff, questions));
    }
    setResponse(name, buff, qs) {
        this.responses[name] = buff.toString("utf8");
        if(this.#_position == (qs.length - 1)) {
            typeof this.callBack == "function"? this.callBack(this.responses) : "nothing";
            return process.exit();
        }
        else {
            this.#_position++;
            process.stdin.removeAllListeners();
            return this.setQuery(qs);
        }
    }
}