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

D("krekstreamevents.ru", REG_NONE, DnsProvider(DSP),
  DefaultTTL("5h"),

  CNAME("www", "rimafon", TTL("30m")),
  A("@", "178.208.65.47", TTL("30m")),

  A("rimafon", "178.208.65.47"),
  A("admin-rimafon", "178.208.65.47"),
  
  A("ns1", "178.208.65.47"),
);

D_EXTEND("krekstreamevents.ru", SOA_DEFAULT);
