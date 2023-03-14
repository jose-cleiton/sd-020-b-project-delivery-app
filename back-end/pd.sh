#!/bin/bash
 sudo chown -R $USER:$USER data

 chmod 777 data
 sudo npx sequelize-cli db:create --url mysql://root:123456@localhost:3306/delivery-app
