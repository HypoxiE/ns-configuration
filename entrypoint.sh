#!/bin/sh
set -e

envsubst < /etc/powerdns/pdns.conf.template > /etc/powerdns/pdns.conf

exec su -s /bin/sh -c "pdns_server" pdns
