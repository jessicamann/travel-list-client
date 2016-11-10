#!/bin/bash

rm -rf db/data && rm -rf db/logfile
echo "removed previous data and logfile"

initdb -D db/data/
echo "initializing db"

pg_ctl -D db/data/ -l db/logfile start
echo "starting db"

psql -h template1
\q

createdb
echo "create default db"

psql -f places.sql
echo "create default table places"

