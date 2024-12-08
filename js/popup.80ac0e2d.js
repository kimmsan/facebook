(function (t) {
  function e(e) {
    for (
      var s, r, o = e[0], l = e[1], c = e[2], p = 0, d = [];
      p < o.length;
      p++
    )
      (r = o[p]),
        Object.prototype.hasOwnProperty.call(n, r) && n[r] && d.push(n[r][0]),
        (n[r] = 0);
    for (s in l) Object.prototype.hasOwnProperty.call(l, s) && (t[s] = l[s]);
    u && u(e);
    while (d.length) d.shift()();
    return i.push.apply(i, c || []), a();
  }
  function a() {
    for (var t, e = 0; e < i.length; e++) {
      for (var a = i[e], s = !0, o = 1; o < a.length; o++) {
        var l = a[o];
        0 !== n[l] && (s = !1);
      }
      s && (i.splice(e--, 1), (t = r((r.s = a[0]))));
    }
    return t;
  }
  var s = {},
    n = { popup: 0 },
    i = [];
  function r(e) {
    if (s[e]) return s[e].exports;
    var a = (s[e] = { i: e, l: !1, exports: {} });
    return t[e].call(a.exports, a, a.exports, r), (a.l = !0), a.exports;
  }
  (r.m = t),
    (r.c = s),
    (r.d = function (t, e, a) {
      r.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: a });
    }),
    (r.r = function (t) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (r.t = function (t, e) {
      if ((1 & e && (t = r(t)), 8 & e)) return t;
      if (4 & e && "object" === typeof t && t && t.__esModule) return t;
      var a = Object.create(null);
      if (
        (r.r(a),
        Object.defineProperty(a, "default", { enumerable: !0, value: t }),
        2 & e && "string" != typeof t)
      )
        for (var s in t)
          r.d(
            a,
            s,
            function (e) {
              return t[e];
            }.bind(null, s)
          );
      return a;
    }),
    (r.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
              return t["default"];
            }
          : function () {
              return t;
            };
      return r.d(e, "a", e), e;
    }),
    (r.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (r.p = "/");
  var o = (window["webpackJsonp"] = window["webpackJsonp"] || []),
    l = o.push.bind(o);
  (o.push = e), (o = o.slice());
  for (var c = 0; c < o.length; c++) e(o[c]);
  var u = l;
  i.push([0, "chunk-vendors", "chunk-common"]), a();
})({
  0: function (t, e, a) {
    t.exports = a("0a3d");
  },
  "0a3d": function (t, e, a) {
    "use strict";
    a.r(e);
    var s = a("2b0e"),
      n = function () {
        var t = this,
          e = t._self._c;
        return e(
          "div",
          { staticClass: "container", attrs: { id: "app" } },
          [e("Nav"), e("router-view")],
          1
        );
      },
      i = [],
      r = function () {
        var t = this,
          e = t._self._c;
        return e(
          "div",
          {
            staticClass:
              "has-background-primary-light is-flex is-justify-content-space-between is-align-items-center px-4 py-2",
            attrs: { id: "header" },
          },
          [
            e(
              "div",
              {
                staticClass: "icon-text has-text-weight-bold has-text-primary",
              },
              [
                e("b-icon", { attrs: { pack: "fas", icon: "users" } }),
                e("span", [t._v("Technical Soni FBGroupExtractor")]),
              ],
              1
            ),
            e(
              "div",
              { staticClass: "buttons" },
              [
                e(
                  "router-link",
                  {
                    staticClass: "button is-small is-primary is-light",
                    attrs: { to: "/" },
                  },
                  [e("b-icon", { attrs: { pack: "fas", icon: "home" } })],
                  1
                ),
                e(
                  "router-link",
                  {
                    staticClass: "button is-small is-primary is-light",
                    attrs: { to: "/help" },
                  },
                  [e("b-icon", { attrs: { pack: "fas", icon: "question" } })],
                  1
                ),
                t.userReady
                  ? e(
                      "router-link",
                      {
                        staticClass: "button is-small is-primary is-light",
                        attrs: { to: "/setting" },
                      },
                      [e("b-icon", { attrs: { pack: "fas", icon: "cog" } })],
                      1
                    )
                  : t._e(),
                t.userReady
                  ? e(
                      "router-link",
                      {
                        staticClass:
                          "",
                        attrs: { to: "" },
                      },
                      [
                      ],
                    )
                  : t._e(),
              ],
              1
            ),
          ]
        );
      },
      o = [],
      l = a("2f62"),
      c = {
        data() {
          return {};
        },
        computed: { ...Object(l["c"])(["userReady"]) },
        methods: {},
        async created() {},
      },
      u = c,
      p = a("2877"),
      d = Object(p["a"])(u, r, o, !1, null, null, null),
      f = d.exports,
      h = {
        data() {
          return {};
        },
        computed: {},
        methods: {},
        async created() {},
        components: { Nav: f },
      },
      b = h,
      m = (a("641a"), Object(p["a"])(b, n, i, !1, null, null, null)),
      v = m.exports,
      g = a("8c4f"),
      y = function () {
        var t = this,
          e = t._self._c;
        return e("div", { staticClass: "index" });
      },
      x = [],
      w = a("11a0"),
      C = {
        name: "Index",
        data() {
          return {};
        },
        computed: {},
        mixins: [w["a"]],
        methods: {},
        async created() {
          await this.bootstrap(),
            this.userReady
              ? this.$router.replace({ name: "Home" })
              : this.$router.replace({ name: "Login" });
        },
        components: {},
      },
      _ = C,
      k = Object(p["a"])(_, y, x, !1, null, null, null),
      O = k.exports,
      j = function () {
        var t = this,
          e = t._self._c;
        return e(
          "div",
          { staticClass: "home box" },
          [
            e(
              "b-field",
              { attrs: { label: "Enter Group ID / Group Link" } },
              [
                e("b-input", {
                  attrs: {
                    type: "search",
                    icon: "link",
                    placeholder: "https://www.facebook.com/groups/beNaught",
                  },
                  model: {
                    value: t.url,
                    callback: function (e) {
                      t.url = e;
                    },
                    expression: "url",
                  },
                }),
              ],
              1
            ),
            e(
              "b-button",
              {
                staticClass: "has-text-weight-bold",
                attrs: {
                  type: "is-primary",
                  disabled: t.disabled,
                  loading: t.loading,
                  outlined: "",
                  expanded: "",
                  "icon-left": "file-export",
                },
                on: { click: t.gotoDashboard },
              },
              [t._v(" EXPORT MEMBERS TO " + t._s(t.fileType.toUpperCase()))]
            ),
            e("Footer"),
          ],
          1
        );
      },
      L = [],
      T = a("9845"),
      I = a.n(T),
      E = a("076e"),
      M = a("c276"),
      P = a("a553");
    async function R(t) {
      if (!t.startsWith("https://www.facebook.com/")) {
        const e = /^\d+$/;
        return (t = t.trim()), e.test(t) ? t : "";
      }
      const e = t.split("/groups/");
      if (e.length < 2) return "";
      const a = e[1].split("/")[0];
      if (!isNaN(a)) return a;
      const s = await fetch("https://mbasic.facebook.com/groups/ " + a),
        n = await s.text();
      return $(n, /fb:\/\/group\/\?id=(\d+)/);
    }
    function $(t, e) {
      const a = e.exec(t);
      return a && a.length > 1 ? a[1] : "";
    }
    var F = {
        name: "Home",
        data() {
          return { WEB: P["d"], url: "", fileType: "csv", loading: !1 };
        },
        computed: {
          disabled() {
            return !this.url;
          },
        },
        methods: {
          async gotoDashboard() {
            if (this.loading) return;
            this.loading = !0;
            const t = await R(this.url);
            if (((this.loading = !1), !t))
              return void this.$buefy.toast.open(
                "Please enter group id / group link."
              );
            const e = Object(M["b"])("dashboard.html?pid=" + t);
            I.a.tabs.create({ url: e });
          },
        },
        async created() {
          this.fileType = await P["e"].get();
        },
        components: { Footer: E["a"] },
      },
      G = F,
      S = (a("72ce"), Object(p["a"])(G, j, L, !1, null, null, null)),
      H = S.exports,
      z = function () {
        var t = this,
          e = t._self._c;
        return e("div", { staticClass: "content box" }, [
          e(
            "div",
            { staticClass: "icon-text" },
            [
              e("b-icon", { attrs: { pack: "fas", icon: "question-circle" } }),
              e("b", [t._v("FAQs and Troubleshooting")]),
            ],
            1
          ),
          e("p", { staticClass: "block" }, [
            t._v(
              " Got a question? Something doesn’t work? Your question may was answered on our FAQ page. "
            ),
          ]),
          e("div", {}, [
            e(
              "a",
              {
                staticClass: "button is-fullwidth is-outlined",
                attrs: { href: "https://www.Technical Soni.com/", target: "_blank" },
              },
              [t._v("FAQs PAGE")]
            ),
          ]),
          e("hr"),
          e("p", [
            t._v(
              " Do you have an idea for making Technical Soni FBGroupExtractor better? We'd love to hear about it! "
            ),
          ]),
          e(
            "div",
            { staticClass: "icon-text has-text-link" },
            [
              e("b-icon", {
                attrs: { pack: "fas", icon: "envelope-open-text" },
              }),
              t._v(" atendimento@Technical Soni.com "),
            ],
            1
          ),
        ]);
      },
      B = [],
      N = {
        data() {
          return { WEB: P["d"] };
        },
      },
      A = N,
      U = Object(p["a"])(A, z, B, !1, null, null, null),
      V = U.exports,
      q = function () {
        var t = this,
          e = t._self._c;
        return e("div", { staticClass: "login box" }, [
          e(
            "div",
            {
              staticClass:
                "is-flex is-flex-direction-column is-justify-content-center is-align-items-center",
            },
            [
              e(
                "svg",
                {
                  attrs: {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    width: "64",
                    height: "64",
                  },
                },
                [
                  e("path", { attrs: { fill: "none", d: "M0 0h24v24H0z" } }),
                  e("path", {
                    attrs: {
                      d: "M3.783 2.826L12 1l8.217 1.826a1 1 0 0 1 .783.976v9.987a6 6 0 0 1-2.672 4.992L12 23l-6.328-4.219A6 6 0 0 1 3 13.79V3.802a1 1 0 0 1 .783-.976zM5 4.604v9.185a4 4 0 0 0 1.781 3.328L12 20.597l5.219-3.48A4 4 0 0 0 19 13.79V4.604L12 3.05 5 4.604zM12 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm-4.473 5a4.5 4.5 0 0 1 8.946 0H7.527z",
                      fill: "rgba(181,181,181,1)",
                    },
                  }),
                ]
              ),
              e(
                "p",
                {
                  staticClass:
                    "is-size-6 has-text-grey-light py-4 has-text-centered",
                },
                [t._v(" Please sign in to save your settings. ")]
              ),
              e(
                "b-button",
                {
                  attrs: {
                    type: "is-default",
                    outlined: "",
                    loading: t.loading,
                  },
                  on: { click: t.login },
                },
                [
                  e("div", { staticClass: "icon-text" }, [
                    e(
                      "svg",
                      {
                        attrs: {
                          width: "24",
                          height: "24",
                          viewBox: "0 0 24 24",
                          fill: "none",
                          xmlns: "http://www.w3.org/2000/svg",
                        },
                      },
                      [
                        e("path", {
                          attrs: {
                            d: "M21.8055 10.0415H21V10H12V14H17.6515C16.827 16.3285 14.6115 18 12 18C8.6865 18 6 15.3135 6 12C6 8.6865 8.6865 6 12 6C13.5295 6 14.921 6.577 15.9805 7.5195L18.809 4.691C17.023 3.0265 14.634 2 12 2C6.4775 2 2 6.4775 2 12C2 17.5225 6.4775 22 12 22C17.5225 22 22 17.5225 22 12C22 11.3295 21.931 10.675 21.8055 10.0415Z",
                            fill: "#FFC107",
                          },
                        }),
                        e("path", {
                          attrs: {
                            d: "M3.15302 7.3455L6.43851 9.755C7.32751 7.554 9.48052 6 12 6C13.5295 6 14.921 6.577 15.9805 7.5195L18.809 4.691C17.023 3.0265 14.634 2 12 2C8.15902 2 4.82802 4.1685 3.15302 7.3455Z",
                            fill: "#FF3D00",
                          },
                        }),
                        e("path", {
                          attrs: {
                            d: "M12 22C14.583 22 16.93 21.0115 18.7045 19.404L15.6095 16.785C14.5717 17.5742 13.3037 18.001 12 18C9.39897 18 7.19047 16.3415 6.35847 14.027L3.09747 16.5395C4.75247 19.778 8.11347 22 12 22Z",
                            fill: "#4CAF50",
                          },
                        }),
                        e("path", {
                          attrs: {
                            d: "M21.8055 10.0415H21V10H12V14H17.6515C17.2571 15.1082 16.5467 16.0766 15.608 16.7855L15.6095 16.7845L18.7045 19.4035C18.4855 19.6025 22 17 22 12C22 11.3295 21.931 10.675 21.8055 10.0415Z",
                            fill: "#1976D2",
                          },
                        }),
                      ]
                    ),
                    e("span", { staticClass: "ml-2" }, [
                      t._v("Sign in with Google"),
                    ]),
                  ]),
                ]
              ),
            ],
            1
          ),
        ]);
      },
      D = [],
      W = a("7868"),
      Z = {
        data() {
          return { loading: !1 };
        },
        methods: {
          ...Object(l["b"])(["setUserInfo", "setUserReady"]),
          async login() {
            (this.loading = !0), Object(W["c"])(W["a"].LOGIN);
          },
        },
        mounted() {
          Object(W["b"])(W["a"].RESP_LOGIN, ({ code: t, err: e, res: a }) => {
            switch (((this.loading = !1), t)) {
              case 1:
                this.setUserInfo(a),
                  this.setUserReady(!0),
                  this.$router.replace({ name: "Index" });
                break;
              case -1:
                console.error(e), this.$buefy.toast.open("please retry.");
                break;
              case 0:
              default:
                break;
            }
          });
        },
      },
      Q = Z,
      J = Object(p["a"])(Q, q, D, !1, null, null, null),
      X = J.exports,
      Y = function () {
        var t = this,
          e = t._self._c;
        return e(
          "div",
          { staticClass: "setting box" },
          [
            e(
              "b-field",
              { attrs: { label: "Export file type" } },
              [
                e(
                  "b-radio",
                  {
                    attrs: { "native-value": "csv", size: "is-small" },
                    model: {
                      value: t.fileType,
                      callback: function (e) {
                        t.fileType = e;
                      },
                      expression: "fileType",
                    },
                  },
                  [t._v(" CSV ")]
                ),
                e(
                  "b-radio",
                  {
                    attrs: { "native-value": "excel", size: "is-small" },
                    model: {
                      value: t.fileType,
                      callback: function (e) {
                        t.fileType = e;
                      },
                      expression: "fileType",
                    },
                  },
                  [t._v(" Excel ")]
                ),
              ],
              1
            ),
            e("div", { staticClass: "is-size-7 mb-2 has-text-grey" }, [
              t._v(" " + t._s(t.typeTips) + " "),
            ]),
            e(
              "b-field",
              {
                attrs: {
                  label: `Interval between the requests (${t.interval[0]} - ${t.interval[1]} seconds)`,
                },
              },
              [
                e(
                  "b-slider",
                  {
                    attrs: { min: 2, max: 60, tooltip: "" },
                    model: {
                      value: t.interval,
                      callback: function (e) {
                        t.interval = e;
                      },
                      expression: "interval",
                    },
                  },
                  [
                    t._l([2, 10, 20, 30, 40, 50, 60], function (a) {
                      return [
                        e("b-slider-tick", { key: a, attrs: { value: a } }, [
                          t._v(t._s(a) + "s"),
                        ]),
                      ];
                    }),
                  ],
                  2
                ),
              ],
              1
            ),
            e(
              "b-field",
              { attrs: { grouped: "" } },
              [
                e(
                  "b-field",
                  {
                    attrs: {
                      label: `Pause every (${t.pause.num}) pages`,
                      expanded: "",
                    },
                  },
                  [
                    e("b-numberinput", {
                      attrs: {
                        placeholder: "20",
                        min: 1,
                        max: 1e3,
                        size: "is-small",
                      },
                      model: {
                        value: t.pause.num,
                        callback: function (e) {
                          t.$set(t.pause, "num", e);
                        },
                        expression: "pause.num",
                      },
                    }),
                  ],
                  1
                ),
                e(
                  "b-field",
                  {
                    attrs: {
                      label: `wait for (${t.pause.wait}) minutes`,
                      expanded: "",
                    },
                  },
                  [
                    e("b-numberinput", {
                      attrs: {
                        placeholder: "2",
                        min: 1,
                        max: 500,
                        size: "is-small",
                      },
                      model: {
                        value: t.pause.wait,
                        callback: function (e) {
                          t.$set(t.pause, "wait", e);
                        },
                        expression: "pause.wait",
                      },
                    }),
                  ],
                  1
                ),
              ],
              1
            ),
            e("hr"),
            e(
              "div",
              [
                e("p", [
                  t._v(
                    " If you have installed other FB extension, there maybe conflict, Force re-init to fixed the problem after using other extension. "
                  ),
                ]),
                e(
                  "b-button",
                  {
                    attrs: {
                      type: "is-danger",
                      outlined: "",
                      expanded: "",
                      loading: t.loading,
                    },
                    on: { click: t.forceInit },
                  },
                  [t._v(" Force re-init access token ")]
                ),
              ],
              1
            ),
            e("hr"),
            e(
              "div",
              [
                e("p", { staticClass: "has-text-centered" }, [
                  t._v(t._s(t.userInfo.email)),
                ]),
                e(
                  "b-button",
                  {
                    staticClass: "has-text-weight-bold",
                    attrs: {
                      type: "is-danger is-light",
                      expanded: "",
                      "icon-left": "sign-out-alt",
                    },
                    on: { click: t.logout },
                  },
                  [t._v(" LOGOUT ")]
                ),
              ],
              1
            ),
          ],
          1
        );
      },
      K = [],
      tt = a("2a36"),
      et = a("fdde"),
      at = {
        data() {
          return {
            fileType: "csv",
            interval: [5, 12],
            pause: { num: 20, wait: 2 },
            loading: !1,
          };
        },
        computed: {
          ...Object(l["c"])(["userInfo"]),
          typeTips() {
            switch (this.fileType) {
              case "csv":
                return "CSV is compatible with Excel & CRM system.";
              case "excel":
                return "Excel file should open with Excel and import into CRM system.";
              default:
                return "";
            }
          },
        },
        watch: {
          fileType(t) {
            P["e"].set(t);
          },
          interval(t, e) {
            (e[0] == t[0] && e[1] == t[1]) || P["f"].set(t);
          },
          "pause.num": {
            handler(t) {
              P["g"].set({ num: t, wait: this.pause.wait });
            },
          },
          "pause.wait": {
            handler(t) {
              P["g"].set({ num: this.pause.num, wait: t });
            },
          },
        },
        methods: {
          ...Object(l["b"])(["setUserReady"]),
          async logout() {
            await Object(tt["c"])(),
              this.setUserReady(!1),
              this.$router.replace({ name: "Index" });
          },
          async forceInit() {
            this.loading = !0;
            try {
              await et["a"](!0),
                this.$buefy.toast.open("re-init done."),
                (this.loading = !1);
            } catch (t) {
              this.$buefy.toast.open(t.message || "init error"),
                (this.loading = !1);
            }
          },
        },
        async created() {
          this.fileType = await P["e"].get();
          const t = await P["f"].get();
          (this.interval = Array.isArray(t) ? t : [t, t]),
            (this.pause = await P["g"].get());
        },
      },
      st = at,
      nt = Object(p["a"])(st, Y, K, !1, null, null, null),
      it = nt.exports,
      rt = function () {
        var t = this,
          e = t._self._c;
        return e("div", { staticClass: "pro" }, [e("Buy")], 1);
      },
      ot = [],
      lt = a("d5be"),
      ct = { components: { Buy: lt["a"] } },
      ut = ct,
      pt = Object(p["a"])(ut, rt, ot, !1, null, null, null),
      dt = pt.exports;
    s["a"].use(g["a"]);
    const ft = [
        { path: "/", name: "Index", component: O },
        { path: "/home", name: "Home", component: H },
        { path: "/help", name: "Help", component: V },
        { path: "/login", name: "Login", component: X },
        { path: "/setting", name: "Setting", component: it },
        { path: "/pro", name: "Pro", component: dt },
      ],
      ht = new g["a"]({ routes: ft });
    var bt = ht,
      mt = a("4360"),
      vt = a("289d");
    a("5abe"), a("15f5"), a("b2a2");
    s["a"].use(vt["a"], { defaultIconPack: "fas" }),
      (s["a"].config.productionTip = !1),
      new s["a"]({ router: bt, store: mt["a"], render: (t) => t(v) }).$mount(
        "#app"
      );
  },
  "536e": function (t, e, a) {},
  "579d": function (t, e, a) {},
  "641a": function (t, e, a) {
    "use strict";
    a("536e");
  },
  "72ce": function (t, e, a) {
    "use strict";
    a("579d");
  },
  7868: function (t, e, a) {
    "use strict";
    a.d(e, "a", function () {
      return i;
    }),
      a.d(e, "b", function () {
        return o;
      }),
      a.d(e, "c", function () {
        return l;
      });
    var s = a("9845"),
      n = a.n(s);
    const i = { LOGIN: "LOGIN", RESP_LOGIN: "RESP_LOGIN" };
    let r = {};
    function o(t, e) {
      (r[t] = r[t] || []), r[t].push(e);
    }
    function l(t, e, a) {
      n.a.runtime.sendMessage({ event: t, data: e }, a);
    }
    n.a.runtime.onMessage.addListener((t, e, a) => {
      const { event: s, data: n } = t,
        i = r[s] || [];
      for (const r of i) r(n, e, a);
    });
  },
});
