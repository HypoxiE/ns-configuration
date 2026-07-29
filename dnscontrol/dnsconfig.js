FROM ghcr.io/stackexchange/dnscontrol:latest

COPY entrypoint.sh /entrypoint.sh

ENTRYPOINT ["/entrypoint.sh"]hypoxie@p623433:/krek_projects/ns-configuration/dnscontrol$ cat dnsconfig.js
var REG_NONE = NewRegistrar("none");

var DSP = NewDnsProvider("pdns", {
    default_ns: [
        "ns1.krekstreamevents.ru."
    ]
});

var SOA_DEFAULT = [
    SOA(
        "@",
        "ns1.krekstreamevents.ru.",
        "kosmaer42.gmail.com.",
	    // refresh:
        7200,
	    // retry:
        900,
	    // expire:
        604800,
	    // minimum TTL:
        1800,
        TTL("30m")
    )
];

DEFAULT_TTL = TTL("10m");

D("krekstreamevents.ru", REG_NONE, DnsProvider(DSP),
    A("@", "178.208.65.47", TTL("5h")),

    A("rimafon", "178.208.65.47", TTL("30m")),

    A("ns1", "178.208.65.47"),
);

D_EXTEND("krekstreamevents.ru", SOA_DEFAULT);
