import amqplib from 'amqplib';

async function main() {
  const queue = 'tasks';
  const conn = await amqplib.connect('amqp://localhost');

  const ch1 = await conn.createChannel();
  await ch1.assertQueue(queue);

  ch1.consume(queue, (msg) => {
    if (msg !== null) {
      console.log('Recieved:', msg.content.toString());
      ch1.ack(msg);
    } else {
      console.log('Consumer cancelled by server');
    }
  });
}
main();
