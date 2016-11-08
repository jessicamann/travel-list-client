#!/bin/bash

rm -rf db/data && rm -rf db/logfile

initdb -D db/data/
pg_ctl -D db/data/ -l db/logfile start

psql -h template1

createdb

psql -f places.sql


