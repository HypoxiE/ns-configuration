#!/bin/sh
set -e

cat > "$DNSCONTROL_CREDS" <<EOF
{
  "pdns": {
    "TYPE": "POWERDNS",
    "apiKey": "${PDNS_API_KEY}",
    "apiUrl": "${PDNS_API_URL}",
    "serverName": "localhost"
  }
}
EOF

exec dnscontrol "$@" --creds="$DNSCONTROL_CREDS"
