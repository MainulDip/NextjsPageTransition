webpackHotUpdate_N_E("pages/article/[id]",{

/***/ "./pages/article/[id]/index.js":
/*!*************************************!*\
  !*** ./pages/article/[id]/index.js ***!
  \*************************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../config/index */ "./config/index.js");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/es/index.js");


var _jsxFileName = "J:\\ongoing\\GatsbyWordPress\\nextjsreact\\nextheadless\\pages\\article\\[id]\\index.js",
    _this = undefined;

// import {useRouter} from 'next/router'
 // import Image from 'next/image'


 // import vacation from './../../../images'

var easing = [0.6, -0.05, 0.01, 0.99];
var fadeInUp = {
  initial: {
    y: -47,
    scale: 0.9,
    opacity: 0
  },
  animate: {
    y: 0,
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: easing //   staggerChildren: 0.1

    }
  },
  exit: {
    y: 0,
    scale: 0.9,
    opacity: 0,
    transformOrigin: 'left top'
  }
};
var stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  },
  exit: {
    transition: {
      staggerChildren: 0.1,
      staggerDirection: 1
    }
  }
};

var article = function article(_ref) {
  var article = _ref.article;
  //   const router = useRouter()
  //   const { id } = router.query
  console.log(article);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(framer_motion__WEBPACK_IMPORTED_MODULE_3__["motion"].div, {
    variants: stagger,
    initial: "initial",
    animate: "animate",
    exit: "exit" //   exit={{ opacity: 0 }}
    ,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "sArticle",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "sArticle-left",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "sArticle-left-image",
          style: {} // style={{
          //   position: 'relative',
          //   width: '200px',
          //   height: '200px',
          //   maxHeight: '200px',
          //   maxWidth: '200px'
          // }}
          ,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            style: {
              width: '100%',
              height: '100%',
              objectFit: 'contain'
            } // src={`/../../../images/${article.image}`}
            ,
            src: "".concat(_config_index__WEBPACK_IMPORTED_MODULE_2__["imageprefix"], "/images/Optimized/").concat(article.image) // alt='Picture of the author'
            // width={'auto'}
            // height={'auto'}
            // layout='fill'
            // objectFit='contain'

          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 69,
            columnNumber: 13
          }, _this), console.log("".concat(_config_index__WEBPACK_IMPORTED_MODULE_2__["server"], "/images/").concat(article.image))]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "sArticle-right",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(framer_motion__WEBPACK_IMPORTED_MODULE_3__["motion"].h1, {
          className: "font-gray",
          variants: fadeInUp // initial='initial'
          // animate='animate'
          // exit='exit'
          ,
          children: article.title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(framer_motion__WEBPACK_IMPORTED_MODULE_3__["motion"].p, {
          className: "text-fade",
          variants: fadeInUp // initial='initial'
          // animate='animate'
          // exit='exit'
          ,
          children: article.body
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(framer_motion__WEBPACK_IMPORTED_MODULE_3__["motion"].div, {
          variants: fadeInUp // initial='initial'
          // animate='animate'
          // exit='exit'
          ,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
            href: "/",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              className: "global-button",
              children: "Go Back"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 109,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 108,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 102,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 49,
    columnNumber: 5
  }, _this);
}; // export const getServerSideProps = async (context) => {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)
//     const article = await res.json()
//     return {
//         props: {
//             article
//         }
//     }
// }


var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (article);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXJ0aWNsZS8vaW5kZXguanMiXSwibmFtZXMiOlsiZWFzaW5nIiwiZmFkZUluVXAiLCJpbml0aWFsIiwieSIsInNjYWxlIiwib3BhY2l0eSIsImFuaW1hdGUiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJlYXNlIiwiZXhpdCIsInRyYW5zZm9ybU9yaWdpbiIsInN0YWdnZXIiLCJzdGFnZ2VyQ2hpbGRyZW4iLCJzdGFnZ2VyRGlyZWN0aW9uIiwiYXJ0aWNsZSIsImNvbnNvbGUiLCJsb2ciLCJ3aWR0aCIsImhlaWdodCIsIm9iamVjdEZpdCIsImltYWdlcHJlZml4IiwiaW1hZ2UiLCJzZXJ2ZXIiLCJ0aXRsZSIsImJvZHkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Q0FFQTs7QUFDQTtDQUVBOztBQUdBLElBQU1BLE1BQU0sR0FBRyxDQUFDLEdBQUQsRUFBTSxDQUFDLElBQVAsRUFBYSxJQUFiLEVBQW1CLElBQW5CLENBQWY7QUFFQSxJQUFNQyxRQUFRLEdBQUc7QUFDZkMsU0FBTyxFQUFFO0FBQ1BDLEtBQUMsRUFBRSxDQUFDLEVBREc7QUFFUEMsU0FBSyxFQUFFLEdBRkE7QUFHUEMsV0FBTyxFQUFFO0FBSEYsR0FETTtBQU1mQyxTQUFPLEVBQUU7QUFDUEgsS0FBQyxFQUFFLENBREk7QUFFUEMsU0FBSyxFQUFFLENBRkE7QUFHUEMsV0FBTyxFQUFFLENBSEY7QUFJUEUsY0FBVSxFQUFFO0FBQ1ZDLGNBQVEsRUFBRSxHQURBO0FBRVZDLFVBQUksRUFBRVQsTUFGSSxDQUdWOztBQUhVO0FBSkwsR0FOTTtBQWdCZlUsTUFBSSxFQUFFO0FBQUVQLEtBQUMsRUFBRSxDQUFMO0FBQVFDLFNBQUssRUFBRSxHQUFmO0FBQW9CQyxXQUFPLEVBQUUsQ0FBN0I7QUFBZ0NNLG1CQUFlLEVBQUU7QUFBakQ7QUFoQlMsQ0FBakI7QUFtQkEsSUFBTUMsT0FBTyxHQUFHO0FBQ2ROLFNBQU8sRUFBRTtBQUNQQyxjQUFVLEVBQUU7QUFDVk0scUJBQWUsRUFBRTtBQURQO0FBREwsR0FESztBQU1kSCxNQUFJLEVBQUU7QUFDSkgsY0FBVSxFQUFFO0FBQ1ZNLHFCQUFlLEVBQUUsR0FEUDtBQUVWQyxzQkFBZ0IsRUFBRTtBQUZSO0FBRFI7QUFOUSxDQUFoQjs7QUFjQSxJQUFNQyxPQUFPLEdBQUcsdUJBQWlCO0FBQUEsTUFBZEEsT0FBYyxRQUFkQSxPQUFjO0FBQy9CO0FBQ0E7QUFDQUMsU0FBTyxDQUFDQyxHQUFSLENBQVlGLE9BQVo7QUFDQSxzQkFDRSxxRUFBQyxvREFBRCxDQUFRLEdBQVI7QUFDRSxZQUFRLEVBQUVILE9BRFo7QUFFRSxXQUFPLEVBQUMsU0FGVjtBQUdFLFdBQU8sRUFBQyxTQUhWO0FBSUUsUUFBSSxFQUFDLE1BSlAsQ0FLRTtBQUxGO0FBQUEsMkJBT0U7QUFBSyxlQUFTLEVBQUMsVUFBZjtBQUFBLDhCQUNFO0FBQUssaUJBQVMsRUFBQyxlQUFmO0FBQUEsK0JBQ0U7QUFDRSxtQkFBUyxFQUFDLHFCQURaO0FBRUUsZUFBSyxFQUFFLEVBRlQsQ0FHRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVRGO0FBQUEsa0NBV0U7QUFDRSxpQkFBSyxFQUFFO0FBQUVNLG1CQUFLLEVBQUUsTUFBVDtBQUFpQkMsb0JBQU0sRUFBRSxNQUF6QjtBQUFpQ0MsdUJBQVMsRUFBRTtBQUE1QyxhQURULENBRUU7QUFGRjtBQUdFLGVBQUcsWUFBS0MseURBQUwsK0JBQXFDTixPQUFPLENBQUNPLEtBQTdDLENBSEwsQ0FJRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBWEYsRUFxQkdOLE9BQU8sQ0FBQ0MsR0FBUixXQUFlTSxvREFBZixxQkFBZ0NSLE9BQU8sQ0FBQ08sS0FBeEMsRUFyQkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBMkJFO0FBQUssaUJBQVMsRUFBQyxnQkFBZjtBQUFBLGdDQUNFLHFFQUFDLG9EQUFELENBQVEsRUFBUjtBQUNFLG1CQUFTLEVBQUMsV0FEWjtBQUVFLGtCQUFRLEVBQUVyQixRQUZaLENBR0U7QUFDQTtBQUNBO0FBTEY7QUFBQSxvQkFPR2MsT0FBTyxDQUFDUztBQVBYO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFVRSxxRUFBQyxvREFBRCxDQUFRLENBQVI7QUFDRSxtQkFBUyxFQUFDLFdBRFo7QUFFRSxrQkFBUSxFQUFFdkIsUUFGWixDQUdFO0FBQ0E7QUFDQTtBQUxGO0FBQUEsb0JBT0djLE9BQU8sQ0FBQ1U7QUFQWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVZGLGVBbUJFLHFFQUFDLG9EQUFELENBQVEsR0FBUjtBQUNFLGtCQUFRLEVBQUV4QixRQURaLENBRUU7QUFDQTtBQUNBO0FBSkY7QUFBQSxpQ0FNRSxxRUFBQyxnREFBRDtBQUFNLGdCQUFJLEVBQUMsR0FBWDtBQUFBLG1DQUNFO0FBQU0sdUJBQVMsRUFBQyxlQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFORjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQW5CRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUEzQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBb0VELENBeEVELEMsQ0EwRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBNkJlYyxzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9hcnRpY2xlL1tpZF0uOWVhNGVmY2IxMWJhNDMzMTQ3NDguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCB7dXNlUm91dGVyfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG4vLyBpbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcclxuaW1wb3J0IHsgc2VydmVyLCBpbWFnZXByZWZpeCB9IGZyb20gJy4uLy4uLy4uL2NvbmZpZy9pbmRleCdcclxuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbidcclxuLy8gaW1wb3J0IHZhY2F0aW9uIGZyb20gJy4vLi4vLi4vLi4vaW1hZ2VzJ1xyXG5pbXBvcnQgeyBhcnRpY2xlcyB9IGZyb20gJy4uLy4uLy4uL2RhdGEnXHJcblxyXG5jb25zdCBlYXNpbmcgPSBbMC42LCAtMC4wNSwgMC4wMSwgMC45OV1cclxuXHJcbmNvbnN0IGZhZGVJblVwID0ge1xyXG4gIGluaXRpYWw6IHtcclxuICAgIHk6IC00NyxcclxuICAgIHNjYWxlOiAwLjksXHJcbiAgICBvcGFjaXR5OiAwXHJcbiAgfSxcclxuICBhbmltYXRlOiB7XHJcbiAgICB5OiAwLFxyXG4gICAgc2NhbGU6IDEsXHJcbiAgICBvcGFjaXR5OiAxLFxyXG4gICAgdHJhbnNpdGlvbjoge1xyXG4gICAgICBkdXJhdGlvbjogMC41LFxyXG4gICAgICBlYXNlOiBlYXNpbmdcclxuICAgICAgLy8gICBzdGFnZ2VyQ2hpbGRyZW46IDAuMVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgZXhpdDogeyB5OiAwLCBzY2FsZTogMC45LCBvcGFjaXR5OiAwLCB0cmFuc2Zvcm1PcmlnaW46ICdsZWZ0IHRvcCcgfVxyXG59XHJcblxyXG5jb25zdCBzdGFnZ2VyID0ge1xyXG4gIGFuaW1hdGU6IHtcclxuICAgIHRyYW5zaXRpb246IHtcclxuICAgICAgc3RhZ2dlckNoaWxkcmVuOiAwLjFcclxuICAgIH1cclxuICB9LFxyXG4gIGV4aXQ6IHtcclxuICAgIHRyYW5zaXRpb246IHtcclxuICAgICAgc3RhZ2dlckNoaWxkcmVuOiAwLjEsXHJcbiAgICAgIHN0YWdnZXJEaXJlY3Rpb246IDFcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IGFydGljbGUgPSAoeyBhcnRpY2xlIH0pID0+IHtcclxuICAvLyAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgLy8gICBjb25zdCB7IGlkIH0gPSByb3V0ZXIucXVlcnlcclxuICBjb25zb2xlLmxvZyhhcnRpY2xlKVxyXG4gIHJldHVybiAoXHJcbiAgICA8bW90aW9uLmRpdlxyXG4gICAgICB2YXJpYW50cz17c3RhZ2dlcn1cclxuICAgICAgaW5pdGlhbD0naW5pdGlhbCdcclxuICAgICAgYW5pbWF0ZT0nYW5pbWF0ZSdcclxuICAgICAgZXhpdD0nZXhpdCdcclxuICAgICAgLy8gICBleGl0PXt7IG9wYWNpdHk6IDAgfX1cclxuICAgID5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J3NBcnRpY2xlJz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc0FydGljbGUtbGVmdCc+XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT0nc0FydGljbGUtbGVmdC1pbWFnZSdcclxuICAgICAgICAgICAgc3R5bGU9e3t9fVxyXG4gICAgICAgICAgICAvLyBzdHlsZT17e1xyXG4gICAgICAgICAgICAvLyAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgICAgICAgICAvLyAgIHdpZHRoOiAnMjAwcHgnLFxyXG4gICAgICAgICAgICAvLyAgIGhlaWdodDogJzIwMHB4JyxcclxuICAgICAgICAgICAgLy8gICBtYXhIZWlnaHQ6ICcyMDBweCcsXHJcbiAgICAgICAgICAgIC8vICAgbWF4V2lkdGg6ICcyMDBweCdcclxuICAgICAgICAgICAgLy8gfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScsIGhlaWdodDogJzEwMCUnLCBvYmplY3RGaXQ6ICdjb250YWluJyB9fVxyXG4gICAgICAgICAgICAgIC8vIHNyYz17YC8uLi8uLi8uLi9pbWFnZXMvJHthcnRpY2xlLmltYWdlfWB9XHJcbiAgICAgICAgICAgICAgc3JjPXtgJHtpbWFnZXByZWZpeH0vaW1hZ2VzL09wdGltaXplZC8ke2FydGljbGUuaW1hZ2V9YH1cclxuICAgICAgICAgICAgICAvLyBhbHQ9J1BpY3R1cmUgb2YgdGhlIGF1dGhvcidcclxuICAgICAgICAgICAgICAvLyB3aWR0aD17J2F1dG8nfVxyXG4gICAgICAgICAgICAgIC8vIGhlaWdodD17J2F1dG8nfVxyXG4gICAgICAgICAgICAgIC8vIGxheW91dD0nZmlsbCdcclxuICAgICAgICAgICAgICAvLyBvYmplY3RGaXQ9J2NvbnRhaW4nXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIHtjb25zb2xlLmxvZyhgJHtzZXJ2ZXJ9L2ltYWdlcy8ke2FydGljbGUuaW1hZ2V9YCl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NBcnRpY2xlLXJpZ2h0Jz5cclxuICAgICAgICAgIDxtb3Rpb24uaDFcclxuICAgICAgICAgICAgY2xhc3NOYW1lPSdmb250LWdyYXknXHJcbiAgICAgICAgICAgIHZhcmlhbnRzPXtmYWRlSW5VcH1cclxuICAgICAgICAgICAgLy8gaW5pdGlhbD0naW5pdGlhbCdcclxuICAgICAgICAgICAgLy8gYW5pbWF0ZT0nYW5pbWF0ZSdcclxuICAgICAgICAgICAgLy8gZXhpdD0nZXhpdCdcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge2FydGljbGUudGl0bGV9XHJcbiAgICAgICAgICA8L21vdGlvbi5oMT5cclxuICAgICAgICAgIDxtb3Rpb24ucFxyXG4gICAgICAgICAgICBjbGFzc05hbWU9J3RleHQtZmFkZSdcclxuICAgICAgICAgICAgdmFyaWFudHM9e2ZhZGVJblVwfVxyXG4gICAgICAgICAgICAvLyBpbml0aWFsPSdpbml0aWFsJ1xyXG4gICAgICAgICAgICAvLyBhbmltYXRlPSdhbmltYXRlJ1xyXG4gICAgICAgICAgICAvLyBleGl0PSdleGl0J1xyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7YXJ0aWNsZS5ib2R5fVxyXG4gICAgICAgICAgPC9tb3Rpb24ucD5cclxuICAgICAgICAgIDxtb3Rpb24uZGl2XHJcbiAgICAgICAgICAgIHZhcmlhbnRzPXtmYWRlSW5VcH1cclxuICAgICAgICAgICAgLy8gaW5pdGlhbD0naW5pdGlhbCdcclxuICAgICAgICAgICAgLy8gYW5pbWF0ZT0nYW5pbWF0ZSdcclxuICAgICAgICAgICAgLy8gZXhpdD0nZXhpdCdcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj0nLyc+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdnbG9iYWwtYnV0dG9uJz5HbyBCYWNrPC9zcGFuPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8L21vdGlvbi5kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9tb3Rpb24uZGl2PlxyXG4gIClcclxufVxyXG5cclxuLy8gZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jIChjb250ZXh0KSA9PiB7XHJcbi8vICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3Bvc3RzLyR7Y29udGV4dC5wYXJhbXMuaWR9YClcclxuLy8gICAgIGNvbnN0IGFydGljbGUgPSBhd2FpdCByZXMuanNvbigpXHJcbi8vICAgICByZXR1cm4ge1xyXG4vLyAgICAgICAgIHByb3BzOiB7XHJcbi8vICAgICAgICAgICAgIGFydGljbGVcclxuLy8gICAgICAgICB9XHJcbi8vICAgICB9XHJcbi8vIH1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9IGFzeW5jIGNvbnRleHQgPT4ge1xyXG4gIC8vICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXHJcbiAgLy8gICAgIGBodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vcG9zdHMvJHtjb250ZXh0LnBhcmFtcy5pZH1gXHJcbiAgLy8gICApXHJcbiAgLy8gY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7c2VydmVyfS9hcGkvYXJ0aWNsZXMvJHtjb250ZXh0LnBhcmFtcy5pZH1gKVxyXG4gIC8vIGNvbnN0IGFydGljbGUgPSBhd2FpdCByZXMuanNvbigpXHJcbiAgY29uc3QgYXJ0aWNsZSA9IGFydGljbGVzLmZpbmQoYXJ0aWNsZSA9PiBhcnRpY2xlLmlkID09PSBjb250ZXh0LnBhcmFtcy5pZClcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIGFydGljbGVcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQYXRocyA9IGFzeW5jICgpID0+IHtcclxuICAvLyAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vcG9zdHNgKVxyXG4gIC8vIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke3NlcnZlcn0vYXBpL2FydGljbGVzYClcclxuICAvLyBjb25zdCBhcnRpY2xlcyA9IGF3YWl0IHJlcy5qc29uKClcclxuXHJcbiAgY29uc3QgaWRzID0gYXJ0aWNsZXMubWFwKGFydGljbGUgPT4gYXJ0aWNsZS5pZClcclxuICBjb25zdCBwYXRocyA9IGlkcy5tYXAoaWQgPT4gKHsgcGFyYW1zOiB7IGlkOiBpZC50b1N0cmluZygpIH0gfSkpXHJcblxyXG4gIC8vICAgY29uc29sZS5sb2cocGF0aHMpXHJcbiAgcmV0dXJuIHsgcGF0aHMsIGZhbGxiYWNrOiBmYWxzZSB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFydGljbGVcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==