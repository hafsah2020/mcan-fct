import {
    a as y,
    r as p
} from "./vendor-COX5XWRA.js";
var yt = {
        color: void 0,
        size: void 0,
        className: void 0,
        style: void 0,
        attr: void 0
    },
    dt = y.createContext && y.createContext(yt),
    Ct = ["attr", "size", "title"];

function $t(t, e) {
    if (t == null) return {};
    var a = Lt(t, e),
        o, s;
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(t);
        for (s = 0; s < r.length; s++) o = r[s], !(e.indexOf(o) >= 0) && Object.prototype.propertyIsEnumerable.call(t, o) && (a[o] = t[o])
    }
    return a
}

function Lt(t, e) {
    if (t == null) return {};
    var a = {};
    for (var o in t)
        if (Object.prototype.hasOwnProperty.call(t, o)) {
            if (e.indexOf(o) >= 0) continue;
            a[o] = t[o]
        }
    return a
}

function Y() {
    return Y = Object.assign ? Object.assign.bind() : function(t) {
        for (var e = 1; e < arguments.length; e++) {
            var a = arguments[e];
            for (var o in a) Object.prototype.hasOwnProperty.call(a, o) && (t[o] = a[o])
        }
        return t
    }, Y.apply(this, arguments)
}

function ut(t, e) {
    var a = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(t);
        e && (o = o.filter(function(s) {
            return Object.getOwnPropertyDescriptor(t, s).enumerable
        })), a.push.apply(a, o)
    }
    return a
}

function q(t) {
    for (var e = 1; e < arguments.length; e++) {
        var a = arguments[e] != null ? arguments[e] : {};
        e % 2 ? ut(Object(a), !0).forEach(function(o) {
            Pt(t, o, a[o])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a)) : ut(Object(a)).forEach(function(o) {
            Object.defineProperty(t, o, Object.getOwnPropertyDescriptor(a, o))
        })
    }
    return t
}

function Pt(t, e, a) {
    return e = zt(e), e in t ? Object.defineProperty(t, e, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = a, t
}

function zt(t) {
    var e = Nt(t, "string");
    return typeof e == "symbol" ? e : e + ""
}

function Nt(t, e) {
    if (typeof t != "object" || !t) return t;
    var a = t[Symbol.toPrimitive];
    if (a !== void 0) {
        var o = a.call(t, e);
        if (typeof o != "object") return o;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (e === "string" ? String : Number)(t)
}

function gt(t) {
    return t && t.map((e, a) => y.createElement(e.tag, q({
        key: a
    }, e.attr), gt(e.child)))
}

function Qe(t) {
    return e => y.createElement(At, Y({
        attr: q({}, t.attr)
    }, e), gt(t.child))
}

function At(t) {
    var e = a => {
        var {
            attr: o,
            size: s,
            title: r
        } = t, n = $t(t, Ct), l = s || a.size || "1em", i;
        return a.className && (i = a.className), t.className && (i = (i ? i + " " : "") + t.className), y.createElement("svg", Y({
            stroke: "currentColor",
            fill: "currentColor",
            strokeWidth: "0"
        }, a.attr, o, n, {
            className: i,
            style: q(q({
                color: t.color || a.color
            }, a.style), t.style),
            height: l,
            width: l,
            xmlns: "http://www.w3.org/2000/svg"
        }), r && y.createElement("title", null, r), t.children)
    };
    return dt !== void 0 ? y.createElement(dt.Consumer, null, a => e(a)) : e(yt)
}

function _t(t) {
    var e, a, o = "";
    if (typeof t == "string" || typeof t == "number") o += t;
    else if (typeof t == "object")
        if (Array.isArray(t)) {
            var s = t.length;
            for (e = 0; e < s; e++) t[e] && (a = _t(t[e])) && (o && (o += " "), o += a)
        } else
            for (a in t) t[a] && (o && (o += " "), o += a);
    return o
}

function M() {
    for (var t, e, a = 0, o = "", s = arguments.length; a < s; a++)(t = arguments[a]) && (e = _t(t)) && (o && (o += " "), o += e);
    return o
}

function Dt(t) {
    if (typeof document > "u") return;
    let e = document.head || document.getElementsByTagName("head")[0],
        a = document.createElement("style");
    a.type = "text/css", e.firstChild ? e.insertBefore(a, e.firstChild) : e.appendChild(a), a.styleSheet ? a.styleSheet.cssText = t : a.appendChild(document.createTextNode(t))
}
Dt(`:root{--toastify-color-light: #fff;--toastify-color-dark: #121212;--toastify-color-info: #3498db;--toastify-color-success: #07bc0c;--toastify-color-warning: #f1c40f;--toastify-color-error: hsl(6, 78%, 57%);--toastify-color-transparent: rgba(255, 255, 255, .7);--toastify-icon-color-info: var(--toastify-color-info);--toastify-icon-color-success: var(--toastify-color-success);--toastify-icon-color-warning: var(--toastify-color-warning);--toastify-icon-color-error: var(--toastify-color-error);--toastify-container-width: fit-content;--toastify-toast-width: 320px;--toastify-toast-offset: 16px;--toastify-toast-top: max(var(--toastify-toast-offset), env(safe-area-inset-top));--toastify-toast-right: max(var(--toastify-toast-offset), env(safe-area-inset-right));--toastify-toast-left: max(var(--toastify-toast-offset), env(safe-area-inset-left));--toastify-toast-bottom: max(var(--toastify-toast-offset), env(safe-area-inset-bottom));--toastify-toast-background: #fff;--toastify-toast-padding: 14px;--toastify-toast-min-height: 64px;--toastify-toast-max-height: 800px;--toastify-toast-bd-radius: 6px;--toastify-toast-shadow: 0px 4px 12px rgba(0, 0, 0, .1);--toastify-font-family: sans-serif;--toastify-z-index: 9999;--toastify-text-color-light: #757575;--toastify-text-color-dark: #fff;--toastify-text-color-info: #fff;--toastify-text-color-success: #fff;--toastify-text-color-warning: #fff;--toastify-text-color-error: #fff;--toastify-spinner-color: #616161;--toastify-spinner-color-empty-area: #e0e0e0;--toastify-color-progress-light: linear-gradient(to right, #4cd964, #5ac8fa, #007aff, #34aadc, #5856d6, #ff2d55);--toastify-color-progress-dark: #bb86fc;--toastify-color-progress-info: var(--toastify-color-info);--toastify-color-progress-success: var(--toastify-color-success);--toastify-color-progress-warning: var(--toastify-color-warning);--toastify-color-progress-error: var(--toastify-color-error);--toastify-color-progress-bgo: .2}.Toastify__toast-container{z-index:var(--toastify-z-index);-webkit-transform:translate3d(0,0,var(--toastify-z-index));position:fixed;width:var(--toastify-container-width);box-sizing:border-box;color:#fff;display:flex;flex-direction:column}.Toastify__toast-container--top-left{top:var(--toastify-toast-top);left:var(--toastify-toast-left)}.Toastify__toast-container--top-center{top:var(--toastify-toast-top);left:50%;transform:translate(-50%);align-items:center}.Toastify__toast-container--top-right{top:var(--toastify-toast-top);right:var(--toastify-toast-right);align-items:end}.Toastify__toast-container--bottom-left{bottom:var(--toastify-toast-bottom);left:var(--toastify-toast-left)}.Toastify__toast-container--bottom-center{bottom:var(--toastify-toast-bottom);left:50%;transform:translate(-50%);align-items:center}.Toastify__toast-container--bottom-right{bottom:var(--toastify-toast-bottom);right:var(--toastify-toast-right);align-items:end}.Toastify__toast{--y: 0;position:relative;touch-action:none;width:var(--toastify-toast-width);min-height:var(--toastify-toast-min-height);box-sizing:border-box;margin-bottom:1rem;padding:var(--toastify-toast-padding);border-radius:var(--toastify-toast-bd-radius);box-shadow:var(--toastify-toast-shadow);max-height:var(--toastify-toast-max-height);font-family:var(--toastify-font-family);z-index:0;display:flex;flex:1 auto;align-items:center;word-break:break-word}@media only screen and (max-width: 480px){.Toastify__toast-container{width:100vw;left:env(safe-area-inset-left);margin:0}.Toastify__toast-container--top-left,.Toastify__toast-container--top-center,.Toastify__toast-container--top-right{top:env(safe-area-inset-top);transform:translate(0)}.Toastify__toast-container--bottom-left,.Toastify__toast-container--bottom-center,.Toastify__toast-container--bottom-right{bottom:env(safe-area-inset-bottom);transform:translate(0)}.Toastify__toast-container--rtl{right:env(safe-area-inset-right);left:initial}.Toastify__toast{--toastify-toast-width: 100%;margin-bottom:0;border-radius:0}}.Toastify__toast-container[data-stacked=true]{width:var(--toastify-toast-width)}.Toastify__toast--stacked{position:absolute;width:100%;transform:translate3d(0,var(--y),0) scale(var(--s));transition:transform .3s}.Toastify__toast--stacked[data-collapsed] .Toastify__toast-body,.Toastify__toast--stacked[data-collapsed] .Toastify__close-button{transition:opacity .1s}.Toastify__toast--stacked[data-collapsed=false]{overflow:visible}.Toastify__toast--stacked[data-collapsed=true]:not(:last-child)>*{opacity:0}.Toastify__toast--stacked:after{content:"";position:absolute;left:0;right:0;height:calc(var(--g) * 1px);bottom:100%}.Toastify__toast--stacked[data-pos=top]{top:0}.Toastify__toast--stacked[data-pos=bot]{bottom:0}.Toastify__toast--stacked[data-pos=bot].Toastify__toast--stacked:before{transform-origin:top}.Toastify__toast--stacked[data-pos=top].Toastify__toast--stacked:before{transform-origin:bottom}.Toastify__toast--stacked:before{content:"";position:absolute;left:0;right:0;bottom:0;height:100%;transform:scaleY(3);z-index:-1}.Toastify__toast--rtl{direction:rtl}.Toastify__toast--close-on-click{cursor:pointer}.Toastify__toast-icon{margin-inline-end:10px;width:22px;flex-shrink:0;display:flex}.Toastify--animate{animation-fill-mode:both;animation-duration:.5s}.Toastify--animate-icon{animation-fill-mode:both;animation-duration:.3s}.Toastify__toast-theme--dark{background:var(--toastify-color-dark);color:var(--toastify-text-color-dark)}.Toastify__toast-theme--light,.Toastify__toast-theme--colored.Toastify__toast--default{background:var(--toastify-color-light);color:var(--toastify-text-color-light)}.Toastify__toast-theme--colored.Toastify__toast--info{color:var(--toastify-text-color-info);background:var(--toastify-color-info)}.Toastify__toast-theme--colored.Toastify__toast--success{color:var(--toastify-text-color-success);background:var(--toastify-color-success)}.Toastify__toast-theme--colored.Toastify__toast--warning{color:var(--toastify-text-color-warning);background:var(--toastify-color-warning)}.Toastify__toast-theme--colored.Toastify__toast--error{color:var(--toastify-text-color-error);background:var(--toastify-color-error)}.Toastify__progress-bar-theme--light{background:var(--toastify-color-progress-light)}.Toastify__progress-bar-theme--dark{background:var(--toastify-color-progress-dark)}.Toastify__progress-bar--info{background:var(--toastify-color-progress-info)}.Toastify__progress-bar--success{background:var(--toastify-color-progress-success)}.Toastify__progress-bar--warning{background:var(--toastify-color-progress-warning)}.Toastify__progress-bar--error{background:var(--toastify-color-progress-error)}.Toastify__progress-bar-theme--colored.Toastify__progress-bar--info,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--success,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--warning,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--error{background:var(--toastify-color-transparent)}.Toastify__close-button{color:#fff;position:absolute;top:6px;right:6px;background:transparent;outline:none;border:none;padding:0;cursor:pointer;opacity:.7;transition:.3s ease;z-index:1}.Toastify__toast--rtl .Toastify__close-button{left:6px;right:unset}.Toastify__close-button--light{color:#000;opacity:.3}.Toastify__close-button>svg{fill:currentColor;height:16px;width:14px}.Toastify__close-button:hover,.Toastify__close-button:focus{opacity:1}@keyframes Toastify__trackProgress{0%{transform:scaleX(1)}to{transform:scaleX(0)}}.Toastify__progress-bar{position:absolute;bottom:0;left:0;width:100%;height:100%;z-index:1;opacity:.7;transform-origin:left}.Toastify__progress-bar--animated{animation:Toastify__trackProgress linear 1 forwards}.Toastify__progress-bar--controlled{transition:transform .2s}.Toastify__progress-bar--rtl{right:0;left:initial;transform-origin:right;border-bottom-left-radius:initial}.Toastify__progress-bar--wrp{position:absolute;overflow:hidden;bottom:0;left:0;width:100%;height:5px;border-bottom-left-radius:var(--toastify-toast-bd-radius);border-bottom-right-radius:var(--toastify-toast-bd-radius)}.Toastify__progress-bar--wrp[data-hidden=true]{opacity:0}.Toastify__progress-bar--bg{opacity:var(--toastify-color-progress-bgo);width:100%;height:100%}.Toastify__spinner{width:20px;height:20px;box-sizing:border-box;border:2px solid;border-radius:100%;border-color:var(--toastify-spinner-color-empty-area);border-right-color:var(--toastify-spinner-color);animation:Toastify__spin .65s linear infinite}@keyframes Toastify__bounceInRight{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(3000px,0,0)}60%{opacity:1;transform:translate3d(-25px,0,0)}75%{transform:translate3d(10px,0,0)}90%{transform:translate3d(-5px,0,0)}to{transform:none}}@keyframes Toastify__bounceOutRight{20%{opacity:1;transform:translate3d(-20px,var(--y),0)}to{opacity:0;transform:translate3d(2000px,var(--y),0)}}@keyframes Toastify__bounceInLeft{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(-3000px,0,0)}60%{opacity:1;transform:translate3d(25px,0,0)}75%{transform:translate3d(-10px,0,0)}90%{transform:translate3d(5px,0,0)}to{transform:none}}@keyframes Toastify__bounceOutLeft{20%{opacity:1;transform:translate3d(20px,var(--y),0)}to{opacity:0;transform:translate3d(-2000px,var(--y),0)}}@keyframes Toastify__bounceInUp{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,3000px,0)}60%{opacity:1;transform:translate3d(0,-20px,0)}75%{transform:translate3d(0,10px,0)}90%{transform:translate3d(0,-5px,0)}to{transform:translateZ(0)}}@keyframes Toastify__bounceOutUp{20%{transform:translate3d(0,calc(var(--y) - 10px),0)}40%,45%{opacity:1;transform:translate3d(0,calc(var(--y) + 20px),0)}to{opacity:0;transform:translate3d(0,-2000px,0)}}@keyframes Toastify__bounceInDown{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,-3000px,0)}60%{opacity:1;transform:translate3d(0,25px,0)}75%{transform:translate3d(0,-10px,0)}90%{transform:translate3d(0,5px,0)}to{transform:none}}@keyframes Toastify__bounceOutDown{20%{transform:translate3d(0,calc(var(--y) - 10px),0)}40%,45%{opacity:1;transform:translate3d(0,calc(var(--y) + 20px),0)}to{opacity:0;transform:translate3d(0,2000px,0)}}.Toastify__bounce-enter--top-left,.Toastify__bounce-enter--bottom-left{animation-name:Toastify__bounceInLeft}.Toastify__bounce-enter--top-right,.Toastify__bounce-enter--bottom-right{animation-name:Toastify__bounceInRight}.Toastify__bounce-enter--top-center{animation-name:Toastify__bounceInDown}.Toastify__bounce-enter--bottom-center{animation-name:Toastify__bounceInUp}.Toastify__bounce-exit--top-left,.Toastify__bounce-exit--bottom-left{animation-name:Toastify__bounceOutLeft}.Toastify__bounce-exit--top-right,.Toastify__bounce-exit--bottom-right{animation-name:Toastify__bounceOutRight}.Toastify__bounce-exit--top-center{animation-name:Toastify__bounceOutUp}.Toastify__bounce-exit--bottom-center{animation-name:Toastify__bounceOutDown}@keyframes Toastify__zoomIn{0%{opacity:0;transform:scale3d(.3,.3,.3)}50%{opacity:1}}@keyframes Toastify__zoomOut{0%{opacity:1}50%{opacity:0;transform:translate3d(0,var(--y),0) scale3d(.3,.3,.3)}to{opacity:0}}.Toastify__zoom-enter{animation-name:Toastify__zoomIn}.Toastify__zoom-exit{animation-name:Toastify__zoomOut}@keyframes Toastify__flipIn{0%{transform:perspective(400px) rotateX(90deg);animation-timing-function:ease-in;opacity:0}40%{transform:perspective(400px) rotateX(-20deg);animation-timing-function:ease-in}60%{transform:perspective(400px) rotateX(10deg);opacity:1}80%{transform:perspective(400px) rotateX(-5deg)}to{transform:perspective(400px)}}@keyframes Toastify__flipOut{0%{transform:translate3d(0,var(--y),0) perspective(400px)}30%{transform:translate3d(0,var(--y),0) perspective(400px) rotateX(-20deg);opacity:1}to{transform:translate3d(0,var(--y),0) perspective(400px) rotateX(90deg);opacity:0}}.Toastify__flip-enter{animation-name:Toastify__flipIn}.Toastify__flip-exit{animation-name:Toastify__flipOut}@keyframes Toastify__slideInRight{0%{transform:translate3d(110%,0,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInLeft{0%{transform:translate3d(-110%,0,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInUp{0%{transform:translate3d(0,110%,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInDown{0%{transform:translate3d(0,-110%,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideOutRight{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(110%,var(--y),0)}}@keyframes Toastify__slideOutLeft{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(-110%,var(--y),0)}}@keyframes Toastify__slideOutDown{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(0,500px,0)}}@keyframes Toastify__slideOutUp{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(0,-500px,0)}}.Toastify__slide-enter--top-left,.Toastify__slide-enter--bottom-left{animation-name:Toastify__slideInLeft}.Toastify__slide-enter--top-right,.Toastify__slide-enter--bottom-right{animation-name:Toastify__slideInRight}.Toastify__slide-enter--top-center{animation-name:Toastify__slideInDown}.Toastify__slide-enter--bottom-center{animation-name:Toastify__slideInUp}.Toastify__slide-exit--top-left,.Toastify__slide-exit--bottom-left{animation-name:Toastify__slideOutLeft;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--top-right,.Toastify__slide-exit--bottom-right{animation-name:Toastify__slideOutRight;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--top-center{animation-name:Toastify__slideOutUp;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--bottom-center{animation-name:Toastify__slideOutDown;animation-timing-function:ease-in;animation-duration:.3s}@keyframes Toastify__spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}
`);
var F = t => typeof t == "number" && !isNaN(t),
    B = t => typeof t == "string",
    N = t => typeof t == "function",
    jt = t => B(t) || F(t),
    et = t => B(t) || N(t) ? t : null,
    St = (t, e) => t === !1 || F(t) && t > 0 ? t : e,
    at = t => p.isValidElement(t) || B(t) || N(t) || F(t);

function Rt(t, e, a = 300) {
    let {
        scrollHeight: o,
        style: s
    } = t;
    requestAnimationFrame(() => {
        s.minHeight = "initial", s.height = o + "px", s.transition = `all ${a}ms`, requestAnimationFrame(() => {
            s.height = "0", s.padding = "0", s.margin = "0", setTimeout(e, a)
        })
    })
}

function Mt({
    enter: t,
    exit: e,
    appendPosition: a = !1,
    collapse: o = !0,
    collapseDuration: s = 300
}) {
    return function({
        children: r,
        position: n,
        preventExitTransition: l,
        done: i,
        nodeRef: f,
        isIn: u,
        playToast: T
    }) {
        let w = a ? `${t}--${n}` : t,
            k = a ? `${e}--${n}` : e,
            O = p.useRef(0);
        return p.useLayoutEffect(() => {
            let x = f.current,
                b = w.split(" "),
                _ = c => {
                    c.target === f.current && (T(), x.removeEventListener("animationend", _), x.removeEventListener("animationcancel", _), O.current === 0 && c.type !== "animationcancel" && x.classList.remove(...b))
                };
            x.classList.add(...b), x.addEventListener("animationend", _), x.addEventListener("animationcancel", _)
        }, []), p.useEffect(() => {
            let x = f.current,
                b = () => {
                    x.removeEventListener("animationend", b), o ? Rt(x, i, s) : i()
                };
            u || (l ? b() : (O.current = 1, x.className += ` ${k}`, x.addEventListener("animationend", b)))
        }, [u]), y.createElement(y.Fragment, null, r)
    }
}

function pt(t, e) {
    return {
        content: bt(t.content, t.props),
        containerId: t.props.containerId,
        id: t.props.toastId,
        theme: t.props.theme,
        type: t.props.type,
        data: t.props.data || {},
        isLoading: t.props.isLoading,
        icon: t.props.icon,
        reason: t.removalReason,
        status: e
    }
}

function bt(t, e, a = !1) {
    return p.isValidElement(t) && !B(t.type) ? p.cloneElement(t, {
        closeToast: e.closeToast,
        toastProps: e,
        data: e.data,
        isPaused: a
    }) : N(t) ? t({
        closeToast: e.closeToast,
        toastProps: e,
        data: e.data,
        isPaused: a
    }) : t
}

function Bt({
    closeToast: t,
    theme: e,
    ariaLabel: a = "close"
}) {
    return y.createElement("button", {
        className: `Toastify__close-button Toastify__close-button--${e}`,
        type: "button",
        onClick: o => {
            o.stopPropagation(), t(!0)
        },
        "aria-label": a
    }, y.createElement("svg", {
        "aria-hidden": "true",
        viewBox: "0 0 14 16"
    }, y.createElement("path", {
        fillRule: "evenodd",
        d: "M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"
    })))
}

function Xt({
    delay: t,
    isRunning: e,
    closeToast: a,
    type: o = "default",
    hide: s,
    className: r,
    controlledProgress: n,
    progress: l,
    rtl: i,
    isIn: f,
    theme: u
}) {
    let T = s || n && l === 0,
        w = {
            animationDuration: `${t}ms`,
            animationPlayState: e ? "running" : "paused"
        };
    n && (w.transform = `scaleX(${l})`);
    let k = M("Toastify__progress-bar", n ? "Toastify__progress-bar--controlled" : "Toastify__progress-bar--animated", `Toastify__progress-bar-theme--${u}`, `Toastify__progress-bar--${o}`, {
            "Toastify__progress-bar--rtl": i
        }),
        O = N(r) ? r({
            rtl: i,
            type: o,
            defaultClassName: k
        }) : M(k, r),
        x = {
            [n && l >= 1 ? "onTransitionEnd" : "onAnimationEnd"]: n && l < 1 ? null : () => {
                f && a()
            }
        };
    return y.createElement("div", {
        className: "Toastify__progress-bar--wrp",
        "data-hidden": T
    }, y.createElement("div", {
        className: `Toastify__progress-bar--bg Toastify__progress-bar-theme--${u} Toastify__progress-bar--${o}`
    }), y.createElement("div", {
        role: "progressbar",
        "aria-hidden": T ? "true" : "false",
        "aria-label": "notification timer",
        className: O,
        style: w,
        ...x
    }))
}
var Ft = 1,
    ht = () => `${Ft++}`;

function Ht(t, e, a) {
    let o = 1,
        s = 0,
        r = [],
        n = [],
        l = e,
        i = new Map,
        f = new Set,
        u = c => (f.add(c), () => f.delete(c)),
        T = () => {
            n = Array.from(i.values()), f.forEach(c => c())
        },
        w = ({
            containerId: c,
            toastId: d,
            updateId: m
        }) => {
            let E = c ? c !== t : t !== 1,
                C = i.has(d) && m == null;
            return E || C
        },
        k = (c, d) => {
            i.forEach(m => {
                var E;
                (d == null || d === m.props.toastId) && ((E = m.toggle) == null || E.call(m, c))
            })
        },
        O = c => {
            var d, m;
            (m = (d = c.props) == null ? void 0 : d.onClose) == null || m.call(d, c.removalReason), c.isActive = !1
        },
        x = c => {
            if (c == null) i.forEach(O);
            else {
                let d = i.get(c);
                d && O(d)
            }
            T()
        },
        b = () => {
            s -= r.length, r = []
        },
        _ = c => {
            var d, m;
            let {
                toastId: E,
                updateId: C
            } = c.props, g = C == null;
            c.staleId && i.delete(c.staleId), c.isActive = !0, i.set(E, c), T(), a(pt(c, g ? "added" : "updated")), g && ((m = (d = c.props).onOpen) == null || m.call(d))
        };
    return {
        id: t,
        props: l,
        observe: u,
        toggle: k,
        removeToast: x,
        toasts: i,
        clearQueue: b,
        buildToast: (c, d) => {
            if (w(d)) return;
            let {
                toastId: m,
                updateId: E,
                data: C,
                staleId: g,
                delay: v
            } = d, L = E == null;
            L && s++;
            let D = { ...l,
                style: l.toastStyle,
                key: o++,
                ...Object.fromEntries(Object.entries(d).filter(([R, W]) => W != null)),
                toastId: m,
                updateId: E,
                data: C,
                isIn: !1,
                className: et(d.className || l.toastClassName),
                progressClassName: et(d.progressClassName || l.progressClassName),
                autoClose: d.isLoading ? !1 : St(d.autoClose, l.autoClose),
                closeToast(R) {
                    i.get(m).removalReason = R, x(m)
                },
                deleteToast() {
                    let R = i.get(m);
                    if (R != null) {
                        if (a(pt(R, "removed")), i.delete(m), s--, s < 0 && (s = 0), r.length > 0) {
                            _(r.shift());
                            return
                        }
                        T()
                    }
                }
            };
            D.closeButton = l.closeButton, d.closeButton === !1 || at(d.closeButton) ? D.closeButton = d.closeButton : d.closeButton === !0 && (D.closeButton = at(l.closeButton) ? l.closeButton : !0);
            let P = {
                content: c,
                props: D,
                staleId: g
            };
            l.limit && l.limit > 0 && s > l.limit && L ? r.push(P) : F(v) ? setTimeout(() => {
                _(P)
            }, v) : _(P)
        },
        setProps(c) {
            l = c
        },
        setToggle: (c, d) => {
            let m = i.get(c);
            m && (m.toggle = d)
        },
        isToastActive: c => {
            var d;
            return (d = i.get(c)) == null ? void 0 : d.isActive
        },
        getSnapshot: () => n
    }
}
var I = new Map,
    X = [],
    ot = new Set,
    Ut = t => ot.forEach(e => e(t)),
    vt = () => I.size > 0;

function Wt() {
    X.forEach(t => xt(t.content, t.options)), X = []
}
var Vt = (t, {
    containerId: e
}) => {
    var a;
    return (a = I.get(e || 1)) == null ? void 0 : a.toasts.get(t)
};

function Tt(t, e) {
    var a;
    if (e) return !!((a = I.get(e)) != null && a.isToastActive(t));
    let o = !1;
    return I.forEach(s => {
        s.isToastActive(t) && (o = !0)
    }), o
}

function Yt(t) {
    if (!vt()) {
        X = X.filter(e => t != null && e.options.toastId !== t);
        return
    }
    if (t == null || jt(t)) I.forEach(e => {
        e.removeToast(t)
    });
    else if (t && ("containerId" in t || "id" in t)) {
        let e = I.get(t.containerId);
        e ? e.removeToast(t.id) : I.forEach(a => {
            a.removeToast(t.id)
        })
    }
}
var qt = (t = {}) => {
    I.forEach(e => {
        e.props.limit && (!t.containerId || e.id === t.containerId) && e.clearQueue()
    })
};

function xt(t, e) {
    at(t) && (vt() || X.push({
        content: t,
        options: e
    }), I.forEach(a => {
        a.buildToast(t, e)
    }))
}

function Kt(t) {
    var e;
    (e = I.get(t.containerId || 1)) == null || e.setToggle(t.id, t.fn)
}

function wt(t, e) {
    I.forEach(a => {
        (e == null || !(e != null && e.containerId) || (e == null ? void 0 : e.containerId) === a.id) && a.toggle(t, e == null ? void 0 : e.id)
    })
}

function Qt(t) {
    let e = t.containerId || 1;
    return {
        subscribe(a) {
            let o = Ht(e, t, Ut);
            I.set(e, o);
            let s = o.observe(a);
            return Wt(), () => {
                s(), I.delete(e)
            }
        },
        setProps(a) {
            var o;
            (o = I.get(e)) == null || o.setProps(a)
        },
        getSnapshot() {
            var a;
            return (a = I.get(e)) == null ? void 0 : a.getSnapshot()
        }
    }
}

function Gt(t) {
    return ot.add(t), () => {
        ot.delete(t)
    }
}

function Zt(t) {
    return t && (B(t.toastId) || F(t.toastId)) ? t.toastId : ht()
}

function H(t, e) {
    return xt(t, e), e.toastId
}

function K(t, e) {
    return { ...e,
        type: e && e.type || t,
        toastId: Zt(e)
    }
}

function Q(t) {
    return (e, a) => H(e, K(t, a))
}

function h(t, e) {
    return H(t, K("default", e))
}
h.loading = (t, e) => H(t, K("default", {
    isLoading: !0,
    autoClose: !1,
    closeOnClick: !1,
    closeButton: !1,
    draggable: !1,
    ...e
}));

function Jt(t, {
    pending: e,
    error: a,
    success: o
}, s) {
    let r;
    e && (r = B(e) ? h.loading(e, s) : h.loading(e.render, { ...s,
        ...e
    }));
    let n = {
            isLoading: null,
            autoClose: null,
            closeOnClick: null,
            closeButton: null,
            draggable: null
        },
        l = (f, u, T) => {
            if (u == null) {
                h.dismiss(r);
                return
            }
            let w = {
                    type: f,
                    ...n,
                    ...s,
                    data: T
                },
                k = B(u) ? {
                    render: u
                } : u;
            return r ? h.update(r, { ...w,
                ...k
            }) : h(k.render, { ...w,
                ...k
            }), T
        },
        i = N(t) ? t() : t;
    return i.then(f => l("success", o, f)).catch(f => l("error", a, f)), i
}
h.promise = Jt;
h.success = Q("success");
h.info = Q("info");
h.error = Q("error");
h.warning = Q("warning");
h.warn = h.warning;
h.dark = (t, e) => H(t, K("default", {
    theme: "dark",
    ...e
}));

function te(t) {
    Yt(t)
}
h.dismiss = te;
h.clearWaitingQueue = qt;
h.isActive = Tt;
h.update = (t, e = {}) => {
    let a = Vt(t, e);
    if (a) {
        let {
            props: o,
            content: s
        } = a, r = {
            delay: 100,
            ...o,
            ...e,
            toastId: e.toastId || t,
            updateId: ht()
        };
        r.toastId !== t && (r.staleId = t);
        let n = r.render || s;
        delete r.render, H(n, r)
    }
};
h.done = t => {
    h.update(t, {
        progress: 1
    })
};
h.onChange = Gt;
h.play = t => wt(!0, t);
h.pause = t => wt(!1, t);

function ee(t) {
    var e;
    let {
        subscribe: a,
        getSnapshot: o,
        setProps: s
    } = p.useRef(Qt(t)).current;
    s(t);
    let r = (e = p.useSyncExternalStore(a, o, o)) == null ? void 0 : e.slice();

    function n(l) {
        if (!r) return [];
        let i = new Map;
        return t.newestOnTop && r.reverse(), r.forEach(f => {
            let {
                position: u
            } = f.props;
            i.has(u) || i.set(u, []), i.get(u).push(f)
        }), Array.from(i, f => l(f[0], f[1]))
    }
    return {
        getToastToRender: n,
        isToastActive: Tt,
        count: r == null ? void 0 : r.length
    }
}

function ae(t) {
    let [e, a] = p.useState(!1), [o, s] = p.useState(!1), r = p.useRef(null), n = p.useRef({
        start: 0,
        delta: 0,
        removalDistance: 0,
        canCloseOnClick: !0,
        canDrag: !1,
        didMove: !1
    }).current, {
        autoClose: l,
        pauseOnHover: i,
        closeToast: f,
        onClick: u,
        closeOnClick: T
    } = t;
    Kt({
        id: t.toastId,
        containerId: t.containerId,
        fn: a
    }), p.useEffect(() => {
        if (t.pauseOnFocusLoss) return w(), () => {
            k()
        }
    }, [t.pauseOnFocusLoss]);

    function w() {
        document.hasFocus() || _(), window.addEventListener("focus", b), window.addEventListener("blur", _)
    }

    function k() {
        window.removeEventListener("focus", b), window.removeEventListener("blur", _)
    }

    function O(g) {
        if (t.draggable === !0 || t.draggable === g.pointerType) {
            c();
            let v = r.current;
            n.canCloseOnClick = !0, n.canDrag = !0, v.style.transition = "none", t.draggableDirection === "x" ? (n.start = g.clientX, n.removalDistance = v.offsetWidth * (t.draggablePercent / 100)) : (n.start = g.clientY, n.removalDistance = v.offsetHeight * (t.draggablePercent === 80 ? t.draggablePercent * 1.5 : t.draggablePercent) / 100)
        }
    }

    function x(g) {
        let {
            top: v,
            bottom: L,
            left: D,
            right: P
        } = r.current.getBoundingClientRect();
        g.nativeEvent.type !== "touchend" && t.pauseOnHover && g.clientX >= D && g.clientX <= P && g.clientY >= v && g.clientY <= L ? _() : b()
    }

    function b() {
        a(!0)
    }

    function _() {
        a(!1)
    }

    function c() {
        n.didMove = !1, document.addEventListener("pointermove", m), document.addEventListener("pointerup", E)
    }

    function d() {
        document.removeEventListener("pointermove", m), document.removeEventListener("pointerup", E)
    }

    function m(g) {
        let v = r.current;
        if (n.canDrag && v) {
            n.didMove = !0, e && _(), t.draggableDirection === "x" ? n.delta = g.clientX - n.start : n.delta = g.clientY - n.start, n.start !== g.clientX && (n.canCloseOnClick = !1);
            let L = t.draggableDirection === "x" ? `${n.delta}px, var(--y)` : `0, calc(${n.delta}px + var(--y))`;
            v.style.transform = `translate3d(${L},0)`, v.style.opacity = `${1-Math.abs(n.delta/n.removalDistance)}`
        }
    }

    function E() {
        d();
        let g = r.current;
        if (n.canDrag && n.didMove && g) {
            if (n.canDrag = !1, Math.abs(n.delta) > n.removalDistance) {
                s(!0), t.closeToast(!0), t.collapseAll();
                return
            }
            g.style.transition = "transform 0.2s, opacity 0.2s", g.style.removeProperty("transform"), g.style.removeProperty("opacity")
        }
    }
    let C = {
        onPointerDown: O,
        onPointerUp: x
    };
    return l && i && (C.onMouseEnter = _, t.stacked || (C.onMouseLeave = b)), T && (C.onClick = g => {
        u && u(g), n.canCloseOnClick && f(!0)
    }), {
        playToast: b,
        pauseToast: _,
        isRunning: e,
        preventExitTransition: o,
        toastRef: r,
        eventHandlers: C
    }
}
var oe = typeof window < "u" ? p.useLayoutEffect : p.useEffect,
    G = ({
        theme: t,
        type: e,
        isLoading: a,
        ...o
    }) => y.createElement("svg", {
        viewBox: "0 0 24 24",
        width: "100%",
        height: "100%",
        fill: t === "colored" ? "currentColor" : `var(--toastify-icon-color-${e})`,
        ...o
    });

function re(t) {
    return y.createElement(G, { ...t
    }, y.createElement("path", {
        d: "M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"
    }))
}

function se(t) {
    return y.createElement(G, { ...t
    }, y.createElement("path", {
        d: "M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"
    }))
}

function ne(t) {
    return y.createElement(G, { ...t
    }, y.createElement("path", {
        d: "M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"
    }))
}

function ie(t) {
    return y.createElement(G, { ...t
    }, y.createElement("path", {
        d: "M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"
    }))
}

function le() {
    return y.createElement("div", {
        className: "Toastify__spinner"
    })
}
var rt = {
        info: se,
        warning: re,
        success: ne,
        error: ie,
        spinner: le
    },
    ce = t => t in rt;

function fe({
    theme: t,
    type: e,
    isLoading: a,
    icon: o
}) {
    let s = null,
        r = {
            theme: t,
            type: e
        };
    return o === !1 || (N(o) ? s = o({ ...r,
        isLoading: a
    }) : p.isValidElement(o) ? s = p.cloneElement(o, r) : a ? s = rt.spinner() : ce(e) && (s = rt[e](r))), s
}
var de = t => {
        let {
            isRunning: e,
            preventExitTransition: a,
            toastRef: o,
            eventHandlers: s,
            playToast: r
        } = ae(t), {
            closeButton: n,
            children: l,
            autoClose: i,
            onClick: f,
            type: u,
            hideProgressBar: T,
            closeToast: w,
            transition: k,
            position: O,
            className: x,
            style: b,
            progressClassName: _,
            updateId: c,
            role: d,
            progress: m,
            rtl: E,
            toastId: C,
            deleteToast: g,
            isIn: v,
            isLoading: L,
            closeOnClick: D,
            theme: P,
            ariaLabel: R
        } = t, W = M("Toastify__toast", `Toastify__toast-theme--${P}`, `Toastify__toast--${u}`, {
            "Toastify__toast--rtl": E
        }, {
            "Toastify__toast--close-on-click": D
        }), Ot = N(x) ? x({
            rtl: E,
            position: O,
            type: u,
            defaultClassName: W
        }) : M(W, x), ct = fe(t), ft = !!m || !i, J = {
            closeToast: w,
            type: u,
            theme: P
        }, V = null;
        return n === !1 || (N(n) ? V = n(J) : p.isValidElement(n) ? V = p.cloneElement(n, J) : V = Bt(J)), y.createElement(k, {
            isIn: v,
            done: g,
            position: O,
            preventExitTransition: a,
            nodeRef: o,
            playToast: r
        }, y.createElement("div", {
            id: C,
            tabIndex: 0,
            onClick: f,
            "data-in": v,
            className: Ot,
            ...s,
            style: b,
            ref: o,
            ...v && {
                role: d,
                "aria-label": R
            }
        }, ct != null && y.createElement("div", {
            className: M("Toastify__toast-icon", {
                "Toastify--animate-icon Toastify__zoom-enter": !L
            })
        }, ct), bt(l, t, !e), V, !t.customProgressBar && y.createElement(Xt, { ...c && !ft ? {
                key: `p-${c}`
            } : {},
            rtl: E,
            theme: P,
            delay: i,
            isRunning: e,
            isIn: v,
            closeToast: w,
            hide: T,
            type: u,
            className: _,
            controlledProgress: ft,
            progress: m || 0
        })))
    },
    ue = (t, e = !1) => ({
        enter: `Toastify--animate Toastify__${t}-enter`,
        exit: `Toastify--animate Toastify__${t}-exit`,
        appendPosition: e
    }),
    pe = Mt(ue("bounce", !0)),
    me = {
        position: "top-right",
        transition: pe,
        autoClose: 5e3,
        closeButton: !0,
        pauseOnHover: !0,
        pauseOnFocusLoss: !0,
        draggable: "touch",
        draggablePercent: 80,
        draggableDirection: "x",
        role: "alert",
        theme: "light",
        "aria-label": "Notifications Alt+T",
        hotKeys: t => t.altKey && t.code === "KeyT"
    };

function Ge(t) {
    let e = { ...me,
            ...t
        },
        a = t.stacked,
        [o, s] = p.useState(!0),
        r = p.useRef(null),
        {
            getToastToRender: n,
            isToastActive: l,
            count: i
        } = ee(e),
        {
            className: f,
            style: u,
            rtl: T,
            containerId: w,
            hotKeys: k
        } = e;

    function O(b) {
        let _ = M("Toastify__toast-container", `Toastify__toast-container--${b}`, {
            "Toastify__toast-container--rtl": T
        });
        return N(f) ? f({
            position: b,
            rtl: T,
            defaultClassName: _
        }) : M(_, et(f))
    }

    function x() {
        a && (s(!0), h.play())
    }
    return oe(() => {
        var b;
        if (a) {
            let _ = r.current.querySelectorAll('[data-in="true"]'),
                c = 12,
                d = (b = e.position) == null ? void 0 : b.includes("top"),
                m = 0,
                E = 0;
            Array.from(_).reverse().forEach((C, g) => {
                let v = C;
                v.classList.add("Toastify__toast--stacked"), g > 0 && (v.dataset.collapsed = `${o}`), v.dataset.pos || (v.dataset.pos = d ? "top" : "bot");
                let L = m * (o ? .2 : 1) + (o ? 0 : c * g);
                v.style.setProperty("--y", `${d?L:L*-1}px`), v.style.setProperty("--g", `${c}`), v.style.setProperty("--s", `${1-(o?E:0)}`), m += v.offsetHeight, E += .025
            })
        }
    }, [o, i, a]), p.useEffect(() => {
        function b(_) {
            var c;
            let d = r.current;
            k(_) && ((c = d.querySelector('[tabIndex="0"]')) == null || c.focus(), s(!1), h.pause()), _.key === "Escape" && (document.activeElement === d || d != null && d.contains(document.activeElement)) && (s(!0), h.play())
        }
        return document.addEventListener("keydown", b), () => {
            document.removeEventListener("keydown", b)
        }
    }, [k]), y.createElement("section", {
        ref: r,
        className: "Toastify",
        id: w,
        onMouseEnter: () => {
            a && (s(!1), h.pause())
        },
        onMouseLeave: x,
        "aria-live": "polite",
        "aria-atomic": "false",
        "aria-relevant": "additions text",
        "aria-label": e["aria-label"]
    }, n((b, _) => {
        let c = _.length ? { ...u
        } : { ...u,
            pointerEvents: "none"
        };
        return y.createElement("div", {
            tabIndex: -1,
            className: O(b),
            "data-stacked": a,
            style: c,
            key: `c-${b}`
        }, _.map(({
            content: d,
            props: m
        }) => y.createElement(de, { ...m,
            stacked: a,
            collapseAll: x,
            isIn: l(m.toastId, m.containerId),
            key: `t-${m.key}`
        }, d)))
    }))
}
let ye = {
        data: ""
    },
    ge = t => typeof window == "object" ? ((t ? t.querySelector("#_goober") : window._goober) || Object.assign((t || document.head).appendChild(document.createElement("style")), {
        innerHTML: " ",
        id: "_goober"
    })).firstChild : t || ye,
    _e = /(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,
    be = /\/\*[^]*?\*\/|  +/g,
    mt = /\n+/g,
    j = (t, e) => {
        let a = "",
            o = "",
            s = "";
        for (let r in t) {
            let n = t[r];
            r[0] == "@" ? r[1] == "i" ? a = r + " " + n + ";" : o += r[1] == "f" ? j(n, r) : r + "{" + j(n, r[1] == "k" ? "" : e) + "}" : typeof n == "object" ? o += j(n, e ? e.replace(/([^,])+/g, l => r.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g, i => /&/.test(i) ? i.replace(/&/g, l) : l ? l + " " + i : i)) : r) : n != null && (r = /^--/.test(r) ? r : r.replace(/[A-Z]/g, "-$&").toLowerCase(), s += j.p ? j.p(r, n) : r + ":" + n + ";")
        }
        return a + (e && s ? e + "{" + s + "}" : s) + o
    },
    z = {},
    Et = t => {
        if (typeof t == "object") {
            let e = "";
            for (let a in t) e += a + Et(t[a]);
            return e
        }
        return t
    },
    he = (t, e, a, o, s) => {
        let r = Et(t),
            n = z[r] || (z[r] = (i => {
                let f = 0,
                    u = 11;
                for (; f < i.length;) u = 101 * u + i.charCodeAt(f++) >>> 0;
                return "go" + u
            })(r));
        if (!z[n]) {
            let i = r !== t ? t : (f => {
                let u, T, w = [{}];
                for (; u = _e.exec(f.replace(be, ""));) u[4] ? w.shift() : u[3] ? (T = u[3].replace(mt, " ").trim(), w.unshift(w[0][T] = w[0][T] || {})) : w[0][u[1]] = u[2].replace(mt, " ").trim();
                return w[0]
            })(t);
            z[n] = j(s ? {
                ["@keyframes " + n]: i
            } : i, a ? "" : "." + n)
        }
        let l = a && z.g ? z.g : null;
        return a && (z.g = z[n]), ((i, f, u, T) => {
            T ? f.data = f.data.replace(T, i) : f.data.indexOf(i) === -1 && (f.data = u ? i + f.data : f.data + i)
        })(z[n], e, o, l), n
    },
    ve = (t, e, a) => t.reduce((o, s, r) => {
        let n = e[r];
        if (n && n.call) {
            let l = n(a),
                i = l && l.props && l.props.className || /^go/.test(l) && l;
            n = i ? "." + i : l && typeof l == "object" ? l.props ? "" : j(l, "") : l === !1 ? "" : l
        }
        return o + s + (n ? ? "")
    }, "");

function Z(t) {
    let e = this || {},
        a = t.call ? t(e.p) : t;
    return he(a.unshift ? a.raw ? ve(a, [].slice.call(arguments, 1), e.p) : a.reduce((o, s) => Object.assign(o, s && s.call ? s(e.p) : s), {}) : a, ge(e.target), e.g, e.o, e.k)
}
let kt, st, nt;
Z.bind({
    g: 1
});
let A = Z.bind({
    k: 1
});

function Te(t, e, a, o) {
    j.p = e, kt = t, st = a, nt = o
}

function S(t, e) {
    let a = this || {};
    return function() {
        let o = arguments;

        function s(r, n) {
            let l = Object.assign({}, r),
                i = l.className || s.className;
            a.p = Object.assign({
                theme: st && st()
            }, l), a.o = / *go\d+/.test(i), l.className = Z.apply(a, o) + (i ? " " + i : "");
            let f = t;
            return t[0] && (f = l.as || t, delete l.as), nt && f[0] && nt(l), kt(f, l)
        }
        return s
    }
}
var xe = t => typeof t == "function",
    it = (t, e) => xe(t) ? t(e) : t,
    we = (() => {
        let t = 0;
        return () => (++t).toString()
    })(),
    Ee = (() => {
        let t;
        return () => {
            if (t === void 0 && typeof window < "u") {
                let e = matchMedia("(prefers-reduced-motion: reduce)");
                t = !e || e.matches
            }
            return t
        }
    })(),
    ke = 20,
    It = (t, e) => {
        switch (e.type) {
            case 0:
                return { ...t,
                    toasts: [e.toast, ...t.toasts].slice(0, ke)
                };
            case 1:
                return { ...t,
                    toasts: t.toasts.map(r => r.id === e.toast.id ? { ...r,
                        ...e.toast
                    } : r)
                };
            case 2:
                let {
                    toast: a
                } = e;
                return It(t, {
                    type: t.toasts.find(r => r.id === a.id) ? 1 : 0,
                    toast: a
                });
            case 3:
                let {
                    toastId: o
                } = e;
                return { ...t,
                    toasts: t.toasts.map(r => r.id === o || o === void 0 ? { ...r,
                        dismissed: !0,
                        visible: !1
                    } : r)
                };
            case 4:
                return e.toastId === void 0 ? { ...t,
                    toasts: []
                } : { ...t,
                    toasts: t.toasts.filter(r => r.id !== e.toastId)
                };
            case 5:
                return { ...t,
                    pausedAt: e.time
                };
            case 6:
                let s = e.time - (t.pausedAt || 0);
                return { ...t,
                    pausedAt: void 0,
                    toasts: t.toasts.map(r => ({ ...r,
                        pauseDuration: r.pauseDuration + s
                    }))
                }
        }
    },
    Ie = [],
    tt = {
        toasts: [],
        pausedAt: void 0
    },
    lt = t => {
        tt = It(tt, t), Ie.forEach(e => {
            e(tt)
        })
    },
    Oe = (t, e = "blank", a) => ({
        createdAt: Date.now(),
        visible: !0,
        dismissed: !1,
        type: e,
        ariaProps: {
            role: "status",
            "aria-live": "polite"
        },
        message: t,
        pauseDuration: 0,
        ...a,
        id: (a == null ? void 0 : a.id) || we()
    }),
    U = t => (e, a) => {
        let o = Oe(e, t, a);
        return lt({
            type: 2,
            toast: o
        }), o.id
    },
    $ = (t, e) => U("blank")(t, e);
$.error = U("error");
$.success = U("success");
$.loading = U("loading");
$.custom = U("custom");
$.dismiss = t => {
    lt({
        type: 3,
        toastId: t
    })
};
$.remove = t => lt({
    type: 4,
    toastId: t
});
$.promise = (t, e, a) => {
    let o = $.loading(e.loading, { ...a,
        ...a == null ? void 0 : a.loading
    });
    return typeof t == "function" && (t = t()), t.then(s => {
        let r = e.success ? it(e.success, s) : void 0;
        return r ? $.success(r, {
            id: o,
            ...a,
            ...a == null ? void 0 : a.success
        }) : $.dismiss(o), s
    }).catch(s => {
        let r = e.error ? it(e.error, s) : void 0;
        r ? $.error(r, {
            id: o,
            ...a,
            ...a == null ? void 0 : a.error
        }) : $.dismiss(o)
    }), t
};
var Ce = A `
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,
    $e = A `
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,
    Le = A `
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,
    Pe = S("div")
`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${Ce} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${$e} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${t=>t.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${Le} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`, ze = A `
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`, Ne = S("div")
`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${t=>t.secondary||"#e0e0e0"};
  border-right-color: ${t=>t.primary||"#616161"};
  animation: ${ze} 1s linear infinite;
`, Ae = A `
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`, De = A `
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`, je = S("div")
`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${Ae} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${De} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${t=>t.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`, Se = S("div")
`
  position: absolute;
`, Re = S("div")
`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`, Me = A `
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`, Be = S("div")
`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${Me} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`, Xe = ({
    toast: t
}) => {
    let {
        icon: e,
        type: a,
        iconTheme: o
    } = t;
    return e !== void 0 ? typeof e == "string" ? p.createElement(Be, null, e) : e : a === "blank" ? null : p.createElement(Re, null, p.createElement(Ne, { ...o
    }), a !== "loading" && p.createElement(Se, null, a === "error" ? p.createElement(Pe, { ...o
    }) : p.createElement(je, { ...o
    })))
}, Fe = t => `
0% {transform: translate3d(0,${t*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`, He = t => `
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${t*-150}%,-1px) scale(.6); opacity:0;}
`, Ue = "0%{opacity:0;} 100%{opacity:1;}", We = "0%{opacity:1;} 100%{opacity:0;}", Ve = S("div")
`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`, Ye = S("div")
`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`, qe = (t, e) => {
    let a = t.includes("top") ? 1 : -1,
        [o, s] = Ee() ? [Ue, We] : [Fe(a), He(a)];
    return {
        animation: e ? `${A(o)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards` : `${A(s)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`
    }
};
p.memo(({
    toast: t,
    position: e,
    style: a,
    children: o
}) => {
    let s = t.height ? qe(t.position || e || "top-center", t.visible) : {
            opacity: 0
        },
        r = p.createElement(Xe, {
            toast: t
        }),
        n = p.createElement(Ye, { ...t.ariaProps
        }, it(t.message, t));
    return p.createElement(Ve, {
        className: t.className,
        style: { ...s,
            ...a,
            ...t.style
        }
    }, typeof o == "function" ? o({
        icon: r,
        message: n
    }) : p.createElement(p.Fragment, null, r, n))
});
Te(p.createElement);
Z `
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`;
export {
    Qe as G, Ge as L, $ as c, h as y
};