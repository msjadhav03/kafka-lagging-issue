# Kafka.js with Node.js

`This project is concerned to deal with kafka messages getting lost issue in case of consumer get restarted or stopped working.`

In this project we are producing messages per 5 seconds and consumer taking 1 minute to consumer each message.

# Various kafka commands

- Create kafka topic

```js
 bin/kafka-topics.sh --create --topic rca-kafka --config retention.ms=300000 --bootstrap-server localhost:9092
```

- List all Kafka Topics

```js
bin/kafka-topics.sh --list --bootstrap-server localhost:9092
```

- Check Lag of particular group

```js
bin/kafka-consumer-groups.sh --bootstrap-server localhost:9092 --describe --group kafka
```
