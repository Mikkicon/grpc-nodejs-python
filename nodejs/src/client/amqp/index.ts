import amqplib from 'amqplib';

async function main() {
  const queue = 'tasks';
  const conn = await amqplib.connect('amqp://localhost');

  const ch1 = await conn.createChannel();
  await ch1.assertQueue(queue);

  const ch2 = await conn.createChannel();

  setInterval(() => {
    ch2.sendToQueue(queue, Buffer.from('something to do'));
  }, 1000);
}
main();
