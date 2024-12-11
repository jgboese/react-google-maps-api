(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react/jsx-runtime'), require('react'), require('react-dom')) :
    typeof define === 'function' && define.amd ? define(['exports', 'react/jsx-runtime', 'react', 'react-dom'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.reactGoogleMapsApi = {}, global.ReactJSXRuntime, global.React, global.ReactDOM));
})(this, (function (exports, jsxRuntime, react, ReactDOM) { 'use strict';

    function _interopNamespace(e) {
        if (e && e.__esModule) return e;
        var n = Object.create(null);
        if (e) {
            Object.keys(e).forEach(function (k) {
                if (k !== 'default') {
                    var d = Object.getOwnPropertyDescriptor(e, k);
                    Object.defineProperty(n, k, d.get ? d : {
                        enumerable: true,
                        get: function () { return e[k]; }
                    });
                }
            });
        }
        n["default"] = e;
        return Object.freeze(n);
    }

    var ReactDOM__namespace = /*#__PURE__*/_interopNamespace(ReactDOM);

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest$1(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __awaiter$1(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function getDefaultExportFromCjs (x) {
    	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
    }

    /**
     * Copyright (c) 2013-present, Facebook, Inc.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */

    /**
     * Use invariant() to assert state which your program assumes to be true.
     *
     * Provide sprintf-style format (only %s is supported) and arguments
     * to provide information about what broke and what you were
     * expecting.
     *
     * The invariant message will be stripped in production, but the invariant
     * will remain to ensure logic does not differ in production.
     */

    var NODE_ENV = process.env.NODE_ENV;

    var invariant = function(condition, format, a, b, c, d, e, f) {
      if (NODE_ENV !== 'production') {
        if (format === undefined) {
          throw new Error('invariant requires an error message argument');
        }
      }

      if (!condition) {
        var error;
        if (format === undefined) {
          error = new Error(
            'Minified exception occurred; use the non-minified dev environment ' +
            'for the full error message and additional helpful warnings.'
          );
        } else {
          var args = [a, b, c, d, e, f];
          var argIndex = 0;
          error = new Error(
            format.replace(/%s/g, function() { return args[argIndex++]; })
          );
          error.name = 'Invariant Violation';
        }

        error.framesToPop = 1; // we don't care about invariant's own frame
        throw error;
      }
    };

    var invariant_1 = invariant;

    var invariant$1 = /*@__PURE__*/getDefaultExportFromCjs(invariant_1);

    var MapContext = react.createContext(null);
    function useGoogleMap() {
        invariant$1(!!react.useContext, 'useGoogleMap is React hook and requires React version 16.8+');
        var map = react.useContext(MapContext);
        invariant$1(!!map, 'useGoogleMap needs a GoogleMap available up in the tree');
        return map;
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function reduce(obj, fn, acc) {
        return Object.keys(obj).reduce(function reducer(newAcc, key) {
            return fn(newAcc, obj[key], key);
        }, acc);
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function forEach(obj, fn) {
        Object.keys(obj).forEach(function (key) {
            return fn(obj[key], key);
        });
    }

    /* global google */
    function applyUpdaterToNextProps(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    updaterMap, 
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    prevProps, 
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    nextProps, 
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    instance
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        var map = {};
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        var iter = function (fn, key) {
            var nextValue = nextProps[key];
            if (nextValue !== prevProps[key]) {
                map[key] = nextValue;
                fn(instance, nextValue);
            }
        };
        forEach(updaterMap, iter);
        return map;
    }
    function registerEvents(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    props, 
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    instance, eventMap) {
        var registeredList = reduce(eventMap, function reducer(acc, googleEventName, 
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        onEventName) {
            if (typeof props[onEventName] === 'function') {
                acc.push(google.maps.event.addListener(instance, googleEventName, props[onEventName]));
            }
            return acc;
        }, []);
        return registeredList;
    }
    function unregisterEvent(registered) {
        google.maps.event.removeListener(registered);
    }
    function unregisterEvents(events) {
        if (events === void 0) { events = []; }
        events.forEach(unregisterEvent);
    }
    function applyUpdatersToPropsAndRegisterEvents(_a) {
        var updaterMap = _a.updaterMap, eventMap = _a.eventMap, prevProps = _a.prevProps, nextProps = _a.nextProps, instance = _a.instance;
        var registeredEvents = registerEvents(nextProps, instance, eventMap);
        applyUpdaterToNextProps(updaterMap, prevProps, nextProps, instance);
        return registeredEvents;
    }

    var eventMap$i = {
        onDblClick: 'dblclick',
        onDragEnd: 'dragend',
        onDragStart: 'dragstart',
        onMapTypeIdChanged: 'maptypeid_changed',
        onMouseMove: 'mousemove',
        onMouseOut: 'mouseout',
        onMouseOver: 'mouseover',
        onMouseDown: 'mousedown',
        onMouseUp: 'mouseup',
        onRightClick: 'rightclick',
        onTilesLoaded: 'tilesloaded',
        onBoundsChanged: 'bounds_changed',
        onCenterChanged: 'center_changed',
        onClick: 'click',
        onDrag: 'drag',
        onHeadingChanged: 'heading_changed',
        onIdle: 'idle',
        onProjectionChanged: 'projection_changed',
        onResize: 'resize',
        onTiltChanged: 'tilt_changed',
        onZoomChanged: 'zoom_changed',
    };
    var updaterMap$i = {
        extraMapTypes: function (map, extra) {
            extra.forEach(function forEachExtra(it, i) {
                map.mapTypes.set(String(i), it);
            });
        },
        center: function (map, center) {
            map.setCenter(center);
        },
        clickableIcons: function (map, clickable) {
            map.setClickableIcons(clickable);
        },
        heading: function (map, heading) {
            map.setHeading(heading);
        },
        mapTypeId: function (map, mapTypeId) {
            map.setMapTypeId(mapTypeId);
        },
        options: function (map, options) {
            map.setOptions(options);
        },
        streetView: function (map, streetView) {
            map.setStreetView(streetView);
        },
        tilt: function (map, tilt) {
            map.setTilt(tilt);
        },
        zoom: function (map, zoom) {
            map.setZoom(zoom);
        },
    };
    // TODO: unfinished!
    function GoogleMapFunctional(_a) {
        var children = _a.children, options = _a.options, id = _a.id, mapContainerStyle = _a.mapContainerStyle, mapContainerClassName = _a.mapContainerClassName, center = _a.center, 
        // clickableIcons,
        // extraMapTypes,
        // heading,
        // mapTypeId,
        onClick = _a.onClick, onDblClick = _a.onDblClick, onDrag = _a.onDrag, onDragEnd = _a.onDragEnd, onDragStart = _a.onDragStart, onMouseMove = _a.onMouseMove, onMouseOut = _a.onMouseOut, onMouseOver = _a.onMouseOver, onMouseDown = _a.onMouseDown, onMouseUp = _a.onMouseUp, onRightClick = _a.onRightClick, 
        // onMapTypeIdChanged,
        // onTilesLoaded,
        // onBoundsChanged,
        onCenterChanged = _a.onCenterChanged, 
        // onHeadingChanged,
        // onIdle,
        // onProjectionChanged,
        // onResize,
        // onTiltChanged,
        // onZoomChanged,
        onLoad = _a.onLoad, onUnmount = _a.onUnmount;
        var _b = react.useState(null), map = _b[0], setMap = _b[1];
        var ref = react.useRef(null);
        // const [extraMapTypesListener, setExtraMapTypesListener] = useState<google.maps.MapsEventListener | null>(null)
        var _c = react.useState(null), centerChangedListener = _c[0], setCenterChangedListener = _c[1];
        var _d = react.useState(null), dblclickListener = _d[0], setDblclickListener = _d[1];
        var _e = react.useState(null), dragendListener = _e[0], setDragendListener = _e[1];
        var _f = react.useState(null), dragstartListener = _f[0], setDragstartListener = _f[1];
        var _g = react.useState(null), mousedownListener = _g[0], setMousedownListener = _g[1];
        var _h = react.useState(null), mousemoveListener = _h[0], setMousemoveListener = _h[1];
        var _j = react.useState(null), mouseoutListener = _j[0], setMouseoutListener = _j[1];
        var _k = react.useState(null), mouseoverListener = _k[0], setMouseoverListener = _k[1];
        var _l = react.useState(null), mouseupListener = _l[0], setMouseupListener = _l[1];
        var _m = react.useState(null), rightclickListener = _m[0], setRightclickListener = _m[1];
        var _o = react.useState(null), clickListener = _o[0], setClickListener = _o[1];
        var _p = react.useState(null), dragListener = _p[0], setDragListener = _p[1];
        // Order does matter
        react.useEffect(function () {
            if (options && map !== null) {
                map.setOptions(options);
            }
        }, [map, options]);
        react.useEffect(function () {
            if (map !== null && typeof center !== 'undefined') {
                map.setCenter(center);
            }
        }, [map, center]);
        react.useEffect(function () {
            if (map && onDblClick) {
                if (dblclickListener !== null) {
                    google.maps.event.removeListener(dblclickListener);
                }
                setDblclickListener(google.maps.event.addListener(map, 'dblclick', onDblClick));
            }
        }, [onDblClick]);
        react.useEffect(function () {
            if (map && onDragEnd) {
                if (dragendListener !== null) {
                    google.maps.event.removeListener(dragendListener);
                }
                setDragendListener(google.maps.event.addListener(map, 'dragend', onDragEnd));
            }
        }, [onDragEnd]);
        react.useEffect(function () {
            if (map && onDragStart) {
                if (dragstartListener !== null) {
                    google.maps.event.removeListener(dragstartListener);
                }
                setDragstartListener(google.maps.event.addListener(map, 'dragstart', onDragStart));
            }
        }, [onDragStart]);
        react.useEffect(function () {
            if (map && onMouseDown) {
                if (mousedownListener !== null) {
                    google.maps.event.removeListener(mousedownListener);
                }
                setMousedownListener(google.maps.event.addListener(map, 'mousedown', onMouseDown));
            }
        }, [onMouseDown]);
        react.useEffect(function () {
            if (map && onMouseMove) {
                if (mousemoveListener !== null) {
                    google.maps.event.removeListener(mousemoveListener);
                }
                setMousemoveListener(google.maps.event.addListener(map, 'mousemove', onMouseMove));
            }
        }, [onMouseMove]);
        react.useEffect(function () {
            if (map && onMouseOut) {
                if (mouseoutListener !== null) {
                    google.maps.event.removeListener(mouseoutListener);
                }
                setMouseoutListener(google.maps.event.addListener(map, 'mouseout', onMouseOut));
            }
        }, [onMouseOut]);
        react.useEffect(function () {
            if (map && onMouseOver) {
                if (mouseoverListener !== null) {
                    google.maps.event.removeListener(mouseoverListener);
                }
                setMouseoverListener(google.maps.event.addListener(map, 'mouseover', onMouseOver));
            }
        }, [onMouseOver]);
        react.useEffect(function () {
            if (map && onMouseUp) {
                if (mouseupListener !== null) {
                    google.maps.event.removeListener(mouseupListener);
                }
                setMouseupListener(google.maps.event.addListener(map, 'mouseup', onMouseUp));
            }
        }, [onMouseUp]);
        react.useEffect(function () {
            if (map && onRightClick) {
                if (rightclickListener !== null) {
                    google.maps.event.removeListener(rightclickListener);
                }
                setRightclickListener(google.maps.event.addListener(map, 'rightclick', onRightClick));
            }
        }, [onRightClick]);
        react.useEffect(function () {
            if (map && onClick) {
                if (clickListener !== null) {
                    google.maps.event.removeListener(clickListener);
                }
                setClickListener(google.maps.event.addListener(map, 'click', onClick));
            }
        }, [onClick]);
        react.useEffect(function () {
            if (map && onDrag) {
                if (dragListener !== null) {
                    google.maps.event.removeListener(dragListener);
                }
                setDragListener(google.maps.event.addListener(map, 'drag', onDrag));
            }
        }, [onDrag]);
        react.useEffect(function () {
            if (map && onCenterChanged) {
                if (centerChangedListener !== null) {
                    google.maps.event.removeListener(centerChangedListener);
                }
                setCenterChangedListener(google.maps.event.addListener(map, 'center_changed', onCenterChanged));
            }
        }, [onClick]);
        react.useEffect(function () {
            var map = ref.current === null
                ? null
                : new google.maps.Map(ref.current, options);
            setMap(map);
            if (map !== null && onLoad) {
                onLoad(map);
            }
            return function () {
                if (map !== null) {
                    if (onUnmount) {
                        onUnmount(map);
                    }
                }
            };
        }, []);
        return (jsxRuntime.jsx("div", { id: id, ref: ref, style: mapContainerStyle, className: mapContainerClassName, children: jsxRuntime.jsx(MapContext.Provider, { value: map, children: map !== null ? children : null }) }));
    }
    react.memo(GoogleMapFunctional);
    var GoogleMap = /** @class */ (function (_super) {
        __extends(GoogleMap, _super);
        function GoogleMap() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.state = {
                map: null,
            };
            _this.registeredEvents = [];
            _this.mapRef = null;
            _this.getInstance = function () {
                if (_this.mapRef === null) {
                    return null;
                }
                return new google.maps.Map(_this.mapRef, _this.props.options);
            };
            _this.panTo = function (latLng) {
                var map = _this.getInstance();
                if (map) {
                    map.panTo(latLng);
                }
            };
            _this.setMapCallback = function () {
                if (_this.state.map !== null) {
                    if (_this.props.onLoad) {
                        _this.props.onLoad(_this.state.map);
                    }
                }
            };
            _this.getRef = function (ref) {
                _this.mapRef = ref;
            };
            return _this;
        }
        GoogleMap.prototype.componentDidMount = function () {
            var map = this.getInstance();
            this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
                updaterMap: updaterMap$i,
                eventMap: eventMap$i,
                prevProps: {},
                nextProps: this.props,
                instance: map,
            });
            this.setState(function setMap() {
                return {
                    map: map,
                };
            }, this.setMapCallback);
        };
        GoogleMap.prototype.componentDidUpdate = function (prevProps) {
            if (this.state.map !== null) {
                unregisterEvents(this.registeredEvents);
                this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
                    updaterMap: updaterMap$i,
                    eventMap: eventMap$i,
                    prevProps: prevProps,
                    nextProps: this.props,
                    instance: this.state.map,
                });
            }
        };
        GoogleMap.prototype.componentWillUnmount = function () {
            if (this.state.map !== null) {
                if (this.props.onUnmount) {
                    this.props.onUnmount(this.state.map);
                }
                unregisterEvents(this.registeredEvents);
            }
        };
        GoogleMap.prototype.render = function () {
            return (jsxRuntime.jsx("div", { id: this.props.id, ref: this.getRef, style: this.props.mapContainerStyle, className: this.props.mapContainerClassName, children: jsxRuntime.jsx(MapContext.Provider, { value: this.state.map, children: this.state.map !== null ? this.props.children : null }) }));
        };
        return GoogleMap;
    }(react.PureComponent));

    var isBrowser = typeof document !== 'undefined';

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function injectScript(_a) {
        var url = _a.url, id = _a.id, nonce = _a.nonce;
        if (!isBrowser) {
            return Promise.reject(new Error('document is undefined'));
        }
        return new Promise(function injectScriptCallback(resolve, reject) {
            var existingScript = document.getElementById(id);
            var windowWithGoogleMap = window;
            if (existingScript) {
                // Same script id/url: keep same script
                var dataStateAttribute = existingScript.getAttribute('data-state');
                if (existingScript.src === url && dataStateAttribute !== 'error') {
                    if (dataStateAttribute === 'ready') {
                        return resolve(id);
                    }
                    else {
                        var originalInitMap_1 = windowWithGoogleMap.initMap;
                        var originalErrorCallback_1 = existingScript.onerror;
                        windowWithGoogleMap.initMap = function initMap() {
                            if (originalInitMap_1) {
                                originalInitMap_1();
                            }
                            resolve(id);
                        };
                        existingScript.onerror = function (err) {
                            if (originalErrorCallback_1) {
                                originalErrorCallback_1(err);
                            }
                            reject(err);
                        };
                        return;
                    }
                }
                // Same script id, but either
                // 1. requested URL is different
                // 2. script failed to load
                else {
                    existingScript.remove();
                }
            }
            var script = document.createElement('script');
            script.type = 'text/javascript';
            script.src = url;
            script.id = id;
            script.async = true;
            script.nonce = nonce || '';
            script.onerror = function onerror(err) {
                script.setAttribute('data-state', 'error');
                reject(err);
            };
            windowWithGoogleMap.initMap = function onload() {
                script.setAttribute('data-state', 'ready');
                resolve(id);
            };
            document.head.appendChild(script);
        }).catch(function (err) {
            console.error('injectScript error: ', err);
            throw err;
        });
    }

    function isGoogleFontStyle(element) {
        // 'Roboto' or 'Google Sans Text' font download
        var href = element.href;
        if (href && (href.indexOf('https://fonts.googleapis.com/css?family=Roboto') === 0 ||
            href.indexOf('https://fonts.googleapis.com/css?family=Google+Sans+Text') === 0)) {
            return true;
        }
        // font style elements
        if (
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        element.tagName.toLowerCase() === 'style' &&
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            element.styleSheet &&
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            element.styleSheet.cssText &&
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            element.styleSheet.cssText.replace('\r\n', '').indexOf('.gm-style') === 0) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            element.styleSheet.cssText = '';
            return true;
        }
        // font style elements for other browsers
        if (
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        element.tagName.toLowerCase() === 'style' &&
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            element.innerHTML &&
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            element.innerHTML.replace('\r\n', '').indexOf('.gm-style') === 0) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            element.innerHTML = '';
            return true;
        }
        // when google tries to add empty style
        if (
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        element.tagName.toLowerCase() === 'style' &&
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            !element.styleSheet &&
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            !element.innerHTML) {
            return true;
        }
        return false;
    }
    // Preventing the Google Maps library from downloading an extra font
    function preventGoogleFonts() {
        // we override these methods only for one particular head element
        // default methods for other elements are not affected
        var head = document.getElementsByTagName('head')[0];
        if (head) {
            var trueInsertBefore_1 = head.insertBefore.bind(head);
            // TODO: adding return before reflect solves the TS issue
            head.insertBefore = function insertBefore(newElement, referenceElement) {
                if (!isGoogleFontStyle(newElement)) {
                    Reflect.apply(trueInsertBefore_1, head, [newElement, referenceElement]);
                }
                return newElement;
            };
            var trueAppend_1 = head.appendChild.bind(head);
            // TODO: adding return before reflect solves the TS issue
            head.appendChild = function appendChild(textNode) {
                if (!isGoogleFontStyle(textNode)) {
                    Reflect.apply(trueAppend_1, head, [textNode]);
                }
                return textNode;
            };
        }
    }

    function makeLoadScriptUrl(_a) {
        var googleMapsApiKey = _a.googleMapsApiKey, googleMapsClientId = _a.googleMapsClientId, _b = _a.version, version = _b === void 0 ? 'weekly' : _b, language = _a.language, region = _a.region, libraries = _a.libraries, channel = _a.channel, mapIds = _a.mapIds, authReferrerPolicy = _a.authReferrerPolicy;
        var params = [];
        invariant$1((googleMapsApiKey && googleMapsClientId) || !(googleMapsApiKey && googleMapsClientId), 'You need to specify either googleMapsApiKey or googleMapsClientId for @react-google-maps/api load script to work. You cannot use both at the same time.');
        if (googleMapsApiKey) {
            params.push("key=".concat(googleMapsApiKey));
        }
        else if (googleMapsClientId) {
            params.push("client=".concat(googleMapsClientId));
        }
        if (version) {
            params.push("v=".concat(version));
        }
        if (language) {
            params.push("language=".concat(language));
        }
        if (region) {
            params.push("region=".concat(region));
        }
        if (libraries && libraries.length) {
            params.push("libraries=".concat(libraries.sort().join(',')));
        }
        if (channel) {
            params.push("channel=".concat(channel));
        }
        if (mapIds && mapIds.length) {
            params.push("map_ids=".concat(mapIds.join(',')));
        }
        if (authReferrerPolicy) {
            params.push("auth_referrer_policy=".concat(authReferrerPolicy));
        }
        params.push('loading=async');
        params.push('callback=initMap');
        return "https://maps.googleapis.com/maps/api/js?".concat(params.join('&'));
    }

    var cleaningUp = false;
    function DefaultLoadingElement() {
        return jsxRuntime.jsx("div", { children: "Loading..." });
    }
    var defaultLoadScriptProps = {
        id: 'script-loader',
        version: 'weekly',
    };
    var LoadScript = /** @class */ (function (_super) {
        __extends(LoadScript, _super);
        function LoadScript() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.check = react.createRef();
            _this.state = {
                loaded: false,
            };
            _this.cleanupCallback = function () {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                delete window.google.maps;
                _this.injectScript();
            };
            _this.isCleaningUp = function () { return __awaiter$1(_this, void 0, void 0, function () {
                function promiseCallback(resolve) {
                    if (!cleaningUp) {
                        resolve();
                    }
                    else {
                        if (isBrowser) {
                            var timer_1 = window.setInterval(function interval() {
                                if (!cleaningUp) {
                                    window.clearInterval(timer_1);
                                    resolve();
                                }
                            }, 1);
                        }
                    }
                    return;
                }
                return __generator(this, function (_a) {
                    return [2 /*return*/, new Promise(promiseCallback)];
                });
            }); };
            _this.cleanup = function () {
                cleaningUp = true;
                var script = document.getElementById(_this.props.id);
                if (script && script.parentNode) {
                    script.parentNode.removeChild(script);
                }
                Array.prototype.slice
                    .call(document.getElementsByTagName('script'))
                    .filter(function filter(script) {
                    return typeof script.src === 'string' && script.src.includes('maps.googleapis');
                })
                    .forEach(function forEach(script) {
                    if (script.parentNode) {
                        script.parentNode.removeChild(script);
                    }
                });
                Array.prototype.slice
                    .call(document.getElementsByTagName('link'))
                    .filter(function filter(link) {
                    return (link.href === 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Google+Sans');
                })
                    .forEach(function forEach(link) {
                    if (link.parentNode) {
                        link.parentNode.removeChild(link);
                    }
                });
                Array.prototype.slice
                    .call(document.getElementsByTagName('style'))
                    .filter(function filter(style) {
                    return (style.innerText !== undefined &&
                        style.innerText.length > 0 &&
                        style.innerText.includes('.gm-'));
                })
                    .forEach(function forEach(style) {
                    if (style.parentNode) {
                        style.parentNode.removeChild(style);
                    }
                });
            };
            _this.injectScript = function () {
                if (_this.props.preventGoogleFontsLoading) {
                    preventGoogleFonts();
                }
                invariant$1(!!_this.props.id, 'LoadScript requires "id" prop to be a string: %s', _this.props.id);
                var injectScriptOptions = {
                    id: _this.props.id,
                    nonce: _this.props.nonce,
                    url: makeLoadScriptUrl(_this.props),
                };
                injectScript(injectScriptOptions)
                    .then(function () {
                    if (_this.props.onLoad) {
                        _this.props.onLoad();
                    }
                    _this.setState(function setLoaded() {
                        return {
                            loaded: true,
                        };
                    });
                    return;
                })
                    .catch(function (err) {
                    if (_this.props.onError) {
                        _this.props.onError(err);
                    }
                    console.error("\n          There has been an Error with loading Google Maps API script, please check that you provided correct google API key (".concat(_this
                        .props.googleMapsApiKey || '-', ") or Client ID (").concat(_this.props.googleMapsClientId ||
                        '-', ") to <LoadScript />\n          Otherwise it is a Network issue.\n        "));
                });
            };
            return _this;
        }
        LoadScript.prototype.componentDidMount = function () {
            if (isBrowser) {
                if (window.google && window.google.maps && !cleaningUp) {
                    console.error('google api is already presented');
                    return;
                }
                this.isCleaningUp()
                    .then(this.injectScript)
                    .catch(function error(err) {
                    console.error('Error at injecting script after cleaning up: ', err);
                });
            }
        };
        LoadScript.prototype.componentDidUpdate = function (prevProps) {
            if (this.props.libraries !== prevProps.libraries) {
                console.warn('Performance warning! LoadScript has been reloaded unintentionally! You should not pass `libraries` prop as new array. Please keep an array of libraries as static class property for Components and PureComponents, or just a const variable outside of component, or somewhere in config files or ENV variables');
            }
            if (isBrowser && prevProps.language !== this.props.language) {
                this.cleanup();
                // TODO: refactor to use gDSFP maybe... wait for hooks refactoring.
                this.setState(function setLoaded() {
                    return {
                        loaded: false,
                    };
                }, this.cleanupCallback);
            }
        };
        LoadScript.prototype.componentWillUnmount = function () {
            var _this = this;
            if (isBrowser) {
                this.cleanup();
                var timeoutCallback = function () {
                    if (!_this.check.current) {
                        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                        // @ts-ignore
                        delete window.google;
                        cleaningUp = false;
                    }
                };
                window.setTimeout(timeoutCallback, 1);
                if (this.props.onUnmount) {
                    this.props.onUnmount();
                }
            }
        };
        LoadScript.prototype.render = function () {
            return (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsx("div", { ref: this.check }), this.state.loaded
                        ? this.props.children
                        : this.props.loadingElement || jsxRuntime.jsx(DefaultLoadingElement, {})] }));
        };
        LoadScript.defaultProps = defaultLoadScriptProps;
        return LoadScript;
    }(react.PureComponent));

    /* eslint-disable filenames/match-regex */
    var previouslyLoadedUrl;
    function useLoadScript(_a) {
        var _b = _a.id, id = _b === void 0 ? defaultLoadScriptProps.id : _b, _c = _a.version, version = _c === void 0 ? defaultLoadScriptProps.version : _c, nonce = _a.nonce, googleMapsApiKey = _a.googleMapsApiKey, googleMapsClientId = _a.googleMapsClientId, language = _a.language, region = _a.region, libraries = _a.libraries, preventGoogleFontsLoading = _a.preventGoogleFontsLoading, channel = _a.channel, mapIds = _a.mapIds, authReferrerPolicy = _a.authReferrerPolicy;
        var isMounted = react.useRef(false);
        var _d = react.useState(false), isLoaded = _d[0], setLoaded = _d[1];
        var _e = react.useState(undefined), loadError = _e[0], setLoadError = _e[1];
        react.useEffect(function trackMountedState() {
            isMounted.current = true;
            return function () {
                isMounted.current = false;
            };
        }, []);
        react.useEffect(function applyPreventGoogleFonts() {
            if (isBrowser && preventGoogleFontsLoading) {
                preventGoogleFonts();
            }
        }, [preventGoogleFontsLoading]);
        react.useEffect(function validateLoadedState() {
            if (isLoaded) {
                invariant$1(!!window.google, 'useLoadScript was marked as loaded, but window.google is not present. Something went wrong.');
            }
        }, [isLoaded]);
        var url = makeLoadScriptUrl({
            version: version,
            googleMapsApiKey: googleMapsApiKey,
            googleMapsClientId: googleMapsClientId,
            language: language,
            region: region,
            libraries: libraries,
            channel: channel,
            mapIds: mapIds,
            authReferrerPolicy: authReferrerPolicy
        });
        react.useEffect(function loadScriptAndModifyLoadedState() {
            if (!isBrowser) {
                return;
            }
            function setLoadedIfMounted() {
                if (isMounted.current) {
                    setLoaded(true);
                    previouslyLoadedUrl = url;
                }
            }
            if (window.google && window.google.maps && previouslyLoadedUrl === url) {
                setLoadedIfMounted();
                return;
            }
            injectScript({ id: id, url: url, nonce: nonce })
                .then(setLoadedIfMounted)
                .catch(function handleInjectError(err) {
                if (isMounted.current) {
                    setLoadError(err);
                }
                console.warn("\n        There has been an Error with loading Google Maps API script, please check that you provided correct google API key (".concat(googleMapsApiKey ||
                    '-', ") or Client ID (").concat(googleMapsClientId || '-', ")\n        Otherwise it is a Network issue.\n      "));
                console.error(err);
            });
        }, [id, url, nonce]);
        var prevLibraries = react.useRef();
        react.useEffect(function checkPerformance() {
            if (prevLibraries.current && libraries !== prevLibraries.current) {
                console.warn('Performance warning! LoadScript has been reloaded unintentionally! You should not pass `libraries` prop as new array. Please keep an array of libraries as static class property for Components and PureComponents, or just a const variable outside of component, or somewhere in config files or ENV variables');
            }
            prevLibraries.current = libraries;
        }, [libraries]);
        return { isLoaded: isLoaded, loadError: loadError, url: url };
    }

    var defaultLoadingElement = jsxRuntime.jsx(DefaultLoadingElement, {});
    function LoadScriptNext(_a) {
        var loadingElement = _a.loadingElement, onLoad = _a.onLoad, onError = _a.onError, onUnmount = _a.onUnmount, children = _a.children, hookOptions = __rest$1(_a, ["loadingElement", "onLoad", "onError", "onUnmount", "children"]);
        var _b = useLoadScript(hookOptions), isLoaded = _b.isLoaded, loadError = _b.loadError;
        react.useEffect(function handleOnLoad() {
            if (isLoaded && typeof onLoad === 'function') {
                onLoad();
            }
        }, [isLoaded, onLoad]);
        react.useEffect(function handleOnError() {
            if (loadError && typeof onError === 'function') {
                onError(loadError);
            }
        }, [loadError, onError]);
        react.useEffect(function handleOnUnmount() {
            return function () {
                if (onUnmount) {
                    onUnmount();
                }
            };
        }, [onUnmount]);
        return isLoaded ? children : loadingElement || defaultLoadingElement;
    }
    var LoadScriptNext$1 = react.memo(LoadScriptNext);

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    // do not edit .js files directly - edit src/index.jst



    var fastDeepEqual$1 = function equal(a, b) {
      if (a === b) return true;

      if (a && b && typeof a == 'object' && typeof b == 'object') {
        if (a.constructor !== b.constructor) return false;

        var length, i, keys;
        if (Array.isArray(a)) {
          length = a.length;
          if (length != b.length) return false;
          for (i = length; i-- !== 0;)
            if (!equal(a[i], b[i])) return false;
          return true;
        }



        if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
        if (a.valueOf !== Object.prototype.valueOf) return a.valueOf() === b.valueOf();
        if (a.toString !== Object.prototype.toString) return a.toString() === b.toString();

        keys = Object.keys(a);
        length = keys.length;
        if (length !== Object.keys(b).length) return false;

        for (i = length; i-- !== 0;)
          if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;

        for (i = length; i-- !== 0;) {
          var key = keys[i];

          if (!equal(a[key], b[key])) return false;
        }

        return true;
      }

      // true if both NaN, false otherwise
      return a!==a && b!==b;
    };

    /**
     * Copyright 2019 Google LLC. All Rights Reserved.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at.
     *
     *      Http://www.apache.org/licenses/LICENSE-2.0.
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    const DEFAULT_ID = "__googleMapsScriptId";
    /**
     * The status of the [[Loader]].
     */
    var LoaderStatus;
    (function (LoaderStatus) {
        LoaderStatus[LoaderStatus["INITIALIZED"] = 0] = "INITIALIZED";
        LoaderStatus[LoaderStatus["LOADING"] = 1] = "LOADING";
        LoaderStatus[LoaderStatus["SUCCESS"] = 2] = "SUCCESS";
        LoaderStatus[LoaderStatus["FAILURE"] = 3] = "FAILURE";
    })(LoaderStatus || (LoaderStatus = {}));
    /**
     * [[Loader]] makes it easier to add Google Maps JavaScript API to your application
     * dynamically using
     * [Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).
     * It works by dynamically creating and appending a script node to the the
     * document head and wrapping the callback function so as to return a promise.
     *
     * ```
     * const loader = new Loader({
     *   apiKey: "",
     *   version: "weekly",
     *   libraries: ["places"]
     * });
     *
     * loader.load().then((google) => {
     *   const map = new google.maps.Map(...)
     * })
     * ```
     */
    class Loader {
        /**
         * Creates an instance of Loader using [[LoaderOptions]]. No defaults are set
         * using this library, instead the defaults are set by the Google Maps
         * JavaScript API server.
         *
         * ```
         * const loader = Loader({apiKey, version: 'weekly', libraries: ['places']});
         * ```
         */
        constructor({ apiKey, authReferrerPolicy, channel, client, id = DEFAULT_ID, language, libraries = [], mapIds, nonce, region, retries = 3, url = "https://maps.googleapis.com/maps/api/js", version, }) {
            this.callbacks = [];
            this.done = false;
            this.loading = false;
            this.errors = [];
            this.apiKey = apiKey;
            this.authReferrerPolicy = authReferrerPolicy;
            this.channel = channel;
            this.client = client;
            this.id = id || DEFAULT_ID; // Do not allow empty string
            this.language = language;
            this.libraries = libraries;
            this.mapIds = mapIds;
            this.nonce = nonce;
            this.region = region;
            this.retries = retries;
            this.url = url;
            this.version = version;
            if (Loader.instance) {
                if (!fastDeepEqual$1(this.options, Loader.instance.options)) {
                    throw new Error(`Loader must not be called again with different options. ${JSON.stringify(this.options)} !== ${JSON.stringify(Loader.instance.options)}`);
                }
                return Loader.instance;
            }
            Loader.instance = this;
        }
        get options() {
            return {
                version: this.version,
                apiKey: this.apiKey,
                channel: this.channel,
                client: this.client,
                id: this.id,
                libraries: this.libraries,
                language: this.language,
                region: this.region,
                mapIds: this.mapIds,
                nonce: this.nonce,
                url: this.url,
                authReferrerPolicy: this.authReferrerPolicy,
            };
        }
        get status() {
            if (this.errors.length) {
                return LoaderStatus.FAILURE;
            }
            if (this.done) {
                return LoaderStatus.SUCCESS;
            }
            if (this.loading) {
                return LoaderStatus.LOADING;
            }
            return LoaderStatus.INITIALIZED;
        }
        get failed() {
            return this.done && !this.loading && this.errors.length >= this.retries + 1;
        }
        /**
         * CreateUrl returns the Google Maps JavaScript API script url given the [[LoaderOptions]].
         *
         * @ignore
         * @deprecated
         */
        createUrl() {
            let url = this.url;
            url += `?callback=__googleMapsCallback`;
            if (this.apiKey) {
                url += `&key=${this.apiKey}`;
            }
            if (this.channel) {
                url += `&channel=${this.channel}`;
            }
            if (this.client) {
                url += `&client=${this.client}`;
            }
            if (this.libraries.length > 0) {
                url += `&libraries=${this.libraries.join(",")}`;
            }
            if (this.language) {
                url += `&language=${this.language}`;
            }
            if (this.region) {
                url += `&region=${this.region}`;
            }
            if (this.version) {
                url += `&v=${this.version}`;
            }
            if (this.mapIds) {
                url += `&map_ids=${this.mapIds.join(",")}`;
            }
            if (this.authReferrerPolicy) {
                url += `&auth_referrer_policy=${this.authReferrerPolicy}`;
            }
            return url;
        }
        deleteScript() {
            const script = document.getElementById(this.id);
            if (script) {
                script.remove();
            }
        }
        /**
         * Load the Google Maps JavaScript API script and return a Promise.
         * @deprecated, use importLibrary() instead.
         */
        load() {
            return this.loadPromise();
        }
        /**
         * Load the Google Maps JavaScript API script and return a Promise.
         *
         * @ignore
         * @deprecated, use importLibrary() instead.
         */
        loadPromise() {
            return new Promise((resolve, reject) => {
                this.loadCallback((err) => {
                    if (!err) {
                        resolve(window.google);
                    }
                    else {
                        reject(err.error);
                    }
                });
            });
        }
        importLibrary(name) {
            this.execute();
            return google.maps.importLibrary(name);
        }
        /**
         * Load the Google Maps JavaScript API script with a callback.
         * @deprecated, use importLibrary() instead.
         */
        loadCallback(fn) {
            this.callbacks.push(fn);
            this.execute();
        }
        /**
         * Set the script on document.
         */
        setScript() {
            var _a, _b;
            if (document.getElementById(this.id)) {
                // TODO wrap onerror callback for cases where the script was loaded elsewhere
                this.callback();
                return;
            }
            const params = {
                key: this.apiKey,
                channel: this.channel,
                client: this.client,
                libraries: this.libraries.length && this.libraries,
                v: this.version,
                mapIds: this.mapIds,
                language: this.language,
                region: this.region,
                authReferrerPolicy: this.authReferrerPolicy,
            };
            // keep the URL minimal:
            Object.keys(params).forEach(
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (key) => !params[key] && delete params[key]);
            if (!((_b = (_a = window === null || window === void 0 ? void 0 : window.google) === null || _a === void 0 ? void 0 : _a.maps) === null || _b === void 0 ? void 0 : _b.importLibrary)) {
                // tweaked copy of https://developers.google.com/maps/documentation/javascript/load-maps-js-api#dynamic-library-import
                // which also sets the base url, the id, and the nonce
                /* eslint-disable */
                ((g) => {
                    // @ts-ignore
                    let h, a, k, p = "The Google Maps JavaScript API", c = "google", l = "importLibrary", q = "__ib__", m = document, b = window;
                    // @ts-ignore
                    b = b[c] || (b[c] = {});
                    // @ts-ignore
                    const d = b.maps || (b.maps = {}), r = new Set(), e = new URLSearchParams(), u = () => 
                    // @ts-ignore
                    h || (h = new Promise((f, n) => __awaiter(this, void 0, void 0, function* () {
                        var _a;
                        yield (a = m.createElement("script"));
                        a.id = this.id;
                        e.set("libraries", [...r] + "");
                        // @ts-ignore
                        for (k in g)
                            e.set(k.replace(/[A-Z]/g, (t) => "_" + t[0].toLowerCase()), g[k]);
                        e.set("callback", c + ".maps." + q);
                        a.src = this.url + `?` + e;
                        d[q] = f;
                        a.onerror = () => (h = n(Error(p + " could not load.")));
                        // @ts-ignore
                        a.nonce = this.nonce || ((_a = m.querySelector("script[nonce]")) === null || _a === void 0 ? void 0 : _a.nonce) || "";
                        m.head.append(a);
                    })));
                    // @ts-ignore
                    d[l] ? console.warn(p + " only loads once. Ignoring:", g) : (d[l] = (f, ...n) => r.add(f) && u().then(() => d[l](f, ...n)));
                })(params);
                /* eslint-enable */
            }
            // While most libraries populate the global namespace when loaded via bootstrap params,
            // this is not the case for "marker" when used with the inline bootstrap loader
            // (and maybe others in the future). So ensure there is an importLibrary for each:
            const libraryPromises = this.libraries.map((library) => this.importLibrary(library));
            // ensure at least one library, to kick off loading...
            if (!libraryPromises.length) {
                libraryPromises.push(this.importLibrary("core"));
            }
            Promise.all(libraryPromises).then(() => this.callback(), (error) => {
                const event = new ErrorEvent("error", { error }); // for backwards compat
                this.loadErrorCallback(event);
            });
        }
        /**
         * Reset the loader state.
         */
        reset() {
            this.deleteScript();
            this.done = false;
            this.loading = false;
            this.errors = [];
            this.onerrorEvent = null;
        }
        resetIfRetryingFailed() {
            if (this.failed) {
                this.reset();
            }
        }
        loadErrorCallback(e) {
            this.errors.push(e);
            if (this.errors.length <= this.retries) {
                const delay = this.errors.length * Math.pow(2, this.errors.length);
                console.error(`Failed to load Google Maps script, retrying in ${delay} ms.`);
                setTimeout(() => {
                    this.deleteScript();
                    this.setScript();
                }, delay);
            }
            else {
                this.onerrorEvent = e;
                this.callback();
            }
        }
        callback() {
            this.done = true;
            this.loading = false;
            this.callbacks.forEach((cb) => {
                cb(this.onerrorEvent);
            });
            this.callbacks = [];
        }
        execute() {
            this.resetIfRetryingFailed();
            if (this.done) {
                this.callback();
            }
            else {
                // short circuit and warn if google.maps is already loaded
                if (window.google && window.google.maps && window.google.maps.version) {
                    console.warn("Google Maps already loaded outside @googlemaps/js-api-loader." +
                        "This may result in undesirable behavior as options and script parameters may not match.");
                    this.callback();
                    return;
                }
                if (this.loading) ;
                else {
                    this.loading = true;
                    this.setScript();
                }
            }
        }
    }

    var defaultLibraries = ['maps'];
    function useJsApiLoader(_a) {
        var _b = _a.id, id = _b === void 0 ? defaultLoadScriptProps.id : _b, _c = _a.version, version = _c === void 0 ? defaultLoadScriptProps.version : _c, nonce = _a.nonce, googleMapsApiKey = _a.googleMapsApiKey, 
        // googleMapsClientId,
        language = _a.language, region = _a.region, _d = _a.libraries, libraries = _d === void 0 ? defaultLibraries : _d, preventGoogleFontsLoading = _a.preventGoogleFontsLoading, 
        // channel,
        mapIds = _a.mapIds, authReferrerPolicy = _a.authReferrerPolicy;
        var isMounted = react.useRef(false);
        var _e = react.useState(false), isLoaded = _e[0], setLoaded = _e[1];
        var _f = react.useState(undefined), loadError = _f[0], setLoadError = _f[1];
        react.useEffect(function trackMountedState() {
            isMounted.current = true;
            return function () {
                isMounted.current = false;
            };
        }, []);
        var loader = react.useMemo(function () {
            return new Loader({
                id: id,
                apiKey: googleMapsApiKey,
                version: version,
                libraries: libraries,
                language: language || 'en',
                region: region || 'US',
                mapIds: mapIds || [],
                nonce: nonce || '',
                authReferrerPolicy: authReferrerPolicy || 'origin',
            });
        }, [id, googleMapsApiKey, version, libraries, language, region, mapIds, nonce, authReferrerPolicy]);
        react.useEffect(function effect() {
            if (isLoaded) {
                return;
            }
            else {
                loader.load().then(function () {
                    if (isMounted.current) {
                        setLoaded(true);
                    }
                    return;
                })
                    .catch(function (error) {
                    setLoadError(error);
                });
            }
        }, []);
        react.useEffect(function () {
            if (isBrowser && preventGoogleFontsLoading) {
                preventGoogleFonts();
            }
        }, [preventGoogleFontsLoading]);
        var prevLibraries = react.useRef();
        react.useEffect(function () {
            if (prevLibraries.current && libraries !== prevLibraries.current) {
                console.warn('Performance warning! LoadScript has been reloaded unintentionally! You should not pass `libraries` prop as new array. Please keep an array of libraries as static class property for Components and PureComponents, or just a const variable outside of component, or somewhere in config files or ENV variables');
            }
            prevLibraries.current = libraries;
        }, [libraries]);
        return { isLoaded: isLoaded, loadError: loadError };
    }

    var eventMap$h = {};
    var updaterMap$h = {
        options: function (instance, options) {
            instance.setOptions(options);
        },
    };
    function TrafficLayerFunctional(_a) {
        var options = _a.options, onLoad = _a.onLoad, onUnmount = _a.onUnmount;
        var map = react.useContext(MapContext);
        var _b = react.useState(null), instance = _b[0], setInstance = _b[1];
        // Order does matter
        react.useEffect(function () {
            if (instance !== null) {
                instance.setMap(map);
            }
        }, [map]);
        react.useEffect(function () {
            if (options && instance !== null) {
                instance.setOptions(options);
            }
        }, [instance, options]);
        react.useEffect(function () {
            var trafficLayer = new google.maps.TrafficLayer(__assign(__assign({}, (options || {})), { map: map }));
            setInstance(trafficLayer);
            if (onLoad) {
                onLoad(trafficLayer);
            }
            return function () {
                if (instance !== null) {
                    if (onUnmount) {
                        onUnmount(instance);
                    }
                    instance.setMap(null);
                }
            };
        }, []);
        return null;
    }
    var TrafficLayerF = react.memo(TrafficLayerFunctional);
    var TrafficLayer = /** @class */ (function (_super) {
        __extends(TrafficLayer, _super);
        function TrafficLayer() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.state = {
                trafficLayer: null,
            };
            _this.setTrafficLayerCallback = function () {
                if (_this.state.trafficLayer !== null && _this.props.onLoad) {
                    _this.props.onLoad(_this.state.trafficLayer);
                }
            };
            _this.registeredEvents = [];
            return _this;
        }
        TrafficLayer.prototype.componentDidMount = function () {
            var trafficLayer = new google.maps.TrafficLayer(__assign(__assign({}, (this.props.options || {})), { map: this.context }));
            this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
                updaterMap: updaterMap$h,
                eventMap: eventMap$h,
                prevProps: {},
                nextProps: this.props,
                instance: trafficLayer,
            });
            this.setState(function setTrafficLayer() {
                return {
                    trafficLayer: trafficLayer,
                };
            }, this.setTrafficLayerCallback);
        };
        TrafficLayer.prototype.componentDidUpdate = function (prevProps) {
            if (this.state.trafficLayer !== null) {
                unregisterEvents(this.registeredEvents);
                this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
                    updaterMap: updaterMap$h,
                    eventMap: eventMap$h,
                    prevProps: prevProps,
                    nextProps: this.props,
                    instance: this.state.trafficLayer,
                });
            }
        };
        TrafficLayer.prototype.componentWillUnmount = function () {
            if (this.state.trafficLayer !== null) {
                if (this.props.onUnmount) {
                    this.props.onUnmount(this.state.trafficLayer);
                }
                unregisterEvents(this.registeredEvents);
                this.state.trafficLayer.setMap(null);
            }
        };
        TrafficLayer.prototype.render = function () {
            return null;
        };
        TrafficLayer.contextType = MapContext;
        return TrafficLayer;
    }(react.PureComponent));

    function BicyclingLayerFunctional(_a) {
        var onLoad = _a.onLoad, onUnmount = _a.onUnmount;
        var map = react.useContext(MapContext);
        var _b = react.useState(null), instance = _b[0], setInstance = _b[1];
        // Order does matter
        react.useEffect(function () {
            if (instance !== null) {
                instance.setMap(map);
            }
        }, [map]);
        react.useEffect(function () {
            var bicyclingLayer = new google.maps.BicyclingLayer();
            setInstance(bicyclingLayer);
            bicyclingLayer.setMap(map);
            if (onLoad) {
                onLoad(bicyclingLayer);
            }
            return function () {
                if (bicyclingLayer !== null) {
                    if (onUnmount) {
                        onUnmount(bicyclingLayer);
                    }
                    bicyclingLayer.setMap(null);
                }
            };
        }, []);
        return null;
    }
    var BicyclingLayerF = react.memo(BicyclingLayerFunctional);
    var BicyclingLayer = /** @class */ (function (_super) {
        __extends(BicyclingLayer, _super);
        function BicyclingLayer() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.state = {
                bicyclingLayer: null,
            };
            _this.setBicyclingLayerCallback = function () {
                if (_this.state.bicyclingLayer !== null) {
                    _this.state.bicyclingLayer.setMap(_this.context);
                    if (_this.props.onLoad) {
                        _this.props.onLoad(_this.state.bicyclingLayer);
                    }
                }
            };
            return _this;
        }
        BicyclingLayer.prototype.componentDidMount = function () {
            var bicyclingLayer = new google.maps.BicyclingLayer();
            this.setState(function () {
                return {
                    bicyclingLayer: bicyclingLayer,
                };
            }, this.setBicyclingLayerCallback);
        };
        BicyclingLayer.prototype.componentWillUnmount = function () {
            if (this.state.bicyclingLayer !== null) {
                if (this.props.onUnmount) {
                    this.props.onUnmount(this.state.bicyclingLayer);
                }
                this.state.bicyclingLayer.setMap(null);
            }
        };
        BicyclingLayer.prototype.render = function () {
            return null;
        };
        BicyclingLayer.contextType = MapContext;
        return BicyclingLayer;
    }(react.PureComponent));

    function TransitLayerFunctional(_a) {
        var onLoad = _a.onLoad, onUnmount = _a.onUnmount;
        var map = react.useContext(MapContext);
        var _b = react.useState(null), instance = _b[0], setInstance = _b[1];
        // Order does matter
        react.useEffect(function () {
            if (instance !== null) {
                instance.setMap(map);
            }
        }, [map]);
        react.useEffect(function () {
            var transitLayer = new google.maps.TransitLayer();
            setInstance(transitLayer);
            transitLayer.setMap(map);
            if (onLoad) {
                onLoad(transitLayer);
            }
            return function () {
                if (instance !== null) {
                    if (onUnmount) {
                        onUnmount(instance);
                    }
                    instance.setMap(null);
                }
            };
        }, []);
        return null;
    }
    var TransitLayerF = react.memo(TransitLayerFunctional);
    var TransitLayer = /** @class */ (function (_super) {
        __extends(TransitLayer, _super);
        function TransitLayer() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.state = {
                transitLayer: null,
            };
            _this.setTransitLayerCallback = function () {
                if (_this.state.transitLayer !== null) {
                    _this.state.transitLayer.setMap(_this.context);
                    if (_this.props.onLoad) {
                        _this.props.onLoad(_this.state.transitLayer);
                    }
                }
            };
            return _this;
        }
        TransitLayer.prototype.componentDidMount = function () {
            var transitLayer = new google.maps.TransitLayer();
            this.setState(function setTransitLayer() {
                return {
                    transitLayer: transitLayer,
                };
            }, this.setTransitLayerCallback);
        };
        TransitLayer.prototype.componentWillUnmount = function () {
            if (this.state.transitLayer !== null) {
                if (this.props.onUnmount) {
                    this.props.onUnmount(this.state.transitLayer);
                }
                this.state.transitLayer.setMap(null);
            }
        };
        TransitLayer.prototype.render = function () {
            return null;
        };
        TransitLayer.contextType = MapContext;
        return TransitLayer;
    }(react.PureComponent));

    var eventMap$g = {
        onCircleComplete: 'circlecomplete',
        onMarkerComplete: 'markercomplete',
        onOverlayComplete: 'overlaycomplete',
        onPolygonComplete: 'polygoncomplete',
        onPolylineComplete: 'polylinecomplete',
        onRectangleComplete: 'rectanglecomplete',
    };
    var updaterMap$g = {
        drawingMode: function (instance, drawingMode) {
            instance.setDrawingMode(drawingMode);
        },
        options: function (instance, options) {
            instance.setOptions(options);
        },
    };
    function DrawingManagerFunctional(_a) {
        var options = _a.options, drawingMode = _a.drawingMode, onCircleComplete = _a.onCircleComplete, onMarkerComplete = _a.onMarkerComplete, onOverlayComplete = _a.onOverlayComplete, onPolygonComplete = _a.onPolygonComplete, onPolylineComplete = _a.onPolylineComplete, onRectangleComplete = _a.onRectangleComplete, onLoad = _a.onLoad, onUnmount = _a.onUnmount;
        var map = react.useContext(MapContext);
        var _b = react.useState(null), instance = _b[0], setInstance = _b[1];
        var _c = react.useState(null), circlecompleteListener = _c[0], setCircleCompleteListener = _c[1];
        var _d = react.useState(null), markercompleteListener = _d[0], setMarkerCompleteListener = _d[1];
        var _e = react.useState(null), overlaycompleteListener = _e[0], setOverlayCompleteListener = _e[1];
        var _f = react.useState(null), polygoncompleteListener = _f[0], setPolygonCompleteListener = _f[1];
        var _g = react.useState(null), polylinecompleteListener = _g[0], setPolylineCompleteListener = _g[1];
        var _h = react.useState(null), rectanglecompleteListener = _h[0], setRectangleCompleteListener = _h[1];
        // Order does matter
        react.useEffect(function () {
            if (instance !== null) {
                instance.setMap(map);
            }
        }, [map]);
        react.useEffect(function () {
            if (options && instance !== null) {
                instance.setOptions(options);
            }
        }, [instance, options]);
        react.useEffect(function () {
            if (instance !== null) {
                instance.setDrawingMode(drawingMode !== null && drawingMode !== void 0 ? drawingMode : null);
            }
        }, [instance, drawingMode]);
        react.useEffect(function () {
            if (instance && onCircleComplete) {
                if (circlecompleteListener !== null) {
                    google.maps.event.removeListener(circlecompleteListener);
                }
                setCircleCompleteListener(google.maps.event.addListener(instance, 'circlecomplete', onCircleComplete));
            }
        }, [instance, onCircleComplete]);
        react.useEffect(function () {
            if (instance && onMarkerComplete) {
                if (markercompleteListener !== null) {
                    google.maps.event.removeListener(markercompleteListener);
                }
                setMarkerCompleteListener(google.maps.event.addListener(instance, 'markercomplete', onMarkerComplete));
            }
        }, [instance, onMarkerComplete]);
        react.useEffect(function () {
            if (instance && onOverlayComplete) {
                if (overlaycompleteListener !== null) {
                    google.maps.event.removeListener(overlaycompleteListener);
                }
                setOverlayCompleteListener(google.maps.event.addListener(instance, 'overlaycomplete', onOverlayComplete));
            }
        }, [instance, onOverlayComplete]);
        react.useEffect(function () {
            if (instance && onPolygonComplete) {
                if (polygoncompleteListener !== null) {
                    google.maps.event.removeListener(polygoncompleteListener);
                }
                setPolygonCompleteListener(google.maps.event.addListener(instance, 'polygoncomplete', onPolygonComplete));
            }
        }, [instance, onPolygonComplete]);
        react.useEffect(function () {
            if (instance && onPolylineComplete) {
                if (polylinecompleteListener !== null) {
                    google.maps.event.removeListener(polylinecompleteListener);
                }
                setPolylineCompleteListener(google.maps.event.addListener(instance, 'polylinecomplete', onPolylineComplete));
            }
        }, [instance, onPolylineComplete]);
        react.useEffect(function () {
            if (instance && onRectangleComplete) {
                if (rectanglecompleteListener !== null) {
                    google.maps.event.removeListener(rectanglecompleteListener);
                }
                setRectangleCompleteListener(google.maps.event.addListener(instance, 'rectanglecomplete', onRectangleComplete));
            }
        }, [instance, onRectangleComplete]);
        react.useEffect(function () {
            invariant$1(!!google.maps.drawing, "Did you include prop libraries={['drawing']} in the URL? %s", google.maps.drawing);
            var drawingManager = new google.maps.drawing.DrawingManager(__assign(__assign({}, (options || {})), { map: map }));
            if (drawingMode) {
                drawingManager.setDrawingMode(drawingMode);
            }
            if (onCircleComplete) {
                setCircleCompleteListener(google.maps.event.addListener(drawingManager, 'circlecomplete', onCircleComplete));
            }
            if (onMarkerComplete) {
                setMarkerCompleteListener(google.maps.event.addListener(drawingManager, 'markercomplete', onMarkerComplete));
            }
            if (onOverlayComplete) {
                setOverlayCompleteListener(google.maps.event.addListener(drawingManager, 'overlaycomplete', onOverlayComplete));
            }
            if (onPolygonComplete) {
                setPolygonCompleteListener(google.maps.event.addListener(drawingManager, 'polygoncomplete', onPolygonComplete));
            }
            if (onPolylineComplete) {
                setPolylineCompleteListener(google.maps.event.addListener(drawingManager, 'polylinecomplete', onPolylineComplete));
            }
            if (onRectangleComplete) {
                setRectangleCompleteListener(google.maps.event.addListener(drawingManager, 'rectanglecomplete', onRectangleComplete));
            }
            setInstance(drawingManager);
            if (onLoad) {
                onLoad(drawingManager);
            }
            return function () {
                if (instance !== null) {
                    if (circlecompleteListener) {
                        google.maps.event.removeListener(circlecompleteListener);
                    }
                    if (markercompleteListener) {
                        google.maps.event.removeListener(markercompleteListener);
                    }
                    if (overlaycompleteListener) {
                        google.maps.event.removeListener(overlaycompleteListener);
                    }
                    if (polygoncompleteListener) {
                        google.maps.event.removeListener(polygoncompleteListener);
                    }
                    if (polylinecompleteListener) {
                        google.maps.event.removeListener(polylinecompleteListener);
                    }
                    if (rectanglecompleteListener) {
                        google.maps.event.removeListener(rectanglecompleteListener);
                    }
                    if (onUnmount) {
                        onUnmount(instance);
                    }
                    instance.setMap(null);
                }
            };
        }, []);
        return null;
    }
    var DrawingManagerF = react.memo(DrawingManagerFunctional);
    var DrawingManager = /** @class */ (function (_super) {
        __extends(DrawingManager, _super);
        function DrawingManager(props) {
            var _this = _super.call(this, props) || this;
            _this.registeredEvents = [];
            _this.state = {
                drawingManager: null,
            };
            _this.setDrawingManagerCallback = function () {
                if (_this.state.drawingManager !== null && _this.props.onLoad) {
                    _this.props.onLoad(_this.state.drawingManager);
                }
            };
            invariant$1(!!google.maps.drawing, "Did you include prop libraries={['drawing']} in the URL? %s", google.maps.drawing);
            return _this;
        }
        DrawingManager.prototype.componentDidMount = function () {
            var drawingManager = new google.maps.drawing.DrawingManager(__assign(__assign({}, (this.props.options || {})), { map: this.context }));
            this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
                updaterMap: updaterMap$g,
                eventMap: eventMap$g,
                prevProps: {},
                nextProps: this.props,
                instance: drawingManager,
            });
            this.setState(function setDrawingManager() {
                return {
                    drawingManager: drawingManager,
                };
            }, this.setDrawingManagerCallback);
        };
        DrawingManager.prototype.componentDidUpdate = function (prevProps) {
            if (this.state.drawingManager !== null) {
                unregisterEvents(this.registeredEvents);
                this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
                    updaterMap: updaterMap$g,
                    eventMap: eventMap$g,
                    prevProps: prevProps,
                    nextProps: this.props,
                    instance: this.state.drawingManager,
                });
            }
        };
        DrawingManager.prototype.componentWillUnmount = function () {
            if (this.state.drawingManager !== null) {
                if (this.props.onUnmount) {
                    this.props.onUnmount(this.state.drawingManager);
                }
                unregisterEvents(this.registeredEvents);
                this.state.drawingManager.setMap(null);
            }
        };
        DrawingManager.prototype.render = function () {
            return null;
        };
        DrawingManager.contextType = MapContext;
        return DrawingManager;
    }(react.PureComponent));

    var eventMap$f = {
        onAnimationChanged: 'animation_changed',
        onClick: 'click',
        onClickableChanged: 'clickable_changed',
        onCursorChanged: 'cursor_changed',
        onDblClick: 'dblclick',
        onDrag: 'drag',
        onDragEnd: 'dragend',
        onDraggableChanged: 'draggable_changed',
        onDragStart: 'dragstart',
        onFlatChanged: 'flat_changed',
        onIconChanged: 'icon_changed',
        onMouseDown: 'mousedown',
        onMouseOut: 'mouseout',
        onMouseOver: 'mouseover',
        onMouseUp: 'mouseup',
        onPositionChanged: 'position_changed',
        onRightClick: 'rightclick',
        onShapeChanged: 'shape_changed',
        onTitleChanged: 'title_changed',
        onVisibleChanged: 'visible_changed',
        onZindexChanged: 'zindex_changed',
    };
    var updaterMap$f = {
        animation: function (instance, animation) {
            instance.setAnimation(animation);
        },
        clickable: function (instance, clickable) {
            instance.setClickable(clickable);
        },
        cursor: function (instance, cursor) {
            instance.setCursor(cursor);
        },
        draggable: function (instance, draggable) {
            instance.setDraggable(draggable);
        },
        icon: function (instance, icon) {
            instance.setIcon(icon);
        },
        label: function (instance, label) {
            instance.setLabel(label);
        },
        map: function (instance, map) {
            instance.setMap(map);
        },
        opacity: function (instance, opacity) {
            instance.setOpacity(opacity);
        },
        options: function (instance, options) {
            instance.setOptions(options);
        },
        position: function (instance, position) {
            instance.setPosition(position);
        },
        shape: function (instance, shape) {
            instance.setShape(shape);
        },
        title: function (instance, title) {
            instance.setTitle(title);
        },
        visible: function (instance, visible) {
            instance.setVisible(visible);
        },
        zIndex: function (instance, zIndex) {
            instance.setZIndex(zIndex);
        },
    };
    var defaultOptions$5 = {};
    function MarkerFunctional(_a) {
        var position = _a.position, options = _a.options, clusterer = _a.clusterer, noClustererRedraw = _a.noClustererRedraw, children = _a.children, draggable = _a.draggable, visible = _a.visible, animation = _a.animation, clickable = _a.clickable, cursor = _a.cursor, icon = _a.icon, label = _a.label, opacity = _a.opacity, shape = _a.shape, title = _a.title, zIndex = _a.zIndex, onClick = _a.onClick, onDblClick = _a.onDblClick, onDrag = _a.onDrag, onDragEnd = _a.onDragEnd, onDragStart = _a.onDragStart, onMouseOut = _a.onMouseOut, onMouseOver = _a.onMouseOver, onMouseUp = _a.onMouseUp, onMouseDown = _a.onMouseDown, onRightClick = _a.onRightClick, onClickableChanged = _a.onClickableChanged, onCursorChanged = _a.onCursorChanged, onAnimationChanged = _a.onAnimationChanged, onDraggableChanged = _a.onDraggableChanged, onFlatChanged = _a.onFlatChanged, onIconChanged = _a.onIconChanged, onPositionChanged = _a.onPositionChanged, onShapeChanged = _a.onShapeChanged, onTitleChanged = _a.onTitleChanged, onVisibleChanged = _a.onVisibleChanged, onZindexChanged = _a.onZindexChanged, onLoad = _a.onLoad, onUnmount = _a.onUnmount;
        var map = react.useContext(MapContext);
        var _b = react.useState(null), instance = _b[0], setInstance = _b[1];
        var _c = react.useState(null), dblclickListener = _c[0], setDblclickListener = _c[1];
        var _d = react.useState(null), dragendListener = _d[0], setDragendListener = _d[1];
        var _e = react.useState(null), dragstartListener = _e[0], setDragstartListener = _e[1];
        var _f = react.useState(null), mousedownListener = _f[0], setMousedownListener = _f[1];
        var _g = react.useState(null), mouseoutListener = _g[0], setMouseoutListener = _g[1];
        var _h = react.useState(null), mouseoverListener = _h[0], setMouseoverListener = _h[1];
        var _j = react.useState(null), mouseupListener = _j[0], setMouseupListener = _j[1];
        var _k = react.useState(null), rightclickListener = _k[0], setRightclickListener = _k[1];
        var _l = react.useState(null), clickListener = _l[0], setClickListener = _l[1];
        var _m = react.useState(null), dragListener = _m[0], setDragListener = _m[1];
        var _o = react.useState(null), clickableChangedListener = _o[0], setClickableChangedListener = _o[1];
        var _p = react.useState(null), cursorChangedListener = _p[0], setCursorChangedListener = _p[1];
        var _q = react.useState(null), animationChangedListener = _q[0], setAnimationChangedListener = _q[1];
        var _r = react.useState(null), draggableChangedListener = _r[0], setDraggableChangedListener = _r[1];
        var _s = react.useState(null), flatChangedListener = _s[0], setFlatChangedListener = _s[1];
        var _t = react.useState(null), iconChangedListener = _t[0], setIconChangedListener = _t[1];
        var _u = react.useState(null), positionChangedListener = _u[0], setPositionChangedListener = _u[1];
        var _v = react.useState(null), shapeChangedListener = _v[0], setShapeChangedListener = _v[1];
        var _w = react.useState(null), titleChangedListener = _w[0], setTitleChangedListener = _w[1];
        var _x = react.useState(null), visibleChangedListener = _x[0], setVisibleChangedListener = _x[1];
        var _y = react.useState(null), zIndexChangedListener = _y[0], setZindexChangedListener = _y[1];
        // Order does matter
        react.useEffect(function () {
            if (instance !== null) {
                instance.setMap(map);
            }
        }, [map]);
        react.useEffect(function () {
            if (typeof options !== 'undefined' && instance !== null) {
                instance.setOptions(options);
            }
        }, [instance, options]);
        react.useEffect(function () {
            if (typeof draggable !== 'undefined' && instance !== null) {
                instance.setDraggable(draggable);
            }
        }, [instance, draggable]);
        react.useEffect(function () {
            if (position && instance !== null) {
                instance.setPosition(position);
            }
        }, [instance, position]);
        react.useEffect(function () {
            if (typeof visible !== 'undefined' && instance !== null) {
                instance.setVisible(visible);
            }
        }, [instance, visible]);
        react.useEffect(function () {
            instance === null || instance === void 0 ? void 0 : instance.setAnimation(animation);
        }, [instance, animation]);
        react.useEffect(function () {
            if (instance && clickable !== undefined) {
                instance.setClickable(clickable);
            }
        }, [instance, clickable]);
        react.useEffect(function () {
            if (instance && cursor !== undefined) {
                instance.setCursor(cursor);
            }
        }, [instance, cursor]);
        react.useEffect(function () {
            if (instance && icon !== undefined) {
                instance.setIcon(icon);
            }
        }, [instance, icon]);
        react.useEffect(function () {
            if (instance && label !== undefined) {
                instance.setLabel(label);
            }
        }, [instance, label]);
        react.useEffect(function () {
            if (instance && opacity !== undefined) {
                instance.setOpacity(opacity);
            }
        }, [instance, opacity]);
        react.useEffect(function () {
            if (instance && shape !== undefined) {
                instance.setShape(shape);
            }
        }, [instance, shape]);
        react.useEffect(function () {
            if (instance && title !== undefined) {
                instance.setTitle(title);
            }
        }, [instance, title]);
        react.useEffect(function () {
            if (instance && zIndex !== undefined) {
                instance.setZIndex(zIndex);
            }
        }, [instance, zIndex]);
        react.useEffect(function () {
            if (instance && onDblClick) {
                if (dblclickListener !== null) {
                    google.maps.event.removeListener(dblclickListener);
                }
                setDblclickListener(google.maps.event.addListener(instance, 'dblclick', onDblClick));
            }
        }, [onDblClick]);
        react.useEffect(function () {
            if (instance && onDragEnd) {
                if (dragendListener !== null) {
                    google.maps.event.removeListener(dragendListener);
                }
                setDragendListener(google.maps.event.addListener(instance, 'dragend', onDragEnd));
            }
        }, [onDragEnd]);
        react.useEffect(function () {
            if (instance && onDragStart) {
                if (dragstartListener !== null) {
                    google.maps.event.removeListener(dragstartListener);
                }
                setDragstartListener(google.maps.event.addListener(instance, 'dragstart', onDragStart));
            }
        }, [onDragStart]);
        react.useEffect(function () {
            if (instance && onMouseDown) {
                if (mousedownListener !== null) {
                    google.maps.event.removeListener(mousedownListener);
                }
                setMousedownListener(google.maps.event.addListener(instance, 'mousedown', onMouseDown));
            }
        }, [onMouseDown]);
        react.useEffect(function () {
            if (instance && onMouseOut) {
                if (mouseoutListener !== null) {
                    google.maps.event.removeListener(mouseoutListener);
                }
                setMouseoutListener(google.maps.event.addListener(instance, 'mouseout', onMouseOut));
            }
        }, [onMouseOut]);
        react.useEffect(function () {
            if (instance && onMouseOver) {
                if (mouseoverListener !== null) {
                    google.maps.event.removeListener(mouseoverListener);
                }
                setMouseoverListener(google.maps.event.addListener(instance, 'mouseover', onMouseOver));
            }
        }, [onMouseOver]);
        react.useEffect(function () {
            if (instance && onMouseUp) {
                if (mouseupListener !== null) {
                    google.maps.event.removeListener(mouseupListener);
                }
                setMouseupListener(google.maps.event.addListener(instance, 'mouseup', onMouseUp));
            }
        }, [onMouseUp]);
        react.useEffect(function () {
            if (instance && onRightClick) {
                if (rightclickListener !== null) {
                    google.maps.event.removeListener(rightclickListener);
                }
                setRightclickListener(google.maps.event.addListener(instance, 'rightclick', onRightClick));
            }
        }, [onRightClick]);
        react.useEffect(function () {
            if (instance && onClick) {
                if (clickListener !== null) {
                    google.maps.event.removeListener(clickListener);
                }
                setClickListener(google.maps.event.addListener(instance, 'click', onClick));
            }
        }, [onClick]);
        react.useEffect(function () {
            if (instance && onDrag) {
                if (dragListener !== null) {
                    google.maps.event.removeListener(dragListener);
                }
                setDragListener(google.maps.event.addListener(instance, 'drag', onDrag));
            }
        }, [onDrag]);
        react.useEffect(function () {
            if (instance && onClickableChanged) {
                if (clickableChangedListener !== null) {
                    google.maps.event.removeListener(clickableChangedListener);
                }
                setClickableChangedListener(google.maps.event.addListener(instance, 'clickable_changed', onClickableChanged));
            }
        }, [onClickableChanged]);
        react.useEffect(function () {
            if (instance && onCursorChanged) {
                if (cursorChangedListener !== null) {
                    google.maps.event.removeListener(cursorChangedListener);
                }
                setCursorChangedListener(google.maps.event.addListener(instance, 'cursor_changed', onCursorChanged));
            }
        }, [onCursorChanged]);
        react.useEffect(function () {
            if (instance && onAnimationChanged) {
                if (animationChangedListener !== null) {
                    google.maps.event.removeListener(animationChangedListener);
                }
                setAnimationChangedListener(google.maps.event.addListener(instance, 'animation_changed', onAnimationChanged));
            }
        }, [onAnimationChanged]);
        react.useEffect(function () {
            if (instance && onDraggableChanged) {
                if (draggableChangedListener !== null) {
                    google.maps.event.removeListener(draggableChangedListener);
                }
                setDraggableChangedListener(google.maps.event.addListener(instance, 'draggable_changed', onDraggableChanged));
            }
        }, [onDraggableChanged]);
        react.useEffect(function () {
            if (instance && onFlatChanged) {
                if (flatChangedListener !== null) {
                    google.maps.event.removeListener(flatChangedListener);
                }
                setFlatChangedListener(google.maps.event.addListener(instance, 'flat_changed', onFlatChanged));
            }
        }, [onFlatChanged]);
        react.useEffect(function () {
            if (instance && onIconChanged) {
                if (iconChangedListener !== null) {
                    google.maps.event.removeListener(iconChangedListener);
                }
                setIconChangedListener(google.maps.event.addListener(instance, 'icon_changed', onIconChanged));
            }
        }, [onIconChanged]);
        react.useEffect(function () {
            if (instance && onPositionChanged) {
                if (positionChangedListener !== null) {
                    google.maps.event.removeListener(positionChangedListener);
                }
                setPositionChangedListener(google.maps.event.addListener(instance, 'position_changed', onPositionChanged));
            }
        }, [onPositionChanged]);
        react.useEffect(function () {
            if (instance && onShapeChanged) {
                if (shapeChangedListener !== null) {
                    google.maps.event.removeListener(shapeChangedListener);
                }
                setShapeChangedListener(google.maps.event.addListener(instance, 'shape_changed', onShapeChanged));
            }
        }, [onShapeChanged]);
        react.useEffect(function () {
            if (instance && onTitleChanged) {
                if (titleChangedListener !== null) {
                    google.maps.event.removeListener(titleChangedListener);
                }
                setTitleChangedListener(google.maps.event.addListener(instance, 'title_changed', onTitleChanged));
            }
        }, [onTitleChanged]);
        react.useEffect(function () {
            if (instance && onVisibleChanged) {
                if (visibleChangedListener !== null) {
                    google.maps.event.removeListener(visibleChangedListener);
                }
                setVisibleChangedListener(google.maps.event.addListener(instance, 'visible_changed', onVisibleChanged));
            }
        }, [onVisibleChanged]);
        react.useEffect(function () {
            if (instance && onZindexChanged) {
                if (zIndexChangedListener !== null) {
                    google.maps.event.removeListener(zIndexChangedListener);
                }
                setZindexChangedListener(google.maps.event.addListener(instance, 'zindex_changed', onZindexChanged));
            }
        }, [onZindexChanged]);
        react.useEffect(function () {
            var markerOptions = __assign(__assign(__assign({}, (options || defaultOptions$5)), (clusterer ? defaultOptions$5 : { map: map })), { position: position });
            var marker = new google.maps.Marker(markerOptions);
            if (clusterer) {
                clusterer.addMarker(marker, !!noClustererRedraw);
            }
            else {
                marker.setMap(map);
            }
            if (position) {
                marker.setPosition(position);
            }
            if (typeof visible !== 'undefined') {
                marker.setVisible(visible);
            }
            if (typeof draggable !== 'undefined') {
                marker.setDraggable(draggable);
            }
            if (typeof clickable !== 'undefined') {
                marker.setClickable(clickable);
            }
            if (typeof cursor === 'string') {
                marker.setCursor(cursor);
            }
            if (icon) {
                marker.setIcon(icon);
            }
            if (typeof label !== 'undefined') {
                marker.setLabel(label);
            }
            if (typeof opacity !== 'undefined') {
                marker.setOpacity(opacity);
            }
            if (shape) {
                marker.setShape(shape);
            }
            if (typeof title === 'string') {
                marker.setTitle(title);
            }
            if (typeof zIndex === 'number') {
                marker.setZIndex(zIndex);
            }
            if (onDblClick) {
                setDblclickListener(google.maps.event.addListener(marker, 'dblclick', onDblClick));
            }
            if (onDragEnd) {
                setDragendListener(google.maps.event.addListener(marker, 'dragend', onDragEnd));
            }
            if (onDragStart) {
                setDragstartListener(google.maps.event.addListener(marker, 'dragstart', onDragStart));
            }
            if (onMouseDown) {
                setMousedownListener(google.maps.event.addListener(marker, 'mousedown', onMouseDown));
            }
            if (onMouseOut) {
                setMouseoutListener(google.maps.event.addListener(marker, 'mouseout', onMouseOut));
            }
            if (onMouseOver) {
                setMouseoverListener(google.maps.event.addListener(marker, 'mouseover', onMouseOver));
            }
            if (onMouseUp) {
                setMouseupListener(google.maps.event.addListener(marker, 'mouseup', onMouseUp));
            }
            if (onRightClick) {
                setRightclickListener(google.maps.event.addListener(marker, 'rightclick', onRightClick));
            }
            if (onClick) {
                setClickListener(google.maps.event.addListener(marker, 'click', onClick));
            }
            if (onDrag) {
                setDragListener(google.maps.event.addListener(marker, 'drag', onDrag));
            }
            if (onClickableChanged) {
                setClickableChangedListener(google.maps.event.addListener(marker, 'clickable_changed', onClickableChanged));
            }
            if (onCursorChanged) {
                setCursorChangedListener(google.maps.event.addListener(marker, 'cursor_changed', onCursorChanged));
            }
            if (onAnimationChanged) {
                setAnimationChangedListener(google.maps.event.addListener(marker, 'animation_changed', onAnimationChanged));
            }
            if (onDraggableChanged) {
                setDraggableChangedListener(google.maps.event.addListener(marker, 'draggable_changed', onDraggableChanged));
            }
            if (onFlatChanged) {
                setFlatChangedListener(google.maps.event.addListener(marker, 'flat_changed', onFlatChanged));
            }
            if (onIconChanged) {
                setIconChangedListener(google.maps.event.addListener(marker, 'icon_changed', onIconChanged));
            }
            if (onPositionChanged) {
                setPositionChangedListener(google.maps.event.addListener(marker, 'position_changed', onPositionChanged));
            }
            if (onShapeChanged) {
                setShapeChangedListener(google.maps.event.addListener(marker, 'shape_changed', onShapeChanged));
            }
            if (onTitleChanged) {
                setTitleChangedListener(google.maps.event.addListener(marker, 'title_changed', onTitleChanged));
            }
            if (onVisibleChanged) {
                setVisibleChangedListener(google.maps.event.addListener(marker, 'visible_changed', onVisibleChanged));
            }
            if (onZindexChanged) {
                setZindexChangedListener(google.maps.event.addListener(marker, 'zindex_changed', onZindexChanged));
            }
            setInstance(marker);
            if (onLoad) {
                onLoad(marker);
            }
            return function () {
                if (dblclickListener !== null) {
                    google.maps.event.removeListener(dblclickListener);
                }
                if (dragendListener !== null) {
                    google.maps.event.removeListener(dragendListener);
                }
                if (dragstartListener !== null) {
                    google.maps.event.removeListener(dragstartListener);
                }
                if (mousedownListener !== null) {
                    google.maps.event.removeListener(mousedownListener);
                }
                if (mouseoutListener !== null) {
                    google.maps.event.removeListener(mouseoutListener);
                }
                if (mouseoverListener !== null) {
                    google.maps.event.removeListener(mouseoverListener);
                }
                if (mouseupListener !== null) {
                    google.maps.event.removeListener(mouseupListener);
                }
                if (rightclickListener !== null) {
                    google.maps.event.removeListener(rightclickListener);
                }
                if (clickListener !== null) {
                    google.maps.event.removeListener(clickListener);
                }
                if (clickableChangedListener !== null) {
                    google.maps.event.removeListener(clickableChangedListener);
                }
                if (cursorChangedListener !== null) {
                    google.maps.event.removeListener(cursorChangedListener);
                }
                if (animationChangedListener !== null) {
                    google.maps.event.removeListener(animationChangedListener);
                }
                if (draggableChangedListener !== null) {
                    google.maps.event.removeListener(draggableChangedListener);
                }
                if (flatChangedListener !== null) {
                    google.maps.event.removeListener(flatChangedListener);
                }
                if (iconChangedListener !== null) {
                    google.maps.event.removeListener(iconChangedListener);
                }
                if (positionChangedListener !== null) {
                    google.maps.event.removeListener(positionChangedListener);
                }
                if (titleChangedListener !== null) {
                    google.maps.event.removeListener(titleChangedListener);
                }
                if (visibleChangedListener !== null) {
                    google.maps.event.removeListener(visibleChangedListener);
                }
                if (zIndexChangedListener !== null) {
                    google.maps.event.removeListener(zIndexChangedListener);
                }
                if (onUnmount) {
                    onUnmount(marker);
                }
                if (clusterer) {
                    clusterer.removeMarker(marker, !!noClustererRedraw);
                }
                else if (marker) {
                    marker.setMap(null);
                }
            };
        }, []);
        var chx = react.useMemo(function () {
            return children
                ? react.Children.map(children, function (child) {
                    if (!react.isValidElement(child)) {
                        return child;
                    }
                    var elementChild = child;
                    return react.cloneElement(elementChild, { anchor: instance });
                })
                : null;
        }, [children, instance]);
        return jsxRuntime.jsx(jsxRuntime.Fragment, { children: chx }) || null;
    }
    var MarkerF = react.memo(MarkerFunctional);
    var Marker = /** @class */ (function (_super) {
        __extends(Marker, _super);
        function Marker() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.registeredEvents = [];
            return _this;
        }
        Marker.prototype.componentDidMount = function () {
            var markerOptions = __assign(__assign(__assign({}, (this.props.options || defaultOptions$5)), (this.props.clusterer ? defaultOptions$5 : { map: this.context })), { position: this.props.position });
            // Unfortunately we can't just do this in the contstructor, because the
            // `MapContext` might not be filled in yet.
            this.marker = new google.maps.Marker(markerOptions);
            if (this.props.clusterer) {
                this.props.clusterer.addMarker(this.marker, !!this.props.noClustererRedraw);
            }
            else {
                this.marker.setMap(this.context);
            }
            this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
                updaterMap: updaterMap$f,
                eventMap: eventMap$f,
                prevProps: {},
                nextProps: this.props,
                instance: this.marker,
            });
            if (this.props.onLoad) {
                this.props.onLoad(this.marker);
            }
        };
        Marker.prototype.componentDidUpdate = function (prevProps) {
            if (this.marker) {
                unregisterEvents(this.registeredEvents);
                this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
                    updaterMap: updaterMap$f,
                    eventMap: eventMap$f,
                    prevProps: prevProps,
                    nextProps: this.props,
                    instance: this.marker,
                });
            }
        };
        Marker.prototype.componentWillUnmount = function () {
            if (this.marker) {
                if (this.props.onUnmount) {
                    this.props.onUnmount(this.marker);
                }
                unregisterEvents(this.registeredEvents);
                if (this.props.clusterer) {
                    this.props.clusterer.removeMarker(this.marker, !!this.props.noClustererRedraw);
                }
                else {
                    this.marker && this.marker.setMap(null);
                }
            }
        };
        Marker.prototype.render = function () {
            var _this = this;
            var children = null;
            if (this.props.children) {
                children = react.Children.map(this.props.children, function (child) {
                    if (!react.isValidElement(child)) {
                        return child;
                    }
                    var elementChild = child;
                    return react.cloneElement(elementChild, { anchor: _this.marker });
                });
            }
            return children || null;
        };
        Marker.contextType = MapContext;
        return Marker;
    }(react.PureComponent));

    var ClusterIcon = /** @class */ (function () {
        function ClusterIcon(cluster, styles) {
            cluster.getClusterer().extend(ClusterIcon, google.maps.OverlayView);
            this.cluster = cluster;
            this.clusterClassName = this.cluster.getClusterer().getClusterClass();
            this.className = this.clusterClassName;
            this.styles = styles;
            this.center = undefined;
            this.div = null;
            this.sums = null;
            this.visible = false;
            this.boundsChangedListener = null;
            this.url = '';
            this.height = 0;
            this.width = 0;
            this.anchorText = [0, 0];
            this.anchorIcon = [0, 0];
            this.textColor = 'black';
            this.textSize = 11;
            this.textDecoration = 'none';
            this.fontWeight = 'bold';
            this.fontStyle = 'normal';
            this.fontFamily = 'Arial,sans-serif';
            this.backgroundPosition = '0 0';
            this.cMouseDownInCluster = null;
            this.cDraggingMapByCluster = null;
            this.timeOut = null;
            this.setMap(cluster.getMap()); // Note: this causes onAdd to be called
            this.onBoundsChanged = this.onBoundsChanged.bind(this);
            this.onMouseDown = this.onMouseDown.bind(this);
            this.onClick = this.onClick.bind(this);
            this.onMouseOver = this.onMouseOver.bind(this);
            this.onMouseOut = this.onMouseOut.bind(this);
            this.onAdd = this.onAdd.bind(this);
            this.onRemove = this.onRemove.bind(this);
            this.draw = this.draw.bind(this);
            this.hide = this.hide.bind(this);
            this.show = this.show.bind(this);
            this.useStyle = this.useStyle.bind(this);
            this.setCenter = this.setCenter.bind(this);
            this.getPosFromLatLng = this.getPosFromLatLng.bind(this);
        }
        ClusterIcon.prototype.onBoundsChanged = function () {
            this.cDraggingMapByCluster = this.cMouseDownInCluster;
        };
        ClusterIcon.prototype.onMouseDown = function () {
            this.cMouseDownInCluster = true;
            this.cDraggingMapByCluster = false;
        };
        ClusterIcon.prototype.onClick = function (event) {
            this.cMouseDownInCluster = false;
            if (!this.cDraggingMapByCluster) {
                var markerClusterer_1 = this.cluster.getClusterer();
                /**
                 * This event is fired when a cluster marker is clicked.
                 * @name MarkerClusterer#click
                 * @param {Cluster} c The cluster that was clicked.
                 * @event
                 */
                google.maps.event.trigger(markerClusterer_1, 'click', this.cluster);
                google.maps.event.trigger(markerClusterer_1, 'clusterclick', this.cluster); // deprecated name
                // The default click handler follows. Disable it by setting
                // the zoomOnClick property to false.
                if (markerClusterer_1.getZoomOnClick()) {
                    // Zoom into the cluster.
                    var maxZoom_1 = markerClusterer_1.getMaxZoom();
                    var bounds_1 = this.cluster.getBounds();
                    var map = markerClusterer_1.getMap();
                    if (map !== null && 'fitBounds' in map) {
                        map.fitBounds(bounds_1);
                    }
                    // There is a fix for Issue 170 here:
                    this.timeOut = window.setTimeout(function () {
                        var map = markerClusterer_1.getMap();
                        if (map !== null) {
                            if ('fitBounds' in map) {
                                map.fitBounds(bounds_1);
                            }
                            var zoom = map.getZoom() || 0;
                            // Don't zoom beyond the max zoom level
                            if (maxZoom_1 !== null &&
                                zoom > maxZoom_1) {
                                map.setZoom(maxZoom_1 + 1);
                            }
                        }
                    }, 100);
                }
                // Prevent event propagation to the map:
                event.cancelBubble = true;
                if (event.stopPropagation) {
                    event.stopPropagation();
                }
            }
        };
        ClusterIcon.prototype.onMouseOver = function () {
            /**
             * This event is fired when the mouse moves over a cluster marker.
             * @name MarkerClusterer#mouseover
             * @param {Cluster} c The cluster that the mouse moved over.
             * @event
             */
            google.maps.event.trigger(this.cluster.getClusterer(), 'mouseover', this.cluster);
        };
        ClusterIcon.prototype.onMouseOut = function () {
            /**
             * This event is fired when the mouse moves out of a cluster marker.
             * @name MarkerClusterer#mouseout
             * @param {Cluster} c The cluster that the mouse moved out of.
             * @event
             */
            google.maps.event.trigger(this.cluster.getClusterer(), 'mouseout', this.cluster);
        };
        ClusterIcon.prototype.onAdd = function () {
            var _a;
            this.div = document.createElement('div');
            this.div.className = this.className;
            if (this.visible) {
                this.show();
            }
            (_a = this.getPanes()) === null || _a === void 0 ? void 0 : _a.overlayMouseTarget.appendChild(this.div);
            var map = this.getMap();
            if (map !== null) {
                // Fix for Issue 157
                this.boundsChangedListener = google.maps.event.addListener(map, 'bounds_changed', this.onBoundsChanged);
                this.div.addEventListener('mousedown', this.onMouseDown);
                this.div.addEventListener('click', this.onClick);
                this.div.addEventListener('mouseover', this.onMouseOver);
                this.div.addEventListener('mouseout', this.onMouseOut);
            }
        };
        ClusterIcon.prototype.onRemove = function () {
            if (this.div && this.div.parentNode) {
                this.hide();
                if (this.boundsChangedListener !== null) {
                    google.maps.event.removeListener(this.boundsChangedListener);
                }
                this.div.removeEventListener('mousedown', this.onMouseDown);
                this.div.removeEventListener('click', this.onClick);
                this.div.removeEventListener('mouseover', this.onMouseOver);
                this.div.removeEventListener('mouseout', this.onMouseOut);
                this.div.parentNode.removeChild(this.div);
                if (this.timeOut !== null) {
                    window.clearTimeout(this.timeOut);
                    this.timeOut = null;
                }
                this.div = null;
            }
        };
        ClusterIcon.prototype.draw = function () {
            if (this.visible && this.div !== null && this.center) {
                var pos = this.getPosFromLatLng(this.center);
                this.div.style.top = pos !== null ? "".concat(pos.y, "px") : '0';
                this.div.style.left = pos !== null ? "".concat(pos.x, "px") : '0';
            }
        };
        ClusterIcon.prototype.hide = function () {
            if (this.div) {
                this.div.style.display = 'none';
            }
            this.visible = false;
        };
        ClusterIcon.prototype.show = function () {
            var _a, _b, _c, _d, _e, _f;
            if (this.div && this.center) {
                var divTitle = this.sums === null ||
                    typeof this.sums.title === 'undefined' ||
                    this.sums.title === '' ? this.cluster.getClusterer().getTitle() : this.sums.title;
                // NOTE: values must be specified in px units
                var bp = this.backgroundPosition.split(' ');
                var spriteH = parseInt(((_a = bp[0]) === null || _a === void 0 ? void 0 : _a.replace(/^\s+|\s+$/g, '')) || '0', 10);
                var spriteV = parseInt(((_b = bp[1]) === null || _b === void 0 ? void 0 : _b.replace(/^\s+|\s+$/g, '')) || '0', 10);
                var pos = this.getPosFromLatLng(this.center);
                this.div.className = this.className;
                this.div.setAttribute('style', "cursor: pointer; position: absolute; top: ".concat(pos !== null ? "".concat(pos.y, "px") : '0', "; left: ").concat(pos !== null ? "".concat(pos.x, "px") : '0', "; width: ").concat(this.width, "px; height: ").concat(this.height, "px; "));
                var img = document.createElement('img');
                img.alt = divTitle;
                img.src = this.url;
                img.width = this.width;
                img.height = this.height;
                img.setAttribute('style', "position: absolute; top: ".concat(spriteV, "px; left: ").concat(spriteH, "px"));
                if (!this.cluster.getClusterer().enableRetinaIcons) {
                    img.style.clip = "rect(-".concat(spriteV, "px, -").concat(spriteH + this.width, "px, -").concat(spriteV + this.height, ", -").concat(spriteH, ")");
                }
                var textElm = document.createElement('div');
                textElm.setAttribute('style', "position: absolute; top: ".concat(this.anchorText[0], "px; left: ").concat(this.anchorText[1], "px; color: ").concat(this.textColor, "; font-size: ").concat(this.textSize, "px; font-family: ").concat(this.fontFamily, "; font-weight: ").concat(this.fontWeight, "; fontStyle: ").concat(this.fontStyle, "; text-decoration: ").concat(this.textDecoration, "; text-align: center; width: ").concat(this.width, "px; line-height: ").concat(this.height, "px"));
                if ((_c = this.sums) === null || _c === void 0 ? void 0 : _c.text)
                    textElm.innerText = "".concat((_d = this.sums) === null || _d === void 0 ? void 0 : _d.text);
                if ((_e = this.sums) === null || _e === void 0 ? void 0 : _e.html)
                    textElm.innerHTML = "".concat((_f = this.sums) === null || _f === void 0 ? void 0 : _f.html);
                this.div.innerHTML = '';
                this.div.appendChild(img);
                this.div.appendChild(textElm);
                this.div.title = divTitle;
                this.div.style.display = '';
            }
            this.visible = true;
        };
        ClusterIcon.prototype.useStyle = function (sums) {
            this.sums = sums;
            var styles = this.cluster.getClusterer().getStyles();
            var style = styles[Math.min(styles.length - 1, Math.max(0, sums.index - 1))];
            if (style) {
                this.url = style.url;
                this.height = style.height;
                this.width = style.width;
                if (style.className) {
                    this.className = "".concat(this.clusterClassName, " ").concat(style.className);
                }
                this.anchorText = style.anchorText || [0, 0];
                this.anchorIcon = style.anchorIcon || [this.height / 2, this.width / 2];
                this.textColor = style.textColor || 'black';
                this.textSize = style.textSize || 11;
                this.textDecoration = style.textDecoration || 'none';
                this.fontWeight = style.fontWeight || 'bold';
                this.fontStyle = style.fontStyle || 'normal';
                this.fontFamily = style.fontFamily || 'Arial,sans-serif';
                this.backgroundPosition = style.backgroundPosition || '0 0';
            }
        };
        ClusterIcon.prototype.setCenter = function (center) {
            this.center = center;
        };
        ClusterIcon.prototype.getPosFromLatLng = function (latlng) {
            var pos = this.getProjection().fromLatLngToDivPixel(latlng);
            if (pos !== null) {
                pos.x -= this.anchorIcon[1];
                pos.y -= this.anchorIcon[0];
            }
            return pos;
        };
        return ClusterIcon;
    }());

    /* global google */
    var Cluster$1 = /** @class */ (function () {
        function Cluster(markerClusterer) {
            this.markerClusterer = markerClusterer;
            this.map = this.markerClusterer.getMap();
            this.gridSize = this.markerClusterer.getGridSize();
            this.minClusterSize = this.markerClusterer.getMinimumClusterSize();
            this.averageCenter = this.markerClusterer.getAverageCenter();
            this.markers = [];
            this.center = undefined;
            this.bounds = null;
            this.clusterIcon = new ClusterIcon(this, this.markerClusterer.getStyles());
            this.getSize = this.getSize.bind(this);
            this.getMarkers = this.getMarkers.bind(this);
            this.getCenter = this.getCenter.bind(this);
            this.getMap = this.getMap.bind(this);
            this.getClusterer = this.getClusterer.bind(this);
            this.getBounds = this.getBounds.bind(this);
            this.remove = this.remove.bind(this);
            this.addMarker = this.addMarker.bind(this);
            this.isMarkerInClusterBounds = this.isMarkerInClusterBounds.bind(this);
            this.calculateBounds = this.calculateBounds.bind(this);
            this.updateIcon = this.updateIcon.bind(this);
            this.isMarkerAlreadyAdded = this.isMarkerAlreadyAdded.bind(this);
        }
        Cluster.prototype.getSize = function () {
            return this.markers.length;
        };
        Cluster.prototype.getMarkers = function () {
            return this.markers;
        };
        Cluster.prototype.getCenter = function () {
            return this.center;
        };
        Cluster.prototype.getMap = function () {
            return this.map;
        };
        Cluster.prototype.getClusterer = function () {
            return this.markerClusterer;
        };
        Cluster.prototype.getBounds = function () {
            var bounds = new google.maps.LatLngBounds(this.center, this.center);
            var markers = this.getMarkers();
            for (var _i = 0, markers_1 = markers; _i < markers_1.length; _i++) {
                var marker = markers_1[_i];
                var position = marker.getPosition();
                if (position) {
                    bounds.extend(position);
                }
            }
            return bounds;
        };
        Cluster.prototype.remove = function () {
            this.clusterIcon.setMap(null);
            this.markers = [];
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            delete this.markers;
        };
        Cluster.prototype.addMarker = function (marker) {
            var _a;
            if (this.isMarkerAlreadyAdded(marker)) {
                return false;
            }
            if (!this.center) {
                var position = marker.getPosition();
                if (position) {
                    this.center = position;
                    this.calculateBounds();
                }
            }
            else {
                if (this.averageCenter) {
                    var position = marker.getPosition();
                    if (position) {
                        var length_1 = this.markers.length + 1;
                        this.center = new google.maps.LatLng((this.center.lat() * (length_1 - 1) + position.lat()) / length_1, (this.center.lng() * (length_1 - 1) + position.lng()) / length_1);
                        this.calculateBounds();
                    }
                }
            }
            marker.isAdded = true;
            this.markers.push(marker);
            var mCount = this.markers.length;
            var maxZoom = this.markerClusterer.getMaxZoom();
            var zoom = (_a = this.map) === null || _a === void 0 ? void 0 : _a.getZoom();
            if (maxZoom !== null && typeof zoom !== 'undefined' && zoom > maxZoom) {
                // Zoomed in past max zoom, so show the marker.
                if (marker.getMap() !== this.map) {
                    marker.setMap(this.map);
                }
            }
            else if (mCount < this.minClusterSize) {
                // Min cluster size not reached so show the marker.
                if (marker.getMap() !== this.map) {
                    marker.setMap(this.map);
                }
            }
            else if (mCount === this.minClusterSize) {
                // Hide the markers that were showing.
                for (var _i = 0, _b = this.markers; _i < _b.length; _i++) {
                    var markerElement = _b[_i];
                    markerElement.setMap(null);
                }
            }
            else {
                marker.setMap(null);
            }
            return true;
        };
        Cluster.prototype.isMarkerInClusterBounds = function (marker) {
            if (this.bounds !== null) {
                var position = marker.getPosition();
                if (position) {
                    return this.bounds.contains(position);
                }
            }
            return false;
        };
        Cluster.prototype.calculateBounds = function () {
            this.bounds = this.markerClusterer.getExtendedBounds(new google.maps.LatLngBounds(this.center, this.center));
        };
        Cluster.prototype.updateIcon = function () {
            var _a;
            var mCount = this.markers.length;
            var maxZoom = this.markerClusterer.getMaxZoom();
            var zoom = (_a = this.map) === null || _a === void 0 ? void 0 : _a.getZoom();
            if (maxZoom !== null && typeof zoom !== 'undefined' && zoom > maxZoom) {
                this.clusterIcon.hide();
                return;
            }
            if (mCount < this.minClusterSize) {
                // Min cluster size not yet reached.
                this.clusterIcon.hide();
                return;
            }
            if (this.center) {
                this.clusterIcon.setCenter(this.center);
            }
            this.clusterIcon.useStyle(this.markerClusterer.getCalculator()(this.markers, this.markerClusterer.getStyles().length));
            this.clusterIcon.show();
        };
        Cluster.prototype.isMarkerAlreadyAdded = function (marker) {
            if (this.markers.includes) {
                return this.markers.includes(marker);
            }
            for (var i = 0; i < this.markers.length; i++) {
                if (marker === this.markers[i]) {
                    return true;
                }
            }
            return false;
        };
        return Cluster;
    }());

    /* global google */
    /**
     * Supports up to 9007199254740991 (Number.MAX_SAFE_INTEGER) markers
     * which is not a problem as max array length is 4294967296 (2**32)
     */
    function CALCULATOR(markers, numStyles) {
        var count = markers.length;
        var numberOfDigits = count.toString().length;
        var index = Math.min(numberOfDigits, numStyles);
        return {
            text: count.toString(),
            index: index,
            title: '',
        };
    }
    var BATCH_SIZE = 2000;
    var BATCH_SIZE_IE = 500;
    var IMAGE_PATH = 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m';
    var IMAGE_EXTENSION = 'png';
    var IMAGE_SIZES = [53, 56, 66, 78, 90];
    var CLUSTERER_CLASS = 'cluster';
    var Clusterer = /** @class */ (function () {
        function Clusterer(map, optMarkers, optOptions) {
            if (optMarkers === void 0) { optMarkers = []; }
            if (optOptions === void 0) { optOptions = {}; }
            this.getMinimumClusterSize = this.getMinimumClusterSize.bind(this);
            this.setMinimumClusterSize = this.setMinimumClusterSize.bind(this);
            this.getEnableRetinaIcons = this.getEnableRetinaIcons.bind(this);
            this.setEnableRetinaIcons = this.setEnableRetinaIcons.bind(this);
            this.addToClosestCluster = this.addToClosestCluster.bind(this);
            this.getImageExtension = this.getImageExtension.bind(this);
            this.setImageExtension = this.setImageExtension.bind(this);
            this.getExtendedBounds = this.getExtendedBounds.bind(this);
            this.getAverageCenter = this.getAverageCenter.bind(this);
            this.setAverageCenter = this.setAverageCenter.bind(this);
            this.getTotalClusters = this.getTotalClusters.bind(this);
            this.fitMapToMarkers = this.fitMapToMarkers.bind(this);
            this.getIgnoreHidden = this.getIgnoreHidden.bind(this);
            this.setIgnoreHidden = this.setIgnoreHidden.bind(this);
            this.getClusterClass = this.getClusterClass.bind(this);
            this.setClusterClass = this.setClusterClass.bind(this);
            this.getTotalMarkers = this.getTotalMarkers.bind(this);
            this.getZoomOnClick = this.getZoomOnClick.bind(this);
            this.setZoomOnClick = this.setZoomOnClick.bind(this);
            this.getBatchSizeIE = this.getBatchSizeIE.bind(this);
            this.setBatchSizeIE = this.setBatchSizeIE.bind(this);
            this.createClusters = this.createClusters.bind(this);
            this.onZoomChanged = this.onZoomChanged.bind(this);
            this.getImageSizes = this.getImageSizes.bind(this);
            this.setImageSizes = this.setImageSizes.bind(this);
            this.getCalculator = this.getCalculator.bind(this);
            this.setCalculator = this.setCalculator.bind(this);
            this.removeMarkers = this.removeMarkers.bind(this);
            this.resetViewport = this.resetViewport.bind(this);
            this.getImagePath = this.getImagePath.bind(this);
            this.setImagePath = this.setImagePath.bind(this);
            this.pushMarkerTo = this.pushMarkerTo.bind(this);
            this.removeMarker = this.removeMarker.bind(this);
            this.clearMarkers = this.clearMarkers.bind(this);
            this.setupStyles = this.setupStyles.bind(this);
            this.getGridSize = this.getGridSize.bind(this);
            this.setGridSize = this.setGridSize.bind(this);
            this.getClusters = this.getClusters.bind(this);
            this.getMaxZoom = this.getMaxZoom.bind(this);
            this.setMaxZoom = this.setMaxZoom.bind(this);
            this.getMarkers = this.getMarkers.bind(this);
            this.addMarkers = this.addMarkers.bind(this);
            this.getStyles = this.getStyles.bind(this);
            this.setStyles = this.setStyles.bind(this);
            this.addMarker = this.addMarker.bind(this);
            this.onRemove = this.onRemove.bind(this);
            this.getTitle = this.getTitle.bind(this);
            this.setTitle = this.setTitle.bind(this);
            this.repaint = this.repaint.bind(this);
            this.onIdle = this.onIdle.bind(this);
            this.redraw = this.redraw.bind(this);
            this.onAdd = this.onAdd.bind(this);
            this.draw = this.draw.bind(this);
            this.extend = this.extend.bind(this);
            this.extend(Clusterer, google.maps.OverlayView);
            this.markers = [];
            this.clusters = [];
            this.listeners = [];
            this.activeMap = null;
            this.ready = false;
            this.gridSize = optOptions.gridSize || 60;
            this.minClusterSize = optOptions.minimumClusterSize || 2;
            this.maxZoom = optOptions.maxZoom || null;
            this.styles = optOptions.styles || [];
            this.title = optOptions.title || '';
            this.zoomOnClick = true;
            if (optOptions.zoomOnClick !== undefined) {
                this.zoomOnClick = optOptions.zoomOnClick;
            }
            this.averageCenter = false;
            if (optOptions.averageCenter !== undefined) {
                this.averageCenter = optOptions.averageCenter;
            }
            this.ignoreHidden = false;
            if (optOptions.ignoreHidden !== undefined) {
                this.ignoreHidden = optOptions.ignoreHidden;
            }
            this.enableRetinaIcons = false;
            if (optOptions.enableRetinaIcons !== undefined) {
                this.enableRetinaIcons = optOptions.enableRetinaIcons;
            }
            this.imagePath = optOptions.imagePath || IMAGE_PATH;
            this.imageExtension = optOptions.imageExtension || IMAGE_EXTENSION;
            this.imageSizes = optOptions.imageSizes || IMAGE_SIZES;
            this.calculator = optOptions.calculator || CALCULATOR;
            this.batchSize = optOptions.batchSize || BATCH_SIZE;
            this.batchSizeIE = optOptions.batchSizeIE || BATCH_SIZE_IE;
            this.clusterClass = optOptions.clusterClass || CLUSTERER_CLASS;
            if (navigator.userAgent.toLowerCase().indexOf('msie') !== -1) {
                // Try to avoid IE timeout when processing a huge number of markers:
                this.batchSize = this.batchSizeIE;
            }
            this.timerRefStatic = null;
            this.setupStyles();
            this.addMarkers(optMarkers, true);
            this.setMap(map); // Note: this causes onAdd to be called
        }
        Clusterer.prototype.onZoomChanged = function () {
            var _a, _b;
            this.resetViewport(false);
            // Workaround for this Google bug: when map is at level 0 and "-" of
            // zoom slider is clicked, a "zoom_changed" event is fired even though
            // the map doesn't zoom out any further. In this situation, no "idle"
            // event is triggered so the cluster markers that have been removed
            // do not get redrawn. Same goes for a zoom in at maxZoom.
            if (((_a = this.getMap()) === null || _a === void 0 ? void 0 : _a.getZoom()) === (this.get('minZoom') || 0) ||
                ((_b = this.getMap()) === null || _b === void 0 ? void 0 : _b.getZoom()) === this.get('maxZoom')) {
                google.maps.event.trigger(this, 'idle');
            }
        };
        Clusterer.prototype.onIdle = function () {
            this.redraw();
        };
        Clusterer.prototype.onAdd = function () {
            var map = this.getMap();
            this.activeMap = map;
            this.ready = true;
            this.repaint();
            if (map !== null) {
                // Add the map event listeners
                this.listeners = [
                    google.maps.event.addListener(map, 'zoom_changed', this.onZoomChanged),
                    google.maps.event.addListener(map, 'idle', this.onIdle),
                ];
            }
        };
        Clusterer.prototype.onRemove = function () {
            // Put all the managed markers back on the map:
            for (var _i = 0, _a = this.markers; _i < _a.length; _i++) {
                var marker = _a[_i];
                if (marker.getMap() !== this.activeMap) {
                    marker.setMap(this.activeMap);
                }
            }
            // Remove all clusters:
            for (var _b = 0, _c = this.clusters; _b < _c.length; _b++) {
                var cluster = _c[_b];
                cluster.remove();
            }
            this.clusters = [];
            // Remove map event listeners:
            for (var _d = 0, _e = this.listeners; _d < _e.length; _d++) {
                var listener = _e[_d];
                google.maps.event.removeListener(listener);
            }
            this.listeners = [];
            this.activeMap = null;
            this.ready = false;
        };
        Clusterer.prototype.draw = function () { return; };
        Clusterer.prototype.getMap = function () { return null; };
        Clusterer.prototype.getPanes = function () { return null; };
        Clusterer.prototype.getProjection = function () {
            return {
                fromContainerPixelToLatLng: function () { return null; },
                fromDivPixelToLatLng: function () { return null; },
                fromLatLngToContainerPixel: function () { return null; },
                fromLatLngToDivPixel: function () { return null; },
                getVisibleRegion: function () { return null; },
                getWorldWidth: function () { return 0; }
            };
        };
        Clusterer.prototype.setMap = function () { return; };
        Clusterer.prototype.addListener = function () {
            return {
                remove: function () { return; }
            };
        };
        Clusterer.prototype.bindTo = function () { return; };
        Clusterer.prototype.get = function () { return; };
        Clusterer.prototype.notify = function () { return; };
        Clusterer.prototype.set = function () { return; };
        Clusterer.prototype.setValues = function () { return; };
        Clusterer.prototype.unbind = function () { return; };
        Clusterer.prototype.unbindAll = function () { return; };
        Clusterer.prototype.setupStyles = function () {
            if (this.styles.length > 0) {
                return;
            }
            for (var i = 0; i < this.imageSizes.length; i++) {
                this.styles.push({
                    url: "".concat(this.imagePath + (i + 1), ".").concat(this.imageExtension),
                    height: this.imageSizes[i] || 0,
                    width: this.imageSizes[i] || 0,
                });
            }
        };
        Clusterer.prototype.fitMapToMarkers = function () {
            var markers = this.getMarkers();
            var bounds = new google.maps.LatLngBounds();
            for (var _i = 0, markers_1 = markers; _i < markers_1.length; _i++) {
                var marker = markers_1[_i];
                var position = marker.getPosition();
                if (position) {
                    bounds.extend(position);
                }
            }
            var map = this.getMap();
            if (map !== null && 'fitBounds' in map) {
                map.fitBounds(bounds);
            }
        };
        Clusterer.prototype.getGridSize = function () {
            return this.gridSize;
        };
        Clusterer.prototype.setGridSize = function (gridSize) {
            this.gridSize = gridSize;
        };
        Clusterer.prototype.getMinimumClusterSize = function () {
            return this.minClusterSize;
        };
        Clusterer.prototype.setMinimumClusterSize = function (minimumClusterSize) {
            this.minClusterSize = minimumClusterSize;
        };
        Clusterer.prototype.getMaxZoom = function () {
            return this.maxZoom;
        };
        Clusterer.prototype.setMaxZoom = function (maxZoom) {
            this.maxZoom = maxZoom;
        };
        Clusterer.prototype.getStyles = function () {
            return this.styles;
        };
        Clusterer.prototype.setStyles = function (styles) {
            this.styles = styles;
        };
        Clusterer.prototype.getTitle = function () {
            return this.title;
        };
        Clusterer.prototype.setTitle = function (title) {
            this.title = title;
        };
        Clusterer.prototype.getZoomOnClick = function () {
            return this.zoomOnClick;
        };
        Clusterer.prototype.setZoomOnClick = function (zoomOnClick) {
            this.zoomOnClick = zoomOnClick;
        };
        Clusterer.prototype.getAverageCenter = function () {
            return this.averageCenter;
        };
        Clusterer.prototype.setAverageCenter = function (averageCenter) {
            this.averageCenter = averageCenter;
        };
        Clusterer.prototype.getIgnoreHidden = function () {
            return this.ignoreHidden;
        };
        Clusterer.prototype.setIgnoreHidden = function (ignoreHidden) {
            this.ignoreHidden = ignoreHidden;
        };
        Clusterer.prototype.getEnableRetinaIcons = function () {
            return this.enableRetinaIcons;
        };
        Clusterer.prototype.setEnableRetinaIcons = function (enableRetinaIcons) {
            this.enableRetinaIcons = enableRetinaIcons;
        };
        Clusterer.prototype.getImageExtension = function () {
            return this.imageExtension;
        };
        Clusterer.prototype.setImageExtension = function (imageExtension) {
            this.imageExtension = imageExtension;
        };
        Clusterer.prototype.getImagePath = function () {
            return this.imagePath;
        };
        Clusterer.prototype.setImagePath = function (imagePath) {
            this.imagePath = imagePath;
        };
        Clusterer.prototype.getImageSizes = function () {
            return this.imageSizes;
        };
        Clusterer.prototype.setImageSizes = function (imageSizes) {
            this.imageSizes = imageSizes;
        };
        Clusterer.prototype.getCalculator = function () {
            return this.calculator;
        };
        Clusterer.prototype.setCalculator = function (calculator) {
            this.calculator = calculator;
        };
        Clusterer.prototype.getBatchSizeIE = function () {
            return this.batchSizeIE;
        };
        Clusterer.prototype.setBatchSizeIE = function (batchSizeIE) {
            this.batchSizeIE = batchSizeIE;
        };
        Clusterer.prototype.getClusterClass = function () {
            return this.clusterClass;
        };
        Clusterer.prototype.setClusterClass = function (clusterClass) {
            this.clusterClass = clusterClass;
        };
        Clusterer.prototype.getMarkers = function () {
            return this.markers;
        };
        Clusterer.prototype.getTotalMarkers = function () {
            return this.markers.length;
        };
        Clusterer.prototype.getClusters = function () {
            return this.clusters;
        };
        Clusterer.prototype.getTotalClusters = function () {
            return this.clusters.length;
        };
        Clusterer.prototype.addMarker = function (marker, optNoDraw) {
            this.pushMarkerTo(marker);
            if (!optNoDraw) {
                this.redraw();
            }
        };
        Clusterer.prototype.addMarkers = function (markers, optNoDraw) {
            for (var key in markers) {
                if (Object.prototype.hasOwnProperty.call(markers, key)) {
                    var marker = markers[key];
                    if (marker) {
                        this.pushMarkerTo(marker);
                    }
                }
            }
            if (!optNoDraw) {
                this.redraw();
            }
        };
        Clusterer.prototype.pushMarkerTo = function (marker) {
            var _this = this;
            // If the marker is draggable add a listener so we can update the clusters on the dragend:
            if (marker.getDraggable()) {
                google.maps.event.addListener(marker, 'dragend', function () {
                    if (_this.ready) {
                        marker.isAdded = false;
                        _this.repaint();
                    }
                });
            }
            marker.isAdded = false;
            this.markers.push(marker);
        };
        Clusterer.prototype.removeMarker_ = function (marker) {
            var index = -1;
            if (this.markers.indexOf) {
                index = this.markers.indexOf(marker);
            }
            else {
                for (var i = 0; i < this.markers.length; i++) {
                    if (marker === this.markers[i]) {
                        index = i;
                        break;
                    }
                }
            }
            if (index === -1) {
                // Marker is not in our list of markers, so do nothing:
                return false;
            }
            marker.setMap(null);
            this.markers.splice(index, 1); // Remove the marker from the list of managed markers
            return true;
        };
        Clusterer.prototype.removeMarker = function (marker, optNoDraw) {
            var removed = this.removeMarker_(marker);
            if (!optNoDraw && removed) {
                this.repaint();
            }
            return removed;
        };
        Clusterer.prototype.removeMarkers = function (markers, optNoDraw) {
            var removed = false;
            for (var _i = 0, markers_2 = markers; _i < markers_2.length; _i++) {
                var marker = markers_2[_i];
                removed = removed || this.removeMarker_(marker);
            }
            if (!optNoDraw && removed) {
                this.repaint();
            }
            return removed;
        };
        Clusterer.prototype.clearMarkers = function () {
            this.resetViewport(true);
            this.markers = [];
        };
        Clusterer.prototype.repaint = function () {
            var oldClusters = this.clusters.slice();
            this.clusters = [];
            this.resetViewport(false);
            this.redraw();
            // Remove the old clusters.
            // Do it in a timeout to prevent blinking effect.
            setTimeout(function timeout() {
                for (var _i = 0, oldClusters_1 = oldClusters; _i < oldClusters_1.length; _i++) {
                    var oldCluster = oldClusters_1[_i];
                    oldCluster.remove();
                }
            }, 0);
        };
        Clusterer.prototype.getExtendedBounds = function (bounds) {
            var projection = this.getProjection();
            // Convert the points to pixels and the extend out by the grid size.
            var trPix = projection.fromLatLngToDivPixel(
            // Turn the bounds into latlng.
            new google.maps.LatLng(bounds.getNorthEast().lat(), bounds.getNorthEast().lng()));
            if (trPix !== null) {
                trPix.x += this.gridSize;
                trPix.y -= this.gridSize;
            }
            var blPix = projection.fromLatLngToDivPixel(
            // Turn the bounds into latlng.
            new google.maps.LatLng(bounds.getSouthWest().lat(), bounds.getSouthWest().lng()));
            if (blPix !== null) {
                blPix.x -= this.gridSize;
                blPix.y += this.gridSize;
            }
            // Extend the bounds to contain the new bounds.
            if (trPix !== null) {
                // Convert the pixel points back to LatLng nw
                var point1 = projection.fromDivPixelToLatLng(trPix);
                if (point1 !== null) {
                    bounds.extend(point1);
                }
            }
            if (blPix !== null) {
                // Convert the pixel points back to LatLng sw
                var point2 = projection.fromDivPixelToLatLng(blPix);
                if (point2 !== null) {
                    bounds.extend(point2);
                }
            }
            return bounds;
        };
        Clusterer.prototype.redraw = function () {
            // Redraws all the clusters.
            this.createClusters(0);
        };
        Clusterer.prototype.resetViewport = function (optHide) {
            // Remove all the clusters
            for (var _i = 0, _a = this.clusters; _i < _a.length; _i++) {
                var cluster = _a[_i];
                cluster.remove();
            }
            this.clusters = [];
            // Reset the markers to not be added and to be removed from the map.
            for (var _b = 0, _c = this.markers; _b < _c.length; _b++) {
                var marker = _c[_b];
                marker.isAdded = false;
                if (optHide) {
                    marker.setMap(null);
                }
            }
        };
        Clusterer.prototype.distanceBetweenPoints = function (p1, p2) {
            var R = 6371; // Radius of the Earth in km
            var dLat = ((p2.lat() - p1.lat()) * Math.PI) / 180;
            var dLon = ((p2.lng() - p1.lng()) * Math.PI) / 180;
            var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                Math.cos((p1.lat() * Math.PI) / 180) *
                    Math.cos((p2.lat() * Math.PI) / 180) *
                    Math.sin(dLon / 2) *
                    Math.sin(dLon / 2);
            return R * (2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)));
        };
        Clusterer.prototype.isMarkerInBounds = function (marker, bounds) {
            var position = marker.getPosition();
            if (position) {
                return bounds.contains(position);
            }
            return false;
        };
        Clusterer.prototype.addToClosestCluster = function (marker) {
            var cluster;
            var distance = 40000; // Some large number
            var clusterToAddTo = null;
            for (var _i = 0, _a = this.clusters; _i < _a.length; _i++) {
                var clusterElement = _a[_i];
                cluster = clusterElement;
                var center = cluster.getCenter();
                var position = marker.getPosition();
                if (center && position) {
                    var d = this.distanceBetweenPoints(center, position);
                    if (d < distance) {
                        distance = d;
                        clusterToAddTo = cluster;
                    }
                }
            }
            if (clusterToAddTo && clusterToAddTo.isMarkerInClusterBounds(marker)) {
                clusterToAddTo.addMarker(marker);
            }
            else {
                cluster = new Cluster$1(this);
                cluster.addMarker(marker);
                this.clusters.push(cluster);
            }
        };
        Clusterer.prototype.createClusters = function (iFirst) {
            var _this = this;
            if (!this.ready) {
                return;
            }
            // Cancel previous batch processing if we're working on the first batch:
            if (iFirst === 0) {
                /**
                 * This event is fired when the <code>Clusterer</code> begins
                 *  clustering markers.
                 * @name Clusterer#clusteringbegin
                 * @param {Clusterer} mc The Clusterer whose markers are being clustered.
                 * @event
                 */
                google.maps.event.trigger(this, 'clusteringbegin', this);
                if (this.timerRefStatic !== null) {
                    window.clearTimeout(this.timerRefStatic);
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    delete this.timerRefStatic;
                }
            }
            var map = this.getMap();
            var bounds = map !== null && 'getBounds' in map ? map.getBounds() : null;
            var zoom = (map === null || map === void 0 ? void 0 : map.getZoom()) || 0;
            // Get our current map view bounds.
            // Create a new bounds object so we don't affect the map.
            //
            // See Comments 9 & 11 on Issue 3651 relating to this workaround for a Google Maps bug:
            var mapBounds = zoom > 3
                ? new google.maps.LatLngBounds(bounds === null || bounds === void 0 ? void 0 : bounds.getSouthWest(), bounds === null || bounds === void 0 ? void 0 : bounds.getNorthEast())
                : new google.maps.LatLngBounds(new google.maps.LatLng(85.02070771743472, -178.48388434375), new google.maps.LatLng(-85.08136444384544, 178.00048865625));
            var extendedMapBounds = this.getExtendedBounds(mapBounds);
            var iLast = Math.min(iFirst + this.batchSize, this.markers.length);
            for (var i = iFirst; i < iLast; i++) {
                var marker = this.markers[i];
                if (marker && !marker.isAdded && this.isMarkerInBounds(marker, extendedMapBounds) && (!this.ignoreHidden || (this.ignoreHidden && marker.getVisible()))) {
                    this.addToClosestCluster(marker);
                }
            }
            if (iLast < this.markers.length) {
                this.timerRefStatic = window.setTimeout(function () {
                    _this.createClusters(iLast);
                }, 0);
            }
            else {
                this.timerRefStatic = null;
                /**
                 * This event is fired when the <code>Clusterer</code> stops
                 *  clustering markers.
                 * @name Clusterer#clusteringend
                 * @param {Clusterer} mc The Clusterer whose markers are being clustered.
                 * @event
                 */
                google.maps.event.trigger(this, 'clusteringend', this);
                for (var _i = 0, _a = this.clusters; _i < _a.length; _i++) {
                    var cluster = _a[_i];
                    cluster.updateIcon();
                }
            }
        };
        Clusterer.prototype.extend = function (obj1, obj2) {
            return function applyExtend(object) {
                for (var property in object.prototype) {
                    // eslint-disable-next-line @typescript-eslint/ban-types
                    var prop = property;
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    this.prototype[prop] = object.prototype[prop];
                }
                return this;
            }.apply(obj1, [obj2]);
        };
        return Clusterer;
    }());

    var eventMap$e = {
        onClick: 'click',
        onClusteringBegin: 'clusteringbegin',
        onClusteringEnd: 'clusteringend',
        onMouseOut: 'mouseout',
        onMouseOver: 'mouseover',
    };
    var updaterMap$e = {
        averageCenter: function (instance, averageCenter) {
            instance.setAverageCenter(averageCenter);
        },
        batchSizeIE: function (instance, batchSizeIE) {
            instance.setBatchSizeIE(batchSizeIE);
        },
        calculator: function (instance, calculator) {
            instance.setCalculator(calculator);
        },
        clusterClass: function (instance, clusterClass) {
            instance.setClusterClass(clusterClass);
        },
        enableRetinaIcons: function (instance, enableRetinaIcons) {
            instance.setEnableRetinaIcons(enableRetinaIcons);
        },
        gridSize: function (instance, gridSize) {
            instance.setGridSize(gridSize);
        },
        ignoreHidden: function (instance, ignoreHidden) {
            instance.setIgnoreHidden(ignoreHidden);
        },
        imageExtension: function (instance, imageExtension) {
            instance.setImageExtension(imageExtension);
        },
        imagePath: function (instance, imagePath) {
            instance.setImagePath(imagePath);
        },
        imageSizes: function (instance, imageSizes) {
            instance.setImageSizes(imageSizes);
        },
        maxZoom: function (instance, maxZoom) {
            instance.setMaxZoom(maxZoom);
        },
        minimumClusterSize: function (instance, minimumClusterSize) {
            instance.setMinimumClusterSize(minimumClusterSize);
        },
        styles: function (instance, styles) {
            instance.setStyles(styles);
        },
        title: function (instance, title) {
            instance.setTitle(title);
        },
        zoomOnClick: function (instance, zoomOnClick) {
            instance.setZoomOnClick(zoomOnClick);
        },
    };
    var defaultOptions$4 = {};
    function MarkerClustererFunctional(props) {
        var children = props.children, options = props.options, averageCenter = props.averageCenter, batchSizeIE = props.batchSizeIE, calculator = props.calculator, clusterClass = props.clusterClass, enableRetinaIcons = props.enableRetinaIcons, gridSize = props.gridSize, ignoreHidden = props.ignoreHidden, imageExtension = props.imageExtension, imagePath = props.imagePath, imageSizes = props.imageSizes, maxZoom = props.maxZoom, minimumClusterSize = props.minimumClusterSize, styles = props.styles, title = props.title, zoomOnClick = props.zoomOnClick, onClick = props.onClick, onClusteringBegin = props.onClusteringBegin, onClusteringEnd = props.onClusteringEnd, onMouseOver = props.onMouseOver, onMouseOut = props.onMouseOut, onLoad = props.onLoad, onUnmount = props.onUnmount;
        var _a = react.useState(null), instance = _a[0], setInstance = _a[1];
        var map = react.useContext(MapContext);
        var _b = react.useState(null), clickListener = _b[0], setClickListener = _b[1];
        var _c = react.useState(null), clusteringBeginListener = _c[0], setClusteringBeginListener = _c[1];
        var _d = react.useState(null), clusteringEndListener = _d[0], setClusteringEndListener = _d[1];
        var _e = react.useState(null), mouseoutListener = _e[0], setMouseoutListener = _e[1];
        var _f = react.useState(null), mouseoverListener = _f[0], setMouseoverListener = _f[1];
        react.useEffect(function () {
            if (instance && onMouseOut) {
                if (mouseoutListener !== null) {
                    google.maps.event.removeListener(mouseoutListener);
                }
                setMouseoutListener(google.maps.event.addListener(instance, eventMap$e.onMouseOut, onMouseOut));
            }
        }, [onMouseOut]);
        react.useEffect(function () {
            if (instance && onMouseOver) {
                if (mouseoverListener !== null) {
                    google.maps.event.removeListener(mouseoverListener);
                }
                setMouseoverListener(google.maps.event.addListener(instance, eventMap$e.onMouseOver, onMouseOver));
            }
        }, [onMouseOver]);
        react.useEffect(function () {
            if (instance && onClick) {
                if (clickListener !== null) {
                    google.maps.event.removeListener(clickListener);
                }
                setClickListener(google.maps.event.addListener(instance, eventMap$e.onClick, onClick));
            }
        }, [onClick]);
        react.useEffect(function () {
            if (instance && onClusteringBegin) {
                if (clusteringBeginListener !== null) {
                    google.maps.event.removeListener(clusteringBeginListener);
                }
                setClusteringBeginListener(google.maps.event.addListener(instance, eventMap$e.onClusteringBegin, onClusteringBegin));
            }
        }, [onClusteringBegin]);
        react.useEffect(function () {
            if (instance && onClusteringEnd) {
                if (clusteringEndListener !== null) {
                    google.maps.event.removeListener(clusteringEndListener);
                }
                setClusteringBeginListener(google.maps.event.addListener(instance, eventMap$e.onClusteringEnd, onClusteringEnd));
            }
        }, [onClusteringEnd]);
        react.useEffect(function () {
            if (typeof averageCenter !== 'undefined' && instance !== null) {
                updaterMap$e.averageCenter(instance, averageCenter);
            }
        }, [instance, averageCenter]);
        react.useEffect(function () {
            if (typeof batchSizeIE !== 'undefined' && instance !== null) {
                updaterMap$e.batchSizeIE(instance, batchSizeIE);
            }
        }, [instance, batchSizeIE]);
        react.useEffect(function () {
            if (typeof calculator !== 'undefined' && instance !== null) {
                updaterMap$e.calculator(instance, calculator);
            }
        }, [instance, calculator]);
        react.useEffect(function () {
            if (typeof clusterClass !== 'undefined' && instance !== null) {
                updaterMap$e.clusterClass(instance, clusterClass);
            }
        }, [instance, clusterClass]);
        react.useEffect(function () {
            if (typeof enableRetinaIcons !== 'undefined' && instance !== null) {
                updaterMap$e.enableRetinaIcons(instance, enableRetinaIcons);
            }
        }, [instance, enableRetinaIcons]);
        react.useEffect(function () {
            if (typeof gridSize !== 'undefined' && instance !== null) {
                updaterMap$e.gridSize(instance, gridSize);
            }
        }, [instance, gridSize]);
        react.useEffect(function () {
            if (typeof ignoreHidden !== 'undefined' && instance !== null) {
                updaterMap$e.ignoreHidden(instance, ignoreHidden);
            }
        }, [instance, ignoreHidden]);
        react.useEffect(function () {
            if (typeof imageExtension !== 'undefined' && instance !== null) {
                updaterMap$e.imageExtension(instance, imageExtension);
            }
        }, [instance, imageExtension]);
        react.useEffect(function () {
            if (typeof imagePath !== 'undefined' && instance !== null) {
                updaterMap$e.imagePath(instance, imagePath);
            }
        }, [instance, imagePath]);
        react.useEffect(function () {
            if (typeof imageSizes !== 'undefined' && instance !== null) {
                updaterMap$e.imageSizes(instance, imageSizes);
            }
        }, [instance, imageSizes]);
        react.useEffect(function () {
            if (typeof maxZoom !== 'undefined' && instance !== null) {
                updaterMap$e.maxZoom(instance, maxZoom);
            }
        }, [instance, maxZoom]);
        react.useEffect(function () {
            if (typeof minimumClusterSize !== 'undefined' && instance !== null) {
                updaterMap$e.minimumClusterSize(instance, minimumClusterSize);
            }
        }, [instance, minimumClusterSize]);
        react.useEffect(function () {
            if (typeof styles !== 'undefined' && instance !== null) {
                updaterMap$e.styles(instance, styles);
            }
        }, [instance, styles]);
        react.useEffect(function () {
            if (typeof title !== 'undefined' && instance !== null) {
                updaterMap$e.title(instance, title);
            }
        }, [instance, title]);
        react.useEffect(function () {
            if (typeof zoomOnClick !== 'undefined' && instance !== null) {
                updaterMap$e.zoomOnClick(instance, zoomOnClick);
            }
        }, [instance, zoomOnClick]);
        react.useEffect(function () {
            if (!map)
                return;
            var clustererOptions = __assign({}, (options || defaultOptions$4));
            var clusterer = new Clusterer(map, [], clustererOptions);
            if (averageCenter) {
                updaterMap$e.averageCenter(clusterer, averageCenter);
            }
            if (batchSizeIE) {
                updaterMap$e.batchSizeIE(clusterer, batchSizeIE);
            }
            if (calculator) {
                updaterMap$e.calculator(clusterer, calculator);
            }
            if (clusterClass) {
                updaterMap$e.clusterClass(clusterer, clusterClass);
            }
            if (enableRetinaIcons) {
                updaterMap$e.enableRetinaIcons(clusterer, enableRetinaIcons);
            }
            if (gridSize) {
                updaterMap$e.gridSize(clusterer, gridSize);
            }
            if (ignoreHidden) {
                updaterMap$e.ignoreHidden(clusterer, ignoreHidden);
            }
            if (imageExtension) {
                updaterMap$e.imageExtension(clusterer, imageExtension);
            }
            if (imagePath) {
                updaterMap$e.imagePath(clusterer, imagePath);
            }
            if (imageSizes) {
                updaterMap$e.imageSizes(clusterer, imageSizes);
            }
            if (maxZoom) {
                updaterMap$e.maxZoom(clusterer, maxZoom);
            }
            if (minimumClusterSize) {
                updaterMap$e.minimumClusterSize(clusterer, minimumClusterSize);
            }
            if (styles) {
                updaterMap$e.styles(clusterer, styles);
            }
            if (title) {
                updaterMap$e.title(clusterer, title);
            }
            if (zoomOnClick) {
                updaterMap$e.zoomOnClick(clusterer, zoomOnClick);
            }
            if (onMouseOut) {
                setMouseoutListener(google.maps.event.addListener(clusterer, eventMap$e.onMouseOut, onMouseOut));
            }
            if (onMouseOver) {
                setMouseoverListener(google.maps.event.addListener(clusterer, eventMap$e.onMouseOver, onMouseOver));
            }
            if (onClick) {
                setClickListener(google.maps.event.addListener(clusterer, eventMap$e.onClick, onClick));
            }
            if (onClusteringBegin) {
                setClusteringBeginListener(google.maps.event.addListener(clusterer, eventMap$e.onClusteringBegin, onClusteringBegin));
            }
            if (onClusteringEnd) {
                setClusteringEndListener(google.maps.event.addListener(clusterer, eventMap$e.onClusteringEnd, onClusteringEnd));
            }
            setInstance(clusterer);
            if (onLoad) {
                onLoad(clusterer);
            }
            return function () {
                if (mouseoutListener !== null) {
                    google.maps.event.removeListener(mouseoutListener);
                }
                if (mouseoverListener !== null) {
                    google.maps.event.removeListener(mouseoverListener);
                }
                if (clickListener !== null) {
                    google.maps.event.removeListener(clickListener);
                }
                if (clusteringBeginListener !== null) {
                    google.maps.event.removeListener(clusteringBeginListener);
                }
                if (clusteringEndListener !== null) {
                    google.maps.event.removeListener(clusteringEndListener);
                }
                if (onUnmount) {
                    onUnmount(clusterer);
                }
            };
        }, []);
        return instance !== null ? children(instance) || null : null;
    }
    var MarkerClustererF = react.memo(MarkerClustererFunctional);
    var ClustererComponent = /** @class */ (function (_super) {
        __extends(ClustererComponent, _super);
        function ClustererComponent() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.registeredEvents = [];
            _this.state = {
                markerClusterer: null,
            };
            _this.setClustererCallback = function () {
                if (_this.state.markerClusterer !== null && _this.props.onLoad) {
                    _this.props.onLoad(_this.state.markerClusterer);
                }
            };
            return _this;
        }
        ClustererComponent.prototype.componentDidMount = function () {
            if (this.context) {
                var markerClusterer_1 = new Clusterer(this.context, [], this.props.options);
                this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
                    updaterMap: updaterMap$e,
                    eventMap: eventMap$e,
                    prevProps: {},
                    nextProps: this.props,
                    instance: markerClusterer_1,
                });
                this.setState(function () {
                    return {
                        markerClusterer: markerClusterer_1,
                    };
                }, this.setClustererCallback);
            }
        };
        ClustererComponent.prototype.componentDidUpdate = function (prevProps) {
            if (this.state.markerClusterer) {
                unregisterEvents(this.registeredEvents);
                this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
                    updaterMap: updaterMap$e,
                    eventMap: eventMap$e,
                    prevProps: prevProps,
                    nextProps: this.props,
                    instance: this.state.markerClusterer,
                });
            }
        };
        ClustererComponent.prototype.componentWillUnmount = function () {
            if (this.state.markerClusterer !== null) {
                if (this.props.onUnmount) {
                    this.props.onUnmount(this.state.markerClusterer);
                }
                unregisterEvents(this.registeredEvents);
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                this.state.markerClusterer.setMap(null);
            }
        };
        ClustererComponent.prototype.render = function () {
            return this.state.markerClusterer !== null
                ? this.props.children(this.state.markerClusterer)
                : null;
        };
        ClustererComponent.contextType = MapContext;
        return ClustererComponent;
    }(react.PureComponent));

    // This handler prevents an event in the InfoBox from being passed on to the map.
    function cancelHandler(event) {
        event.cancelBubble = true;
        if (event.stopPropagation) {
            event.stopPropagation();
        }
    }
    var InfoBox = /** @class */ (function () {
        function InfoBox(options) {
            if (options === void 0) { options = {}; }
            this.getCloseClickHandler = this.getCloseClickHandler.bind(this);
            this.closeClickHandler = this.closeClickHandler.bind(this);
            this.createInfoBoxDiv = this.createInfoBoxDiv.bind(this);
            this.addClickHandler = this.addClickHandler.bind(this);
            this.getCloseBoxImg = this.getCloseBoxImg.bind(this);
            this.getBoxWidths = this.getBoxWidths.bind(this);
            this.setBoxStyle = this.setBoxStyle.bind(this);
            this.setPosition = this.setPosition.bind(this);
            this.getPosition = this.getPosition.bind(this);
            this.setOptions = this.setOptions.bind(this);
            this.setContent = this.setContent.bind(this);
            this.setVisible = this.setVisible.bind(this);
            this.getContent = this.getContent.bind(this);
            this.getVisible = this.getVisible.bind(this);
            this.setZIndex = this.setZIndex.bind(this);
            this.getZIndex = this.getZIndex.bind(this);
            this.onRemove = this.onRemove.bind(this);
            this.panBox = this.panBox.bind(this);
            this.extend = this.extend.bind(this);
            this.close = this.close.bind(this);
            this.draw = this.draw.bind(this);
            this.show = this.show.bind(this);
            this.hide = this.hide.bind(this);
            this.open = this.open.bind(this);
            this.extend(InfoBox, google.maps.OverlayView);
            // Standard options (in common with google.maps.InfoWindow):
            this.content = options.content || '';
            this.disableAutoPan = options.disableAutoPan || false;
            this.maxWidth = options.maxWidth || 0;
            this.pixelOffset = options.pixelOffset || new google.maps.Size(0, 0);
            this.position = options.position || new google.maps.LatLng(0, 0);
            this.zIndex = options.zIndex || null;
            // Additional options (unique to InfoBox):
            this.boxClass = options.boxClass || 'infoBox';
            this.boxStyle = options.boxStyle || {};
            this.closeBoxMargin = options.closeBoxMargin || '2px';
            this.closeBoxURL = options.closeBoxURL || 'http://www.google.com/intl/en_us/mapfiles/close.gif';
            if (options.closeBoxURL === '') {
                this.closeBoxURL = '';
            }
            this.infoBoxClearance = options.infoBoxClearance || new google.maps.Size(1, 1);
            if (typeof options.visible === 'undefined') {
                if (typeof options.isHidden === 'undefined') {
                    options.visible = true;
                }
                else {
                    options.visible = !options.isHidden;
                }
            }
            this.isHidden = !options.visible;
            this.alignBottom = options.alignBottom || false;
            this.pane = options.pane || 'floatPane';
            this.enableEventPropagation = options.enableEventPropagation || false;
            this.div = null;
            this.closeListener = null;
            this.moveListener = null;
            this.mapListener = null;
            this.contextListener = null;
            this.eventListeners = null;
            this.fixedWidthSet = null;
        }
        InfoBox.prototype.createInfoBoxDiv = function () {
            var _this = this;
            // This handler ignores the current event in the InfoBox and conditionally prevents
            // the event from being passed on to the map. It is used for the contextmenu event.
            var ignoreHandler = function (event) {
                event.returnValue = false;
                if (event.preventDefault) {
                    event.preventDefault();
                }
                if (!_this.enableEventPropagation) {
                    cancelHandler(event);
                }
            };
            if (!this.div) {
                this.div = document.createElement('div');
                this.setBoxStyle();
                if (typeof this.content === 'string') {
                    this.div.innerHTML = this.getCloseBoxImg() + this.content;
                }
                else {
                    this.div.innerHTML = this.getCloseBoxImg();
                    this.div.appendChild(this.content);
                }
                var panes = this.getPanes();
                if (panes !== null) {
                    panes[this.pane].appendChild(this.div); // Add the InfoBox div to the DOM
                }
                this.addClickHandler();
                if (this.div.style.width) {
                    this.fixedWidthSet = true;
                }
                else {
                    if (this.maxWidth !== 0 && this.div.offsetWidth > this.maxWidth) {
                        this.div.style.width = this.maxWidth + 'px';
                        this.fixedWidthSet = true;
                    }
                    else {
                        // The following code is needed to overcome problems with MSIE
                        var bw = this.getBoxWidths();
                        this.div.style.width = this.div.offsetWidth - bw.left - bw.right + 'px';
                        this.fixedWidthSet = false;
                    }
                }
                this.panBox(this.disableAutoPan);
                if (!this.enableEventPropagation) {
                    this.eventListeners = [];
                    // Cancel event propagation.
                    // Note: mousemove not included (to resolve Issue 152)
                    var events = [
                        'mousedown',
                        'mouseover',
                        'mouseout',
                        'mouseup',
                        'click',
                        'dblclick',
                        'touchstart',
                        'touchend',
                        'touchmove',
                    ];
                    for (var _i = 0, events_1 = events; _i < events_1.length; _i++) {
                        var event_1 = events_1[_i];
                        this.eventListeners.push(google.maps.event.addListener(this.div, event_1, cancelHandler));
                    }
                    // Workaround for Google bug that causes the cursor to change to a pointer
                    // when the mouse moves over a marker underneath InfoBox.
                    this.eventListeners.push(google.maps.event.addListener(this.div, 'mouseover', function () {
                        if (_this.div) {
                            _this.div.style.cursor = 'default';
                        }
                    }));
                }
                this.contextListener = google.maps.event.addListener(this.div, 'contextmenu', ignoreHandler);
                /**
                 * This event is fired when the DIV containing the InfoBox's content is attached to the DOM.
                 * @name InfoBox#domready
                 * @event
                 */
                google.maps.event.trigger(this, 'domready');
            }
        };
        InfoBox.prototype.getCloseBoxImg = function () {
            var img = '';
            if (this.closeBoxURL !== '') {
                img = '<img alt=""';
                img += ' aria-hidden="true"';
                img += " src='" + this.closeBoxURL + "'";
                img += ' align=right'; // Do this because Opera chokes on style='float: right;'
                img += " style='";
                img += ' position: relative;'; // Required by MSIE
                img += ' cursor: pointer;';
                img += ' margin: ' + this.closeBoxMargin + ';';
                img += "'>";
            }
            return img;
        };
        InfoBox.prototype.addClickHandler = function () {
            this.closeListener = this.div && this.div.firstChild && this.closeBoxURL !== ''
                ? google.maps.event.addListener(this.div.firstChild, 'click', this.getCloseClickHandler())
                : null;
        };
        InfoBox.prototype.closeClickHandler = function (event) {
            // 1.0.3 fix: Always prevent propagation of a close box click to the map:
            event.cancelBubble = true;
            if (event.stopPropagation) {
                event.stopPropagation();
            }
            /**
             * This event is fired when the InfoBox's close box is clicked.
             * @name InfoBox#closeclick
             * @event
             */
            google.maps.event.trigger(this, 'closeclick');
            this.close();
        };
        InfoBox.prototype.getCloseClickHandler = function () {
            return this.closeClickHandler;
        };
        InfoBox.prototype.panBox = function (disablePan) {
            if (this.div && !disablePan) {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                var map = this.getMap();
                // Only pan if attached to map, not panorama
                if (map instanceof google.maps.Map) {
                    var xOffset = 0;
                    var yOffset = 0;
                    var bounds = map.getBounds();
                    if (bounds && !bounds.contains(this.position)) {
                        // Marker not in visible area of map, so set center
                        // of map to the marker position first.
                        map.setCenter(this.position);
                    }
                    var mapDiv = map.getDiv();
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    var mapWidth = mapDiv.offsetWidth;
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    var mapHeight = mapDiv.offsetHeight;
                    var iwOffsetX = this.pixelOffset.width;
                    var iwOffsetY = this.pixelOffset.height;
                    var iwWidth = this.div.offsetWidth;
                    var iwHeight = this.div.offsetHeight;
                    var padX = this.infoBoxClearance.width;
                    var padY = this.infoBoxClearance.height;
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    var projection = this.getProjection();
                    var pixPosition = projection.fromLatLngToContainerPixel(this.position);
                    if (pixPosition !== null) {
                        if (pixPosition.x < -iwOffsetX + padX) {
                            xOffset = pixPosition.x + iwOffsetX - padX;
                        }
                        else if (pixPosition.x + iwWidth + iwOffsetX + padX > mapWidth) {
                            xOffset = pixPosition.x + iwWidth + iwOffsetX + padX - mapWidth;
                        }
                        if (this.alignBottom) {
                            if (pixPosition.y < -iwOffsetY + padY + iwHeight) {
                                yOffset = pixPosition.y + iwOffsetY - padY - iwHeight;
                            }
                            else if (pixPosition.y + iwOffsetY + padY > mapHeight) {
                                yOffset = pixPosition.y + iwOffsetY + padY - mapHeight;
                            }
                        }
                        else {
                            if (pixPosition.y < -iwOffsetY + padY) {
                                yOffset = pixPosition.y + iwOffsetY - padY;
                            }
                            else if (pixPosition.y + iwHeight + iwOffsetY + padY > mapHeight) {
                                yOffset = pixPosition.y + iwHeight + iwOffsetY + padY - mapHeight;
                            }
                        }
                    }
                    if (!(xOffset === 0 && yOffset === 0)) {
                        // Move the map to the shifted center.
                        map.panBy(xOffset, yOffset);
                    }
                }
            }
        };
        InfoBox.prototype.setBoxStyle = function () {
            if (this.div) {
                // Apply style values from the style sheet defined in the boxClass parameter:
                this.div.className = this.boxClass;
                // Clear existing inline style values:
                this.div.style.cssText = '';
                // Apply style values defined in the boxStyle parameter:
                var boxStyle = this.boxStyle;
                for (var i in boxStyle) {
                    if (Object.prototype.hasOwnProperty.call(boxStyle, i)) {
                        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                        // @ts-ignore
                        this.div.style[i] = boxStyle[i];
                    }
                }
                // Fix for iOS disappearing InfoBox problem
                // See http://stackoverflow.com/questions/9229535/google-maps-markers-disappear-at-certain-zoom-level-only-on-iphone-ipad
                this.div.style.webkitTransform = 'translateZ(0)';
                // Fix up opacity style for benefit of MSIE
                if (typeof this.div.style.opacity !== 'undefined' && this.div.style.opacity !== '') {
                    // See http://www.quirksmode.org/css/opacity.html
                    var opacity = parseFloat(this.div.style.opacity || '');
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    this.div.style.msFilter =
                        '"progid:DXImageTransform.Microsoft.Alpha(Opacity=' + opacity * 100 + ')"';
                    this.div.style.filter = 'alpha(opacity=' + opacity * 100 + ')';
                }
                // Apply required styles
                this.div.style.position = 'absolute';
                this.div.style.visibility = 'hidden';
                if (this.zIndex !== null) {
                    this.div.style.zIndex = this.zIndex + '';
                }
                if (!this.div.style.overflow) {
                    this.div.style.overflow = 'auto';
                }
            }
        };
        InfoBox.prototype.getBoxWidths = function () {
            var bw = { top: 0, bottom: 0, left: 0, right: 0 };
            if (!this.div) {
                return bw;
            }
            if (document.defaultView) {
                var ownerDocument = this.div.ownerDocument;
                var computedStyle = ownerDocument && ownerDocument.defaultView
                    ? ownerDocument.defaultView.getComputedStyle(this.div, '')
                    : null;
                if (computedStyle) {
                    // The computed styles are always in pixel units (good!)
                    bw.top = parseInt(computedStyle.borderTopWidth || '', 10) || 0;
                    bw.bottom = parseInt(computedStyle.borderBottomWidth || '', 10) || 0;
                    bw.left = parseInt(computedStyle.borderLeftWidth || '', 10) || 0;
                    bw.right = parseInt(computedStyle.borderRightWidth || '', 10) || 0;
                }
            }
            else if (
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            document.documentElement.currentStyle // MSIE
            ) {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                var currentStyle = this.div.currentStyle;
                if (currentStyle) {
                    // The current styles may not be in pixel units, but assume they are (bad!)
                    bw.top = parseInt(currentStyle.borderTopWidth || '', 10) || 0;
                    bw.bottom = parseInt(currentStyle.borderBottomWidth || '', 10) || 0;
                    bw.left = parseInt(currentStyle.borderLeftWidth || '', 10) || 0;
                    bw.right = parseInt(currentStyle.borderRightWidth || '', 10) || 0;
                }
            }
            return bw;
        };
        InfoBox.prototype.onRemove = function () {
            if (this.div && this.div.parentNode) {
                this.div.parentNode.removeChild(this.div);
                this.div = null;
            }
        };
        InfoBox.prototype.draw = function () {
            this.createInfoBoxDiv();
            if (this.div) {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                var projection = this.getProjection();
                var pixPosition = projection.fromLatLngToDivPixel(this.position);
                if (pixPosition !== null) {
                    this.div.style.left = pixPosition.x + this.pixelOffset.width + 'px';
                    if (this.alignBottom) {
                        this.div.style.bottom = -(pixPosition.y + this.pixelOffset.height) + 'px';
                    }
                    else {
                        this.div.style.top = pixPosition.y + this.pixelOffset.height + 'px';
                    }
                }
                if (this.isHidden) {
                    this.div.style.visibility = 'hidden';
                }
                else {
                    this.div.style.visibility = 'visible';
                }
            }
        };
        InfoBox.prototype.setOptions = function (options) {
            if (options === void 0) { options = {}; }
            if (typeof options.boxClass !== 'undefined') {
                // Must be first
                this.boxClass = options.boxClass;
                this.setBoxStyle();
            }
            if (typeof options.boxStyle !== 'undefined') {
                // Must be second
                this.boxStyle = options.boxStyle;
                this.setBoxStyle();
            }
            if (typeof options.content !== 'undefined') {
                this.setContent(options.content);
            }
            if (typeof options.disableAutoPan !== 'undefined') {
                this.disableAutoPan = options.disableAutoPan;
            }
            if (typeof options.maxWidth !== 'undefined') {
                this.maxWidth = options.maxWidth;
            }
            if (typeof options.pixelOffset !== 'undefined') {
                this.pixelOffset = options.pixelOffset;
            }
            if (typeof options.alignBottom !== 'undefined') {
                this.alignBottom = options.alignBottom;
            }
            if (typeof options.position !== 'undefined') {
                this.setPosition(options.position);
            }
            if (typeof options.zIndex !== 'undefined') {
                this.setZIndex(options.zIndex);
            }
            if (typeof options.closeBoxMargin !== 'undefined') {
                this.closeBoxMargin = options.closeBoxMargin;
            }
            if (typeof options.closeBoxURL !== 'undefined') {
                this.closeBoxURL = options.closeBoxURL;
            }
            if (typeof options.infoBoxClearance !== 'undefined') {
                this.infoBoxClearance = options.infoBoxClearance;
            }
            if (typeof options.isHidden !== 'undefined') {
                this.isHidden = options.isHidden;
            }
            if (typeof options.visible !== 'undefined') {
                this.isHidden = !options.visible;
            }
            if (typeof options.enableEventPropagation !== 'undefined') {
                this.enableEventPropagation = options.enableEventPropagation;
            }
            if (this.div) {
                this.draw();
            }
        };
        InfoBox.prototype.setContent = function (content) {
            this.content = content;
            if (this.div) {
                if (this.closeListener) {
                    google.maps.event.removeListener(this.closeListener);
                    this.closeListener = null;
                }
                // Odd code required to make things work with MSIE.
                if (!this.fixedWidthSet) {
                    this.div.style.width = '';
                }
                if (typeof content === 'string') {
                    this.div.innerHTML = this.getCloseBoxImg() + content;
                }
                else {
                    this.div.innerHTML = this.getCloseBoxImg();
                    this.div.appendChild(content);
                }
                // Perverse code required to make things work with MSIE.
                // (Ensures the close box does, in fact, float to the right.)
                if (!this.fixedWidthSet) {
                    this.div.style.width = this.div.offsetWidth + 'px';
                    if (typeof content === 'string') {
                        this.div.innerHTML = this.getCloseBoxImg() + content;
                    }
                    else {
                        this.div.innerHTML = this.getCloseBoxImg();
                        this.div.appendChild(content);
                    }
                }
                this.addClickHandler();
            }
            /**
             * This event is fired when the content of the InfoBox changes.
             * @name InfoBox#content_changed
             * @event
             */
            google.maps.event.trigger(this, 'content_changed');
        };
        InfoBox.prototype.setPosition = function (latLng) {
            this.position = latLng;
            if (this.div) {
                this.draw();
            }
            /**
             * This event is fired when the position of the InfoBox changes.
             * @name InfoBox#position_changed
             * @event
             */
            google.maps.event.trigger(this, 'position_changed');
        };
        InfoBox.prototype.setVisible = function (isVisible) {
            this.isHidden = !isVisible;
            if (this.div) {
                this.div.style.visibility = this.isHidden ? 'hidden' : 'visible';
            }
        };
        InfoBox.prototype.setZIndex = function (index) {
            this.zIndex = index;
            if (this.div) {
                this.div.style.zIndex = index + '';
            }
            /**
             * This event is fired when the zIndex of the InfoBox changes.
             * @name InfoBox#zindex_changed
             * @event
             */
            google.maps.event.trigger(this, 'zindex_changed');
        };
        InfoBox.prototype.getContent = function () {
            return this.content;
        };
        InfoBox.prototype.getPosition = function () {
            return this.position;
        };
        InfoBox.prototype.getZIndex = function () {
            return this.zIndex;
        };
        InfoBox.prototype.getVisible = function () {
            var map = this.getMap();
            return typeof map === 'undefined' || map === null ? false : !this.isHidden;
        };
        InfoBox.prototype.show = function () {
            this.isHidden = false;
            if (this.div) {
                this.div.style.visibility = 'visible';
            }
        };
        InfoBox.prototype.hide = function () {
            this.isHidden = true;
            if (this.div) {
                this.div.style.visibility = 'hidden';
            }
        };
        InfoBox.prototype.open = function (map, anchor) {
            var _this = this;
            if (anchor) {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                this.position = anchor.getPosition();
                this.moveListener = google.maps.event.addListener(anchor, 'position_changed', function () {
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    var position = anchor.getPosition();
                    _this.setPosition(position);
                });
                this.mapListener = google.maps.event.addListener(anchor, 'map_changed', function () {
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    _this.setMap(anchor.map);
                });
            }
            this.setMap(map);
            if (this.div) {
                this.panBox();
            }
        };
        InfoBox.prototype.close = function () {
            if (this.closeListener) {
                google.maps.event.removeListener(this.closeListener);
                this.closeListener = null;
            }
            if (this.eventListeners) {
                for (var _i = 0, _a = this.eventListeners; _i < _a.length; _i++) {
                    var eventListener = _a[_i];
                    google.maps.event.removeListener(eventListener);
                }
                this.eventListeners = null;
            }
            if (this.moveListener) {
                google.maps.event.removeListener(this.moveListener);
                this.moveListener = null;
            }
            if (this.mapListener) {
                google.maps.event.removeListener(this.mapListener);
                this.mapListener = null;
            }
            if (this.contextListener) {
                google.maps.event.removeListener(this.contextListener);
                this.contextListener = null;
            }
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            this.setMap(null);
        };
        InfoBox.prototype.extend = function (obj1, obj2) {
            return function applyExtend(object) {
                for (var property in object.prototype) {
                    if (!Object.prototype.hasOwnProperty.call(this, property)) {
                        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                        // @ts-ignore
                        this.prototype[property] = object.prototype[property];
                    }
                }
                return this;
            }.apply(obj1, [obj2]);
        };
        return InfoBox;
    }());

    var eventMap$d = {
        onCloseClick: 'closeclick',
        onContentChanged: 'content_changed',
        onDomReady: 'domready',
        onPositionChanged: 'position_changed',
        onZindexChanged: 'zindex_changed',
    };
    var updaterMap$d = {
        options: function (instance, options) {
            instance.setOptions(options);
        },
        position: function (instance, position) {
            if (position instanceof google.maps.LatLng) {
                instance.setPosition(position);
            }
            else {
                instance.setPosition(new google.maps.LatLng(position.lat, position.lng));
            }
        },
        visible: function (instance, visible) {
            instance.setVisible(visible);
        },
        zIndex: function (instance, zIndex) {
            instance.setZIndex(zIndex);
        },
    };
    var defaultOptions$3 = {};
    function InfoBoxFunctional(_a) {
        var children = _a.children, anchor = _a.anchor, options = _a.options, position = _a.position, zIndex = _a.zIndex, onCloseClick = _a.onCloseClick, onDomReady = _a.onDomReady, onContentChanged = _a.onContentChanged, onPositionChanged = _a.onPositionChanged, onZindexChanged = _a.onZindexChanged, onLoad = _a.onLoad, onUnmount = _a.onUnmount;
        var map = react.useContext(MapContext);
        var _b = react.useState(null), instance = _b[0], setInstance = _b[1];
        var _c = react.useState(null), closeClickListener = _c[0], setCloseClickListener = _c[1];
        var _d = react.useState(null), domReadyClickListener = _d[0], setDomReadyClickListener = _d[1];
        var _e = react.useState(null), contentChangedClickListener = _e[0], setContentChangedClickListener = _e[1];
        var _f = react.useState(null), positionChangedClickListener = _f[0], setPositionChangedClickListener = _f[1];
        var _g = react.useState(null), zIndexChangedClickListener = _g[0], setZindexChangedClickListener = _g[1];
        var containerElementRef = react.useRef(null);
        // Order does matter
        react.useEffect(function () {
            if (map && instance !== null) {
                instance.close();
                if (anchor) {
                    instance.open(map, anchor);
                }
                else if (instance.getPosition()) {
                    instance.open(map);
                }
            }
        }, [map, instance, anchor]);
        react.useEffect(function () {
            if (options && instance !== null) {
                instance.setOptions(options);
            }
        }, [instance, options]);
        react.useEffect(function () {
            if (position && instance !== null) {
                var positionLatLng = position instanceof google.maps.LatLng
                    ? position
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    : new google.maps.LatLng(position.lat, position.lng);
                instance.setPosition(positionLatLng);
            }
        }, [position]);
        react.useEffect(function () {
            if (typeof zIndex === 'number' && instance !== null) {
                instance.setZIndex(zIndex);
            }
        }, [zIndex]);
        react.useEffect(function () {
            if (instance && onCloseClick) {
                if (closeClickListener !== null) {
                    google.maps.event.removeListener(closeClickListener);
                }
                setCloseClickListener(google.maps.event.addListener(instance, 'closeclick', onCloseClick));
            }
        }, [onCloseClick]);
        react.useEffect(function () {
            if (instance && onDomReady) {
                if (domReadyClickListener !== null) {
                    google.maps.event.removeListener(domReadyClickListener);
                }
                setDomReadyClickListener(google.maps.event.addListener(instance, 'domready', onDomReady));
            }
        }, [onDomReady]);
        react.useEffect(function () {
            if (instance && onContentChanged) {
                if (contentChangedClickListener !== null) {
                    google.maps.event.removeListener(contentChangedClickListener);
                }
                setContentChangedClickListener(google.maps.event.addListener(instance, 'content_changed', onContentChanged));
            }
        }, [onContentChanged]);
        react.useEffect(function () {
            if (instance && onPositionChanged) {
                if (positionChangedClickListener !== null) {
                    google.maps.event.removeListener(positionChangedClickListener);
                }
                setPositionChangedClickListener(google.maps.event.addListener(instance, 'position_changed', onPositionChanged));
            }
        }, [onPositionChanged]);
        react.useEffect(function () {
            if (instance && onZindexChanged) {
                if (zIndexChangedClickListener !== null) {
                    google.maps.event.removeListener(zIndexChangedClickListener);
                }
                setZindexChangedClickListener(google.maps.event.addListener(instance, 'zindex_changed', onZindexChanged));
            }
        }, [onZindexChanged]);
        react.useEffect(function () {
            if (map) {
                var _a = options || defaultOptions$3, position_1 = _a.position, infoBoxOptions = __rest$1(_a, ["position"]);
                var positionLatLng = void 0;
                if (position_1 && !(position_1 instanceof google.maps.LatLng)) {
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    positionLatLng = new google.maps.LatLng(position_1.lat, position_1.lng);
                }
                var infoBox = new InfoBox(__assign(__assign({}, infoBoxOptions), (positionLatLng ? { position: positionLatLng } : {})));
                containerElementRef.current = document.createElement('div');
                setInstance(infoBox);
                if (onCloseClick) {
                    setCloseClickListener(google.maps.event.addListener(infoBox, 'closeclick', onCloseClick));
                }
                if (onDomReady) {
                    setDomReadyClickListener(google.maps.event.addListener(infoBox, 'domready', onDomReady));
                }
                if (onContentChanged) {
                    setContentChangedClickListener(google.maps.event.addListener(infoBox, 'content_changed', onContentChanged));
                }
                if (onPositionChanged) {
                    setPositionChangedClickListener(google.maps.event.addListener(infoBox, 'position_changed', onPositionChanged));
                }
                if (onZindexChanged) {
                    setZindexChangedClickListener(google.maps.event.addListener(infoBox, 'zindex_changed', onZindexChanged));
                }
                infoBox.setContent(containerElementRef.current);
                if (anchor) {
                    infoBox.open(map, anchor);
                }
                else if (infoBox.getPosition()) {
                    infoBox.open(map);
                }
                else {
                    invariant$1(false, 'You must provide either an anchor or a position prop for <InfoBox>.');
                }
                if (onLoad) {
                    onLoad(infoBox);
                }
            }
            return function () {
                if (instance !== null) {
                    if (closeClickListener) {
                        google.maps.event.removeListener(closeClickListener);
                    }
                    if (contentChangedClickListener) {
                        google.maps.event.removeListener(contentChangedClickListener);
                    }
                    if (domReadyClickListener) {
                        google.maps.event.removeListener(domReadyClickListener);
                    }
                    if (positionChangedClickListener) {
                        google.maps.event.removeListener(positionChangedClickListener);
                    }
                    if (zIndexChangedClickListener) {
                        google.maps.event.removeListener(zIndexChangedClickListener);
                    }
                    if (onUnmount) {
                        onUnmount(instance);
                    }
                    instance.close();
                }
            };
        }, []);
        return containerElementRef.current ? ReactDOM.createPortal(react.Children.only(children), containerElementRef.current) : null;
    }
    var InfoBoxF = react.memo(InfoBoxFunctional);
    var InfoBoxComponent = /** @class */ (function (_super) {
        __extends(InfoBoxComponent, _super);
        function InfoBoxComponent() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.registeredEvents = [];
            _this.containerElement = null;
            _this.state = {
                infoBox: null,
            };
            _this.open = function (infoBox, anchor) {
                if (anchor) {
                    if (_this.context !== null) {
                        infoBox.open(_this.context, anchor);
                    }
                }
                else if (infoBox.getPosition()) {
                    if (_this.context !== null) {
                        infoBox.open(_this.context);
                    }
                }
                else {
                    invariant$1(false, 'You must provide either an anchor or a position prop for <InfoBox>.');
                }
            };
            _this.setInfoBoxCallback = function () {
                if (_this.state.infoBox !== null && _this.containerElement !== null) {
                    _this.state.infoBox.setContent(_this.containerElement);
                    _this.open(_this.state.infoBox, _this.props.anchor);
                    if (_this.props.onLoad) {
                        _this.props.onLoad(_this.state.infoBox);
                    }
                }
            };
            return _this;
        }
        InfoBoxComponent.prototype.componentDidMount = function () {
            var _a = this.props.options || {}, position = _a.position, infoBoxOptions = __rest$1(_a, ["position"]);
            var positionLatLng;
            if (position && !(position instanceof google.maps.LatLng)) {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                positionLatLng = new google.maps.LatLng(position.lat, position.lng);
            }
            var infoBox = new InfoBox(__assign(__assign({}, infoBoxOptions), (positionLatLng ? { position: positionLatLng } : {})));
            this.containerElement = document.createElement('div');
            this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
                updaterMap: updaterMap$d,
                eventMap: eventMap$d,
                prevProps: {},
                nextProps: this.props,
                instance: infoBox,
            });
            this.setState({ infoBox: infoBox }, this.setInfoBoxCallback);
        };
        InfoBoxComponent.prototype.componentDidUpdate = function (prevProps) {
            var infoBox = this.state.infoBox;
            if (infoBox !== null) {
                unregisterEvents(this.registeredEvents);
                this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
                    updaterMap: updaterMap$d,
                    eventMap: eventMap$d,
                    prevProps: prevProps,
                    nextProps: this.props,
                    instance: infoBox,
                });
            }
        };
        InfoBoxComponent.prototype.componentWillUnmount = function () {
            var onUnmount = this.props.onUnmount;
            var infoBox = this.state.infoBox;
            if (infoBox !== null) {
                if (onUnmount) {
                    onUnmount(infoBox);
                }
                unregisterEvents(this.registeredEvents);
                infoBox.close();
            }
        };
        InfoBoxComponent.prototype.render = function () {
            return this.containerElement ? ReactDOM.createPortal(react.Children.only(this.props.children), this.containerElement) : null;
        };
        InfoBoxComponent.contextType = MapContext;
        return InfoBoxComponent;
    }(react.PureComponent));

    // do not edit .js files directly - edit src/index.jst



    var fastDeepEqual = function equal(a, b) {
      if (a === b) return true;

      if (a && b && typeof a == 'object' && typeof b == 'object') {
        if (a.constructor !== b.constructor) return false;

        var length, i, keys;
        if (Array.isArray(a)) {
          length = a.length;
          if (length != b.length) return false;
          for (i = length; i-- !== 0;)
            if (!equal(a[i], b[i])) return false;
          return true;
        }



        if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
        if (a.valueOf !== Object.prototype.valueOf) return a.valueOf() === b.valueOf();
        if (a.toString !== Object.prototype.toString) return a.toString() === b.toString();

        keys = Object.keys(a);
        length = keys.length;
        if (length !== Object.keys(b).length) return false;

        for (i = length; i-- !== 0;)
          if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;

        for (i = length; i-- !== 0;) {
          var key = keys[i];

          if (!equal(a[key], b[key])) return false;
        }

        return true;
      }

      // true if both NaN, false otherwise
      return a!==a && b!==b;
    };

    var equal = /*@__PURE__*/getDefaultExportFromCjs(fastDeepEqual);

    const ARRAY_TYPES = [
        Int8Array, Uint8Array, Uint8ClampedArray, Int16Array, Uint16Array,
        Int32Array, Uint32Array, Float32Array, Float64Array
    ];

    /** @typedef {Int8ArrayConstructor | Uint8ArrayConstructor | Uint8ClampedArrayConstructor | Int16ArrayConstructor | Uint16ArrayConstructor | Int32ArrayConstructor | Uint32ArrayConstructor | Float32ArrayConstructor | Float64ArrayConstructor} TypedArrayConstructor */

    const VERSION = 1; // serialized format version
    const HEADER_SIZE = 8;

    class KDBush {

        /**
         * Creates an index from raw `ArrayBuffer` data.
         * @param {ArrayBuffer} data
         */
        static from(data) {
            if (!(data instanceof ArrayBuffer)) {
                throw new Error('Data must be an instance of ArrayBuffer.');
            }
            const [magic, versionAndType] = new Uint8Array(data, 0, 2);
            if (magic !== 0xdb) {
                throw new Error('Data does not appear to be in a KDBush format.');
            }
            const version = versionAndType >> 4;
            if (version !== VERSION) {
                throw new Error(`Got v${version} data when expected v${VERSION}.`);
            }
            const ArrayType = ARRAY_TYPES[versionAndType & 0x0f];
            if (!ArrayType) {
                throw new Error('Unrecognized array type.');
            }
            const [nodeSize] = new Uint16Array(data, 2, 1);
            const [numItems] = new Uint32Array(data, 4, 1);

            return new KDBush(numItems, nodeSize, ArrayType, data);
        }

        /**
         * Creates an index that will hold a given number of items.
         * @param {number} numItems
         * @param {number} [nodeSize=64] Size of the KD-tree node (64 by default).
         * @param {TypedArrayConstructor} [ArrayType=Float64Array] The array type used for coordinates storage (`Float64Array` by default).
         * @param {ArrayBuffer} [data] (For internal use only)
         */
        constructor(numItems, nodeSize = 64, ArrayType = Float64Array, data) {
            if (isNaN(numItems) || numItems < 0) throw new Error(`Unpexpected numItems value: ${numItems}.`);

            this.numItems = +numItems;
            this.nodeSize = Math.min(Math.max(+nodeSize, 2), 65535);
            this.ArrayType = ArrayType;
            this.IndexArrayType = numItems < 65536 ? Uint16Array : Uint32Array;

            const arrayTypeIndex = ARRAY_TYPES.indexOf(this.ArrayType);
            const coordsByteSize = numItems * 2 * this.ArrayType.BYTES_PER_ELEMENT;
            const idsByteSize = numItems * this.IndexArrayType.BYTES_PER_ELEMENT;
            const padCoords = (8 - idsByteSize % 8) % 8;

            if (arrayTypeIndex < 0) {
                throw new Error(`Unexpected typed array class: ${ArrayType}.`);
            }

            if (data && (data instanceof ArrayBuffer)) { // reconstruct an index from a buffer
                this.data = data;
                this.ids = new this.IndexArrayType(this.data, HEADER_SIZE, numItems);
                this.coords = new this.ArrayType(this.data, HEADER_SIZE + idsByteSize + padCoords, numItems * 2);
                this._pos = numItems * 2;
                this._finished = true;
            } else { // initialize a new index
                this.data = new ArrayBuffer(HEADER_SIZE + coordsByteSize + idsByteSize + padCoords);
                this.ids = new this.IndexArrayType(this.data, HEADER_SIZE, numItems);
                this.coords = new this.ArrayType(this.data, HEADER_SIZE + idsByteSize + padCoords, numItems * 2);
                this._pos = 0;
                this._finished = false;

                // set header
                new Uint8Array(this.data, 0, 2).set([0xdb, (VERSION << 4) + arrayTypeIndex]);
                new Uint16Array(this.data, 2, 1)[0] = nodeSize;
                new Uint32Array(this.data, 4, 1)[0] = numItems;
            }
        }

        /**
         * Add a point to the index.
         * @param {number} x
         * @param {number} y
         * @returns {number} An incremental index associated with the added item (starting from `0`).
         */
        add(x, y) {
            const index = this._pos >> 1;
            this.ids[index] = index;
            this.coords[this._pos++] = x;
            this.coords[this._pos++] = y;
            return index;
        }

        /**
         * Perform indexing of the added points.
         */
        finish() {
            const numAdded = this._pos >> 1;
            if (numAdded !== this.numItems) {
                throw new Error(`Added ${numAdded} items when expected ${this.numItems}.`);
            }
            // kd-sort both arrays for efficient search
            sort(this.ids, this.coords, this.nodeSize, 0, this.numItems - 1, 0);

            this._finished = true;
            return this;
        }

        /**
         * Search the index for items within a given bounding box.
         * @param {number} minX
         * @param {number} minY
         * @param {number} maxX
         * @param {number} maxY
         * @returns {number[]} An array of indices correponding to the found items.
         */
        range(minX, minY, maxX, maxY) {
            if (!this._finished) throw new Error('Data not yet indexed - call index.finish().');

            const {ids, coords, nodeSize} = this;
            const stack = [0, ids.length - 1, 0];
            const result = [];

            // recursively search for items in range in the kd-sorted arrays
            while (stack.length) {
                const axis = stack.pop() || 0;
                const right = stack.pop() || 0;
                const left = stack.pop() || 0;

                // if we reached "tree node", search linearly
                if (right - left <= nodeSize) {
                    for (let i = left; i <= right; i++) {
                        const x = coords[2 * i];
                        const y = coords[2 * i + 1];
                        if (x >= minX && x <= maxX && y >= minY && y <= maxY) result.push(ids[i]);
                    }
                    continue;
                }

                // otherwise find the middle index
                const m = (left + right) >> 1;

                // include the middle item if it's in range
                const x = coords[2 * m];
                const y = coords[2 * m + 1];
                if (x >= minX && x <= maxX && y >= minY && y <= maxY) result.push(ids[m]);

                // queue search in halves that intersect the query
                if (axis === 0 ? minX <= x : minY <= y) {
                    stack.push(left);
                    stack.push(m - 1);
                    stack.push(1 - axis);
                }
                if (axis === 0 ? maxX >= x : maxY >= y) {
                    stack.push(m + 1);
                    stack.push(right);
                    stack.push(1 - axis);
                }
            }

            return result;
        }

        /**
         * Search the index for items within a given radius.
         * @param {number} qx
         * @param {number} qy
         * @param {number} r Query radius.
         * @returns {number[]} An array of indices correponding to the found items.
         */
        within(qx, qy, r) {
            if (!this._finished) throw new Error('Data not yet indexed - call index.finish().');

            const {ids, coords, nodeSize} = this;
            const stack = [0, ids.length - 1, 0];
            const result = [];
            const r2 = r * r;

            // recursively search for items within radius in the kd-sorted arrays
            while (stack.length) {
                const axis = stack.pop() || 0;
                const right = stack.pop() || 0;
                const left = stack.pop() || 0;

                // if we reached "tree node", search linearly
                if (right - left <= nodeSize) {
                    for (let i = left; i <= right; i++) {
                        if (sqDist(coords[2 * i], coords[2 * i + 1], qx, qy) <= r2) result.push(ids[i]);
                    }
                    continue;
                }

                // otherwise find the middle index
                const m = (left + right) >> 1;

                // include the middle item if it's in range
                const x = coords[2 * m];
                const y = coords[2 * m + 1];
                if (sqDist(x, y, qx, qy) <= r2) result.push(ids[m]);

                // queue search in halves that intersect the query
                if (axis === 0 ? qx - r <= x : qy - r <= y) {
                    stack.push(left);
                    stack.push(m - 1);
                    stack.push(1 - axis);
                }
                if (axis === 0 ? qx + r >= x : qy + r >= y) {
                    stack.push(m + 1);
                    stack.push(right);
                    stack.push(1 - axis);
                }
            }

            return result;
        }
    }

    /**
     * @param {Uint16Array | Uint32Array} ids
     * @param {InstanceType<TypedArrayConstructor>} coords
     * @param {number} nodeSize
     * @param {number} left
     * @param {number} right
     * @param {number} axis
     */
    function sort(ids, coords, nodeSize, left, right, axis) {
        if (right - left <= nodeSize) return;

        const m = (left + right) >> 1; // middle index

        // sort ids and coords around the middle index so that the halves lie
        // either left/right or top/bottom correspondingly (taking turns)
        select(ids, coords, m, left, right, axis);

        // recursively kd-sort first half and second half on the opposite axis
        sort(ids, coords, nodeSize, left, m - 1, 1 - axis);
        sort(ids, coords, nodeSize, m + 1, right, 1 - axis);
    }

    /**
     * Custom Floyd-Rivest selection algorithm: sort ids and coords so that
     * [left..k-1] items are smaller than k-th item (on either x or y axis)
     * @param {Uint16Array | Uint32Array} ids
     * @param {InstanceType<TypedArrayConstructor>} coords
     * @param {number} k
     * @param {number} left
     * @param {number} right
     * @param {number} axis
     */
    function select(ids, coords, k, left, right, axis) {

        while (right > left) {
            if (right - left > 600) {
                const n = right - left + 1;
                const m = k - left + 1;
                const z = Math.log(n);
                const s = 0.5 * Math.exp(2 * z / 3);
                const sd = 0.5 * Math.sqrt(z * s * (n - s) / n) * (m - n / 2 < 0 ? -1 : 1);
                const newLeft = Math.max(left, Math.floor(k - m * s / n + sd));
                const newRight = Math.min(right, Math.floor(k + (n - m) * s / n + sd));
                select(ids, coords, k, newLeft, newRight, axis);
            }

            const t = coords[2 * k + axis];
            let i = left;
            let j = right;

            swapItem(ids, coords, left, k);
            if (coords[2 * right + axis] > t) swapItem(ids, coords, left, right);

            while (i < j) {
                swapItem(ids, coords, i, j);
                i++;
                j--;
                while (coords[2 * i + axis] < t) i++;
                while (coords[2 * j + axis] > t) j--;
            }

            if (coords[2 * left + axis] === t) swapItem(ids, coords, left, j);
            else {
                j++;
                swapItem(ids, coords, j, right);
            }

            if (j <= k) left = j + 1;
            if (k <= j) right = j - 1;
        }
    }

    /**
     * @param {Uint16Array | Uint32Array} ids
     * @param {InstanceType<TypedArrayConstructor>} coords
     * @param {number} i
     * @param {number} j
     */
    function swapItem(ids, coords, i, j) {
        swap(ids, i, j);
        swap(coords, 2 * i, 2 * j);
        swap(coords, 2 * i + 1, 2 * j + 1);
    }

    /**
     * @param {InstanceType<TypedArrayConstructor>} arr
     * @param {number} i
     * @param {number} j
     */
    function swap(arr, i, j) {
        const tmp = arr[i];
        arr[i] = arr[j];
        arr[j] = tmp;
    }

    /**
     * @param {number} ax
     * @param {number} ay
     * @param {number} bx
     * @param {number} by
     */
    function sqDist(ax, ay, bx, by) {
        const dx = ax - bx;
        const dy = ay - by;
        return dx * dx + dy * dy;
    }

    const defaultOptions$2 = {
        minZoom: 0,   // min zoom to generate clusters on
        maxZoom: 16,  // max zoom level to cluster the points on
        minPoints: 2, // minimum points to form a cluster
        radius: 40,   // cluster radius in pixels
        extent: 512,  // tile extent (radius is calculated relative to it)
        nodeSize: 64, // size of the KD-tree leaf node, affects performance
        log: false,   // whether to log timing info

        // whether to generate numeric ids for input features (in vector tiles)
        generateId: false,

        // a reduce function for calculating custom cluster properties
        reduce: null, // (accumulated, props) => { accumulated.sum += props.sum; }

        // properties to use for individual points when running the reducer
        map: props => props // props => ({sum: props.my_value})
    };

    const fround = Math.fround || (tmp => ((x) => { tmp[0] = +x; return tmp[0]; }))(new Float32Array(1));

    const OFFSET_ZOOM = 2;
    const OFFSET_ID = 3;
    const OFFSET_PARENT = 4;
    const OFFSET_NUM = 5;
    const OFFSET_PROP = 6;

    class Supercluster {
        constructor(options) {
            this.options = Object.assign(Object.create(defaultOptions$2), options);
            this.trees = new Array(this.options.maxZoom + 1);
            this.stride = this.options.reduce ? 7 : 6;
            this.clusterProps = [];
        }

        load(points) {
            const {log, minZoom, maxZoom} = this.options;

            if (log) console.time('total time');

            const timerId = `prepare ${  points.length  } points`;
            if (log) console.time(timerId);

            this.points = points;

            // generate a cluster object for each point and index input points into a KD-tree
            const data = [];

            for (let i = 0; i < points.length; i++) {
                const p = points[i];
                if (!p.geometry) continue;

                const [lng, lat] = p.geometry.coordinates;
                const x = fround(lngX(lng));
                const y = fround(latY(lat));
                // store internal point/cluster data in flat numeric arrays for performance
                data.push(
                    x, y, // projected point coordinates
                    Infinity, // the last zoom the point was processed at
                    i, // index of the source feature in the original input array
                    -1, // parent cluster id
                    1 // number of points in a cluster
                );
                if (this.options.reduce) data.push(0); // noop
            }
            let tree = this.trees[maxZoom + 1] = this._createTree(data);

            if (log) console.timeEnd(timerId);

            // cluster points on max zoom, then cluster the results on previous zoom, etc.;
            // results in a cluster hierarchy across zoom levels
            for (let z = maxZoom; z >= minZoom; z--) {
                const now = +Date.now();

                // create a new set of clusters for the zoom and index them with a KD-tree
                tree = this.trees[z] = this._createTree(this._cluster(tree, z));

                if (log) console.log('z%d: %d clusters in %dms', z, tree.numItems, +Date.now() - now);
            }

            if (log) console.timeEnd('total time');

            return this;
        }

        getClusters(bbox, zoom) {
            let minLng = ((bbox[0] + 180) % 360 + 360) % 360 - 180;
            const minLat = Math.max(-90, Math.min(90, bbox[1]));
            let maxLng = bbox[2] === 180 ? 180 : ((bbox[2] + 180) % 360 + 360) % 360 - 180;
            const maxLat = Math.max(-90, Math.min(90, bbox[3]));

            if (bbox[2] - bbox[0] >= 360) {
                minLng = -180;
                maxLng = 180;
            } else if (minLng > maxLng) {
                const easternHem = this.getClusters([minLng, minLat, 180, maxLat], zoom);
                const westernHem = this.getClusters([-180, minLat, maxLng, maxLat], zoom);
                return easternHem.concat(westernHem);
            }

            const tree = this.trees[this._limitZoom(zoom)];
            const ids = tree.range(lngX(minLng), latY(maxLat), lngX(maxLng), latY(minLat));
            const data = tree.data;
            const clusters = [];
            for (const id of ids) {
                const k = this.stride * id;
                clusters.push(data[k + OFFSET_NUM] > 1 ? getClusterJSON(data, k, this.clusterProps) : this.points[data[k + OFFSET_ID]]);
            }
            return clusters;
        }

        getChildren(clusterId) {
            const originId = this._getOriginId(clusterId);
            const originZoom = this._getOriginZoom(clusterId);
            const errorMsg = 'No cluster with the specified id.';

            const tree = this.trees[originZoom];
            if (!tree) throw new Error(errorMsg);

            const data = tree.data;
            if (originId * this.stride >= data.length) throw new Error(errorMsg);

            const r = this.options.radius / (this.options.extent * Math.pow(2, originZoom - 1));
            const x = data[originId * this.stride];
            const y = data[originId * this.stride + 1];
            const ids = tree.within(x, y, r);
            const children = [];
            for (const id of ids) {
                const k = id * this.stride;
                if (data[k + OFFSET_PARENT] === clusterId) {
                    children.push(data[k + OFFSET_NUM] > 1 ? getClusterJSON(data, k, this.clusterProps) : this.points[data[k + OFFSET_ID]]);
                }
            }

            if (children.length === 0) throw new Error(errorMsg);

            return children;
        }

        getLeaves(clusterId, limit, offset) {
            limit = limit || 10;
            offset = offset || 0;

            const leaves = [];
            this._appendLeaves(leaves, clusterId, limit, offset, 0);

            return leaves;
        }

        getTile(z, x, y) {
            const tree = this.trees[this._limitZoom(z)];
            const z2 = Math.pow(2, z);
            const {extent, radius} = this.options;
            const p = radius / extent;
            const top = (y - p) / z2;
            const bottom = (y + 1 + p) / z2;

            const tile = {
                features: []
            };

            this._addTileFeatures(
                tree.range((x - p) / z2, top, (x + 1 + p) / z2, bottom),
                tree.data, x, y, z2, tile);

            if (x === 0) {
                this._addTileFeatures(
                    tree.range(1 - p / z2, top, 1, bottom),
                    tree.data, z2, y, z2, tile);
            }
            if (x === z2 - 1) {
                this._addTileFeatures(
                    tree.range(0, top, p / z2, bottom),
                    tree.data, -1, y, z2, tile);
            }

            return tile.features.length ? tile : null;
        }

        getClusterExpansionZoom(clusterId) {
            let expansionZoom = this._getOriginZoom(clusterId) - 1;
            while (expansionZoom <= this.options.maxZoom) {
                const children = this.getChildren(clusterId);
                expansionZoom++;
                if (children.length !== 1) break;
                clusterId = children[0].properties.cluster_id;
            }
            return expansionZoom;
        }

        _appendLeaves(result, clusterId, limit, offset, skipped) {
            const children = this.getChildren(clusterId);

            for (const child of children) {
                const props = child.properties;

                if (props && props.cluster) {
                    if (skipped + props.point_count <= offset) {
                        // skip the whole cluster
                        skipped += props.point_count;
                    } else {
                        // enter the cluster
                        skipped = this._appendLeaves(result, props.cluster_id, limit, offset, skipped);
                        // exit the cluster
                    }
                } else if (skipped < offset) {
                    // skip a single point
                    skipped++;
                } else {
                    // add a single point
                    result.push(child);
                }
                if (result.length === limit) break;
            }

            return skipped;
        }

        _createTree(data) {
            const tree = new KDBush(data.length / this.stride | 0, this.options.nodeSize, Float32Array);
            for (let i = 0; i < data.length; i += this.stride) tree.add(data[i], data[i + 1]);
            tree.finish();
            tree.data = data;
            return tree;
        }

        _addTileFeatures(ids, data, x, y, z2, tile) {
            for (const i of ids) {
                const k = i * this.stride;
                const isCluster = data[k + OFFSET_NUM] > 1;

                let tags, px, py;
                if (isCluster) {
                    tags = getClusterProperties(data, k, this.clusterProps);
                    px = data[k];
                    py = data[k + 1];
                } else {
                    const p = this.points[data[k + OFFSET_ID]];
                    tags = p.properties;
                    const [lng, lat] = p.geometry.coordinates;
                    px = lngX(lng);
                    py = latY(lat);
                }

                const f = {
                    type: 1,
                    geometry: [[
                        Math.round(this.options.extent * (px * z2 - x)),
                        Math.round(this.options.extent * (py * z2 - y))
                    ]],
                    tags
                };

                // assign id
                let id;
                if (isCluster || this.options.generateId) {
                    // optionally generate id for points
                    id = data[k + OFFSET_ID];
                } else {
                    // keep id if already assigned
                    id = this.points[data[k + OFFSET_ID]].id;
                }

                if (id !== undefined) f.id = id;

                tile.features.push(f);
            }
        }

        _limitZoom(z) {
            return Math.max(this.options.minZoom, Math.min(Math.floor(+z), this.options.maxZoom + 1));
        }

        _cluster(tree, zoom) {
            const {radius, extent, reduce, minPoints} = this.options;
            const r = radius / (extent * Math.pow(2, zoom));
            const data = tree.data;
            const nextData = [];
            const stride = this.stride;

            // loop through each point
            for (let i = 0; i < data.length; i += stride) {
                // if we've already visited the point at this zoom level, skip it
                if (data[i + OFFSET_ZOOM] <= zoom) continue;
                data[i + OFFSET_ZOOM] = zoom;

                // find all nearby points
                const x = data[i];
                const y = data[i + 1];
                const neighborIds = tree.within(data[i], data[i + 1], r);

                const numPointsOrigin = data[i + OFFSET_NUM];
                let numPoints = numPointsOrigin;

                // count the number of points in a potential cluster
                for (const neighborId of neighborIds) {
                    const k = neighborId * stride;
                    // filter out neighbors that are already processed
                    if (data[k + OFFSET_ZOOM] > zoom) numPoints += data[k + OFFSET_NUM];
                }

                // if there were neighbors to merge, and there are enough points to form a cluster
                if (numPoints > numPointsOrigin && numPoints >= minPoints) {
                    let wx = x * numPointsOrigin;
                    let wy = y * numPointsOrigin;

                    let clusterProperties;
                    let clusterPropIndex = -1;

                    // encode both zoom and point index on which the cluster originated -- offset by total length of features
                    const id = ((i / stride | 0) << 5) + (zoom + 1) + this.points.length;

                    for (const neighborId of neighborIds) {
                        const k = neighborId * stride;

                        if (data[k + OFFSET_ZOOM] <= zoom) continue;
                        data[k + OFFSET_ZOOM] = zoom; // save the zoom (so it doesn't get processed twice)

                        const numPoints2 = data[k + OFFSET_NUM];
                        wx += data[k] * numPoints2; // accumulate coordinates for calculating weighted center
                        wy += data[k + 1] * numPoints2;

                        data[k + OFFSET_PARENT] = id;

                        if (reduce) {
                            if (!clusterProperties) {
                                clusterProperties = this._map(data, i, true);
                                clusterPropIndex = this.clusterProps.length;
                                this.clusterProps.push(clusterProperties);
                            }
                            reduce(clusterProperties, this._map(data, k));
                        }
                    }

                    data[i + OFFSET_PARENT] = id;
                    nextData.push(wx / numPoints, wy / numPoints, Infinity, id, -1, numPoints);
                    if (reduce) nextData.push(clusterPropIndex);

                } else { // left points as unclustered
                    for (let j = 0; j < stride; j++) nextData.push(data[i + j]);

                    if (numPoints > 1) {
                        for (const neighborId of neighborIds) {
                            const k = neighborId * stride;
                            if (data[k + OFFSET_ZOOM] <= zoom) continue;
                            data[k + OFFSET_ZOOM] = zoom;
                            for (let j = 0; j < stride; j++) nextData.push(data[k + j]);
                        }
                    }
                }
            }

            return nextData;
        }

        // get index of the point from which the cluster originated
        _getOriginId(clusterId) {
            return (clusterId - this.points.length) >> 5;
        }

        // get zoom of the point from which the cluster originated
        _getOriginZoom(clusterId) {
            return (clusterId - this.points.length) % 32;
        }

        _map(data, i, clone) {
            if (data[i + OFFSET_NUM] > 1) {
                const props = this.clusterProps[data[i + OFFSET_PROP]];
                return clone ? Object.assign({}, props) : props;
            }
            const original = this.points[data[i + OFFSET_ID]].properties;
            const result = this.options.map(original);
            return clone && result === original ? Object.assign({}, result) : result;
        }
    }

    function getClusterJSON(data, i, clusterProps) {
        return {
            type: 'Feature',
            id: data[i + OFFSET_ID],
            properties: getClusterProperties(data, i, clusterProps),
            geometry: {
                type: 'Point',
                coordinates: [xLng(data[i]), yLat(data[i + 1])]
            }
        };
    }

    function getClusterProperties(data, i, clusterProps) {
        const count = data[i + OFFSET_NUM];
        const abbrev =
            count >= 10000 ? `${Math.round(count / 1000)  }k` :
            count >= 1000 ? `${Math.round(count / 100) / 10  }k` : count;
        const propIndex = data[i + OFFSET_PROP];
        const properties = propIndex === -1 ? {} : Object.assign({}, clusterProps[propIndex]);
        return Object.assign(properties, {
            cluster: true,
            cluster_id: data[i + OFFSET_ID],
            point_count: count,
            point_count_abbreviated: abbrev
        });
    }

    // longitude/latitude to spherical mercator in [0..1] range
    function lngX(lng) {
        return lng / 360 + 0.5;
    }
    function latY(lat) {
        const sin = Math.sin(lat * Math.PI / 180);
        const y = (0.5 - 0.25 * Math.log((1 + sin) / (1 - sin)) / Math.PI);
        return y < 0 ? 0 : y > 1 ? 1 : y;
    }

    // spherical mercator to longitude/latitude
    function xLng(x) {
        return (x - 0.5) * 360;
    }
    function yLat(y) {
        const y2 = (180 - y * 360) * Math.PI / 180;
        return 360 * Math.atan(Math.exp(y2)) / Math.PI - 90;
    }

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    /**
     * Copyright 2023 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *      http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    /**
     * util class that creates a common set of convenience functions to wrap
     * shared behavior of Advanced Markers and Markers.
     */
    class MarkerUtils {
        static isAdvancedMarkerAvailable(map) {
            return (google.maps.marker &&
                map.getMapCapabilities().isAdvancedMarkersAvailable === true);
        }
        static isAdvancedMarker(marker) {
            return (google.maps.marker &&
                marker instanceof google.maps.marker.AdvancedMarkerElement);
        }
        static setMap(marker, map) {
            if (this.isAdvancedMarker(marker)) {
                marker.map = map;
            }
            else {
                marker.setMap(map);
            }
        }
        static getPosition(marker) {
            // SuperClusterAlgorithm.calculate expects a LatLng instance so we fake it for Adv Markers
            if (this.isAdvancedMarker(marker)) {
                if (marker.position) {
                    if (marker.position instanceof google.maps.LatLng) {
                        return marker.position;
                    }
                    // since we can't cast to LatLngLiteral for reasons =(
                    if (marker.position.lat && marker.position.lng) {
                        return new google.maps.LatLng(marker.position.lat, marker.position.lng);
                    }
                }
                return new google.maps.LatLng(null);
            }
            return marker.getPosition();
        }
        static getVisible(marker) {
            if (this.isAdvancedMarker(marker)) {
                /**
                 * Always return true for Advanced Markers because the clusterer
                 * uses getVisible as a way to count legacy markers not as an actual
                 * indicator of visibility for some reason. Even when markers are hidden
                 * Marker.getVisible returns `true` and this is used to set the marker count
                 * on the cluster. See the behavior of Cluster.count
                 */
                return true;
            }
            return marker.getVisible();
        }
    }

    /**
     * Copyright 2021 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *      http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    class Cluster {
        constructor({ markers, position }) {
            this.markers = markers;
            if (position) {
                if (position instanceof google.maps.LatLng) {
                    this._position = position;
                }
                else {
                    this._position = new google.maps.LatLng(position);
                }
            }
        }
        get bounds() {
            if (this.markers.length === 0 && !this._position) {
                return;
            }
            const bounds = new google.maps.LatLngBounds(this._position, this._position);
            for (const marker of this.markers) {
                bounds.extend(MarkerUtils.getPosition(marker));
            }
            return bounds;
        }
        get position() {
            return this._position || this.bounds.getCenter();
        }
        /**
         * Get the count of **visible** markers.
         */
        get count() {
            return this.markers.filter((m) => MarkerUtils.getVisible(m)).length;
        }
        /**
         * Add a marker to the cluster.
         */
        push(marker) {
            this.markers.push(marker);
        }
        /**
         * Cleanup references and remove marker from map.
         */
        delete() {
            if (this.marker) {
                MarkerUtils.setMap(this.marker, null);
                this.marker = undefined;
            }
            this.markers.length = 0;
        }
    }

    /**
     * Copyright 2021 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *      http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    /**
     * Returns the markers visible in a padded map viewport
     *
     * @param map
     * @param mapCanvasProjection
     * @param markers The list of marker to filter
     * @param viewportPaddingPixels The padding in pixel
     * @returns The list of markers in the padded viewport
     */
    const filterMarkersToPaddedViewport = (map, mapCanvasProjection, markers, viewportPaddingPixels) => {
        const extendedMapBounds = extendBoundsToPaddedViewport(map.getBounds(), mapCanvasProjection, viewportPaddingPixels);
        return markers.filter((marker) => extendedMapBounds.contains(MarkerUtils.getPosition(marker)));
    };
    /**
     * Extends a bounds by a number of pixels in each direction
     */
    const extendBoundsToPaddedViewport = (bounds, projection, numPixels) => {
        const { northEast, southWest } = latLngBoundsToPixelBounds(bounds, projection);
        const extendedPixelBounds = extendPixelBounds({ northEast, southWest }, numPixels);
        return pixelBoundsToLatLngBounds(extendedPixelBounds, projection);
    };
    /**
     * Gets the extended bounds as a bbox [westLng, southLat, eastLng, northLat]
     */
    const getPaddedViewport = (bounds, projection, pixels) => {
        const extended = extendBoundsToPaddedViewport(bounds, projection, pixels);
        const ne = extended.getNorthEast();
        const sw = extended.getSouthWest();
        return [sw.lng(), sw.lat(), ne.lng(), ne.lat()];
    };
    /**
     * Returns the distance between 2 positions.
     *
     * @hidden
     */
    const distanceBetweenPoints = (p1, p2) => {
        const R = 6371; // Radius of the Earth in km
        const dLat = ((p2.lat - p1.lat) * Math.PI) / 180;
        const dLon = ((p2.lng - p1.lng) * Math.PI) / 180;
        const sinDLat = Math.sin(dLat / 2);
        const sinDLon = Math.sin(dLon / 2);
        const a = sinDLat * sinDLat +
            Math.cos((p1.lat * Math.PI) / 180) *
                Math.cos((p2.lat * Math.PI) / 180) *
                sinDLon *
                sinDLon;
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        return R * c;
    };
    /**
     * Converts a LatLng bound to pixels.
     *
     * @hidden
     */
    const latLngBoundsToPixelBounds = (bounds, projection) => {
        return {
            northEast: projection.fromLatLngToDivPixel(bounds.getNorthEast()),
            southWest: projection.fromLatLngToDivPixel(bounds.getSouthWest()),
        };
    };
    /**
     * Extends a pixel bounds by numPixels in all directions.
     *
     * @hidden
     */
    const extendPixelBounds = ({ northEast, southWest }, numPixels) => {
        northEast.x += numPixels;
        northEast.y -= numPixels;
        southWest.x -= numPixels;
        southWest.y += numPixels;
        return { northEast, southWest };
    };
    /**
     * @hidden
     */
    const pixelBoundsToLatLngBounds = ({ northEast, southWest }, projection) => {
        const sw = projection.fromDivPixelToLatLng(southWest);
        const ne = projection.fromDivPixelToLatLng(northEast);
        return new google.maps.LatLngBounds(sw, ne);
    };

    /**
     * Copyright 2021 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *      http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    /**
     * @hidden
     */
    class AbstractAlgorithm {
        constructor({ maxZoom = 16 }) {
            this.maxZoom = maxZoom;
        }
        /**
         * Helper function to bypass clustering based upon some map state such as
         * zoom, number of markers, etc.
         *
         * ```typescript
         *  cluster({markers, map}: AlgorithmInput): Cluster[] {
         *    if (shouldBypassClustering(map)) {
         *      return this.noop({markers})
         *    }
         * }
         * ```
         */
        noop({ markers, }) {
            return noop$1(markers);
        }
    }
    /**
     * Abstract viewport algorithm proves a class to filter markers by a padded
     * viewport. This is a common optimization.
     *
     * @hidden
     */
    class AbstractViewportAlgorithm extends AbstractAlgorithm {
        constructor(_a) {
            var { viewportPadding = 60 } = _a, options = __rest(_a, ["viewportPadding"]);
            super(options);
            this.viewportPadding = 60;
            this.viewportPadding = viewportPadding;
        }
        calculate({ markers, map, mapCanvasProjection, }) {
            if (map.getZoom() >= this.maxZoom) {
                return {
                    clusters: this.noop({
                        markers,
                    }),
                    changed: false,
                };
            }
            return {
                clusters: this.cluster({
                    markers: filterMarkersToPaddedViewport(map, mapCanvasProjection, markers, this.viewportPadding),
                    map,
                    mapCanvasProjection,
                }),
            };
        }
    }
    /**
     * @hidden
     */
    const noop$1 = (markers) => {
        const clusters = markers.map((marker) => new Cluster({
            position: MarkerUtils.getPosition(marker),
            markers: [marker],
        }));
        return clusters;
    };

    /**
     * Copyright 2021 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *      http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    /**
     * The default Grid algorithm historically used in Google Maps marker
     * clustering.
     *
     * The Grid algorithm does not implement caching and markers may flash as the
     * viewport changes. Instead use {@link SuperClusterAlgorithm}.
     */
    class GridAlgorithm extends AbstractViewportAlgorithm {
        constructor(_a) {
            var { maxDistance = 40000, gridSize = 40 } = _a, options = __rest(_a, ["maxDistance", "gridSize"]);
            super(options);
            this.clusters = [];
            this.state = { zoom: -1 };
            this.maxDistance = maxDistance;
            this.gridSize = gridSize;
        }
        calculate({ markers, map, mapCanvasProjection, }) {
            const state = { zoom: map.getZoom() };
            let changed = false;
            if (this.state.zoom >= this.maxZoom && state.zoom >= this.maxZoom) ;
            else {
                changed = !equal(this.state, state);
            }
            this.state = state;
            if (map.getZoom() >= this.maxZoom) {
                return {
                    clusters: this.noop({
                        markers,
                    }),
                    changed,
                };
            }
            return {
                clusters: this.cluster({
                    markers: filterMarkersToPaddedViewport(map, mapCanvasProjection, markers, this.viewportPadding),
                    map,
                    mapCanvasProjection,
                }),
            };
        }
        cluster({ markers, map, mapCanvasProjection, }) {
            this.clusters = [];
            markers.forEach((marker) => {
                this.addToClosestCluster(marker, map, mapCanvasProjection);
            });
            return this.clusters;
        }
        addToClosestCluster(marker, map, projection) {
            let maxDistance = this.maxDistance; // Some large number
            let cluster = null;
            for (let i = 0; i < this.clusters.length; i++) {
                const candidate = this.clusters[i];
                const distance = distanceBetweenPoints(candidate.bounds.getCenter().toJSON(), MarkerUtils.getPosition(marker).toJSON());
                if (distance < maxDistance) {
                    maxDistance = distance;
                    cluster = candidate;
                }
            }
            if (cluster &&
                extendBoundsToPaddedViewport(cluster.bounds, projection, this.gridSize).contains(MarkerUtils.getPosition(marker))) {
                cluster.push(marker);
            }
            else {
                const cluster = new Cluster({ markers: [marker] });
                this.clusters.push(cluster);
            }
        }
    }

    /**
     * Copyright 2021 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *      http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    /**
     * Noop algorithm does not generate any clusters or filter markers by the an extended viewport.
     */
    class NoopAlgorithm extends AbstractAlgorithm {
        constructor(_a) {
            var options = __rest(_a, []);
            super(options);
        }
        calculate({ markers, map, mapCanvasProjection, }) {
            return {
                clusters: this.cluster({ markers, map, mapCanvasProjection }),
                changed: false,
            };
        }
        cluster(input) {
            return this.noop(input);
        }
    }

    /**
     * Copyright 2021 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *      http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    /**
     * A very fast JavaScript algorithm for geospatial point clustering using KD trees.
     *
     * @see https://www.npmjs.com/package/supercluster for more information on options.
     */
    class SuperClusterAlgorithm extends AbstractAlgorithm {
        constructor(_a) {
            var { maxZoom, radius = 60 } = _a, options = __rest(_a, ["maxZoom", "radius"]);
            super({ maxZoom });
            this.state = { zoom: -1 };
            this.superCluster = new Supercluster(Object.assign({ maxZoom: this.maxZoom, radius }, options));
        }
        calculate(input) {
            let changed = false;
            const state = { zoom: input.map.getZoom() };
            if (!equal(input.markers, this.markers)) {
                changed = true;
                // TODO use proxy to avoid copy?
                this.markers = [...input.markers];
                const points = this.markers.map((marker) => {
                    const position = MarkerUtils.getPosition(marker);
                    const coordinates = [position.lng(), position.lat()];
                    return {
                        type: "Feature",
                        geometry: {
                            type: "Point",
                            coordinates,
                        },
                        properties: { marker },
                    };
                });
                this.superCluster.load(points);
            }
            if (!changed) {
                if (this.state.zoom <= this.maxZoom || state.zoom <= this.maxZoom) {
                    changed = !equal(this.state, state);
                }
            }
            this.state = state;
            if (changed) {
                this.clusters = this.cluster(input);
            }
            return { clusters: this.clusters, changed };
        }
        cluster({ map }) {
            return this.superCluster
                .getClusters([-180, -90, 180, 90], Math.round(map.getZoom()))
                .map((feature) => this.transformCluster(feature));
        }
        transformCluster({ geometry: { coordinates: [lng, lat], }, properties, }) {
            if (properties.cluster) {
                return new Cluster({
                    markers: this.superCluster
                        .getLeaves(properties.cluster_id, Infinity)
                        .map((leaf) => leaf.properties.marker),
                    position: { lat, lng },
                });
            }
            const marker = properties.marker;
            return new Cluster({
                markers: [marker],
                position: MarkerUtils.getPosition(marker),
            });
        }
    }

    /**
     * Copyright 2021 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *      http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    /**
     * A very fast JavaScript algorithm for geospatial point clustering using KD trees.
     *
     * @see https://www.npmjs.com/package/supercluster for more information on options.
     */
    class SuperClusterViewportAlgorithm extends AbstractViewportAlgorithm {
        constructor(_a) {
            var { maxZoom, radius = 60, viewportPadding = 60 } = _a, options = __rest(_a, ["maxZoom", "radius", "viewportPadding"]);
            super({ maxZoom, viewportPadding });
            this.superCluster = new Supercluster(Object.assign({ maxZoom: this.maxZoom, radius }, options));
            this.state = { zoom: -1, view: [0, 0, 0, 0] };
        }
        calculate(input) {
            const state = {
                zoom: Math.round(input.map.getZoom()),
                view: getPaddedViewport(input.map.getBounds(), input.mapCanvasProjection, this.viewportPadding),
            };
            let changed = !equal(this.state, state);
            if (!equal(input.markers, this.markers)) {
                changed = true;
                // TODO use proxy to avoid copy?
                this.markers = [...input.markers];
                const points = this.markers.map((marker) => {
                    const position = MarkerUtils.getPosition(marker);
                    const coordinates = [position.lng(), position.lat()];
                    return {
                        type: "Feature",
                        geometry: {
                            type: "Point",
                            coordinates,
                        },
                        properties: { marker },
                    };
                });
                this.superCluster.load(points);
            }
            if (changed) {
                this.clusters = this.cluster(input);
                this.state = state;
            }
            return { clusters: this.clusters, changed };
        }
        cluster({ map, mapCanvasProjection }) {
            /* recalculate new state because we can't use the cached version. */
            const state = {
                zoom: Math.round(map.getZoom()),
                view: getPaddedViewport(map.getBounds(), mapCanvasProjection, this.viewportPadding),
            };
            return this.superCluster
                .getClusters(state.view, state.zoom)
                .map((feature) => this.transformCluster(feature));
        }
        transformCluster({ geometry: { coordinates: [lng, lat], }, properties, }) {
            if (properties.cluster) {
                return new Cluster({
                    markers: this.superCluster
                        .getLeaves(properties.cluster_id, Infinity)
                        .map((leaf) => leaf.properties.marker),
                    position: { lat, lng },
                });
            }
            const marker = properties.marker;
            return new Cluster({
                markers: [marker],
                position: MarkerUtils.getPosition(marker),
            });
        }
    }

    /**
     * Copyright 2021 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *      http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    /**
     * Provides statistics on all clusters in the current render cycle for use in {@link Renderer.render}.
     */
    class ClusterStats {
        constructor(markers, clusters) {
            this.markers = { sum: markers.length };
            const clusterMarkerCounts = clusters.map((a) => a.count);
            const clusterMarkerSum = clusterMarkerCounts.reduce((a, b) => a + b, 0);
            this.clusters = {
                count: clusters.length,
                markers: {
                    mean: clusterMarkerSum / clusters.length,
                    sum: clusterMarkerSum,
                    min: Math.min(...clusterMarkerCounts),
                    max: Math.max(...clusterMarkerCounts),
                },
            };
        }
    }
    class DefaultRenderer {
        /**
         * The default render function for the library used by {@link MarkerClusterer}.
         *
         * Currently set to use the following:
         *
         * ```typescript
         * // change color if this cluster has more markers than the mean cluster
         * const color =
         *   count > Math.max(10, stats.clusters.markers.mean)
         *     ? "#ff0000"
         *     : "#0000ff";
         *
         * // create svg url with fill color
         * const svg = window.btoa(`
         * <svg fill="${color}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240">
         *   <circle cx="120" cy="120" opacity=".6" r="70" />
         *   <circle cx="120" cy="120" opacity=".3" r="90" />
         *   <circle cx="120" cy="120" opacity=".2" r="110" />
         *   <circle cx="120" cy="120" opacity=".1" r="130" />
         * </svg>`);
         *
         * // create marker using svg icon
         * return new google.maps.Marker({
         *   position,
         *   icon: {
         *     url: `data:image/svg+xml;base64,${svg}`,
         *     scaledSize: new google.maps.Size(45, 45),
         *   },
         *   label: {
         *     text: String(count),
         *     color: "rgba(255,255,255,0.9)",
         *     fontSize: "12px",
         *   },
         *   // adjust zIndex to be above other markers
         *   zIndex: 1000 + count,
         * });
         * ```
         */
        render({ count, position }, stats, map) {
            // change color if this cluster has more markers than the mean cluster
            const color = count > Math.max(10, stats.clusters.markers.mean) ? "#ff0000" : "#0000ff";
            // create svg literal with fill color
            const svg = `<svg fill="${color}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240" width="50" height="50">
<circle cx="120" cy="120" opacity=".6" r="70" />
<circle cx="120" cy="120" opacity=".3" r="90" />
<circle cx="120" cy="120" opacity=".2" r="110" />
<text x="50%" y="50%" style="fill:#fff" text-anchor="middle" font-size="50" dominant-baseline="middle" font-family="roboto,arial,sans-serif">${count}</text>
</svg>`;
            const title = `Cluster of ${count} markers`, 
            // adjust zIndex to be above other markers
            zIndex = Number(google.maps.Marker.MAX_ZINDEX) + count;
            if (MarkerUtils.isAdvancedMarkerAvailable(map)) {
                // create cluster SVG element
                const parser = new DOMParser();
                const svgEl = parser.parseFromString(svg, "image/svg+xml").documentElement;
                svgEl.setAttribute("transform", "translate(0 25)");
                const clusterOptions = {
                    map,
                    position,
                    zIndex,
                    title,
                    content: svgEl,
                };
                return new google.maps.marker.AdvancedMarkerElement(clusterOptions);
            }
            const clusterOptions = {
                position,
                zIndex,
                title,
                icon: {
                    url: `data:image/svg+xml;base64,${btoa(svg)}`,
                    anchor: new google.maps.Point(25, 25),
                },
            };
            return new google.maps.Marker(clusterOptions);
        }
    }

    /**
     * Copyright 2019 Google LLC. All Rights Reserved.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *      http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    /**
     * Extends an object's prototype by another's.
     *
     * @param type1 The Type to be extended.
     * @param type2 The Type to extend with.
     * @ignore
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function extend(type1, type2) {
        /* istanbul ignore next */
        // eslint-disable-next-line prefer-const
        for (let property in type2.prototype) {
            type1.prototype[property] = type2.prototype[property];
        }
    }
    /**
     * @ignore
     */
    class OverlayViewSafe {
        constructor() {
            // MarkerClusterer implements google.maps.OverlayView interface. We use the
            // extend function to extend MarkerClusterer with google.maps.OverlayView
            // because it might not always be available when the code is defined so we
            // look for it at the last possible moment. If it doesn't exist now then
            // there is no point going ahead :)
            extend(OverlayViewSafe, google.maps.OverlayView);
        }
    }

    /**
     * Copyright 2021 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *      http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    var MarkerClustererEvents;
    (function (MarkerClustererEvents) {
        MarkerClustererEvents["CLUSTERING_BEGIN"] = "clusteringbegin";
        MarkerClustererEvents["CLUSTERING_END"] = "clusteringend";
        MarkerClustererEvents["CLUSTER_CLICK"] = "click";
    })(MarkerClustererEvents || (MarkerClustererEvents = {}));
    const defaultOnClusterClickHandler = (_, cluster, map) => {
        map.fitBounds(cluster.bounds);
    };
    /**
     * MarkerClusterer creates and manages per-zoom-level clusters for large amounts
     * of markers. See {@link MarkerClustererOptions} for more details.
     *
     */
    class MarkerClusterer extends OverlayViewSafe {
        constructor({ map, markers = [], algorithmOptions = {}, algorithm = new SuperClusterAlgorithm(algorithmOptions), renderer = new DefaultRenderer(), onClusterClick = defaultOnClusterClickHandler, }) {
            super();
            this.markers = [...markers];
            this.clusters = [];
            this.algorithm = algorithm;
            this.renderer = renderer;
            this.onClusterClick = onClusterClick;
            if (map) {
                this.setMap(map);
            }
        }
        addMarker(marker, noDraw) {
            if (this.markers.includes(marker)) {
                return;
            }
            this.markers.push(marker);
            if (!noDraw) {
                this.render();
            }
        }
        addMarkers(markers, noDraw) {
            markers.forEach((marker) => {
                this.addMarker(marker, true);
            });
            if (!noDraw) {
                this.render();
            }
        }
        removeMarker(marker, noDraw) {
            const index = this.markers.indexOf(marker);
            if (index === -1) {
                // Marker is not in our list of markers, so do nothing:
                return false;
            }
            MarkerUtils.setMap(marker, null);
            this.markers.splice(index, 1); // Remove the marker from the list of managed markers
            if (!noDraw) {
                this.render();
            }
            return true;
        }
        removeMarkers(markers, noDraw) {
            let removed = false;
            markers.forEach((marker) => {
                removed = this.removeMarker(marker, true) || removed;
            });
            if (removed && !noDraw) {
                this.render();
            }
            return removed;
        }
        clearMarkers(noDraw) {
            this.markers.length = 0;
            if (!noDraw) {
                this.render();
            }
        }
        /**
         * Recalculates and draws all the marker clusters.
         */
        render() {
            const map = this.getMap();
            if (map instanceof google.maps.Map && map.getProjection()) {
                google.maps.event.trigger(this, MarkerClustererEvents.CLUSTERING_BEGIN, this);
                const { clusters, changed } = this.algorithm.calculate({
                    markers: this.markers,
                    map,
                    mapCanvasProjection: this.getProjection(),
                });
                // Allow algorithms to return flag on whether the clusters/markers have changed.
                if (changed || changed == undefined) {
                    // Accumulate the markers of the clusters composed of a single marker.
                    // Those clusters directly use the marker.
                    // Clusters with more than one markers use a group marker generated by a renderer.
                    const singleMarker = new Set();
                    for (const cluster of clusters) {
                        if (cluster.markers.length == 1) {
                            singleMarker.add(cluster.markers[0]);
                        }
                    }
                    const groupMarkers = [];
                    // Iterate the clusters that are currently rendered.
                    for (const cluster of this.clusters) {
                        if (cluster.marker == null) {
                            continue;
                        }
                        if (cluster.markers.length == 1) {
                            if (!singleMarker.has(cluster.marker)) {
                                // The marker:
                                // - was previously rendered because it is from a cluster with 1 marker,
                                // - should no more be rendered as it is not in singleMarker.
                                MarkerUtils.setMap(cluster.marker, null);
                            }
                        }
                        else {
                            // Delay the removal of old group markers to avoid flickering.
                            groupMarkers.push(cluster.marker);
                        }
                    }
                    this.clusters = clusters;
                    this.renderClusters();
                    // Delayed removal of the markers of the former groups.
                    requestAnimationFrame(() => groupMarkers.forEach((marker) => MarkerUtils.setMap(marker, null)));
                }
                google.maps.event.trigger(this, MarkerClustererEvents.CLUSTERING_END, this);
            }
        }
        onAdd() {
            this.idleListener = this.getMap().addListener("idle", this.render.bind(this));
            this.render();
        }
        onRemove() {
            google.maps.event.removeListener(this.idleListener);
            this.reset();
        }
        reset() {
            this.markers.forEach((marker) => MarkerUtils.setMap(marker, null));
            this.clusters.forEach((cluster) => cluster.delete());
            this.clusters = [];
        }
        renderClusters() {
            // Generate stats to pass to renderers.
            const stats = new ClusterStats(this.markers, this.clusters);
            const map = this.getMap();
            this.clusters.forEach((cluster) => {
                if (cluster.markers.length === 1) {
                    cluster.marker = cluster.markers[0];
                }
                else {
                    // Generate the marker to represent the group.
                    cluster.marker = this.renderer.render(cluster, stats, map);
                    // Make sure all individual markers are removed from the map.
                    cluster.markers.forEach((marker) => MarkerUtils.setMap(marker, null));
                    if (this.onClusterClick) {
                        cluster.marker.addListener("click", 
                        /* istanbul ignore next */
                        (event) => {
                            google.maps.event.trigger(this, MarkerClustererEvents.CLUSTER_CLICK, cluster);
                            this.onClusterClick(event, cluster, map);
                        });
                    }
                }
                MarkerUtils.setMap(cluster.marker, map);
            });
        }
    }

    var index_esm = /*#__PURE__*/Object.freeze({
        __proto__: null,
        AbstractAlgorithm: AbstractAlgorithm,
        AbstractViewportAlgorithm: AbstractViewportAlgorithm,
        Cluster: Cluster,
        ClusterStats: ClusterStats,
        DefaultRenderer: DefaultRenderer,
        GridAlgorithm: GridAlgorithm,
        MarkerClusterer: MarkerClusterer,
        get MarkerClustererEvents () { return MarkerClustererEvents; },
        MarkerUtils: MarkerUtils,
        NoopAlgorithm: NoopAlgorithm,
        SuperClusterAlgorithm: SuperClusterAlgorithm,
        SuperClusterViewportAlgorithm: SuperClusterViewportAlgorithm,
        defaultOnClusterClickHandler: defaultOnClusterClickHandler,
        distanceBetweenPoints: distanceBetweenPoints,
        extendBoundsToPaddedViewport: extendBoundsToPaddedViewport,
        extendPixelBounds: extendPixelBounds,
        filterMarkersToPaddedViewport: filterMarkersToPaddedViewport,
        getPaddedViewport: getPaddedViewport,
        noop: noop$1,
        pixelBoundsToLatLngBounds: pixelBoundsToLatLngBounds
    });

    function useGoogleMarkerClusterer(options) {
        var map = useGoogleMap();
        var _a = react.useState(null), markerClusterer = _a[0], setMarkerClusterer = _a[1];
        react.useEffect(function () {
            if (map && markerClusterer === null) {
                var markerCluster = new MarkerClusterer(__assign(__assign({}, options), { map: map }));
                setMarkerClusterer(markerCluster);
            }
        }, [map]);
        return markerClusterer;
    }
    /** Wrapper around [@googlemaps/markerclusterer](https://github.com/googlemaps/js-markerclusterer)
     *
     * Accepts {@link  MarkerClustererOptionsSubset} which is a subset of  {@link MarkerClustererOptions}
     */
    function GoogleMarkerClusterer(_a) {
        var children = _a.children, options = _a.options;
        var markerClusterer = useGoogleMarkerClusterer(options);
        return markerClusterer !== null ? children(markerClusterer) : null;
    }
    var GoogleMarkerClusterer$1 = react.memo(GoogleMarkerClusterer);

    var eventMap$c = {
        onCloseClick: 'closeclick',
        onContentChanged: 'content_changed',
        onDomReady: 'domready',
        onPositionChanged: 'position_changed',
        onZindexChanged: 'zindex_changed',
    };
    var updaterMap$c = {
        options: function (instance, options) {
            instance.setOptions(options);
        },
        position: function (instance, position) {
            instance.setPosition(position);
        },
        zIndex: function (instance, zIndex) {
            instance.setZIndex(zIndex);
        },
    };
    function InfoWindowFunctional(_a) {
        var children = _a.children, anchor = _a.anchor, options = _a.options, position = _a.position, zIndex = _a.zIndex, onCloseClick = _a.onCloseClick, onDomReady = _a.onDomReady, onContentChanged = _a.onContentChanged, onPositionChanged = _a.onPositionChanged, onZindexChanged = _a.onZindexChanged, onLoad = _a.onLoad, onUnmount = _a.onUnmount;
        var map = react.useContext(MapContext);
        var _b = react.useState(null), instance = _b[0], setInstance = _b[1];
        var _c = react.useState(null), closeclickListener = _c[0], setCloseClickListener = _c[1];
        var _d = react.useState(null), domreadyclickListener = _d[0], setDomReadyClickListener = _d[1];
        var _e = react.useState(null), contentchangedclickListener = _e[0], setContentChangedClickListener = _e[1];
        var _f = react.useState(null), positionchangedclickListener = _f[0], setPositionChangedClickListener = _f[1];
        var _g = react.useState(null), zindexchangedclickListener = _g[0], setZindexChangedClickListener = _g[1];
        var containerElementRef = react.useRef(null);
        // Order does matter
        react.useEffect(function () {
            if (instance !== null) {
                instance.close();
                if (anchor) {
                    instance.open(map, anchor);
                }
                else if (instance.getPosition()) {
                    instance.open(map);
                }
            }
        }, [map, instance, anchor]);
        react.useEffect(function () {
            if (options && instance !== null) {
                instance.setOptions(options);
            }
        }, [instance, options]);
        react.useEffect(function () {
            if (position && instance !== null) {
                instance.setPosition(position);
            }
        }, [position]);
        react.useEffect(function () {
            if (typeof zIndex === 'number' && instance !== null) {
                instance.setZIndex(zIndex);
            }
        }, [zIndex]);
        react.useEffect(function () {
            if (instance && onCloseClick) {
                if (closeclickListener !== null) {
                    google.maps.event.removeListener(closeclickListener);
                }
                setCloseClickListener(google.maps.event.addListener(instance, 'closeclick', onCloseClick));
            }
        }, [onCloseClick]);
        react.useEffect(function () {
            if (instance && onDomReady) {
                if (domreadyclickListener !== null) {
                    google.maps.event.removeListener(domreadyclickListener);
                }
                setDomReadyClickListener(google.maps.event.addListener(instance, 'domready', onDomReady));
            }
        }, [onDomReady]);
        react.useEffect(function () {
            if (instance && onContentChanged) {
                if (contentchangedclickListener !== null) {
                    google.maps.event.removeListener(contentchangedclickListener);
                }
                setContentChangedClickListener(google.maps.event.addListener(instance, 'content_changed', onContentChanged));
            }
        }, [onContentChanged]);
        react.useEffect(function () {
            if (instance && onPositionChanged) {
                if (positionchangedclickListener !== null) {
                    google.maps.event.removeListener(positionchangedclickListener);
                }
                setPositionChangedClickListener(google.maps.event.addListener(instance, 'position_changed', onPositionChanged));
            }
        }, [onPositionChanged]);
        react.useEffect(function () {
            if (instance && onZindexChanged) {
                if (zindexchangedclickListener !== null) {
                    google.maps.event.removeListener(zindexchangedclickListener);
                }
                setZindexChangedClickListener(google.maps.event.addListener(instance, 'zindex_changed', onZindexChanged));
            }
        }, [onZindexChanged]);
        react.useEffect(function () {
            var infoWindow = new google.maps.InfoWindow(__assign({}, (options || {})));
            setInstance(infoWindow);
            containerElementRef.current = document.createElement('div');
            if (onCloseClick) {
                setCloseClickListener(google.maps.event.addListener(infoWindow, 'closeclick', onCloseClick));
            }
            if (onDomReady) {
                setDomReadyClickListener(google.maps.event.addListener(infoWindow, 'domready', onDomReady));
            }
            if (onContentChanged) {
                setContentChangedClickListener(google.maps.event.addListener(infoWindow, 'content_changed', onContentChanged));
            }
            if (onPositionChanged) {
                setPositionChangedClickListener(google.maps.event.addListener(infoWindow, 'position_changed', onPositionChanged));
            }
            if (onZindexChanged) {
                setZindexChangedClickListener(google.maps.event.addListener(infoWindow, 'zindex_changed', onZindexChanged));
            }
            infoWindow.setContent(containerElementRef.current);
            if (position) {
                infoWindow.setPosition(position);
            }
            if (zIndex) {
                infoWindow.setZIndex(zIndex);
            }
            if (anchor) {
                infoWindow.open(map, anchor);
            }
            else if (infoWindow.getPosition()) {
                infoWindow.open(map);
            }
            else {
                invariant$1(false, "You must provide either an anchor (typically render it inside a <Marker>) or a position props for <InfoWindow>.");
            }
            if (onLoad) {
                onLoad(infoWindow);
            }
            return function () {
                if (closeclickListener) {
                    google.maps.event.removeListener(closeclickListener);
                }
                if (contentchangedclickListener) {
                    google.maps.event.removeListener(contentchangedclickListener);
                }
                if (domreadyclickListener) {
                    google.maps.event.removeListener(domreadyclickListener);
                }
                if (positionchangedclickListener) {
                    google.maps.event.removeListener(positionchangedclickListener);
                }
                if (zindexchangedclickListener) {
                    google.maps.event.removeListener(zindexchangedclickListener);
                }
                if (onUnmount) {
                    onUnmount(infoWindow);
                }
                infoWindow.close();
            };
        }, []);
        return containerElementRef.current ? (ReactDOM.createPortal(react.Children.only(children), containerElementRef.current)) : (null);
    }
    var InfoWindowF = react.memo(InfoWindowFunctional);
    var InfoWindow = /** @class */ (function (_super) {
        __extends(InfoWindow, _super);
        function InfoWindow() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.registeredEvents = [];
            _this.containerElement = null;
            _this.state = {
                infoWindow: null,
            };
            _this.open = function (infoWindow, anchor) {
                if (anchor) {
                    infoWindow.open(_this.context, anchor);
                }
                else if (infoWindow.getPosition()) {
                    infoWindow.open(_this.context);
                }
                else {
                    invariant$1(false, "You must provide either an anchor (typically render it inside a <Marker>) or a position props for <InfoWindow>.");
                }
            };
            _this.setInfoWindowCallback = function () {
                if (_this.state.infoWindow !== null && _this.containerElement !== null) {
                    _this.state.infoWindow.setContent(_this.containerElement);
                    _this.open(_this.state.infoWindow, _this.props.anchor);
                    if (_this.props.onLoad) {
                        _this.props.onLoad(_this.state.infoWindow);
                    }
                }
            };
            return _this;
        }
        InfoWindow.prototype.componentDidMount = function () {
            var infoWindow = new google.maps.InfoWindow(__assign({}, (this.props.options || {})));
            this.containerElement = document.createElement('div');
            this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
                updaterMap: updaterMap$c,
                eventMap: eventMap$c,
                prevProps: {},
                nextProps: this.props,
                instance: infoWindow,
            });
            this.setState(function () {
                return {
                    infoWindow: infoWindow,
                };
            }, this.setInfoWindowCallback);
        };
        InfoWindow.prototype.componentDidUpdate = function (prevProps) {
            if (this.state.infoWindow !== null) {
                unregisterEvents(this.registeredEvents);
                this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
                    updaterMap: updaterMap$c,
                    eventMap: eventMap$c,
                    prevProps: prevProps,
                    nextProps: this.props,
                    instance: this.state.infoWindow,
                });
            }
        };
        InfoWindow.prototype.componentWillUnmount = function () {
            if (this.state.infoWindow !== null) {
                unregisterEvents(this.registeredEvents);
                if (this.props.onUnmount) {
                    this.props.onUnmount(this.state.infoWindow);
                }
                this.state.infoWindow.close();
            }
        };
        InfoWindow.prototype.render = function () {
            return this.containerElement ? (ReactDOM.createPortal(react.Children.only(this.props.children), this.containerElement)) : (null);
        };
        InfoWindow.contextType = MapContext;
        return InfoWindow;
    }(react.PureComponent));

    var eventMap$b = {
        onClick: 'click',
        onDblClick: 'dblclick',
        onDrag: 'drag',
        onDragEnd: 'dragend',
        onDragStart: 'dragstart',
        onMouseDown: 'mousedown',
        onMouseMove: 'mousemove',
        onMouseOut: 'mouseout',
        onMouseOver: 'mouseover',
        onMouseUp: 'mouseup',
        onRightClick: 'rightclick',
    };
    var updaterMap$b = {
        draggable: function (instance, draggable) {
            instance.setDraggable(draggable);
        },
        editable: function (instance, editable) {
            instance.setEditable(editable);
        },
        map: function (instance, map) {
            instance.setMap(map);
        },
        options: function (instance, options) {
            instance.setOptions(options);
        },
        path: function (instance, path) {
            instance.setPath(path);
        },
        visible: function (instance, visible) {
            instance.setVisible(visible);
        },
    };
    var defaultOptions$1 = {};
    function PolylineFunctional(_a) {
        var options = _a.options, draggable = _a.draggable, editable = _a.editable, visible = _a.visible, path = _a.path, onDblClick = _a.onDblClick, onDragEnd = _a.onDragEnd, onDragStart = _a.onDragStart, onMouseDown = _a.onMouseDown, onMouseMove = _a.onMouseMove, onMouseOut = _a.onMouseOut, onMouseOver = _a.onMouseOver, onMouseUp = _a.onMouseUp, onRightClick = _a.onRightClick, onClick = _a.onClick, onDrag = _a.onDrag, onLoad = _a.onLoad, onUnmount = _a.onUnmount;
        var map = react.useContext(MapContext);
        var _b = react.useState(null), instance = _b[0], setInstance = _b[1];
        var _c = react.useState(null), dblclickListener = _c[0], setDblclickListener = _c[1];
        var _d = react.useState(null), dragendListener = _d[0], setDragendListener = _d[1];
        var _e = react.useState(null), dragstartListener = _e[0], setDragstartListener = _e[1];
        var _f = react.useState(null), mousedownListener = _f[0], setMousedownListener = _f[1];
        var _g = react.useState(null), mousemoveListener = _g[0], setMousemoveListener = _g[1];
        var _h = react.useState(null), mouseoutListener = _h[0], setMouseoutListener = _h[1];
        var _j = react.useState(null), mouseoverListener = _j[0], setMouseoverListener = _j[1];
        var _k = react.useState(null), mouseupListener = _k[0], setMouseupListener = _k[1];
        var _l = react.useState(null), rightclickListener = _l[0], setRightclickListener = _l[1];
        var _m = react.useState(null), clickListener = _m[0], setClickListener = _m[1];
        var _o = react.useState(null), dragListener = _o[0], setDragListener = _o[1];
        // Order does matter
        react.useEffect(function () {
            if (instance !== null) {
                instance.setMap(map);
            }
        }, [map]);
        react.useEffect(function () {
            if (typeof options !== 'undefined' && instance !== null) {
                instance.setOptions(options);
            }
        }, [instance, options]);
        react.useEffect(function () {
            if (typeof draggable !== 'undefined' && instance !== null) {
                instance.setDraggable(draggable);
            }
        }, [instance, draggable]);
        react.useEffect(function () {
            if (typeof editable !== 'undefined' && instance !== null) {
                instance.setEditable(editable);
            }
        }, [instance, editable]);
        react.useEffect(function () {
            if (typeof visible !== 'undefined' && instance !== null) {
                instance.setVisible(visible);
            }
        }, [instance, visible]);
        react.useEffect(function () {
            if (typeof path !== 'undefined' && instance !== null) {
                instance.setPath(path);
            }
        }, [instance, path]);
        react.useEffect(function () {
            if (instance && onDblClick) {
                if (dblclickListener !== null) {
                    google.maps.event.removeListener(dblclickListener);
                }
                setDblclickListener(google.maps.event.addListener(instance, 'dblclick', onDblClick));
            }
        }, [onDblClick]);
        react.useEffect(function () {
            if (instance && onDragEnd) {
                if (dragendListener !== null) {
                    google.maps.event.removeListener(dragendListener);
                }
                setDragendListener(google.maps.event.addListener(instance, 'dragend', onDragEnd));
            }
        }, [onDragEnd]);
        react.useEffect(function () {
            if (instance && onDragStart) {
                if (dragstartListener !== null) {
                    google.maps.event.removeListener(dragstartListener);
                }
                setDragstartListener(google.maps.event.addListener(instance, 'dragstart', onDragStart));
            }
        }, [onDragStart]);
        react.useEffect(function () {
            if (instance && onMouseDown) {
                if (mousedownListener !== null) {
                    google.maps.event.removeListener(mousedownListener);
                }
                setMousedownListener(google.maps.event.addListener(instance, 'mousedown', onMouseDown));
            }
        }, [onMouseDown]);
        react.useEffect(function () {
            if (instance && onMouseMove) {
                if (mousemoveListener !== null) {
                    google.maps.event.removeListener(mousemoveListener);
                }
                setMousemoveListener(google.maps.event.addListener(instance, 'mousemove', onMouseMove));
            }
        }, [onMouseMove]);
        react.useEffect(function () {
            if (instance && onMouseOut) {
                if (mouseoutListener !== null) {
                    google.maps.event.removeListener(mouseoutListener);
                }
                setMouseoutListener(google.maps.event.addListener(instance, 'mouseout', onMouseOut));
            }
        }, [onMouseOut]);
        react.useEffect(function () {
            if (instance && onMouseOver) {
                if (mouseoverListener !== null) {
                    google.maps.event.removeListener(mouseoverListener);
                }
                setMouseoverListener(google.maps.event.addListener(instance, 'mouseover', onMouseOver));
            }
        }, [onMouseOver]);
        react.useEffect(function () {
            if (instance && onMouseUp) {
                if (mouseupListener !== null) {
                    google.maps.event.removeListener(mouseupListener);
                }
                setMouseupListener(google.maps.event.addListener(instance, 'mouseup', onMouseUp));
            }
        }, [onMouseUp]);
        react.useEffect(function () {
            if (instance && onRightClick) {
                if (rightclickListener !== null) {
                    google.maps.event.removeListener(rightclickListener);
                }
                setRightclickListener(google.maps.event.addListener(instance, 'rightclick', onRightClick));
            }
        }, [onRightClick]);
        react.useEffect(function () {
            if (instance && onClick) {
                if (clickListener !== null) {
                    google.maps.event.removeListener(clickListener);
                }
                setClickListener(google.maps.event.addListener(instance, 'click', onClick));
            }
        }, [onClick]);
        react.useEffect(function () {
            if (instance && onDrag) {
                if (dragListener !== null) {
                    google.maps.event.removeListener(dragListener);
                }
                setDragListener(google.maps.event.addListener(instance, 'drag', onDrag));
            }
        }, [onDrag]);
        react.useEffect(function () {
            var polyline = new google.maps.Polyline(__assign(__assign({}, (options || defaultOptions$1)), { map: map }));
            if (path) {
                polyline.setPath(path);
            }
            if (typeof visible !== 'undefined') {
                polyline.setVisible(visible);
            }
            if (typeof editable !== 'undefined') {
                polyline.setEditable(editable);
            }
            if (typeof draggable !== 'undefined') {
                polyline.setDraggable(draggable);
            }
            if (onDblClick) {
                setDblclickListener(google.maps.event.addListener(polyline, 'dblclick', onDblClick));
            }
            if (onDragEnd) {
                setDragendListener(google.maps.event.addListener(polyline, 'dragend', onDragEnd));
            }
            if (onDragStart) {
                setDragstartListener(google.maps.event.addListener(polyline, 'dragstart', onDragStart));
            }
            if (onMouseDown) {
                setMousedownListener(google.maps.event.addListener(polyline, 'mousedown', onMouseDown));
            }
            if (onMouseMove) {
                setMousemoveListener(google.maps.event.addListener(polyline, 'mousemove', onMouseMove));
            }
            if (onMouseOut) {
                setMouseoutListener(google.maps.event.addListener(polyline, 'mouseout', onMouseOut));
            }
            if (onMouseOver) {
                setMouseoverListener(google.maps.event.addListener(polyline, 'mouseover', onMouseOver));
            }
            if (onMouseUp) {
                setMouseupListener(google.maps.event.addListener(polyline, 'mouseup', onMouseUp));
            }
            if (onRightClick) {
                setRightclickListener(google.maps.event.addListener(polyline, 'rightclick', onRightClick));
            }
            if (onClick) {
                setClickListener(google.maps.event.addListener(polyline, 'click', onClick));
            }
            if (onDrag) {
                setDragListener(google.maps.event.addListener(polyline, 'drag', onDrag));
            }
            setInstance(polyline);
            if (onLoad) {
                onLoad(polyline);
            }
            return function () {
                if (dblclickListener !== null) {
                    google.maps.event.removeListener(dblclickListener);
                }
                if (dragendListener !== null) {
                    google.maps.event.removeListener(dragendListener);
                }
                if (dragstartListener !== null) {
                    google.maps.event.removeListener(dragstartListener);
                }
                if (mousedownListener !== null) {
                    google.maps.event.removeListener(mousedownListener);
                }
                if (mousemoveListener !== null) {
                    google.maps.event.removeListener(mousemoveListener);
                }
                if (mouseoutListener !== null) {
                    google.maps.event.removeListener(mouseoutListener);
                }
                if (mouseoverListener !== null) {
                    google.maps.event.removeListener(mouseoverListener);
                }
                if (mouseupListener !== null) {
                    google.maps.event.removeListener(mouseupListener);
                }
                if (rightclickListener !== null) {
                    google.maps.event.removeListener(rightclickListener);
                }
                if (clickListener !== null) {
                    google.maps.event.removeListener(clickListener);
                }
                if (onUnmount) {
                    onUnmount(polyline);
                }
                polyline.setMap(null);
            };
        }, []);
        return null;
    }
    var PolylineF = react.memo(PolylineFunctional);
    var Polyline = /** @class */ (function (_super) {
        __extends(Polyline, _super);
        function Polyline() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.registeredEvents = [];
            _this.state = {
                polyline: null,
            };
            _this.setPolylineCallback = function () {
                if (_this.state.polyline !== null && _this.props.onLoad) {
                    _this.props.onLoad(_this.state.polyline);
                }
            };
            return _this;
        }
        Polyline.prototype.componentDidMount = function () {
            var polyline = new google.maps.Polyline(__assign(__assign({}, (this.props.options || {})), { map: this.context }));
            this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
                updaterMap: updaterMap$b,
                eventMap: eventMap$b,
                prevProps: {},
                nextProps: this.props,
                instance: polyline,
            });
            this.setState(function setPolyline() {
                return {
                    polyline: polyline,
                };
            }, this.setPolylineCallback);
        };
        Polyline.prototype.componentDidUpdate = function (prevProps) {
            if (this.state.polyline !== null) {
                unregisterEvents(this.registeredEvents);
                this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
                    updaterMap: updaterMap$b,
                    eventMap: eventMap$b,
                    prevProps: prevProps,
                    nextProps: this.props,
                    instance: this.state.polyline,
                });
            }
        };
        Polyline.prototype.componentWillUnmount = function () {
            if (this.state.polyline !== null) {
                if (this.props.onUnmount) {
                    this.props.onUnmount(this.state.polyline);
                }
                unregisterEvents(this.registeredEvents);
                this.state.polyline.setMap(null);
            }
        };
        Polyline.prototype.render = function () {
            return null;
        };
        Polyline.contextType = MapContext;
        return Polyline;
    }(react.PureComponent));

    var eventMap$a = {
        onClick: 'click',
        onDblClick: 'dblclick',
        onDrag: 'drag',
        onDragEnd: 'dragend',
        onDragStart: 'dragstart',
        onMouseDown: 'mousedown',
        onMouseMove: 'mousemove',
        onMouseOut: 'mouseout',
        onMouseOver: 'mouseover',
        onMouseUp: 'mouseup',
        onRightClick: 'rightclick',
    };
    var updaterMap$a = {
        draggable: function (instance, draggable) {
            instance.setDraggable(draggable);
        },
        editable: function (instance, editable) {
            instance.setEditable(editable);
        },
        map: function (instance, map) {
            instance.setMap(map);
        },
        options: function (instance, options) {
            instance.setOptions(options);
        },
        path: function (instance, path) {
            instance.setPath(path);
        },
        paths: function (instance, paths) {
            instance.setPaths(paths);
        },
        visible: function (instance, visible) {
            instance.setVisible(visible);
        },
    };
    function PolygonFunctional(_a) {
        var options = _a.options, draggable = _a.draggable, editable = _a.editable, visible = _a.visible, path = _a.path, paths = _a.paths, onDblClick = _a.onDblClick, onDragEnd = _a.onDragEnd, onDragStart = _a.onDragStart, onMouseDown = _a.onMouseDown, onMouseMove = _a.onMouseMove, onMouseOut = _a.onMouseOut, onMouseOver = _a.onMouseOver, onMouseUp = _a.onMouseUp, onRightClick = _a.onRightClick, onClick = _a.onClick, onDrag = _a.onDrag, onLoad = _a.onLoad, onUnmount = _a.onUnmount, onEdit = _a.onEdit;
        var map = react.useContext(MapContext);
        var _b = react.useState(null), instance = _b[0], setInstance = _b[1];
        var _c = react.useState(null), dblclickListener = _c[0], setDblclickListener = _c[1];
        var _d = react.useState(null), dragendListener = _d[0], setDragendListener = _d[1];
        var _e = react.useState(null), dragstartListener = _e[0], setDragstartListener = _e[1];
        var _f = react.useState(null), mousedownListener = _f[0], setMousedownListener = _f[1];
        var _g = react.useState(null), mousemoveListener = _g[0], setMousemoveListener = _g[1];
        var _h = react.useState(null), mouseoutListener = _h[0], setMouseoutListener = _h[1];
        var _j = react.useState(null), mouseoverListener = _j[0], setMouseoverListener = _j[1];
        var _k = react.useState(null), mouseupListener = _k[0], setMouseupListener = _k[1];
        var _l = react.useState(null), rightclickListener = _l[0], setRightclickListener = _l[1];
        var _m = react.useState(null), clickListener = _m[0], setClickListener = _m[1];
        var _o = react.useState(null), dragListener = _o[0], setDragListener = _o[1];
        // Order does matter
        react.useEffect(function () {
            if (instance !== null) {
                instance.setMap(map);
            }
        }, [map]);
        react.useEffect(function () {
            if (typeof options !== 'undefined' && instance !== null) {
                instance.setOptions(options);
            }
        }, [instance, options]);
        react.useEffect(function () {
            if (typeof draggable !== 'undefined' && instance !== null) {
                instance.setDraggable(draggable);
            }
        }, [instance, draggable]);
        react.useEffect(function () {
            if (typeof editable !== 'undefined' && instance !== null) {
                instance.setEditable(editable);
            }
        }, [instance, editable]);
        react.useEffect(function () {
            if (typeof visible !== 'undefined' && instance !== null) {
                instance.setVisible(visible);
            }
        }, [instance, visible]);
        react.useEffect(function () {
            if (typeof path !== 'undefined' && instance !== null) {
                instance.setPath(path);
            }
        }, [instance, path]);
        react.useEffect(function () {
            if (typeof paths !== 'undefined' && instance !== null) {
                instance.setPaths(paths);
            }
        }, [instance, paths]);
        react.useEffect(function () {
            if (instance && onDblClick) {
                if (dblclickListener !== null) {
                    google.maps.event.removeListener(dblclickListener);
                }
                setDblclickListener(google.maps.event.addListener(instance, 'dblclick', onDblClick));
            }
        }, [onDblClick]);
        react.useEffect(function () {
            if (instance) {
                google.maps.event.addListener(instance.getPath(), 'insert_at', function () {
                    onEdit === null || onEdit === void 0 ? void 0 : onEdit(instance);
                });
                google.maps.event.addListener(instance.getPath(), 'set_at', function () {
                    onEdit === null || onEdit === void 0 ? void 0 : onEdit(instance);
                });
                google.maps.event.addListener(instance.getPath(), 'remove_at', function () {
                    onEdit === null || onEdit === void 0 ? void 0 : onEdit(instance);
                });
            }
        }, [instance, onEdit]);
        react.useEffect(function () {
            if (instance && onDragEnd) {
                if (dragendListener !== null) {
                    google.maps.event.removeListener(dragendListener);
                }
                setDragendListener(google.maps.event.addListener(instance, 'dragend', onDragEnd));
            }
        }, [onDragEnd]);
        react.useEffect(function () {
            if (instance && onDragStart) {
                if (dragstartListener !== null) {
                    google.maps.event.removeListener(dragstartListener);
                }
                setDragstartListener(google.maps.event.addListener(instance, 'dragstart', onDragStart));
            }
        }, [onDragStart]);
        react.useEffect(function () {
            if (instance && onMouseDown) {
                if (mousedownListener !== null) {
                    google.maps.event.removeListener(mousedownListener);
                }
                setMousedownListener(google.maps.event.addListener(instance, 'mousedown', onMouseDown));
            }
        }, [onMouseDown]);
        react.useEffect(function () {
            if (instance && onMouseMove) {
                if (mousemoveListener !== null) {
                    google.maps.event.removeListener(mousemoveListener);
                }
                setMousemoveListener(google.maps.event.addListener(instance, 'mousemove', onMouseMove));
            }
        }, [onMouseMove]);
        react.useEffect(function () {
            if (instance && onMouseOut) {
                if (mouseoutListener !== null) {
                    google.maps.event.removeListener(mouseoutListener);
                }
                setMouseoutListener(google.maps.event.addListener(instance, 'mouseout', onMouseOut));
            }
        }, [onMouseOut]);
        react.useEffect(function () {
            if (instance && onMouseOver) {
                if (mouseoverListener !== null) {
                    google.maps.event.removeListener(mouseoverListener);
                }
                setMouseoverListener(google.maps.event.addListener(instance, 'mouseover', onMouseOver));
            }
        }, [onMouseOver]);
        react.useEffect(function () {
            if (instance && onMouseUp) {
                if (mouseupListener !== null) {
                    google.maps.event.removeListener(mouseupListener);
                }
                setMouseupListener(google.maps.event.addListener(instance, 'mouseup', onMouseUp));
            }
        }, [onMouseUp]);
        react.useEffect(function () {
            if (instance && onRightClick) {
                if (rightclickListener !== null) {
                    google.maps.event.removeListener(rightclickListener);
                }
                setRightclickListener(google.maps.event.addListener(instance, 'rightclick', onRightClick));
            }
        }, [onRightClick]);
        react.useEffect(function () {
            if (instance && onClick) {
                if (clickListener !== null) {
                    google.maps.event.removeListener(clickListener);
                }
                setClickListener(google.maps.event.addListener(instance, 'click', onClick));
            }
        }, [onClick]);
        react.useEffect(function () {
            if (instance && onDrag) {
                if (dragListener !== null) {
                    google.maps.event.removeListener(dragListener);
                }
                setDragListener(google.maps.event.addListener(instance, 'drag', onDrag));
            }
        }, [onDrag]);
        react.useEffect(function () {
            var polygon = new google.maps.Polygon(__assign(__assign({}, (options || {})), { map: map }));
            if (path) {
                polygon.setPath(path);
            }
            if (paths) {
                polygon.setPaths(paths);
            }
            if (typeof visible !== 'undefined') {
                polygon.setVisible(visible);
            }
            if (typeof editable !== 'undefined') {
                polygon.setEditable(editable);
            }
            if (typeof draggable !== 'undefined') {
                polygon.setDraggable(draggable);
            }
            if (onDblClick) {
                setDblclickListener(google.maps.event.addListener(polygon, 'dblclick', onDblClick));
            }
            if (onDragEnd) {
                setDragendListener(google.maps.event.addListener(polygon, 'dragend', onDragEnd));
            }
            if (onDragStart) {
                setDragstartListener(google.maps.event.addListener(polygon, 'dragstart', onDragStart));
            }
            if (onMouseDown) {
                setMousedownListener(google.maps.event.addListener(polygon, 'mousedown', onMouseDown));
            }
            if (onMouseMove) {
                setMousemoveListener(google.maps.event.addListener(polygon, 'mousemove', onMouseMove));
            }
            if (onMouseOut) {
                setMouseoutListener(google.maps.event.addListener(polygon, 'mouseout', onMouseOut));
            }
            if (onMouseOver) {
                setMouseoverListener(google.maps.event.addListener(polygon, 'mouseover', onMouseOver));
            }
            if (onMouseUp) {
                setMouseupListener(google.maps.event.addListener(polygon, 'mouseup', onMouseUp));
            }
            if (onRightClick) {
                setRightclickListener(google.maps.event.addListener(polygon, 'rightclick', onRightClick));
            }
            if (onClick) {
                setClickListener(google.maps.event.addListener(polygon, 'click', onClick));
            }
            if (onDrag) {
                setDragListener(google.maps.event.addListener(polygon, 'drag', onDrag));
            }
            setInstance(polygon);
            if (onLoad) {
                onLoad(polygon);
            }
            return function () {
                if (dblclickListener !== null) {
                    google.maps.event.removeListener(dblclickListener);
                }
                if (dragendListener !== null) {
                    google.maps.event.removeListener(dragendListener);
                }
                if (dragstartListener !== null) {
                    google.maps.event.removeListener(dragstartListener);
                }
                if (mousedownListener !== null) {
                    google.maps.event.removeListener(mousedownListener);
                }
                if (mousemoveListener !== null) {
                    google.maps.event.removeListener(mousemoveListener);
                }
                if (mouseoutListener !== null) {
                    google.maps.event.removeListener(mouseoutListener);
                }
                if (mouseoverListener !== null) {
                    google.maps.event.removeListener(mouseoverListener);
                }
                if (mouseupListener !== null) {
                    google.maps.event.removeListener(mouseupListener);
                }
                if (rightclickListener !== null) {
                    google.maps.event.removeListener(rightclickListener);
                }
                if (clickListener !== null) {
                    google.maps.event.removeListener(clickListener);
                }
                if (onUnmount) {
                    onUnmount(polygon);
                }
                polygon.setMap(null);
            };
        }, []);
        return null;
    }
    var PolygonF = react.memo(PolygonFunctional);
    var Polygon = /** @class */ (function (_super) {
        __extends(Polygon, _super);
        function Polygon() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.registeredEvents = [];
            return _this;
        }
        Polygon.prototype.componentDidMount = function () {
            var polygonOptions = this.props.options || {};
            this.polygon = new google.maps.Polygon(polygonOptions);
            this.polygon.setMap(this.context);
            this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
                updaterMap: updaterMap$a,
                eventMap: eventMap$a,
                prevProps: {},
                nextProps: this.props,
                instance: this.polygon,
            });
            if (this.props.onLoad) {
                this.props.onLoad(this.polygon);
            }
        };
        Polygon.prototype.componentDidUpdate = function (prevProps) {
            if (this.polygon) {
                unregisterEvents(this.registeredEvents);
                this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
                    updaterMap: updaterMap$a,
                    eventMap: eventMap$a,
                    prevProps: prevProps,
                    nextProps: this.props,
                    instance: this.polygon,
                });
            }
        };
        Polygon.prototype.componentWillUnmount = function () {
            if (this.polygon) {
                if (this.props.onUnmount) {
                    this.props.onUnmount(this.polygon);
                }
                unregisterEvents(this.registeredEvents);
                this.polygon && this.polygon.setMap(null);
            }
        };
        Polygon.prototype.render = function () {
            return null;
        };
        Polygon.contextType = MapContext;
        return Polygon;
    }(react.PureComponent));

    var eventMap$9 = {
        onBoundsChanged: 'bounds_changed',
        onClick: 'click',
        onDblClick: 'dblclick',
        onDrag: 'drag',
        onDragEnd: 'dragend',
        onDragStart: 'dragstart',
        onMouseDown: 'mousedown',
        onMouseMove: 'mousemove',
        onMouseOut: 'mouseout',
        onMouseOver: 'mouseover',
        onMouseUp: 'mouseup',
        onRightClick: 'rightclick',
    };
    var updaterMap$9 = {
        bounds: function (instance, bounds) {
            instance.setBounds(bounds);
        },
        draggable: function (instance, draggable) {
            instance.setDraggable(draggable);
        },
        editable: function (instance, editable) {
            instance.setEditable(editable);
        },
        map: function (instance, map) {
            instance.setMap(map);
        },
        options: function (instance, options) {
            instance.setOptions(options);
        },
        visible: function (instance, visible) {
            instance.setVisible(visible);
        },
    };
    function RectangleFunctional(_a) {
        var options = _a.options, bounds = _a.bounds, draggable = _a.draggable, editable = _a.editable, visible = _a.visible, onDblClick = _a.onDblClick, onDragEnd = _a.onDragEnd, onDragStart = _a.onDragStart, onMouseDown = _a.onMouseDown, onMouseMove = _a.onMouseMove, onMouseOut = _a.onMouseOut, onMouseOver = _a.onMouseOver, onMouseUp = _a.onMouseUp, onRightClick = _a.onRightClick, onClick = _a.onClick, onDrag = _a.onDrag, onBoundsChanged = _a.onBoundsChanged, onLoad = _a.onLoad, onUnmount = _a.onUnmount;
        var map = react.useContext(MapContext);
        var _b = react.useState(null), instance = _b[0], setInstance = _b[1];
        var _c = react.useState(null), dblclickListener = _c[0], setDblclickListener = _c[1];
        var _d = react.useState(null), dragendListener = _d[0], setDragendListener = _d[1];
        var _e = react.useState(null), dragstartListener = _e[0], setDragstartListener = _e[1];
        var _f = react.useState(null), mousedownListener = _f[0], setMousedownListener = _f[1];
        var _g = react.useState(null), mousemoveListener = _g[0], setMousemoveListener = _g[1];
        var _h = react.useState(null), mouseoutListener = _h[0], setMouseoutListener = _h[1];
        var _j = react.useState(null), mouseoverListener = _j[0], setMouseoverListener = _j[1];
        var _k = react.useState(null), mouseupListener = _k[0], setMouseupListener = _k[1];
        var _l = react.useState(null), rightClickListener = _l[0], setRightClickListener = _l[1];
        var _m = react.useState(null), clickListener = _m[0], setClickListener = _m[1];
        var _o = react.useState(null), dragListener = _o[0], setDragListener = _o[1];
        var _p = react.useState(null), boundsChangedListener = _p[0], setBoundsChangedListener = _p[1];
        // Order does matter
        react.useEffect(function () {
            if (instance !== null) {
                instance.setMap(map);
            }
        }, [map]);
        react.useEffect(function () {
            if (typeof options !== 'undefined' && instance !== null) {
                instance.setOptions(options);
            }
        }, [instance, options]);
        react.useEffect(function () {
            if (typeof draggable !== 'undefined' && instance !== null) {
                instance.setDraggable(draggable);
            }
        }, [instance, draggable]);
        react.useEffect(function () {
            if (typeof editable !== 'undefined' && instance !== null) {
                instance.setEditable(editable);
            }
        }, [instance, editable]);
        react.useEffect(function () {
            if (typeof visible !== 'undefined' && instance !== null) {
                instance.setVisible(visible);
            }
        }, [instance, visible]);
        react.useEffect(function () {
            if (typeof bounds !== 'undefined' && instance !== null) {
                instance.setBounds(bounds);
            }
        }, [instance, bounds]);
        react.useEffect(function () {
            if (instance && onDblClick) {
                if (dblclickListener !== null) {
                    google.maps.event.removeListener(dblclickListener);
                }
                setDblclickListener(google.maps.event.addListener(instance, 'dblclick', onDblClick));
            }
        }, [onDblClick]);
        react.useEffect(function () {
            if (instance && onDragEnd) {
                if (dragendListener !== null) {
                    google.maps.event.removeListener(dragendListener);
                }
                setDragendListener(google.maps.event.addListener(instance, 'dragend', onDragEnd));
            }
        }, [onDragEnd]);
        react.useEffect(function () {
            if (instance && onDragStart) {
                if (dragstartListener !== null) {
                    google.maps.event.removeListener(dragstartListener);
                }
                setDragstartListener(google.maps.event.addListener(instance, 'dragstart', onDragStart));
            }
        }, [onDragStart]);
        react.useEffect(function () {
            if (instance && onMouseDown) {
                if (mousedownListener !== null) {
                    google.maps.event.removeListener(mousedownListener);
                }
                setMousedownListener(google.maps.event.addListener(instance, 'mousedown', onMouseDown));
            }
        }, [onMouseDown]);
        react.useEffect(function () {
            if (instance && onMouseMove) {
                if (mousemoveListener !== null) {
                    google.maps.event.removeListener(mousemoveListener);
                }
                setMousemoveListener(google.maps.event.addListener(instance, 'mousemove', onMouseMove));
            }
        }, [onMouseMove]);
        react.useEffect(function () {
            if (instance && onMouseOut) {
                if (mouseoutListener !== null) {
                    google.maps.event.removeListener(mouseoutListener);
                }
                setMouseoutListener(google.maps.event.addListener(instance, 'mouseout', onMouseOut));
            }
        }, [onMouseOut]);
        react.useEffect(function () {
            if (instance && onMouseOver) {
                if (mouseoverListener !== null) {
                    google.maps.event.removeListener(mouseoverListener);
                }
                setMouseoverListener(google.maps.event.addListener(instance, 'mouseover', onMouseOver));
            }
        }, [onMouseOver]);
        react.useEffect(function () {
            if (instance && onMouseUp) {
                if (mouseupListener !== null) {
                    google.maps.event.removeListener(mouseupListener);
                }
                setMouseupListener(google.maps.event.addListener(instance, 'mouseup', onMouseUp));
            }
        }, [onMouseUp]);
        react.useEffect(function () {
            if (instance && onRightClick) {
                if (rightClickListener !== null) {
                    google.maps.event.removeListener(rightClickListener);
                }
                setRightClickListener(google.maps.event.addListener(instance, 'rightclick', onRightClick));
            }
        }, [onRightClick]);
        react.useEffect(function () {
            if (instance && onClick) {
                if (clickListener !== null) {
                    google.maps.event.removeListener(clickListener);
                }
                setClickListener(google.maps.event.addListener(instance, 'click', onClick));
            }
        }, [onClick]);
        react.useEffect(function () {
            if (instance && onDrag) {
                if (dragListener !== null) {
                    google.maps.event.removeListener(dragListener);
                }
                setDragListener(google.maps.event.addListener(instance, 'drag', onDrag));
            }
        }, [onDrag]);
        react.useEffect(function () {
            if (instance && onBoundsChanged) {
                if (boundsChangedListener !== null) {
                    google.maps.event.removeListener(boundsChangedListener);
                }
                setBoundsChangedListener(google.maps.event.addListener(instance, 'bounds_changed', onBoundsChanged));
            }
        }, [onBoundsChanged]);
        react.useEffect(function () {
            var rectangle = new google.maps.Rectangle(__assign(__assign({}, (options || {})), { map: map }));
            if (typeof visible !== 'undefined') {
                rectangle.setVisible(visible);
            }
            if (typeof editable !== 'undefined') {
                rectangle.setEditable(editable);
            }
            if (typeof draggable !== 'undefined') {
                rectangle.setDraggable(draggable);
            }
            if (typeof bounds !== 'undefined') {
                rectangle.setBounds(bounds);
            }
            if (onDblClick) {
                setDblclickListener(google.maps.event.addListener(rectangle, 'dblclick', onDblClick));
            }
            if (onDragEnd) {
                setDragendListener(google.maps.event.addListener(rectangle, 'dragend', onDragEnd));
            }
            if (onDragStart) {
                setDragstartListener(google.maps.event.addListener(rectangle, 'dragstart', onDragStart));
            }
            if (onMouseDown) {
                setMousedownListener(google.maps.event.addListener(rectangle, 'mousedown', onMouseDown));
            }
            if (onMouseMove) {
                setMousemoveListener(google.maps.event.addListener(rectangle, 'mousemove', onMouseMove));
            }
            if (onMouseOut) {
                setMouseoutListener(google.maps.event.addListener(rectangle, 'mouseout', onMouseOut));
            }
            if (onMouseOver) {
                setMouseoverListener(google.maps.event.addListener(rectangle, 'mouseover', onMouseOver));
            }
            if (onMouseUp) {
                setMouseupListener(google.maps.event.addListener(rectangle, 'mouseup', onMouseUp));
            }
            if (onRightClick) {
                setRightClickListener(google.maps.event.addListener(rectangle, 'rightclick', onRightClick));
            }
            if (onClick) {
                setClickListener(google.maps.event.addListener(rectangle, 'click', onClick));
            }
            if (onDrag) {
                setDragListener(google.maps.event.addListener(rectangle, 'drag', onDrag));
            }
            if (onBoundsChanged) {
                setBoundsChangedListener(google.maps.event.addListener(rectangle, 'bounds_changed', onBoundsChanged));
            }
            setInstance(rectangle);
            if (onLoad) {
                onLoad(rectangle);
            }
            return function () {
                if (dblclickListener !== null) {
                    google.maps.event.removeListener(dblclickListener);
                }
                if (dragendListener !== null) {
                    google.maps.event.removeListener(dragendListener);
                }
                if (dragstartListener !== null) {
                    google.maps.event.removeListener(dragstartListener);
                }
                if (mousedownListener !== null) {
                    google.maps.event.removeListener(mousedownListener);
                }
                if (mousemoveListener !== null) {
                    google.maps.event.removeListener(mousemoveListener);
                }
                if (mouseoutListener !== null) {
                    google.maps.event.removeListener(mouseoutListener);
                }
                if (mouseoverListener !== null) {
                    google.maps.event.removeListener(mouseoverListener);
                }
                if (mouseupListener !== null) {
                    google.maps.event.removeListener(mouseupListener);
                }
                if (rightClickListener !== null) {
                    google.maps.event.removeListener(rightClickListener);
                }
                if (clickListener !== null) {
                    google.maps.event.removeListener(clickListener);
                }
                if (dragListener !== null) {
                    google.maps.event.removeListener(dragListener);
                }
                if (boundsChangedListener !== null) {
                    google.maps.event.removeListener(boundsChangedListener);
                }
                if (onUnmount) {
                    onUnmount(rectangle);
                }
                rectangle.setMap(null);
            };
        }, []);
        return null;
    }
    var RectangleF = react.memo(RectangleFunctional);
    var Rectangle = /** @class */ (function (_super) {
        __extends(Rectangle, _super);
        function Rectangle() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.registeredEvents = [];
            _this.state = {
                rectangle: null,
            };
            _this.setRectangleCallback = function () {
                if (_this.state.rectangle !== null && _this.props.onLoad) {
                    _this.props.onLoad(_this.state.rectangle);
                }
            };
            return _this;
        }
        Rectangle.prototype.componentDidMount = function () {
            var rectangle = new google.maps.Rectangle(__assign(__assign({}, (this.props.options || {})), { map: this.context }));
            this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
                updaterMap: updaterMap$9,
                eventMap: eventMap$9,
                prevProps: {},
                nextProps: this.props,
                instance: rectangle,
            });
            this.setState(function setRectangle() {
                return {
                    rectangle: rectangle,
                };
            }, this.setRectangleCallback);
        };
        Rectangle.prototype.componentDidUpdate = function (prevProps) {
            if (this.state.rectangle !== null) {
                unregisterEvents(this.registeredEvents);
                this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
                    updaterMap: updaterMap$9,
                    eventMap: eventMap$9,
                    prevProps: prevProps,
                    nextProps: this.props,
                    instance: this.state.rectangle,
                });
            }
        };
        Rectangle.prototype.componentWillUnmount = function () {
            if (this.state.rectangle !== null) {
                if (this.props.onUnmount) {
                    this.props.onUnmount(this.state.rectangle);
                }
                unregisterEvents(this.registeredEvents);
                this.state.rectangle.setMap(null);
            }
        };
        Rectangle.prototype.render = function () {
            return null;
        };
        Rectangle.contextType = MapContext;
        return Rectangle;
    }(react.PureComponent));

    var eventMap$8 = {
        onCenterChanged: 'center_changed',
        onRadiusChanged: 'radius_changed',
        onClick: 'click',
        onDblClick: 'dblclick',
        onDrag: 'drag',
        onDragEnd: 'dragend',
        onDragStart: 'dragstart',
        onMouseDown: 'mousedown',
        onMouseMove: 'mousemove',
        onMouseOut: 'mouseout',
        onMouseOver: 'mouseover',
        onMouseUp: 'mouseup',
        onRightClick: 'rightclick',
    };
    var updaterMap$8 = {
        center: function (instance, center) {
            instance.setCenter(center);
        },
        draggable: function (instance, draggable) {
            instance.setDraggable(draggable);
        },
        editable: function (instance, editable) {
            instance.setEditable(editable);
        },
        map: function (instance, map) {
            instance.setMap(map);
        },
        options: function (instance, options) {
            instance.setOptions(options);
        },
        radius: function (instance, radius) {
            instance.setRadius(radius);
        },
        visible: function (instance, visible) {
            instance.setVisible(visible);
        },
    };
    var defaultOptions = {};
    function CircleFunctional(_a) {
        var options = _a.options, center = _a.center, radius = _a.radius, draggable = _a.draggable, editable = _a.editable, visible = _a.visible, onDblClick = _a.onDblClick, onDragEnd = _a.onDragEnd, onDragStart = _a.onDragStart, onMouseDown = _a.onMouseDown, onMouseMove = _a.onMouseMove, onMouseOut = _a.onMouseOut, onMouseOver = _a.onMouseOver, onMouseUp = _a.onMouseUp, onRightClick = _a.onRightClick, onClick = _a.onClick, onDrag = _a.onDrag, onCenterChanged = _a.onCenterChanged, onRadiusChanged = _a.onRadiusChanged, onLoad = _a.onLoad, onUnmount = _a.onUnmount;
        var map = react.useContext(MapContext);
        var _b = react.useState(null), instance = _b[0], setInstance = _b[1];
        var _c = react.useState(null), dblclickListener = _c[0], setDblclickListener = _c[1];
        var _d = react.useState(null), dragendListener = _d[0], setDragendListener = _d[1];
        var _e = react.useState(null), dragstartListener = _e[0], setDragstartListener = _e[1];
        var _f = react.useState(null), mousedownListener = _f[0], setMousedownListener = _f[1];
        var _g = react.useState(null), mousemoveListener = _g[0], setMousemoveListener = _g[1];
        var _h = react.useState(null), mouseoutListener = _h[0], setMouseoutListener = _h[1];
        var _j = react.useState(null), mouseoverListener = _j[0], setMouseoverListener = _j[1];
        var _k = react.useState(null), mouseupListener = _k[0], setMouseupListener = _k[1];
        var _l = react.useState(null), rightclickListener = _l[0], setRightclickListener = _l[1];
        var _m = react.useState(null), clickListener = _m[0], setClickListener = _m[1];
        var _o = react.useState(null), dragListener = _o[0], setDragListener = _o[1];
        var _p = react.useState(null), centerChangedListener = _p[0], setCenterChangedListener = _p[1];
        var _q = react.useState(null), radiusChangedListener = _q[0], setRadiusChangedListener = _q[1];
        // Order does matter
        react.useEffect(function () {
            if (instance !== null) {
                instance.setMap(map);
            }
        }, [map]);
        react.useEffect(function () {
            if (typeof options !== 'undefined' && instance !== null) {
                instance.setOptions(options);
            }
        }, [instance, options]);
        react.useEffect(function () {
            if (typeof draggable !== 'undefined' && instance !== null) {
                instance.setDraggable(draggable);
            }
        }, [instance, draggable]);
        react.useEffect(function () {
            if (typeof editable !== 'undefined' && instance !== null) {
                instance.setEditable(editable);
            }
        }, [instance, editable]);
        react.useEffect(function () {
            if (typeof visible !== 'undefined' && instance !== null) {
                instance.setVisible(visible);
            }
        }, [instance, visible]);
        react.useEffect(function () {
            if (typeof radius === 'number' && instance !== null) {
                instance.setRadius(radius);
            }
        }, [instance, radius]);
        react.useEffect(function () {
            if (typeof center !== 'undefined' && instance !== null) {
                instance.setCenter(center);
            }
        }, [instance, center]);
        react.useEffect(function () {
            if (instance && onDblClick) {
                if (dblclickListener !== null) {
                    google.maps.event.removeListener(dblclickListener);
                }
                setDblclickListener(google.maps.event.addListener(instance, 'dblclick', onDblClick));
            }
        }, [onDblClick]);
        react.useEffect(function () {
            if (instance && onDragEnd) {
                if (dragendListener !== null) {
                    google.maps.event.removeListener(dragendListener);
                }
                setDragendListener(google.maps.event.addListener(instance, 'dragend', onDragEnd));
            }
        }, [onDragEnd]);
        react.useEffect(function () {
            if (instance && onDragStart) {
                if (dragstartListener !== null) {
                    google.maps.event.removeListener(dragstartListener);
                }
                setDragstartListener(google.maps.event.addListener(instance, 'dragstart', onDragStart));
            }
        }, [onDragStart]);
        react.useEffect(function () {
            if (instance && onMouseDown) {
                if (mousedownListener !== null) {
                    google.maps.event.removeListener(mousedownListener);
                }
                setMousedownListener(google.maps.event.addListener(instance, 'mousedown', onMouseDown));
            }
        }, [onMouseDown]);
        react.useEffect(function () {
            if (instance && onMouseMove) {
                if (mousemoveListener !== null) {
                    google.maps.event.removeListener(mousemoveListener);
                }
                setMousemoveListener(google.maps.event.addListener(instance, 'mousemove', onMouseMove));
            }
        }, [onMouseMove]);
        react.useEffect(function () {
            if (instance && onMouseOut) {
                if (mouseoutListener !== null) {
                    google.maps.event.removeListener(mouseoutListener);
                }
                setMouseoutListener(google.maps.event.addListener(instance, 'mouseout', onMouseOut));
            }
        }, [onMouseOut]);
        react.useEffect(function () {
            if (instance && onMouseOver) {
                if (mouseoverListener !== null) {
                    google.maps.event.removeListener(mouseoverListener);
                }
                setMouseoverListener(google.maps.event.addListener(instance, 'mouseover', onMouseOver));
            }
        }, [onMouseOver]);
        react.useEffect(function () {
            if (instance && onMouseUp) {
                if (mouseupListener !== null) {
                    google.maps.event.removeListener(mouseupListener);
                }
                setMouseupListener(google.maps.event.addListener(instance, 'mouseup', onMouseUp));
            }
        }, [onMouseUp]);
        react.useEffect(function () {
            if (instance && onRightClick) {
                if (rightclickListener !== null) {
                    google.maps.event.removeListener(rightclickListener);
                }
                setRightclickListener(google.maps.event.addListener(instance, 'rightclick', onRightClick));
            }
        }, [onRightClick]);
        react.useEffect(function () {
            if (instance && onClick) {
                if (clickListener !== null) {
                    google.maps.event.removeListener(clickListener);
                }
                setClickListener(google.maps.event.addListener(instance, 'click', onClick));
            }
        }, [onClick]);
        react.useEffect(function () {
            if (instance && onDrag) {
                if (dragListener !== null) {
                    google.maps.event.removeListener(dragListener);
                }
                setDragListener(google.maps.event.addListener(instance, 'drag', onDrag));
            }
        }, [onDrag]);
        react.useEffect(function () {
            if (instance && onCenterChanged) {
                if (centerChangedListener !== null) {
                    google.maps.event.removeListener(centerChangedListener);
                }
                setCenterChangedListener(google.maps.event.addListener(instance, 'center_changed', onCenterChanged));
            }
        }, [onClick]);
        react.useEffect(function () {
            if (instance && onRadiusChanged) {
                if (radiusChangedListener !== null) {
                    google.maps.event.removeListener(radiusChangedListener);
                }
                setRadiusChangedListener(google.maps.event.addListener(instance, 'radius_changed', onRadiusChanged));
            }
        }, [onRadiusChanged]);
        react.useEffect(function () {
            var circle = new google.maps.Circle(__assign(__assign({}, (options || defaultOptions)), { map: map }));
            if (typeof radius === 'number') {
                circle.setRadius(radius);
            }
            if (typeof center !== 'undefined') {
                circle.setCenter(center);
            }
            if (typeof radius === 'number') {
                circle.setRadius(radius);
            }
            if (typeof visible !== 'undefined') {
                circle.setVisible(visible);
            }
            if (typeof editable !== 'undefined') {
                circle.setEditable(editable);
            }
            if (typeof draggable !== 'undefined') {
                circle.setDraggable(draggable);
            }
            if (onDblClick) {
                setDblclickListener(google.maps.event.addListener(circle, 'dblclick', onDblClick));
            }
            if (onDragEnd) {
                setDragendListener(google.maps.event.addListener(circle, 'dragend', onDragEnd));
            }
            if (onDragStart) {
                setDragstartListener(google.maps.event.addListener(circle, 'dragstart', onDragStart));
            }
            if (onMouseDown) {
                setMousedownListener(google.maps.event.addListener(circle, 'mousedown', onMouseDown));
            }
            if (onMouseMove) {
                setMousemoveListener(google.maps.event.addListener(circle, 'mousemove', onMouseMove));
            }
            if (onMouseOut) {
                setMouseoutListener(google.maps.event.addListener(circle, 'mouseout', onMouseOut));
            }
            if (onMouseOver) {
                setMouseoverListener(google.maps.event.addListener(circle, 'mouseover', onMouseOver));
            }
            if (onMouseUp) {
                setMouseupListener(google.maps.event.addListener(circle, 'mouseup', onMouseUp));
            }
            if (onRightClick) {
                setRightclickListener(google.maps.event.addListener(circle, 'rightclick', onRightClick));
            }
            if (onClick) {
                setClickListener(google.maps.event.addListener(circle, 'click', onClick));
            }
            if (onDrag) {
                setDragListener(google.maps.event.addListener(circle, 'drag', onDrag));
            }
            if (onCenterChanged) {
                setCenterChangedListener(google.maps.event.addListener(circle, 'center_changed', onCenterChanged));
            }
            if (onRadiusChanged) {
                setRadiusChangedListener(google.maps.event.addListener(circle, 'radius_changed', onRadiusChanged));
            }
            setInstance(circle);
            if (onLoad) {
                onLoad(circle);
            }
            return function () {
                if (dblclickListener !== null) {
                    google.maps.event.removeListener(dblclickListener);
                }
                if (dragendListener !== null) {
                    google.maps.event.removeListener(dragendListener);
                }
                if (dragstartListener !== null) {
                    google.maps.event.removeListener(dragstartListener);
                }
                if (mousedownListener !== null) {
                    google.maps.event.removeListener(mousedownListener);
                }
                if (mousemoveListener !== null) {
                    google.maps.event.removeListener(mousemoveListener);
                }
                if (mouseoutListener !== null) {
                    google.maps.event.removeListener(mouseoutListener);
                }
                if (mouseoverListener !== null) {
                    google.maps.event.removeListener(mouseoverListener);
                }
                if (mouseupListener !== null) {
                    google.maps.event.removeListener(mouseupListener);
                }
                if (rightclickListener !== null) {
                    google.maps.event.removeListener(rightclickListener);
                }
                if (clickListener !== null) {
                    google.maps.event.removeListener(clickListener);
                }
                if (centerChangedListener !== null) {
                    google.maps.event.removeListener(centerChangedListener);
                }
                if (radiusChangedListener !== null) {
                    google.maps.event.removeListener(radiusChangedListener);
                }
                if (onUnmount) {
                    onUnmount(circle);
                }
                circle.setMap(null);
            };
        }, []);
        return null;
    }
    var CircleF = react.memo(CircleFunctional);
    var Circle = /** @class */ (function (_super) {
        __extends(Circle, _super);
        function Circle() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.registeredEvents = [];
            _this.state = {
                circle: null,
            };
            _this.setCircleCallback = function () {
                if (_this.state.circle !== null && _this.props.onLoad) {
                    _this.props.onLoad(_this.state.circle);
                }
            };
            return _this;
        }
        Circle.prototype.componentDidMount = function () {
            var circle = new google.maps.Circle(__assign(__assign({}, (this.props.options || {})), { map: this.context }));
            this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
                updaterMap: updaterMap$8,
                eventMap: eventMap$8,
                prevProps: {},
                nextProps: this.props,
                instance: circle,
            });
            this.setState(function setCircle() {
                return {
                    circle: circle,
                };
            }, this.setCircleCallback);
        };
        Circle.prototype.componentDidUpdate = function (prevProps) {
            if (this.state.circle !== null) {
                unregisterEvents(this.registeredEvents);
                this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
                    updaterMap: updaterMap$8,
                    eventMap: eventMap$8,
                    prevProps: prevProps,
                    nextProps: this.props,
                    instance: this.state.circle,
                });
            }
        };
        Circle.prototype.componentWillUnmount = function () {
            var _a;
            if (this.state.circle !== null) {
                if (this.props.onUnmount) {
                    this.props.onUnmount(this.state.circle);
                }
                unregisterEvents(this.registeredEvents);
                (_a = this.state.circle) === null || _a === void 0 ? void 0 : _a.setMap(null);
            }
        };
        Circle.prototype.render = function () {
            return null;
        };
        Circle.contextType = MapContext;
        return Circle;
    }(react.PureComponent));

    var eventMap$7 = {
        onClick: 'click',
        onDblClick: 'dblclick',
        onMouseDown: 'mousedown',
        onMouseOut: 'mouseout',
        onMouseOver: 'mouseover',
        onMouseUp: 'mouseup',
        onRightClick: 'rightclick',
        onAddFeature: 'addfeature',
        onRemoveFeature: 'removefeature',
        onRemoveProperty: 'removeproperty',
        onSetGeometry: 'setgeometry',
        onSetProperty: 'setproperty',
    };
    var updaterMap$7 = {
        add: function (instance, feature) {
            instance.add(feature);
        },
        addgeojson: function (instance, geojson, options) {
            instance.addGeoJson(geojson, options);
        },
        contains: function (instance, feature) {
            instance.contains(feature);
        },
        foreach: function (instance, callback) {
            instance.forEach(callback);
        },
        loadgeojson: function (instance, url, options, callback) {
            instance.loadGeoJson(url, options, callback);
        },
        overridestyle: function (instance, feature, style) {
            instance.overrideStyle(feature, style);
        },
        remove: function (instance, feature) {
            instance.remove(feature);
        },
        revertstyle: function (instance, feature) {
            instance.revertStyle(feature);
        },
        controlposition: function (instance, controlPosition) {
            instance.setControlPosition(controlPosition);
        },
        controls: function (instance, controls) {
            instance.setControls(controls);
        },
        drawingmode: function (instance, mode) {
            instance.setDrawingMode(mode);
        },
        map: function (instance, map) {
            instance.setMap(map);
        },
        style: function (instance, style) {
            instance.setStyle(style);
        },
        togeojson: function (instance, callback) {
            instance.toGeoJson(callback);
        },
    };
    function DataFunctional(_a) {
        var options = _a.options, onClick = _a.onClick, onDblClick = _a.onDblClick, onMouseDown = _a.onMouseDown, onMouseMove = _a.onMouseMove, onMouseOut = _a.onMouseOut, onMouseOver = _a.onMouseOver, onMouseUp = _a.onMouseUp, onRightClick = _a.onRightClick, onAddFeature = _a.onAddFeature, onRemoveFeature = _a.onRemoveFeature, onRemoveProperty = _a.onRemoveProperty, onSetGeometry = _a.onSetGeometry, onSetProperty = _a.onSetProperty, onLoad = _a.onLoad, onUnmount = _a.onUnmount;
        var map = react.useContext(MapContext);
        var _b = react.useState(null), instance = _b[0], setInstance = _b[1];
        var _c = react.useState(null), dblclickListener = _c[0], setDblclickListener = _c[1];
        var _d = react.useState(null), mousedownListener = _d[0], setMousedownListener = _d[1];
        var _e = react.useState(null), mousemoveListener = _e[0], setMousemoveListener = _e[1];
        var _f = react.useState(null), mouseoutListener = _f[0], setMouseoutListener = _f[1];
        var _g = react.useState(null), mouseoverListener = _g[0], setMouseoverListener = _g[1];
        var _h = react.useState(null), mouseupListener = _h[0], setMouseupListener = _h[1];
        var _j = react.useState(null), rightclickListener = _j[0], setRightclickListener = _j[1];
        var _k = react.useState(null), clickListener = _k[0], setClickListener = _k[1];
        var _l = react.useState(null), addFeatureListener = _l[0], setAddFeatureListener = _l[1];
        var _m = react.useState(null), removeFeatureListener = _m[0], setRemoveFeatureListener = _m[1];
        var _o = react.useState(null), removePropertyListener = _o[0], setRemovePropertyListener = _o[1];
        var _p = react.useState(null), setGeometryListener = _p[0], setSetGeometryListener = _p[1];
        var _q = react.useState(null), setPropertyListener = _q[0], setSetPropertyListener = _q[1];
        // Order does matter
        react.useEffect(function () {
            if (instance !== null) {
                instance.setMap(map);
            }
        }, [map]);
        react.useEffect(function () {
            if (instance && onDblClick) {
                if (dblclickListener !== null) {
                    google.maps.event.removeListener(dblclickListener);
                }
                setDblclickListener(google.maps.event.addListener(instance, 'dblclick', onDblClick));
            }
        }, [onDblClick]);
        react.useEffect(function () {
            if (instance && onMouseDown) {
                if (mousedownListener !== null) {
                    google.maps.event.removeListener(mousedownListener);
                }
                setMousedownListener(google.maps.event.addListener(instance, 'mousedown', onMouseDown));
            }
        }, [onMouseDown]);
        react.useEffect(function () {
            if (instance && onMouseMove) {
                if (mousemoveListener !== null) {
                    google.maps.event.removeListener(mousemoveListener);
                }
                setMousemoveListener(google.maps.event.addListener(instance, 'mousemove', onMouseMove));
            }
        }, [onMouseMove]);
        react.useEffect(function () {
            if (instance && onMouseOut) {
                if (mouseoutListener !== null) {
                    google.maps.event.removeListener(mouseoutListener);
                }
                setMouseoutListener(google.maps.event.addListener(instance, 'mouseout', onMouseOut));
            }
        }, [onMouseOut]);
        react.useEffect(function () {
            if (instance && onMouseOver) {
                if (mouseoverListener !== null) {
                    google.maps.event.removeListener(mouseoverListener);
                }
                setMouseoverListener(google.maps.event.addListener(instance, 'mouseover', onMouseOver));
            }
        }, [onMouseOver]);
        react.useEffect(function () {
            if (instance && onMouseUp) {
                if (mouseupListener !== null) {
                    google.maps.event.removeListener(mouseupListener);
                }
                setMouseupListener(google.maps.event.addListener(instance, 'mouseup', onMouseUp));
            }
        }, [onMouseUp]);
        react.useEffect(function () {
            if (instance && onRightClick) {
                if (rightclickListener !== null) {
                    google.maps.event.removeListener(rightclickListener);
                }
                setRightclickListener(google.maps.event.addListener(instance, 'rightclick', onRightClick));
            }
        }, [onRightClick]);
        react.useEffect(function () {
            if (instance && onClick) {
                if (clickListener !== null) {
                    google.maps.event.removeListener(clickListener);
                }
                setClickListener(google.maps.event.addListener(instance, 'click', onClick));
            }
        }, [onClick]);
        react.useEffect(function () {
            if (instance && onAddFeature) {
                if (addFeatureListener !== null) {
                    google.maps.event.removeListener(addFeatureListener);
                }
                setAddFeatureListener(google.maps.event.addListener(instance, 'addfeature', onAddFeature));
            }
        }, [onAddFeature]);
        react.useEffect(function () {
            if (instance && onRemoveFeature) {
                if (removeFeatureListener !== null) {
                    google.maps.event.removeListener(removeFeatureListener);
                }
                setRemoveFeatureListener(google.maps.event.addListener(instance, 'removefeature', onRemoveFeature));
            }
        }, [onRemoveFeature]);
        react.useEffect(function () {
            if (instance && onRemoveProperty) {
                if (removePropertyListener !== null) {
                    google.maps.event.removeListener(removePropertyListener);
                }
                setRemovePropertyListener(google.maps.event.addListener(instance, 'removeproperty', onRemoveProperty));
            }
        }, [onRemoveProperty]);
        react.useEffect(function () {
            if (instance && onSetGeometry) {
                if (setGeometryListener !== null) {
                    google.maps.event.removeListener(setGeometryListener);
                }
                setSetGeometryListener(google.maps.event.addListener(instance, 'setgeometry', onSetGeometry));
            }
        }, [onSetGeometry]);
        react.useEffect(function () {
            if (instance && onSetProperty) {
                if (setPropertyListener !== null) {
                    google.maps.event.removeListener(setPropertyListener);
                }
                setSetPropertyListener(google.maps.event.addListener(instance, 'setproperty', onSetProperty));
            }
        }, [onSetProperty]);
        react.useEffect(function () {
            if (map !== null) {
                var data = new google.maps.Data(__assign(__assign({}, (options || {})), { map: map }));
                if (onDblClick) {
                    setDblclickListener(google.maps.event.addListener(data, 'dblclick', onDblClick));
                }
                if (onMouseDown) {
                    setMousedownListener(google.maps.event.addListener(data, 'mousedown', onMouseDown));
                }
                if (onMouseMove) {
                    setMousemoveListener(google.maps.event.addListener(data, 'mousemove', onMouseMove));
                }
                if (onMouseOut) {
                    setMouseoutListener(google.maps.event.addListener(data, 'mouseout', onMouseOut));
                }
                if (onMouseOver) {
                    setMouseoverListener(google.maps.event.addListener(data, 'mouseover', onMouseOver));
                }
                if (onMouseUp) {
                    setMouseupListener(google.maps.event.addListener(data, 'mouseup', onMouseUp));
                }
                if (onRightClick) {
                    setRightclickListener(google.maps.event.addListener(data, 'rightclick', onRightClick));
                }
                if (onClick) {
                    setClickListener(google.maps.event.addListener(data, 'click', onClick));
                }
                if (onAddFeature) {
                    setAddFeatureListener(google.maps.event.addListener(data, 'addfeature', onAddFeature));
                }
                if (onRemoveFeature) {
                    setRemoveFeatureListener(google.maps.event.addListener(data, 'removefeature', onRemoveFeature));
                }
                if (onRemoveProperty) {
                    setRemovePropertyListener(google.maps.event.addListener(data, 'removeproperty', onRemoveProperty));
                }
                if (onSetGeometry) {
                    setSetGeometryListener(google.maps.event.addListener(data, 'setgeometry', onSetGeometry));
                }
                if (onSetProperty) {
                    setSetPropertyListener(google.maps.event.addListener(data, 'setproperty', onSetProperty));
                }
                setInstance(data);
                if (onLoad) {
                    onLoad(data);
                }
            }
            return function () {
                if (instance) {
                    if (dblclickListener !== null) {
                        google.maps.event.removeListener(dblclickListener);
                    }
                    if (mousedownListener !== null) {
                        google.maps.event.removeListener(mousedownListener);
                    }
                    if (mousemoveListener !== null) {
                        google.maps.event.removeListener(mousemoveListener);
                    }
                    if (mouseoutListener !== null) {
                        google.maps.event.removeListener(mouseoutListener);
                    }
                    if (mouseoverListener !== null) {
                        google.maps.event.removeListener(mouseoverListener);
                    }
                    if (mouseupListener !== null) {
                        google.maps.event.removeListener(mouseupListener);
                    }
                    if (rightclickListener !== null) {
                        google.maps.event.removeListener(rightclickListener);
                    }
                    if (clickListener !== null) {
                        google.maps.event.removeListener(clickListener);
                    }
                    if (addFeatureListener !== null) {
                        google.maps.event.removeListener(addFeatureListener);
                    }
                    if (removeFeatureListener !== null) {
                        google.maps.event.removeListener(removeFeatureListener);
                    }
                    if (removePropertyListener !== null) {
                        google.maps.event.removeListener(removePropertyListener);
                    }
                    if (setGeometryListener !== null) {
                        google.maps.event.removeListener(setGeometryListener);
                    }
                    if (setPropertyListener !== null) {
                        google.maps.event.removeListener(setPropertyListener);
                    }
                    if (onUnmount) {
                        onUnmount(instance);
                    }
                    instance.setMap(null);
                }
            };
        }, []);
        return null;
    }
    var DataF = react.memo(DataFunctional);
    var Data = /** @class */ (function (_super) {
        __extends(Data, _super);
        function Data() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.registeredEvents = [];
            _this.state = {
                data: null,
            };
            _this.setDataCallback = function () {
                if (_this.state.data !== null && _this.props.onLoad) {
                    _this.props.onLoad(_this.state.data);
                }
            };
            return _this;
        }
        Data.prototype.componentDidMount = function () {
            if (this.context !== null) {
                var data_1 = new google.maps.Data(__assign(__assign({}, (this.props.options || {})), { map: this.context }));
                this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
                    updaterMap: updaterMap$7,
                    eventMap: eventMap$7,
                    prevProps: {},
                    nextProps: this.props,
                    instance: data_1,
                });
                this.setState(function () {
                    return {
                        data: data_1,
                    };
                }, this.setDataCallback);
            }
        };
        Data.prototype.componentDidUpdate = function (prevProps) {
            if (this.state.data !== null) {
                unregisterEvents(this.registeredEvents);
                this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
                    updaterMap: updaterMap$7,
                    eventMap: eventMap$7,
                    prevProps: prevProps,
                    nextProps: this.props,
                    instance: this.state.data,
                });
            }
        };
        Data.prototype.componentWillUnmount = function () {
            if (this.state.data !== null) {
                if (this.props.onUnmount) {
                    this.props.onUnmount(this.state.data);
                }
                unregisterEvents(this.registeredEvents);
                if (this.state.data) {
                    this.state.data.setMap(null);
                }
            }
        };
        Data.prototype.render = function () {
            return null;
        };
        Data.contextType = MapContext;
        return Data;
    }(react.PureComponent));

    var eventMap$6 = {
        onClick: 'click',
        onDefaultViewportChanged: 'defaultviewport_changed',
        onStatusChanged: 'status_changed',
    };
    var updaterMap$6 = {
        options: function (instance, options) {
            instance.setOptions(options);
        },
        url: function (instance, url) {
            instance.setUrl(url);
        },
        zIndex: function (instance, zIndex) {
            instance.setZIndex(zIndex);
        },
    };
    var KmlLayer = /** @class */ (function (_super) {
        __extends(KmlLayer, _super);
        function KmlLayer() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.registeredEvents = [];
            _this.state = {
                kmlLayer: null,
            };
            _this.setKmlLayerCallback = function () {
                if (_this.state.kmlLayer !== null && _this.props.onLoad) {
                    _this.props.onLoad(_this.state.kmlLayer);
                }
            };
            return _this;
        }
        KmlLayer.prototype.componentDidMount = function () {
            var kmlLayer = new google.maps.KmlLayer(__assign(__assign({}, this.props.options), { map: this.context }));
            this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
                updaterMap: updaterMap$6,
                eventMap: eventMap$6,
                prevProps: {},
                nextProps: this.props,
                instance: kmlLayer,
            });
            this.setState(function setLmlLayer() {
                return {
                    kmlLayer: kmlLayer,
                };
            }, this.setKmlLayerCallback);
        };
        KmlLayer.prototype.componentDidUpdate = function (prevProps) {
            if (this.state.kmlLayer !== null) {
                unregisterEvents(this.registeredEvents);
                this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
                    updaterMap: updaterMap$6,
                    eventMap: eventMap$6,
                    prevProps: prevProps,
                    nextProps: this.props,
                    instance: this.state.kmlLayer,
                });
            }
        };
        KmlLayer.prototype.componentWillUnmount = function () {
            if (this.state.kmlLayer !== null) {
                if (this.props.onUnmount) {
                    this.props.onUnmount(this.state.kmlLayer);
                }
                unregisterEvents(this.registeredEvents);
                this.state.kmlLayer.setMap(null);
            }
        };
        KmlLayer.prototype.render = function () {
            return null;
        };
        KmlLayer.contextType = MapContext;
        return KmlLayer;
    }(react.PureComponent));

    function getOffsetOverride(containerElement, getPixelPositionOffset) {
        return typeof getPixelPositionOffset === 'function'
            ? getPixelPositionOffset(containerElement.offsetWidth, containerElement.offsetHeight)
            : {
                x: 0,
                y: 0,
            };
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function createLatLng(inst, Type) { return new Type(inst.lat, inst.lng); }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function createLatLngBounds(inst, Type) {
        return new Type(new google.maps.LatLng(inst.ne.lat, inst.ne.lng), new google.maps.LatLng(inst.sw.lat, inst.sw.lng));
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function ensureOfType(inst, 
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    type, 
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    factory
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ) {
        return inst instanceof type ? inst : factory(inst, type);
    }
    function ensureOfTypeBounds(inst, 
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    type, 
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    factory
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ) {
        return inst instanceof type ? inst : factory(inst, type);
    }
    function getLayoutStylesByBounds(mapCanvasProjection, offset, bounds) {
        var ne = mapCanvasProjection && mapCanvasProjection.fromLatLngToDivPixel(bounds.getNorthEast());
        var sw = mapCanvasProjection && mapCanvasProjection.fromLatLngToDivPixel(bounds.getSouthWest());
        if (ne && sw) {
            return {
                left: "".concat(sw.x + offset.x, "px"),
                top: "".concat(ne.y + offset.y, "px"),
                width: "".concat(ne.x - sw.x - offset.x, "px"),
                height: "".concat(sw.y - ne.y - offset.y, "px"),
            };
        }
        return {
            left: '-9999px',
            top: '-9999px',
        };
    }
    function getLayoutStylesByPosition(mapCanvasProjection, offset, position) {
        var point = mapCanvasProjection && mapCanvasProjection.fromLatLngToDivPixel(position);
        if (point) {
            var x = point.x, y = point.y;
            return {
                left: "".concat(x + offset.x, "px"),
                top: "".concat(y + offset.y, "px"),
            };
        }
        return {
            left: '-9999px',
            top: '-9999px',
        };
    }
    function getLayoutStyles(mapCanvasProjection, offset, bounds, position) {
        return bounds !== undefined
            ? getLayoutStylesByBounds(mapCanvasProjection, offset, ensureOfTypeBounds(bounds, google.maps.LatLngBounds, createLatLngBounds))
            : getLayoutStylesByPosition(mapCanvasProjection, offset, ensureOfType(position, google.maps.LatLng, createLatLng));
    }
    function arePositionsEqual(currentPosition, previousPosition) {
        return currentPosition.left === previousPosition.left
            && currentPosition.top === previousPosition.top
            && currentPosition.width === previousPosition.height
            && currentPosition.height === previousPosition.height;
    }

    function createOverlay(container, pane, position, bounds, getPixelPositionOffset) {
        var Overlay = /** @class */ (function (_super) {
            __extends(Overlay, _super);
            function Overlay(container, pane, position, bounds) {
                var _this = _super.call(this) || this;
                _this.container = container;
                _this.pane = pane;
                _this.position = position;
                _this.bounds = bounds;
                return _this;
            }
            Overlay.prototype.onAdd = function () {
                var _a;
                var pane = (_a = this.getPanes()) === null || _a === void 0 ? void 0 : _a[this.pane];
                pane === null || pane === void 0 ? void 0 : pane.appendChild(this.container);
            };
            Overlay.prototype.draw = function () {
                var projection = this.getProjection();
                var offset = __assign({}, (this.container
                    ? getOffsetOverride(this.container, getPixelPositionOffset)
                    : {
                        x: 0,
                        y: 0,
                    }));
                var layoutStyles = getLayoutStyles(projection, offset, this.bounds, this.position);
                for (var _i = 0, _a = Object.entries(layoutStyles); _i < _a.length; _i++) {
                    var _b = _a[_i], key = _b[0], value = _b[1];
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    this.container.style[key] = value;
                }
            };
            Overlay.prototype.onRemove = function () {
                if (this.container.parentNode !== null) {
                    this.container.parentNode.removeChild(this.container);
                }
            };
            return Overlay;
        }(google.maps.OverlayView));
        return new Overlay(container, pane, position, bounds);
    }

    function convertToLatLngString(latLngLike) {
        if (!latLngLike) {
            return '';
        }
        var latLng = latLngLike instanceof google.maps.LatLng
            ? latLngLike
            : new google.maps.LatLng(latLngLike.lat, latLngLike.lng);
        return latLng + '';
    }
    function convertToLatLngBoundsString(latLngBoundsLike) {
        if (!latLngBoundsLike) {
            return '';
        }
        var latLngBounds = latLngBoundsLike instanceof google.maps.LatLngBounds
            ? latLngBoundsLike
            : new google.maps.LatLngBounds(new google.maps.LatLng(latLngBoundsLike.south, latLngBoundsLike.east), new google.maps.LatLng(latLngBoundsLike.north, latLngBoundsLike.west));
        return latLngBounds + '';
    }
    var FLOAT_PANE = "floatPane";
    var MAP_PANE = "mapPane";
    var MARKER_LAYER = "markerLayer";
    var OVERLAY_LAYER = "overlayLayer";
    var OVERLAY_MOUSE_TARGET = "overlayMouseTarget";
    function OverlayViewFunctional(_a) {
        var position = _a.position, bounds = _a.bounds, mapPaneName = _a.mapPaneName, zIndex = _a.zIndex, onLoad = _a.onLoad, onUnmount = _a.onUnmount, getPixelPositionOffset = _a.getPixelPositionOffset, children = _a.children;
        var map = react.useContext(MapContext);
        var container = react.useMemo(function () {
            var div = document.createElement('div');
            div.style.position = 'absolute';
            return div;
        }, []);
        var overlay = react.useMemo(function () {
            return createOverlay(container, mapPaneName, position, bounds, getPixelPositionOffset);
        }, [container, mapPaneName, position, bounds]);
        react.useEffect(function () {
            onLoad === null || onLoad === void 0 ? void 0 : onLoad(overlay);
            overlay === null || overlay === void 0 ? void 0 : overlay.setMap(map);
            return function () {
                onUnmount === null || onUnmount === void 0 ? void 0 : onUnmount(overlay);
                overlay === null || overlay === void 0 ? void 0 : overlay.setMap(null);
            };
        }, [map, overlay]);
        // to move the container to the foreground and background
        react.useEffect(function () {
            container.style.zIndex = "".concat(zIndex);
        }, [zIndex, container]);
        return ReactDOM__namespace.createPortal(children, container);
    }
    var OverlayViewF = react.memo(OverlayViewFunctional);
    var OverlayView = /** @class */ (function (_super) {
        __extends(OverlayView, _super);
        function OverlayView(props) {
            var _this = _super.call(this, props) || this;
            _this.state = {
                paneEl: null,
                containerStyle: {
                    // set initial position
                    position: 'absolute',
                },
            };
            _this.updatePane = function () {
                var mapPaneName = _this.props.mapPaneName;
                // https://developers.google.com/maps/documentation/javascript/3.exp/reference#MapPanes
                var mapPanes = _this.overlayView.getPanes();
                invariant$1(!!mapPaneName, "OverlayView requires props.mapPaneName but got %s", mapPaneName);
                if (mapPanes) {
                    _this.setState({
                        paneEl: mapPanes[mapPaneName],
                    });
                }
                else {
                    _this.setState({
                        paneEl: null,
                    });
                }
            };
            _this.onAdd = function () {
                var _a, _b;
                _this.updatePane();
                (_b = (_a = _this.props).onLoad) === null || _b === void 0 ? void 0 : _b.call(_a, _this.overlayView);
            };
            _this.onPositionElement = function () {
                var mapCanvasProjection = _this.overlayView.getProjection();
                var offset = __assign({ x: 0, y: 0 }, (_this.containerRef.current
                    ? getOffsetOverride(_this.containerRef.current, _this.props.getPixelPositionOffset)
                    : {}));
                var layoutStyles = getLayoutStyles(mapCanvasProjection, offset, _this.props.bounds, _this.props.position);
                var _a = _this.state.containerStyle, left = _a.left, top = _a.top, width = _a.width, height = _a.height;
                if (!arePositionsEqual(layoutStyles, { left: left, top: top, width: width, height: height })) {
                    _this.setState({
                        containerStyle: {
                            top: layoutStyles.top || 0,
                            left: layoutStyles.left || 0,
                            width: layoutStyles.width || 0,
                            height: layoutStyles.height || 0,
                            position: 'absolute',
                        },
                    });
                }
            };
            _this.draw = function () {
                _this.onPositionElement();
            };
            _this.onRemove = function () {
                var _a, _b;
                _this.setState(function () { return ({
                    paneEl: null,
                }); });
                (_b = (_a = _this.props).onUnmount) === null || _b === void 0 ? void 0 : _b.call(_a, _this.overlayView);
            };
            _this.containerRef = react.createRef();
            // You must implement three methods: onAdd(), draw(), and onRemove().
            var overlayView = new google.maps.OverlayView();
            overlayView.onAdd = _this.onAdd;
            overlayView.draw = _this.draw;
            overlayView.onRemove = _this.onRemove;
            _this.overlayView = overlayView;
            return _this;
        }
        OverlayView.prototype.componentDidMount = function () {
            this.overlayView.setMap(this.context);
        };
        OverlayView.prototype.componentDidUpdate = function (prevProps) {
            var prevPositionString = convertToLatLngString(prevProps.position);
            var positionString = convertToLatLngString(this.props.position);
            var prevBoundsString = convertToLatLngBoundsString(prevProps.bounds);
            var boundsString = convertToLatLngBoundsString(this.props.bounds);
            if (prevPositionString !== positionString ||
                prevBoundsString !== boundsString) {
                this.overlayView.draw();
            }
            if (prevProps.mapPaneName !== this.props.mapPaneName) {
                this.updatePane();
            }
        };
        OverlayView.prototype.componentWillUnmount = function () {
            this.overlayView.setMap(null);
        };
        OverlayView.prototype.render = function () {
            var paneEl = this.state.paneEl;
            if (paneEl) {
                return ReactDOM__namespace.createPortal(jsxRuntime.jsx("div", { ref: this.containerRef, style: this.state.containerStyle, children: react.Children.only(this.props.children) }), paneEl);
            }
            else {
                return null;
            }
        };
        OverlayView.FLOAT_PANE = "floatPane";
        OverlayView.MAP_PANE = "mapPane";
        OverlayView.MARKER_LAYER = "markerLayer";
        OverlayView.OVERLAY_LAYER = "overlayLayer";
        OverlayView.OVERLAY_MOUSE_TARGET = "overlayMouseTarget";
        OverlayView.contextType = MapContext;
        return OverlayView;
    }(react.PureComponent));

    function noop() { return; }

    var eventMap$5 = {
        onDblClick: 'dblclick',
        onClick: 'click',
    };
    var updaterMap$5 = {
        opacity: function (instance, opacity) {
            instance.setOpacity(opacity);
        },
    };
    function GroundOverlayFunctional(_a) {
        var url = _a.url, bounds = _a.bounds, options = _a.options, visible = _a.visible;
        var map = react.useContext(MapContext);
        var imageBounds = new google.maps.LatLngBounds(new google.maps.LatLng(bounds.south, bounds.west), new google.maps.LatLng(bounds.north, bounds.east));
        var groundOverlay = react.useMemo(function () {
            var overlay = new google.maps.GroundOverlay(url, imageBounds, __assign({}, options));
            return overlay;
        }, []);
        react.useEffect(function () {
            if (groundOverlay !== null) {
                groundOverlay.setMap(map);
            }
        }, [map]);
        react.useEffect(function () {
            if (typeof url !== 'undefined' && groundOverlay !== null) {
                groundOverlay.set("url", url);
                groundOverlay.setMap(map);
            }
        }, [groundOverlay, url]);
        react.useEffect(function () {
            if (typeof visible !== 'undefined' && groundOverlay !== null) {
                groundOverlay.setOpacity(visible ? 1 : 0);
            }
        }, [groundOverlay, visible]);
        react.useEffect(function () {
            var newBounds = new google.maps.LatLngBounds(new google.maps.LatLng(bounds.south, bounds.west), new google.maps.LatLng(bounds.north, bounds.east));
            if (typeof bounds !== 'undefined' && groundOverlay !== null) {
                groundOverlay.set("bounds", newBounds);
                groundOverlay.setMap(map);
            }
        }, [groundOverlay, bounds]);
        return null;
    }
    var GroundOverlayF = react.memo(GroundOverlayFunctional);
    var GroundOverlay = /** @class */ (function (_super) {
        __extends(GroundOverlay, _super);
        function GroundOverlay() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.registeredEvents = [];
            _this.state = {
                groundOverlay: null,
            };
            _this.setGroundOverlayCallback = function () {
                if (_this.state.groundOverlay !== null && _this.props.onLoad) {
                    _this.props.onLoad(_this.state.groundOverlay);
                }
            };
            return _this;
        }
        GroundOverlay.prototype.componentDidMount = function () {
            invariant$1(!!this.props.url || !!this.props.bounds, "For GroundOverlay, url and bounds are passed in to constructor and are immutable after instantiated. This is the behavior of Google Maps JavaScript API v3 ( See https://developers.google.com/maps/documentation/javascript/reference#GroundOverlay) Hence, use the corresponding two props provided by `react-google-maps-api`, url and bounds. In some cases, you'll need the GroundOverlay component to reflect the changes of url and bounds. You can leverage the React's key property to remount the component. Typically, just `key={url}` would serve your need. See https://github.com/tomchentw/react-google-maps/issues/655");
            var groundOverlay = new google.maps.GroundOverlay(this.props.url, this.props.bounds, __assign(__assign({}, this.props.options), { map: this.context }));
            this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
                updaterMap: updaterMap$5,
                eventMap: eventMap$5,
                prevProps: {},
                nextProps: this.props,
                instance: groundOverlay,
            });
            this.setState(function setGroundOverlay() {
                return {
                    groundOverlay: groundOverlay,
                };
            }, this.setGroundOverlayCallback);
        };
        GroundOverlay.prototype.componentDidUpdate = function (prevProps) {
            if (this.state.groundOverlay !== null) {
                unregisterEvents(this.registeredEvents);
                this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
                    updaterMap: updaterMap$5,
                    eventMap: eventMap$5,
                    prevProps: prevProps,
                    nextProps: this.props,
                    instance: this.state.groundOverlay,
                });
            }
        };
        GroundOverlay.prototype.componentWillUnmount = function () {
            if (this.state.groundOverlay) {
                if (this.props.onUnmount) {
                    this.props.onUnmount(this.state.groundOverlay);
                }
                this.state.groundOverlay.setMap(null);
            }
        };
        GroundOverlay.prototype.render = function () {
            return null;
        };
        GroundOverlay.defaultProps = {
            onLoad: noop,
        };
        GroundOverlay.contextType = MapContext;
        return GroundOverlay;
    }(react.PureComponent));

    var eventMap$4 = {};
    var updaterMap$4 = {
        data: function (instance, data) {
            instance.setData(data);
        },
        map: function (instance, map) {
            instance.setMap(map);
        },
        options: function (instance, options) {
            instance.setOptions(options);
        },
    };
    function HeatmapLayerFunctional(_a) {
        var data = _a.data, onLoad = _a.onLoad, onUnmount = _a.onUnmount, options = _a.options;
        var map = react.useContext(MapContext);
        var _b = react.useState(null), instance = _b[0], setInstance = _b[1];
        react.useEffect(function () {
            if (!google.maps.visualization) {
                invariant$1(!!google.maps.visualization, 'Did you include prop libraries={["visualization"]} in useJsApiScript? %s', google.maps.visualization);
            }
        }, []);
        react.useEffect(function () {
            invariant$1(!!data, 'data property is required in HeatmapLayer %s', data);
        }, [data]);
        // Order does matter
        react.useEffect(function () {
            if (instance !== null) {
                instance.setMap(map);
            }
        }, [map]);
        react.useEffect(function () {
            if (options && instance !== null) {
                instance.setOptions(options);
            }
        }, [instance, options]);
        react.useEffect(function () {
            var heatmapLayer = new google.maps.visualization.HeatmapLayer(__assign(__assign({}, (options || {})), { data: data, map: map }));
            setInstance(heatmapLayer);
            if (onLoad) {
                onLoad(heatmapLayer);
            }
            return function () {
                if (instance !== null) {
                    if (onUnmount) {
                        onUnmount(instance);
                    }
                    instance.setMap(null);
                }
            };
        }, []);
        return null;
    }
    var HeatmapLayerF = react.memo(HeatmapLayerFunctional);
    var HeatmapLayer = /** @class */ (function (_super) {
        __extends(HeatmapLayer, _super);
        function HeatmapLayer() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.registeredEvents = [];
            _this.state = {
                heatmapLayer: null,
            };
            _this.setHeatmapLayerCallback = function () {
                if (_this.state.heatmapLayer !== null && _this.props.onLoad) {
                    _this.props.onLoad(_this.state.heatmapLayer);
                }
            };
            return _this;
        }
        HeatmapLayer.prototype.componentDidMount = function () {
            invariant$1(!!google.maps.visualization, 'Did you include prop libraries={["visualization"]} to <LoadScript />? %s', google.maps.visualization);
            invariant$1(!!this.props.data, 'data property is required in HeatmapLayer %s', this.props.data);
            var heatmapLayer = new google.maps.visualization.HeatmapLayer(__assign(__assign({}, (this.props.options || {})), { data: this.props.data, map: this.context }));
            this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
                updaterMap: updaterMap$4,
                eventMap: eventMap$4,
                prevProps: {},
                nextProps: this.props,
                instance: heatmapLayer,
            });
            this.setState(function setHeatmapLayer() {
                return {
                    heatmapLayer: heatmapLayer,
                };
            }, this.setHeatmapLayerCallback);
        };
        HeatmapLayer.prototype.componentDidUpdate = function (prevProps) {
            unregisterEvents(this.registeredEvents);
            this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
                updaterMap: updaterMap$4,
                eventMap: eventMap$4,
                prevProps: prevProps,
                nextProps: this.props,
                instance: this.state.heatmapLayer,
            });
        };
        HeatmapLayer.prototype.componentWillUnmount = function () {
            if (this.state.heatmapLayer !== null) {
                if (this.props.onUnmount) {
                    this.props.onUnmount(this.state.heatmapLayer);
                }
                unregisterEvents(this.registeredEvents);
                this.state.heatmapLayer.setMap(null);
            }
        };
        HeatmapLayer.prototype.render = function () {
            return null;
        };
        HeatmapLayer.contextType = MapContext;
        return HeatmapLayer;
    }(react.PureComponent));

    var eventMap$3 = {
        onCloseClick: 'closeclick',
        onPanoChanged: 'pano_changed',
        onPositionChanged: 'position_changed',
        onPovChanged: 'pov_changed',
        onResize: 'resize',
        onStatusChanged: 'status_changed',
        onVisibleChanged: 'visible_changed',
        onZoomChanged: 'zoom_changed',
    };
    var updaterMap$3 = {
        register: function (instance, provider, options) {
            instance.registerPanoProvider(provider, options);
        },
        links: function (instance, links) {
            instance.setLinks(links);
        },
        motionTracking: function (instance, motionTracking) {
            instance.setMotionTracking(motionTracking);
        },
        options: function (instance, options) {
            instance.setOptions(options);
        },
        pano: function (instance, pano) {
            instance.setPano(pano);
        },
        position: function (instance, position) {
            instance.setPosition(position);
        },
        pov: function (instance, pov) {
            instance.setPov(pov);
        },
        visible: function (instance, visible) {
            instance.setVisible(visible);
        },
        zoom: function (instance, zoom) {
            instance.setZoom(zoom);
        },
    };
    var StreetViewPanorama = /** @class */ (function (_super) {
        __extends(StreetViewPanorama, _super);
        function StreetViewPanorama() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.registeredEvents = [];
            _this.state = {
                streetViewPanorama: null,
            };
            _this.setStreetViewPanoramaCallback = function () {
                if (_this.state.streetViewPanorama !== null && _this.props.onLoad) {
                    _this.props.onLoad(_this.state.streetViewPanorama);
                }
            };
            return _this;
        }
        StreetViewPanorama.prototype.componentDidMount = function () {
            var _a, _b;
            var streetViewPanorama = (_b = (_a = this.context) === null || _a === void 0 ? void 0 : _a.getStreetView()) !== null && _b !== void 0 ? _b : null;
            this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
                updaterMap: updaterMap$3,
                eventMap: eventMap$3,
                prevProps: {},
                nextProps: this.props,
                instance: streetViewPanorama,
            });
            this.setState(function () {
                return {
                    streetViewPanorama: streetViewPanorama,
                };
            }, this.setStreetViewPanoramaCallback);
        };
        StreetViewPanorama.prototype.componentDidUpdate = function (prevProps) {
            if (this.state.streetViewPanorama !== null) {
                unregisterEvents(this.registeredEvents);
                this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
                    updaterMap: updaterMap$3,
                    eventMap: eventMap$3,
                    prevProps: prevProps,
                    nextProps: this.props,
                    instance: this.state.streetViewPanorama,
                });
            }
        };
        StreetViewPanorama.prototype.componentWillUnmount = function () {
            if (this.state.streetViewPanorama !== null) {
                if (this.props.onUnmount) {
                    this.props.onUnmount(this.state.streetViewPanorama);
                }
                unregisterEvents(this.registeredEvents);
                this.state.streetViewPanorama.setVisible(false);
            }
        };
        StreetViewPanorama.prototype.render = function () {
            return null;
        };
        StreetViewPanorama.contextType = MapContext;
        return StreetViewPanorama;
    }(react.PureComponent));

    var StreetViewService = /** @class */ (function (_super) {
        __extends(StreetViewService, _super);
        function StreetViewService() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.state = {
                streetViewService: null,
            };
            _this.setStreetViewServiceCallback = function () {
                if (_this.state.streetViewService !== null && _this.props.onLoad) {
                    _this.props.onLoad(_this.state.streetViewService);
                }
            };
            return _this;
        }
        StreetViewService.prototype.componentDidMount = function () {
            var streetViewService = new google.maps.StreetViewService();
            this.setState(function setStreetViewService() {
                return {
                    streetViewService: streetViewService,
                };
            }, this.setStreetViewServiceCallback);
        };
        StreetViewService.prototype.componentWillUnmount = function () {
            if (this.state.streetViewService !== null && this.props.onUnmount) {
                this.props.onUnmount(this.state.streetViewService);
            }
        };
        StreetViewService.prototype.render = function () {
            return null;
        };
        StreetViewService.contextType = MapContext;
        return StreetViewService;
    }(react.PureComponent));

    var DirectionsService = /** @class */ (function (_super) {
        __extends(DirectionsService, _super);
        function DirectionsService() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.state = {
                directionsService: null,
            };
            _this.setDirectionsServiceCallback = function () {
                if (_this.state.directionsService !== null && _this.props.onLoad) {
                    _this.props.onLoad(_this.state.directionsService);
                }
            };
            return _this;
        }
        DirectionsService.prototype.componentDidMount = function () {
            invariant$1(!!this.props.options, 'DirectionsService expected options object as parameter, but got %s', this.props.options);
            var directionsService = new google.maps.DirectionsService();
            this.setState(function setDirectionsService() {
                return {
                    directionsService: directionsService,
                };
            }, this.setDirectionsServiceCallback);
        };
        DirectionsService.prototype.componentDidUpdate = function () {
            if (this.state.directionsService !== null) {
                this.state.directionsService.route(this.props.options, this.props.callback);
            }
        };
        DirectionsService.prototype.componentWillUnmount = function () {
            if (this.state.directionsService !== null) {
                if (this.props.onUnmount) {
                    this.props.onUnmount(this.state.directionsService);
                }
            }
        };
        DirectionsService.prototype.render = function () {
            return null;
        };
        return DirectionsService;
    }(react.PureComponent));

    var eventMap$2 = {
        onDirectionsChanged: 'directions_changed',
    };
    var updaterMap$2 = {
        directions: function (instance, directions) {
            instance.setDirections(directions);
        },
        map: function (instance, map) {
            instance.setMap(map);
        },
        options: function (instance, options) {
            instance.setOptions(options);
        },
        panel: function (instance, panel) {
            instance.setPanel(panel);
        },
        routeIndex: function (instance, routeIndex) {
            instance.setRouteIndex(routeIndex);
        },
    };
    var DirectionsRenderer = /** @class */ (function (_super) {
        __extends(DirectionsRenderer, _super);
        function DirectionsRenderer() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.registeredEvents = [];
            _this.state = {
                directionsRenderer: null,
            };
            _this.setDirectionsRendererCallback = function () {
                if (_this.state.directionsRenderer !== null) {
                    _this.state.directionsRenderer.setMap(_this.context);
                    if (_this.props.onLoad) {
                        _this.props.onLoad(_this.state.directionsRenderer);
                    }
                }
            };
            return _this;
        }
        DirectionsRenderer.prototype.componentDidMount = function () {
            var directionsRenderer = new google.maps.DirectionsRenderer(this.props.options);
            this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
                updaterMap: updaterMap$2,
                eventMap: eventMap$2,
                prevProps: {},
                nextProps: this.props,
                instance: directionsRenderer,
            });
            this.setState(function setDirectionsRenderer() {
                return {
                    directionsRenderer: directionsRenderer,
                };
            }, this.setDirectionsRendererCallback);
        };
        DirectionsRenderer.prototype.componentDidUpdate = function (prevProps) {
            if (this.state.directionsRenderer !== null) {
                unregisterEvents(this.registeredEvents);
                this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
                    updaterMap: updaterMap$2,
                    eventMap: eventMap$2,
                    prevProps: prevProps,
                    nextProps: this.props,
                    instance: this.state.directionsRenderer,
                });
            }
        };
        DirectionsRenderer.prototype.componentWillUnmount = function () {
            if (this.state.directionsRenderer !== null) {
                if (this.props.onUnmount) {
                    this.props.onUnmount(this.state.directionsRenderer);
                }
                unregisterEvents(this.registeredEvents);
                if (this.state.directionsRenderer) {
                    this.state.directionsRenderer.setMap(null);
                }
            }
        };
        DirectionsRenderer.prototype.render = function () {
            return jsxRuntime.jsx(jsxRuntime.Fragment, {});
        };
        DirectionsRenderer.contextType = MapContext;
        return DirectionsRenderer;
    }(react.PureComponent));

    var DistanceMatrixService = /** @class */ (function (_super) {
        __extends(DistanceMatrixService, _super);
        function DistanceMatrixService() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.state = {
                distanceMatrixService: null,
            };
            _this.setDistanceMatrixServiceCallback = function () {
                if (_this.state.distanceMatrixService !== null && _this.props.onLoad) {
                    _this.props.onLoad(_this.state.distanceMatrixService);
                }
            };
            return _this;
        }
        DistanceMatrixService.prototype.componentDidMount = function () {
            invariant$1(!!this.props.options, 'DistanceMatrixService expected options object as parameter, but go %s', this.props.options);
            var distanceMatrixService = new google.maps.DistanceMatrixService();
            this.setState(function setDistanceMatrixService() {
                return {
                    distanceMatrixService: distanceMatrixService,
                };
            }, this.setDistanceMatrixServiceCallback);
        };
        DistanceMatrixService.prototype.componentDidUpdate = function () {
            if (this.state.distanceMatrixService !== null) {
                this.state.distanceMatrixService.getDistanceMatrix(this.props.options, this.props.callback);
            }
        };
        DistanceMatrixService.prototype.componentWillUnmount = function () {
            if (this.state.distanceMatrixService !== null && this.props.onUnmount) {
                this.props.onUnmount(this.state.distanceMatrixService);
            }
        };
        DistanceMatrixService.prototype.render = function () {
            return null;
        };
        return DistanceMatrixService;
    }(react.PureComponent));

    var eventMap$1 = {
        onPlacesChanged: 'places_changed',
    };
    var updaterMap$1 = {
        bounds: function (instance, bounds) {
            instance.setBounds(bounds);
        },
    };
    var StandaloneSearchBox = /** @class */ (function (_super) {
        __extends(StandaloneSearchBox, _super);
        function StandaloneSearchBox() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.registeredEvents = [];
            _this.containerElement = react.createRef();
            _this.state = {
                searchBox: null,
            };
            _this.setSearchBoxCallback = function () {
                if (_this.state.searchBox !== null && _this.props.onLoad) {
                    _this.props.onLoad(_this.state.searchBox);
                }
            };
            return _this;
        }
        StandaloneSearchBox.prototype.componentDidMount = function () {
            invariant$1(!!google.maps.places, 'You need to provide libraries={["places"]} prop to <LoadScript /> component %s', google.maps.places);
            if (this.containerElement !== null && this.containerElement.current !== null) {
                var input = this.containerElement.current.querySelector('input');
                if (input !== null) {
                    var searchBox_1 = new google.maps.places.SearchBox(input, this.props.options);
                    this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
                        updaterMap: updaterMap$1,
                        eventMap: eventMap$1,
                        prevProps: {},
                        nextProps: this.props,
                        instance: searchBox_1,
                    });
                    this.setState(function setSearchBox() {
                        return {
                            searchBox: searchBox_1,
                        };
                    }, this.setSearchBoxCallback);
                }
            }
        };
        StandaloneSearchBox.prototype.componentDidUpdate = function (prevProps) {
            if (this.state.searchBox !== null) {
                unregisterEvents(this.registeredEvents);
                this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
                    updaterMap: updaterMap$1,
                    eventMap: eventMap$1,
                    prevProps: prevProps,
                    nextProps: this.props,
                    instance: this.state.searchBox,
                });
            }
        };
        StandaloneSearchBox.prototype.componentWillUnmount = function () {
            if (this.state.searchBox !== null) {
                if (this.props.onUnmount) {
                    this.props.onUnmount(this.state.searchBox);
                }
                unregisterEvents(this.registeredEvents);
            }
        };
        StandaloneSearchBox.prototype.render = function () {
            return jsxRuntime.jsx("div", { ref: this.containerElement, children: react.Children.only(this.props.children) });
        };
        StandaloneSearchBox.contextType = MapContext;
        return StandaloneSearchBox;
    }(react.PureComponent));

    var eventMap = {
        onPlaceChanged: 'place_changed',
    };
    var updaterMap = {
        bounds: function (instance, bounds) {
            instance.setBounds(bounds);
        },
        restrictions: function (instance, restrictions) {
            instance.setComponentRestrictions(restrictions);
        },
        fields: function (instance, fields) {
            instance.setFields(fields);
        },
        options: function (instance, options) {
            instance.setOptions(options);
        },
        types: function (instance, types) {
            instance.setTypes(types);
        },
    };
    var Autocomplete = /** @class */ (function (_super) {
        __extends(Autocomplete, _super);
        function Autocomplete() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.registeredEvents = [];
            _this.containerElement = react.createRef();
            _this.state = {
                autocomplete: null,
            };
            _this.setAutocompleteCallback = function () {
                if (_this.state.autocomplete !== null && _this.props.onLoad) {
                    _this.props.onLoad(_this.state.autocomplete);
                }
            };
            return _this;
        }
        Autocomplete.prototype.componentDidMount = function () {
            var _a;
            invariant$1(!!google.maps.places, 'You need to provide libraries={["places"]} prop to <LoadScript /> component %s', google.maps.places);
            // TODO: why current could be equal null?
            var input = (_a = this.containerElement.current) === null || _a === void 0 ? void 0 : _a.querySelector('input');
            if (input) {
                var autocomplete_1 = new google.maps.places.Autocomplete(input, this.props.options);
                this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
                    updaterMap: updaterMap,
                    eventMap: eventMap,
                    prevProps: {},
                    nextProps: this.props,
                    instance: autocomplete_1,
                });
                this.setState(function () {
                    return {
                        autocomplete: autocomplete_1,
                    };
                }, this.setAutocompleteCallback);
            }
        };
        Autocomplete.prototype.componentDidUpdate = function (prevProps) {
            unregisterEvents(this.registeredEvents);
            this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
                updaterMap: updaterMap,
                eventMap: eventMap,
                prevProps: prevProps,
                nextProps: this.props,
                instance: this.state.autocomplete,
            });
        };
        Autocomplete.prototype.componentWillUnmount = function () {
            if (this.state.autocomplete !== null) {
                unregisterEvents(this.registeredEvents);
            }
        };
        Autocomplete.prototype.render = function () {
            return jsxRuntime.jsx("div", { ref: this.containerElement, className: this.props.className, children: react.Children.only(this.props.children) });
        };
        Autocomplete.defaultProps = {
            className: ''
        };
        Autocomplete.contextType = MapContext;
        return Autocomplete;
    }(react.PureComponent));

    exports.Autocomplete = Autocomplete;
    exports.BicyclingLayer = BicyclingLayer;
    exports.BicyclingLayerF = BicyclingLayerF;
    exports.Circle = Circle;
    exports.CircleF = CircleF;
    exports.Data = Data;
    exports.DataF = DataF;
    exports.DirectionsRenderer = DirectionsRenderer;
    exports.DirectionsService = DirectionsService;
    exports.DistanceMatrixService = DistanceMatrixService;
    exports.DrawingManager = DrawingManager;
    exports.DrawingManagerF = DrawingManagerF;
    exports.FLOAT_PANE = FLOAT_PANE;
    exports.GoogleMap = GoogleMap;
    exports.GoogleMapsMarkerClusterer = index_esm;
    exports.GoogleMarkerClusterer = GoogleMarkerClusterer$1;
    exports.GroundOverlay = GroundOverlay;
    exports.GroundOverlayF = GroundOverlayF;
    exports.HeatmapLayer = HeatmapLayer;
    exports.HeatmapLayerF = HeatmapLayerF;
    exports.InfoBox = InfoBoxComponent;
    exports.InfoBoxF = InfoBoxF;
    exports.InfoWindow = InfoWindow;
    exports.InfoWindowF = InfoWindowF;
    exports.KmlLayer = KmlLayer;
    exports.LoadScript = LoadScript;
    exports.LoadScriptNext = LoadScriptNext$1;
    exports.MAP_PANE = MAP_PANE;
    exports.MARKER_LAYER = MARKER_LAYER;
    exports.MapContext = MapContext;
    exports.Marker = Marker;
    exports.MarkerClusterer = ClustererComponent;
    exports.MarkerClustererF = MarkerClustererF;
    exports.MarkerF = MarkerF;
    exports.OVERLAY_LAYER = OVERLAY_LAYER;
    exports.OVERLAY_MOUSE_TARGET = OVERLAY_MOUSE_TARGET;
    exports.OverlayView = OverlayView;
    exports.OverlayViewF = OverlayViewF;
    exports.Polygon = Polygon;
    exports.PolygonF = PolygonF;
    exports.Polyline = Polyline;
    exports.PolylineF = PolylineF;
    exports.Rectangle = Rectangle;
    exports.RectangleF = RectangleF;
    exports.StandaloneSearchBox = StandaloneSearchBox;
    exports.StreetViewPanorama = StreetViewPanorama;
    exports.StreetViewService = StreetViewService;
    exports.TrafficLayer = TrafficLayer;
    exports.TrafficLayerF = TrafficLayerF;
    exports.TransitLayer = TransitLayer;
    exports.TransitLayerF = TransitLayerF;
    exports.useGoogleMap = useGoogleMap;
    exports.useJsApiLoader = useJsApiLoader;
    exports.useLoadScript = useLoadScript;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=umd.js.map
