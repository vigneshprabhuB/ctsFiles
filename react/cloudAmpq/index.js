var mqtt = require('mqtt'), url = require('url');
// Parse
var mqtt_url = url.parse('mqtt://broker.mqttdashboard.com:1883/testtopic/1');
var url = "mqtt://" + mqtt_url.host;
console.log(url);
//username: auth[0] + ":" + auth[0] if you are on a shared instance
var options = {
  port: mqtt_url.port,
  clientId: 'clientId-' + Math.random().toString(16).substr(2, 8),
  
};

// Create a client connection
var client = mqtt.connect(url, options);
console.log('111111-----1111111');

client.on('connect', function() { // When connected
    console.log('Connecting...');

//   // subscribe to a topic
  // client.subscribe('hello/world', function() {
  //   // when a message arrives, do something with it
  //   client.on('message', function(topic, message, packet) {
  //     console.log("Received '" + message + "' on '" + topic + "'");
  //   });
  // });

  //publish a message to a topic
  client.publish('hello/world', new Date().toISOString(), function() {
    console.log("Message is published");
    client.end(); // Close the connection when published
  });
});