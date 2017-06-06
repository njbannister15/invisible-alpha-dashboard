#!/bin/bash


 docker build -t invisible-alpha/kafka-zookeeper .
 docker build -t invisible-alpha/zookeeper zookeeper/.
 docker build -t invisible-alpha/kafka kafka/.