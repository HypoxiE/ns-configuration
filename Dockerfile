FROM powerdns/pdns-auth-49

USER root

RUN apt update && apt install -y gettext-base \
    && rm -rf /var/lib/apt/lists/*

COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

ENTRYPOINT ["/entrypoint.sh"]