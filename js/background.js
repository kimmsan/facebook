(function (e) {
  var t = {};
  function r(n) {
    if (t[n]) return t[n].exports;
    var o = (t[n] = { i: n, l: !1, exports: {} });
    return e[n].call(o.exports, o, o.exports, r), (o.l = !0), o.exports;
  }
  (r.m = e),
    (r.c = t),
    (r.d = function (e, t, n) {
      r.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }),
    (r.r = function (e) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (r.t = function (e, t) {
      if ((1 & t && (e = r(e)), 8 & t)) return e;
      if (4 & t && "object" === typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (
        (r.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var o in e)
          r.d(
            n,
            o,
            function (t) {
              return e[t];
            }.bind(null, o)
          );
      return n;
    }),
    (r.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e["default"];
            }
          : function () {
              return e;
            };
      return r.d(t, "a", t), t;
    }),
    (r.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (r.p = "/"),
    r((r.s = 2));
})({
  "00ee": function (e, t, r) {
    var n = r("b622"),
      o = n("toStringTag"),
      i = {};
    (i[o] = "z"), (e.exports = "[object z]" === String(i));
  },
  "0366": function (e, t, r) {
    var n = r("e330"),
      o = r("59ed"),
      i = r("40d5"),
      s = n(n.bind);
    e.exports = function (e, t) {
      return (
        o(e),
        void 0 === t
          ? e
          : i
          ? s(e, t)
          : function () {
              return e.apply(t, arguments);
            }
      );
    };
  },
  "06cf": function (e, t, r) {
    var n = r("83ab"),
      o = r("c65b"),
      i = r("d1e7"),
      s = r("5c6c"),
      a = r("fc6a"),
      c = r("a04b"),
      u = r("1a2d"),
      f = r("0cfb"),
      l = Object.getOwnPropertyDescriptor;
    t.f = n
      ? l
      : function (e, t) {
          if (((e = a(e)), (t = c(t)), f))
            try {
              return l(e, t);
            } catch (r) {}
          if (u(e, t)) return s(!o(i.f, e, t), e[t]);
        };
  },
  "07fa": function (e, t, r) {
    var n = r("50c4");
    e.exports = function (e) {
      return n(e.length);
    };
  },
  "0a06": function (e, t, r) {
    "use strict";
    var n = r("c532"),
      o = r("30b5"),
      i = r("f6b4"),
      s = r("5270"),
      a = r("4a7b"),
      c = r("848b"),
      u = c.validators;
    function f(e) {
      (this.defaults = e),
        (this.interceptors = { request: new i(), response: new i() });
    }
    (f.prototype.request = function (e) {
      "string" === typeof e
        ? ((e = arguments[1] || {}), (e.url = arguments[0]))
        : (e = e || {}),
        (e = a(this.defaults, e)),
        e.method
          ? (e.method = e.method.toLowerCase())
          : this.defaults.method
          ? (e.method = this.defaults.method.toLowerCase())
          : (e.method = "get");
      var t = e.transitional;
      void 0 !== t &&
        c.assertOptions(
          t,
          {
            silentJSONParsing: u.transitional(u.boolean),
            forcedJSONParsing: u.transitional(u.boolean),
            clarifyTimeoutError: u.transitional(u.boolean),
          },
          !1
        );
      var r = [],
        n = !0;
      this.interceptors.request.forEach(function (t) {
        ("function" === typeof t.runWhen && !1 === t.runWhen(e)) ||
          ((n = n && t.synchronous), r.unshift(t.fulfilled, t.rejected));
      });
      var o,
        i = [];
      if (
        (this.interceptors.response.forEach(function (e) {
          i.push(e.fulfilled, e.rejected);
        }),
        !n)
      ) {
        var f = [s, void 0];
        Array.prototype.unshift.apply(f, r),
          (f = f.concat(i)),
          (o = Promise.resolve(e));
        while (f.length) o = o.then(f.shift(), f.shift());
        return o;
      }
      var l = e;
      while (r.length) {
        var d = r.shift(),
          p = r.shift();
        try {
          l = d(l);
        } catch (g) {
          p(g);
          break;
        }
      }
      try {
        o = s(l);
      } catch (g) {
        return Promise.reject(g);
      }
      while (i.length) o = o.then(i.shift(), i.shift());
      return o;
    }),
      (f.prototype.getUri = function (e) {
        return (
          (e = a(this.defaults, e)),
          o(e.url, e.params, e.paramsSerializer).replace(/^\?/, "")
        );
      }),
      n.forEach(["delete", "get", "head", "options"], function (e) {
        f.prototype[e] = function (t, r) {
          return this.request(
            a(r || {}, { method: e, url: t, data: (r || {}).data })
          );
        };
      }),
      n.forEach(["post", "put", "patch"], function (e) {
        f.prototype[e] = function (t, r, n) {
          return this.request(a(n || {}, { method: e, url: t, data: r }));
        };
      }),
      (e.exports = f);
  },
  "0cfb": function (e, t, r) {
    var n = r("83ab"),
      o = r("d039"),
      i = r("cc12");
    e.exports =
      !n &&
      !o(function () {
        return (
          7 !=
          Object.defineProperty(i("div"), "a", {
            get: function () {
              return 7;
            },
          }).a
        );
      });
  },
  "0d51": function (e, t) {
    var r = String;
    e.exports = function (e) {
      try {
        return r(e);
      } catch (t) {
        return "Object";
      }
    };
  },
  "0df6": function (e, t, r) {
    "use strict";
    e.exports = function (e) {
      return function (t) {
        return e.apply(null, t);
      };
    };
  },
  "13d2": function (e, t, r) {
    var n = r("d039"),
      o = r("1626"),
      i = r("1a2d"),
      s = r("83ab"),
      a = r("5e77").CONFIGURABLE,
      c = r("8925"),
      u = r("69f3"),
      f = u.enforce,
      l = u.get,
      d = Object.defineProperty,
      p =
        s &&
        !n(function () {
          return 8 !== d(function () {}, "length", { value: 8 }).length;
        }),
      g = String(String).split("String"),
      m = (e.exports = function (e, t, r) {
        "Symbol(" === String(t).slice(0, 7) &&
          (t = "[" + String(t).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"),
          r && r.getter && (t = "get " + t),
          r && r.setter && (t = "set " + t),
          (!i(e, "name") || (a && e.name !== t)) &&
            (s ? d(e, "name", { value: t, configurable: !0 }) : (e.name = t)),
          p &&
            r &&
            i(r, "arity") &&
            e.length !== r.arity &&
            d(e, "length", { value: r.arity });
        try {
          r && i(r, "constructor") && r.constructor
            ? s && d(e, "prototype", { writable: !1 })
            : e.prototype && (e.prototype = void 0);
        } catch (o) {}
        var n = f(e);
        return (
          i(n, "source") || (n.source = g.join("string" == typeof t ? t : "")),
          e
        );
      });
    Function.prototype.toString = m(function () {
      return (o(this) && l(this).source) || c(this);
    }, "toString");
  },
  1626: function (e, t) {
    e.exports = function (e) {
      return "function" == typeof e;
    };
  },
  "182d": function (e, t, r) {
    var n = r("f8cd"),
      o = RangeError;
    e.exports = function (e, t) {
      var r = n(e);
      if (r % t) throw o("Wrong offset");
      return r;
    };
  },
  "1a2d": function (e, t, r) {
    var n = r("e330"),
      o = r("7b0b"),
      i = n({}.hasOwnProperty);
    e.exports =
      Object.hasOwn ||
      function (e, t) {
        return i(o(e), t);
      };
  },
  "1be4": function (e, t, r) {
    var n = r("d066");
    e.exports = n("document", "documentElement");
  },
  "1d02": function (e, t, r) {
    "use strict";
    var n = r("ebb5"),
      o = r("a258").findLastIndex,
      i = n.aTypedArray,
      s = n.exportTypedArrayMethod;
    s("findLastIndex", function (e) {
      return o(i(this), e, arguments.length > 1 ? arguments[1] : void 0);
    });
  },
  "1d2b": function (e, t, r) {
    "use strict";
    e.exports = function (e, t) {
      return function () {
        for (var r = new Array(arguments.length), n = 0; n < r.length; n++)
          r[n] = arguments[n];
        return e.apply(t, r);
      };
    };
  },
  "1d80": function (e, t) {
    var r = TypeError;
    e.exports = function (e) {
      if (void 0 == e) throw r("Can't call method on " + e);
      return e;
    };
  },
  2: function (e, t, r) {
    e.exports = r("fe77");
  },
  "23cb": function (e, t, r) {
    var n = r("5926"),
      o = Math.max,
      i = Math.min;
    e.exports = function (e, t) {
      var r = n(e);
      return r < 0 ? o(r + t, 0) : i(r, t);
    };
  },
  "23e7": function (e, t, r) {
    var n = r("da84"),
      o = r("06cf").f,
      i = r("9112"),
      s = r("cb2d"),
      a = r("6374"),
      c = r("e893"),
      u = r("94ca");
    e.exports = function (e, t) {
      var r,
        f,
        l,
        d,
        p,
        g,
        m = e.target,
        b = e.global,
        h = e.stat;
      if (((f = b ? n : h ? n[m] || a(m, {}) : (n[m] || {}).prototype), f))
        for (l in t) {
          if (
            ((p = t[l]),
            e.dontCallGetSet ? ((g = o(f, l)), (d = g && g.value)) : (d = f[l]),
            (r = u(b ? l : m + (h ? "." : "#") + l, e.forced)),
            !r && void 0 !== d)
          ) {
            if (typeof p == typeof d) continue;
            c(p, d);
          }
          (e.sham || (d && d.sham)) && i(p, "sham", !0), s(f, l, p, e);
        }
    };
  },
  "241c": function (e, t, r) {
    var n = r("ca84"),
      o = r("7839"),
      i = o.concat("length", "prototype");
    t.f =
      Object.getOwnPropertyNames ||
      function (e) {
        return n(e, i);
      };
  },
  2444: function (e, t, r) {
    "use strict";
    (function (t) {
      var n = r("c532"),
        o = r("c8af"),
        i = r("387f"),
        s = { "Content-Type": "application/x-www-form-urlencoded" };
      function a(e, t) {
        !n.isUndefined(e) &&
          n.isUndefined(e["Content-Type"]) &&
          (e["Content-Type"] = t);
      }
      function c() {
        var e;
        return (
          ("undefined" !== typeof XMLHttpRequest ||
            ("undefined" !== typeof t &&
              "[object process]" === Object.prototype.toString.call(t))) &&
            (e = r("b50d")),
          e
        );
      }
      function u(e, t, r) {
        if (n.isString(e))
          try {
            return (t || JSON.parse)(e), n.trim(e);
          } catch (o) {
            if ("SyntaxError" !== o.name) throw o;
          }
        return (r || JSON.stringify)(e);
      }
      var f = {
        transitional: {
          silentJSONParsing: !0,
          forcedJSONParsing: !0,
          clarifyTimeoutError: !1,
        },
        adapter: c(),
        transformRequest: [
          function (e, t) {
            return (
              o(t, "Accept"),
              o(t, "Content-Type"),
              n.isFormData(e) ||
              n.isArrayBuffer(e) ||
              n.isBuffer(e) ||
              n.isStream(e) ||
              n.isFile(e) ||
              n.isBlob(e)
                ? e
                : n.isArrayBufferView(e)
                ? e.buffer
                : n.isURLSearchParams(e)
                ? (a(t, "application/x-www-form-urlencoded;charset=utf-8"),
                  e.toString())
                : n.isObject(e) ||
                  (t && "application/json" === t["Content-Type"])
                ? (a(t, "application/json"), u(e))
                : e
            );
          },
        ],
        transformResponse: [
          function (e) {
            var t = this.transitional || f.transitional,
              r = t && t.silentJSONParsing,
              o = t && t.forcedJSONParsing,
              s = !r && "json" === this.responseType;
            if (s || (o && n.isString(e) && e.length))
              try {
                return JSON.parse(e);
              } catch (a) {
                if (s) {
                  if ("SyntaxError" === a.name)
                    throw i(a, this, "E_JSON_PARSE");
                  throw a;
                }
              }
            return e;
          },
        ],
        timeout: 0,
        xsrfCookieName: "XSRF-TOKEN",
        xsrfHeaderName: "X-XSRF-TOKEN",
        maxContentLength: -1,
        maxBodyLength: -1,
        validateStatus: function (e) {
          return e >= 200 && e < 300;
        },
        headers: { common: { Accept: "application/json, text/plain, */*" } },
      };
      n.forEach(["delete", "get", "head"], function (e) {
        f.headers[e] = {};
      }),
        n.forEach(["post", "put", "patch"], function (e) {
          f.headers[e] = n.merge(s);
        }),
        (e.exports = f);
    }).call(this, r("4362"));
  },
  "2a36": function (e, t, r) {
    "use strict";
    r.d(t, "b", function () {
      return l;
    }),
      r.d(t, "c", function () {
        return d;
      }),
      r.d(t, "a", function () {
        return p;
      }),
      r.d(t, "d", function () {
        return g;
      });
    var n = r("d3ff"),
      o = (r("caad"), r("9845")),
      i = r.n(o),
      s = r("c276"),
      a = r("9a1b");
    function c() {
      function e() {
        return new Promise(function (e, t) {
          u().then((r) => {
            i.a.runtime.lastError
              ? t(i.a.runtime.lastError)
              : a["b"](r).then(e).catch(t);
          });
        });
      }
      return e();
    }
    function u() {
      return new Promise(function (e, t) {
        const r = i.a.runtime.getManifest(),
          { client_id: n, scopes: o } = r.oauth2,
          a = i.a.identity.getRedirectURL(),
          c = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${n}&response_type=token&redirect_uri=${encodeURIComponent(
            a
          )}&scope=${encodeURIComponent(o.join(" "))}`;
        i.a.identity
          .launchWebAuthFlow({ url: c, interactive: !0 })
          .then((r) => {
            if (!r.includes("#")) return t("auth fail");
            r = r.replace("#", "?");
            const { access_token: n } = Object(s["c"])(r);
            e(n);
          });
      });
    }
    const f = "user";
    async function l() {
      const e = await c();
      return await g.set(e), e;
    }
    const d = async () => {
        await g.del();
      },
      p = async () => {
        const e = await g.get();
        return !!e.email;
      },
      g = {
        get: async () => {
          const e = await n["a"](f);
          return JSON.parse(e[f] || "{}");
        },
        set: (e) => n["c"]({ [f]: JSON.stringify(e) }),
        del: () => n["b"](f),
      };
  },
  "2ba4": function (e, t, r) {
    var n = r("40d5"),
      o = Function.prototype,
      i = o.apply,
      s = o.call;
    e.exports =
      ("object" == typeof Reflect && Reflect.apply) ||
      (n
        ? s.bind(i)
        : function () {
            return s.apply(i, arguments);
          });
  },
  "2d00": function (e, t, r) {
    var n,
      o,
      i = r("da84"),
      s = r("342f"),
      a = i.process,
      c = i.Deno,
      u = (a && a.versions) || (c && c.version),
      f = u && u.v8;
    f && ((n = f.split(".")), (o = n[0] > 0 && n[0] < 4 ? 1 : +(n[0] + n[1]))),
      !o &&
        s &&
        ((n = s.match(/Edge\/(\d+)/)),
        (!n || n[1] >= 74) &&
          ((n = s.match(/Chrome\/(\d+)/)), n && (o = +n[1]))),
      (e.exports = o);
  },
  "2d83": function (e, t, r) {
    "use strict";
    var n = r("387f");
    e.exports = function (e, t, r, o, i) {
      var s = new Error(e);
      return n(s, t, r, o, i);
    };
  },
  "2e67": function (e, t, r) {
    "use strict";
    e.exports = function (e) {
      return !(!e || !e.__CANCEL__);
    };
  },
  "30b5": function (e, t, r) {
    "use strict";
    var n = r("c532");
    function o(e) {
      return encodeURIComponent(e)
        .replace(/%3A/gi, ":")
        .replace(/%24/g, "$")
        .replace(/%2C/gi, ",")
        .replace(/%20/g, "+")
        .replace(/%5B/gi, "[")
        .replace(/%5D/gi, "]");
    }
    e.exports = function (e, t, r) {
      if (!t) return e;
      var i;
      if (r) i = r(t);
      else if (n.isURLSearchParams(t)) i = t.toString();
      else {
        var s = [];
        n.forEach(t, function (e, t) {
          null !== e &&
            "undefined" !== typeof e &&
            (n.isArray(e) ? (t += "[]") : (e = [e]),
            n.forEach(e, function (e) {
              n.isDate(e)
                ? (e = e.toISOString())
                : n.isObject(e) && (e = JSON.stringify(e)),
                s.push(o(t) + "=" + o(e));
            }));
        }),
          (i = s.join("&"));
      }
      if (i) {
        var a = e.indexOf("#");
        -1 !== a && (e = e.slice(0, a)),
          (e += (-1 === e.indexOf("?") ? "?" : "&") + i);
      }
      return e;
    };
  },
  "342f": function (e, t, r) {
    var n = r("d066");
    e.exports = n("navigator", "userAgent") || "";
  },
  "37e8": function (e, t, r) {
    var n = r("83ab"),
      o = r("aed9"),
      i = r("9bf2"),
      s = r("825a"),
      a = r("fc6a"),
      c = r("df75");
    t.f =
      n && !o
        ? Object.defineProperties
        : function (e, t) {
            s(e);
            var r,
              n = a(t),
              o = c(t),
              u = o.length,
              f = 0;
            while (u > f) i.f(e, (r = o[f++]), n[r]);
            return e;
          };
  },
  "387f": function (e, t, r) {
    "use strict";
    e.exports = function (e, t, r, n, o) {
      return (
        (e.config = t),
        r && (e.code = r),
        (e.request = n),
        (e.response = o),
        (e.isAxiosError = !0),
        (e.toJSON = function () {
          return {
            message: this.message,
            name: this.name,
            description: this.description,
            number: this.number,
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            config: this.config,
            code: this.code,
            status:
              this.response && this.response.status
                ? this.response.status
                : null,
          };
        }),
        e
      );
    };
  },
  3934: function (e, t, r) {
    "use strict";
    var n = r("c532");
    e.exports = n.isStandardBrowserEnv()
      ? (function () {
          var e,
            t = /(msie|trident)/i.test(navigator.userAgent),
            r = document.createElement("a");
          function o(e) {
            var n = e;
            return (
              t && (r.setAttribute("href", n), (n = r.href)),
              r.setAttribute("href", n),
              {
                href: r.href,
                protocol: r.protocol ? r.protocol.replace(/:$/, "") : "",
                host: r.host,
                search: r.search ? r.search.replace(/^\?/, "") : "",
                hash: r.hash ? r.hash.replace(/^#/, "") : "",
                hostname: r.hostname,
                port: r.port,
                pathname:
                  "/" === r.pathname.charAt(0) ? r.pathname : "/" + r.pathname,
              }
            );
          }
          return (
            (e = o(window.location.href)),
            function (t) {
              var r = n.isString(t) ? o(t) : t;
              return r.protocol === e.protocol && r.host === e.host;
            }
          );
        })()
      : (function () {
          return function () {
            return !0;
          };
        })();
  },
  "3a9b": function (e, t, r) {
    var n = r("e330");
    e.exports = n({}.isPrototypeOf);
  },
  "3bbe": function (e, t, r) {
    var n = r("1626"),
      o = String,
      i = TypeError;
    e.exports = function (e) {
      if ("object" == typeof e || n(e)) return e;
      throw i("Can't set " + o(e) + " as a prototype");
    };
  },
  "3c5d": function (e, t, r) {
    "use strict";
    var n = r("da84"),
      o = r("c65b"),
      i = r("ebb5"),
      s = r("07fa"),
      a = r("182d"),
      c = r("7b0b"),
      u = r("d039"),
      f = n.RangeError,
      l = n.Int8Array,
      d = l && l.prototype,
      p = d && d.set,
      g = i.aTypedArray,
      m = i.exportTypedArrayMethod,
      b = !u(function () {
        var e = new Uint8ClampedArray(2);
        return o(p, e, { length: 1, 0: 3 }, 1), 3 !== e[1];
      }),
      h =
        b &&
        i.NATIVE_ARRAY_BUFFER_VIEWS &&
        u(function () {
          var e = new l(2);
          return e.set(1), e.set("2", 1), 0 !== e[0] || 2 !== e[1];
        });
    m(
      "set",
      function (e) {
        g(this);
        var t = a(arguments.length > 1 ? arguments[1] : void 0, 1),
          r = c(e);
        if (b) return o(p, this, r, t);
        var n = this.length,
          i = s(r),
          u = 0;
        if (i + t > n) throw f("Wrong length");
        while (u < i) this[t + u] = r[u++];
      },
      !b || h
    );
  },
  "40d5": function (e, t, r) {
    var n = r("d039");
    e.exports = !n(function () {
      var e = function () {}.bind();
      return "function" != typeof e || e.hasOwnProperty("prototype");
    });
  },
  4362: function (e, t, r) {
    (t.nextTick = function (e) {
      var t = Array.prototype.slice.call(arguments);
      t.shift(),
        setTimeout(function () {
          e.apply(null, t);
        }, 0);
    }),
      (t.platform = t.arch = t.execPath = t.title = "browser"),
      (t.pid = 1),
      (t.browser = !0),
      (t.env = {}),
      (t.argv = []),
      (t.binding = function (e) {
        throw new Error("No such module. (Possibly not yet loaded)");
      }),
      (function () {
        var e,
          n = "/";
        (t.cwd = function () {
          return n;
        }),
          (t.chdir = function (t) {
            e || (e = r("df7c")), (n = e.resolve(t, n));
          });
      })(),
      (t.exit =
        t.kill =
        t.umask =
        t.dlopen =
        t.uptime =
        t.memoryUsage =
        t.uvCounters =
          function () {}),
      (t.features = {});
  },
  "44ad": function (e, t, r) {
    var n = r("e330"),
      o = r("d039"),
      i = r("c6b6"),
      s = Object,
      a = n("".split);
    e.exports = o(function () {
      return !s("z").propertyIsEnumerable(0);
    })
      ? function (e) {
          return "String" == i(e) ? a(e, "") : s(e);
        }
      : s;
  },
  "44d2": function (e, t, r) {
    var n = r("b622"),
      o = r("7c73"),
      i = r("9bf2").f,
      s = n("unscopables"),
      a = Array.prototype;
    void 0 == a[s] && i(a, s, { configurable: !0, value: o(null) }),
      (e.exports = function (e) {
        a[s][e] = !0;
      });
  },
  "467f": function (e, t, r) {
    "use strict";
    var n = r("2d83");
    e.exports = function (e, t, r) {
      var o = r.config.validateStatus;
      r.status && o && !o(r.status)
        ? t(
            n(
              "Request failed with status code " + r.status,
              r.config,
              null,
              r.request,
              r
            )
          )
        : e(r);
    };
  },
  "485a": function (e, t, r) {
    var n = r("c65b"),
      o = r("1626"),
      i = r("861d"),
      s = TypeError;
    e.exports = function (e, t) {
      var r, a;
      if ("string" === t && o((r = e.toString)) && !i((a = n(r, e)))) return a;
      if (o((r = e.valueOf)) && !i((a = n(r, e)))) return a;
      if ("string" !== t && o((r = e.toString)) && !i((a = n(r, e)))) return a;
      throw s("Can't convert object to primitive value");
    };
  },
  4930: function (e, t, r) {
    var n = r("2d00"),
      o = r("d039");
    e.exports =
      !!Object.getOwnPropertySymbols &&
      !o(function () {
        var e = Symbol();
        return (
          !String(e) ||
          !(Object(e) instanceof Symbol) ||
          (!Symbol.sham && n && n < 41)
        );
      });
  },
  "4a7b": function (e, t, r) {
    "use strict";
    var n = r("c532");
    e.exports = function (e, t) {
      t = t || {};
      var r = {};
      function o(e, t) {
        return n.isPlainObject(e) && n.isPlainObject(t)
          ? n.merge(e, t)
          : n.isPlainObject(t)
          ? n.merge({}, t)
          : n.isArray(t)
          ? t.slice()
          : t;
      }
      function i(r) {
        return n.isUndefined(t[r])
          ? n.isUndefined(e[r])
            ? void 0
            : o(void 0, e[r])
          : o(e[r], t[r]);
      }
      function s(e) {
        if (!n.isUndefined(t[e])) return o(void 0, t[e]);
      }
      function a(r) {
        return n.isUndefined(t[r])
          ? n.isUndefined(e[r])
            ? void 0
            : o(void 0, e[r])
          : o(void 0, t[r]);
      }
      function c(r) {
        return r in t ? o(e[r], t[r]) : r in e ? o(void 0, e[r]) : void 0;
      }
      var u = {
        url: s,
        method: s,
        data: s,
        baseURL: a,
        transformRequest: a,
        transformResponse: a,
        paramsSerializer: a,
        timeout: a,
        timeoutMessage: a,
        withCredentials: a,
        adapter: a,
        responseType: a,
        xsrfCookieName: a,
        xsrfHeaderName: a,
        onUploadProgress: a,
        onDownloadProgress: a,
        decompress: a,
        maxContentLength: a,
        maxBodyLength: a,
        transport: a,
        httpAgent: a,
        httpsAgent: a,
        cancelToken: a,
        socketPath: a,
        responseEncoding: a,
        validateStatus: c,
      };
      return (
        n.forEach(Object.keys(e).concat(Object.keys(t)), function (e) {
          var t = u[e] || i,
            o = t(e);
          (n.isUndefined(o) && t !== c) || (r[e] = o);
        }),
        r
      );
    };
  },
  "4d64": function (e, t, r) {
    var n = r("fc6a"),
      o = r("23cb"),
      i = r("07fa"),
      s = function (e) {
        return function (t, r, s) {
          var a,
            c = n(t),
            u = i(c),
            f = o(s, u);
          if (e && r != r) {
            while (u > f) if (((a = c[f++]), a != a)) return !0;
          } else
            for (; u > f; f++)
              if ((e || f in c) && c[f] === r) return e || f || 0;
          return !e && -1;
        };
      };
    e.exports = { includes: s(!0), indexOf: s(!1) };
  },
  "50c4": function (e, t, r) {
    var n = r("5926"),
      o = Math.min;
    e.exports = function (e) {
      return e > 0 ? o(n(e), 9007199254740991) : 0;
    };
  },
  5270: function (e, t, r) {
    "use strict";
    var n = r("c532"),
      o = r("c401"),
      i = r("2e67"),
      s = r("2444"),
      a = r("7a77");
    function c(e) {
      if (
        (e.cancelToken && e.cancelToken.throwIfRequested(),
        e.signal && e.signal.aborted)
      )
        throw new a("canceled");
    }
    e.exports = function (e) {
      c(e),
        (e.headers = e.headers || {}),
        (e.data = o.call(e, e.data, e.headers, e.transformRequest)),
        (e.headers = n.merge(
          e.headers.common || {},
          e.headers[e.method] || {},
          e.headers
        )),
        n.forEach(
          ["delete", "get", "head", "post", "put", "patch", "common"],
          function (t) {
            delete e.headers[t];
          }
        );
      var t = e.adapter || s.adapter;
      return t(e).then(
        function (t) {
          return (
            c(e),
            (t.data = o.call(e, t.data, t.headers, e.transformResponse)),
            t
          );
        },
        function (t) {
          return (
            i(t) ||
              (c(e),
              t &&
                t.response &&
                (t.response.data = o.call(
                  e,
                  t.response.data,
                  t.response.headers,
                  e.transformResponse
                ))),
            Promise.reject(t)
          );
        }
      );
    };
  },
  5692: function (e, t, r) {
    var n = r("c430"),
      o = r("c6cd");
    (e.exports = function (e, t) {
      return o[e] || (o[e] = void 0 !== t ? t : {});
    })("versions", []).push({
      version: "3.23.5",
      mode: n ? "pure" : "global",
      copyright: "© 2014-2024 Eleandro Tersi (Technical Soni.com)",
      license: "https://github.com/zloirock/core-js/blob/v3.23.5/LICENSE",
      source: "https://github.com/zloirock/core-js",
    });
  },
  "56ef": function (e, t, r) {
    var n = r("d066"),
      o = r("e330"),
      i = r("241c"),
      s = r("7418"),
      a = r("825a"),
      c = o([].concat);
    e.exports =
      n("Reflect", "ownKeys") ||
      function (e) {
        var t = i.f(a(e)),
          r = s.f;
        return r ? c(t, r(e)) : t;
      };
  },
  "577e": function (e, t, r) {
    var n = r("f5df"),
      o = String;
    e.exports = function (e) {
      if ("Symbol" === n(e))
        throw TypeError("Cannot convert a Symbol value to a string");
      return o(e);
    };
  },
  5926: function (e, t, r) {
    var n = r("b42e");
    e.exports = function (e) {
      var t = +e;
      return t !== t || 0 === t ? 0 : n(t);
    };
  },
  "59ed": function (e, t, r) {
    var n = r("1626"),
      o = r("0d51"),
      i = TypeError;
    e.exports = function (e) {
      if (n(e)) return e;
      throw i(o(e) + " is not a function");
    };
  },
  "5c6c": function (e, t) {
    e.exports = function (e, t) {
      return {
        enumerable: !(1 & e),
        configurable: !(2 & e),
        writable: !(4 & e),
        value: t,
      };
    };
  },
  "5cce": function (e, t) {
    e.exports = { version: "0.24.0" };
  },
  "5e77": function (e, t, r) {
    var n = r("83ab"),
      o = r("1a2d"),
      i = Function.prototype,
      s = n && Object.getOwnPropertyDescriptor,
      a = o(i, "name"),
      c = a && "something" === function () {}.name,
      u = a && (!n || (n && s(i, "name").configurable));
    e.exports = { EXISTS: a, PROPER: c, CONFIGURABLE: u };
  },
  "5f02": function (e, t, r) {
    "use strict";
    e.exports = function (e) {
      return "object" === typeof e && !0 === e.isAxiosError;
    };
  },
  6374: function (e, t, r) {
    var n = r("da84"),
      o = Object.defineProperty;
    e.exports = function (e, t) {
      try {
        o(n, e, { value: t, configurable: !0, writable: !0 });
      } catch (r) {
        n[e] = t;
      }
      return t;
    };
  },
  "69f3": function (e, t, r) {
    var n,
      o,
      i,
      s = r("7f9a"),
      a = r("da84"),
      c = r("e330"),
      u = r("861d"),
      f = r("9112"),
      l = r("1a2d"),
      d = r("c6cd"),
      p = r("f772"),
      g = r("d012"),
      m = "Object already initialized",
      b = a.TypeError,
      h = a.WeakMap,
      y = function (e) {
        return i(e) ? o(e) : n(e, {});
      },
      A = function (e) {
        return function (t) {
          var r;
          if (!u(t) || (r = o(t)).type !== e)
            throw b("Incompatible receiver, " + e + " required");
          return r;
        };
      };
    if (s || d.state) {
      var v = d.state || (d.state = new h()),
        x = c(v.get),
        _ = c(v.has),
        w = c(v.set);
      (n = function (e, t) {
        if (_(v, e)) throw new b(m);
        return (t.facade = e), w(v, e, t), t;
      }),
        (o = function (e) {
          return x(v, e) || {};
        }),
        (i = function (e) {
          return _(v, e);
        });
    } else {
      var k = p("state");
      (g[k] = !0),
        (n = function (e, t) {
          if (l(e, k)) throw new b(m);
          return (t.facade = e), f(e, k, t), t;
        }),
        (o = function (e) {
          return l(e, k) ? e[k] : {};
        }),
        (i = function (e) {
          return l(e, k);
        });
    }
    e.exports = { set: n, get: o, has: i, enforce: y, getterFor: A };
  },
  "6bc9": function (e, t, r) {
    "use strict";
    r.d(t, "b", function () {
      return i;
    }),
      r.d(t, "a", function () {
        return s;
      }),
      r.d(t, "c", function () {
        return a;
      });
    r("caad"), r("d9e2");
    var n = r("d3ff");
    const o = "https://graph.facebook.com/",
      i = () => c("me?fields=id"),
      s = (e) => c(`v1.0/${e}?fields=member_count`),
      a = async (e, t = null, r = 0xf4f0ba13f14a4) => {
        const {
            fb_user_id: o,
            fb_dtsg: i,
            jazoest: s,
            fb_rev: a,
          } = await n["a"](["fb_user_id", "fb_dtsg", "jazoest", "fb_rev"]),
          c = 10,
          f = t && t.end_cursor ? "" + t.end_cursor : "";
        return await u(
          `av=${o}&__usid=6-Tqxgk291bqmgmq%3APqxgk1rt81ogp%3A0-Aqxgianj7wk4n-RV%3D6%3AF%3D&__user=${o}&__a=1&__dyn=&__req=4d&__hs=18846.EXP2%3Acomet_pkg.2.1.0.0&dpr=1.5&__ccg=EXCELLENT&__rev=${a}&__s=2trifr%3Aca8nd8%3A6qwirw&__hsi=6993582792974352909-0&__comet_req=1&fb_dtsg=${i}&jazoest=${s}&lsd=VZ0IKB1XzUOr0p5nT-is_6&__spin_r=1004221973&__spin_b=trunk&__spin_t=1628320383&fb_api_caller_class=RelayModern&fb_api_req_friendly_name=PresenceStatusProviderSubscription_ContactProfilesQuery&variables={"count":${c},"cursor":"${f}","groupID":"${e}","recruitingGroupFilterNonCompliant":false,"scale":1.5,"id":"${e}"}&doc_id=${r}`
        );
      };
    async function c(e) {
      const { fb_access_token: t } = await n["a"]("fb_access_token");
      let r = `${o}${e}`;
      const i = r.includes("?") ? "&" : "?";
      r = `${r}${i}access_token=${t}`;
      const s = await fetch(r);
      if (200 !== s.status) throw new Error("network err: " + s.status);
      const a = await s.json();
      return a;
    }
    async function u(e) {
      const t = await fetch("https://www.facebook.com/api/graphql/", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        },
        mode: "cors",
        credentials: "include",
        body: e,
      });
      return await t.json();
    }
  },
  7156: function (e, t, r) {
    var n = r("1626"),
      o = r("861d"),
      i = r("d2bb");
    e.exports = function (e, t, r) {
      var s, a;
      return (
        i &&
          n((s = t.constructor)) &&
          s !== r &&
          o((a = s.prototype)) &&
          a !== r.prototype &&
          i(e, a),
        e
      );
    };
  },
  7418: function (e, t) {
    t.f = Object.getOwnPropertySymbols;
  },
  "77d9": function (e, t, r) {
    r("1d02");
  },
  7839: function (e, t) {
    e.exports = [
      "constructor",
      "hasOwnProperty",
      "isPrototypeOf",
      "propertyIsEnumerable",
      "toLocaleString",
      "toString",
      "valueOf",
    ];
  },
  7868: function (e, t, r) {
    "use strict";
    r.d(t, "a", function () {
      return i;
    }),
      r.d(t, "b", function () {
        return a;
      }),
      r.d(t, "c", function () {
        return c;
      });
    var n = r("9845"),
      o = r.n(n);
    const i = { LOGIN: "LOGIN", RESP_LOGIN: "RESP_LOGIN" };
    let s = {};
    function a(e, t) {
      (s[e] = s[e] || []), s[e].push(t);
    }
    function c(e, t, r) {
      o.a.runtime.sendMessage({ event: e, data: t }, r);
    }
    o.a.runtime.onMessage.addListener((e, t, r) => {
      const { event: n, data: o } = e,
        i = s[n] || [];
      for (const s of i) s(o, t, r);
    });
  },
  "7a77": function (e, t, r) {
    "use strict";
    function n(e) {
      this.message = e;
    }
    (n.prototype.toString = function () {
      return "Cancel" + (this.message ? ": " + this.message : "");
    }),
      (n.prototype.__CANCEL__ = !0),
      (e.exports = n);
  },
  "7aac": function (e, t, r) {
    "use strict";
    var n = r("c532");
    e.exports = n.isStandardBrowserEnv()
      ? (function () {
          return {
            write: function (e, t, r, o, i, s) {
              var a = [];
              a.push(e + "=" + encodeURIComponent(t)),
                n.isNumber(r) && a.push("expires=" + new Date(r).toGMTString()),
                n.isString(o) && a.push("path=" + o),
                n.isString(i) && a.push("domain=" + i),
                !0 === s && a.push("secure"),
                (document.cookie = a.join("; "));
            },
            read: function (e) {
              var t = document.cookie.match(
                new RegExp("(^|;\\s*)(" + e + ")=([^;]*)")
              );
              return t ? decodeURIComponent(t[3]) : null;
            },
            remove: function (e) {
              this.write(e, "", Date.now() - 864e5);
            },
          };
        })()
      : (function () {
          return {
            write: function () {},
            read: function () {
              return null;
            },
            remove: function () {},
          };
        })();
  },
  "7b0b": function (e, t, r) {
    var n = r("1d80"),
      o = Object;
    e.exports = function (e) {
      return o(n(e));
    };
  },
  "7c73": function (e, t, r) {
    var n,
      o = r("825a"),
      i = r("37e8"),
      s = r("7839"),
      a = r("d012"),
      c = r("1be4"),
      u = r("cc12"),
      f = r("f772"),
      l = ">",
      d = "<",
      p = "prototype",
      g = "script",
      m = f("IE_PROTO"),
      b = function () {},
      h = function (e) {
        return d + g + l + e + d + "/" + g + l;
      },
      y = function (e) {
        e.write(h("")), e.close();
        var t = e.parentWindow.Object;
        return (e = null), t;
      },
      A = function () {
        var e,
          t = u("iframe"),
          r = "java" + g + ":";
        return (
          (t.style.display = "none"),
          c.appendChild(t),
          (t.src = String(r)),
          (e = t.contentWindow.document),
          e.open(),
          e.write(h("document.F=Object")),
          e.close(),
          e.F
        );
      },
      v = function () {
        try {
          n = new ActiveXObject("htmlfile");
        } catch (t) {}
        v =
          "undefined" != typeof document
            ? document.domain && n
              ? y(n)
              : A()
            : y(n);
        var e = s.length;
        while (e--) delete v[p][s[e]];
        return v();
      };
    (a[m] = !0),
      (e.exports =
        Object.create ||
        function (e, t) {
          var r;
          return (
            null !== e
              ? ((b[p] = o(e)), (r = new b()), (b[p] = null), (r[m] = e))
              : (r = v()),
            void 0 === t ? r : i.f(r, t)
          );
        });
  },
  "7f9a": function (e, t, r) {
    var n = r("da84"),
      o = r("1626"),
      i = r("8925"),
      s = n.WeakMap;
    e.exports = o(s) && /native code/.test(i(s));
  },
  "825a": function (e, t, r) {
    var n = r("861d"),
      o = String,
      i = TypeError;
    e.exports = function (e) {
      if (n(e)) return e;
      throw i(o(e) + " is not an object");
    };
  },
  "83ab": function (e, t, r) {
    var n = r("d039");
    e.exports = !n(function () {
      return (
        7 !=
        Object.defineProperty({}, 1, {
          get: function () {
            return 7;
          },
        })[1]
      );
    });
  },
  "83b9": function (e, t, r) {
    "use strict";
    var n = r("d925"),
      o = r("e683");
    e.exports = function (e, t) {
      return e && !n(t) ? o(e, t) : t;
    };
  },
  "848b": function (e, t, r) {
    "use strict";
    var n = r("5cce").version,
      o = {};
    ["object", "boolean", "number", "function", "string", "symbol"].forEach(
      function (e, t) {
        o[e] = function (r) {
          return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
        };
      }
    );
    var i = {};
    function s(e, t, r) {
      if ("object" !== typeof e)
        throw new TypeError("options must be an object");
      var n = Object.keys(e),
        o = n.length;
      while (o-- > 0) {
        var i = n[o],
          s = t[i];
        if (s) {
          var a = e[i],
            c = void 0 === a || s(a, i, e);
          if (!0 !== c) throw new TypeError("option " + i + " must be " + c);
        } else if (!0 !== r) throw Error("Unknown option " + i);
      }
    }
    (o.transitional = function (e, t, r) {
      function o(e, t) {
        return (
          "[Axios v" +
          n +
          "] Transitional option '" +
          e +
          "'" +
          t +
          (r ? ". " + r : "")
        );
      }
      return function (r, n, s) {
        if (!1 === e)
          throw new Error(o(n, " has been removed" + (t ? " in " + t : "")));
        return (
          t &&
            !i[n] &&
            ((i[n] = !0),
            console.warn(
              o(
                n,
                " has been deprecated since v" +
                  t +
                  " and will be removed in the near future"
              )
            )),
          !e || e(r, n, s)
        );
      };
    }),
      (e.exports = { assertOptions: s, validators: o });
  },
  "861d": function (e, t, r) {
    var n = r("1626");
    e.exports = function (e) {
      return "object" == typeof e ? null !== e : n(e);
    };
  },
  8925: function (e, t, r) {
    var n = r("e330"),
      o = r("1626"),
      i = r("c6cd"),
      s = n(Function.toString);
    o(i.inspectSource) ||
      (i.inspectSource = function (e) {
        return s(e);
      }),
      (e.exports = i.inspectSource);
  },
  "8df4": function (e, t, r) {
    "use strict";
    var n = r("7a77");
    function o(e) {
      if ("function" !== typeof e)
        throw new TypeError("executor must be a function.");
      var t;
      this.promise = new Promise(function (e) {
        t = e;
      });
      var r = this;
      this.promise.then(function (e) {
        if (r._listeners) {
          var t,
            n = r._listeners.length;
          for (t = 0; t < n; t++) r._listeners[t](e);
          r._listeners = null;
        }
      }),
        (this.promise.then = function (e) {
          var t,
            n = new Promise(function (e) {
              r.subscribe(e), (t = e);
            }).then(e);
          return (
            (n.cancel = function () {
              r.unsubscribe(t);
            }),
            n
          );
        }),
        e(function (e) {
          r.reason || ((r.reason = new n(e)), t(r.reason));
        });
    }
    (o.prototype.throwIfRequested = function () {
      if (this.reason) throw this.reason;
    }),
      (o.prototype.subscribe = function (e) {
        this.reason
          ? e(this.reason)
          : this._listeners
          ? this._listeners.push(e)
          : (this._listeners = [e]);
      }),
      (o.prototype.unsubscribe = function (e) {
        if (this._listeners) {
          var t = this._listeners.indexOf(e);
          -1 !== t && this._listeners.splice(t, 1);
        }
      }),
      (o.source = function () {
        var e,
          t = new o(function (t) {
            e = t;
          });
        return { token: t, cancel: e };
      }),
      (e.exports = o);
  },
  "907a": function (e, t, r) {
    "use strict";
    var n = r("ebb5"),
      o = r("07fa"),
      i = r("5926"),
      s = n.aTypedArray,
      a = n.exportTypedArrayMethod;
    a("at", function (e) {
      var t = s(this),
        r = o(t),
        n = i(e),
        a = n >= 0 ? n : r + n;
      return a < 0 || a >= r ? void 0 : t[a];
    });
  },
  "90e3": function (e, t, r) {
    var n = r("e330"),
      o = 0,
      i = Math.random(),
      s = n((1).toString);
    e.exports = function (e) {
      return "Symbol(" + (void 0 === e ? "" : e) + ")_" + s(++o + i, 36);
    };
  },
  9112: function (e, t, r) {
    var n = r("83ab"),
      o = r("9bf2"),
      i = r("5c6c");
    e.exports = n
      ? function (e, t, r) {
          return o.f(e, t, i(1, r));
        }
      : function (e, t, r) {
          return (e[t] = r), e;
        };
  },
  "94ca": function (e, t, r) {
    var n = r("d039"),
      o = r("1626"),
      i = /#|\.prototype\./,
      s = function (e, t) {
        var r = c[a(e)];
        return r == f || (r != u && (o(t) ? n(t) : !!t));
      },
      a = (s.normalize = function (e) {
        return String(e).replace(i, ".").toLowerCase();
      }),
      c = (s.data = {}),
      u = (s.NATIVE = "N"),
      f = (s.POLYFILL = "P");
    e.exports = s;
  },
  9845: function (e, t, r) {
    var n,
      o,
      i,
      s = void 0;
    (function (r, s) {
      (o = [e]),
        (n = s),
        (i = "function" === typeof n ? n.apply(t, o) : n),
        void 0 === i || (e.exports = i);
    })(
      "undefined" !== typeof globalThis
        ? globalThis
        : "undefined" !== typeof self && self,
      function (e) {
        "use strict";
        if (
          "undefined" === typeof s ||
          Object.getPrototypeOf(s) !== Object.prototype
        ) {
          const t = "The message port closed before a response was received.",
            r =
              "Returning a Promise is the preferred way to send a reply from an onMessage/onMessageExternal listener, as the sendResponse will be removed from the specs (See https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage)",
            n = (e) => {
              const n = {
                alarms: {
                  clear: { minArgs: 0, maxArgs: 1 },
                  clearAll: { minArgs: 0, maxArgs: 0 },
                  get: { minArgs: 0, maxArgs: 1 },
                  getAll: { minArgs: 0, maxArgs: 0 },
                },
                bookmarks: {
                  create: { minArgs: 1, maxArgs: 1 },
                  get: { minArgs: 1, maxArgs: 1 },
                  getChildren: { minArgs: 1, maxArgs: 1 },
                  getRecent: { minArgs: 1, maxArgs: 1 },
                  getSubTree: { minArgs: 1, maxArgs: 1 },
                  getTree: { minArgs: 0, maxArgs: 0 },
                  move: { minArgs: 2, maxArgs: 2 },
                  remove: { minArgs: 1, maxArgs: 1 },
                  removeTree: { minArgs: 1, maxArgs: 1 },
                  search: { minArgs: 1, maxArgs: 1 },
                  update: { minArgs: 2, maxArgs: 2 },
                },
                browserAction: {
                  disable: { minArgs: 0, maxArgs: 1, fallbackToNoCallback: !0 },
                  enable: { minArgs: 0, maxArgs: 1, fallbackToNoCallback: !0 },
                  getBadgeBackgroundColor: { minArgs: 1, maxArgs: 1 },
                  getBadgeText: { minArgs: 1, maxArgs: 1 },
                  getPopup: { minArgs: 1, maxArgs: 1 },
                  getTitle: { minArgs: 1, maxArgs: 1 },
                  openPopup: { minArgs: 0, maxArgs: 0 },
                  setBadgeBackgroundColor: {
                    minArgs: 1,
                    maxArgs: 1,
                    fallbackToNoCallback: !0,
                  },
                  setBadgeText: {
                    minArgs: 1,
                    maxArgs: 1,
                    fallbackToNoCallback: !0,
                  },
                  setIcon: { minArgs: 1, maxArgs: 1 },
                  setPopup: {
                    minArgs: 1,
                    maxArgs: 1,
                    fallbackToNoCallback: !0,
                  },
                  setTitle: {
                    minArgs: 1,
                    maxArgs: 1,
                    fallbackToNoCallback: !0,
                  },
                },
                browsingData: {
                  remove: { minArgs: 2, maxArgs: 2 },
                  removeCache: { minArgs: 1, maxArgs: 1 },
                  removeCookies: { minArgs: 1, maxArgs: 1 },
                  removeDownloads: { minArgs: 1, maxArgs: 1 },
                  removeFormData: { minArgs: 1, maxArgs: 1 },
                  removeHistory: { minArgs: 1, maxArgs: 1 },
                  removeLocalStorage: { minArgs: 1, maxArgs: 1 },
                  removePasswords: { minArgs: 1, maxArgs: 1 },
                  removePluginData: { minArgs: 1, maxArgs: 1 },
                  settings: { minArgs: 0, maxArgs: 0 },
                },
                commands: { getAll: { minArgs: 0, maxArgs: 0 } },
                contextMenus: {
                  remove: { minArgs: 1, maxArgs: 1 },
                  removeAll: { minArgs: 0, maxArgs: 0 },
                  update: { minArgs: 2, maxArgs: 2 },
                },
                cookies: {
                  get: { minArgs: 1, maxArgs: 1 },
                  getAll: { minArgs: 1, maxArgs: 1 },
                  getAllCookieStores: { minArgs: 0, maxArgs: 0 },
                  remove: { minArgs: 1, maxArgs: 1 },
                  set: { minArgs: 1, maxArgs: 1 },
                },
                devtools: {
                  inspectedWindow: {
                    eval: { minArgs: 1, maxArgs: 2, singleCallbackArg: !1 },
                  },
                  panels: {
                    create: { minArgs: 3, maxArgs: 3, singleCallbackArg: !0 },
                    elements: { createSidebarPane: { minArgs: 1, maxArgs: 1 } },
                  },
                },
                downloads: {
                  cancel: { minArgs: 1, maxArgs: 1 },
                  download: { minArgs: 1, maxArgs: 1 },
                  erase: { minArgs: 1, maxArgs: 1 },
                  getFileIcon: { minArgs: 1, maxArgs: 2 },
                  open: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 },
                  pause: { minArgs: 1, maxArgs: 1 },
                  removeFile: { minArgs: 1, maxArgs: 1 },
                  resume: { minArgs: 1, maxArgs: 1 },
                  search: { minArgs: 1, maxArgs: 1 },
                  show: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 },
                },
                extension: {
                  isAllowedFileSchemeAccess: { minArgs: 0, maxArgs: 0 },
                  isAllowedIncognitoAccess: { minArgs: 0, maxArgs: 0 },
                },
                history: {
                  addUrl: { minArgs: 1, maxArgs: 1 },
                  deleteAll: { minArgs: 0, maxArgs: 0 },
                  deleteRange: { minArgs: 1, maxArgs: 1 },
                  deleteUrl: { minArgs: 1, maxArgs: 1 },
                  getVisits: { minArgs: 1, maxArgs: 1 },
                  search: { minArgs: 1, maxArgs: 1 },
                },
                i18n: {
                  detectLanguage: { minArgs: 1, maxArgs: 1 },
                  getAcceptLanguages: { minArgs: 0, maxArgs: 0 },
                },
                identity: { launchWebAuthFlow: { minArgs: 1, maxArgs: 1 } },
                idle: { queryState: { minArgs: 1, maxArgs: 1 } },
                management: {
                  get: { minArgs: 1, maxArgs: 1 },
                  getAll: { minArgs: 0, maxArgs: 0 },
                  getSelf: { minArgs: 0, maxArgs: 0 },
                  setEnabled: { minArgs: 2, maxArgs: 2 },
                  uninstallSelf: { minArgs: 0, maxArgs: 1 },
                },
                notifications: {
                  clear: { minArgs: 1, maxArgs: 1 },
                  create: { minArgs: 1, maxArgs: 2 },
                  getAll: { minArgs: 0, maxArgs: 0 },
                  getPermissionLevel: { minArgs: 0, maxArgs: 0 },
                  update: { minArgs: 2, maxArgs: 2 },
                },
                pageAction: {
                  getPopup: { minArgs: 1, maxArgs: 1 },
                  getTitle: { minArgs: 1, maxArgs: 1 },
                  hide: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 },
                  setIcon: { minArgs: 1, maxArgs: 1 },
                  setPopup: {
                    minArgs: 1,
                    maxArgs: 1,
                    fallbackToNoCallback: !0,
                  },
                  setTitle: {
                    minArgs: 1,
                    maxArgs: 1,
                    fallbackToNoCallback: !0,
                  },
                  show: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 },
                },
                permissions: {
                  contains: { minArgs: 1, maxArgs: 1 },
                  getAll: { minArgs: 0, maxArgs: 0 },
                  remove: { minArgs: 1, maxArgs: 1 },
                  request: { minArgs: 1, maxArgs: 1 },
                },
                runtime: {
                  getBackgroundPage: { minArgs: 0, maxArgs: 0 },
                  getPlatformInfo: { minArgs: 0, maxArgs: 0 },
                  openOptionsPage: { minArgs: 0, maxArgs: 0 },
                  requestUpdateCheck: { minArgs: 0, maxArgs: 0 },
                  sendMessage: { minArgs: 1, maxArgs: 3 },
                  sendNativeMessage: { minArgs: 2, maxArgs: 2 },
                  setUninstallURL: { minArgs: 1, maxArgs: 1 },
                },
                sessions: {
                  getDevices: { minArgs: 0, maxArgs: 1 },
                  getRecentlyClosed: { minArgs: 0, maxArgs: 1 },
                  restore: { minArgs: 0, maxArgs: 1 },
                },
                storage: {
                  local: {
                    clear: { minArgs: 0, maxArgs: 0 },
                    get: { minArgs: 0, maxArgs: 1 },
                    getBytesInUse: { minArgs: 0, maxArgs: 1 },
                    remove: { minArgs: 1, maxArgs: 1 },
                    set: { minArgs: 1, maxArgs: 1 },
                  },
                  managed: {
                    get: { minArgs: 0, maxArgs: 1 },
                    getBytesInUse: { minArgs: 0, maxArgs: 1 },
                  },
                  sync: {
                    clear: { minArgs: 0, maxArgs: 0 },
                    get: { minArgs: 0, maxArgs: 1 },
                    getBytesInUse: { minArgs: 0, maxArgs: 1 },
                    remove: { minArgs: 1, maxArgs: 1 },
                    set: { minArgs: 1, maxArgs: 1 },
                  },
                },
                tabs: {
                  captureVisibleTab: { minArgs: 0, maxArgs: 2 },
                  create: { minArgs: 1, maxArgs: 1 },
                  detectLanguage: { minArgs: 0, maxArgs: 1 },
                  discard: { minArgs: 0, maxArgs: 1 },
                  duplicate: { minArgs: 1, maxArgs: 1 },
                  executeScript: { minArgs: 1, maxArgs: 2 },
                  get: { minArgs: 1, maxArgs: 1 },
                  getCurrent: { minArgs: 0, maxArgs: 0 },
                  getZoom: { minArgs: 0, maxArgs: 1 },
                  getZoomSettings: { minArgs: 0, maxArgs: 1 },
                  goBack: { minArgs: 0, maxArgs: 1 },
                  goForward: { minArgs: 0, maxArgs: 1 },
                  highlight: { minArgs: 1, maxArgs: 1 },
                  insertCSS: { minArgs: 1, maxArgs: 2 },
                  move: { minArgs: 2, maxArgs: 2 },
                  query: { minArgs: 1, maxArgs: 1 },
                  reload: { minArgs: 0, maxArgs: 2 },
                  remove: { minArgs: 1, maxArgs: 1 },
                  removeCSS: { minArgs: 1, maxArgs: 2 },
                  sendMessage: { minArgs: 2, maxArgs: 3 },
                  setZoom: { minArgs: 1, maxArgs: 2 },
                  setZoomSettings: { minArgs: 1, maxArgs: 2 },
                  update: { minArgs: 1, maxArgs: 2 },
                },
                topSites: { get: { minArgs: 0, maxArgs: 0 } },
                webNavigation: {
                  getAllFrames: { minArgs: 1, maxArgs: 1 },
                  getFrame: { minArgs: 1, maxArgs: 1 },
                },
                webRequest: {
                  handlerBehaviorChanged: { minArgs: 0, maxArgs: 0 },
                },
                windows: {
                  create: { minArgs: 0, maxArgs: 1 },
                  get: { minArgs: 1, maxArgs: 2 },
                  getAll: { minArgs: 0, maxArgs: 1 },
                  getCurrent: { minArgs: 0, maxArgs: 1 },
                  getLastFocused: { minArgs: 0, maxArgs: 1 },
                  remove: { minArgs: 1, maxArgs: 1 },
                  update: { minArgs: 2, maxArgs: 2 },
                },
              };
              if (0 === Object.keys(n).length)
                throw new Error(
                  "api-metadata.json has not been included in browser-polyfill"
                );
              class o extends WeakMap {
                constructor(e, t) {
                  super(t), (this.createItem = e);
                }
                get(e) {
                  return (
                    this.has(e) || this.set(e, this.createItem(e)), super.get(e)
                  );
                }
              }
              const i = (e) =>
                  e && "object" === typeof e && "function" === typeof e.then,
                s =
                  (t, r) =>
                  (...n) => {
                    e.runtime.lastError
                      ? t.reject(new Error(e.runtime.lastError.message))
                      : r.singleCallbackArg ||
                        (n.length <= 1 && !1 !== r.singleCallbackArg)
                      ? t.resolve(n[0])
                      : t.resolve(n);
                  },
                a = (e) => (1 == e ? "argument" : "arguments"),
                c = (e, t) =>
                  function (r, ...n) {
                    if (n.length < t.minArgs)
                      throw new Error(
                        `Expected at least ${t.minArgs} ${a(
                          t.minArgs
                        )} for ${e}(), got ${n.length}`
                      );
                    if (n.length > t.maxArgs)
                      throw new Error(
                        `Expected at most ${t.maxArgs} ${a(
                          t.maxArgs
                        )} for ${e}(), got ${n.length}`
                      );
                    return new Promise((o, i) => {
                      if (t.fallbackToNoCallback)
                        try {
                          r[e](...n, s({ resolve: o, reject: i }, t));
                        } catch (a) {
                          console.warn(
                            e +
                              " API method doesn't seem to support the callback parameter, falling back to call it without a callback: ",
                            a
                          ),
                            r[e](...n),
                            (t.fallbackToNoCallback = !1),
                            (t.noCallback = !0),
                            o();
                        }
                      else
                        t.noCallback
                          ? (r[e](...n), o())
                          : r[e](...n, s({ resolve: o, reject: i }, t));
                    });
                  },
                u = (e, t, r) =>
                  new Proxy(t, {
                    apply(t, n, o) {
                      return r.call(n, e, ...o);
                    },
                  });
              let f = Function.call.bind(Object.prototype.hasOwnProperty);
              const l = (e, t = {}, r = {}) => {
                  let n = Object.create(null),
                    o = {
                      has(t, r) {
                        return r in e || r in n;
                      },
                      get(o, i, s) {
                        if (i in n) return n[i];
                        if (!(i in e)) return;
                        let a = e[i];
                        if ("function" === typeof a)
                          if ("function" === typeof t[i]) a = u(e, e[i], t[i]);
                          else if (f(r, i)) {
                            let t = c(i, r[i]);
                            a = u(e, e[i], t);
                          } else a = a.bind(e);
                        else if (
                          "object" === typeof a &&
                          null !== a &&
                          (f(t, i) || f(r, i))
                        )
                          a = l(a, t[i], r[i]);
                        else {
                          if (!f(r, "*"))
                            return (
                              Object.defineProperty(n, i, {
                                configurable: !0,
                                enumerable: !0,
                                get() {
                                  return e[i];
                                },
                                set(t) {
                                  e[i] = t;
                                },
                              }),
                              a
                            );
                          a = l(a, t[i], r["*"]);
                        }
                        return (n[i] = a), a;
                      },
                      set(t, r, o, i) {
                        return r in n ? (n[r] = o) : (e[r] = o), !0;
                      },
                      defineProperty(e, t, r) {
                        return Reflect.defineProperty(n, t, r);
                      },
                      deleteProperty(e, t) {
                        return Reflect.deleteProperty(n, t);
                      },
                    },
                    i = Object.create(e);
                  return new Proxy(i, o);
                },
                d = (e) => ({
                  addListener(t, r, ...n) {
                    t.addListener(e.get(r), ...n);
                  },
                  hasListener(t, r) {
                    return t.hasListener(e.get(r));
                  },
                  removeListener(t, r) {
                    t.removeListener(e.get(r));
                  },
                }),
                p = new o((e) =>
                  "function" !== typeof e
                    ? e
                    : function (t) {
                        const r = l(
                          t,
                          {},
                          { getContent: { minArgs: 0, maxArgs: 0 } }
                        );
                        e(r);
                      }
                );
              let g = !1;
              const m = new o((e) =>
                  "function" !== typeof e
                    ? e
                    : function (t, n, o) {
                        let s,
                          a,
                          c = !1,
                          u = new Promise((e) => {
                            s = function (t) {
                              g ||
                                (console.warn(r, new Error().stack), (g = !0)),
                                (c = !0),
                                e(t);
                            };
                          });
                        try {
                          a = e(t, n, s);
                        } catch (d) {
                          a = Promise.reject(d);
                        }
                        const f = !0 !== a && i(a);
                        if (!0 !== a && !f && !c) return !1;
                        const l = (e) => {
                          e.then(
                            (e) => {
                              o(e);
                            },
                            (e) => {
                              let t;
                              (t =
                                e &&
                                (e instanceof Error ||
                                  "string" === typeof e.message)
                                  ? e.message
                                  : "An unexpected error occurred"),
                                o({
                                  __mozWebExtensionPolyfillReject__: !0,
                                  message: t,
                                });
                            }
                          ).catch((e) => {
                            console.error(
                              "Failed to send onMessage rejected reply",
                              e
                            );
                          });
                        };
                        return l(f ? a : u), !0;
                      }
                ),
                b = ({ reject: r, resolve: n }, o) => {
                  e.runtime.lastError
                    ? e.runtime.lastError.message === t
                      ? n()
                      : r(new Error(e.runtime.lastError.message))
                    : o && o.__mozWebExtensionPolyfillReject__
                    ? r(new Error(o.message))
                    : n(o);
                },
                h = (e, t, r, ...n) => {
                  if (n.length < t.minArgs)
                    throw new Error(
                      `Expected at least ${t.minArgs} ${a(
                        t.minArgs
                      )} for ${e}(), got ${n.length}`
                    );
                  if (n.length > t.maxArgs)
                    throw new Error(
                      `Expected at most ${t.maxArgs} ${a(
                        t.maxArgs
                      )} for ${e}(), got ${n.length}`
                    );
                  return new Promise((e, t) => {
                    const o = b.bind(null, { resolve: e, reject: t });
                    n.push(o), r.sendMessage(...n);
                  });
                },
                y = {
                  devtools: { network: { onRequestFinished: d(p) } },
                  runtime: {
                    onMessage: d(m),
                    onMessageExternal: d(m),
                    sendMessage: h.bind(null, "sendMessage", {
                      minArgs: 1,
                      maxArgs: 3,
                    }),
                  },
                  tabs: {
                    sendMessage: h.bind(null, "sendMessage", {
                      minArgs: 2,
                      maxArgs: 3,
                    }),
                  },
                },
                A = {
                  clear: { minArgs: 1, maxArgs: 1 },
                  get: { minArgs: 1, maxArgs: 1 },
                  set: { minArgs: 1, maxArgs: 1 },
                };
              return (
                (n.privacy = {
                  network: { "*": A },
                  services: { "*": A },
                  websites: { "*": A },
                }),
                l(e, y, n)
              );
            };
          if (
            "object" != typeof chrome ||
            !chrome ||
            !chrome.runtime ||
            !chrome.runtime.id
          )
            throw new Error(
              "This script should only be loaded in a browser extension."
            );
          e.exports = n(chrome);
        } else e.exports = s;
      }
    );
  },
  "986a": function (e, t, r) {
    "use strict";
    var n = r("ebb5"),
      o = r("a258").findLast,
      i = n.aTypedArray,
      s = n.exportTypedArrayMethod;
    s("findLast", function (e) {
      return o(i(this), e, arguments.length > 1 ? arguments[1] : void 0);
    });
  },
  "9a1b": function (e, t, r) {
    "use strict";
    r.d(t, "b", function () {
      return s;
    }),
      r.d(t, "a", function () {
        return a;
      }),
      r.d(t, "c", function () {
        return c;
      });
    r("d9e2");
    var n = r("bc3a"),
      o = r.n(n),
      i = r("a553");
    const s = (e) => f("/l", { token: e, app: i["a"] }),
      a = async (e) => u("/v2", { uid: e }),
      c = async () => u("/t", { app: i["a"] });
    async function u(e, t = {}) {
      const r = await o.a.get(i["b"] + e, { params: t }),
        { status: n, data: s } = r;
      if (200 === n && "0" === s.code) return s.data;
      throw new Error("api call error");
    }
    async function f(e, t = {}) {
      (e = i["b"] + e),
        Object.keys(t).length > 0 &&
          (e += "?" + new URLSearchParams(t).toString());
      const r = await fetch(e);
      if (200 === r.status) {
        const { code: e, data: t } = await r.json();
        if ("0" === e) return t;
      }
      throw new Error("Network error");
    }
  },
  "9bf2": function (e, t, r) {
    var n = r("83ab"),
      o = r("0cfb"),
      i = r("aed9"),
      s = r("825a"),
      a = r("a04b"),
      c = TypeError,
      u = Object.defineProperty,
      f = Object.getOwnPropertyDescriptor,
      l = "enumerable",
      d = "configurable",
      p = "writable";
    t.f = n
      ? i
        ? function (e, t, r) {
            if (
              (s(e),
              (t = a(t)),
              s(r),
              "function" === typeof e &&
                "prototype" === t &&
                "value" in r &&
                p in r &&
                !r[p])
            ) {
              var n = f(e, t);
              n &&
                n[p] &&
                ((e[t] = r.value),
                (r = {
                  configurable: d in r ? r[d] : n[d],
                  enumerable: l in r ? r[l] : n[l],
                  writable: !1,
                }));
            }
            return u(e, t, r);
          }
        : u
      : function (e, t, r) {
          if ((s(e), (t = a(t)), s(r), o))
            try {
              return u(e, t, r);
            } catch (n) {}
          if ("get" in r || "set" in r) throw c("Accessors not supported");
          return "value" in r && (e[t] = r.value), e;
        };
  },
  a04b: function (e, t, r) {
    var n = r("c04e"),
      o = r("d9b5");
    e.exports = function (e) {
      var t = n(e, "string");
      return o(t) ? t : t + "";
    };
  },
  a258: function (e, t, r) {
    var n = r("0366"),
      o = r("44ad"),
      i = r("7b0b"),
      s = r("07fa"),
      a = function (e) {
        var t = 1 == e;
        return function (r, a, c) {
          var u,
            f,
            l = i(r),
            d = o(l),
            p = n(a, c),
            g = s(d);
          while (g-- > 0)
            if (((u = d[g]), (f = p(u, g, l)), f))
              switch (e) {
                case 0:
                  return u;
                case 1:
                  return g;
              }
          return t ? -1 : void 0;
        };
      };
    e.exports = { findLast: a(0), findLastIndex: a(1) };
  },
  a553: function (e, t, r) {
    "use strict";
    r.d(t, "a", function () {
      return o;
    }),
      r.d(t, "b", function () {
        return s;
      }),
      r.d(t, "d", function () {
        return a;
      }),
      r.d(t, "c", function () {
        return c;
      }),
      r.d(t, "f", function () {
        return u;
      }),
      r.d(t, "g", function () {
        return f;
      }),
      r.d(t, "e", function () {
        return l;
      });
    var n = r("d3ff");
    const o = 7,
      i = { dev: "http://localhost:3000", prod: "https://b.unispy.io/shop" },
      s = i.prod,
      a = "https://fb-group-extractor.unispy.io",
      c = { normal: 20, vip: 1e6 },
      u = {
        get: async () => {
          const { interval: e } = await n["a"](["interval"]);
          return e || [5, 12];
        },
        set: (e) => n["c"]({ interval: e }),
      },
      f = {
        get: async () => {
          const { pause: e } = await n["a"](["pause"]);
          return e || { num: 20, wait: 2 };
        },
        set: (e) => n["c"]({ pause: e }),
      },
      l = {
        get: async () => {
          const { export_type: e } = await n["a"](["export_type"]);
          return e || "excel";
        },
        set: (e) => n["c"]({ export_type: e }),
      };
  },
  a981: function (e, t) {
    e.exports =
      "undefined" != typeof ArrayBuffer && "undefined" != typeof DataView;
  },
  ab36: function (e, t, r) {
    var n = r("861d"),
      o = r("9112");
    e.exports = function (e, t) {
      n(t) && "cause" in t && o(e, "cause", t.cause);
    };
  },
  aeb0: function (e, t, r) {
    var n = r("9bf2").f;
    e.exports = function (e, t, r) {
      r in e ||
        n(e, r, {
          configurable: !0,
          get: function () {
            return t[r];
          },
          set: function (e) {
            t[r] = e;
          },
        });
    };
  },
  aed9: function (e, t, r) {
    var n = r("83ab"),
      o = r("d039");
    e.exports =
      n &&
      o(function () {
        return (
          42 !=
          Object.defineProperty(function () {}, "prototype", {
            value: 42,
            writable: !1,
          }).prototype
        );
      });
  },
  b42e: function (e, t) {
    var r = Math.ceil,
      n = Math.floor;
    e.exports =
      Math.trunc ||
      function (e) {
        var t = +e;
        return (t > 0 ? n : r)(t);
      };
  },
  b50d: function (e, t, r) {
    "use strict";
    var n = r("c532"),
      o = r("467f"),
      i = r("7aac"),
      s = r("30b5"),
      a = r("83b9"),
      c = r("c345"),
      u = r("3934"),
      f = r("2d83"),
      l = r("2444"),
      d = r("7a77");
    e.exports = function (e) {
      return new Promise(function (t, r) {
        var p,
          g = e.data,
          m = e.headers,
          b = e.responseType;
        function h() {
          e.cancelToken && e.cancelToken.unsubscribe(p),
            e.signal && e.signal.removeEventListener("abort", p);
        }
        n.isFormData(g) && delete m["Content-Type"];
        var y = new XMLHttpRequest();
        if (e.auth) {
          var A = e.auth.username || "",
            v = e.auth.password
              ? unescape(encodeURIComponent(e.auth.password))
              : "";
          m.Authorization = "Basic " + btoa(A + ":" + v);
        }
        var x = a(e.baseURL, e.url);
        function _() {
          if (y) {
            var n =
                "getAllResponseHeaders" in y
                  ? c(y.getAllResponseHeaders())
                  : null,
              i =
                b && "text" !== b && "json" !== b ? y.response : y.responseText,
              s = {
                data: i,
                status: y.status,
                statusText: y.statusText,
                headers: n,
                config: e,
                request: y,
              };
            o(
              function (e) {
                t(e), h();
              },
              function (e) {
                r(e), h();
              },
              s
            ),
              (y = null);
          }
        }
        if (
          (y.open(
            e.method.toUpperCase(),
            s(x, e.params, e.paramsSerializer),
            !0
          ),
          (y.timeout = e.timeout),
          "onloadend" in y
            ? (y.onloadend = _)
            : (y.onreadystatechange = function () {
                y &&
                  4 === y.readyState &&
                  (0 !== y.status ||
                    (y.responseURL && 0 === y.responseURL.indexOf("file:"))) &&
                  setTimeout(_);
              }),
          (y.onabort = function () {
            y && (r(f("Request aborted", e, "ECONNABORTED", y)), (y = null));
          }),
          (y.onerror = function () {
            r(f("Network Error", e, null, y)), (y = null);
          }),
          (y.ontimeout = function () {
            var t = e.timeout
                ? "timeout of " + e.timeout + "ms exceeded"
                : "timeout exceeded",
              n = e.transitional || l.transitional;
            e.timeoutErrorMessage && (t = e.timeoutErrorMessage),
              r(
                f(t, e, n.clarifyTimeoutError ? "ETIMEDOUT" : "ECONNABORTED", y)
              ),
              (y = null);
          }),
          n.isStandardBrowserEnv())
        ) {
          var w =
            (e.withCredentials || u(x)) && e.xsrfCookieName
              ? i.read(e.xsrfCookieName)
              : void 0;
          w && (m[e.xsrfHeaderName] = w);
        }
        "setRequestHeader" in y &&
          n.forEach(m, function (e, t) {
            "undefined" === typeof g && "content-type" === t.toLowerCase()
              ? delete m[t]
              : y.setRequestHeader(t, e);
          }),
          n.isUndefined(e.withCredentials) ||
            (y.withCredentials = !!e.withCredentials),
          b && "json" !== b && (y.responseType = e.responseType),
          "function" === typeof e.onDownloadProgress &&
            y.addEventListener("progress", e.onDownloadProgress),
          "function" === typeof e.onUploadProgress &&
            y.upload &&
            y.upload.addEventListener("progress", e.onUploadProgress),
          (e.cancelToken || e.signal) &&
            ((p = function (e) {
              y &&
                (r(!e || (e && e.type) ? new d("canceled") : e),
                y.abort(),
                (y = null));
            }),
            e.cancelToken && e.cancelToken.subscribe(p),
            e.signal &&
              (e.signal.aborted ? p() : e.signal.addEventListener("abort", p))),
          g || (g = null),
          y.send(g);
      });
    };
  },
  b622: function (e, t, r) {
    var n = r("da84"),
      o = r("5692"),
      i = r("1a2d"),
      s = r("90e3"),
      a = r("4930"),
      c = r("fdbf"),
      u = o("wks"),
      f = n.Symbol,
      l = f && f["for"],
      d = c ? f : (f && f.withoutSetter) || s;
    e.exports = function (e) {
      if (!i(u, e) || (!a && "string" != typeof u[e])) {
        var t = "Symbol." + e;
        a && i(f, e) ? (u[e] = f[e]) : (u[e] = c && l ? l(t) : d(t));
      }
      return u[e];
    };
  },
  b980: function (e, t, r) {
    var n = r("d039"),
      o = r("5c6c");
    e.exports = !n(function () {
      var e = Error("a");
      return (
        !("stack" in e) ||
        (Object.defineProperty(e, "stack", o(1, 7)), 7 !== e.stack)
      );
    });
  },
  bc3a: function (e, t, r) {
    e.exports = r("cee4");
  },
  c04e: function (e, t, r) {
    var n = r("c65b"),
      o = r("861d"),
      i = r("d9b5"),
      s = r("dc4a"),
      a = r("485a"),
      c = r("b622"),
      u = TypeError,
      f = c("toPrimitive");
    e.exports = function (e, t) {
      if (!o(e) || i(e)) return e;
      var r,
        c = s(e, f);
      if (c) {
        if ((void 0 === t && (t = "default"), (r = n(c, e, t)), !o(r) || i(r)))
          return r;
        throw u("Can't convert object to primitive value");
      }
      return void 0 === t && (t = "number"), a(e, t);
    };
  },
  c276: function (e, t, r) {
    "use strict";
    r.d(t, "c", function () {
      return i;
    }),
      r.d(t, "d", function () {
        return s;
      }),
      r.d(t, "b", function () {
        return a;
      }),
      r.d(t, "f", function () {
        return c;
      }),
      r.d(t, "e", function () {
        return u;
      }),
      r.d(t, "a", function () {
        return f;
      });
    r("907a"), r("3c5d"), r("fa9e"), r("77d9");
    var n = r("9845"),
      o = r.n(n);
    function i(e) {
      const t = {};
      for (const [r, n] of new URL(
        e || window.location.href
      ).searchParams.entries())
        t[r] = n;
      return t;
    }
    function s() {
      return o.a.runtime.getManifest().version;
    }
    function a(e) {
      return o.a.runtime.getURL(e);
    }
    function c(e) {
      return new Promise(function (t) {
        return setTimeout(t, e);
      });
    }
    function u(e, t) {
      return (
        (e = Math.ceil(e)),
        (t = Math.floor(t)),
        Math.floor(Math.random() * (t - e + 1)) + e
      );
    }
    function f(e, t, r) {
      const n = new Blob([e], { type: r || "application/octet-binary" }),
        o = URL.createObjectURL(n);
      var i = document.createElement("a");
      (i.style.display = "none"),
        (i.href = o),
        i.setAttribute("download", t),
        "undefined" === typeof i.download && i.setAttribute("target", "_blank"),
        document.body.appendChild(i),
        i.click(),
        document.body.removeChild(i),
        setTimeout(() => {
          window.URL.revokeObjectURL(o);
        }, 100);
    }
  },
  c345: function (e, t, r) {
    "use strict";
    var n = r("c532"),
      o = [
        "age",
        "authorization",
        "content-length",
        "content-type",
        "etag",
        "expires",
        "from",
        "host",
        "if-modified-since",
        "if-unmodified-since",
        "last-modified",
        "location",
        "max-forwards",
        "proxy-authorization",
        "referer",
        "retry-after",
        "user-agent",
      ];
    e.exports = function (e) {
      var t,
        r,
        i,
        s = {};
      return e
        ? (n.forEach(e.split("\n"), function (e) {
            if (
              ((i = e.indexOf(":")),
              (t = n.trim(e.substr(0, i)).toLowerCase()),
              (r = n.trim(e.substr(i + 1))),
              t)
            ) {
              if (s[t] && o.indexOf(t) >= 0) return;
              s[t] =
                "set-cookie" === t
                  ? (s[t] ? s[t] : []).concat([r])
                  : s[t]
                  ? s[t] + ", " + r
                  : r;
            }
          }),
          s)
        : s;
    };
  },
  c401: function (e, t, r) {
    "use strict";
    var n = r("c532"),
      o = r("2444");
    e.exports = function (e, t, r) {
      var i = this || o;
      return (
        n.forEach(r, function (r) {
          e = r.call(i, e, t);
        }),
        e
      );
    };
  },
  c430: function (e, t) {
    e.exports = !1;
  },
  c532: function (e, t, r) {
    "use strict";
    var n = r("1d2b"),
      o = Object.prototype.toString;
    function i(e) {
      return "[object Array]" === o.call(e);
    }
    function s(e) {
      return "undefined" === typeof e;
    }
    function a(e) {
      return (
        null !== e &&
        !s(e) &&
        null !== e.constructor &&
        !s(e.constructor) &&
        "function" === typeof e.constructor.isBuffer &&
        e.constructor.isBuffer(e)
      );
    }
    function c(e) {
      return "[object ArrayBuffer]" === o.call(e);
    }
    function u(e) {
      return "undefined" !== typeof FormData && e instanceof FormData;
    }
    function f(e) {
      var t;
      return (
        (t =
          "undefined" !== typeof ArrayBuffer && ArrayBuffer.isView
            ? ArrayBuffer.isView(e)
            : e && e.buffer && e.buffer instanceof ArrayBuffer),
        t
      );
    }
    function l(e) {
      return "string" === typeof e;
    }
    function d(e) {
      return "number" === typeof e;
    }
    function p(e) {
      return null !== e && "object" === typeof e;
    }
    function g(e) {
      if ("[object Object]" !== o.call(e)) return !1;
      var t = Object.getPrototypeOf(e);
      return null === t || t === Object.prototype;
    }
    function m(e) {
      return "[object Date]" === o.call(e);
    }
    function b(e) {
      return "[object File]" === o.call(e);
    }
    function h(e) {
      return "[object Blob]" === o.call(e);
    }
    function y(e) {
      return "[object Function]" === o.call(e);
    }
    function A(e) {
      return p(e) && y(e.pipe);
    }
    function v(e) {
      return (
        "undefined" !== typeof URLSearchParams && e instanceof URLSearchParams
      );
    }
    function x(e) {
      return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "");
    }
    function _() {
      return (
        ("undefined" === typeof navigator ||
          ("ReactNative" !== navigator.product &&
            "NativeScript" !== navigator.product &&
            "NS" !== navigator.product)) &&
        "undefined" !== typeof window &&
        "undefined" !== typeof document
      );
    }
    function w(e, t) {
      if (null !== e && "undefined" !== typeof e)
        if (("object" !== typeof e && (e = [e]), i(e)))
          for (var r = 0, n = e.length; r < n; r++) t.call(null, e[r], r, e);
        else
          for (var o in e)
            Object.prototype.hasOwnProperty.call(e, o) &&
              t.call(null, e[o], o, e);
    }
    function k() {
      var e = {};
      function t(t, r) {
        g(e[r]) && g(t)
          ? (e[r] = k(e[r], t))
          : g(t)
          ? (e[r] = k({}, t))
          : i(t)
          ? (e[r] = t.slice())
          : (e[r] = t);
      }
      for (var r = 0, n = arguments.length; r < n; r++) w(arguments[r], t);
      return e;
    }
    function E(e, t, r) {
      return (
        w(t, function (t, o) {
          e[o] = r && "function" === typeof t ? n(t, r) : t;
        }),
        e
      );
    }
    function j(e) {
      return 65279 === e.charCodeAt(0) && (e = e.slice(1)), e;
    }
    e.exports = {
      isArray: i,
      isArrayBuffer: c,
      isBuffer: a,
      isFormData: u,
      isArrayBufferView: f,
      isString: l,
      isNumber: d,
      isObject: p,
      isPlainObject: g,
      isUndefined: s,
      isDate: m,
      isFile: b,
      isBlob: h,
      isFunction: y,
      isStream: A,
      isURLSearchParams: v,
      isStandardBrowserEnv: _,
      forEach: w,
      merge: k,
      extend: E,
      trim: x,
      stripBOM: j,
    };
  },
  c65b: function (e, t, r) {
    var n = r("40d5"),
      o = Function.prototype.call;
    e.exports = n
      ? o.bind(o)
      : function () {
          return o.apply(o, arguments);
        };
  },
  c6b6: function (e, t, r) {
    var n = r("e330"),
      o = n({}.toString),
      i = n("".slice);
    e.exports = function (e) {
      return i(o(e), 8, -1);
    };
  },
  c6cd: function (e, t, r) {
    var n = r("da84"),
      o = r("6374"),
      i = "__core-js_shared__",
      s = n[i] || o(i, {});
    e.exports = s;
  },
  c770: function (e, t, r) {
    var n = r("e330"),
      o = Error,
      i = n("".replace),
      s = (function (e) {
        return String(o(e).stack);
      })("zxcasd"),
      a = /\n\s*at [^:]*:[^\n]*/,
      c = a.test(s);
    e.exports = function (e, t) {
      if (c && "string" == typeof e && !o.prepareStackTrace)
        while (t--) e = i(e, a, "");
      return e;
    };
  },
  c8af: function (e, t, r) {
    "use strict";
    var n = r("c532");
    e.exports = function (e, t) {
      n.forEach(e, function (r, n) {
        n !== t &&
          n.toUpperCase() === t.toUpperCase() &&
          ((e[t] = r), delete e[n]);
      });
    };
  },
  c8ba: function (e, t) {
    var r;
    r = (function () {
      return this;
    })();
    try {
      r = r || new Function("return this")();
    } catch (n) {
      "object" === typeof window && (r = window);
    }
    e.exports = r;
  },
  ca84: function (e, t, r) {
    var n = r("e330"),
      o = r("1a2d"),
      i = r("fc6a"),
      s = r("4d64").indexOf,
      a = r("d012"),
      c = n([].push);
    e.exports = function (e, t) {
      var r,
        n = i(e),
        u = 0,
        f = [];
      for (r in n) !o(a, r) && o(n, r) && c(f, r);
      while (t.length > u) o(n, (r = t[u++])) && (~s(f, r) || c(f, r));
      return f;
    };
  },
  caad: function (e, t, r) {
    "use strict";
    var n = r("23e7"),
      o = r("4d64").includes,
      i = r("d039"),
      s = r("44d2"),
      a = i(function () {
        return !Array(1).includes();
      });
    n(
      { target: "Array", proto: !0, forced: a },
      {
        includes: function (e) {
          return o(this, e, arguments.length > 1 ? arguments[1] : void 0);
        },
      }
    ),
      s("includes");
  },
  cb2d: function (e, t, r) {
    var n = r("1626"),
      o = r("9bf2"),
      i = r("13d2"),
      s = r("6374");
    e.exports = function (e, t, r, a) {
      a || (a = {});
      var c = a.enumerable,
        u = void 0 !== a.name ? a.name : t;
      if ((n(r) && i(r, u, a), a.global)) c ? (e[t] = r) : s(t, r);
      else {
        try {
          a.unsafe ? e[t] && (c = !0) : delete e[t];
        } catch (f) {}
        c
          ? (e[t] = r)
          : o.f(e, t, {
              value: r,
              enumerable: !1,
              configurable: !a.nonConfigurable,
              writable: !a.nonWritable,
            });
      }
      return e;
    };
  },
  cc12: function (e, t, r) {
    var n = r("da84"),
      o = r("861d"),
      i = n.document,
      s = o(i) && o(i.createElement);
    e.exports = function (e) {
      return s ? i.createElement(e) : {};
    };
  },
  cee4: function (e, t, r) {
    "use strict";
    var n = r("c532"),
      o = r("1d2b"),
      i = r("0a06"),
      s = r("4a7b"),
      a = r("2444");
    function c(e) {
      var t = new i(e),
        r = o(i.prototype.request, t);
      return (
        n.extend(r, i.prototype, t),
        n.extend(r, t),
        (r.create = function (t) {
          return c(s(e, t));
        }),
        r
      );
    }
    var u = c(a);
    (u.Axios = i),
      (u.Cancel = r("7a77")),
      (u.CancelToken = r("8df4")),
      (u.isCancel = r("2e67")),
      (u.VERSION = r("5cce").version),
      (u.all = function (e) {
        return Promise.all(e);
      }),
      (u.spread = r("0df6")),
      (u.isAxiosError = r("5f02")),
      (e.exports = u),
      (e.exports.default = u);
  },
  d012: function (e, t) {
    e.exports = {};
  },
  d039: function (e, t) {
    e.exports = function (e) {
      try {
        return !!e();
      } catch (t) {
        return !0;
      }
    };
  },
  d066: function (e, t, r) {
    var n = r("da84"),
      o = r("1626"),
      i = function (e) {
        return o(e) ? e : void 0;
      };
    e.exports = function (e, t) {
      return arguments.length < 2 ? i(n[e]) : n[e] && n[e][t];
    };
  },
  d1e7: function (e, t, r) {
    "use strict";
    var n = {}.propertyIsEnumerable,
      o = Object.getOwnPropertyDescriptor,
      i = o && !n.call({ 1: 2 }, 1);
    t.f = i
      ? function (e) {
          var t = o(this, e);
          return !!t && t.enumerable;
        }
      : n;
  },
  d2bb: function (e, t, r) {
    var n = r("e330"),
      o = r("825a"),
      i = r("3bbe");
    e.exports =
      Object.setPrototypeOf ||
      ("__proto__" in {}
        ? (function () {
            var e,
              t = !1,
              r = {};
            try {
              (e = n(
                Object.getOwnPropertyDescriptor(Object.prototype, "__proto__")
                  .set
              )),
                e(r, []),
                (t = r instanceof Array);
            } catch (s) {}
            return function (r, n) {
              return o(r), i(n), t ? e(r, n) : (r.__proto__ = n), r;
            };
          })()
        : void 0);
  },
  d3ff: function (e, t, r) {
    "use strict";
    r.d(t, "a", function () {
      return i;
    }),
      r.d(t, "c", function () {
        return s;
      }),
      r.d(t, "b", function () {
        return a;
      });
    var n = r("9845"),
      o = r.n(n);
    const i = (e) => o.a.storage.local.get(e),
      s = (e) => o.a.storage.local.set(e),
      a = (e) => o.a.storage.local.remove(e);
  },
  d925: function (e, t, r) {
    "use strict";
    e.exports = function (e) {
      return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e);
    };
  },
  d9b5: function (e, t, r) {
    var n = r("d066"),
      o = r("1626"),
      i = r("3a9b"),
      s = r("fdbf"),
      a = Object;
    e.exports = s
      ? function (e) {
          return "symbol" == typeof e;
        }
      : function (e) {
          var t = n("Symbol");
          return o(t) && i(t.prototype, a(e));
        };
  },
  d9e2: function (e, t, r) {
    var n = r("23e7"),
      o = r("da84"),
      i = r("2ba4"),
      s = r("e5cb"),
      a = "WebAssembly",
      c = o[a],
      u = 7 !== Error("e", { cause: 7 }).cause,
      f = function (e, t) {
        var r = {};
        (r[e] = s(e, t, u)),
          n({ global: !0, constructor: !0, arity: 1, forced: u }, r);
      },
      l = function (e, t) {
        if (c && c[e]) {
          var r = {};
          (r[e] = s(a + "." + e, t, u)),
            n({ target: a, stat: !0, constructor: !0, arity: 1, forced: u }, r);
        }
      };
    f("Error", function (e) {
      return function (t) {
        return i(e, this, arguments);
      };
    }),
      f("EvalError", function (e) {
        return function (t) {
          return i(e, this, arguments);
        };
      }),
      f("RangeError", function (e) {
        return function (t) {
          return i(e, this, arguments);
        };
      }),
      f("ReferenceError", function (e) {
        return function (t) {
          return i(e, this, arguments);
        };
      }),
      f("SyntaxError", function (e) {
        return function (t) {
          return i(e, this, arguments);
        };
      }),
      f("TypeError", function (e) {
        return function (t) {
          return i(e, this, arguments);
        };
      }),
      f("URIError", function (e) {
        return function (t) {
          return i(e, this, arguments);
        };
      }),
      l("CompileError", function (e) {
        return function (t) {
          return i(e, this, arguments);
        };
      }),
      l("LinkError", function (e) {
        return function (t) {
          return i(e, this, arguments);
        };
      }),
      l("RuntimeError", function (e) {
        return function (t) {
          return i(e, this, arguments);
        };
      });
  },
  da84: function (e, t, r) {
    (function (t) {
      var r = function (e) {
        return e && e.Math == Math && e;
      };
      e.exports =
        r("object" == typeof globalThis && globalThis) ||
        r("object" == typeof window && window) ||
        r("object" == typeof self && self) ||
        r("object" == typeof t && t) ||
        (function () {
          return this;
        })() ||
        Function("return this")();
    }).call(this, r("c8ba"));
  },
  dc4a: function (e, t, r) {
    var n = r("59ed");
    e.exports = function (e, t) {
      var r = e[t];
      return null == r ? void 0 : n(r);
    };
  },
  df75: function (e, t, r) {
    var n = r("ca84"),
      o = r("7839");
    e.exports =
      Object.keys ||
      function (e) {
        return n(e, o);
      };
  },
  df7c: function (e, t, r) {
    (function (e) {
      function r(e, t) {
        for (var r = 0, n = e.length - 1; n >= 0; n--) {
          var o = e[n];
          "." === o
            ? e.splice(n, 1)
            : ".." === o
            ? (e.splice(n, 1), r++)
            : r && (e.splice(n, 1), r--);
        }
        if (t) for (; r--; r) e.unshift("..");
        return e;
      }
      function n(e) {
        "string" !== typeof e && (e += "");
        var t,
          r = 0,
          n = -1,
          o = !0;
        for (t = e.length - 1; t >= 0; --t)
          if (47 === e.charCodeAt(t)) {
            if (!o) {
              r = t + 1;
              break;
            }
          } else -1 === n && ((o = !1), (n = t + 1));
        return -1 === n ? "" : e.slice(r, n);
      }
      function o(e, t) {
        if (e.filter) return e.filter(t);
        for (var r = [], n = 0; n < e.length; n++)
          t(e[n], n, e) && r.push(e[n]);
        return r;
      }
      (t.resolve = function () {
        for (var t = "", n = !1, i = arguments.length - 1; i >= -1 && !n; i--) {
          var s = i >= 0 ? arguments[i] : e.cwd();
          if ("string" !== typeof s)
            throw new TypeError("Arguments to path.resolve must be strings");
          s && ((t = s + "/" + t), (n = "/" === s.charAt(0)));
        }
        return (
          (t = r(
            o(t.split("/"), function (e) {
              return !!e;
            }),
            !n
          ).join("/")),
          (n ? "/" : "") + t || "."
        );
      }),
        (t.normalize = function (e) {
          var n = t.isAbsolute(e),
            s = "/" === i(e, -1);
          return (
            (e = r(
              o(e.split("/"), function (e) {
                return !!e;
              }),
              !n
            ).join("/")),
            e || n || (e = "."),
            e && s && (e += "/"),
            (n ? "/" : "") + e
          );
        }),
        (t.isAbsolute = function (e) {
          return "/" === e.charAt(0);
        }),
        (t.join = function () {
          var e = Array.prototype.slice.call(arguments, 0);
          return t.normalize(
            o(e, function (e, t) {
              if ("string" !== typeof e)
                throw new TypeError("Arguments to path.join must be strings");
              return e;
            }).join("/")
          );
        }),
        (t.relative = function (e, r) {
          function n(e) {
            for (var t = 0; t < e.length; t++) if ("" !== e[t]) break;
            for (var r = e.length - 1; r >= 0; r--) if ("" !== e[r]) break;
            return t > r ? [] : e.slice(t, r - t + 1);
          }
          (e = t.resolve(e).substr(1)), (r = t.resolve(r).substr(1));
          for (
            var o = n(e.split("/")),
              i = n(r.split("/")),
              s = Math.min(o.length, i.length),
              a = s,
              c = 0;
            c < s;
            c++
          )
            if (o[c] !== i[c]) {
              a = c;
              break;
            }
          var u = [];
          for (c = a; c < o.length; c++) u.push("..");
          return (u = u.concat(i.slice(a))), u.join("/");
        }),
        (t.sep = "/"),
        (t.delimiter = ":"),
        (t.dirname = function (e) {
          if (("string" !== typeof e && (e += ""), 0 === e.length)) return ".";
          for (
            var t = e.charCodeAt(0),
              r = 47 === t,
              n = -1,
              o = !0,
              i = e.length - 1;
            i >= 1;
            --i
          )
            if (((t = e.charCodeAt(i)), 47 === t)) {
              if (!o) {
                n = i;
                break;
              }
            } else o = !1;
          return -1 === n
            ? r
              ? "/"
              : "."
            : r && 1 === n
            ? "/"
            : e.slice(0, n);
        }),
        (t.basename = function (e, t) {
          var r = n(e);
          return (
            t &&
              r.substr(-1 * t.length) === t &&
              (r = r.substr(0, r.length - t.length)),
            r
          );
        }),
        (t.extname = function (e) {
          "string" !== typeof e && (e += "");
          for (
            var t = -1, r = 0, n = -1, o = !0, i = 0, s = e.length - 1;
            s >= 0;
            --s
          ) {
            var a = e.charCodeAt(s);
            if (47 !== a)
              -1 === n && ((o = !1), (n = s + 1)),
                46 === a
                  ? -1 === t
                    ? (t = s)
                    : 1 !== i && (i = 1)
                  : -1 !== t && (i = -1);
            else if (!o) {
              r = s + 1;
              break;
            }
          }
          return -1 === t ||
            -1 === n ||
            0 === i ||
            (1 === i && t === n - 1 && t === r + 1)
            ? ""
            : e.slice(t, n);
        });
      var i =
        "b" === "ab".substr(-1)
          ? function (e, t, r) {
              return e.substr(t, r);
            }
          : function (e, t, r) {
              return t < 0 && (t = e.length + t), e.substr(t, r);
            };
    }).call(this, r("4362"));
  },
  e163: function (e, t, r) {
    var n = r("1a2d"),
      o = r("1626"),
      i = r("7b0b"),
      s = r("f772"),
      a = r("e177"),
      c = s("IE_PROTO"),
      u = Object,
      f = u.prototype;
    e.exports = a
      ? u.getPrototypeOf
      : function (e) {
          var t = i(e);
          if (n(t, c)) return t[c];
          var r = t.constructor;
          return o(r) && t instanceof r
            ? r.prototype
            : t instanceof u
            ? f
            : null;
        };
  },
  e177: function (e, t, r) {
    var n = r("d039");
    e.exports = !n(function () {
      function e() {}
      return (
        (e.prototype.constructor = null),
        Object.getPrototypeOf(new e()) !== e.prototype
      );
    });
  },
  e330: function (e, t, r) {
    var n = r("40d5"),
      o = Function.prototype,
      i = o.bind,
      s = o.call,
      a = n && i.bind(s, s);
    e.exports = n
      ? function (e) {
          return e && a(e);
        }
      : function (e) {
          return (
            e &&
            function () {
              return s.apply(e, arguments);
            }
          );
        };
  },
  e391: function (e, t, r) {
    var n = r("577e");
    e.exports = function (e, t) {
      return void 0 === e ? (arguments.length < 2 ? "" : t) : n(e);
    };
  },
  e5cb: function (e, t, r) {
    "use strict";
    var n = r("d066"),
      o = r("1a2d"),
      i = r("9112"),
      s = r("3a9b"),
      a = r("d2bb"),
      c = r("e893"),
      u = r("aeb0"),
      f = r("7156"),
      l = r("e391"),
      d = r("ab36"),
      p = r("c770"),
      g = r("b980"),
      m = r("83ab"),
      b = r("c430");
    e.exports = function (e, t, r, h) {
      var y = "stackTraceLimit",
        A = h ? 2 : 1,
        v = e.split("."),
        x = v[v.length - 1],
        _ = n.apply(null, v);
      if (_) {
        var w = _.prototype;
        if ((!b && o(w, "cause") && delete w.cause, !r)) return _;
        var k = n("Error"),
          E = t(function (e, t) {
            var r = l(h ? t : e, void 0),
              n = h ? new _(e) : new _();
            return (
              void 0 !== r && i(n, "message", r),
              g && i(n, "stack", p(n.stack, 2)),
              this && s(w, this) && f(n, this, E),
              arguments.length > A && d(n, arguments[A]),
              n
            );
          });
        if (
          ((E.prototype = w),
          "Error" !== x
            ? a
              ? a(E, k)
              : c(E, k, { name: !0 })
            : m && y in _ && (u(E, _, y), u(E, _, "prepareStackTrace")),
          c(E, _),
          !b)
        )
          try {
            w.name !== x && i(w, "name", x), (w.constructor = E);
          } catch (j) {}
        return E;
      }
    };
  },
  e683: function (e, t, r) {
    "use strict";
    e.exports = function (e, t) {
      return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
    };
  },
  e893: function (e, t, r) {
    var n = r("1a2d"),
      o = r("56ef"),
      i = r("06cf"),
      s = r("9bf2");
    e.exports = function (e, t, r) {
      for (var a = o(t), c = s.f, u = i.f, f = 0; f < a.length; f++) {
        var l = a[f];
        n(e, l) || (r && n(r, l)) || c(e, l, u(t, l));
      }
    };
  },
  ebb5: function (e, t, r) {
    "use strict";
    var n,
      o,
      i,
      s = r("a981"),
      a = r("83ab"),
      c = r("da84"),
      u = r("1626"),
      f = r("861d"),
      l = r("1a2d"),
      d = r("f5df"),
      p = r("0d51"),
      g = r("9112"),
      m = r("cb2d"),
      b = r("9bf2").f,
      h = r("3a9b"),
      y = r("e163"),
      A = r("d2bb"),
      v = r("b622"),
      x = r("90e3"),
      _ = r("69f3"),
      w = _.enforce,
      k = _.get,
      E = c.Int8Array,
      j = E && E.prototype,
      O = c.Uint8ClampedArray,
      S = O && O.prototype,
      T = E && y(E),
      P = j && y(j),
      C = Object.prototype,
      R = c.TypeError,
      N = v("toStringTag"),
      L = x("TYPED_ARRAY_TAG"),
      U = "TypedArrayConstructor",
      I = s && !!A && "Opera" !== d(c.opera),
      M = !1,
      F = {
        Int8Array: 1,
        Uint8Array: 1,
        Uint8ClampedArray: 1,
        Int16Array: 2,
        Uint16Array: 2,
        Int32Array: 4,
        Uint32Array: 4,
        Float32Array: 4,
        Float64Array: 8,
      },
      B = { BigInt64Array: 8, BigUint64Array: 8 },
      $ = function (e) {
        if (!f(e)) return !1;
        var t = d(e);
        return "DataView" === t || l(F, t) || l(B, t);
      },
      D = function (e) {
        var t = y(e);
        if (f(t)) {
          var r = k(t);
          return r && l(r, U) ? r[U] : D(t);
        }
      },
      q = function (e) {
        if (!f(e)) return !1;
        var t = d(e);
        return l(F, t) || l(B, t);
      },
      z = function (e) {
        if (q(e)) return e;
        throw R("Target is not a typed array");
      },
      W = function (e) {
        if (u(e) && (!A || h(T, e))) return e;
        throw R(p(e) + " is not a typed array constructor");
      },
      G = function (e, t, r, n) {
        if (a) {
          if (r)
            for (var o in F) {
              var i = c[o];
              if (i && l(i.prototype, e))
                try {
                  delete i.prototype[e];
                } catch (s) {
                  try {
                    i.prototype[e] = t;
                  } catch (u) {}
                }
            }
          (P[e] && !r) || m(P, e, r ? t : (I && j[e]) || t, n);
        }
      },
      V = function (e, t, r) {
        var n, o;
        if (a) {
          if (A) {
            if (r)
              for (n in F)
                if (((o = c[n]), o && l(o, e)))
                  try {
                    delete o[e];
                  } catch (i) {}
            if (T[e] && !r) return;
            try {
              return m(T, e, r ? t : (I && T[e]) || t);
            } catch (i) {}
          }
          for (n in F) (o = c[n]), !o || (o[e] && !r) || m(o, e, t);
        }
      };
    for (n in F)
      (o = c[n]), (i = o && o.prototype), i ? (w(i)[U] = o) : (I = !1);
    for (n in B) (o = c[n]), (i = o && o.prototype), i && (w(i)[U] = o);
    if (
      (!I || !u(T) || T === Function.prototype) &&
      ((T = function () {
        throw R("Incorrect invocation");
      }),
      I)
    )
      for (n in F) c[n] && A(c[n], T);
    if ((!I || !P || P === C) && ((P = T.prototype), I))
      for (n in F) c[n] && A(c[n].prototype, P);
    if ((I && y(S) !== P && A(S, P), a && !l(P, N)))
      for (n in ((M = !0),
      b(P, N, {
        get: function () {
          return f(this) ? this[L] : void 0;
        },
      }),
      F))
        c[n] && g(c[n], L, n);
    e.exports = {
      NATIVE_ARRAY_BUFFER_VIEWS: I,
      TYPED_ARRAY_TAG: M && L,
      aTypedArray: z,
      aTypedArrayConstructor: W,
      exportTypedArrayMethod: G,
      exportTypedArrayStaticMethod: V,
      getTypedArrayConstructor: D,
      isView: $,
      isTypedArray: q,
      TypedArray: T,
      TypedArrayPrototype: P,
    };
  },
  f5df: function (e, t, r) {
    var n = r("00ee"),
      o = r("1626"),
      i = r("c6b6"),
      s = r("b622"),
      a = s("toStringTag"),
      c = Object,
      u =
        "Arguments" ==
        i(
          (function () {
            return arguments;
          })()
        ),
      f = function (e, t) {
        try {
          return e[t];
        } catch (r) {}
      };
    e.exports = n
      ? i
      : function (e) {
          var t, r, n;
          return void 0 === e
            ? "Undefined"
            : null === e
            ? "Null"
            : "string" == typeof (r = f((t = c(e)), a))
            ? r
            : u
            ? i(t)
            : "Object" == (n = i(t)) && o(t.callee)
            ? "Arguments"
            : n;
        };
  },
  f6b4: function (e, t, r) {
    "use strict";
    var n = r("c532");
    function o() {
      this.handlers = [];
    }
    (o.prototype.use = function (e, t, r) {
      return (
        this.handlers.push({
          fulfilled: e,
          rejected: t,
          synchronous: !!r && r.synchronous,
          runWhen: r ? r.runWhen : null,
        }),
        this.handlers.length - 1
      );
    }),
      (o.prototype.eject = function (e) {
        this.handlers[e] && (this.handlers[e] = null);
      }),
      (o.prototype.forEach = function (e) {
        n.forEach(this.handlers, function (t) {
          null !== t && e(t);
        });
      }),
      (e.exports = o);
  },
  f772: function (e, t, r) {
    var n = r("5692"),
      o = r("90e3"),
      i = n("keys");
    e.exports = function (e) {
      return i[e] || (i[e] = o(e));
    };
  },
  f8cd: function (e, t, r) {
    var n = r("5926"),
      o = RangeError;
    e.exports = function (e) {
      var t = n(e);
      if (t < 0) throw o("The argument can't be less than 0");
      return t;
    };
  },
  fa9e: function (e, t, r) {
    r("986a");
  },
  fc6a: function (e, t, r) {
    var n = r("44ad"),
      o = r("1d80");
    e.exports = function (e) {
      return n(o(e));
    };
  },
  fdbf: function (e, t, r) {
    var n = r("4930");
    e.exports = n && !Symbol.sham && "symbol" == typeof Symbol.iterator;
  },
  fdde: function (e, t, r) {
    "use strict";
    r.d(t, "a", function () {
      return a;
    }),
      r.d(t, "b", function () {
        return d;
      });
    r("d9e2");
    var n = r("9845"),
      o = r.n(n),
      i = r("d3ff"),
      s = r("6bc9");
    async function a(e = !1) {
      if (!e) {
        const { fb_user_id: e, fb_access_token: t } = await i["a"]([
          "fb_user_id",
          "fb_access_token",
        ]);
        if (t)
          try {
            const { id: t } = await s["b"]();
            if (t == e) return;
          } catch (a) {
            console.log(a);
          }
        const r = await d.tryGet();
        if (r) return;
      }
      let t = {};
      try {
        t = await m();
      } catch (a) {
        if ("please login facebook." != a.message) throw a;
        t = await b();
      }
      await i["c"](t);
      const r = await h();
      await i["c"]({ jazoest: r });
      const n = await y();
      await i["c"](n);
      const o = await A();
      await i["c"]({ fb_token_ig: o, fb_access_token: o }), await d.broadcast();
    }
    const c = "__sync_fb_unispy_token",
      u = "__get_fb_unispy_token",
      f = async () => {
        const {
          fb_dtsg: e,
          fb_user_id: t,
          fb_name: r,
          fb_avator: n,
          fb_rev: o,
          jazoest: s,
          fb_token_studio: a,
          fb_token_ads: c,
          fb_token_ig: u,
          fb_access_token: f,
        } = await i["a"]([
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
        return e
          ? JSON.stringify({
              fb_dtsg: e,
              fb_user_id: t,
              fb_name: r,
              fb_avator: n,
              fb_rev: o,
              jazoest: s,
              fb_token_studio: a,
              fb_token_ads: c,
              fb_token_ig: u,
              fb_access_token: f,
            })
          : "";
      },
      l = async (e) => {
        if (!e) return;
        const t = JSON.parse(e),
          {
            fb_dtsg: r,
            fb_user_id: n,
            fb_name: o,
            fb_avator: s,
            fb_rev: a,
            jazoest: c,
            fb_token_studio: u,
            fb_token_ads: f,
            fb_token_ig: l,
            fb_access_token: d,
          } = t;
        await i["c"]({
          fb_dtsg: r,
          fb_user_id: n,
          fb_name: o,
          fb_avator: s,
          fb_rev: a,
          jazoest: c,
          fb_token_studio: u,
          fb_token_ads: f,
          fb_token_ig: l,
          fb_access_token: d,
        });
      },
      d = {
        tryGet: async () => {
          const { appid_list: e } = await i["a"](["appid_list"]),
            t = e || [];
          for (const n of t)
            try {
              const e = await o.a.runtime.sendMessage(n, { [u]: !0 });
              if (e.token) return await l(e.token), !0;
            } catch (r) {
              console.log(r);
            }
          return !1;
        },
        broadcast: async () => {
          const e = await f();
          if (!e) return;
          const { appid_list: t } = await i["a"](["appid_list"]),
            r = t || [];
          for (const i of r)
            try {
              await o.a.runtime.sendMessage(i, { [c]: e });
            } catch (n) {
              console.log(n);
            }
        },
        listen: () => {
          o.a.runtime.onMessageExternal.addListener(async (e) => {
            const t = e[c],
              r = e[u];
            if (t) await l(t);
            else if (r) {
              const e = await f();
              return Promise.resolve({ token: e });
            }
          });
        },
      };
    function p(e, t) {
      const r = t.exec(e);
      return r && r.length > 1 ? r[1] : "";
    }
    const g = (e) =>
      e.replace(/\\u[\dA-F]{4}/gi, (e) =>
        String.fromCharCode(parseInt(e.replace(/\\u/g, ""), 16))
      );
    async function m() {
      const e = await v(
          "https://m.facebook.com/composer/ocelot/async_loader/?publisher=feed"
        ),
        t = e.match(/\{\\"dtsg\\":\{\\"token\\":\\"([^\\]+)/);
      if (!t) throw new Error("please login facebook.");
      const r = t[1];
      let n = e.match(/\\"NAME\\":\\"([^"]+)/);
      n = n[1].slice(0, -1).replace(/\\\\/g, "\\");
      const o = g(n);
      let i = e.match(/\\"ACCOUNT_ID\\":\\"([^"]+)/);
      i = i[1].slice(0, -1).replace(/\\\\/g, "\\");
      let s = e.match(/\\"USER_ID\\":\\"([^"]+)/);
      if (((s = s[1].slice(0, -1).replace(/\\\\/g, "\\")), s != i))
        throw new Error(
          "Please switch Facebook to user account. It doesn't support page account."
        );
      const a = e.match(/server_revision+\\":+(\d+)/)[1],
        c = `https://graph.facebook.com/${i}/picture?type=large&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`;
      return (
        console.log(
          "[fb_dtsg]",
          r,
          "[fb_user_id]",
          i,
          "[fb_name]",
          o,
          "[fb_rev]",
          a
        ),
        { fb_dtsg: r, fb_user_id: i, fb_name: o, fb_avator: c, fb_rev: a }
      );
    }
    async function b() {
      const e = await v("https://business.facebook.com/creatorstudio/home"),
        t = e.match(/DTSGInitData.*token":"(.*)","async_get_token/);
      if (!t) throw new Error("please login facebook.");
      const r = t[1];
      let n = e.match(/"NAME":"([^"]+)/);
      n = n[1].slice(0, -1).replace(/\\\\/g, "\\");
      const o = g(n);
      let i = e.match(/"ACCOUNT_ID":"(\d+)/);
      i = i[1];
      let s = e.match(/"USER_ID":"(\d+)/);
      if (((s = s[1]), s != i))
        throw new Error(
          "Please switch Facebook to user account. It doesn't support page account."
        );
      const a = e.match(/server_revision":(\d+)/)[1],
        c = `https://graph.facebook.com/${i}/picture?type=large&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`;
      return { fb_dtsg: r, fb_user_id: i, fb_name: o, fb_avator: c, fb_rev: a };
    }
    async function h() {
      const { fb_dtsg: e } = await i["a"]("fb_dtsg");
      let t = "";
      for (var r = 0; r < e.length; r++) t += e.charCodeAt(r);
      return (t = "2" + t), console.log("[jazoest]", t), t;
    }
    async function y() {
      const e = await v("https://business.facebook.com/creatorstudio/home"),
        t = p(e, /userAccessToken":"(\w+)"/g);
      return console.log("[token cs]", t), { fb_token_studio: t };
    }
    async function A() {
      const e = await v(
          "https://www.facebook.com/dialog/oauth?scope=user_about_me,user_actions.books,user_actions.fitness,user_actions.music,user_actions.news,user_actions.video,user_activities,user_birthday,user_education_history,user_events,user_friends,user_games_activity,user_groups,user_hometown,user_interests,user_likes,user_location,user_managed_groups,user_photos,user_posts,user_relationship_details,user_relationships,user_religion_politics,user_status,user_tagged_places,user_videos,user_website,user_work_history,email,manage_notifications,manage_pages,publish_actions,publish_pages,read_friendlists,read_insights,read_page_mailboxes,read_stream,rsvp_event,publish_to_groups, groups_access_member_info, read_mailbox&response_type=token&client_id=124024574287414&redirect_uri=fbconnect%3A%2F%2Fsuccess&sso_key=com&display="
        ),
        t = p(e, /\\"scope\\" value=\\"(.+?)\\/g),
        r = p(e, /\\"encrypted_post_body\\" value=\\"(.+?)\\/g);
      console.log("[scopex]", t, "[encrypted_post_body]", r);
      const { fb_dtsg: n, jazoest: o } = await i["a"](["fb_dtsg", "jazoest"]),
        s = await x(
          "https://www.facebook.com/v1.0/dialog/oauth/skip/submit/",
          `jazoest=${o}&fb_dtsg=${n}&from_post=1&__CONFIRM__=1&scope=${t}&display=page&sdk=&domain=&sso_device=ios&state=&user_code=&nonce=&auth_type=&auth_nonce=&nonce=&return_format%5B%5D=access_token&encrypted_post_body=${r}`
        ),
        a = p(s, /#(?:access_token)=([\S\s]*?)&/g);
      return console.log("[token ig]", a), a;
    }
    async function v(e, t = "text") {
      const r = await fetch(e, {
        method: "GET",
        mode: "cors",
        credentials: "include",
        headers: {
          referrer: "https://m.facebook.com",
          "sec-fetch-site": "none",
        },
      });
      return "json" === t ? await r.json() : await r.text();
    }
    async function x(e, t, r = "text") {
      const n = await fetch(e, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        },
        mode: "cors",
        credentials: "include",
        body: t,
      });
      return "json" === r ? await n.json() : await n.text();
    }
  },
  fe77: function (e, t, r) {
    "use strict";
    r.r(t);
    var n = r("7868"),
      o = r("2a36"),
      i = r("fdde");
    Object(n["b"])(n["a"].LOGIN, async function () {
      try {
        const e = await Object(o["b"])();
        Object(n["c"])(n["a"].RESP_LOGIN, { code: 1, res: e });
      } catch (e) {
        Object(n["c"])(n["a"].RESP_LOGIN, { code: -1, err: e });
      }
    }),
      i["b"].listen();
  },
});
