FROM powerdns/pdns-auth-49

RUN apt update && apt install -y gettext-base \
    && rm -rf /var/lib/apt/lists/*

COPY entrypoint.sh /entrypoint.sh

ENTRYPOINT ["/entrypoint.sh"]