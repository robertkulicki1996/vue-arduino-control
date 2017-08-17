const http = require('http');
const socketIo = require('socket.io');

const port = process.env.PORT || 5000;
const server = http.createServer().listen(port, () => { });

const five = require('johnny-five');

const board = new five.Board();

const pin = {
  11: {
    led: {
      on: () => console.log('on'),
      off: () => console.log('off'),
      blink: () => console.log('blink'),
      fade: () => console.log('fade'),
    },
  },
};

const io = socketIo(server);

board.on('ready', () => {
  const led = new five.Led(11);
  led.off();
  pin[11].led = led;

  const photoresistor = new five.Sensor({
    pin: 'A2',
    freq: 500,
  });

  board.repl.inject({
    pot: photoresistor,
  });
   
  /*

  // "data" get the current reading from the photoresistor
  photoresistor.on('data', () => {
    console.log(photoresistor.value);
    if (photoresistor.value > 200) {
      pin[11].led.on();
      // define interactions with client
      io.sockets.on('connection', (socket) => {
        // send data to client
        socket.emit('stream', { title: 'Światełko się pali' });
      });
    } else {
      pin[11].led.off();
    }
  });

  */
});

io.sockets.on('connection', (socket) => {
  socket.on('message', (channel, message, value) => {
    if (channel === 'on') pin[message].led.on();
    if (channel === 'off') pin[message].led.stop().off();
    if (channel === 'blink') pin[message].led.blink(value);
    if (channel === 'fade') {
      pin[message].led.fade({
        easing: 'outSine',
        duration: 5000,
        cuePoints: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.9, 0.9, 1.0],
        keyFrames: [0, 250, 25, 150, 100, 125, 0, 250, 25, 150, 100, 125, 0],
      });
    }
  });
});
