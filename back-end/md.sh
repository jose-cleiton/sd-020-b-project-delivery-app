#!/bin/sh

DB_PASS=$DB_PASS
DB_PORT=$DB_PORT
DB_USER=$DB_USER
DB_HOST=$DB_HOST
APP_PORT=$APP_PORT
JWT_SECRET=$JWT_SECRET
DIALECT=$DIALECT
DIR=./src/database/models
DB_NAME=delivery-app

sequelize-auto -o "$DIR" -d "$DB_NAME" -h "$DB_HOST" -p "$DB_PORT" -u "$DB_USER" -x "$DB_PASS" -e "$DIALECT"
