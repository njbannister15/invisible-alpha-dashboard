#!/bin/bash
printf "trifecta.zookeeper.host=${ZK_HOSTS}" >> ~/.trifecta/config.properties 
trifecta-ui 
