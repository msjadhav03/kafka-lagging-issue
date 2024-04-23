const { Kafka } = require("kafkajs");

const kafka = new Kafka({
  clientId: "my-app2",
  brokers: ["localhost:9092"],
});

const consumer = kafka.consumer({ groupId: "kafka", autoCommit: false });

const consume = async () => {
  await consumer.connect();
  await consumer.subscribe({ topic: "kafka-demo-topic" });
  //   await consumer.seekToCommitted();
  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      await setTimeout(async () => {
        console.log(`Received message: ${message.value.toString()}`);
        await consumer.commitOffsets([
          { topic, partition, offset: message.offset },
        ]);
      }, 60000);
    },
  });
};

consume();
module.exports = {
  consumer,
};
