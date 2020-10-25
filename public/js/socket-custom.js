 //Socket frond-end, no uso función de flecha porque estamos en gtml y no en node
 var socket = io();
 socket.on('connect', function() {
     console.log('Conectado a servidor');
 });
 //ON es para escuchar
 socket.on('disconnect', function() {
     console.log('Perdimos conexión con el servidor');
 });

 //Emit enviar información
 socket.emit('enviarMensaje', {
     usuario: 'Raul Alejandro',
     mensaje: 'Hola mundo aqui voy'
 }, function(resp) {
     console.log('respuesta server', resp);


 });

 //Escuchar información
 socket.on('enviarMensaje', function(mensaje) {
     console.log('Servidor: ', mensaje);
 });