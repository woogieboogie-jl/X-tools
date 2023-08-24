"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[1840], {
    2218: function(e, l, i) {
        i.r(l);
        var a = i(2752)
          , t = i(2265);
        l.default = e=>{
            let {callbacks: l} = e
              , i = (0,
            t.useRef)(!1);
            return !i.current && l && (l.forEach(e=>a.h.dispatch(e)),
            i.current = !0),
            null
        }
    },
    84511: function(e, l, i) {
        i.r(l),
        i.d(l, {
            DisclaimerBadge: function() {
                return v
            }
        });
        var a = i(57437)
          , t = i(2265)
          , n = i(7404)
          , r = i(86163)
          , o = i(68356);
        let s = (0,
        n.j)(["p-[16px]", "border-[2px] rounded-[8px]", "[&_.disclamer-icon]:rounded-[6px]", "[&_.disclamer-icon]:flex [&_.disclamer-icon]:items-center [&_.disclamer-icon]:justify-center", "[&_a]:text-symmetric-info dark:[&_a]:text-symmetric-dark-info [&_a]:font-medium"], {
            variants: {
                variant: {
                    danger: ["bg-symmetric-danger/10 dark:bg-symmetric-dark-danger/10 border-symmetric-danger/10 dark:border-symmetric-dark-danger/10", "[&_.disclamer-icon]:bg-symmetric-danger/10 dark:[&_.disclamer-icon]:bg-symmetric-dark-danger/10", "[&_.disclamer-icon]:text-symmetric-danger dark:[&_.disclamer-icon]:text-symmetric-dark-danger", "[&_.close-icon]:text-symmetric-danger dark:[&_.close-icon]:text-symmetric-dark-danger "],
                    info: ["bg-symmetric-info/10 dark:bg-symmetric-dark-info/10 border-symmetric-info/10 dark:border-symmetric-dark-info/10", "[&_.disclamer-icon]:bg-symmetric-info/10 dark:[&_.disclamer-icon]:bg-symmetric-dark-info/10", "[&_.disclamer-icon]:text-symmetric-info dark:[&_.disclamer-icon]:text-symmetric-dark-info", "[&_.close-icon]:text-symmetric-info dark:[&_.close-icon]:text-symmetric-dark-info "],
                    warning: ["bg-symmetric-warning/10 dark:bg-symmetric-dark-warning/10 border-symmetric-warning/10 dark:border-symmetric-dark-warning/10", "[&_.disclamer-icon]:bg-symmetric-warning/10 dark:[&_.disclamer-icon]:bg-symmetric-dark-warning/10", "[&_.disclamer-icon]:text-symmetric-warning dark:[&_.disclamer-icon]:text-symmetric-dark-warning", "[&_.close-icon]:text-symmetric-warning dark:[&_.close-icon]:text-symmetric-dark-warning "],
                    success: ["bg-symmetric-success/10 dark:bg-symmetric-dark-success/10 border-symmetric-success/10 dark:border-symmetric-dark-success/10", "[&_.disclamer-icon]:bg-symmetric-success/10 dark:[&_.disclamer-icon]:bg-symmetric-dark-success/10", "[&_.disclamer-icon]:text-symmetric-success dark:[&_.disclamer-icon]:text-symmetric-dark-success", "[&_.close-icon]:text-symmetric-success dark:[&_.close-icon]:text-symmetric-dark-success "]
                },
                layout: {
                    vertical: "flex-col !items-start !justify-center",
                    horizontal: "flex-row items-center justify-start"
                }
            },
            defaultVariants: {
                variant: "success"
            }
        })
          , d = e=>{
            let {variant: l, title: i, description: d, titleProps: c, descriptionProps: u, className: m, layout: v="vertical", colon: p} = e
              , h = (0,
            t.useMemo)(()=>{
                switch (l) {
                case "info":
                    return (0,
                    a.jsx)(o.uM, {});
                case "warning":
                    return (0,
                    a.jsx)(o.go, {});
                case "danger":
                    return (0,
                    a.jsx)(o.lM, {});
                default:
                    return (0,
                    a.jsx)(o.hU, {})
                }
            }
            , [l]);
            return (0,
            a.jsxs)("div", {
                className: s({
                    variant: l,
                    layout: v,
                    className: (0,
                    n.cx)("flex items-center gap-[8px]", m)
                }),
                children: [(0,
                a.jsxs)("div", {
                    className: "flex items-center gap-[8px]",
                    children: [(0,
                    a.jsx)("div", {
                        className: "disclamer-icon h-[24px] w-[24px]",
                        children: h
                    }), (0,
                    a.jsxs)(r.Typography, {
                        variant: "subtitle",
                        fontWeight: "medium",
                        ...c,
                        children: [i, (0,
                        a.jsx)("span", {
                            className: (0,
                            n.cx)(p ? " hidden laptop:inline-block " : "hidden", "ml-[6px]"),
                            children: ":"
                        })]
                    })]
                }), (0,
                a.jsx)(r.Typography, {
                    variant: "body",
                    ...u,
                    children: d
                })]
            })
        }
        ;
        var c = i(92767)
          , u = i(49210)
          , m = i(46383);
        let v = e=>{
            var l, i, n;
            let {title: r="Note", className: o, position: s, type: v="badge", allocationId: p, tooltipClassName: h} = e
              , [x,b] = (0,
            t.useState)()
              , {getDisclaimerByPosition: g} = (0,
            c.x)()
              , k = g(s, p)
              , f = (0,
            t.useCallback)(async()=>{
                let e = await (0,
                u.a)(null == k ? void 0 : k.content);
                b(e)
            }
            , [null == k ? void 0 : k.content]);
            return ((0,
            t.useEffect)(()=>{
                (null == k ? void 0 : k.isShow) && (null == k ? void 0 : k.content) && f()
            }
            , [f, null == k ? void 0 : k.content, null == k ? void 0 : k.isShow]),
            null == k ? void 0 : k.isShow) ? "badge" === v ? (0,
            a.jsx)(d, {
                title: r,
                colon: !0,
                titleProps: {
                    className: "whitespace-nowrap"
                },
                layout: "horizontal",
                className: o,
                variant: null == k ? void 0 : null === (n = k.type) || void 0 === n ? void 0 : n.toLocaleLowerCase(),
                description: (0,
                a.jsx)("div", {
                    dangerouslySetInnerHTML: {
                        __html: x
                    }
                })
            }) : (0,
            a.jsx)(m.N, {
                tooltipClassName: h,
                type: null == k ? void 0 : null === (l = k.type) || void 0 === l ? void 0 : l.toLocaleLowerCase(),
                children: (0,
                a.jsx)(d, {
                    title: r,
                    titleProps: {
                        className: "whitespace-nowrap"
                    },
                    layout: "vertical",
                    className: o,
                    variant: null == k ? void 0 : null === (i = k.type) || void 0 === i ? void 0 : i.toLocaleLowerCase(),
                    description: (0,
                    a.jsx)("div", {
                        dangerouslySetInnerHTML: {
                            __html: x
                        }
                    })
                })
            }) : null
        }
    },
    9479: function(e, l, i) {
        var a, t;
        i.d(l, {
            N: function() {
                return a
            }
        }),
        (t = a || (a = {})).TEAM = "TEAM",
        t.ENTERPRISE = "ENTERPRISE",
        t.PRO = "PRO",
        t.PLUS = "PLUS",
        t.FREE = "FREE"
    },
    77607: function(e, l, i) {
        i.d(l, {
            g: function() {
                return o
            }
        });
        var a = i(47713)
          , t = i(24033)
          , n = i(9479)
          , r = i(35254);
        let o = ()=>{
            let {user: e} = (0,
            r.a)()
              , l = (0,
            t.usePathname)();
            return {
                track: (i,a)=>{
                    let t;
                    let {dataLayer: r} = window;
                    t = (null == e ? void 0 : e.id) ? e.roles.includes(n.N.TEAM) ? "TEAM" : e.roles.includes(n.N.PRO) ? "PRO" : "FREE" : "GUEST";
                    let o = {
                        event: i,
                        page: l,
                        userId: (null == e ? void 0 : e.id) ? e.id : "",
                        property: {
                            userType: t,
                            ...a
                        }
                    };
                    null == r || r.push(o)
                }
                ,
                setTrackSession: ()=>{
                    let e = (Math.random() + 1).toString(36).substring(2);
                    (0,
                    a.setCookie)("tokenunlocks-session", e)
                }
                ,
                getTrackSession: ()=>(0,
                a.getCookie)("tokenunlocks-session"),
                clearTrackSession: ()=>{
                    (0,
                    a.deleteCookie)("tokenunlocks-session")
                }
                ,
                getProvider: ()=>(null == e ? void 0 : e.google) ? "google" : (null == e ? void 0 : e.walletAddress) ? "metamask" : void 0
            }
        }
    },
    88128: function(e, l, i) {
        i.d(l, {
            l: function() {
                return r
            }
        });
        var a = i(24033)
          , t = i(2265);
        let n = ()=>{
            let e = (0,
            a.usePathname)()
              , l = (0,
            t.useMemo)(()=>"?redirect=".concat(e), [e]);
            return {
                params: l
            }
        }
          , r = ()=>{
            let e = (0,
            a.useRouter)()
              , {params: l} = n()
              , i = (0,
            t.useCallback)(()=>{
                let i = "/auth/signin".concat(l);
                e.push(i)
            }
            , [l, e])
              , r = (0,
            t.useCallback)(()=>{
                let i = "/auth/signup".concat(l);
                e.push(i)
            }
            , [l, e]);
            return {
                redirectSignIn: i,
                redirectSignUp: r
            }
        }
    },
    92767: function(e, l, i) {
        i.d(l, {
            x: function() {
                return n
            }
        });
        var a = i(2265)
          , t = i(3198);
        let n = ()=>{
            let e = (0,
            t.v9)(e=>e.vesting.detail.disclaimer)
              , l = (0,
            a.useCallback)((l,i)=>{
                var a;
                return i ? null == e ? void 0 : null === (a = e[l]) || void 0 === a ? void 0 : a[i] : null == e ? void 0 : e[l]
            }
            , [e]);
            return {
                disclaimer: e,
                getDisclaimerByPosition: l
            }
        }
    },
    59329: function(e, l, i) {
        i.d(l, {
            a: function() {
                return r
            },
            k: function() {
                return n
            }
        });
        var a = i(2265)
          , t = i(9150);
        let n = ()=>(0,
        a.useMemo)(()=>{
            let e = Object.keys(t.o.screens).reduce((e,l)=>("none" === l ? e[l] = "(min-width: 0px)" : e[l] = "(min-width: ".concat(t.o.screens[l], ")"),
            e), {})
              , l = Object.keys(t.o.screens).reduce((e,l)=>("none" === l ? e[l] = "(max-width: 0px)" : e[l] = "(max-width: ".concat(t.o.screens[l], ")"),
            e), {});
            return {
                up: e,
                down: l
            }
        }
        , [])
          , r = e=>{
            let[l,i] = (0,
            a.useState)(!1);
            return (0,
            a.useEffect)(()=>{
                let a = window.matchMedia(e);
                a.matches !== l && i(a.matches);
                let t = ()=>i(a.matches);
                return window.addEventListener("resize", t),
                ()=>window.removeEventListener("resize", t)
            }
            , [l, e]),
            l
        }
    },
    9150: function(e, l, i) {
        i.d(l, {
            J: function() {
                return o
            },
            o: function() {
                return s
            }
        });
        var a, t, n = i(49614), r = i.n(n);
        let o = ()=>{
            var e, l, i, a, t, n, o, s, d, c, u, m, v, p;
            return {
                colors: null === (i = r()) || void 0 === i ? void 0 : null === (l = i.theme) || void 0 === l ? void 0 : null === (e = l.extend) || void 0 === e ? void 0 : e.colors,
                screens: null === (n = r()) || void 0 === n ? void 0 : null === (t = n.theme) || void 0 === t ? void 0 : null === (a = t.extend) || void 0 === a ? void 0 : a.screens,
                borderRadius: null === (d = r()) || void 0 === d ? void 0 : null === (s = d.theme) || void 0 === s ? void 0 : null === (o = s.extend) || void 0 === o ? void 0 : o.borderRadius,
                boxShadow: null === (m = r()) || void 0 === m ? void 0 : null === (u = m.theme) || void 0 === u ? void 0 : null === (c = u.extend) || void 0 === c ? void 0 : c.boxShadow,
                fontFamily: null === (p = r()) || void 0 === p ? void 0 : null === (v = p.theme) || void 0 === v ? void 0 : v.fontFamily
            }
        }
          , s = null === (t = r()) || void 0 === t ? void 0 : null === (a = t.theme) || void 0 === a ? void 0 : a.extend
    },
    35254: function(e, l, i) {
        i.d(l, {
            a: function() {
                return n
            }
        });
        var a = i(82749)
          , t = i(2265);
        let n = e=>{
            let[l,i] = (0,
            t.useState)(e)
              , {data: n, update: r} = (0,
            a.useSession)();
            return (0,
            t.useEffect)(()=>{
                (null == n ? void 0 : n.user) && i(n.user)
            }
            , [n]),
            {
                user: l,
                update: r
            }
        }
    },
    67817: function(e, l, i) {
        i.d(l, {
            j2: function() {
                return r
            },
            js: function() {
                return n
            }
        });
        var a = i(98340);
        let t = (0,
        a.oM)({
            name: "drawer",
            initialState: {
                menuOpen: !1,
                searchOpen: !1
            },
            reducers: {
                toggleMenu: e=>{
                    e.menuOpen || (e.searchOpen = !1),
                    e.menuOpen = !e.menuOpen
                }
                ,
                toggleSearch: e=>{
                    e.searchOpen || (e.menuOpen = !1),
                    e.searchOpen = !e.searchOpen
                }
            }
        })
          , {toggleMenu: n, toggleSearch: r} = t.actions;
        l.ZP = t.reducer
    },
    2752: function(e, l, i) {
        i.d(l, {
            h: function() {
                return x
            }
        });
        var a = i(98340)
          , t = i(67817)
          , n = i(80063);
        let r = (0,
        a.oM)({
            name: "token",
            initialState: {
                tokenSearchList: {
                    daomakerTokens: [],
                    impossibleFinanceTokens: [],
                    tokenunlocksTokens: []
                }
            },
            reducers: {
                setTokenSearchList: (e,l)=>{
                    e.tokenSearchList = l.payload
                }
            }
        })
          , {setTokenSearchList: o} = r.actions;
        var s = r.reducer
          , d = i(91530);
        let c = (0,
        a.oM)({
            name: "vesting",
            initialState: {
                detail: null,
                emission: null,
                allocations: {}
            },
            reducers: {
                setDetail: (e,l)=>{
                    e.detail = l.payload
                }
                ,
                setEmission: (e,l)=>{
                    e.emission = l.payload
                }
                ,
                setAllocations: (e,l)=>{
                    e.allocations = l.payload
                }
            }
        })
          , {setDetail: u, setEmission: m, setAllocations: v} = c.actions;
        var p = c.reducer
          , h = i(35925);
        let x = (0,
        a.xC)({
            reducer: {
                drawer: t.ZP,
                subscription: n.ZP,
                token: s,
                vestingList: d.ZP,
                vesting: p,
                setting: h.ZP
            },
            middleware: e=>e({
                immutableCheck: !1,
                serializableCheck: !1
            }),
            devTools: !1
        })
    },
    35925: function(e, l, i) {
        i.d(l, {
            fX: function() {
                return n
            }
        });
        var a = i(98340);
        let t = (0,
        a.oM)({
            name: "SettingState",
            initialState: {
                highlight: !0
            },
            reducers: {
                setHighlight: (e,l)=>{
                    e.highlight = l.payload
                }
            }
        })
          , {setHighlight: n} = t.actions;
        l.ZP = t.reducer
    },
    80063: function(e, l, i) {
        i.d(l, {
            ch: function() {
                return n
            }
        });
        var a = i(98340);
        let t = (0,
        a.oM)({
            name: "subscription",
            initialState: {
                list: []
            },
            reducers: {
                setSubscriptionList: (e,l)=>{
                    e.list = l.payload
                }
            }
        })
          , {setSubscriptionList: n} = t.actions;
        l.ZP = t.reducer
    },
    91530: function(e, l, i) {
        i.d(l, {
            KY: function() {
                return r
            }
        });
        var a = i(98340);
        let t = (0,
        a.oM)({
            name: "vestingList",
            initialState: {
                selectedTab: "projects",
                search: null,
                tokenCategory: []
            },
            reducers: {
                setSelectedTab: (e,l)=>{
                    e.selectedTab = l.payload
                }
                ,
                setSearch: (e,l)=>{
                    e.search = l.payload
                }
                ,
                setCategory: (e,l)=>{
                    e.tokenCategory = l.payload
                }
            }
        })
          , {setSearch: n, setSelectedTab: r, setCategory: o} = t.actions;
        l.ZP = t.reducer
    },
    36747: function(e, l, i) {
        i.d(l, {
            g: function() {
                return o
            }
        });
        var a = i(81630)
          , t = i.n(a)
          , n = i(82749);
        i(45936);
        var r = i(62601);
        class o {
            async fetch(e) {
                let l = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""
                  , i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
                  , a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}
                  , n = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {}
                  , o = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : r.env.NEXT_PUBLIC_PORTAL_BASE_URL
                  , s = "".concat(o).concat(l)
                  , {payload: d, queryName: c} = this.getPayload(e, i)
                  , u = t().create({
                    baseURL: s
                });
                u.interceptors.request.use(e=>e);
                try {
                    let l = await t()({
                        method: e,
                        url: s,
                        [c]: d,
                        headers: {
                            Accept: "application/json",
                            "Content-Type": "application/json",
                            "Access-Control-Allow-Origin": "*",
                            "x-api-key": this.key,
                            ...n
                        },
                        ...a
                    })
                      , i = {
                        data: l.data,
                        error: null,
                        isError: !1
                    };
                    return i
                } catch (e) {
                    return this.handleErorr(e)
                }
            }
            async fetchSelf(e) {
                let l = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""
                  , i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
                  , a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}
                  , n = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {}
                  , {payload: r, queryName: o} = this.getPayload(e, i)
                  , {headers: s, ...d} = a;
                try {
                    let i = await t()({
                        method: e,
                        url: "".concat(l),
                        [o]: r,
                        headers: {
                            Accept: "application/json",
                            "Content-Type": "application/json",
                            "Access-Control-Allow-Origin": "*",
                            "x-access-token": "fudracrhrovfxyhzxzlnbsufqomqzrkr",
                            ...n,
                            ...s
                        },
                        ...d
                    })
                      , a = {
                        data: i.data,
                        error: null,
                        isError: !1
                    };
                    return a
                } catch (e) {
                    return this.handleErorr(e)
                }
            }
            constructor() {
                this.key = "VHstbANMxPrUUFiIMOmUPHbWQ66GU0A5",
                this.handleErorr = async e=>{
                    var l, i, a, t, r, o, s, d, c, u, m, v;
                    let p = 400;
                    return (null === (l = e.response) || void 0 === l ? void 0 : l.data.status) === !1 && (p = 400),
                    (null === (t = e.response) || void 0 === t ? void 0 : null === (a = t.data) || void 0 === a ? void 0 : null === (i = a.data) || void 0 === i ? void 0 : i.statusCode) && (p = null === (m = e.response) || void 0 === m ? void 0 : null === (u = m.data) || void 0 === u ? void 0 : null === (c = u.data) || void 0 === c ? void 0 : c.statusCode),
                    (null == e ? void 0 : null === (r = e.response) || void 0 === r ? void 0 : r.status) && (p = null == e ? void 0 : null === (v = e.response) || void 0 === v ? void 0 : v.status),
                    401 === p && await (0,
                    n.signOut)({
                        redirect: !0,
                        callbackUrl: "/"
                    }),
                    {
                        data: null,
                        error: (null == e ? void 0 : null === (s = e.response) || void 0 === s ? void 0 : null === (o = s.data) || void 0 === o ? void 0 : o.data) || (null == e ? void 0 : null === (d = e.response) || void 0 === d ? void 0 : d.data),
                        isError: !0
                    }
                }
                ,
                this.getPayload = function(e) {
                    let l = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return {
                        payload: l,
                        queryName: "GET" === e || "DELETE" === e ? "params" : "data"
                    }
                }
            }
        }
    },
    49053: function(e, l, i) {
        var a, t;
        i.d(l, {
            a: function() {
                return a
            }
        }),
        (t = a || (a = {})).HP_CLIFFNEXT7D_CLICK = "hp_cliffnext7D_click",
        t.HP_CLIFFNEXT7D_CLICKONHOVER = "hp_cliffnext7D_clickonhover",
        t.HP_LINEARDAILY_CLICK = "hp_lineardaily_click",
        t.HP_LINEARDAILY_CLICKONHOVER = "hp_lineardaily_clickonhover",
        t.HP_RECENTLYADDED_CLICK = "hp_recentlyadded_click",
        t.ALL_SEARCH = "all_search",
        t.ALL_LOGIN = "all_login",
        t.ALL_LOGOUT = "all_logout",
        t.ALL_UNLOCKSAI_OPEN = "all_unlocksai_open",
        t.ALL_UNLOCKSAI_CLOSE = "all_unlocksai_close",
        t.PAGE_VISIT = "page_visit",
        t.HP_TOGGLEHIGHLIGHT_CLICK = "hp_togglehighlight_click",
        t.HP_TABLE_CLICK_TOKEN = "hp_table_click_token",
        t.HP_TABLE_SORT = "hp_table_sort",
        t.ALL_TRENDINGTOKEN_CLICK = "all_trendingtoken_click",
        t.TP_TABLE_CLICK_WATCHLIST = "tp_table_click_watchlist",
        t.TP_TOKENINFO_CLICK_UTILITY = "tp_tokeninfo_click_utility",
        t.TP_TOKENINFO_CLICK_ALERT = "tp_tokeninfo_click_alert",
        t.TP_TOOLTIPS_HOVER = "tp_tooltips_hover",
        t.TP_UNLOCKEVENTS_CLICK_PREVIOUS = "tp_unlockevents_click_previous",
        t.TP_UNLOCKEVENTS_CLICK_NEXT = "tp_unlockevents_click_next",
        t.TP_UNLOCKEVENTS_CLICK_UPGRADE = "tp_unlockevents_click_upgrade",
        t.TP_UNLOCKEVENTS_HOVER = "tp_unlockevents_hover",
        t.TP_VESTINGALLOCATION_TOGGLE_BASICALLO = "tp_vestingallocation_toggle_basicallo",
        t.TP_VESTINGALLOCATION_TOGGLE = "tp_vestingallocation_toggle",
        t.TP_CHART_RANGESLIDER_DRAG = "tp_chart_rangeslider_drag",
        t.TP_CHART_CLICK_SCHEDULE = "tp_chart_click_schedule",
        t.TP_CHART_CLICK_RESOLUTION = "tp_chart_click_resolution",
        t.TP_CHART_CLICK_TIMEFRAME = "tp_chart_click_timeframe",
        t.TP_CHART_CLICK_PRICE = "tp_chart_click_price",
        t.TP_PROCHART_CLICK_PRICE = "tp_prochart_click_price",
        t.TP_CHART_CLICK_CLAIM = "tp_chart_click_claim",
        t.TP_PROCHART_CLICK_CLAIM = "tp_prochart_click_claim",
        t.ONBOARDMODAL_EXPLOREMORE = "onboardmodal_exploremore",
        t.ONBOARDMODAL_CONTINUE = "onboardmodal_continue",
        t.ONBOARDMODAL_DONTSHOW = "onboardmodal_dontshow",
        t.TP_CHART_CLICK_CUMTOGGLE = "tp_chart_click_cumtoggle",
        t.ALL_INSIGHTS_CLICKBLOG = "all_insights_clickblog",
        t.ALL_INSIGHTS_SEEMORE = "all_insights_seemore"
    },
    49210: function(e, l, i) {
        i.d(l, {
            a: function() {
                return u
            }
        });
        var a = i(93728)
          , t = i(14440)
          , n = i(62949)
          , r = i(40234)
          , o = i(69980)
          , s = i(88847)
          , d = i(57961);
        let c = async e=>{
            let l = await (0,
            a.j)().use(t.Z).use(n.Z, {
                allowDangerousHtml: !0
            }).use(r.Z).use(o.Z).use(d.Z).use(s.Z).process(e);
            return l.toString()
        }
          , u = async e=>await c(e || "")
    },
    48315: function(e, l, i) {
        i.d(l, {
            F: function() {
                return a
            }
        });
        let a = e=>e ? "".concat(e.slice(0, 6), "…").concat(e.slice(-8, -1)) : "No Account"
    },
    63846: function(e, l, i) {
        i.r(l),
        i.d(l, {
            References: function() {
                return u
            }
        });
        var a = i(57437);
        i(2265);
        var t = i(77999)
          , n = i(86163)
          , r = i(71554)
          , o = i(24383)
          , s = i(16122)
          , d = i(42599)
          , c = i(91466);
        let u = e=>{
            let {className: l, tokenName: i, tokenLinks: u, tokenTags: m, dataReferences: v, chainTokens: p, platform: h} = e;
            return (0,
            a.jsxs)(n.Card, {
                padding: "md",
                className: l,
                children: [(0,
                a.jsx)(n.Typography, {
                    variant: "h5",
                    fontWeight: "semibold",
                    color: "black",
                    className: "mb-[24px]",
                    children: "References"
                }), (0,
                a.jsxs)("div", {
                    className: "flex flex-col gap-[12px]",
                    children: [(0,
                    a.jsxs)("div", {
                        className: "flex items-center justify-between",
                        children: [(0,
                        a.jsx)(n.Typography, {
                            variant: "body",
                            fontWeight: "medium",
                            color: "black-terteriary",
                            children: "Contract"
                        }), (0,
                        a.jsx)(r.N, {
                            addresses: p
                        })]
                    }), (0,
                    a.jsx)(n.Divider, {}), h !== t.i.DEFAULT && (0,
                    a.jsxs)(a.Fragment, {
                        children: [(0,
                        a.jsxs)("div", {
                            className: "flex items-center justify-between",
                            children: [(0,
                            a.jsx)(n.Typography, {
                                variant: "body",
                                fontWeight: "medium",
                                color: "black-terteriary",
                                children: "Data provided by"
                            }), (0,
                            a.jsx)(s.TokenProvidedBy, {
                                providedBy: t.$[h]
                            })]
                        }), (0,
                        a.jsx)(n.Divider, {})]
                    }), (0,
                    a.jsxs)("div", {
                        className: "flex items-center justify-between",
                        children: [(0,
                        a.jsx)(n.Typography, {
                            variant: "body",
                            fontWeight: "medium",
                            color: "black-terteriary",
                            children: "Social community"
                        }), (0,
                        a.jsx)(d.h, {
                            links: u.slice(0, 3)
                        })]
                    }), (0,
                    a.jsx)(n.Divider, {}), 0 !== v.length && (0,
                    a.jsxs)(a.Fragment, {
                        children: [(0,
                        a.jsxs)("div", {
                            className: "flex items-center justify-between",
                            children: [(0,
                            a.jsx)(n.Typography, {
                                variant: "body",
                                fontWeight: "medium",
                                color: "black-terteriary",
                                children: "Data reference"
                            }), (0,
                            a.jsx)(o.r, {
                                dataReferences: v
                            })]
                        }), (0,
                        a.jsx)(n.Divider, {})]
                    }), 0 !== m.length && (0,
                    a.jsxs)("div", {
                        className: "flex items-center justify-between",
                        children: [(0,
                        a.jsx)(n.Typography, {
                            variant: "body",
                            fontWeight: "medium",
                            color: "black-terteriary",
                            children: "Tag"
                        }), (0,
                        a.jsx)(c.TokenTags, {
                            name: i,
                            tags: m
                        })]
                    })]
                })]
            })
        }
    },
    71554: function(e, l, i) {
        i.d(l, {
            N: function() {
                return m
            }
        });
        var a = i(57437)
          , t = i(2265)
          , n = i(68022)
          , r = i(48315)
          , o = i(86163)
          , s = i(96008)
          , d = i(68356)
          , c = i(7404);
        let u = e=>{
            let {chainIcon: l, chainName: i, address: u} = e
              , [m,v] = (0,
            t.useState)(!1)
              , [,p] = (0,
            n.Z)();
            return (0,
            a.jsxs)(o.Button, {
                size: "sm",
                fullWidth: !0,
                className: (0,
                c.cx)("cursor-default !justify-between gap-[8px] border-transparent !p-[6px]", "enabled:hover:bg-black-background", "dark:enabled:hover:bg-black-dark-background"),
                children: [(0,
                a.jsxs)("div", {
                    className: "flex items-center gap-[8px]",
                    children: [(0,
                    a.jsx)(o.Avatar, {
                        size: "sm",
                        src: l,
                        alt: i
                    }), (0,
                    a.jsxs)("div", {
                        className: "flex flex-col gap-[4px]",
                        children: [(0,
                        a.jsx)(o.Typography, {
                            variant: "caption",
                            fontWeight: "medium",
                            color: "black-secondary",
                            children: i
                        }), (0,
                        a.jsx)(o.Typography, {
                            variant: "body",
                            fontWeight: "medium",
                            color: "black",
                            children: (0,
                            r.F)(u)
                        })]
                    })]
                }), (0,
                a.jsx)(s.Tooltip, {
                    open: m,
                    placement: "top",
                    title: (0,
                    a.jsx)(o.Typography, {
                        variant: "body",
                        fontWeight: "medium",
                        color: "black",
                        children: "Copied"
                    }),
                    children: (0,
                    a.jsx)(d.TI, {
                        className: "h-[16px] w-[16px] cursor-pointer text-primary dark:text-primary-dark",
                        onClick: ()=>{
                            v(!0),
                            p(u),
                            setTimeout(()=>{
                                v(!1)
                            }
                            , 500)
                        }
                    })
                })]
            })
        }
          , m = e=>{
            var l, i;
            let {addresses: c, typographyProps: m} = e
              , [v,p] = (0,
            t.useState)(!1)
              , [,h] = (0,
            n.Z)()
              , x = null !== (l = null == c ? void 0 : c.find(e=>"ethereum" === e.chainId)) && void 0 !== l ? l : null == c ? void 0 : c[0];
            return (0,
            a.jsxs)("div", {
                className: "flex items-center gap-[4px]",
                children: [(0,
                a.jsx)(o.Avatar, {
                    size: "xs",
                    src: null == x ? void 0 : x.chain.icon,
                    alt: null == x ? void 0 : x.chain.name
                }), (0,
                a.jsx)(o.Typography, {
                    variant: "body",
                    fontWeight: "medium",
                    color: "primary",
                    ...m,
                    children: (0,
                    r.F)(null == x ? void 0 : x.address)
                }), (0,
                a.jsx)(s.Tooltip, {
                    open: v,
                    title: (0,
                    a.jsx)(o.Typography, {
                        variant: "body",
                        fontWeight: "medium",
                        color: "black",
                        children: "Copied"
                    }),
                    children: (0,
                    a.jsx)(d.TI, {
                        className: "h-[16px] w-[16px] cursor-pointer text-primary dark:text-primary-dark",
                        onClick: (i = null == x ? void 0 : x.address,
                        ()=>{
                            p(!0),
                            h(i),
                            setTimeout(()=>{
                                p(!1)
                            }
                            , 500)
                        }
                        )
                    })
                }), (0,
                a.jsx)(s.Tooltip, {
                    arrow: !1,
                    title: (0,
                    a.jsx)("div", {
                        className: "flex flex-col gap-[4px]",
                        children: null == c ? void 0 : c.map((e,l)=>(0,
                        a.jsx)(u, {
                            chainIcon: e.chain.icon,
                            chainName: e.chain.name,
                            address: e.address
                        }, "".concat(e.address, "-").concat(l)))
                    }),
                    children: (0,
                    a.jsx)(d.v4, {
                        className: "h-[16px] w-[16px] cursor-pointer text-primary dark:text-primary-dark"
                    })
                })]
            })
        }
    },
    24383: function(e, l, i) {
        i.d(l, {
            r: function() {
                return d
            }
        });
        var a = i(57437)
          , t = i(61396)
          , n = i.n(t);
        i(2265);
        var r = i(86163)
          , o = i(96008)
          , s = i(68356);
        let d = e=>{
            let {dataReferences: l, className: i} = e;
            return (0,
            a.jsx)(o.Tooltip, {
                arrow: !1,
                title: (0,
                a.jsx)("div", {
                    className: "flex min-w-[134px] flex-col gap-[4px]",
                    children: null == l ? void 0 : l.map((e,l)=>(0,
                    a.jsx)(n(), {
                        href: e.url,
                        target: "_blank",
                        children: (0,
                        a.jsxs)(r.Button, {
                            variant: "ghost",
                            size: "sm",
                            fullWidth: !0,
                            className: "!justify-start gap-[4px] !p-[4px]",
                            children: [(0,
                            a.jsx)(s.VD, {
                                className: "h-[16px] w-[16px]"
                            }), (0,
                            a.jsx)(r.Typography, {
                                variant: "body",
                                fontWeight: "medium",
                                color: "black",
                                children: e.label
                            })]
                        })
                    }, l))
                }),
                children: (0,
                a.jsx)(r.Button, {
                    variant: "muted",
                    size: "md",
                    startIcon: (0,
                    a.jsx)(s.MP, {
                        className: "h-[16px] w-[16px] text-[16px] text-black-primary dark:text-black-dark-primary"
                    }),
                    endIcon: (0,
                    a.jsx)(s.v4, {
                        className: "h-[16px] w-[16px] text-[16px] text-black-terteriary dark:text-black-dark-terteriary"
                    }),
                    className: i,
                    children: "References"
                })
            })
        }
    },
    42599: function(e, l, i) {
        i.d(l, {
            h: function() {
                return m
            }
        });
        var a = i(57437)
          , t = i(7404)
          , n = i(61396)
          , r = i.n(n);
        i(2265);
        var o = i(86163)
          , s = i(96008)
          , d = i(68356);
        let c = "h-[20px] w-[20px] cursor-pointer"
          , u = {
            website: (0,
            a.jsx)(d.VD, {
                className: c
            }),
            twitter: (0,
            a.jsx)(d.hF, {
                className: c
            }),
            gitbook: (0,
            a.jsx)(d.de, {
                className: c
            })
        }
          , m = e=>{
            let {links: l, className: i} = e;
            return (0,
            a.jsx)("div", {
                className: (0,
                t.cx)("flex items-center gap-[16px]", i),
                children: l.map(e=>(0,
                a.jsx)(s.Tooltip, {
                    title: (0,
                    a.jsx)(o.Typography, {
                        variant: "body",
                        fontWeight: "medium",
                        color: "black",
                        children: null == e ? void 0 : e.label
                    }),
                    placement: "bottom",
                    children: (0,
                    a.jsx)(r(), {
                        href: e.url,
                        target: "_blank",
                        children: u[e.label.toLowerCase()]
                    })
                }, e.label))
            })
        }
    },
    36130: function(e, l, i) {
        i.r(l),
        i.d(l, {
            DetailSection: function() {
                return E
            }
        });
        var a = i(57437)
          , t = i(6435)
          , n = i(2265)
          , r = i(46383)
          , o = i(84511)
          , s = i(70967)
          , d = i(79895)
          , c = i(69025)
          , u = i(77607)
          , m = i(49053)
          , v = i(53902)
          , p = i(68356)
          , h = i(86163)
          , x = i(7404)
          , b = i(7727)
          , g = i(56547);
        let k = e=>{
            let[l,i] = (0,
            n.useState)(0)
              , a = (0,
            b.Z)("(min-width: 768px)")
              , t = (0,
            n.useMemo)(()=>{
                let l = null == e ? void 0 : e.findIndex(e=>(null == e ? void 0 : e.variant) === "primary");
                if (-1 !== l)
                    return l;
                let i = e.findIndex(e=>(null == e ? void 0 : e.title) === "upgrade");
                return -1 !== i ? null == e ? void 0 : e.findLastIndex(e=>!!(null == e ? void 0 : e.precision)) : (null == e ? void 0 : e.filter(e=>null == e ? void 0 : e.data).length) - 1
            }
            , [e]);
            return a ? {
                upcomingIndex: t,
                activePagination: [t - 1 + l, t + l, t + 1 + l],
                offset: l,
                toPagination: [0, 0, 1, 2, 2],
                offsetToPagination: [-2, -1, 0, 1, 2].slice({
                    1: 2,
                    2: 1,
                    3: 0
                }[t]),
                setOffset: i
            } : {
                upcomingIndex: t,
                activePagination: [t + l],
                offset: l,
                toPagination: [0, 1, 2, 3, 4],
                offsetToPagination: [, , , , , ].fill(0).map((e,l)=>l - t),
                setOffset: i
            }
        }
        ;
        var f = i(55249)
          , y = i(60589)
          , j = i(61396)
          , N = i.n(j);
        let C = ()=>{
            let {track: e} = (0,
            u.g)();
            return (0,
            a.jsxs)("div", {
                className: "flex h-full flex-col items-center justify-center gap-[16px] rounded-[8px] bg-background p-[16px] dark:bg-background-dark",
                children: [(0,
                a.jsxs)("div", {
                    className: "flex flex-col items-center gap-[8px]",
                    children: [(0,
                    a.jsx)("div", {
                        className: "rounded-[16px] bg-black-background p-[4px] dark:bg-black-dark-background",
                        children: (0,
                        a.jsx)(p.xM, {
                            className: "h-[32px] w-[32px] text-black-primary dark:text-black-dark-primary"
                        })
                    }), (0,
                    a.jsxs)(h.Typography, {
                        variant: "h5",
                        fontWeight: "semibold",
                        color: "black",
                        className: "text-center",
                        children: ["Discover more", (0,
                        a.jsx)("br", {}), " past & upcoming unlock events."]
                    }), (0,
                    a.jsx)(h.Typography, {
                        variant: "body",
                        fontWeight: "medium",
                        color: "black-terteriary",
                        className: "text-center",
                        children: "Unlock the past and embrace the future with 2 past and 3 upcoming events"
                    })]
                }), (0,
                a.jsx)(N(), {
                    onClick: ()=>e(m.a.TP_UNLOCKEVENTS_CLICK_UPGRADE),
                    href: "/pricing",
                    children: (0,
                    a.jsx)(h.Button, {
                        variant: "primary",
                        size: "md",
                        startIcon: (0,
                        a.jsx)(p.T$, {
                            className: "h-[16px] w-[16px] text-white-primary dark:text-white-dark-primary"
                        }),
                        children: (0,
                        a.jsx)(h.Typography, {
                            variant: "subtitle",
                            fontWeight: "semibold",
                            color: "white",
                            children: "Upgrade"
                        })
                    })
                })]
            })
        }
          , T = {
            base: "h-[16px] w-[16px] text-[16px] text-black-primary dark:text-black-dark-primary",
            disabled: "!text-black-disabled dark:!text-black-dark-disabled"
        }
          , _ = "h-[4px] w-[32px] rounded-[1px] cursor-pointer"
          , w = e=>{
            let {events: l, token: i, className: t} = e
              , [r,o] = (0,
            n.useState)({
                isBeginning: !1,
                isEnd: !1
            })
              , {track: s} = (0,
            u.g)()
              , [d,c] = (0,
            n.useState)(null)
              , [v,j] = (0,
            n.useState)(!1)
              , {upcomingIndex: N, activePagination: w, offset: E, toPagination: S, offsetToPagination: L, setOffset: I} = k(l)
              , A = (0,
            b.Z)("(min-width: 768px)")
              , O = (0,
            n.useMemo)(()=>0 === l.length, [l.length])
              , P = (0,
            n.useCallback)(()=>{
                s(m.a.TP_UNLOCKEVENTS_CLICK_PREVIOUS),
                null == d || d.slidePrev()
            }
            , [d, s])
              , D = (0,
            n.useCallback)(()=>{
                s(m.a.TP_UNLOCKEVENTS_CLICK_NEXT),
                null == d || d.slideNext()
            }
            , [d, s])
              , R = (0,
            n.useCallback)(e=>()=>{
                null == d || d.slideTo(e)
            }
            , [d])
              , M = (0,
            n.useMemo)(()=>{
                let e = null == l ? void 0 : l.findIndex(e=>(null == e ? void 0 : e.variant) === "primary");
                return A ? -1 !== e ? e - 1 : (null == l ? void 0 : l.filter(e=>null == e ? void 0 : e.data).length) - 2 : -1 !== e ? e : (null == l ? void 0 : l.filter(e=>null == e ? void 0 : e.data).length) - 1
            }
            , [l, A]);
            return (0,
            n.useEffect)(()=>{
                d && o({
                    isBeginning: d.isBeginning,
                    isEnd: d.isEnd
                })
            }
            , [d]),
            (0,
            a.jsxs)("div", {
                className: (0,
                x.cx)("relative flex flex-col gap-[16px]", t),
                children: [(0,
                a.jsxs)("div", {
                    className: "flex items-center gap-[8px]",
                    children: [(0,
                    a.jsx)(h.Typography, {
                        variant: "h5",
                        fontWeight: "semibold",
                        color: "black",
                        className: "whitespace-nowrap",
                        children: "Unlock events"
                    }), (0,
                    a.jsx)(h.Divider, {}), !O && (0,
                    a.jsxs)("div", {
                        className: "flex items-center gap-[8px]",
                        children: [(0,
                        a.jsx)(h.Button, {
                            variant: "muted",
                            size: "sm",
                            className: "!p-[4px]",
                            onClick: P,
                            disabled: r.isBeginning,
                            children: (0,
                            a.jsx)(p.wy, {
                                className: (0,
                                x.cx)(T.base, r.isBeginning && T.disabled)
                            })
                        }), (0,
                        a.jsx)(h.Button, {
                            variant: "muted",
                            size: "sm",
                            className: "!p-[4px]",
                            onClick: D,
                            disabled: r.isEnd,
                            children: (0,
                            a.jsx)(p.XC, {
                                className: (0,
                                x.cx)(T.base, r.isEnd && T.disabled)
                            })
                        })]
                    })]
                }), O ? (0,
                a.jsx)(f.NoMoreUnlockEvent, {}) : (0,
                a.jsxs)(a.Fragment, {
                    children: [!v && (0,
                    a.jsxs)(a.Fragment, {
                        children: [(0,
                        a.jsx)("div", {
                            className: "relative box-content hidden h-full w-full gap-[16px] tablet:flex",
                            children: l.reduce((e,l,t)=>([N - 1 + E, N + E, N + 1 + E].includes(t) && (l ? "upgrade" === l.title ? e.push((0,
                            a.jsx)("div", {
                                className: "relative flex items-center justify-center flex-1 w-full h-full text-center shrink-0",
                                children: (0,
                                a.jsx)(C, {})
                            }, t)) : e.push((0,
                            a.jsx)("div", {
                                className: "relative flex items-center justify-center flex-1 w-full h-full text-center shrink-0",
                                children: (0,
                                a.jsx)(y.UnlockEventCard, {
                                    variant: l.variant,
                                    title: l.title,
                                    unlockEvent: l,
                                    token: i
                                })
                            }, t)) : e.push((0,
                            a.jsx)("div", {
                                className: "relative flex items-center justify-center flex-1 w-full h-full text-center shrink-0",
                                children: (0,
                                a.jsx)(f.NoMoreUnlockEvent, {})
                            }, t))),
                            e), [])
                        }), (0,
                        a.jsx)("div", {
                            className: "relative box-content flex h-full w-full gap-[16px] tablet:hidden",
                            children: l.reduce((e,l,t)=>([N + E].includes(t) && (l ? "upgrade" === l.title ? e.push((0,
                            a.jsx)("div", {
                                className: "relative flex items-center justify-center flex-1 w-full h-full text-center shrink-0",
                                children: (0,
                                a.jsx)(C, {})
                            }, t)) : e.push((0,
                            a.jsx)("div", {
                                className: "relative flex items-center justify-center flex-1 w-full h-full text-center shrink-0",
                                children: (0,
                                a.jsx)(y.UnlockEventCard, {
                                    variant: l.variant,
                                    title: l.title,
                                    unlockEvent: l,
                                    token: i
                                })
                            }, t)) : e.push((0,
                            a.jsx)("div", {
                                className: "relative flex items-center justify-center flex-1 w-full h-full text-center shrink-0",
                                children: (0,
                                a.jsx)(f.NoMoreUnlockEvent, {})
                            }, t))),
                            e), [])
                        })]
                    }), (0,
                    a.jsx)(g.tq, {
                        initialSlide: M,
                        onSwiper: c,
                        onAfterInit: e=>{
                            j(!0),
                            e.wrapperEl.classList.remove("hidden")
                        }
                        ,
                        onSlideChange: e=>{
                            o({
                                isBeginning: e.isBeginning,
                                isEnd: e.isEnd
                            })
                        }
                        ,
                        onResize: e=>{
                            o({
                                isBeginning: e.isBeginning,
                                isEnd: e.isEnd
                            })
                        }
                        ,
                        onRealIndexChange: e=>{
                            I(L[e.realIndex])
                        }
                        ,
                        className: "relative w-full h-full overflow-hidden touch-pan-y",
                        wrapperClass: "flex relative w-full h-full box-content hidden",
                        spaceBetween: 16,
                        slidesPerView: 1,
                        breakpoints: {
                            768: {
                                slidesPerView: 3,
                                allowTouchMove: !1
                            }
                        },
                        children: l.map((e,l)=>e ? "upgrade" === e.title ? (0,
                        a.jsx)(g.o5, {
                            className: "relative flex items-center justify-center w-full h-full text-center shrink-0",
                            children: (0,
                            a.jsx)(C, {})
                        }, l) : (0,
                        a.jsx)(g.o5, {
                            className: "relative flex items-center justify-center w-full h-full text-center shrink-0",
                            children: (0,
                            a.jsx)(y.UnlockEventCard, {
                                variant: e.variant,
                                title: e.title,
                                unlockEvent: e,
                                token: i
                            })
                        }, l) : (0,
                        a.jsx)(g.o5, {
                            className: "relative flex items-center justify-center w-full h-full text-center shrink-0",
                            children: (0,
                            a.jsx)(f.NoMoreUnlockEvent, {})
                        }, l))
                    })]
                }), (0,
                a.jsx)("div", {
                    className: "absolute bottom-[-16px] flex gap-[2px] self-center",
                    children: l.map((e,l)=>e && "primary" === e.variant ? (0,
                    a.jsx)("div", {
                        className: (0,
                        x.cx)(_, "bg-primary dark:bg-primary-dark"),
                        onClick: R(S[l])
                    }, l) : w.includes(l) ? (0,
                    a.jsx)("div", {
                        className: (0,
                        x.cx)(_, "bg-primary-secondary dark:bg-primary-dark-secondary"),
                        onClick: R(S[l])
                    }, l) : (0,
                    a.jsx)("div", {
                        className: (0,
                        x.cx)(_, "bg-black-disabled dark:bg-black-dark-disabled"),
                        onClick: R(S[l])
                    }, l))
                })]
            })
        }
          , E = e=>{
            var l;
            let {tokenDetail: i, tokenEmission: n, tokenTotalLock: x, tokenUnlockEvents: b} = e
              , {resolvedTheme: g} = (0,
            t.F)()
              , {track: k} = (0,
            u.g)();
            return (0,
            a.jsxs)("div", {
                className: "container mx-auto mt-[32px] flex flex-col",
                children: [(0,
                a.jsx)(o.DisclaimerBadge, {
                    position: "HEADER_MESSAGE",
                    className: "mb-[24px] flex-col !items-start !justify-center laptop:flex-row laptop:!items-center laptop:!justify-start "
                }), (0,
                a.jsxs)("div", {
                    className: "grid grid-cols-1 laptop:grid-cols-3 laptop:gap-[16px] desktop:grid-cols-2",
                    children: [(0,
                    a.jsx)("div", {
                        className: "col-span-1 mb-[16px] self-stretch desktop:mb-[24px]",
                        children: (0,
                        a.jsx)(s.TokenDetailCard, {
                            suffixFullyDiluteValue: (0,
                            a.jsx)(r.N, {
                                title: "Fully Diluted Value",
                                type: "info",
                                tooltipClassName: "w-[198px]",
                                desciption: "The market cap if the max supply was in circulation. Some tokens might not have FDV due to emission."
                            }),
                            suffixCirculatingSupply: (0,
                            a.jsx)(r.N, {
                                title: "Circulating supply",
                                type: "info",
                                tooltipClassName: "w-[198px]",
                                desciption: "The amount of coins that are circulating in the market and are in public hands(liquid asset)."
                            }),
                            suffixMaxSupply: (0,
                            a.jsx)(r.N, {
                                title: "Max Supply",
                                type: "info",
                                tooltipClassName: "w-[198px]",
                                desciption: "The maximum amount of coins that will ever exist in the lifetime of the cryptocurrency. Some token might not have max supply due to the emission."
                            }),
                            className: "h-full",
                            ...i
                        })
                    }), (0,
                    a.jsx)(d.TokenEmissionCard, {
                        tokenEmission: {
                            ...n.tokenEmission,
                            title: (0,
                            a.jsxs)("div", {
                                className: "flex items-center gap-x-[4px]",
                                onMouseEnter: ()=>{
                                    k(m.a.TP_TOOLTIPS_HOVER, {
                                        location: "1 Year Emission"
                                    })
                                }
                                ,
                                children: [(0,
                                a.jsx)(h.Typography, {
                                    variant: "h5",
                                    fontWeight: "medium",
                                    color: "black",
                                    children: "1 Year Emission"
                                }), (0,
                                a.jsx)(r.N, {
                                    title: "1 Year Emission",
                                    tooltipClassName: "w-[198px]",
                                    type: "info",
                                    desciption: "Rate of token released to circulation. Inflation(unlocked, new issued)"
                                })]
                            }),
                            suffixContent: (0,
                            a.jsxs)("div", {
                                children: [(0,
                                a.jsx)(h.Typography, {
                                    variant: "h3",
                                    fontWeight: "medium",
                                    fontType: "number",
                                    children: (null === (l = n.tokenEmission) || void 0 === l ? void 0 : l.amountToCirculatingSupplyPercent) ? (0,
                                    v.T3)(n.tokenEmission.amountToCirculatingSupplyPercent, {
                                        decimal: n.tokenEmission.amountToCirculatingSupplyPercent < .01 ? 3 : 1
                                    }) : "- -"
                                }), (0,
                                a.jsx)("div", {
                                    className: "flex items-center justify-end gap-x-[4px]",
                                    children: (0,
                                    a.jsx)(h.Typography, {
                                        className: "text-right",
                                        variant: "body",
                                        fontWeight: "medium",
                                        color: "black-terteriary",
                                        children: "of Cir. supply"
                                    })
                                })]
                            }),
                            helperLabel: (0,
                            a.jsx)(h.Typography, {
                                variant: "caption",
                                fontWeight: "semibold",
                                color: "black-terteriary",
                                children: "No emission"
                            })
                        },
                        dailyInflation: {
                            ...n.dailyInflation,
                            title: (0,
                            a.jsx)(h.Typography, {
                                variant: "body",
                                fontWeight: "medium",
                                color: "black",
                                children: "Prev. 7 Days Inflation"
                            }),
                            suffixTitle: (0,
                            a.jsx)("div", {
                                className: "rounded-[6px] bg-black-background p-[3px] dark:bg-black-dark-background",
                                children: (0,
                                a.jsx)(p.Z, {
                                    className: "text-[18px] text-black dark:text-black-dark"
                                })
                            }),
                            helperLabel: (0,
                            a.jsx)(h.Typography, {
                                variant: "caption",
                                fontWeight: "semibold",
                                color: "black-terteriary",
                                children: "No inflation"
                            })
                        },
                        dailyDeflation: {
                            ...n.dailyDeflation,
                            title: (0,
                            a.jsxs)("div", {
                                className: "flex items-center gap-x-[4px]",
                                onMouseEnter: ()=>k(m.a.TP_TOOLTIPS_HOVER, {
                                    location: "Prev. 7 Days Deflation"
                                }),
                                children: [(0,
                                a.jsx)(h.Typography, {
                                    variant: "body",
                                    fontWeight: "medium",
                                    color: "black",
                                    children: "Prev. 7 Days Deflation"
                                }), (0,
                                a.jsx)(r.N, {
                                    title: "Prev. 7 Days Deflation",
                                    type: "info",
                                    tooltipClassName: "w-[198px]",
                                    desciption: "Actual deflation, tracked from historical burn. Update daily."
                                })]
                            }),
                            suffixTitle: (0,
                            a.jsx)("div", {
                                className: "rounded-[6px] bg-black-background p-[3px] dark:bg-black-dark-background",
                                children: (0,
                                a.jsx)(p.p3, {
                                    className: "text-[18px]  text-black dark:text-black-dark"
                                })
                            }),
                            helperLabel: (0,
                            a.jsx)(h.Typography, {
                                variant: "caption",
                                fontWeight: "semibold",
                                color: "black-terteriary",
                                children: "No deflation"
                            })
                        },
                        dailyNetEmission: {
                            ...n.dailyNetEmission,
                            title: (0,
                            a.jsx)(h.Typography, {
                                variant: "body",
                                fontWeight: "medium",
                                color: "black",
                                children: "Prev. 7 Days Net Emission"
                            }),
                            helperLabel: (0,
                            a.jsx)(h.Typography, {
                                variant: "caption",
                                fontWeight: "semibold",
                                color: "black-terteriary",
                                children: "No emission"
                            })
                        },
                        className: "col-span-2 mb-[16px] self-stretch desktop:col-span-1 desktop:mb-[24px]"
                    })]
                }), (0,
                a.jsxs)("div", {
                    className: "mb-[24px] grid grid-cols-1 desktop:grid-cols-4 desktop:gap-[16px]",
                    children: [(0,
                    a.jsx)("div", {
                        className: "col-span-1 mb-[16px] desktop:mb-0",
                        children: (0,
                        a.jsx)(c.TotalLockCard, {
                            theme: g,
                            suffixTitle: (0,
                            a.jsx)(o.DisclaimerBadge, {
                                type: "tooltip",
                                position: "TOTAL_UNLOCKS_PROGRESS"
                            }),
                            ...x
                        })
                    }), (0,
                    a.jsx)(w, {
                        ...b,
                        className: "col-span-3"
                    })]
                })]
            })
        }
    },
    56011: function(e, l, i) {
        i.r(l),
        i.d(l, {
            HeaderSection: function() {
                return w
            }
        });
        var a = i(57437)
          , t = i(7404)
          , n = i(2265)
          , r = i(77999)
          , o = i(77607)
          , s = i(49053)
          , d = i(86163)
          , c = i(96008)
          , u = i(68356)
          , m = i(82749)
          , v = i(3198)
          , p = i(88128)
          , h = i(9835)
          , x = i(35254);
        let b = "h-[16px] w-[16px] text-[16px]"
          , g = "text-white-primary dark:text-white-dark-primary"
          , k = e=>{
            let {tokenId: l, tokenName: i} = e
              , {status: r} = (0,
            m.useSession)()
              , {subscribe: o, unSubscribe: s} = (0,
            h.Q)()
              , {redirectSignIn: c} = (0,
            p.l)()
              , k = (0,
            v.v9)(e=>e.subscription.list)
              , {user: f} = (0,
            x.a)()
              , y = (0,
            n.useMemo)(()=>"authenticated" === r, [r])
              , j = (0,
            n.useMemo)(()=>null == k ? void 0 : k.includes(l), [k, l])
              , N = async()=>{
                if (!y) {
                    c();
                    return
                }
                j ? await s(l, i, null == f ? void 0 : f.id, l) : await o(l, i, null == f ? void 0 : f.id, l)
            }
            ;
            return (0,
            a.jsxs)("div", {
                className: "flex items-center gap-[8px]",
                children: [!1, (0,
                a.jsx)(d.Button, {
                    variant: "primary",
                    size: "md",
                    className: "!px-[8px]",
                    startIcon: j ? (0,
                    a.jsx)(u.e0, {
                        className: (0,
                        t.cx)(b, g)
                    }) : (0,
                    a.jsx)(u.r7, {
                        className: (0,
                        t.cx)(b, g)
                    }),
                    onClick: N,
                    children: (0,
                    a.jsx)(d.Typography, {
                        variant: "subtitle",
                        fontWeight: "semibold",
                        color: "white",
                        className: "hidden tablet:block",
                        children: j ? "Remove from Watchlist" : "Add to Watchlist"
                    })
                })]
            })
        }
        ;
        var f = i(71554)
          , y = i(24383)
          , j = i(12641)
          , N = i(16122)
          , C = i(42454)
          , T = i(42599)
          , _ = i(91466);
        let w = e=>{
            var l;
            let {tokenId: i, tokenName: n, tokenSymbol: m, tokenIcon: v, tokenLinks: p, tokenTags: h, dataReferences: x, chainTokens: b, platform: g, coingeckoRank: w, versionType: E} = e
              , {track: S} = (0,
            o.g)()
              , L = [0 !== b.length && (0,
            a.jsx)(f.N, {
                addresses: b
            }, "addresses"), g !== r.i.DEFAULT && (0,
            a.jsx)(N.TokenProvidedBy, {
                providedBy: null === (l = r.$) || void 0 === l ? void 0 : l[g],
                className: "mr-[4px]"
            }, "platform"), w && (0,
            a.jsx)(C.TokenRank, {
                rank: w.toString(),
                className: "mr-[4px]"
            }, "rank"), 0 !== h.length && (0,
            a.jsx)(_.TokenTags, {
                name: n,
                tags: h
            }, "tags")].filter(e=>e).reduce((e,l,i)=>(0 !== i && e.push((0,
            a.jsx)(u.ZN, {
                className: "h-[16px] w-[16px] text-black-disabled dark:text-black-dark-disabled"
            }, i)),
            e.push(l),
            e), []);
            return (0,
            a.jsx)("div", {
                className: "bg-background dark:bg-background-dark",
                children: (0,
                a.jsxs)("div", {
                    className: "container mx-auto mt-[32px] flex flex-col",
                    children: [(0,
                    a.jsxs)("div", {
                        className: "mb-[16px] flex items-center justify-between",
                        children: [(0,
                        a.jsxs)("div", {
                            className: "flex items-center gap-[16px]",
                            children: [(0,
                            a.jsx)(d.Avatar, {
                                className: (0,
                                t.cx)("border-[6px] border-black-background dark:border-black-dark-background", "mobile:border-[8px]", "tablet:h-[64px] tablet:w-[64px]"),
                                size: "md",
                                src: v
                            }), (0,
                            a.jsxs)("div", {
                                className: "flex flex-col gap-[4px]",
                                children: [(0,
                                a.jsx)(j.TokenName, {
                                    name: n,
                                    symbol: m,
                                    versionType: E
                                }), (0,
                                a.jsx)("div", {
                                    className: "hidden items-center gap-[4px] laptop:flex",
                                    children: L
                                })]
                            })]
                        }), (0,
                        a.jsxs)("div", {
                            className: "flex flex-col-reverse items-end gap-[16px] self-end desktop:flex-row desktop:items-center",
                            children: [(0 !== p.length || 0 !== x.length) && (0,
                            a.jsxs)(a.Fragment, {
                                children: [(0,
                                a.jsxs)("div", {
                                    className: "flex items-center gap-[16px]",
                                    children: [0 !== p.length && (0,
                                    a.jsx)(T.h, {
                                        links: p.slice(0, 3),
                                        className: "hidden laptop:flex"
                                    }), 0 !== x.length && (0,
                                    a.jsx)(y.r, {
                                        dataReferences: x,
                                        className: "hidden laptop:flex"
                                    })]
                                }), (0,
                                a.jsx)(d.Divider, {
                                    className: "hidden !h-auto self-stretch !border-black-background dark:!border-black-dark-background desktop:block",
                                    vertical: !0
                                })]
                            }), (0,
                            a.jsx)(k, {
                                tokenId: i,
                                tokenName: n
                            })]
                        })]
                    }), (0,
                    a.jsx)("div", {
                        className: "overflow-x-auto",
                        children: (0,
                        a.jsx)(c.Tabs, {
                            onClick: ()=>void 0,
                            tabs: [{
                                label: "Overview",
                                key: "Overview"
                            }, {
                                label: (0,
                                a.jsxs)(a.Fragment, {
                                    children: [(0,
                                    a.jsx)(d.Typography, {
                                        variant: "subtitle",
                                        className: "whitespace-nowrap",
                                        onClick: ()=>{
                                            S(s.a.TP_TOKENINFO_CLICK_UTILITY)
                                        }
                                        ,
                                        children: "Token utilities"
                                    }), (0,
                                    a.jsx)(d.Chip, {
                                        variant: "light",
                                        text: "SOON",
                                        className: "ml-[8px]"
                                    })]
                                }),
                                key: "Token utilities",
                                disabled: !0
                            }, {
                                label: (0,
                                a.jsxs)(a.Fragment, {
                                    children: [(0,
                                    a.jsx)(d.Typography, {
                                        variant: "subtitle",
                                        className: "whitespace-nowrap",
                                        onClick: ()=>{
                                            S(s.a.TP_TOKENINFO_CLICK_ALERT)
                                        }
                                        ,
                                        children: "Alert"
                                    }), (0,
                                    a.jsx)(d.Chip, {
                                        variant: "light",
                                        text: "SOON",
                                        className: "ml-[8px]"
                                    })]
                                }),
                                key: "Alert",
                                disabled: !0
                            }],
                            active: "Overview",
                            className: "flex-nowrap",
                            underline: !1,
                            maunalContent: !0
                        })
                    })]
                })
            })
        }
    },
    51994: function(e, l, i) {
        i.r(l),
        i.d(l, {
            VestingSection: function() {
                return eg
            }
        });
        var a = i(57437)
          , t = i(2265)
          , n = i(95637)
          , r = i(84605);
        let o = {
            [r.Vf.DAY]: [],
            [r.Vf.WEEK]: [],
            [r.Vf.MONTH]: [],
            [r.Vf.YEAR]: []
        };
        var s = i(77607)
          , d = i(36747)
          , c = i(35299)
          , u = i(54131)
          , m = i(67133).Buffer;
        let v = async e=>{
            try {
                if (!e)
                    return null;
                let l = m.from("8Z546hjJV7kKvP3M", "utf8")
                  , i = m.from("76be93966ef2ffcc3e5b4bc4636913b0408eeb60b21a8d231077b2f458965a03", "hex")
                  , a = u.createDecipheriv("aes-256-ctr", i, l)
                  , t = m.concat([a.update(m.from(null == e ? void 0 : e.toString("hex"), "hex")), a.final()]);
                if (!t || (null == t ? void 0 : t.toString()) === "")
                    return null;
                let n = JSON.parse(t.toString());
                return (0,
                c.Lj)(n)
            } catch (e) {
                console.error(e)
            }
        }
        ;
        class p extends d.g {
            constructor(...e) {
                super(...e),
                this.fetchChart = async(e,l,i,a,t)=>{
                    let n = await fetch("/api/vesting/chart/".concat(e, "/").concat(l, "/").concat(i, "/").concat(a, "/").concat(t), {
                        next: {
                            revalidate: r.i0,
                            tags: [e, l, a, i, t]
                        }
                    })
                      , o = await n.json()
                      , s = await v(o.data.chart);
                    return {
                        chartData: s,
                        chartType: l,
                        resolution: t
                    }
                }
            }
        }
        let h = new p;
        var x = i(49053)
          , b = i(86163)
          , g = i(96008)
          , k = i(7404);
        let f = (0,
        k.j)(["bg-background rounded-[8px] flex flex-col justify-center w-full h-full shadow-level-3", "dark:bg-background-dark"])
          , y = (0,
        t.forwardRef)(function(e, l) {
            let {children: i, className: t, ...n} = e;
            return (0,
            a.jsx)("div", {
                className: f({
                    class: t
                }),
                ...n,
                ref: l,
                children: i
            })
        });
        var j = i(49614)
          , N = i.n(j)
          , C = i(55194)
          , T = i.n(C)
          , _ = i(6435)
          , w = i(9150)
          , E = i(42077)
          , S = i.n(E);
        let L = (0,
        t.memo)(e=>{
            let {allocationRef: l, onEvents: i} = e;
            return (0,
            a.jsx)(g.PieChart, {
                ref: e=>{
                    l.current = e
                }
                ,
                size: "md",
                options: {},
                onEvents: i
            })
        }
        , (e,l)=>S()(e.allocationRef, l.allocationRef));
        N().theme.extend.colors;
        let I = (0,
        t.memo)(e=>{
            let {allocationRef: l, allocations: i, legends: n, total: r, token: o, handleClickLegend: s} = e
              , [d,c] = (0,
            t.useState)()
              , [u,m] = (0,
            t.useState)(!0)
              , {colors: v} = (0,
            w.J)()
              , {resolvedTheme: p} = (0,
            _.F)()
              , h = (0,
            t.useMemo)(()=>i.map(e=>({
                value: e.amount,
                name: e.name
            })), [i])
              , x = (0,
            t.useMemo)(()=>i.map(e=>e.color), [i])
              , b = (0,
            t.useMemo)(()=>({
                type: "scroll",
                orient: "vertical",
                left: "100%"
            }), [])
              , g = (0,
            t.useMemo)(()=>({
                mouseover: e=>{
                    e.data && (m(!1),
                    c(e.data))
                }
                ,
                click: e=>{
                    var l;
                    s(null == e ? void 0 : null === (l = e.data) || void 0 === l ? void 0 : l.name)
                }
            }), [s]);
            return (0,
            t.useEffect)(()=>{
                (null == d ? void 0 : d.name) && !n[d.name] && (c(null),
                m(!0))
            }
            , [null == d ? void 0 : d.name, n]),
            (0,
            t.useEffect)(()=>{
                var e, i, a, t;
                let o = {
                    color: x,
                    legend: b,
                    series: [{
                        type: "pie",
                        radius: ["70%", "90%"],
                        avoidLabelOverlap: !1,
                        label: {
                            show: !1
                        },
                        labelLine: {
                            show: !1
                        },
                        data: h,
                        universalTransition: !0
                    }],
                    graphic: {
                        type: "group",
                        left: "center",
                        top: "middle",
                        children: [{
                            type: "circle",
                            left: "center",
                            top: "middle",
                            shape: {
                                r: 45
                            },
                            style: {
                                fill: "light" === p ? v.background.DEFAULT : v.background.dark.DEFAULT,
                                stroke: "light" === p ? v.black.disabled : v.black.dark.disabled,
                                lineWidth: 2
                            }
                        }, {
                            type: "group",
                            left: "center",
                            top: "middle",
                            children: [{
                                type: "text",
                                style: {
                                    fill: "light" === p ? N().theme.extend.colors.black.primary : N().theme.extend.colors.black.dark.primary,
                                    text: (null == d ? void 0 : d.value) && T()(d.value).divide(r).format("0%"),
                                    fontSize: "24px",
                                    fontFamily: "Inter",
                                    fontWeight: 600,
                                    textAlign: "center"
                                }
                            }, {
                                type: "text",
                                style: {
                                    fill: "light" === p ? v.black.secondary : v.black.dark.secondary,
                                    text: "\n\n".concat((null == d ? void 0 : d.name) ? d.name.length > 8 ? d.name.slice(0, 8).concat("...") : d.name : ""),
                                    fontSize: "12px",
                                    fontFamily: "Inter",
                                    fontWeight: 400,
                                    textAlign: "center"
                                }
                            }]
                        }]
                    }
                };
                if (null == l ? void 0 : l.current)
                    for (let r in null === (i = l.current) || void 0 === i || null === (e = i.getEchartsInstance()) || void 0 === e || e.setOption(o, !1),
                    n)
                        null == l || null === (t = l.current) || void 0 === t || null === (a = t.getEchartsInstance()) || void 0 === a || a.dispatchAction({
                            type: n[r] ? "legendSelect" : "legendUnSelect",
                            name: r
                        })
            }
            , [l, x, v, h, d, u, b, n, p, null == o ? void 0 : o.symbolIcon, r]),
            (0,
            a.jsxs)("div", {
                className: "relative ",
                children: [(0,
                a.jsx)(L, {
                    allocationRef: l,
                    onEvents: g
                }), u && (0,
                a.jsx)("div", {
                    className: "absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2",
                    children: (0,
                    a.jsx)("img", {
                        src: null == o ? void 0 : o.symbolIcon,
                        height: 48,
                        width: 48,
                        className: "rounded-full ",
                        alt: "TokenUnlocks | Token Icon"
                    })
                })]
            })
        }
        , (e,l)=>S()(e.allocations, l.allocations) && S()(e.legends, l.legends));
        var A = i(89031)
          , O = i(84511)
          , P = i(92767);
        let D = {
            "Founder / Team": "FOUNDER_TEAM",
            "Public Investors": "PUBLIC_INVESTORS",
            Reserved: "RESERVED",
            "Community & Other": "COMMUNITY_OTHER",
            "Private Investors": "PRIVATE_INVESTORS"
        }
          , R = (0,
        t.memo)(e=>{
            let {id: l, label: i, color: n, value: r, percentage: o, symbol: s, checked: d, descriptions: c, isLast: u, isBasicAllocation: m, onClick: v} = e
              , {getDisclaimerByPosition: p} = (0,
            P.x)()
              , h = (0,
            t.useMemo)(()=>{
                if (m) {
                    let e = D[i];
                    return p(e)
                }
                return p("ALLOCATION_LIST", l)
            }
            , [m, p, l, i]);
            return (0,
            a.jsxs)(a.Fragment, {
                children: [(0,
                a.jsxs)("div", {
                    className: "flex justify-between cursor-pointer select-none",
                    onClick: v,
                    children: [(0,
                    a.jsxs)("div", {
                        className: "flex items-center gap-[8px]",
                        children: [(0,
                        a.jsx)(g.Toggle, {
                            size: "sm",
                            name: i,
                            checked: d,
                            style: {
                                background: d && n
                            },
                            className: "focus:shadow-[0_0px_0px_2px_rgba(142,142,142,0.12)]"
                        }), (0,
                        a.jsx)("div", {
                            className: (0,
                            k.cx)("flex items-center", h ? "w-[60px]" : "w-[90px]"),
                            children: (0,
                            a.jsx)(g.Tooltip, {
                                title: (0,
                                a.jsx)(b.Typography, {
                                    variant: "body",
                                    fontWeight: "medium",
                                    children: i
                                }),
                                children: (0,
                                a.jsx)(b.Typography, {
                                    variant: "body",
                                    fontWeight: "medium",
                                    className: (0,
                                    k.cx)(" truncate", d ? "text-black-primary dark:text-black-dark-primary" : "text-black-disabled dark:text-black-dark-disabled"),
                                    children: i
                                })
                            })
                        })]
                    }), (0,
                    a.jsxs)("div", {
                        className: "flex items-center",
                        children: [(0,
                        a.jsx)(O.DisclaimerBadge, {
                            type: "tooltip",
                            position: m ? D[i] : "ALLOCATION_LIST",
                            allocationId: m ? void 0 : l,
                            className: "mr-[4px]",
                            tooltipClassName: "w-[300px]"
                        }), (0,
                        a.jsx)(b.Typography, {
                            variant: "body",
                            fontWeight: "normal",
                            className: (0,
                            k.cx)(d ? "text-black-primary dark:text-black-dark-primary" : "text-black-disabled dark:text-black-dark-disabled", "mr-[4px] w-[50px] text-right"),
                            children: "0" === r ? "--" : (0,
                            A.mU)(r)
                        }), (0,
                        a.jsx)(b.Chip, {
                            text: s,
                            variant: "light",
                            className: "mr-[4px]"
                        }), (0,
                        a.jsx)(b.Typography, {
                            variant: "body",
                            fontWeight: "medium",
                            className: (0,
                            k.cx)("mr-[4px] w-[32px] text-right", d ? "text-black-terteriary dark:text-black-dark-terteriary" : "text-black-disabled dark:text-black-dark-disabled"),
                            children: "0" === r ? "--" : "".concat((0,
                            A.yX)(o, 1, 1), "%")
                        })]
                    })]
                }), !u && (0,
                a.jsx)(b.Divider, {
                    className: "my-[12px]"
                })]
            })
        }
        , (e,l)=>S()(e.checked, l.checked));
        var M = i(74548)
          , U = i.n(M)
          , W = i(46383);
        let F = e=>{
            var l, i, n;
            let {allocations: r, legends: o, handleClickLegend: s, handleToggleAllLegend: d, token: c, isShowAllLegend: u, isBasicAllocation: m, handleToggleBasicAllocation: v, lastUpdated: p, sortPriority: h, isHiddenUnlockDescription: x} = e
              , f = (0,
            t.useRef)(null)
              , j = (0,
            t.useMemo)(()=>r.reduce((e,l)=>e + Number(l.amount), 0), [r]);
            (0,
            t.useEffect)(()=>{
                let e = f.current.getEchartsInstance();
                for (let l in o)
                    null == e || e.dispatchAction({
                        type: o[l] ? "legendSelect" : "legendUnSelect",
                        name: l
                    })
            }
            , [o]);
            let N = (0,
            t.useMemo)(()=>{
                var e;
                return (null == r ? void 0 : null === (e = r.filter(e=>!e.isInitialAllocation)) || void 0 === e ? void 0 : e.length) > 0
            }
            , [r]);
            return (0,
            a.jsxs)(y, {
                className: (0,
                k.cx)("!h-[720px] !justify-start p-[16px] laptop:sticky laptop:top-[65px] ", x ? "laptop:!h-full" : "laptop:!h-[calc(100vh-65px)]"),
                children: [(0,
                a.jsx)("div", {
                    className: "flex items-center justify-between",
                    children: (0,
                    a.jsx)(b.Typography, {
                        variant: "h5",
                        fontWeight: "medium",
                        color: "black",
                        children: "Allocations"
                    })
                }), (0,
                a.jsx)("div", {
                    className: "mt-[16px] flex justify-center",
                    children: (0,
                    a.jsx)(I, {
                        allocationRef: f,
                        allocations: r,
                        legends: o,
                        total: j,
                        token: c,
                        handleClickLegend: s
                    })
                }), (0,
                a.jsxs)("div", {
                    className: "mb-[16px] flex items-center justify-center gap-[8px]",
                    onClick: ()=>v(!m),
                    children: [(0,
                    a.jsx)(g.Toggle, {
                        size: "sm",
                        name: "basicAllocation",
                        checked: m,
                        className: (0,
                        k.cx)("focus:shadow-[0_0px_0px_2px_rgba(142,142,142,0.12)]", m ? "bg-chart-c1  dark:bg-chart-dark-c1" : "bg-black-terteriary dark:bg-black-dark-terteriary")
                    }), (0,
                    a.jsx)(b.Typography, {
                        variant: "body",
                        fontWeight: "medium",
                        className: m ? "text-black-primary dark:text-black-dark-primary" : "text-black-disabled dark:text-black-dark-disabled",
                        children: "Standard allocations"
                    }), (0,
                    a.jsx)(W.N, {
                        title: "Standard allocations",
                        desciption: (0,
                        a.jsxs)(b.Typography, {
                            variant: "body",
                            color: "black-secondary",
                            className: "break-words ",
                            fontWeight: "medium",
                            children: ["A tokenomics standard that groups allocations into a simple group for easy understanding and comparison across projects. For more definitions", " ", (0,
                            a.jsx)("a", {
                                href: "https://docs.unlocks.app/docs/miscellaneous/standard-allocation",
                                target: "_blank",
                                className: " text-symmetric-info dark:text-symmetric-dark-info",
                                children: "read here"
                            })]
                        }),
                        type: "info"
                    })]
                }), (0,
                a.jsxs)("div", {
                    className: "flex flex-col",
                    children: [(0,
                    a.jsxs)("div", {
                        className: "my-[20px] flex items-center justify-between",
                        children: [(0,
                        a.jsx)(b.Typography, {
                            variant: "subtitle",
                            fontWeight: "medium",
                            color: "black-terteriary",
                            children: m ? "Initial allocations" : "Allocations"
                        }), (0,
                        a.jsxs)(b.Typography, {
                            variant: "body",
                            fontWeight: "medium",
                            color: "primary",
                            className: "cursor-pointer ",
                            onClick: d,
                            children: [u ? "Hide" : "Show", " all"]
                        })]
                    }), (0,
                    a.jsxs)("div", {
                        className: (0,
                        k.cx)(m && N ? "h-[160px] overflow-y-auto laptop:h-[200px]" : "h-[375px] overflow-y-auto laptop:h-fit laptop:max-h-[505px]", "w-full  overflow-x-hidden"),
                        children: [null == r ? void 0 : null === (l = r.filter(e=>e.isInitialAllocation)) || void 0 === l ? void 0 : l.sort((e,l)=>l.amount - e.amount).map((e,l)=>{
                            var i, t;
                            return (0,
                            a.jsx)(R, {
                                isBasicAllocation: m,
                                id: e.allocationId,
                                color: null !== (t = null == e ? void 0 : e.color) && void 0 !== t ? t : "#AFAFAF",
                                symbol: null == c ? void 0 : c.symbol,
                                value: null === (i = e.amount) || void 0 === i ? void 0 : i.toString(),
                                percentage: (null == e ? void 0 : e.amount) ? T()(e.amount).divide(j).multiply(100).value().toString() : "0",
                                label: e.name,
                                checked: o[e.name],
                                isLast: l === r.length - 1,
                                onClick: ()=>s(e.name)
                            }, "list-".concat(e.name, "-").concat(l))
                        }
                        ), " "]
                    })]
                }), m && N && (0,
                a.jsxs)("div", {
                    className: "flex flex-col",
                    children: [(0,
                    a.jsxs)("div", {
                        className: "my-[20px] flex items-center justify-between",
                        children: [(0,
                        a.jsx)(b.Typography, {
                            variant: "subtitle",
                            fontWeight: "medium",
                            color: "black-terteriary",
                            children: "Other allocations"
                        }), (0,
                        a.jsxs)(b.Typography, {
                            variant: "body",
                            fontWeight: "medium",
                            color: "primary",
                            className: "cursor-pointer ",
                            onClick: d,
                            children: [u ? "Hide" : "Show", " all"]
                        })]
                    }), (0,
                    a.jsx)("div", {
                        className: "h-[160px] w-full overflow-y-auto overflow-x-hidden pb-[8px] laptop:!h-[200px]",
                        children: null == r ? void 0 : null === (i = r.filter(e=>!e.isInitialAllocation)) || void 0 === i ? void 0 : i.sort((e,l)=>l.amount - e.amount).map((e,l)=>{
                            var i;
                            return (0,
                            a.jsx)(R, {
                                isBasicAllocation: m,
                                id: e.allocationId,
                                color: null !== (n = null == e ? void 0 : e.color) && void 0 !== n ? n : "#AFAFAF",
                                symbol: null == c ? void 0 : c.symbol,
                                value: null === (i = e.amount) || void 0 === i ? void 0 : i.toString(),
                                percentage: T()(e.amount).divide(j).multiply(100).value().toString(),
                                label: e.name,
                                checked: o[e.name],
                                isLast: l === r.length - 1,
                                onClick: ()=>s(e.name)
                            }, "list-".concat(e.name, "-").concat(l))
                        }
                        )
                    })]
                }), (0,
                a.jsxs)("div", {
                    className: "mt-auto flex items-center rounded-[8px] bg-black-background px-[12px] py-[8px] dark:bg-black-dark-background",
                    children: [(0,
                    a.jsx)(b.Typography, {
                        variant: "subtitle",
                        fontWeight: "semibold",
                        children: "Last updated"
                    }), (0,
                    a.jsx)(b.Typography, {
                        variant: "body",
                        fontWeight: "medium",
                        className: "ml-[8px]",
                        children: p ? U()(p).format("DD/MM/YY hh:mm A") : "-"
                    })]
                })]
            })
        }
        ;
        var H = i(49210);
        let B = e=>{
            let[l,i] = (0,
            t.useState)()
              , {source: n} = e
              , r = (0,
            t.useCallback)(async()=>{
                let e = await (0,
                H.a)(n);
                i(e)
            }
            , [n]);
            return (0,
            t.useEffect)(()=>{
                r()
            }
            , [r]),
            (0,
            a.jsx)("div", {
                className: "p-[16px]",
                children: (0,
                a.jsx)(b.Typography, {
                    variant: "body",
                    fontWeight: "light",
                    color: "black",
                    component: "span",
                    children: (0,
                    a.jsx)("div", {
                        dangerouslySetInnerHTML: {
                            __html: l
                        }
                    })
                })
            })
        }
          , V = e=>{
            let {allocations: l, isHiddenUnlockDescription: i} = e
              , n = [{
                title: (0,
                a.jsx)(b.Typography, {
                    variant: "body",
                    fontWeight: "semibold",
                    color: "black",
                    className: "p-[16px]",
                    children: "Allocation"
                }),
                dataIndex: "segment",
                key: "segment",
                className: "whitespace-nowrap"
            }, {
                title: (0,
                a.jsx)(b.Typography, {
                    variant: "body",
                    fontWeight: "semibold",
                    color: "black",
                    className: "p-[16px]",
                    children: "Amount"
                }),
                dataIndex: "amount",
                key: "amount",
                className: "whitespace-nowrap"
            }, {
                title: (0,
                a.jsx)(b.Typography, {
                    variant: "body",
                    fontWeight: "semibold",
                    color: "black",
                    className: "p-[16px]",
                    children: "Description"
                }),
                dataIndex: "detail",
                key: "detail",
                className: "w-full"
            }]
              , r = (0,
            t.useMemo)(()=>l.map(e=>({
                segment: (0,
                a.jsx)("div", {
                    className: "h-full p-[16px]",
                    children: (0,
                    a.jsx)(b.Typography, {
                        variant: "body",
                        fontWeight: "semibold",
                        children: e.name
                    })
                }),
                amount: (0,
                a.jsx)("div", {
                    className: "h-full p-[16px]",
                    children: (0,
                    a.jsx)(b.Typography, {
                        variant: "body",
                        fontWeight: "semibold",
                        className: "h-full",
                        children: T()(e.amount).format("0,0.00a")
                    })
                }),
                detail: (0,
                a.jsx)(B, {
                    source: e.description
                })
            })), [l]);
            return i ? null : (0,
            a.jsxs)(a.Fragment, {
                children: [(0,
                a.jsx)(b.Divider, {}), (0,
                a.jsxs)("div", {
                    className: "flex flex-col gap-y-[16px] p-[16px]",
                    children: [(0,
                    a.jsx)(b.Typography, {
                        variant: "h5",
                        color: "black",
                        fontWeight: "semibold",
                        children: "Unlocks Description"
                    }), (0,
                    a.jsx)("div", {
                        className: "max-w-full",
                        children: (0,
                        a.jsx)("div", {
                            className: "overflow-hidden rounded-[8px] border border-black-background dark:border-black-dark-background",
                            children: (0,
                            a.jsx)(g.RawTable, {
                                columns: n,
                                data: r,
                                className: (0,
                                k.cx)("[&_.rc-table-thead]:bg-black-background [&_.rc-table-thead]:dark:bg-black-dark-background", "[&_td]:border-t [&_td]:border-black-background [&_td]:dark:border-black-dark-background", "[&_.rc-table-cell]:h-full [&_.rc-table-cell]:align-top")
                            })
                        })
                    })]
                })]
            })
        }
        ;
        var K = i(24033)
          , z = i(3198)
          , G = i(77999)
          , Z = i(35254)
          , Y = i(68356)
          , J = i(61396)
          , X = i.n(J);
        let q = e=>(null == e ? void 0 : e.href) ? (0,
        a.jsx)(X(), {
            href: null == e ? void 0 : e.href,
            children: null == e ? void 0 : e.children
        }) : (0,
        a.jsx)(t.Fragment, {
            children: null == e ? void 0 : e.children
        })
          , $ = e=>{
            var l, i, n, o, s, d, c, u;
            let {scale: m, resolution: v, isDisabledMenu: p, isBasicAllocation: h, chartStatus: x, selectedVestingScheduleChart: k, selectedPriceChart: f, selectedClaimedChart: y, isCumulative: j, handleToggleCumulative: N, handleClickMenu: C, handleToggleBasicAllocation: T, handleClickDatePeriod: _, handleChangeResolution: w} = e
              , {user: E} = (0,
            Z.a)()
              , S = (0,
            z.v9)(e=>{
                var l, i;
                return null === (i = e.vesting) || void 0 === i ? void 0 : null === (l = i.detail) || void 0 === l ? void 0 : l.tokenInfo
            }
            )
              , L = (0,
            K.useRouter)()
              , I = (0,
            t.useCallback)((e,l)=>{
                var i, a, t, n, r, o;
                let s = void 0 !== l && !(null == x ? void 0 : x[l]);
                return (null == E ? void 0 : E.id) && ((null == E ? void 0 : null === (i = E.roles) || void 0 === i ? void 0 : i.includes("PRO")) || (null == E ? void 0 : null === (a = E.roles) || void 0 === a ? void 0 : a.includes("TEAM"))) && s ? {
                    disabled: !0,
                    link: !1
                } : 0 === e || (null == E ? void 0 : null === (t = E.roles) || void 0 === t ? void 0 : t.includes("PRO")) || (null == E ? void 0 : null === (n = E.roles) || void 0 === n ? void 0 : n.includes("TEAM")) ? {
                    disabled: !1,
                    link: !1
                } : ((null == E ? void 0 : E.id) && (null == E ? void 0 : null === (r = E.roles) || void 0 === r ? void 0 : r.includes("PRO")) && null != E && null !== (o = E.roles) && void 0 !== o && o.includes("TEAM"),
                {
                    disabled: !1,
                    link: !0
                })
            }
            , [x, null == E ? void 0 : E.id, null == E ? void 0 : E.roles]);
            return (0,
            a.jsxs)(a.Fragment, {
                children: [(0,
                a.jsxs)("div", {
                    className: " flex gap-[4px] overflow-x-auto p-[16px] ",
                    children: [(0,
                    a.jsx)(b.ButtonChip, {
                        selected: k,
                        size: "md",
                        disabled: null === (l = I(0, "vestings")) || void 0 === l ? void 0 : l.disabled,
                        onClick: ()=>C(r._w.VESTING_SCHEDULE),
                        endIcon: k ? (0,
                        a.jsx)(Y.r$, {}) : (0,
                        a.jsx)(Y.oF, {}),
                        children: (0,
                        a.jsx)(b.Typography, {
                            variant: "h5",
                            children: r._w.VESTING_SCHEDULE
                        })
                    }), (0,
                    a.jsx)(q, {
                        href: (null === (i = I(1, "price")) || void 0 === i ? void 0 : i.link) ? "/pricing" : void 0,
                        children: (0,
                        a.jsxs)(b.ButtonChip, {
                            selected: f,
                            size: "md",
                            disabled: null === (n = I(1, "price")) || void 0 === n ? void 0 : n.disabled,
                            onClick: ()=>{
                                var e;
                                return (null === (e = I(1, "price")) || void 0 === e ? void 0 : e.link) ? void 0 : C(r._w.PRICE)
                            }
                            ,
                            endIcon: f ? (0,
                            a.jsx)(Y.r$, {}) : (0,
                            a.jsx)(Y.oF, {}),
                            children: [(0,
                            a.jsx)(b.Typography, {
                                variant: "h5",
                                children: r._w.PRICE
                            }), (0,
                            a.jsx)(b.Chip, {
                                text: "PRO",
                                variant: "invert"
                            })]
                        })
                    }), S.platform === G.i.DEFAULT && (0,
                    a.jsx)(q, {
                        href: (null === (o = I(2, "claims")) || void 0 === o ? void 0 : o.link) ? "/pricing" : void 0,
                        children: (0,
                        a.jsxs)(b.ButtonChip, {
                            selected: y,
                            size: "md",
                            disabled: null === (s = I(2, "claims")) || void 0 === s ? void 0 : s.disabled,
                            onClick: ()=>{
                                var e;
                                return (null === (e = I(2, "claims")) || void 0 === e ? void 0 : e.link) ? void 0 : C(r._w.CLAIMED)
                            }
                            ,
                            endIcon: y ? (0,
                            a.jsx)(Y.r$, {}) : (0,
                            a.jsx)(Y.oF, {}),
                            children: [(0,
                            a.jsx)(b.Typography, {
                                variant: "h5",
                                children: r._w.CLAIMED
                            }), (0,
                            a.jsx)(b.Chip, {
                                text: "PRO",
                                variant: "invert"
                            })]
                        })
                    })]
                }), (0,
                a.jsx)(b.Divider, {}), (0,
                a.jsx)("div", {
                    className: "p-[16px]",
                    children: (0,
                    a.jsxs)("div", {
                        className: "flex flex-col justify-between gap-y-[16px] tablet:flex-row",
                        children: [(0,
                        a.jsxs)("div", {
                            className: "flex flex-col justify-center gap-[16px]  tablet:flex-row  tablet:items-center  laptop:flex-col laptop:items-start desktop:flex-row desktop:items-center desktop:gap-x-[24px]",
                            children: [(0,
                            a.jsxs)(b.Switcher, {
                                size: "sm",
                                className: "w-full max-w-fit",
                                children: [(0,
                                a.jsx)(b.SwitcherButton, {
                                    size: "sm",
                                    label: "Standard allocation",
                                    name: "Standard allocation",
                                    className: "w-full flex-1 whitespace-nowrap tablet:w-auto tablet:flex-initial",
                                    selected: h,
                                    onClick: ()=>T(!0)
                                }), (0,
                                a.jsx)(b.SwitcherButton, {
                                    size: "sm",
                                    label: "Full allocation",
                                    name: "Full allocation",
                                    className: "w-full flex-1 whitespace-nowrap tablet:w-auto tablet:flex-initial",
                                    selected: !h,
                                    onClick: ()=>T(!1)
                                })]
                            }), (0,
                            a.jsx)(q, {
                                href: (null === (d = I(1)) || void 0 === d ? void 0 : d.link) ? "/pricing" : void 0,
                                children: (0,
                                a.jsx)(g.Toggle, {
                                    name: "cumulative",
                                    checked: j,
                                    size: "sm",
                                    labelPosition: "right",
                                    onClick: ()=>{
                                        var e;
                                        return (null === (e = I(1)) || void 0 === e ? void 0 : e.link) ? L.push("/pricing") : void 0
                                    }
                                    ,
                                    onChange: (null === (c = I(1)) || void 0 === c ? void 0 : c.link) ? void 0 : N,
                                    label: (0,
                                    a.jsxs)("div", {
                                        className: "flex items-center gap-x-[8px]",
                                        children: [(0,
                                        a.jsx)(b.Typography, {
                                            variant: "body",
                                            fontWeight: "medium",
                                            color: "black",
                                            children: "Cumulative"
                                        }), (0,
                                        a.jsx)(b.Chip, {
                                            text: "PRO",
                                            variant: "invert"
                                        })]
                                    })
                                })
                            })]
                        }), (0,
                        a.jsxs)("div", {
                            className: "flex gap-[8px] tablet:flex-row tablet:items-center  laptop:flex-col laptop:items-end desktop:flex-row",
                            children: [(0,
                            a.jsx)(b.Switcher, {
                                size: "sm",
                                className: "flex-1 tablet:flex-initial",
                                children: null === (u = r.aw) || void 0 === u ? void 0 : u.map(e=>(0,
                                a.jsx)(b.SwitcherButton, {
                                    size: "sm",
                                    label: e.label,
                                    className: "w-full flex-1 tablet:w-auto tablet:flex-initial",
                                    name: e.value,
                                    selected: m === e.value,
                                    disabled: p,
                                    onClick: e=>_(e)
                                }, e.value))
                            }), (0,
                            a.jsx)(b.Switcher, {
                                size: "sm",
                                className: "max-w-fit",
                                children: r.UC.map(e=>(0,
                                a.jsx)(b.SwitcherButton, {
                                    size: "sm",
                                    label: e.label,
                                    name: e.value,
                                    disabled: p,
                                    className: "w-full flex-1 tablet:w-auto tablet:flex-initial",
                                    selected: v === e.value,
                                    onClick: e=>w(e)
                                }, e.value))
                            })]
                        })]
                    })
                }), (0,
                a.jsx)(b.Divider, {})]
            })
        }
          , Q = e=>{
            let {label: l, color: i, checked: t, onClick: n} = e;
            return (0,
            a.jsxs)("div", {
                className: "flex cursor-pointer select-none items-center gap-[6px]",
                onClick: n,
                children: [(0,
                a.jsx)("div", {
                    style: {
                        background: t ? i : "rgba(28, 28, 30, 0.35)"
                    },
                    className: "h-[10px] w-[10px] rounded-[2px]"
                }), (0,
                a.jsx)(b.Typography, {
                    variant: "body",
                    fontWeight: "medium",
                    className: t ? "text-black-primary dark:text-black-dark-primary" : "text-black-disabled dark:text-black-dark-disabled",
                    children: l
                })]
            })
        }
          , ee = (e,l,i)=>(a,t)=>{
            var n, r, o, s, d, c, u, m;
            let v = null == a ? void 0 : null === (r = a[e]) || void 0 === r ? void 0 : null === (n = r.toLocaleLowerCase()) || void 0 === n ? void 0 : n.replaceAll(" ", "_")
              , p = null == t ? void 0 : null === (s = t[e]) || void 0 === s ? void 0 : null === (o = s.toLocaleLowerCase()) || void 0 === o ? void 0 : o.replaceAll(" ", "_");
            return (null == i ? void 0 : i.reverse) ? Number(null == l ? void 0 : null === (u = l[v]) || void 0 === u ? void 0 : u.chartPriority) - Number(null == l ? void 0 : null === (m = l[p]) || void 0 === m ? void 0 : m.chartPriority) : Number(null == l ? void 0 : null === (d = l[p]) || void 0 === d ? void 0 : d.chartPriority) - Number(null == l ? void 0 : null === (c = l[v]) || void 0 === c ? void 0 : c.chartPriority)
        }
        ;
        var el = i(72085);
        let ei = ()=>(0,
        a.jsxs)("div", {
            className: "flex h-[600px] w-full flex-col items-center justify-center gap-y-[8px] rounded-[8px] bg-black-background dark:bg-black-dark-background",
            children: [(0,
            a.jsx)("div", {
                className: "rounded-[12px] bg-black-background p-[8px] dark:bg-black-dark-background ",
                children: (0,
                a.jsx)(b.Loading, {
                    size: "lg",
                    className: "!text-white dark:text-white-dark"
                })
            }), (0,
            a.jsx)(b.Typography, {
                variant: "h5",
                color: "black",
                fontWeight: "semibold",
                children: "Loading..."
            })]
        })
          , ea = ()=>(0,
        a.jsxs)("div", {
            className: "flex h-[600px] w-full flex-col items-center justify-center gap-y-[8px] rounded-[8px] bg-black-background dark:bg-black-dark-background",
            children: [(0,
            a.jsx)("div", {
                className: "rounded-[12px] bg-black-background p-[8px] dark:bg-black-dark-background ",
                children: (0,
                a.jsx)(Y.rI, {
                    className: "text-[32px] text-black dark:text-black-dark"
                })
            }), (0,
            a.jsx)(b.Typography, {
                variant: "h5",
                color: "black",
                fontWeight: "semibold",
                children: "Coming soon"
            }), (0,
            a.jsx)(b.Typography, {
                variant: "body",
                color: "black-terteriary",
                fontWeight: "medium",
                children: "Stay tuned for the upcoming unlock schedule announcement."
            })]
        });
        var et = i(38100)
          , en = i.n(et)
          , er = i(20135)
          , eo = i(63454);
        let es = e=>{
            let {color: l, title: i, amount: t, value: n, symbol: r, isPrice: o} = e;
            return (0,
            a.jsxs)("div", {
                className: "flex h-fit w-full items-center justify-between gap-x-[4px] gap-y-[2px] ",
                children: [(0,
                a.jsxs)("div", {
                    className: "flex h-fit items-center gap-x-[4px]",
                    children: [(0,
                    a.jsx)("div", {
                        className: " h-[10.67px] w-[10.67px] rounded-[3px]",
                        style: {
                            background: l
                        }
                    }), (0,
                    a.jsx)(b.Typography, {
                        variant: "body",
                        color: "black-secondary",
                        fontWeight: "medium",
                        className: "w-[89px] truncate capitalize tablet:w-[115px]",
                        children: i
                    })]
                }), (0,
                a.jsxs)("div", {
                    className: "flex h-fit items-center gap-[4px]",
                    children: [t && (0,
                    a.jsxs)(b.Typography, {
                        variant: "body",
                        color: "black",
                        className: "!text-right",
                        fontWeight: "medium",
                        children: [t, " ", r]
                    }), (0,
                    a.jsx)(b.Typography, {
                        variant: o ? "body" : "caption",
                        color: o ? "black" : "black-secondary",
                        className: (0,
                        k.cx)("!text-right", !o && "w-[48px]"),
                        fontWeight: "medium",
                        children: n
                    })]
                })]
            })
        }
        ;
        U().extend(en());
        let ed = e=>{
            var l, i, t, n, r, o, s, d, c, u, m, v, p, h;
            let {params: x, groupParams: g, symbol: k} = e;
            return (0,
            a.jsxs)("div", {
                className: "w-[320px] !p-[16px] tablet:w-[375px] ",
                children: [(0,
                a.jsxs)("div", {
                    className: "mb-[16px] flex items-center justify-between",
                    children: [(0,
                    a.jsx)(b.Typography, {
                        variant: "caption",
                        color: "black-secondary",
                        fontWeight: "semibold",
                        children: U()(null === (i = x[0]) || void 0 === i ? void 0 : null === (l = i.value) || void 0 === l ? void 0 : l[0]).utc().format("MMM DD, YYYY")
                    }), (0,
                    a.jsx)(b.Typography, {
                        variant: "caption",
                        color: "black-secondary",
                        fontWeight: "medium",
                        children: "UTC + 00:00"
                    })]
                }), (0,
                a.jsx)("div", {
                    className: "grid h-fit w-full  grid-cols-1 gap-[16px]",
                    children: (0,
                    a.jsxs)("div", {
                        className: "flex flex-col gap-y-[8px]",
                        children: [!!(null == g ? void 0 : null === (t = g[2]) || void 0 === t ? void 0 : t.length) && (0,
                        a.jsx)(a.Fragment, {
                            children: null == g ? void 0 : null === (n = g[2]) || void 0 === n ? void 0 : n.map(e=>{
                                var l;
                                return (0,
                                a.jsx)(es, {
                                    title: null == e ? void 0 : e.seriesName,
                                    value: (0,
                                    eo.T)(null == e ? void 0 : null === (l = e.value) || void 0 === l ? void 0 : l[1]),
                                    color: null == e ? void 0 : e.color,
                                    symbol: k,
                                    isPrice: !0
                                }, null == e ? void 0 : e.seriesName)
                            }
                            )
                        }), !!(null == g ? void 0 : null === (r = g[1]) || void 0 === r ? void 0 : r.length) && (0,
                        a.jsx)(a.Fragment, {
                            children: null == g ? void 0 : null === (o = g[1]) || void 0 === o ? void 0 : o.map(e=>{
                                var l, i;
                                return (0,
                                a.jsx)(es, {
                                    title: null == e ? void 0 : e.seriesName,
                                    amount: T()(null == e ? void 0 : null === (l = e.value) || void 0 === l ? void 0 : l[1]).format("0,0.00"),
                                    value: T()(null == e ? void 0 : null === (i = e.value) || void 0 === i ? void 0 : i[2]).format("$0,0.00a"),
                                    color: null == e ? void 0 : e.color,
                                    symbol: k
                                }, null == e ? void 0 : e.seriesName)
                            }
                            )
                        }), (!!(null == g ? void 0 : null === (s = g[1]) || void 0 === s ? void 0 : s.length) || !!(null == g ? void 0 : null === (d = g[2]) || void 0 === d ? void 0 : d.length)) && !!(null == g ? void 0 : null === (c = g[0]) || void 0 === c ? void 0 : c.length) && (0,
                        a.jsx)(b.Divider, {
                            className: "my-[8px]"
                        }), !!(null == g ? void 0 : null === (u = g[0]) || void 0 === u ? void 0 : u.length) && (0,
                        a.jsxs)(a.Fragment, {
                            children: [(0,
                            a.jsxs)("div", {
                                className: "flex h-fit items-center justify-between",
                                children: [(0,
                                a.jsx)(b.Typography, {
                                    variant: "caption",
                                    color: "black-secondary",
                                    children: "Total"
                                }), (0,
                                a.jsxs)("div", {
                                    className: "flex items-center gap-[4px]",
                                    children: [(0,
                                    a.jsxs)(b.Typography, {
                                        variant: "body",
                                        color: "black",
                                        fontWeight: "semibold",
                                        className: "!text-right",
                                        children: [T()(null == g ? void 0 : null === (m = g[0]) || void 0 === m ? void 0 : m.reduce((e,l)=>{
                                            var i;
                                            return e + (null == l ? void 0 : null === (i = l.value) || void 0 === i ? void 0 : i[1])
                                        }
                                        , 0)).format("0,0.00"), " ", k]
                                    }), (0,
                                    a.jsx)(b.Typography, {
                                        variant: "caption",
                                        color: "black-secondary",
                                        fontWeight: "medium",
                                        className: "w-[48px] !text-right",
                                        children: T()(null == g ? void 0 : null === (v = g[0]) || void 0 === v ? void 0 : v.reduce((e,l)=>{
                                            var i;
                                            return e + (null == l ? void 0 : null === (i = l.value) || void 0 === i ? void 0 : i[2])
                                        }
                                        , 0)).format("$0,0.00a")
                                    })]
                                })]
                            }), null == g ? void 0 : null === (h = g[0]) || void 0 === h ? void 0 : null === (p = h.reverse()) || void 0 === p ? void 0 : p.map(e=>{
                                var l, i;
                                return (0,
                                a.jsx)(es, {
                                    title: null == e ? void 0 : e.seriesName,
                                    amount: T()(null == e ? void 0 : null === (l = e.value) || void 0 === l ? void 0 : l[1]).format("0,0.00"),
                                    value: T()(null == e ? void 0 : null === (i = e.value) || void 0 === i ? void 0 : i[2]).format("$0,0.00a"),
                                    color: null == e ? void 0 : e.color,
                                    symbol: k
                                }, null == e ? void 0 : e.seriesName)
                            }
                            )]
                        })]
                    })
                })]
            })
        }
        ;
        var ec = i(74332)
          , eu = i(59329);
        U().extend(en());
        let em = e=>{
            var l, i, n;
            let {scheduleRef: o, isLoading: s, isEmptyChart: d, tokenSymbol: c, legends: u, isCumulative: m, selectedPriceChart: v, selectedClaimedChart: p, selectedVestingScheduleChart: h, resolution: x, vestings: b, claimed: g, price: k, allocationColors: f, sortPriority: y, dataZoom: j} = e
              , {resolvedTheme: N} = (0,
            _.F)()
              , {colors: C} = (0,
            w.J)()
              , T = (0,
            eu.k)()
              , E = (0,
            eu.a)(T.down.mobile)
              , S = (0,
            t.useMemo)(()=>"light" === N, [N])
              , L = (0,
            t.useMemo)(()=>({
                left: "64px",
                right: v ? "54px" : "16px",
                bottom: "100px",
                top: "16px",
                containLabel: !1
            }), [v])
              , I = (0,
            t.useMemo)(()=>({
                type: "slider",
                start: 0,
                end: 100,
                fillerColor: S ? C.primary.background : C.primary.dark.background,
                borderColor: S ? C.black.disabled : C.black.dark.disabled,
                dataBackground: {
                    areaStyle: {
                        color: S ? C.background.DEFAULT : C.background.dark.DEFAULT
                    },
                    lineStyle: {
                        color: S ? C.black.terteriary : C.black.dark.terteriary
                    }
                },
                selectedDataBackground: {
                    areaStyle: {
                        color: S ? C.background.DEFAULT : C.background.dark.DEFAULT
                    },
                    lineStyle: {
                        color: S ? C.black.terteriary : C.black.dark.terteriary
                    }
                },
                handleIcon: "image://https://space.unlocks.app/assets/icons/charts/drag-data-zoom-chart.webp",
                handleSize: 30,
                handleStyle: {
                    borderColor: S ? C.primary.background : C.primary.dark.background,
                    borderWidth: 1,
                    borderCap: "round",
                    borderJoin: "round"
                },
                labelFormatter: e=>U()(e).utc().format("DD MMM YYYY"),
                moveHandleStyle: {},
                height: 48,
                bottom: 10,
                ...j
            }), [j, C.background.DEFAULT, C.background.dark.DEFAULT, C.black.dark.disabled, C.black.dark.terteriary, C.black.disabled, C.black.terteriary, C.primary.background, C.primary.dark.background, S])
              , A = (0,
            t.useMemo)(()=>[{
                type: "group",
                z: -10,
                silent: !0,
                children: [{
                    type: "text",
                    left: 82,
                    top: 32,
                    z: -10,
                    silent: !0,
                    style: {
                        fill: S ? C.black.terteriary : C.black.dark.terteriary,
                        text: "Chart in UTC + 00:00 Time",
                        font: "500 10px Inter"
                    }
                }]
            }, {
                type: "image",
                left: "center",
                bottom: "center",
                z: -10,
                silent: !0,
                style: {
                    image: S ? "/static/images/logo-light.svg" : "/static/images/logo-dark.svg",
                    width: 230,
                    height: 40,
                    opacity: .5
                }
            }], [C.black.dark.terteriary, C.black.terteriary, S])
              , O = (0,
            t.useMemo)(()=>({
                type: "scatter",
                markArea: {
                    data: [[{
                        coord: [0, 0],
                        itemStyle: {
                            color: "dark" === N ? C.black.dark.background : C.black.background,
                            opacity: .3
                        }
                    }, {
                        coord: [Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER]
                    }]]
                }
            }), [C.black.background, C.black.dark.background, N])
              , P = (0,
            t.useMemo)(()=>({
                type: "line",
                data: [],
                markLine: {
                    symbol: "none",
                    legendHoverLink: !1,
                    lineStyle: {
                        color: "dark" === N ? C.black.dark.primary : C.black.primary,
                        width: 2,
                        type: "dashed",
                        cap: "butt"
                    },
                    emphasis: {
                        focus: "series",
                        disabled: !0
                    },
                    showSymbol: !1,
                    data: [{
                        name: "Today",
                        xAxis: U()().startOf("day").add(7, "h").valueOf(),
                        label: {
                            show: !0,
                            formatter: function() {
                                return "Today"
                            },
                            color: "dark" === N ? C.black.dark.primary : C.black.primary,
                            borderColor: "none",
                            borderWidth: 0
                        },
                        emphasis: {
                            focus: "series",
                            disabled: !0
                        }
                    }],
                    animation: !1
                }
            }), [C.black.dark.primary, C.black.primary, N])
              , D = (0,
            t.useMemo)(()=>({
                trigger: "axis",
                confine: !0,
                className: "!p-0 !bg-background/80  dark:!bg-background-dark/80 border-[1px] !border-black-disabled dark:!border-black-dark-disabled",
                axisPointer: {
                    axis: "x",
                    type: "cross"
                },
                textStyle: {
                    fontFamily: '"Inter",sans-serif !important'
                },
                formatter: e=>{
                    let l = [[], [], []];
                    return null == e || e.forEach(e=>{
                        var i, a, t, n;
                        switch (null === (i = e.seriesName) || void 0 === i ? void 0 : i.toLowerCase()) {
                        case null === (a = r.yZ.CLAIMED) || void 0 === a ? void 0 : a.toLowerCase():
                        case null === (t = r.yZ.UNLOCK) || void 0 === t ? void 0 : t.toLowerCase():
                            l[1].push(e);
                            break;
                        case null === (n = r.yZ.PRICE) || void 0 === n ? void 0 : n.toLowerCase():
                            l[2].push(e);
                            break;
                        default:
                            l[0].push(e)
                        }
                    }
                    ),
                    (0,
                    ec.Dq)((0,
                    a.jsx)(ed, {
                        symbol: c,
                        groupParams: l,
                        params: e
                    }))
                }
            }), [c])
              , R = (0,
            t.useCallback)(e=>{
                var l, i;
                let a = null !== (i = null == e ? void 0 : null === (l = e[0]) || void 0 === l ? void 0 : l.claims) && void 0 !== i ? i : []
                  , t = null == a ? void 0 : a.map(l=>{
                    var i, a;
                    return {
                        yAxisIndex: 1,
                        z: 50,
                        zIndex: 50,
                        type: "line",
                        step: "middle",
                        color: (null == l ? void 0 : l.label) === "claims" ? null == C ? void 0 : null === (i = C.chart) || void 0 === i ? void 0 : i.c1 : null == C ? void 0 : null === (a = C.chart) || void 0 === a ? void 0 : a.c5,
                        showSymbol: !1,
                        lineStyle: {
                            width: 2
                        },
                        areaStyle: {
                            opacity: .2
                        },
                        emphasis: {
                            focus: "series",
                            disabled: !0
                        },
                        name: (null == l ? void 0 : l.label) === "claims" ? "Claimed Amount" : "Unlock Amount",
                        data: null == e ? void 0 : e.map(e=>{
                            var i, a, t, n, r;
                            let o = null == e ? void 0 : null === (i = e.claims) || void 0 === i ? void 0 : i.findIndex(e=>(null == e ? void 0 : e.label) === (null == l ? void 0 : l.label));
                            return [U()(null == e ? void 0 : e.timestamp).utc().valueOf(), null == e ? void 0 : null === (t = e.claims) || void 0 === t ? void 0 : null === (a = t[o]) || void 0 === a ? void 0 : a.amount, null == e ? void 0 : null === (r = e.claims) || void 0 === r ? void 0 : null === (n = r[o]) || void 0 === n ? void 0 : n.value]
                        }
                        ),
                        animation: !0,
                        universalTransition: !0
                    }
                }
                );
                return t
            }
            , [C])
              , M = (0,
            t.useCallback)((e,l,i,a)=>{
                var t, n, r;
                let o = (null == e ? void 0 : null === (t = e[0]) || void 0 === t ? void 0 : t.vestings) ? [...null == e ? void 0 : null === (n = e[0]) || void 0 === n ? void 0 : n.vestings] : []
                  , s = null == o ? void 0 : null === (r = o.sort(ee("label", i))) || void 0 === r ? void 0 : r.map(i=>({
                    yAxisIndex: 1,
                    z: 40,
                    zIndex: 40,
                    type: a ? "line" : "bar",
                    barWidth: a ? void 0 : "95%",
                    large: !0,
                    name: null == i ? void 0 : i.label,
                    color: l[null == i ? void 0 : i.label],
                    step: "middle",
                    stack: "Total",
                    smooth: !0,
                    lineStyle: {
                        width: 0
                    },
                    areaStyle: {
                        opacity: .6
                    },
                    emphasis: {
                        focus: "series",
                        disabled: !0
                    },
                    showSymbol: !1,
                    data: null == e ? void 0 : e.map(e=>{
                        var l, a, t, n, r;
                        let o = null == e ? void 0 : null === (l = e.vestings) || void 0 === l ? void 0 : l.findIndex(e=>e.label === (null == i ? void 0 : i.label));
                        return [U()(null == e ? void 0 : e.timestamp).utc().valueOf(), null == e ? void 0 : null === (t = e.vestings) || void 0 === t ? void 0 : null === (a = t[o]) || void 0 === a ? void 0 : a.amount, null == e ? void 0 : null === (r = e.vestings) || void 0 === r ? void 0 : null === (n = r[o]) || void 0 === n ? void 0 : n.value]
                    }
                    ),
                    animation: !0,
                    universalTransition: !0
                }));
                return s
            }
            , [])
              , W = (0,
            t.useCallback)((e,l)=>{
                let i = null == e ? void 0 : e.map(e=>{
                    var i;
                    let a = null == e ? void 0 : null === (i = e.price) || void 0 === i ? void 0 : i[0];
                    return l === r.JY.LINE ? [U()(null == e ? void 0 : e.timestamp).utc().valueOf(), null == a ? void 0 : a.close] : l === r.JY.CANDLESTICK ? [U()(null == e ? void 0 : e.timestamp).utc().valueOf(), null == a ? void 0 : a.open, null == a ? void 0 : a.close, null == a ? void 0 : a.low, null == a ? void 0 : a.high] : void 0
                }
                );
                return l === r.JY.LINE ? [{
                    yAxisIndex: 0,
                    z: 60,
                    zIndex: 60,
                    id: "price",
                    name: "Price",
                    color: "black",
                    type: l,
                    data: i,
                    lineStyle: {
                        width: 2,
                        color: "dark" === N ? C.black.dark.primary : C.black.primary
                    },
                    showSymbol: !1,
                    animation: !0,
                    universalTransition: !0
                }] : l === r.JY.CANDLESTICK ? [{
                    id: "price",
                    name: "Price",
                    type: l,
                    z: 40,
                    zIndex: 40,
                    data: i.filter(e=>e[1] !== e[2] && e[2] !== e[3] && e[3] !== e[4]),
                    itemStyle: {
                        color: "#ec0000",
                        color0: "#00da3c",
                        borderColor: "#8A0000",
                        borderColor0: "#008F28"
                    },
                    animation: !0,
                    universalTransition: !0
                }] : void 0
            }
            , [C, N])
              , F = (0,
            t.useMemo)(()=>{
                var e, l, i, a, t, n, s, d, c, j, N, T, _, w;
                let F = {
                    grid: L,
                    graphic: A,
                    tooltip: D,
                    silent: !0,
                    legend: {
                        show: !1
                    },
                    xAxis: {
                        type: "time",
                        boundaryGap: !1,
                        axisLabel: {
                            formatter: function(e) {
                                return U()(e).format("DD MMM YYYY")
                            },
                            hideOverlap: !0,
                            color: S ? null == C ? void 0 : null === (e = C.black) || void 0 === e ? void 0 : e.terteriary : null == C ? void 0 : null === (i = C.black) || void 0 === i ? void 0 : null === (l = i.dark) || void 0 === l ? void 0 : l.terteriary,
                            padding: [16, 0, 0, 0],
                            fontSize: 10,
                            fontFamily: '"Inter",sans-serif !important'
                        },
                        nameLocation: "center",
                        axisTick: {
                            show: !0,
                            alignWithLabel: !0,
                            hideOverlap: !0
                        },
                        nameTextStyle: {
                            align: "center",
                            padding: [10, 0, 0, 0],
                            fontWeight: "bold",
                            color: null == C ? void 0 : null === (a = C.black) || void 0 === a ? void 0 : a.primary,
                            fontFamily: 'Work Sans,"Montserrat",sans-serif !important'
                        },
                        silent: !0,
                        axisLine: {
                            onZero: !1,
                            show: !0,
                            symbol: "none",
                            lineStyle: {
                                color: S ? C.black.disabled : C.black.dark.disabled,
                                cap: "round"
                            }
                        },
                        splitLine: {
                            show: !1,
                            lineStyle: {
                                color: S ? C.black.disabled : C.black.dark.disabled
                            }
                        }
                    },
                    yAxis: [{
                        type: "value",
                        axisPointer: {
                            show: !0,
                            type: "line",
                            label: {
                                show: !1
                            }
                        },
                        alignTicks: !1,
                        scale: !1,
                        show: !0,
                        position: "right",
                        animationDuration: 50,
                        animationDurationUpdate: 50,
                        id: "price",
                        nameTextStyle: {
                            padding: [0, 0, 30, 0],
                            fontWeight: "bold",
                            fontFamily: '"Inter",sans-serif !important'
                        },
                        splitLine: {
                            show: !1,
                            lineStyle: {
                                color: S ? C.black.disabled : C.black.dark.disabled
                            }
                        },
                        axisLine: {
                            show: !1
                        },
                        axisLabel: {
                            formatter: function(e) {
                                return (0,
                                eo.T)(e)
                            },
                            fontSize: 10,
                            fontFamily: '"Inter",sans-serif !important',
                            color: S ? null == C ? void 0 : null === (t = C.black) || void 0 === t ? void 0 : t.terteriary : null == C ? void 0 : null === (s = C.black) || void 0 === s ? void 0 : null === (n = s.dark) || void 0 === n ? void 0 : n.terteriary
                        }
                    }, {
                        position: "left",
                        type: "value",
                        animationDuration: 50,
                        animationDurationUpdate: 50,
                        axisPointer: {
                            show: !0,
                            type: "line",
                            label: {
                                show: !1
                            }
                        },
                        nameTextStyle: {
                            padding: [0, 0, 30, 0],
                            fontWeight: "bold",
                            fontFamily: '"Inter",sans-serif !important'
                        },
                        alignTicks: !1,
                        scale: !1,
                        show: !0,
                        splitLine: {
                            show: !0,
                            lineStyle: {
                                color: S ? C.black.disabled : C.black.dark.disabled
                            }
                        },
                        axisLine: {
                            show: !1
                        },
                        axisLabel: {
                            formatter: function(e) {
                                return 0 === e ? "0" : e < .099 ? (0,
                                er.uf)(e, {
                                    abbreviate: !0,
                                    decimal: 4
                                }) : e >= 1e9 ? (0,
                                er.uf)(e, {
                                    abbreviate: !0,
                                    decimal: 2
                                }) : (0,
                                er.uf)(e, {
                                    abbreviate: !0
                                })
                            },
                            fontFamily: '"Inter",sans-serif !important',
                            fontSize: 10,
                            color: S ? null == C ? void 0 : null === (d = C.black) || void 0 === d ? void 0 : d.terteriary : null == C ? void 0 : null === (j = C.black) || void 0 === j ? void 0 : null === (c = j.dark) || void 0 === c ? void 0 : c.terteriary
                        }
                    }],
                    dataZoom: [I, {
                        type: "inside",
                        start: 0,
                        end: 100,
                        zoomOnMouseWheel: !E,
                        moveOnMouseMove: !E
                    }],
                    series: [P, O],
                    animationThreshold: 200,
                    animationDurationUpdate: 300,
                    animationDuration: 300,
                    animationEasing: "quinticInOut",
                    animationEasingUpdate: "quinticInOut"
                };
                if (v) {
                    let e = W(null == k ? void 0 : k[x], r.JY.LINE);
                    F.series.unshift(...e)
                }
                if (h) {
                    let e = M(null == b ? void 0 : b[x], f, y, m);
                    F.series.unshift(...e)
                }
                if (p) {
                    let e = R(null == g ? void 0 : g[x]);
                    F.series.unshift(...e)
                }
                if (o && o.current)
                    for (let e in null === (T = o.current) || void 0 === T || null === (N = T.getEchartsInstance()) || void 0 === N || N.setOption(F, !0, !1),
                    u)
                        null == o || null === (w = o.current) || void 0 === w || null === (_ = w.getEchartsInstance()) || void 0 === _ || _.dispatchAction({
                            type: u[e] ? "legendSelect" : "legendUnSelect",
                            name: e
                        });
                return F
            }
            , [f, g, C.black.dark.disabled, null === (l = C.black.dark) || void 0 === l ? void 0 : l.terteriary, C.black.disabled, null === (i = C.black) || void 0 === i ? void 0 : i.primary, null === (n = C.black) || void 0 === n ? void 0 : n.terteriary, I, R, W, M, A, L, m, S, E, u, O, k, x, o, p, v, h, y, P, D, b]);
            return (0,
            a.jsxs)(a.Fragment, {
                children: [(0,
                a.jsx)("div", {
                    style: {
                        visibility: s || d ? "hidden" : "visible",
                        height: s || d ? "0px" : "600px"
                    },
                    children: (0,
                    a.jsx)(el.k, {
                        scheduleRef: o,
                        options: F,
                        style: {
                            width: "100%",
                            height: "600px"
                        }
                    })
                }), (0,
                a.jsx)("div", {
                    style: {
                        visibility: !s && d ? "visible" : "hidden",
                        height: !s && d ? "600px" : "0px"
                    },
                    children: (0,
                    a.jsx)(ea, {})
                }), (0,
                a.jsx)("div", {
                    style: {
                        visibility: s ? "visible" : "hidden",
                        height: s ? "600px" : "0px"
                    },
                    children: (0,
                    a.jsx)(ei, {})
                })]
            })
        }
        ;
        var ev = i(68143)
          , ep = i.n(ev);
        let eh = e=>{
            var l, i, n, o, d, c, u;
            let {allocations: m, chartStatus: v, isBasicAllocation: p, isCumulative: h, isEmptyAllocation: g, isHiddenUnlockDescription: k, isLoading: f, legends: j, sortPriority: N, tokenSymbol: C, tokenId: T, vestings: E, price: S, claimed: L, resolution: I, selectedVestingScheduleChart: A, selectedPriceChart: P, selectedClaimedChart: D, handleClickLegend: R, setSelectedVestingScheduleChart: M, setSelectedPriceChart: W, setSelectedClaimedChart: F, setResolution: H, handleToggleBasicAllocation: B, handleToggleCumulative: K, handleOnChangeChart: z} = e
              , {track: G} = (0,
            s.g)()
              , Z = (0,
            t.useRef)(null)
              , {colors: Y} = (0,
            w.J)()
              , {resolvedTheme: J} = (0,
            _.F)()
              , X = (0,
            t.useMemo)(()=>!!g, [g])
              , [q,el] = (0,
            t.useState)("9999")
              , [ei,ea] = (0,
            t.useState)({});
            (0,
            t.useEffect)(()=>{
                for (let i in j) {
                    var e, l;
                    null == Z || null === (l = Z.current) || void 0 === l || null === (e = l.getEchartsInstance()) || void 0 === e || e.dispatchAction({
                        type: j[i] ? "legendSelect" : "legendUnSelect",
                        name: i
                    })
                }
            }
            , [j, I]);
            let et = ep()(()=>{
                var e;
                if (!(null == Z ? void 0 : Z.current))
                    return;
                let l = null === (e = Z.current) || void 0 === e ? void 0 : e.getEchartsInstance().getOption().dataZoom[0];
                ea(e=>({
                    ...e,
                    ...l
                }))
            }
            , 800);
            (0,
            t.useEffect)(()=>{
                var e;
                null == Z || null === (e = Z.current) || void 0 === e || e.getEchartsInstance().on("dataZoom", et)
            }
            , [et]);
            let en = (0,
            t.useMemo)(()=>null == m ? void 0 : m.reduce((e,l)=>({
                ...e,
                [null == l ? void 0 : l.name]: null == l ? void 0 : l.color
            }), {}), [m])
              , er = (0,
            t.useCallback)(e=>{
                var l, i, a;
                if (Z && (null == Z ? void 0 : Z.current)) {
                    if (e) {
                        let l = null === (i = Z.current) || void 0 === i ? void 0 : i.getEchartsInstance().getOption();
                        null === (a = Z.current) || void 0 === a || a.getEchartsInstance().setOption({
                            ...l,
                            dataZoom: [e]
                        }),
                        ea(e);
                        return
                    }
                    let t = null === (l = Z.current) || void 0 === l ? void 0 : l.getEchartsInstance().getOption().dataZoom[0];
                    ea(e=>({
                        ...e,
                        ...t
                    }))
                }
            }
            , [])
              , eo = (0,
            t.useCallback)(async e=>{
                er(),
                e === r._w.PRICE ? (G(x.a.TP_CHART_CLICK_PRICE, {
                    action: P ? "Show" : "Hide"
                }),
                W(e=>{
                    let l = !e;
                    return z({
                        isBasicAllocation: p,
                        isCumulative: h,
                        selectedVestingScheduleChart: A,
                        selectedPriceChart: l,
                        selectedClaimedChart: D,
                        resolution: I
                    }),
                    l
                }
                )) : e === r._w.CLAIMED ? (G(x.a.TP_CHART_CLICK_CLAIM, {
                    action: D ? "Show" : "Hide"
                }),
                F(e=>{
                    let l = !e;
                    return z({
                        isBasicAllocation: p,
                        isCumulative: h,
                        selectedVestingScheduleChart: A,
                        selectedPriceChart: P,
                        selectedClaimedChart: l,
                        resolution: I
                    }),
                    l
                }
                )) : e === r._w.VESTING_SCHEDULE && (G(x.a.TP_CHART_CLICK_SCHEDULE, {
                    action: A ? "Show" : "Hide"
                }),
                M(e=>{
                    let l = !e;
                    return z({
                        isBasicAllocation: p,
                        isCumulative: h,
                        selectedVestingScheduleChart: l,
                        selectedPriceChart: P,
                        selectedClaimedChart: D,
                        resolution: I
                    }),
                    l
                }
                ))
            }
            , [er, z, p, h, I, D, P, A, F, W, M, G])
              , es = (0,
            t.useCallback)(e=>{
                G(x.a.TP_CHART_CLICK_TIMEFRAME, {
                    timeframe: e
                });
                let l = Math.ceil(r.WN[I][e] / 2)
                  , i = Math.floor(r.WN[I][e] / 2)
                  , a = U()().add(i, I).valueOf()
                  , t = U()().subtract(l, I).valueOf();
                er({
                    ...ei,
                    start: void 0,
                    end: void 0,
                    startValue: a,
                    endValue: t
                }),
                el(e)
            }
            , [ei, er, I, G])
              , ed = (0,
            t.useCallback)(async e=>{
                G(x.a.TP_CHART_CLICK_RESOLUTION, {
                    timeframe: e
                }),
                H(e),
                el(r.aw.at(-1).value),
                er(),
                z({
                    isBasicAllocation: p,
                    isCumulative: h,
                    selectedVestingScheduleChart: A,
                    selectedPriceChart: P,
                    selectedClaimedChart: D,
                    resolution: e
                })
            }
            , [er, z, p, h, D, P, A, H, G])
              , ec = (0,
            t.useMemo)(()=>{
                var e, l, i;
                let a = !(null == E ? void 0 : null === (e = E[I]) || void 0 === e ? void 0 : e.length)
                  , t = !(null == S ? void 0 : null === (l = S[I]) || void 0 === l ? void 0 : l.length)
                  , n = !(null == L ? void 0 : null === (i = L[I]) || void 0 === i ? void 0 : i.length);
                return g || a && t && n
            }
            , [L, g, S, I, E]);
            return (0,
            a.jsxs)(y, {
                className: "!h-full !justify-start",
                children: [(0,
                a.jsx)($, {
                    scale: q,
                    isDisabledMenu: X,
                    resolution: I,
                    isBasicAllocation: p,
                    isCumulative: h,
                    chartStatus: v,
                    selectedVestingScheduleChart: A,
                    selectedPriceChart: P,
                    selectedClaimedChart: D,
                    handleClickMenu: eo,
                    handleToggleCumulative: K,
                    handleToggleBasicAllocation: B,
                    handleClickDatePeriod: es,
                    handleChangeResolution: ed
                }), (0,
                a.jsx)(O.DisclaimerBadge, {
                    position: "VESTING_SCHEDULE",
                    className: "m-[16px]"
                }), (0,
                a.jsxs)("div", {
                    className: "w-full p-[16px]",
                    children: [(0,
                    a.jsx)(em, {
                        allocationColors: en,
                        dataZoom: ei,
                        scheduleRef: Z,
                        isLoading: f,
                        isEmptyChart: ec,
                        tokenSymbol: C,
                        legends: j,
                        sortPriority: N,
                        isCumulative: h,
                        resolution: I,
                        vestings: E,
                        claimed: L,
                        price: S,
                        selectedClaimedChart: D,
                        selectedPriceChart: P,
                        selectedVestingScheduleChart: A
                    }), (0,
                    a.jsxs)("div", {
                        className: "mt-[20px] flex flex-col gap-y-[8px]",
                        children: [A && (0,
                        a.jsxs)("div", {
                            className: " flex flex-row flex-wrap gap-[10px]",
                            children: [(0,
                            a.jsx)(b.Typography, {
                                variant: "body",
                                fontWeight: "medium",
                                color: "black-terteriary",
                                children: "Unlocks schedule"
                            }), null == m ? void 0 : m.sort(ee("name", N, {
                                reverse: !0
                            })).map((e,l)=>(0,
                            a.jsx)(Q, {
                                id: e.allocationId,
                                color: null !== (u = null == e ? void 0 : e.color) && void 0 !== u ? u : "#AFAFAF",
                                label: e.name,
                                checked: j[e.name],
                                onClick: ()=>R(e.name)
                            }, "list-".concat(e.name, "-").concat(l)))]
                        }), P && (0,
                        a.jsxs)("div", {
                            className: " flex flex-row flex-wrap gap-[10px]",
                            children: [(0,
                            a.jsx)(b.Typography, {
                                variant: "body",
                                fontWeight: "medium",
                                color: "black-terteriary",
                                children: "Price"
                            }), (0,
                            a.jsx)(Q, {
                                color: "dark" === J ? "white" : "black",
                                label: "Dollar price",
                                checked: j[r.yZ.PRICE],
                                onClick: ()=>R(r.yZ.PRICE)
                            }, "list-price")]
                        }), D && (0,
                        a.jsxs)("div", {
                            className: " flex flex-row flex-wrap gap-[10px]",
                            children: [(0,
                            a.jsx)(b.Typography, {
                                variant: "body",
                                fontWeight: "medium",
                                color: "black-terteriary",
                                children: "Claimed"
                            }), (0,
                            a.jsx)(Q, {
                                color: "dark" === J ? null == Y ? void 0 : null === (i = Y.chart) || void 0 === i ? void 0 : null === (l = i.dark) || void 0 === l ? void 0 : l.c1 : null == Y ? void 0 : null === (n = Y.chart) || void 0 === n ? void 0 : n.c1,
                                label: r.yZ.CLAIMED,
                                checked: j[r.yZ.CLAIMED],
                                onClick: ()=>R(r.yZ.CLAIMED)
                            }, "list-Claimed"), (0,
                            a.jsx)(Q, {
                                color: "dark" === J ? null == Y ? void 0 : null === (d = Y.chart) || void 0 === d ? void 0 : null === (o = d.dark) || void 0 === o ? void 0 : o.c5 : null == Y ? void 0 : null === (c = Y.chart) || void 0 === c ? void 0 : c.c5,
                                label: r.yZ.UNLOCK,
                                checked: j[r.yZ.UNLOCK],
                                onClick: ()=>R(r.yZ.UNLOCK)
                            }, "list-Supply")]
                        })]
                    })]
                }), (0,
                a.jsx)(V, {
                    allocations: m,
                    isHiddenUnlockDescription: k
                })]
            })
        }
          , ex = ["Founder or Team", "Private investors", "Public investors", "Reserved", "Community & Other"].reduce((e,l)=>(e[l] = !1,
        e), {})
          , eb = Object.keys(ex).map(e=>({
            allocationId: e,
            name: e,
            color: "#000000",
            description: "",
            amount: 0,
            percent: 0,
            standardAllocation: "",
            isInitialAllocation: !0,
            isUnAnnounced: !1,
            lastUpdated: new Date,
            tokenId: "",
            versionType: "",
            versionNumber: "",
            publishVersion: !1,
            chartPriority: 0,
            groupPriority: 0
        }))
          , eg = e=>{
            var l, i, d, c;
            let {track: u} = (0,
            s.g)()
              , {tokenId: m, chartStatus: v, tokenSymbol: p, allocationsDetail: b, tokenInfo: g} = e
              , [k,f] = (0,
            t.useState)(!0)
              , [y,j] = (0,
            t.useState)({})
              , [N,C] = (0,
            t.useState)(!0)
              , [T,_] = (0,
            t.useState)(!1)
              , [w,E] = (0,
            t.useState)(!0)
              , [S,L] = (0,
            t.useState)(!0)
              , [I,A] = (0,
            t.useState)(!1)
              , [O,P] = (0,
            t.useState)(!1)
              , [D,R] = (0,
            t.useState)(r.Vf.DAY)
              , [M,U] = (0,
            t.useState)(o)
              , [W,H] = (0,
            t.useState)(o)
              , [B,V] = (0,
            t.useState)(o)
              , [K,z] = (0,
            t.useState)(o)
              , [G,Z] = (0,
            t.useState)(o)
              , [Y,J] = (0,
            t.useState)(o)
              , X = (0,
            t.useCallback)(async e=>{
                var l, i, a, t, n, o;
                let s;
                C(!0);
                let d = (null == e ? void 0 : e.selectedVestingScheduleChart) && (null == e ? void 0 : e.isBasicAllocation)
                  , c = (null == e ? void 0 : e.selectedVestingScheduleChart) && (null == e ? void 0 : e.isCumulative)
                  , u = !(null == e ? void 0 : e.isBasicAllocation) && (null == e ? void 0 : e.isCumulative)
                  , v = W[e.resolution].length > 0
                  , p = G[e.resolution].length > 0
                  , x = Y[e.resolution].length > 0
                  , b = K[e.resolution].length > 0
                  , k = B[e.resolution].length > 0
                  , f = M[e.resolution].length > 0;
                if (d && (null == e ? void 0 : e.isCumulative) && !v) {
                    s = r.dW.BASIC_VESTINGS;
                    let i = await h.fetchChart(m, s, null == g ? void 0 : g.versionType, null == g ? void 0 : null === (l = g.versionNumber) || void 0 === l ? void 0 : l.toString(), e.resolution);
                    H({
                        ...W,
                        [i.resolution]: i.chartData
                    })
                }
                if (!c && !(null == e ? void 0 : e.isBasicAllocation) && !p) {
                    s = r.dW.NON_CUMULATIVE;
                    let l = await h.fetchChart(m, s, null == g ? void 0 : g.versionType, null == g ? void 0 : null === (i = g.versionNumber) || void 0 === i ? void 0 : i.toString(), e.resolution);
                    Z({
                        ...G,
                        [l.resolution]: l.chartData
                    })
                }
                if (!c && (null == e ? void 0 : e.isBasicAllocation) && !x) {
                    s = r.dW.BASIC_NON_CUMULATIVE;
                    let l = await h.fetchChart(m, s, null == g ? void 0 : g.versionType, null == g ? void 0 : null === (a = g.versionNumber) || void 0 === a ? void 0 : a.toString(), e.resolution);
                    J({
                        ...Y,
                        [l.resolution]: l.chartData
                    })
                }
                if ((null == e ? void 0 : e.selectedVestingScheduleChart) && u && !f) {
                    s = r.dW.VESTINGS;
                    let l = await h.fetchChart(m, s, null == g ? void 0 : g.versionType, null == g ? void 0 : null === (t = g.versionNumber) || void 0 === t ? void 0 : t.toString(), e.resolution);
                    U({
                        ...M,
                        [l.resolution]: l.chartData
                    })
                }
                if ((null == e ? void 0 : e.selectedPriceChart) && !b) {
                    s = r.dW.PRICE;
                    let l = await h.fetchChart(m, s, null == g ? void 0 : g.versionType, null == g ? void 0 : null === (n = g.versionNumber) || void 0 === n ? void 0 : n.toString(), e.resolution);
                    z({
                        ...K,
                        [l.resolution]: l.chartData
                    })
                }
                if ((null == e ? void 0 : e.selectedClaimedChart) && !k) {
                    s = r.dW.CLAIMS;
                    let l = await h.fetchChart(m, s, null == g ? void 0 : g.versionType, null == g ? void 0 : null === (o = g.versionNumber) || void 0 === o ? void 0 : o.toString(), e.resolution);
                    V({
                        ...B,
                        [l.resolution]: l.chartData
                    })
                }
                C(!1)
            }
            , [Y, W, B, G, K, m, null == g ? void 0 : g.versionNumber, null == g ? void 0 : g.versionType, M])
              , q = (0,
            t.useCallback)(e=>{
                let l = e ? r.Vf.DAY : r.Vf.MONTH;
                E(e),
                R(l),
                X({
                    isBasicAllocation: T,
                    isCumulative: e,
                    selectedVestingScheduleChart: S,
                    selectedPriceChart: I,
                    selectedClaimedChart: O,
                    resolution: l
                }),
                u(x.a.TP_CHART_CLICK_CUMTOGGLE, {
                    cumulative: e ? "on" : "off"
                })
            }
            , [X, T, O, I, S, u])
              , $ = (0,
            t.useCallback)(e=>{
                _(e),
                e ? u(x.a.TP_VESTINGALLOCATION_TOGGLE_BASICALLO, {
                    action: "Show"
                }) : u(x.a.TP_VESTINGALLOCATION_TOGGLE_BASICALLO, {
                    action: "Hide"
                }),
                X({
                    isBasicAllocation: e,
                    isCumulative: w,
                    selectedVestingScheduleChart: S,
                    selectedPriceChart: I,
                    selectedClaimedChart: O,
                    resolution: D
                })
            }
            , [X, w, D, O, I, S, u])
              , Q = (0,
            t.useMemo)(()=>T ? null == b ? void 0 : b.basicAllocation : null == b ? void 0 : b.fullAllocation, [null == b ? void 0 : b.basicAllocation, null == b ? void 0 : b.fullAllocation, T])
              , ee = (0,
            t.useMemo)(()=>{
                let e = S && T
                  , l = S && w
                  , i = !T && w;
                return !l && T ? Y : l || T ? e && w ? W : S && i ? M : void 0 : G
            }
            , [Y, W, G, T, w, S, M])
              , el = (0,
            t.useCallback)(()=>{
                var e;
                if (!Q)
                    return ex;
                let l = {
                    [r.yZ.PRICE]: !0,
                    [r.yZ.UNLOCK]: !0,
                    [r.yZ.CLAIMED]: !0
                };
                return null == Q || null === (e = Q.instances) || void 0 === e || e.forEach(e=>{
                    l[e.name] = !0
                }
                ),
                l
            }
            , [Q])
              , ei = (0,
            t.useCallback)(()=>{
                u(x.a.TP_VESTINGALLOCATION_TOGGLE, {
                    allocation: "all",
                    action: k ? "Show" : "Hide"
                }),
                j(e=>{
                    let l = {
                        ...e
                    };
                    return Object.keys(l).forEach(e=>{
                        [r.yZ.PRICE, r.yZ.UNLOCK, r.yZ.CLAIMED].includes(e) || (l[e] = !k)
                    }
                    ),
                    l
                }
                ),
                f(!k)
            }
            , [k, u])
              , ea = (0,
            t.useCallback)(e=>{
                u(x.a.TP_VESTINGALLOCATION_TOGGLE, {
                    allocation: e,
                    action: y[e] ? "Hide" : "Show"
                }),
                j(l=>{
                    let i = {
                        ...l
                    };
                    i[e] = !l[e];
                    let a = Object.entries(i).filter(e=>{
                        let[l] = e;
                        return ![r.yZ.PRICE, r.yZ.UNLOCK, r.yZ.CLAIMED].includes(l)
                    }
                    ).every(e=>{
                        let[l,i] = e;
                        return !0 === i
                    }
                    );
                    return f(a),
                    i
                }
                )
            }
            , [y, u])
              , et = (0,
            t.useMemo)(()=>{
                var e;
                return null == Q ? void 0 : null === (e = Q.instances) || void 0 === e ? void 0 : e.reduce((e,l)=>{
                    var i, a;
                    return {
                        ...e,
                        [null == l ? void 0 : null === (a = l.name) || void 0 === a ? void 0 : null === (i = a.toLocaleLowerCase()) || void 0 === i ? void 0 : i.replaceAll(" ", "_")]: {
                            chartPriority: l.chartPriority,
                            groupPriority: l.groupPriority
                        }
                    }
                }
                , {})
            }
            , [Q])
              , en = (0,
            t.useMemo)(()=>{
                try {
                    var e;
                    if ((null == Q ? void 0 : null === (e = Q.instances) || void 0 === e ? void 0 : e.length) === 0)
                        return !0;
                    let l = !1;
                    return null == Q || Q.instances.forEach(e=>{
                        (null == e ? void 0 : e.percent) && (null == e ? void 0 : e.description) || (l = !0)
                    }
                    ),
                    l
                } catch (e) {
                    return !0
                }
            }
            , [null == Q ? void 0 : Q.instances]);
            return (0,
            n.Z)(()=>{
                let e = async()=>{
                    C(!0),
                    await X({
                        isBasicAllocation: T,
                        isCumulative: w,
                        selectedVestingScheduleChart: S,
                        selectedPriceChart: I,
                        selectedClaimedChart: O,
                        resolution: D
                    })
                }
                ;
                !Q && T && $(!1),
                e()
            }
            ),
            (0,
            t.useEffect)(()=>()=>{
                C(!0),
                U(o),
                J(o),
                Z(o),
                H(o),
                z(o)
            }
            , []),
            (0,
            t.useEffect)(()=>{
                j(el())
            }
            , [el]),
            (0,
            a.jsx)("div", {
                className: "container mx-auto",
                id: "schedule",
                children: (0,
                a.jsx)("div", {
                    className: "w-full",
                    children: (0,
                    a.jsxs)("div", {
                        className: "mt-[24px] grid grid-cols-1 gap-[1px] laptop:mb-[48px] laptop:grid-cols-[308px_1fr]",
                        children: [(0,
                        a.jsx)(F, {
                            allocations: null !== (d = null == Q ? void 0 : null === (l = Q.instances) || void 0 === l ? void 0 : l.map(e=>e)) && void 0 !== d ? d : eb,
                            isBasicAllocation: T,
                            isHiddenUnlockDescription: en,
                            isShowAllLegend: k,
                            lastUpdated: null == Q ? void 0 : Q.lastUpdated,
                            legends: y,
                            token: g,
                            sortPriority: et,
                            handleClickLegend: e=>ea(e),
                            handleToggleAllLegend: ei,
                            handleToggleBasicAllocation: $
                        }), (0,
                        a.jsx)(eh, {
                            allocations: null !== (c = null == Q ? void 0 : null === (i = Q.instances) || void 0 === i ? void 0 : i.map(e=>e)) && void 0 !== c ? c : eb,
                            chartStatus: v,
                            claimed: B,
                            isBasicAllocation: T,
                            isCumulative: w,
                            isEmptyAllocation: !Q,
                            isHiddenUnlockDescription: en,
                            isLoading: N,
                            legends: y,
                            price: K,
                            resolution: D,
                            tokenSymbol: p,
                            tokenId: m,
                            vestings: ee,
                            selectedClaimedChart: O,
                            selectedVestingScheduleChart: S,
                            selectedPriceChart: I,
                            sortPriority: et,
                            handleClickLegend: e=>ea(e),
                            handleOnChangeChart: X,
                            handleToggleBasicAllocation: $,
                            handleToggleCumulative: q,
                            setResolution: R,
                            setSelectedClaimedChart: P,
                            setSelectedPriceChart: A,
                            setSelectedVestingScheduleChart: L
                        })]
                    })
                })
            })
        }
    }
}]);

