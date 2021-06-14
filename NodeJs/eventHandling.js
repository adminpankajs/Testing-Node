const EventEmitter = require('events');

const customEmitter = new EventEmitter();



customEmitter.on('response',(name,id)=>{
    console.log(`Data received from username : ${name} and id : ${id}`);
})
customEmitter.emit('response','shivam',50, () => {
    console.log("Some other logic here");
})
