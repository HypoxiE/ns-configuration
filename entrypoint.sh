#!/bin/sh
set -e

envsubst < /etc/powerdns/pdns.conf.template > /etc/powerdns/pdns.conf

exec pdns_server
