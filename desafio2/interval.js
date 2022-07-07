const delay = ret => {for (let i=1; i<ret*3e6; i++);}

function tareasConDelay (num){
    console.log(`Tarea ${num}`);
    delay(1000)
}

tareasConDelay(1);
tareasConDelay(2);
tareasConDelay(3);
tareasConDelay(5);
console.log(`Tareas Finalizadas`);