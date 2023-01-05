/* eslint-disable */
// @ts-nocheck
import { useEffect } from "react";

export default function ClockTimerSVG() {
  const loopInterval = 10000;
  const clockTimePerCicle = 5000;

  useEffect(() => {
    !(function (t, n) {
      "object" == typeof exports && "undefined" != typeof module
        ? (module.exports = n())
        : "function" == typeof define && define.amd
        ? define(n)
        : (((t =
            "undefined" != typeof globalThis
              ? globalThis
              : t || self).__SVGATOR_PLAYER__ = t.__SVGATOR_PLAYER__ || {}),
          (t.__SVGATOR_PLAYER__["5c7f360c"] = n()));
    })(this, function () {
      "use strict";
      function t(t, n) {
        const r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          let e = Object.getOwnPropertySymbols(t);
          n &&
            (e = e.filter(function (n) {
              return Object.getOwnPropertyDescriptor(t, n).enumerable;
            })),
            r.push.apply(r, e);
        }
        return r;
      }
      function n(n) {
        for (let r = 1; r < arguments.length; r++) {
          var e = null != arguments[r] ? arguments[r] : {};
          r % 2
            ? t(Object(e), !0).forEach(function (t) {
                u(n, t, e[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(e))
            : t(Object(e)).forEach(function (t) {
                Object.defineProperty(
                  n,
                  t,
                  Object.getOwnPropertyDescriptor(e, t)
                );
              });
        }
        return n;
      }
      function r(t) {
        return (r =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function e(t, n) {
        if (!(t instanceof n))
          throw new TypeError("Cannot call a class as a function");
      }
      function i(t, n) {
        for (let r = 0; r < n.length; r++) {
          const e = n[r];
          (e.enumerable = e.enumerable || !1),
            (e.configurable = !0),
            "value" in e && (e.writable = !0),
            Object.defineProperty(t, e.key, e);
        }
      }
      function o(t, n, r) {
        return n && i(t.prototype, n), r && i(t, r), t;
      }
      function u(t, n, r) {
        return (
          n in t
            ? Object.defineProperty(t, n, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[n] = r),
          t
        );
      }
      function a(t) {
        return (a = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      function l(t, n) {
        return (l =
          Object.setPrototypeOf ||
          function (t, n) {
            return (t.__proto__ = n), t;
          })(t, n);
      }
      function f() {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
          return (
            Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {})
            ),
            !0
          );
        } catch (t) {
          return !1;
        }
      }
      function s(t, n, r) {
        return (s = f()
          ? Reflect.construct
          : function (t, n, r) {
              const e = [null];
              e.push.apply(e, n);
              const i = new (Function.bind.apply(t, e))();
              return r && l(i, r.prototype), i;
            }).apply(null, arguments);
      }
      function c(t, n) {
        if (n && ("object" == typeof n || "function" == typeof n)) return n;
        if (void 0 !== n)
          throw new TypeError(
            "Derived constructors may only return object or undefined"
          );
        return (function (t) {
          if (void 0 === t)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return t;
        })(t);
      }
      function h(t, n, r) {
        return (h =
          "undefined" != typeof Reflect && Reflect.get
            ? Reflect.get
            : function (t, n, r) {
                const e = (function (t, n) {
                  for (
                    ;
                    !Object.prototype.hasOwnProperty.call(t, n) &&
                    null !== (t = a(t));

                  );
                  return t;
                })(t, n);
                if (e) {
                  const i = Object.getOwnPropertyDescriptor(e, n);
                  return i.get ? i.get.call(r) : i.value;
                }
              })(t, n, r || t);
      }
      function v(t) {
        return (
          (function (t) {
            if (Array.isArray(t)) return y(t);
          })(t) ||
          (function (t) {
            if (
              ("undefined" != typeof Symbol && null != t[Symbol.iterator]) ||
              null != t["@@iterator"]
            )
              return Array.from(t);
          })(t) ||
          (function (t, n) {
            if (!t) return;
            if ("string" == typeof t) return y(t, n);
            let r = Object.prototype.toString.call(t).slice(8, -1);
            "Object" === r && t.constructor && (r = t.constructor.name);
            if ("Map" === r || "Set" === r) return Array.from(t);
            if (
              "Arguments" === r ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
            )
              return y(t, n);
          })(t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function y(t, n) {
        (null == n || n > t.length) && (n = t.length);
        for (var r = 0, e = new Array(n); r < n; r++) e[r] = t[r];
        return e;
      }
      Number.isInteger ||
        (Number.isInteger = function (t) {
          return "number" == typeof t && isFinite(t) && Math.floor(t) === t;
        }),
        Number.EPSILON || (Number.EPSILON = 2220446049250313e-31);
      const g = p(Math.pow(10, -6));
      function p(t) {
        const n =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 6;
        if (Number.isInteger(t)) return t;
        const r = Math.pow(10, n);
        return Math.round((+t + Number.EPSILON) * r) / r;
      }
      function d(t, n) {
        const r =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : g;
        return Math.abs(t - n) < r;
      }
      const m = Math.PI / 180;
      function b(t) {
        return t;
      }
      function w(t, n, r) {
        const e = 1 - r;
        return 3 * r * e * (t * e + n * r) + r * r * r;
      }
      function x() {
        const t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          n =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          r =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          e =
            arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
        return t < 0 || t > 1 || r < 0 || r > 1
          ? null
          : d(t, n) && d(r, e)
          ? b
          : function (i) {
              if (i <= 0)
                return t > 0 ? (i * n) / t : 0 === n && r > 0 ? (i * e) / r : 0;
              if (i >= 1)
                return r < 1
                  ? 1 + ((i - 1) * (e - 1)) / (r - 1)
                  : 1 === r && t < 1
                  ? 1 + ((i - 1) * (n - 1)) / (t - 1)
                  : 1;
              for (var o, u = 0, a = 1; u < a; ) {
                const l = w(t, r, (o = (u + a) / 2));
                if (d(i, l)) break;
                l < i ? (u = o) : (a = o);
              }
              return w(n, e, o);
            };
      }
      function A() {
        return 1;
      }
      function k(t) {
        return 1 === t ? 1 : 0;
      }
      function _() {
        const t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          n =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (1 === t) {
          if (0 === n) return k;
          if (1 === n) return A;
        }
        const r = 1 / t;
        return function (t) {
          return t >= 1 ? 1 : (t += n * r) - (t % r);
        };
      }
      const S = Math.sin,
        O = Math.cos,
        j = Math.acos,
        M = Math.asin,
        P = Math.tan,
        E = Math.atan2,
        I = Math.PI / 180,
        R = 180 / Math.PI,
        F = Math.sqrt,
        N = (function () {
          function t() {
            const n =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : 1,
              r =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : 0,
              i =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : 0,
              o =
                arguments.length > 3 && void 0 !== arguments[3]
                  ? arguments[3]
                  : 1,
              u =
                arguments.length > 4 && void 0 !== arguments[4]
                  ? arguments[4]
                  : 0,
              a =
                arguments.length > 5 && void 0 !== arguments[5]
                  ? arguments[5]
                  : 0;
            e(this, t),
              (this.m = [n, r, i, o, u, a]),
              (this.i = null),
              (this.w = null),
              (this.s = null);
          }
          return (
            o(
              t,
              [
                {
                  key: "determinant",
                  get: function () {
                    const t = this.m;
                    return t[0] * t[3] - t[1] * t[2];
                  },
                },
                {
                  key: "isIdentity",
                  get: function () {
                    if (null === this.i) {
                      const t = this.m;
                      this.i =
                        1 === t[0] &&
                        0 === t[1] &&
                        0 === t[2] &&
                        1 === t[3] &&
                        0 === t[4] &&
                        0 === t[5];
                    }
                    return this.i;
                  },
                },
                {
                  key: "point",
                  value: function (t, n) {
                    const r = this.m;
                    return {
                      x: r[0] * t + r[2] * n + r[4],
                      y: r[1] * t + r[3] * n + r[5],
                    };
                  },
                },
                {
                  key: "translateSelf",
                  value: function () {
                    const t =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : 0,
                      n =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : 0;
                    if (!t && !n) return this;
                    const r = this.m;
                    return (
                      (r[4] += r[0] * t + r[2] * n),
                      (r[5] += r[1] * t + r[3] * n),
                      (this.w = this.s = this.i = null),
                      this
                    );
                  },
                },
                {
                  key: "rotateSelf",
                  value: function () {
                    let t =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : 0;
                    if ((t %= 360)) {
                      const n = S((t *= I)),
                        r = O(t),
                        e = this.m,
                        i = e[0],
                        o = e[1];
                      (e[0] = i * r + e[2] * n),
                        (e[1] = o * r + e[3] * n),
                        (e[2] = e[2] * r - i * n),
                        (e[3] = e[3] * r - o * n),
                        (this.w = this.s = this.i = null);
                    }
                    return this;
                  },
                },
                {
                  key: "scaleSelf",
                  value: function () {
                    const t =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : 1,
                      n =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : 1;
                    if (1 !== t || 1 !== n) {
                      const r = this.m;
                      (r[0] *= t),
                        (r[1] *= t),
                        (r[2] *= n),
                        (r[3] *= n),
                        (this.w = this.s = this.i = null);
                    }
                    return this;
                  },
                },
                {
                  key: "skewSelf",
                  value: function (t, n) {
                    if (((n %= 360), (t %= 360) || n)) {
                      const r = this.m,
                        e = r[0],
                        i = r[1],
                        o = r[2],
                        u = r[3];
                      t && ((t = P(t * I)), (r[2] += e * t), (r[3] += i * t)),
                        n && ((n = P(n * I)), (r[0] += o * n), (r[1] += u * n)),
                        (this.w = this.s = this.i = null);
                    }
                    return this;
                  },
                },
                {
                  key: "resetSelf",
                  value: function () {
                    const t =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : 1,
                      n =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : 0,
                      r =
                        arguments.length > 2 && void 0 !== arguments[2]
                          ? arguments[2]
                          : 0,
                      e =
                        arguments.length > 3 && void 0 !== arguments[3]
                          ? arguments[3]
                          : 1,
                      i =
                        arguments.length > 4 && void 0 !== arguments[4]
                          ? arguments[4]
                          : 0,
                      o =
                        arguments.length > 5 && void 0 !== arguments[5]
                          ? arguments[5]
                          : 0,
                      u = this.m;
                    return (
                      (u[0] = t),
                      (u[1] = n),
                      (u[2] = r),
                      (u[3] = e),
                      (u[4] = i),
                      (u[5] = o),
                      (this.w = this.s = this.i = null),
                      this
                    );
                  },
                },
                {
                  key: "recomposeSelf",
                  value: function () {
                    const t =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : null,
                      n =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : null,
                      r =
                        arguments.length > 2 && void 0 !== arguments[2]
                          ? arguments[2]
                          : null,
                      e =
                        arguments.length > 3 && void 0 !== arguments[3]
                          ? arguments[3]
                          : null,
                      i =
                        arguments.length > 4 && void 0 !== arguments[4]
                          ? arguments[4]
                          : null;
                    return (
                      this.isIdentity || this.resetSelf(),
                      t && (t.x || t.y) && this.translateSelf(t.x, t.y),
                      n && this.rotateSelf(n),
                      r &&
                        (r.x && this.skewSelf(r.x, 0),
                        r.y && this.skewSelf(0, r.y)),
                      !e ||
                        (1 === e.x && 1 === e.y) ||
                        this.scaleSelf(e.x, e.y),
                      i && (i.x || i.y) && this.translateSelf(i.x, i.y),
                      this
                    );
                  },
                },
                {
                  key: "decompose",
                  value: function () {
                    let t =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : 0,
                      n =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : 0,
                      r = this.m,
                      e = r[0] * r[0] + r[1] * r[1],
                      i = [
                        [r[0], r[1]],
                        [r[2], r[3]],
                      ],
                      o = F(e);
                    if (0 === o)
                      return {
                        origin: { x: p(r[4]), y: p(r[5]) },
                        translate: { x: p(t), y: p(n) },
                        scale: { x: 0, y: 0 },
                        skew: { x: 0, y: 0 },
                        rotate: 0,
                      };
                    (i[0][0] /= o), (i[0][1] /= o);
                    const u = r[0] * r[3] - r[1] * r[2] < 0;
                    u && (o = -o);
                    let a = i[0][0] * i[1][0] + i[0][1] * i[1][1];
                    (i[1][0] -= i[0][0] * a), (i[1][1] -= i[0][1] * a);
                    const l = F(i[1][0] * i[1][0] + i[1][1] * i[1][1]);
                    if (0 === l)
                      return {
                        origin: { x: p(r[4]), y: p(r[5]) },
                        translate: { x: p(t), y: p(n) },
                        scale: { x: p(o), y: 0 },
                        skew: { x: 0, y: 0 },
                        rotate: 0,
                      };
                    (i[1][0] /= l), (i[1][1] /= l), (a /= l);
                    let f = 0;
                    return (
                      i[1][1] < 0
                        ? ((f = j(i[1][1]) * R), i[0][1] < 0 && (f = 360 - f))
                        : (f = M(i[0][1]) * R),
                      u && (f = -f),
                      (a = E(a, F(i[0][0] * i[0][0] + i[0][1] * i[0][1])) * R),
                      u && (a = -a),
                      {
                        origin: { x: p(r[4]), y: p(r[5]) },
                        translate: { x: p(t), y: p(n) },
                        scale: { x: p(o), y: p(l) },
                        skew: { x: p(a), y: 0 },
                        rotate: p(f),
                      }
                    );
                  },
                },
                {
                  key: "clone",
                  value: function () {
                    const t = this.m;
                    return new this.constructor(
                      t[0],
                      t[1],
                      t[2],
                      t[3],
                      t[4],
                      t[5]
                    );
                  },
                },
                {
                  key: "toString",
                  value: function () {
                    const t =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : " ";
                    if (null === this.s) {
                      const n = this.m.map(function (t) {
                        return p(t);
                      });
                      1 === n[0] && 0 === n[1] && 0 === n[2] && 1 === n[3]
                        ? (this.s = "translate(" + n[4] + t + n[5] + ")")
                        : (this.s = "matrix(" + n.join(t) + ")");
                    }
                    return this.s;
                  },
                },
              ],
              [
                {
                  key: "create",
                  value: function (t) {
                    return t
                      ? Array.isArray(t)
                        ? s(this, v(t))
                        : t instanceof this
                        ? t.clone()
                        : new this().recomposeSelf(
                            t.origin,
                            t.rotate,
                            t.skew,
                            t.scale,
                            t.translate
                          )
                      : new this();
                  },
                },
              ]
            ),
            t
          );
        })();
      function T(t, n, r) {
        return t >= 0.5 ? r : n;
      }
      function q(t, n, r) {
        return 0 === t || n === r ? n : t * (r - n) + n;
      }
      function B(t, n, r) {
        const e = q(t, n, r);
        return e <= 0 ? 0 : e;
      }
      function L(t, n, r) {
        const e = q(t, n, r);
        return e <= 0 ? 0 : e >= 1 ? 1 : e;
      }
      function C(t, n, r) {
        return 0 === t
          ? n
          : 1 === t
          ? r
          : { x: q(t, n.x, r.x), y: q(t, n.y, r.y) };
      }
      function D(t, n, r) {
        const e = (function (t, n, r) {
          return Math.round(q(t, n, r));
        })(t, n, r);
        return e <= 0 ? 0 : e >= 255 ? 255 : e;
      }
      function z(t, n, r) {
        return 0 === t
          ? n
          : 1 === t
          ? r
          : {
              r: D(t, n.r, r.r),
              g: D(t, n.g, r.g),
              b: D(t, n.b, r.b),
              a: q(t, null == n.a ? 1 : n.a, null == r.a ? 1 : r.a),
            };
      }
      function V(t, n) {
        for (var r = [], e = 0; e < t; e++) r.push(n);
        return r;
      }
      function G(t, n) {
        if (--n <= 0) return t;
        const r = (t = Object.assign([], t)).length;
        do {
          for (let e = 0; e < r; e++) t.push(t[e]);
        } while (--n > 0);
        return t;
      }
      let Y,
        $ = (function () {
          function t(n) {
            e(this, t), (this.list = n), (this.length = n.length);
          }
          return (
            o(t, [
              {
                key: "setAttribute",
                value: function (t, n) {
                  for (let r = this.list, e = 0; e < this.length; e++)
                    r[e].setAttribute(t, n);
                },
              },
              {
                key: "removeAttribute",
                value: function (t) {
                  for (let n = this.list, r = 0; r < this.length; r++)
                    n[r].removeAttribute(t);
                },
              },
              {
                key: "style",
                value: function (t, n) {
                  for (let r = this.list, e = 0; e < this.length; e++)
                    r[e].style[t] = n;
                },
              },
            ]),
            t
          );
        })(),
        U = /-./g,
        Q = function (t, n) {
          return n.toUpperCase();
        };
      function H(t) {
        return "function" == typeof t ? t : T;
      }
      function J(t) {
        return t
          ? "function" == typeof t
            ? t
            : Array.isArray(t)
            ? (function (t) {
                const n =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : b;
                if (!Array.isArray(t)) return n;
                switch (t.length) {
                  case 1:
                    return _(t[0]) || n;
                  case 2:
                    return _(t[0], t[1]) || n;
                  case 4:
                    return x(t[0], t[1], t[2], t[3]) || n;
                }
                return n;
              })(t, null)
            : (function (t, n) {
                const r =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : b;
                switch (t) {
                  case "linear":
                    return b;
                  case "steps":
                    return _(n.steps || 1, n.jump || 0) || r;
                  case "bezier":
                  case "cubic-bezier":
                    return x(n.x1 || 0, n.y1 || 0, n.x2 || 0, n.y2 || 0) || r;
                }
                return r;
              })(t.type, t.value, null)
          : null;
      }
      function Z(t, n, r) {
        const e =
            arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          i = n.length - 1;
        if (t <= n[0].t) return e ? [0, 0, n[0].v] : n[0].v;
        if (t >= n[i].t) return e ? [i, 1, n[i].v] : n[i].v;
        let o,
          u = n[0],
          a = null;
        for (o = 1; o <= i; o++) {
          if (!(t > n[o].t)) {
            a = n[o];
            break;
          }
          u = n[o];
        }
        return null == a
          ? e
            ? [i, 1, n[i].v]
            : n[i].v
          : u.t === a.t
          ? e
            ? [o, 1, a.v]
            : a.v
          : ((t = (t - u.t) / (a.t - u.t)),
            u.e && (t = u.e(t)),
            e ? [o, t, r(t, u.v, a.v)] : r(t, u.v, a.v));
      }
      function K(t, n) {
        let r =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        return t && t.length
          ? "function" != typeof n
            ? null
            : ("function" != typeof r && (r = null),
              function (e) {
                let i = Z(e, t, n);
                return null != i && r && (i = r(i)), i;
              })
          : null;
      }
      function W(t, n) {
        return t.t - n.t;
      }
      function X(t, n, e, i, o) {
        let u,
          a = "@" === e[0],
          l = "#" === e[0],
          f = Y[e],
          s = T;
        switch (
          (a
            ? ((u = e.substr(1)), (e = u.replace(U, Q)))
            : l && (e = e.substr(1)),
          r(f))
        ) {
          case "function":
            if (((s = f(i, o, Z, J, e, a, n, t)), l)) return s;
            break;
          case "string":
            s = K(i, H(f));
            break;
          case "object":
            if ((s = K(i, H(f.i), f.f)) && "function" == typeof f.u)
              return f.u(n, s, e, a, t);
        }
        return s
          ? (function (t, n, r) {
              if (
                arguments.length > 3 &&
                void 0 !== arguments[3] &&
                arguments[3]
              )
                return t instanceof $
                  ? function (e) {
                      return t.style(n, r(e));
                    }
                  : function (e) {
                      return (t.style[n] = r(e));
                    };
              if (Array.isArray(n)) {
                const e = n.length;
                return function (i) {
                  const o = r(i);
                  if (null == o)
                    for (let u = 0; u < e; u++) t[u].removeAttribute(n);
                  else for (let a = 0; a < e; a++) t[a].setAttribute(n, o);
                };
              }
              return function (e) {
                const i = r(e);
                null == i ? t.removeAttribute(n) : t.setAttribute(n, i);
              };
            })(n, e, s, a)
          : null;
      }
      function tt(t, n, e, i) {
        if (!i || "object" !== r(i)) return null;
        let o = null,
          u = null;
        return (
          Array.isArray(i)
            ? (u = (function (t) {
                if (!t || !t.length) return null;
                for (let n = 0; n < t.length; n++)
                  t[n].e && (t[n].e = J(t[n].e));
                return t.sort(W);
              })(i))
            : ((u = i.keys), (o = i.data || null)),
          u ? X(t, n, e, u, o) : null
        );
      }
      function nt(t, n, r) {
        if (!r) return null;
        const e = [];
        for (const i in r)
          if (r.hasOwnProperty(i)) {
            const o = tt(t, n, i, r[i]);
            o && e.push(o);
          }
        return e.length ? e : null;
      }
      function rt(t, n) {
        if (!n.duration || n.duration < 0) return null;
        const r = (function (t, n) {
          if (!n) return null;
          let r = [];
          if (Array.isArray(n))
            for (let e = n.length, i = 0; i < e; i++) {
              const o = n[i];
              if (2 === o.length) {
                let u = null;
                if ("string" == typeof o[0]) u = t.getElementById(o[0]);
                else if (Array.isArray(o[0])) {
                  u = [];
                  for (let a = 0; a < o[0].length; a++)
                    if ("string" == typeof o[0][a]) {
                      const l = t.getElementById(o[0][a]);
                      l && u.push(l);
                    }
                  u = u.length ? (1 === u.length ? u[0] : new $(u)) : null;
                }
                if (u) {
                  const f = nt(t, u, o[1]);
                  f && (r = r.concat(f));
                }
              }
            }
          else
            for (const s in n)
              if (n.hasOwnProperty(s)) {
                const c = t.getElementById(s);
                if (c) {
                  const h = nt(t, c, n[s]);
                  h && (r = r.concat(h));
                }
              }
          return r.length ? r : null;
        })(t, n.elements);
        return r
          ? (function (t, n) {
              let r =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : 1 / 0,
                e =
                  arguments.length > 3 && void 0 !== arguments[3]
                    ? arguments[3]
                    : 1,
                i =
                  arguments.length > 4 &&
                  void 0 !== arguments[4] &&
                  arguments[4],
                o =
                  arguments.length > 5 && void 0 !== arguments[5]
                    ? arguments[5]
                    : 1,
                u = t.length,
                a = e > 0 ? n : 0;
              i && r % 2 == 0 && (a = n - a);
              let l = null;
              return function (f, s) {
                let c = f % n,
                  h = 1 + (f - c) / n;
                (s *= e), i && h % 2 == 0 && (s = -s);
                let v = !1;
                if (h > r) (c = a), (v = !0), -1 === o && (c = e > 0 ? 0 : n);
                else if ((s < 0 && (c = n - c), c === l)) return !1;
                l = c;
                for (let y = 0; y < u; y++) t[y](c);
                return v;
              };
            })(
              r,
              loopInterval,
              1 / 0,
              n.direction || 1,
              !!n.alternate,
              n.fill || 1
            )
          : null;
      }
      function et(t) {
        return +("0x" + (t.replace(/[^0-9a-fA-F]+/g, "") || 27));
      }
      function it(t, n, r) {
        return !t || !r || n > t.length
          ? t
          : t.substring(0, n) + it(t.substring(n + 1), r, r);
      }
      function ot(t) {
        const n =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 27;
        return !t || t % n ? t % n : ot(t / n, n);
      }
      function ut(t, n, r) {
        if (t && t.length) {
          let e = et(r),
            i = et(n),
            o = ot(e) + 5,
            u = it(t, ot(e, 5), o);
          return (
            (u = u.replace(/\x7c$/g, "==").replace(/\x2f$/g, "=")),
            (u = (function (t, n, r) {
              const e = +("0x" + t.substring(0, 4));
              t = t.substring(4);
              for (
                var i = (n % e) + (r % 27), o = [], u = 0;
                u < t.length;
                u += 2
              )
                if ("|" !== t[u]) {
                  const a = +("0x" + t[u] + t[u + 1]) - i;
                  o.push(a);
                } else {
                  const l = +("0x" + t.substring(u + 1, u + 1 + 4)) - i;
                  (u += 3), o.push(l);
                }
              return String.fromCharCode.apply(String, o);
            })((u = (u = atob(u)).replace(/[\x41-\x5A]/g, "")), i, e)),
            (u = JSON.parse(u))
          );
        }
      }
      const at = (function () {
        function t(n, r) {
          const i =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          e(this, t),
            (this._id = 0),
            (this._running = !1),
            (this._rollingBack = !1),
            (this._animations = n),
            (this.duration = r.duration),
            (this.alternate = r.alternate),
            (this.fill = r.fill),
            (this.iterations = r.iterations),
            (this.direction = i.direction || 1),
            (this.speed = i.speed || 1),
            (this.fps = i.fps || 100),
            (this.offset = i.offset || 0),
            (this.rollbackStartOffset = 0);
        }
        return (
          o(
            t,
            [
              {
                key: "maxFiniteDuration",
                get: function () {
                  return this.iterations > 0
                    ? this.iterations * this.duration
                    : this.duration;
                },
              },
              {
                key: "_apply",
                value: function (t) {
                  for (
                    var n =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : {},
                      r = this._animations,
                      e = r.length,
                      i = 0,
                      o = 0;
                    o < e;
                    o++
                  )
                    n[o]
                      ? i++
                      : ((n[o] = r[o](t, this.direction)), n[o] && i++);
                  return i;
                },
              },
              {
                key: "_rollback",
                value: function () {
                  let t = this,
                    n = 1 / 0,
                    r = null;
                  (this.rollbackStartOffset = this.offset),
                    (this._rollingBack = !0),
                    (this._running = !0);
                  this._id = window.requestAnimationFrame(function e(i) {
                    if (t._rollingBack) {
                      null == r && (r = i);
                      let o = i - r,
                        u = t.rollbackStartOffset - o,
                        a = Math.round(u * t.speed);
                      if (a > t.duration && n !== 1 / 0) {
                        let l = !!t.alternate && (a / t.duration) % 2 > 1,
                          f = a % t.duration;
                        a = (f += l ? t.duration : 0) || t.duration;
                      }
                      const s = t.fps ? 1e3 / t.fps : 0,
                        c = Math.max(0, a);
                      c < n - s && ((t.offset = c), (n = c), t._apply(c));
                      const h =
                        t.iterations > 0 &&
                        -1 === t.fill &&
                        a >= t.maxFiniteDuration;
                      (a <= 0 || t.offset < a || h) && t.stop(),
                        (t._id = window.requestAnimationFrame(e));
                    }
                  });
                },
              },
              {
                key: "_start",
                value: function () {
                  let t = this,
                    n =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : 0,
                    r = -1 / 0,
                    e = null,
                    i = {};
                  this._running = !0;
                  const o = function o(u) {
                    null == e && (e = u);
                    const a = Math.round((u - e + n) * t.speed),
                      l = t.fps ? 1e3 / t.fps : 0;
                    if (
                      a > r + l &&
                      !t._rollingBack &&
                      ((t.offset = a),
                      (r = a),
                      t._apply(a, i) === t._animations.length)
                    )
                      return void t.pause(!0);
                    t._id = window.requestAnimationFrame(o);
                  };
                  this._id = window.requestAnimationFrame(o);
                },
              },
              {
                key: "_pause",
                value: function () {
                  this._id && window.cancelAnimationFrame(this._id),
                    (this._running = !1);
                },
              },
              {
                key: "play",
                value: function () {
                  if (!this._running)
                    return this._rollingBack
                      ? this._rollback()
                      : this._start(this.offset);
                },
              },
              {
                key: "stop",
                value: function () {
                  this._pause(),
                    (this.offset = 0),
                    (this.rollbackStartOffset = 0),
                    (this._rollingBack = !1),
                    this._apply(0);
                },
              },
              {
                key: "reachedToEnd",
                value: function () {
                  return (
                    this.iterations > 0 &&
                    this.offset >= this.iterations * this.duration
                  );
                },
              },
              {
                key: "restart",
                value: function () {
                  const t =
                    arguments.length > 0 &&
                    void 0 !== arguments[0] &&
                    arguments[0];
                  this.stop(t), this.play(t);
                },
              },
              {
                key: "pause",
                value: function () {
                  this._pause();
                },
              },
              {
                key: "reverse",
                value: function () {
                  this.direction = -this.direction;
                },
              },
            ],
            [
              {
                key: "build",
                value: function (t, r) {
                  return (
                    delete t.animationSettings,
                    (t.options = ut(t.options, t.root, "5c7f360c")),
                    t.animations.map(function (r) {
                      const e = ut(r.s, t.root, "5c7f360c");
                      for (const i in (delete r.s,
                      t.animationSettings || (t.animationSettings = n({}, e)),
                      e))
                        e.hasOwnProperty(i) && (r[i] = e[i]);
                    }),
                    (t = (function (t, n) {
                      if (
                        ((Y = n), !t || !t.root || !Array.isArray(t.animations))
                      )
                        return null;
                      for (
                        var r = document.getElementsByTagName("svg"),
                          e = !1,
                          i = 0;
                        i < r.length;
                        i++
                      )
                        if (r[i].id === t.root && !r[i].svgatorAnimation) {
                          (e = r[i]).svgatorAnimation = !0;
                          break;
                        }
                      if (!e) return null;
                      const o = t.animations
                        .map(function (t) {
                          return rt(e, t);
                        })
                        .filter(function (t) {
                          return !!t;
                        });
                      return o.length
                        ? {
                            element: e,
                            animations: o,
                            animationSettings: t.animationSettings,
                            options: t.options || void 0,
                          }
                        : null;
                    })(t, r))
                      ? {
                          el: t.element,
                          options: t.options || {},
                          player: new this(
                            t.animations,
                            t.animationSettings,
                            t.options
                          ),
                        }
                      : null
                  );
                },
              },
              {
                key: "push",
                value: function (t) {
                  return this.build(t);
                },
              },
              {
                key: "init",
                value: function () {
                  const t = this,
                    n =
                      window.__SVGATOR_PLAYER__ &&
                      window.__SVGATOR_PLAYER__["5c7f360c"];
                  Array.isArray(n) &&
                    n.splice(0).forEach(function (n) {
                      return t.build(n);
                    });
                },
              },
            ]
          ),
          t
        );
      })();
      function lt(t) {
        return p(t) + "";
      }
      function ft(t) {
        const n =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : " ";
        return t && t.length ? t.map(lt).join(n) : "";
      }
      function st(t) {
        if (!t) return "transparent";
        if (null == t.a || t.a >= 1) {
          let n = function (t) {
              return 1 === (t = parseInt(t).toString(16)).length ? "0" + t : t;
            },
            r = function (t) {
              return t.charAt(0) === t.charAt(1);
            },
            e = n(t.r),
            i = n(t.g),
            o = n(t.b);
          return (
            r(e) &&
              r(i) &&
              r(o) &&
              ((e = e.charAt(0)), (i = i.charAt(0)), (o = o.charAt(0))),
            "#" + e + i + o
          );
        }
        return "rgba(" + t.r + "," + t.g + "," + t.b + "," + t.a + ")";
      }
      function ct(t) {
        return t ? "url(#" + t + ")" : "none";
      }
      !(function () {
        for (
          var t = 0, n = ["ms", "moz", "webkit", "o"], r = 0;
          r < n.length && !window.requestAnimationFrame;
          ++r
        )
          (window.requestAnimationFrame =
            window[n[r] + "RequestAnimationFrame"]),
            (window.cancelAnimationFrame =
              window[n[r] + "CancelAnimationFrame"] ||
              window[n[r] + "CancelRequestAnimationFrame"]);
        window.requestAnimationFrame ||
          ((window.requestAnimationFrame = function (n) {
            const r = Date.now(),
              e = Math.max(0, 16 - (r - t)),
              i = window.setTimeout(function () {
                n(r + e);
              }, e);
            return (t = r + e), i;
          }),
          (window.cancelAnimationFrame = window.clearTimeout));
      })();
      const ht = {
          f: null,
          i: function (t, n, r) {
            return 0 === t
              ? n
              : 1 === t
              ? r
              : { x: B(t, n.x, r.x), y: B(t, n.y, r.y) };
          },
          u: function (t, n) {
            return function (r) {
              const e = n(r);
              t.setAttribute("rx", lt(e.x)), t.setAttribute("ry", lt(e.y));
            };
          },
        },
        vt = {
          f: null,
          i: function (t, n, r) {
            return 0 === t
              ? n
              : 1 === t
              ? r
              : {
                  width: B(t, n.width, r.width),
                  height: B(t, n.height, r.height),
                };
          },
          u: function (t, n) {
            return function (r) {
              const e = n(r);
              t.setAttribute("width", lt(e.width)),
                t.setAttribute("height", lt(e.height));
            };
          },
        };
      Object.freeze({
        M: 2,
        L: 2,
        Z: 0,
        H: 1,
        V: 1,
        C: 6,
        Q: 4,
        T: 2,
        S: 4,
        A: 7,
      });
      let yt = {},
        gt = null;
      function pt(t) {
        const n = (function () {
          if (gt) return gt;
          if (
            "object" !==
              ("undefined" == typeof document ? "undefined" : r(document)) ||
            !document.createElementNS
          )
            return {};
          const t = document.createElementNS(
            "http://www.w3.org/2000/svg",
            "svg"
          );
          return t && t.style
            ? ((t.style.position = "absolute"),
              (t.style.opacity = "0.01"),
              (t.style.zIndex = "-9999"),
              (t.style.left = "-9999px"),
              (t.style.width = "1px"),
              (t.style.height = "1px"),
              (gt = { svg: t }))
            : {};
        })().svg;
        if (!n)
          return function (t) {
            return null;
          };
        const e = document.createElementNS(n.namespaceURI, "path");
        e.setAttributeNS(null, "d", t),
          e.setAttributeNS(null, "fill", "none"),
          e.setAttributeNS(null, "stroke", "none"),
          n.appendChild(e);
        const i = e.getTotalLength();
        return function (t) {
          const n = e.getPointAtLength(i * t);
          return { x: n.x, y: n.y };
        };
      }
      function dt(t) {
        return yt[t] ? yt[t] : (yt[t] = pt(t));
      }
      function mt(t, n, r, e) {
        if (!t || !e) return !1;
        const i = ["M", t.x, t.y];
        if (
          (n &&
            r &&
            (i.push("C"), i.push(n.x), i.push(n.y), i.push(r.x), i.push(r.y)),
          n ? !r : r)
        ) {
          const o = n || r;
          i.push("Q"), i.push(o.x), i.push(o.y);
        }
        return n || r || i.push("L"), i.push(e.x), i.push(e.y), i.join(" ");
      }
      function bt(t, n, r, e) {
        const i =
            arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
          o = mt(t, n, r, e),
          u = dt(o);
        try {
          return u(i);
        } catch (t) {
          return null;
        }
      }
      function wt(t, n, r) {
        return t + (n - t) * r;
      }
      function xt(t, n, r) {
        const e =
            arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          i = { x: wt(t.x, n.x, r), y: wt(t.y, n.y, r) };
        return e && (i.a = At(t, n)), i;
      }
      function At(t, n) {
        return Math.atan2(n.y - t.y, n.x - t.x);
      }
      function kt(t, n, r, e) {
        const i = 1 - e;
        return i * i * t + 2 * i * e * n + e * e * r;
      }
      function _t(t, n, r, e) {
        return 2 * (1 - e) * (n - t) + 2 * e * (r - n);
      }
      function St(t, n, r, e) {
        let i = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          o = bt(t, n, null, r, e);
        return (
          o || (o = { x: kt(t.x, n.x, r.x, e), y: kt(t.y, n.y, r.y, e) }),
          i && (o.a = Ot(t, n, r, e)),
          o
        );
      }
      function Ot(t, n, r, e) {
        return Math.atan2(_t(t.y, n.y, r.y, e), _t(t.x, n.x, r.x, e));
      }
      function jt(t, n, r, e, i) {
        const o = i * i;
        return (
          i * o * (e - t + 3 * (n - r)) +
          3 * o * (t + r - 2 * n) +
          3 * i * (n - t) +
          t
        );
      }
      function Mt(t, n, r, e, i) {
        const o = 1 - i;
        return 3 * (o * o * (n - t) + 2 * o * i * (r - n) + i * i * (e - r));
      }
      function Pt(t, n, r, e, i) {
        let o = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          u = bt(t, n, r, e, i);
        return (
          u ||
            (u = {
              x: jt(t.x, n.x, r.x, e.x, i),
              y: jt(t.y, n.y, r.y, e.y, i),
            }),
          o && (u.a = Et(t, n, r, e, i)),
          u
        );
      }
      function Et(t, n, r, e, i) {
        return Math.atan2(Mt(t.y, n.y, r.y, e.y, i), Mt(t.x, n.x, r.x, e.x, i));
      }
      function It(t, n, r) {
        const e =
          arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (Ft(n)) {
          if (Nt(r)) return St(n, r.start, r, t, e);
        } else if (Ft(r)) {
          if (n.end) return St(n, n.end, r, t, e);
        } else {
          if (n.end)
            return r.start
              ? Pt(n, n.end, r.start, r, t, e)
              : St(n, n.end, r, t, e);
          if (r.start) return St(n, r.start, r, t, e);
        }
        return xt(n, r, t, e);
      }
      function Rt(t, n, r) {
        const e = It(t, n, r, !0);
        return (
          (e.a =
            (function (t) {
              return arguments.length > 1 &&
                void 0 !== arguments[1] &&
                arguments[1]
                ? t + Math.PI
                : t;
            })(e.a) / m),
          e
        );
      }
      function Ft(t) {
        return !t.type || "corner" === t.type;
      }
      function Nt(t) {
        return null != t.start && !Ft(t);
      }
      const Tt = new N();
      const qt = { f: lt, i: q },
        Bt = { f: lt, i: L };
      function Lt(t, n, r) {
        return t.map(function (t) {
          return (function (t, n, r) {
            const e = t.v;
            if (!e || "g" !== e.t || e.s || !e.v || !e.r) return t;
            const i = r.getElementById(e.r),
              o = (i && i.querySelectorAll("stop")) || [];
            return (
              (e.s = e.v.map(function (t, n) {
                let r = o[n] && o[n].getAttribute("offset");
                return { c: t, o: (r = p(parseInt(r) / 100)) };
              })),
              delete e.v,
              t
            );
          })(t, 0, r);
        });
      }
      const Ct = {
        gt: "gradientTransform",
        c: { x: "cx", y: "cy" },
        rd: "r",
        f: { x: "x1", y: "y1" },
        to: { x: "x2", y: "y2" },
      };
      function Dt(t, n, e, i, o, u, a, l) {
        return (
          Lt(t, 0, l),
          (n = (function (t, n, r) {
            for (var e, i, o, u = t.length - 1, a = {}, l = 0; l <= u; l++)
              (e = t[l]).e && (e.e = n(e.e)),
                e.v &&
                  "g" === (i = e.v).t &&
                  i.r &&
                  (o = r.getElementById(i.r)) &&
                  (a[i.r] = { e: o, s: o.querySelectorAll("stop") });
            return a;
          })(t, i, l)),
          function (i) {
            const o = e(i, t, zt);
            if (!o) return "none";
            if ("c" === o.t) return st(o.v);
            if ("g" === o.t) {
              if (!n[o.r]) return ct(o.r);
              const u = n[o.r];
              return (
                (function (t, n) {
                  for (var r = t.s, e = r.length; e < n.length; e++) {
                    const i = r[r.length - 1].cloneNode();
                    (i.id = Yt(i.id)),
                      t.e.appendChild(i),
                      (r = t.s = t.e.querySelectorAll("stop"));
                  }
                  for (let o = 0, u = r.length, a = n.length - 1; o < u; o++)
                    r[o].setAttribute("stop-color", st(n[Math.min(o, a)].c)),
                      r[o].setAttribute("offset", n[Math.min(o, a)].o);
                })(u, o.s),
                Object.keys(Ct).forEach(function (t) {
                  if (void 0 !== o[t])
                    if ("object" !== r(Ct[t])) {
                      let n,
                        e =
                          "gt" === t
                            ? ((n = o[t]),
                              Array.isArray(n)
                                ? "matrix(" + n.join(" ") + ")"
                                : "")
                            : o[t],
                        i = Ct[t];
                      u.e.setAttribute(i, e);
                    } else
                      Object.keys(Ct[t]).forEach(function (n) {
                        if (void 0 !== o[t][n]) {
                          const r = o[t][n],
                            e = Ct[t][n];
                          u.e.setAttribute(e, r);
                        }
                      });
                }),
                ct(o.r)
              );
            }
            return "none";
          }
        );
      }
      function zt(t, r, e) {
        if (0 === t) return r;
        if (1 === t) return e;
        if (r && e) {
          const i = r.t;
          if (i === e.t)
            switch (r.t) {
              case "c":
                return { t: i, v: z(t, r.v, e.v) };
              case "g":
                if (r.r === e.r) {
                  const o = { t: i, s: Vt(t, r.s, e.s), r: r.r };
                  return (
                    r.gt &&
                      e.gt &&
                      (o.gt = (function (t, n, r) {
                        const e = n.length;
                        if (e !== r.length) return T(t, n, r);
                        for (var i = new Array(e), o = 0; o < e; o++)
                          i[o] = q(t, n[o], r[o]);
                        return i;
                      })(t, r.gt, e.gt)),
                    r.c
                      ? ((o.c = C(t, r.c, e.c)), (o.rd = B(t, r.rd, e.rd)))
                      : r.f &&
                        ((o.f = C(t, r.f, e.f)), (o.to = C(t, r.to, e.to))),
                    o
                  );
                }
            }
          if (("c" === r.t && "g" === e.t) || ("c" === e.t && "g" === r.t)) {
            const u = "c" === r.t ? r : e,
              a = "g" === r.t ? n({}, r) : n({}, e),
              l = a.s.map(function (t) {
                return { c: u.v, o: t.o };
              });
            return (a.s = "c" === r.t ? Vt(t, l, a.s) : Vt(t, a.s, l)), a;
          }
        }
        return T(t, r, e);
      }
      function Vt(t, n, r) {
        if (n.length === r.length)
          return n.map(function (n, e) {
            return Gt(t, n, r[e]);
          });
        for (var e = Math.max(n.length, r.length), i = [], o = 0; o < e; o++) {
          const u = Gt(
            t,
            n[Math.min(o, n.length - 1)],
            r[Math.min(o, r.length - 1)]
          );
          i.push(u);
        }
        return i;
      }
      function Gt(t, n, r) {
        return { o: L(t, n.o, r.o || 0), c: z(t, n.c, r.c || {}) };
      }
      function Yt(t) {
        return t.replace(/-fill-([0-9]+)$/, function (t, n) {
          return "-fill-" + (+n + 1);
        });
      }
      const $t = {
          fill: Dt,
          "fill-opacity": Bt,
          stroke: Dt,
          "stroke-opacity": Bt,
          "stroke-width": qt,
          "stroke-dashoffset": { f: lt, i: q },
          "stroke-dasharray": {
            f: function (t) {
              const n =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : " ";
              return (
                t &&
                  t.length > 0 &&
                  (t = t.map(function (t) {
                    return p(t, 4);
                  })),
                ft(t, n)
              );
            },
            i: function (t, n, r) {
              let e,
                i,
                o,
                u = n.length,
                a = r.length;
              if (u !== a)
                if (0 === u) n = V((u = a), 0);
                else if (0 === a) (a = u), (r = V(u, 0));
                else {
                  const l =
                    (o =
                      ((e = u) * (i = a)) /
                      (function (t, n) {
                        for (var r; n; ) (r = n), (n = t % n), (t = r);
                        return t || 1;
                      })(e, i)) < 0
                      ? -o
                      : o;
                  (n = G(n, Math.floor(l / u))),
                    (r = G(r, Math.floor(l / a))),
                    (u = a = l);
                }
              for (var f = [], s = 0; s < u; s++) f.push(p(B(t, n[s], r[s])));
              return f;
            },
          },
          opacity: Bt,
          transform: function (t, n, e, i) {
            if (
              !(t = (function (t, n) {
                if (!t || "object" !== r(t)) return null;
                let e = !1;
                for (const i in t)
                  t.hasOwnProperty(i) &&
                    (t[i] && t[i].length
                      ? (t[i].forEach(function (t) {
                          t.e && (t.e = n(t.e));
                        }),
                        (e = !0))
                      : delete t[i]);
                return e ? t : null;
              })(t, i))
            )
              return null;
            const o = function (r, i, o) {
              const u =
                arguments.length > 3 && void 0 !== arguments[3]
                  ? arguments[3]
                  : null;
              return t[r] ? e(i, t[r], o) : n && n[r] ? n[r] : u;
            };
            return n && n.a && t.o
              ? function (n) {
                  const r = e(n, t.o, Rt);
                  return Tt.recomposeSelf(
                    r,
                    o("r", n, q, 0) + r.a,
                    o("k", n, C),
                    o("s", n, C),
                    o("t", n, C)
                  ).toString();
                }
              : function (t) {
                  return Tt.recomposeSelf(
                    o("o", t, It, null),
                    o("r", t, q, 0),
                    o("k", t, C),
                    o("s", t, C),
                    o("t", t, C)
                  ).toString();
                };
          },
          r: qt,
          "#size": vt,
          "#radius": ht,
          _: function (t, n) {
            if (Array.isArray(t))
              for (let r = 0; r < t.length; r++) this[t[r]] = n;
            else this[t] = n;
          },
        },
        Ut = (function (t) {
          !(function (t, n) {
            if ("function" != typeof n && null !== n)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (t.prototype = Object.create(n && n.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              n && l(t, n);
          })(u, t);
          let n,
            r,
            i =
              ((n = u),
              (r = f()),
              function () {
                let t,
                  e = a(n);
                if (r) {
                  const i = a(this).constructor;
                  t = Reflect.construct(e, arguments, i);
                } else t = e.apply(this, arguments);
                return c(this, t);
              });
          function u() {
            return e(this, u), i.apply(this, arguments);
          }
          return (
            o(u, null, [
              {
                key: "build",
                value: function (t) {
                  const n = h(a(u), "build", this).call(this, t, $t);
                  if (!n) return null;
                  n.el,
                    n.options,
                    (function (t, n, r) {
                      t.play();
                    })(n.player);
                },
              },
            ]),
            u
          );
        })(at);
      return Ut.init(), Ut;
    });
    (function (s, i, o, w, a, b) {
      w[o] = w[o] || {};
      w[o][s] = w[o][s] || [];
      w[o][s].push(i);
    })(
      "5c7f360c",
      {
        root: "euybEDeLfph1",
        animations: [
          {
            elements: {
              euybEDeLfph5: {
                transform: {
                  data: { t: { x: -270.300596, y: -110.171584 } },
                  keys: {
                    o: [
                      {
                        t: 0,
                        v: { x: 280.008982, y: 100.031998, type: "corner" },
                      },
                      {
                        t: 200,
                        v: { x: 280.008982, y: 125.806168, type: "corner" },
                      },
                      {
                        t: 400,
                        v: { x: 280.008982, y: 100.031998, type: "corner" },
                      },
                    ],
                  },
                },
              },
              euybEDeLfph6: {
                transform: {
                  data: {
                    o: { x: 280.008987, y: 320.019785, type: "corner" },
                    t: { x: -265.150304, y: -229.743893 },
                  },
                  keys: {
                    r: [
                      { t: 200, v: 0 },
                      { t: clockTimePerCicle, v: 360 },
                    ],
                  },
                },
              },
            },
            s: "MWDA1M2JkNjRIYTZiN2YI0QmEzYjZhYmIxYjAJ2NEk3Yzc1NzI3MjcyFNmU2NGE2VGFiYjRhNV2E1YjZhYmIxYjA2NDHdjNzM2ZTY0YWJiNmEX3YjRhM2I2YWJiMWIwGYjU2NDdjNzM2ZTY0YWThhYmFlTmFlNjRIN2EM3MzZlRzY0YTNhZWIS2YTdiNGIwYTNiNmE3UNjQ3Y2E4YTNhZWI1YBTc2ZTY0YjViMmE3YTSdhNjY0N2M3M2Jm",
          },
        ],
        options: "MGDAxMDg4MmY4MDgxNmWU3ZjgxMmY0NzJmNzkK3Y0k2ZTcxMmZMOGE/C",
      },
      "__SVGATOR_PLAYER__",
      window
    );
  }, []);

  return (
    <svg
      id="euybEDeLfph1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 600 600"
      shapeRendering="geometricPrecision"
      textRendering="geometricPrecision"
      style={{ position: "absolute" }}
    >
      <g transform="translate(19.991013 0)">
        <ellipse
          rx="180"
          ry="180"
          transform="translate(280.008982 320.019785)"
          fill="#fff"
          stroke="#166bff"
          strokeWidth="14"
        />
        <path
          d="M230.300596,110.171584h60"
          transform="matrix(.69016 0.723657-.723657 0.69016 339.381731-84.384601)"
          fill="#fff"
          stroke="#166bff"
          strokeWidth="14"
          strokeLinecap="round"
        />
        <path
          id="euybEDeLfph5"
          d="M230.300596,110.171584h80"
          transform="translate(9.708386-10.139586)"
          fill="#fff"
          stroke="#166bff"
          strokeWidth="14"
          strokeLinecap="round"
        />
        <path
          id="euybEDeLfph6"
          d="M265.150298,229.743893v-140"
          transform="translate(14.858683 90.275892)"
          fill="#fff"
          stroke="#166bff"
          strokeWidth="14"
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
}
