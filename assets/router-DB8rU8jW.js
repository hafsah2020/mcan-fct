import {
    r as s,
    R as Oe
} from "./vendor-COX5XWRA.js";
/**
 * @remix-run/router v1.22.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function B() {
    return B = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }, B.apply(this, arguments)
}
var N;
(function(e) {
    e.Pop = "POP", e.Push = "PUSH", e.Replace = "REPLACE"
})(N || (N = {}));
const ce = "popstate";

function Fe(e) {
    e === void 0 && (e = {});

    function t(r, a) {
        let {
            pathname: o,
            search: i,
            hash: l
        } = r.location;
        return X("", {
            pathname: o,
            search: i,
            hash: l
        }, a.state && a.state.usr || null, a.state && a.state.key || "default")
    }

    function n(r, a) {
        return typeof a == "string" ? a : k(a)
    }
    return Be(t, n, null, e)
}

function b(e, t) {
    if (e === !1 || e === null || typeof e > "u") throw new Error(t)
}

function C(e, t) {
    if (!e) {
        typeof console < "u" && console.warn(t);
        try {
            throw new Error(t)
        } catch {}
    }
}

function Ie() {
    return Math.random().toString(36).substr(2, 8)
}

function de(e, t) {
    return {
        usr: e.state,
        key: e.key,
        idx: t
    }
}

function X(e, t, n, r) {
    return n === void 0 && (n = null), B({
        pathname: typeof e == "string" ? e : e.pathname,
        search: "",
        hash: ""
    }, typeof t == "string" ? F(t) : t, {
        state: n,
        key: t && t.key || r || Ie()
    })
}

function k(e) {
    let {
        pathname: t = "/",
        search: n = "",
        hash: r = ""
    } = e;
    return n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n), r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r), t
}

function F(e) {
    let t = {};
    if (e) {
        let n = e.indexOf("#");
        n >= 0 && (t.hash = e.substr(n), e = e.substr(0, n));
        let r = e.indexOf("?");
        r >= 0 && (t.search = e.substr(r), e = e.substr(0, r)), e && (t.pathname = e)
    }
    return t
}

function Be(e, t, n, r) {
    r === void 0 && (r = {});
    let {
        window: a = document.defaultView,
        v5Compat: o = !1
    } = r, i = a.history, l = N.Pop, u = null, c = f();
    c == null && (c = 0, i.replaceState(B({}, i.state, {
        idx: c
    }), ""));

    function f() {
        return (i.state || {
            idx: null
        }).idx
    }

    function d() {
        l = N.Pop;
        let m = f(),
            v = m == null ? null : m - c;
        c = m, u && u({
            action: l,
            location: w.location,
            delta: v
        })
    }

    function p(m, v) {
        l = N.Push;
        let g = X(w.location, m, v);
        c = f() + 1;
        let h = de(g, c),
            R = w.createHref(g);
        try {
            i.pushState(h, "", R)
        } catch (L) {
            if (L instanceof DOMException && L.name === "DataCloneError") throw L;
            a.location.assign(R)
        }
        o && u && u({
            action: l,
            location: w.location,
            delta: 1
        })
    }

    function y(m, v) {
        l = N.Replace;
        let g = X(w.location, m, v);
        c = f();
        let h = de(g, c),
            R = w.createHref(g);
        i.replaceState(h, "", R), o && u && u({
            action: l,
            location: w.location,
            delta: 0
        })
    }

    function x(m) {
        let v = a.location.origin !== "null" ? a.location.origin : a.location.href,
            g = typeof m == "string" ? m : k(m);
        return g = g.replace(/ $/, "%20"), b(v, "No window.location.(origin|href) available to create URL for href: " + g), new URL(g, v)
    }
    let w = {
        get action() {
            return l
        },
        get location() {
            return e(a, i)
        },
        listen(m) {
            if (u) throw new Error("A history only accepts one active listener");
            return a.addEventListener(ce, d), u = m, () => {
                a.removeEventListener(ce, d), u = null
            }
        },
        createHref(m) {
            return t(a, m)
        },
        createURL: x,
        encodeLocation(m) {
            let v = x(m);
            return {
                pathname: v.pathname,
                search: v.search,
                hash: v.hash
            }
        },
        push: p,
        replace: y,
        go(m) {
            return i.go(m)
        }
    };
    return w
}
var fe;
(function(e) {
    e.data = "data", e.deferred = "deferred", e.redirect = "redirect", e.error = "error"
})(fe || (fe = {}));

function ke(e, t, n) {
    return n === void 0 && (n = "/"), Ae(e, t, n)
}

function Ae(e, t, n, r) {
    let a = typeof t == "string" ? F(t) : t,
        o = T(a.pathname || "/", n);
    if (o == null) return null;
    let i = we(e);
    _e(i);
    let l = null;
    for (let u = 0; l == null && u < i.length; ++u) {
        let c = qe(o);
        l = Ke(i[u], c)
    }
    return l
}

function we(e, t, n, r) {
    t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
    let a = (o, i, l) => {
        let u = {
            relativePath: l === void 0 ? o.path || "" : l,
            caseSensitive: o.caseSensitive === !0,
            childrenIndex: i,
            route: o
        };
        u.relativePath.startsWith("/") && (b(u.relativePath.startsWith(r), 'Absolute route path "' + u.relativePath + '" nested under path ' + ('"' + r + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."), u.relativePath = u.relativePath.slice(r.length));
        let c = P([r, u.relativePath]),
            f = n.concat(u);
        o.children && o.children.length > 0 && (b(o.index !== !0, "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + c + '".')), we(o.children, t, f, c)), !(o.path == null && !o.index) && t.push({
            path: c,
            score: ze(c, o.index),
            routesMeta: f
        })
    };
    return e.forEach((o, i) => {
        var l;
        if (o.path === "" || !((l = o.path) != null && l.includes("?"))) a(o, i);
        else
            for (let u of xe(o.path)) a(o, i, u)
    }), t
}

function xe(e) {
    let t = e.split("/");
    if (t.length === 0) return [];
    let [n, ...r] = t, a = n.endsWith("?"), o = n.replace(/\?$/, "");
    if (r.length === 0) return a ? [o, ""] : [o];
    let i = xe(r.join("/")),
        l = [];
    return l.push(...i.map(u => u === "" ? o : [o, u].join("/"))), a && l.push(...i), l.map(u => e.startsWith("/") && u === "" ? "/" : u)
}

function _e(e) {
    e.sort((t, n) => t.score !== n.score ? n.score - t.score : Je(t.routesMeta.map(r => r.childrenIndex), n.routesMeta.map(r => r.childrenIndex)))
}
const We = /^:[\w-]+$/,
    De = 3,
    Me = 2,
    $e = 1,
    je = 10,
    Ve = -2,
    he = e => e === "*";

function ze(e, t) {
    let n = e.split("/"),
        r = n.length;
    return n.some(he) && (r += Ve), t && (r += Me), n.filter(a => !he(a)).reduce((a, o) => a + (We.test(o) ? De : o === "" ? $e : je), r)
}

function Je(e, t) {
    return e.length === t.length && e.slice(0, -1).every((r, a) => r === t[a]) ? e[e.length - 1] - t[t.length - 1] : 0
}

function Ke(e, t, n) {
    let {
        routesMeta: r
    } = e, a = {}, o = "/", i = [];
    for (let l = 0; l < r.length; ++l) {
        let u = r[l],
            c = l === r.length - 1,
            f = o === "/" ? t : t.slice(o.length) || "/",
            d = Q({
                path: u.relativePath,
                caseSensitive: u.caseSensitive,
                end: c
            }, f),
            p = u.route;
        if (!d) return null;
        Object.assign(a, d.params), i.push({
            params: a,
            pathname: P([o, d.pathname]),
            pathnameBase: Qe(P([o, d.pathnameBase])),
            route: p
        }), d.pathnameBase !== "/" && (o = P([o, d.pathnameBase]))
    }
    return i
}

function Q(e, t) {
    typeof e == "string" && (e = {
        path: e,
        caseSensitive: !1,
        end: !0
    });
    let [n, r] = Ye(e.path, e.caseSensitive, e.end), a = t.match(n);
    if (!a) return null;
    let o = a[0],
        i = o.replace(/(.)\/+$/, "$1"),
        l = a.slice(1);
    return {
        params: r.reduce((c, f, d) => {
            let {
                paramName: p,
                isOptional: y
            } = f;
            if (p === "*") {
                let w = l[d] || "";
                i = o.slice(0, o.length - w.length).replace(/(.)\/+$/, "$1")
            }
            const x = l[d];
            return y && !x ? c[p] = void 0 : c[p] = (x || "").replace(/%2F/g, "/"), c
        }, {}),
        pathname: o,
        pathnameBase: i,
        pattern: e
    }
}

function Ye(e, t, n) {
    t === void 0 && (t = !1), n === void 0 && (n = !0), C(e === "*" || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were ' + ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'));
    let r = [],
        a = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (i, l, u) => (r.push({
            paramName: l,
            isOptional: u != null
        }), u ? "/?([^\\/]+)?" : "/([^\\/]+)"));
    return e.endsWith("*") ? (r.push({
        paramName: "*"
    }), a += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? a += "\\/*$" : e !== "" && e !== "/" && (a += "(?:(?=\\/|$))"), [new RegExp(a, t ? void 0 : "i"), r]
}

function qe(e) {
    try {
        return e.split("/").map(t => decodeURIComponent(t).replace(/\//g, "%2F")).join("/")
    } catch (t) {
        return C(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + t + ").")), e
    }
}

function T(e, t) {
    if (t === "/") return e;
    if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
    let n = t.endsWith("/") ? t.length - 1 : t.length,
        r = e.charAt(n);
    return r && r !== "/" ? null : e.slice(n) || "/"
}

function He(e, t) {
    t === void 0 && (t = "/");
    let {
        pathname: n,
        search: r = "",
        hash: a = ""
    } = typeof e == "string" ? F(e) : e;
    return {
        pathname: n ? n.startsWith("/") ? n : Ge(n, t) : t,
        search: Ze(r),
        hash: et(a)
    }
}

function Ge(e, t) {
    let n = t.replace(/\/+$/, "").split("/");
    return e.split("/").forEach(a => {
        a === ".." ? n.length > 1 && n.pop() : a !== "." && n.push(a)
    }), n.length > 1 ? n.join("/") : "/"
}

function H(e, t, n, r) {
    return "Cannot include a '" + e + "' character in a manually specified " + ("`to." + t + "` field [" + JSON.stringify(r) + "].  Please separate it out to the ") + ("`to." + n + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.'
}

function Xe(e) {
    return e.filter((t, n) => n === 0 || t.route.path && t.route.path.length > 0)
}

function te(e, t) {
    let n = Xe(e);
    return t ? n.map((r, a) => a === n.length - 1 ? r.pathname : r.pathnameBase) : n.map(r => r.pathnameBase)
}

function ne(e, t, n, r) {
    r === void 0 && (r = !1);
    let a;
    typeof e == "string" ? a = F(e) : (a = B({}, e), b(!a.pathname || !a.pathname.includes("?"), H("?", "pathname", "search", a)), b(!a.pathname || !a.pathname.includes("#"), H("#", "pathname", "hash", a)), b(!a.search || !a.search.includes("#"), H("#", "search", "hash", a)));
    let o = e === "" || a.pathname === "",
        i = o ? "/" : a.pathname,
        l;
    if (i == null) l = n;
    else {
        let d = t.length - 1;
        if (!r && i.startsWith("..")) {
            let p = i.split("/");
            for (; p[0] === "..";) p.shift(), d -= 1;
            a.pathname = p.join("/")
        }
        l = d >= 0 ? t[d] : "/"
    }
    let u = He(a, l),
        c = i && i !== "/" && i.endsWith("/"),
        f = (o || i === ".") && n.endsWith("/");
    return !u.pathname.endsWith("/") && (c || f) && (u.pathname += "/"), u
}
const P = e => e.join("/").replace(/\/\/+/g, "/"),
    Qe = e => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
    Ze = e => !e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e,
    et = e => !e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e;

function tt(e) {
    return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data" in e
}
const Re = ["post", "put", "patch", "delete"];
new Set(Re);
const nt = ["get", ...Re];
new Set(nt);
/**
 * React Router v6.29.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function A() {
    return A = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }, A.apply(this, arguments)
}
const W = s.createContext(null);
W.displayName = "DataRouter";
const re = s.createContext(null);
re.displayName = "DataRouterState";
const rt = s.createContext(null);
rt.displayName = "Await";
const E = s.createContext(null);
E.displayName = "Navigation";
const D = s.createContext(null);
D.displayName = "Location";
const S = s.createContext({
    outlet: null,
    matches: [],
    isDataRoute: !1
});
S.displayName = "Route";
const ae = s.createContext(null);
ae.displayName = "RouteError";

function at(e, t) {
    let {
        relative: n
    } = t === void 0 ? {} : t;
    I() || b(!1, "useHref() may be used only in the context of a <Router> component.");
    let {
        basename: r,
        navigator: a
    } = s.useContext(E), {
        hash: o,
        pathname: i,
        search: l
    } = M(e, {
        relative: n
    }), u = i;
    return r !== "/" && (u = i === "/" ? r : P([r, i])), a.createHref({
        pathname: u,
        search: l,
        hash: o
    })
}

function I() {
    return s.useContext(D) != null
}

function U() {
    return I() || b(!1, "useLocation() may be used only in the context of a <Router> component."), s.useContext(D).location
}
const be = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";

function Ce(e) {
    s.useContext(E).static || s.useLayoutEffect(e)
}

function oe() {
    let {
        isDataRoute: e
    } = s.useContext(S);
    return e ? xt() : ot()
}

function ot() {
    I() || b(!1, "useNavigate() may be used only in the context of a <Router> component.");
    let e = s.useContext(W),
        {
            basename: t,
            future: n,
            navigator: r
        } = s.useContext(E),
        {
            matches: a
        } = s.useContext(S),
        {
            pathname: o
        } = U(),
        i = JSON.stringify(te(a, n.v7_relativeSplatPath)),
        l = s.useRef(!1);
    return Ce(() => {
        l.current = !0
    }), s.useCallback(function(c, f) {
        if (f === void 0 && (f = {}), C(l.current, be), !l.current) return;
        if (typeof c == "number") {
            r.go(c);
            return
        }
        let d = ne(c, JSON.parse(i), o, f.relative === "path");
        e == null && t !== "/" && (d.pathname = d.pathname === "/" ? t : P([t, d.pathname])), (f.replace ? r.replace : r.push)(d, f.state, f)
    }, [t, r, i, o, e])
}
const it = s.createContext(null);

function lt(e) {
    let t = s.useContext(S).outlet;
    return t && s.createElement(it.Provider, {
        value: e
    }, t)
}

function Zt() {
    let {
        matches: e
    } = s.useContext(S), t = e[e.length - 1];
    return t ? t.params : {}
}

function M(e, t) {
    let {
        relative: n
    } = t === void 0 ? {} : t, {
        future: r
    } = s.useContext(E), {
        matches: a
    } = s.useContext(S), {
        pathname: o
    } = U(), i = JSON.stringify(te(a, r.v7_relativeSplatPath));
    return s.useMemo(() => ne(e, JSON.parse(i), o, n === "path"), [e, i, o, n])
}

function st(e, t) {
    return ut(e, t)
}

function ut(e, t, n, r) {
    I() || b(!1, "useRoutes() may be used only in the context of a <Router> component.");
    let {
        navigator: a,
        static: o
    } = s.useContext(E), {
        matches: i
    } = s.useContext(S), l = i[i.length - 1], u = l ? l.params : {}, c = l ? l.pathname : "/", f = l ? l.pathnameBase : "/", d = l && l.route; {
        let h = d && d.path || "";
        Se(c, !d || h.endsWith("*"), "You rendered descendant <Routes> (or called `useRoutes()`) at " + ('"' + c + '" (under <Route path="' + h + '">) but the ') + `parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

` + ('Please change the parent <Route path="' + h + '"> to <Route ') + ('path="' + (h === "/" ? "*" : h + "/*") + '">.'))
    }
    let p = U(),
        y;
    if (t) {
        var x;
        let h = typeof t == "string" ? F(t) : t;
        f === "/" || (x = h.pathname) != null && x.startsWith(f) || b(!1, "When overriding the location using `<Routes location>` or `useRoutes(routes, location)`, the location pathname must begin with the portion of the URL pathname that was " + ('matched by all parent routes. The current pathname base is "' + f + '" ') + ('but pathname "' + h.pathname + '" was given in the `location` prop.')), y = h
    } else y = p;
    let w = y.pathname || "/",
        m = w;
    if (f !== "/") {
        let h = f.replace(/^\//, "").split("/");
        m = "/" + w.replace(/^\//, "").split("/").slice(h.length).join("/")
    }
    let v = ke(e, {
        pathname: m
    });
    C(d || v != null, 'No routes matched location "' + y.pathname + y.search + y.hash + '" '), C(v == null || v[v.length - 1].route.element !== void 0 || v[v.length - 1].route.Component !== void 0 || v[v.length - 1].route.lazy !== void 0, 'Matched leaf route at location "' + y.pathname + y.search + y.hash + '" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.');
    let g = pt(v && v.map(h => Object.assign({}, h, {
        params: Object.assign({}, u, h.params),
        pathname: P([f, a.encodeLocation ? a.encodeLocation(h.pathname).pathname : h.pathname]),
        pathnameBase: h.pathnameBase === "/" ? f : P([f, a.encodeLocation ? a.encodeLocation(h.pathnameBase).pathname : h.pathnameBase])
    })), i, n, r);
    return t && g ? s.createElement(D.Provider, {
        value: {
            location: A({
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default"
            }, y),
            navigationType: N.Pop
        }
    }, g) : g
}

function ct() {
    let e = wt(),
        t = tt(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e),
        n = e instanceof Error ? e.stack : null,
        r = "rgba(200,200,200, 0.5)",
        a = {
            padding: "0.5rem",
            backgroundColor: r
        },
        o = {
            padding: "2px 4px",
            backgroundColor: r
        },
        i = null;
    return console.error("Error handled by React Router default ErrorBoundary:", e), i = s.createElement(s.Fragment, null, s.createElement("p", null, "💿 Hey developer 👋"), s.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", s.createElement("code", {
        style: o
    }, "ErrorBoundary"), " or", " ", s.createElement("code", {
        style: o
    }, "errorElement"), " prop on your route.")), s.createElement(s.Fragment, null, s.createElement("h2", null, "Unexpected Application Error!"), s.createElement("h3", {
        style: {
            fontStyle: "italic"
        }
    }, t), n ? s.createElement("pre", {
        style: a
    }, n) : null, i)
}
const dt = s.createElement(ct, null);
class ft extends s.Component {
    constructor(t) {
        super(t), this.state = {
            location: t.location,
            revalidation: t.revalidation,
            error: t.error
        }
    }
    static getDerivedStateFromError(t) {
        return {
            error: t
        }
    }
    static getDerivedStateFromProps(t, n) {
        return n.location !== t.location || n.revalidation !== "idle" && t.revalidation === "idle" ? {
            error: t.error,
            location: t.location,
            revalidation: t.revalidation
        } : {
            error: t.error !== void 0 ? t.error : n.error,
            location: n.location,
            revalidation: t.revalidation || n.revalidation
        }
    }
    componentDidCatch(t, n) {
        console.error("React Router caught the following error during render", t, n)
    }
    render() {
        return this.state.error !== void 0 ? s.createElement(S.Provider, {
            value: this.props.routeContext
        }, s.createElement(ae.Provider, {
            value: this.state.error,
            children: this.props.component
        })) : this.props.children
    }
}

function ht(e) {
    let {
        routeContext: t,
        match: n,
        children: r
    } = e, a = s.useContext(W);
    return a && a.static && a.staticContext && (n.route.errorElement || n.route.ErrorBoundary) && (a.staticContext._deepestRenderedBoundaryId = n.route.id), s.createElement(S.Provider, {
        value: t
    }, r)
}

function pt(e, t, n, r) {
    var a;
    if (t === void 0 && (t = []), n === void 0 && (n = null), r === void 0 && (r = null), e == null) {
        var o;
        if (!n) return null;
        if (n.errors) e = n.matches;
        else if ((o = r) != null && o.v7_partialHydration && t.length === 0 && !n.initialized && n.matches.length > 0) e = n.matches;
        else return null
    }
    let i = e,
        l = (a = n) == null ? void 0 : a.errors;
    if (l != null) {
        let f = i.findIndex(d => d.route.id && (l == null ? void 0 : l[d.route.id]) !== void 0);
        f >= 0 || b(!1, "Could not find a matching route for errors on route IDs: " + Object.keys(l).join(",")), i = i.slice(0, Math.min(i.length, f + 1))
    }
    let u = !1,
        c = -1;
    if (n && r && r.v7_partialHydration)
        for (let f = 0; f < i.length; f++) {
            let d = i[f];
            if ((d.route.HydrateFallback || d.route.hydrateFallbackElement) && (c = f), d.route.id) {
                let {
                    loaderData: p,
                    errors: y
                } = n, x = d.route.loader && p[d.route.id] === void 0 && (!y || y[d.route.id] === void 0);
                if (d.route.lazy || x) {
                    u = !0, c >= 0 ? i = i.slice(0, c + 1) : i = [i[0]];
                    break
                }
            }
        }
    return i.reduceRight((f, d, p) => {
        let y, x = !1,
            w = null,
            m = null;
        n && (y = l && d.route.id ? l[d.route.id] : void 0, w = d.route.errorElement || dt, u && (c < 0 && p === 0 ? (Se("route-fallback", !1, "No `HydrateFallback` element provided to render during initial hydration"), x = !0, m = null) : c === p && (x = !0, m = d.route.hydrateFallbackElement || null)));
        let v = t.concat(i.slice(0, p + 1)),
            g = () => {
                let h;
                return y ? h = w : x ? h = m : d.route.Component ? h = s.createElement(d.route.Component, null) : d.route.element ? h = d.route.element : h = f, s.createElement(ht, {
                    match: d,
                    routeContext: {
                        outlet: f,
                        matches: v,
                        isDataRoute: n != null
                    },
                    children: h
                })
            };
        return n && (d.route.ErrorBoundary || d.route.errorElement || p === 0) ? s.createElement(ft, {
            location: n.location,
            revalidation: n.revalidation,
            component: w,
            error: y,
            children: g(),
            routeContext: {
                outlet: null,
                matches: v,
                isDataRoute: !0
            }
        }) : g()
    }, null)
}
var Ee = function(e) {
        return e.UseBlocker = "useBlocker", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e
    }(Ee || {}),
    _ = function(e) {
        return e.UseBlocker = "useBlocker", e.UseLoaderData = "useLoaderData", e.UseActionData = "useActionData", e.UseRouteError = "useRouteError", e.UseNavigation = "useNavigation", e.UseRouteLoaderData = "useRouteLoaderData", e.UseMatches = "useMatches", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e.UseRouteId = "useRouteId", e
    }(_ || {});

function ie(e) {
    return e + " must be used within a data router.  See https://reactrouter.com/v6/routers/picking-a-router."
}

function mt(e) {
    let t = s.useContext(W);
    return t || b(!1, ie(e)), t
}

function gt(e) {
    let t = s.useContext(re);
    return t || b(!1, ie(e)), t
}

function vt(e) {
    let t = s.useContext(S);
    return t || b(!1, ie(e)), t
}

function le(e) {
    let t = vt(e),
        n = t.matches[t.matches.length - 1];
    return n.route.id || b(!1, e + ' can only be used on routes that contain a unique "id"'), n.route.id
}

function yt() {
    return le(_.UseRouteId)
}

function wt() {
    var e;
    let t = s.useContext(ae),
        n = gt(_.UseRouteError),
        r = le(_.UseRouteError);
    return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r]
}

function xt() {
    let {
        router: e
    } = mt(Ee.UseNavigateStable), t = le(_.UseNavigateStable), n = s.useRef(!1);
    return Ce(() => {
        n.current = !0
    }), s.useCallback(function(a, o) {
        o === void 0 && (o = {}), C(n.current, be), n.current && (typeof a == "number" ? e.navigate(a) : e.navigate(a, A({
            fromRouteId: t
        }, o)))
    }, [e, t])
}
const pe = {};

function Se(e, t, n) {
    !t && !pe[e] && (pe[e] = !0, C(!1, n))
}
const me = {};

function Rt(e, t) {
    me[t] || (me[t] = !0, console.warn(t))
}
const ge = (e, t, n) => Rt(e, "⚠️ React Router Future Flag Warning: " + t + ". " + ("You can use the `" + e + "` future flag to opt-in early. ") + ("For more information, see " + n + "."));

function bt(e, t) {
    (e == null ? void 0 : e.v7_startTransition) === void 0 && ge("v7_startTransition", "React Router will begin wrapping state updates in `React.startTransition` in v7", "https://reactrouter.com/v6/upgrading/future#v7_starttransition"), (e == null ? void 0 : e.v7_relativeSplatPath) === void 0 && ge("v7_relativeSplatPath", "Relative route resolution within Splat routes is changing in v7", "https://reactrouter.com/v6/upgrading/future#v7_relativesplatpath")
}

function en(e) {
    let {
        to: t,
        replace: n,
        state: r,
        relative: a
    } = e;
    I() || b(!1, "<Navigate> may be used only in the context of a <Router> component.");
    let {
        future: o,
        static: i
    } = s.useContext(E);
    C(!i, "<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");
    let {
        matches: l
    } = s.useContext(S), {
        pathname: u
    } = U(), c = oe(), f = ne(t, te(l, o.v7_relativeSplatPath), u, a === "path"), d = JSON.stringify(f);
    return s.useEffect(() => c(JSON.parse(d), {
        replace: n,
        state: r,
        relative: a
    }), [c, d, a, n, r]), null
}

function tn(e) {
    return lt(e.context)
}

function Ct(e) {
    b(!1, "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")
}

function Et(e) {
    let {
        basename: t = "/",
        children: n = null,
        location: r,
        navigationType: a = N.Pop,
        navigator: o,
        static: i = !1,
        future: l
    } = e;
    I() && b(!1, "You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");
    let u = t.replace(/^\/*/, "/"),
        c = s.useMemo(() => ({
            basename: u,
            navigator: o,
            static: i,
            future: A({
                v7_relativeSplatPath: !1
            }, l)
        }), [u, l, o, i]);
    typeof r == "string" && (r = F(r));
    let {
        pathname: f = "/",
        search: d = "",
        hash: p = "",
        state: y = null,
        key: x = "default"
    } = r, w = s.useMemo(() => {
        let m = T(f, u);
        return m == null ? null : {
            location: {
                pathname: m,
                search: d,
                hash: p,
                state: y,
                key: x
            },
            navigationType: a
        }
    }, [u, f, d, p, y, x, a]);
    return C(w != null, '<Router basename="' + u + '"> is not able to match the URL ' + ('"' + f + d + p + '" because it does not start with the ') + "basename, so the <Router> won't render anything."), w == null ? null : s.createElement(E.Provider, {
        value: c
    }, s.createElement(D.Provider, {
        children: n,
        value: w
    }))
}

function nn(e) {
    let {
        children: t,
        location: n
    } = e;
    return st(Z(t), n)
}
new Promise(() => {});

function Z(e, t) {
    t === void 0 && (t = []);
    let n = [];
    return s.Children.forEach(e, (r, a) => {
        if (!s.isValidElement(r)) return;
        let o = [...t, a];
        if (r.type === s.Fragment) {
            n.push.apply(n, Z(r.props.children, o));
            return
        }
        r.type !== Ct && b(!1, "[" + (typeof r.type == "string" ? r.type : r.type.name) + "] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>"), !r.props.index || !r.props.children || b(!1, "An index route cannot have child routes.");
        let i = {
            id: r.props.id || o.join("-"),
            caseSensitive: r.props.caseSensitive,
            element: r.props.element,
            Component: r.props.Component,
            index: r.props.index,
            path: r.props.path,
            loader: r.props.loader,
            action: r.props.action,
            errorElement: r.props.errorElement,
            ErrorBoundary: r.props.ErrorBoundary,
            hasErrorBoundary: r.props.ErrorBoundary != null || r.props.errorElement != null,
            shouldRevalidate: r.props.shouldRevalidate,
            handle: r.props.handle,
            lazy: r.props.lazy
        };
        r.props.children && (i.children = Z(r.props.children, o)), n.push(i)
    }), n
}
/**
 * React Router DOM v6.29.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function O() {
    return O = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }, O.apply(this, arguments)
}

function se(e, t) {
    if (e == null) return {};
    var n = {},
        r = Object.keys(e),
        a, o;
    for (o = 0; o < r.length; o++) a = r[o], !(t.indexOf(a) >= 0) && (n[a] = e[a]);
    return n
}
const j = "get",
    V = "application/x-www-form-urlencoded";

function J(e) {
    return e != null && typeof e.tagName == "string"
}

function St(e) {
    return J(e) && e.tagName.toLowerCase() === "button"
}

function Pt(e) {
    return J(e) && e.tagName.toLowerCase() === "form"
}

function Lt(e) {
    return J(e) && e.tagName.toLowerCase() === "input"
}

function Nt(e) {
    return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
}

function Tt(e, t) {
    return e.button === 0 && (!t || t === "_self") && !Nt(e)
}

function ee(e) {
    return e === void 0 && (e = ""), new URLSearchParams(typeof e == "string" || Array.isArray(e) || e instanceof URLSearchParams ? e : Object.keys(e).reduce((t, n) => {
        let r = e[n];
        return t.concat(Array.isArray(r) ? r.map(a => [n, a]) : [
            [n, r]
        ])
    }, []))
}

function Ut(e, t) {
    let n = ee(e);
    return t && t.forEach((r, a) => {
        n.has(a) || t.getAll(a).forEach(o => {
            n.append(a, o)
        })
    }), n
}
let $ = null;

function Ot() {
    if ($ === null) try {
        new FormData(document.createElement("form"), 0), $ = !1
    } catch {
        $ = !0
    }
    return $
}
const Ft = new Set(["application/x-www-form-urlencoded", "multipart/form-data", "text/plain"]);

function G(e) {
    return e != null && !Ft.has(e) ? (C(!1, '"' + e + '" is not a valid `encType` for `<Form>`/`<fetcher.Form>` ' + ('and will default to "' + V + '"')), null) : e
}

function It(e, t) {
    let n, r, a, o, i;
    if (Pt(e)) {
        let l = e.getAttribute("action");
        r = l ? T(l, t) : null, n = e.getAttribute("method") || j, a = G(e.getAttribute("enctype")) || V, o = new FormData(e)
    } else if (St(e) || Lt(e) && (e.type === "submit" || e.type === "image")) {
        let l = e.form;
        if (l == null) throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
        let u = e.getAttribute("formaction") || l.getAttribute("action");
        if (r = u ? T(u, t) : null, n = e.getAttribute("formmethod") || l.getAttribute("method") || j, a = G(e.getAttribute("formenctype")) || G(l.getAttribute("enctype")) || V, o = new FormData(l, e), !Ot()) {
            let {
                name: c,
                type: f,
                value: d
            } = e;
            if (f === "image") {
                let p = c ? c + "." : "";
                o.append(p + "x", "0"), o.append(p + "y", "0")
            } else c && o.append(c, d)
        }
    } else {
        if (J(e)) throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');
        n = j, r = null, a = V, i = e
    }
    return o && a === "text/plain" && (i = o, o = void 0), {
        action: r,
        method: n.toLowerCase(),
        encType: a,
        formData: o,
        body: i
    }
}
const Bt = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset", "viewTransition"],
    kt = ["aria-current", "caseSensitive", "className", "end", "style", "to", "viewTransition", "children"],
    At = ["fetcherKey", "navigate", "reloadDocument", "replace", "state", "method", "action", "onSubmit", "relative", "preventScrollReset", "viewTransition"],
    _t = "6";
try {
    window.__reactRouterVersion = _t
} catch {}
const Pe = s.createContext({
    isTransitioning: !1
});
Pe.displayName = "ViewTransition";
const Wt = s.createContext(new Map);
Wt.displayName = "Fetchers";
const Dt = "startTransition",
    ve = Oe[Dt];

function rn(e) {
    let {
        basename: t,
        children: n,
        future: r,
        window: a
    } = e, o = s.useRef();
    o.current == null && (o.current = Fe({
        window: a,
        v5Compat: !0
    }));
    let i = o.current,
        [l, u] = s.useState({
            action: i.action,
            location: i.location
        }),
        {
            v7_startTransition: c
        } = r || {},
        f = s.useCallback(d => {
            c && ve ? ve(() => u(d)) : u(d)
        }, [u, c]);
    return s.useLayoutEffect(() => i.listen(f), [i, f]), s.useEffect(() => bt(r), [r]), s.createElement(Et, {
        basename: t,
        children: n,
        location: l.location,
        navigationType: l.action,
        navigator: i,
        future: r
    })
}
const Mt = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u",
    $t = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
    Le = s.forwardRef(function(t, n) {
        let {
            onClick: r,
            relative: a,
            reloadDocument: o,
            replace: i,
            state: l,
            target: u,
            to: c,
            preventScrollReset: f,
            viewTransition: d
        } = t, p = se(t, Bt), {
            basename: y
        } = s.useContext(E), x, w = !1;
        if (typeof c == "string" && $t.test(c) && (x = c, Mt)) try {
            let h = new URL(window.location.href),
                R = c.startsWith("//") ? new URL(h.protocol + c) : new URL(c),
                L = T(R.pathname, y);
            R.origin === h.origin && L != null ? c = L + R.search + R.hash : w = !0
        } catch {
            C(!1, '<Link to="' + c + '"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.')
        }
        let m = at(c, {
                relative: a
            }),
            v = Jt(c, {
                replace: i,
                state: l,
                target: u,
                preventScrollReset: f,
                relative: a,
                viewTransition: d
            });

        function g(h) {
            r && r(h), h.defaultPrevented || v(h)
        }
        return s.createElement("a", O({}, p, {
            href: x || m,
            onClick: w || o ? r : g,
            ref: n,
            target: u
        }))
    });
Le.displayName = "Link";
const jt = s.forwardRef(function(t, n) {
    let {
        "aria-current": r = "page",
        caseSensitive: a = !1,
        className: o = "",
        end: i = !1,
        style: l,
        to: u,
        viewTransition: c,
        children: f
    } = t, d = se(t, kt), p = M(u, {
        relative: d.relative
    }), y = U(), x = s.useContext(re), {
        navigator: w,
        basename: m
    } = s.useContext(E), v = x != null && Xt(p) && c === !0, g = w.encodeLocation ? w.encodeLocation(p).pathname : p.pathname, h = y.pathname, R = x && x.navigation && x.navigation.location ? x.navigation.location.pathname : null;
    a || (h = h.toLowerCase(), R = R ? R.toLowerCase() : null, g = g.toLowerCase()), R && m && (R = T(R, m) || R);
    const L = g !== "/" && g.endsWith("/") ? g.length - 1 : g.length;
    let K = h === g || !i && h.startsWith(g) && h.charAt(L) === "/",
        ue = R != null && (R === g || !i && R.startsWith(g) && R.charAt(g.length) === "/"),
        Y = {
            isActive: K,
            isPending: ue,
            isTransitioning: v
        },
        Te = K ? r : void 0,
        q;
    typeof o == "function" ? q = o(Y) : q = [o, K ? "active" : null, ue ? "pending" : null, v ? "transitioning" : null].filter(Boolean).join(" ");
    let Ue = typeof l == "function" ? l(Y) : l;
    return s.createElement(Le, O({}, d, {
        "aria-current": Te,
        className: q,
        ref: n,
        style: Ue,
        to: u,
        viewTransition: c
    }), typeof f == "function" ? f(Y) : f)
});
jt.displayName = "NavLink";
const Vt = s.forwardRef((e, t) => {
    let {
        fetcherKey: n,
        navigate: r,
        reloadDocument: a,
        replace: o,
        state: i,
        method: l = j,
        action: u,
        onSubmit: c,
        relative: f,
        preventScrollReset: d,
        viewTransition: p
    } = e, y = se(e, At), x = Ht(), w = Gt(u, {
        relative: f
    }), m = l.toLowerCase() === "get" ? "get" : "post", v = g => {
        if (c && c(g), g.defaultPrevented) return;
        g.preventDefault();
        let h = g.nativeEvent.submitter,
            R = (h == null ? void 0 : h.getAttribute("formmethod")) || l;
        x(h || g.currentTarget, {
            fetcherKey: n,
            method: R,
            navigate: r,
            replace: o,
            state: i,
            relative: f,
            preventScrollReset: d,
            viewTransition: p
        })
    };
    return s.createElement("form", O({
        ref: t,
        method: m,
        action: w,
        onSubmit: a ? c : v
    }, y))
});
Vt.displayName = "Form";
var z;
(function(e) {
    e.UseScrollRestoration = "useScrollRestoration", e.UseSubmit = "useSubmit", e.UseSubmitFetcher = "useSubmitFetcher", e.UseFetcher = "useFetcher", e.useViewTransitionState = "useViewTransitionState"
})(z || (z = {}));
var ye;
(function(e) {
    e.UseFetcher = "useFetcher", e.UseFetchers = "useFetchers", e.UseScrollRestoration = "useScrollRestoration"
})(ye || (ye = {}));

function zt(e) {
    return e + " must be used within a data router.  See https://reactrouter.com/v6/routers/picking-a-router."
}

function Ne(e) {
    let t = s.useContext(W);
    return t || b(!1, zt(e)), t
}

function Jt(e, t) {
    let {
        target: n,
        replace: r,
        state: a,
        preventScrollReset: o,
        relative: i,
        viewTransition: l
    } = t === void 0 ? {} : t, u = oe(), c = U(), f = M(e, {
        relative: i
    });
    return s.useCallback(d => {
        if (Tt(d, n)) {
            d.preventDefault();
            let p = r !== void 0 ? r : k(c) === k(f);
            u(e, {
                replace: p,
                state: a,
                preventScrollReset: o,
                relative: i,
                viewTransition: l
            })
        }
    }, [c, u, f, r, a, n, e, o, i, l])
}

function an(e) {
    C(typeof URLSearchParams < "u", "You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params.");
    let t = s.useRef(ee(e)),
        n = s.useRef(!1),
        r = U(),
        a = s.useMemo(() => Ut(r.search, n.current ? null : t.current), [r.search]),
        o = oe(),
        i = s.useCallback((l, u) => {
            const c = ee(typeof l == "function" ? l(a) : l);
            n.current = !0, o("?" + c, u)
        }, [o, a]);
    return [a, i]
}

function Kt() {
    if (typeof document > "u") throw new Error("You are calling submit during the server render. Try calling submit within a `useEffect` or callback instead.")
}
let Yt = 0,
    qt = () => "__" + String(++Yt) + "__";

function Ht() {
    let {
        router: e
    } = Ne(z.UseSubmit), {
        basename: t
    } = s.useContext(E), n = yt();
    return s.useCallback(function(r, a) {
        a === void 0 && (a = {}), Kt();
        let {
            action: o,
            method: i,
            encType: l,
            formData: u,
            body: c
        } = It(r, t);
        if (a.navigate === !1) {
            let f = a.fetcherKey || qt();
            e.fetch(f, n, a.action || o, {
                preventScrollReset: a.preventScrollReset,
                formData: u,
                body: c,
                formMethod: a.method || i,
                formEncType: a.encType || l,
                flushSync: a.flushSync
            })
        } else e.navigate(a.action || o, {
            preventScrollReset: a.preventScrollReset,
            formData: u,
            body: c,
            formMethod: a.method || i,
            formEncType: a.encType || l,
            replace: a.replace,
            state: a.state,
            fromRouteId: n,
            flushSync: a.flushSync,
            viewTransition: a.viewTransition
        })
    }, [e, t, n])
}

function Gt(e, t) {
    let {
        relative: n
    } = t === void 0 ? {} : t, {
        basename: r
    } = s.useContext(E), a = s.useContext(S);
    a || b(!1, "useFormAction must be used inside a RouteContext");
    let [o] = a.matches.slice(-1), i = O({}, M(e || ".", {
        relative: n
    })), l = U();
    if (e == null) {
        i.search = l.search;
        let u = new URLSearchParams(i.search),
            c = u.getAll("index");
        if (c.some(d => d === "")) {
            u.delete("index"), c.filter(p => p).forEach(p => u.append("index", p));
            let d = u.toString();
            i.search = d ? "?" + d : ""
        }
    }
    return (!e || e === ".") && o.route.index && (i.search = i.search ? i.search.replace(/^\?/, "?index&") : "?index"), r !== "/" && (i.pathname = i.pathname === "/" ? r : P([r, i.pathname])), k(i)
}

function Xt(e, t) {
    t === void 0 && (t = {});
    let n = s.useContext(Pe);
    n == null && b(!1, "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");
    let {
        basename: r
    } = Ne(z.useViewTransitionState), a = M(e, {
        relative: t.relative
    });
    if (!n.isTransitioning) return !1;
    let o = T(n.currentLocation.pathname, r) || n.currentLocation.pathname,
        i = T(n.nextLocation.pathname, r) || n.nextLocation.pathname;
    return Q(a.pathname, i) != null || Q(a.pathname, o) != null
}
export {
    rn as B, Le as L, en as N, tn as O, nn as R, Zt as a, U as b, an as c, Ct as d, oe as u
};