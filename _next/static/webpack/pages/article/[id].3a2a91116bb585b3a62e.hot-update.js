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
              objectFit: 'contain',
              maxHeight: '400px'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXJ0aWNsZS8vaW5kZXguanMiXSwibmFtZXMiOlsiZWFzaW5nIiwiZmFkZUluVXAiLCJpbml0aWFsIiwieSIsInNjYWxlIiwib3BhY2l0eSIsImFuaW1hdGUiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJlYXNlIiwiZXhpdCIsInRyYW5zZm9ybU9yaWdpbiIsInN0YWdnZXIiLCJzdGFnZ2VyQ2hpbGRyZW4iLCJzdGFnZ2VyRGlyZWN0aW9uIiwiYXJ0aWNsZSIsImNvbnNvbGUiLCJsb2ciLCJ3aWR0aCIsImhlaWdodCIsIm9iamVjdEZpdCIsIm1heEhlaWdodCIsImltYWdlcHJlZml4IiwiaW1hZ2UiLCJzZXJ2ZXIiLCJ0aXRsZSIsImJvZHkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Q0FFQTs7QUFDQTtDQUVBOztBQUdBLElBQU1BLE1BQU0sR0FBRyxDQUFDLEdBQUQsRUFBTSxDQUFDLElBQVAsRUFBYSxJQUFiLEVBQW1CLElBQW5CLENBQWY7QUFFQSxJQUFNQyxRQUFRLEdBQUc7QUFDZkMsU0FBTyxFQUFFO0FBQ1BDLEtBQUMsRUFBRSxDQUFDLEVBREc7QUFFUEMsU0FBSyxFQUFFLEdBRkE7QUFHUEMsV0FBTyxFQUFFO0FBSEYsR0FETTtBQU1mQyxTQUFPLEVBQUU7QUFDUEgsS0FBQyxFQUFFLENBREk7QUFFUEMsU0FBSyxFQUFFLENBRkE7QUFHUEMsV0FBTyxFQUFFLENBSEY7QUFJUEUsY0FBVSxFQUFFO0FBQ1ZDLGNBQVEsRUFBRSxHQURBO0FBRVZDLFVBQUksRUFBRVQsTUFGSSxDQUdWOztBQUhVO0FBSkwsR0FOTTtBQWdCZlUsTUFBSSxFQUFFO0FBQUVQLEtBQUMsRUFBRSxDQUFMO0FBQVFDLFNBQUssRUFBRSxHQUFmO0FBQW9CQyxXQUFPLEVBQUUsQ0FBN0I7QUFBZ0NNLG1CQUFlLEVBQUU7QUFBakQ7QUFoQlMsQ0FBakI7QUFtQkEsSUFBTUMsT0FBTyxHQUFHO0FBQ2ROLFNBQU8sRUFBRTtBQUNQQyxjQUFVLEVBQUU7QUFDVk0scUJBQWUsRUFBRTtBQURQO0FBREwsR0FESztBQU1kSCxNQUFJLEVBQUU7QUFDSkgsY0FBVSxFQUFFO0FBQ1ZNLHFCQUFlLEVBQUUsR0FEUDtBQUVWQyxzQkFBZ0IsRUFBRTtBQUZSO0FBRFI7QUFOUSxDQUFoQjs7QUFjQSxJQUFNQyxPQUFPLEdBQUcsdUJBQWlCO0FBQUEsTUFBZEEsT0FBYyxRQUFkQSxPQUFjO0FBQy9CO0FBQ0E7QUFDQUMsU0FBTyxDQUFDQyxHQUFSLENBQVlGLE9BQVo7QUFDQSxzQkFDRSxxRUFBQyxvREFBRCxDQUFRLEdBQVI7QUFDRSxZQUFRLEVBQUVILE9BRFo7QUFFRSxXQUFPLEVBQUMsU0FGVjtBQUdFLFdBQU8sRUFBQyxTQUhWO0FBSUUsUUFBSSxFQUFDLE1BSlAsQ0FLRTtBQUxGO0FBQUEsMkJBT0U7QUFBSyxlQUFTLEVBQUMsVUFBZjtBQUFBLDhCQUNFO0FBQUssaUJBQVMsRUFBQyxlQUFmO0FBQUEsK0JBQ0U7QUFDRSxtQkFBUyxFQUFDLHFCQURaO0FBRUUsZUFBSyxFQUFFLEVBRlQsQ0FHRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVRGO0FBQUEsa0NBV0U7QUFDRSxpQkFBSyxFQUFFO0FBQUVNLG1CQUFLLEVBQUUsTUFBVDtBQUFpQkMsb0JBQU0sRUFBRSxNQUF6QjtBQUFpQ0MsdUJBQVMsRUFBRSxTQUE1QztBQUF1REMsdUJBQVMsRUFBRTtBQUFsRSxhQURULENBRUU7QUFGRjtBQUdFLGVBQUcsWUFBS0MseURBQUwsK0JBQXFDUCxPQUFPLENBQUNRLEtBQTdDLENBSEwsQ0FJRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBWEYsRUFxQkdQLE9BQU8sQ0FBQ0MsR0FBUixXQUFlTyxvREFBZixxQkFBZ0NULE9BQU8sQ0FBQ1EsS0FBeEMsRUFyQkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBMkJFO0FBQUssaUJBQVMsRUFBQyxnQkFBZjtBQUFBLGdDQUNFLHFFQUFDLG9EQUFELENBQVEsRUFBUjtBQUNFLG1CQUFTLEVBQUMsV0FEWjtBQUVFLGtCQUFRLEVBQUV0QixRQUZaLENBR0U7QUFDQTtBQUNBO0FBTEY7QUFBQSxvQkFPR2MsT0FBTyxDQUFDVTtBQVBYO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFVRSxxRUFBQyxvREFBRCxDQUFRLENBQVI7QUFDRSxtQkFBUyxFQUFDLFdBRFo7QUFFRSxrQkFBUSxFQUFFeEIsUUFGWixDQUdFO0FBQ0E7QUFDQTtBQUxGO0FBQUEsb0JBT0djLE9BQU8sQ0FBQ1c7QUFQWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVZGLGVBbUJFLHFFQUFDLG9EQUFELENBQVEsR0FBUjtBQUNFLGtCQUFRLEVBQUV6QixRQURaLENBRUU7QUFDQTtBQUNBO0FBSkY7QUFBQSxpQ0FNRSxxRUFBQyxnREFBRDtBQUFNLGdCQUFJLEVBQUMsR0FBWDtBQUFBLG1DQUNFO0FBQU0sdUJBQVMsRUFBQyxlQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFORjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQW5CRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUEzQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBb0VELENBeEVELEMsQ0EwRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBNkJlYyxzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9hcnRpY2xlL1tpZF0uM2EyYTkxMTE2YmI1ODViM2E2MmUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCB7dXNlUm91dGVyfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG4vLyBpbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcclxuaW1wb3J0IHsgc2VydmVyLCBpbWFnZXByZWZpeCB9IGZyb20gJy4uLy4uLy4uL2NvbmZpZy9pbmRleCdcclxuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbidcclxuLy8gaW1wb3J0IHZhY2F0aW9uIGZyb20gJy4vLi4vLi4vLi4vaW1hZ2VzJ1xyXG5pbXBvcnQgeyBhcnRpY2xlcyB9IGZyb20gJy4uLy4uLy4uL2RhdGEnXHJcblxyXG5jb25zdCBlYXNpbmcgPSBbMC42LCAtMC4wNSwgMC4wMSwgMC45OV1cclxuXHJcbmNvbnN0IGZhZGVJblVwID0ge1xyXG4gIGluaXRpYWw6IHtcclxuICAgIHk6IC00NyxcclxuICAgIHNjYWxlOiAwLjksXHJcbiAgICBvcGFjaXR5OiAwXHJcbiAgfSxcclxuICBhbmltYXRlOiB7XHJcbiAgICB5OiAwLFxyXG4gICAgc2NhbGU6IDEsXHJcbiAgICBvcGFjaXR5OiAxLFxyXG4gICAgdHJhbnNpdGlvbjoge1xyXG4gICAgICBkdXJhdGlvbjogMC41LFxyXG4gICAgICBlYXNlOiBlYXNpbmdcclxuICAgICAgLy8gICBzdGFnZ2VyQ2hpbGRyZW46IDAuMVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgZXhpdDogeyB5OiAwLCBzY2FsZTogMC45LCBvcGFjaXR5OiAwLCB0cmFuc2Zvcm1PcmlnaW46ICdsZWZ0IHRvcCcgfVxyXG59XHJcblxyXG5jb25zdCBzdGFnZ2VyID0ge1xyXG4gIGFuaW1hdGU6IHtcclxuICAgIHRyYW5zaXRpb246IHtcclxuICAgICAgc3RhZ2dlckNoaWxkcmVuOiAwLjFcclxuICAgIH1cclxuICB9LFxyXG4gIGV4aXQ6IHtcclxuICAgIHRyYW5zaXRpb246IHtcclxuICAgICAgc3RhZ2dlckNoaWxkcmVuOiAwLjEsXHJcbiAgICAgIHN0YWdnZXJEaXJlY3Rpb246IDFcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IGFydGljbGUgPSAoeyBhcnRpY2xlIH0pID0+IHtcclxuICAvLyAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgLy8gICBjb25zdCB7IGlkIH0gPSByb3V0ZXIucXVlcnlcclxuICBjb25zb2xlLmxvZyhhcnRpY2xlKVxyXG4gIHJldHVybiAoXHJcbiAgICA8bW90aW9uLmRpdlxyXG4gICAgICB2YXJpYW50cz17c3RhZ2dlcn1cclxuICAgICAgaW5pdGlhbD0naW5pdGlhbCdcclxuICAgICAgYW5pbWF0ZT0nYW5pbWF0ZSdcclxuICAgICAgZXhpdD0nZXhpdCdcclxuICAgICAgLy8gICBleGl0PXt7IG9wYWNpdHk6IDAgfX1cclxuICAgID5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J3NBcnRpY2xlJz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc0FydGljbGUtbGVmdCc+XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT0nc0FydGljbGUtbGVmdC1pbWFnZSdcclxuICAgICAgICAgICAgc3R5bGU9e3t9fVxyXG4gICAgICAgICAgICAvLyBzdHlsZT17e1xyXG4gICAgICAgICAgICAvLyAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgICAgICAgICAvLyAgIHdpZHRoOiAnMjAwcHgnLFxyXG4gICAgICAgICAgICAvLyAgIGhlaWdodDogJzIwMHB4JyxcclxuICAgICAgICAgICAgLy8gICBtYXhIZWlnaHQ6ICcyMDBweCcsXHJcbiAgICAgICAgICAgIC8vICAgbWF4V2lkdGg6ICcyMDBweCdcclxuICAgICAgICAgICAgLy8gfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScsIGhlaWdodDogJzEwMCUnLCBvYmplY3RGaXQ6ICdjb250YWluJywgbWF4SGVpZ2h0OiAnNDAwcHgnIH19XHJcbiAgICAgICAgICAgICAgLy8gc3JjPXtgLy4uLy4uLy4uL2ltYWdlcy8ke2FydGljbGUuaW1hZ2V9YH1cclxuICAgICAgICAgICAgICBzcmM9e2Ake2ltYWdlcHJlZml4fS9pbWFnZXMvT3B0aW1pemVkLyR7YXJ0aWNsZS5pbWFnZX1gfVxyXG4gICAgICAgICAgICAgIC8vIGFsdD0nUGljdHVyZSBvZiB0aGUgYXV0aG9yJ1xyXG4gICAgICAgICAgICAgIC8vIHdpZHRoPXsnYXV0byd9XHJcbiAgICAgICAgICAgICAgLy8gaGVpZ2h0PXsnYXV0byd9XHJcbiAgICAgICAgICAgICAgLy8gbGF5b3V0PSdmaWxsJ1xyXG4gICAgICAgICAgICAgIC8vIG9iamVjdEZpdD0nY29udGFpbidcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAge2NvbnNvbGUubG9nKGAke3NlcnZlcn0vaW1hZ2VzLyR7YXJ0aWNsZS5pbWFnZX1gKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc0FydGljbGUtcmlnaHQnPlxyXG4gICAgICAgICAgPG1vdGlvbi5oMVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9J2ZvbnQtZ3JheSdcclxuICAgICAgICAgICAgdmFyaWFudHM9e2ZhZGVJblVwfVxyXG4gICAgICAgICAgICAvLyBpbml0aWFsPSdpbml0aWFsJ1xyXG4gICAgICAgICAgICAvLyBhbmltYXRlPSdhbmltYXRlJ1xyXG4gICAgICAgICAgICAvLyBleGl0PSdleGl0J1xyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7YXJ0aWNsZS50aXRsZX1cclxuICAgICAgICAgIDwvbW90aW9uLmgxPlxyXG4gICAgICAgICAgPG1vdGlvbi5wXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT0ndGV4dC1mYWRlJ1xyXG4gICAgICAgICAgICB2YXJpYW50cz17ZmFkZUluVXB9XHJcbiAgICAgICAgICAgIC8vIGluaXRpYWw9J2luaXRpYWwnXHJcbiAgICAgICAgICAgIC8vIGFuaW1hdGU9J2FuaW1hdGUnXHJcbiAgICAgICAgICAgIC8vIGV4aXQ9J2V4aXQnXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHthcnRpY2xlLmJvZHl9XHJcbiAgICAgICAgICA8L21vdGlvbi5wPlxyXG4gICAgICAgICAgPG1vdGlvbi5kaXZcclxuICAgICAgICAgICAgdmFyaWFudHM9e2ZhZGVJblVwfVxyXG4gICAgICAgICAgICAvLyBpbml0aWFsPSdpbml0aWFsJ1xyXG4gICAgICAgICAgICAvLyBhbmltYXRlPSdhbmltYXRlJ1xyXG4gICAgICAgICAgICAvLyBleGl0PSdleGl0J1xyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPScvJz5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2dsb2JhbC1idXR0b24nPkdvIEJhY2s8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvbW90aW9uLmRpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L21vdGlvbi5kaXY+XHJcbiAgKVxyXG59XHJcblxyXG4vLyBleHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMgKGNvbnRleHQpID0+IHtcclxuLy8gICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vcG9zdHMvJHtjb250ZXh0LnBhcmFtcy5pZH1gKVxyXG4vLyAgICAgY29uc3QgYXJ0aWNsZSA9IGF3YWl0IHJlcy5qc29uKClcclxuLy8gICAgIHJldHVybiB7XHJcbi8vICAgICAgICAgcHJvcHM6IHtcclxuLy8gICAgICAgICAgICAgYXJ0aWNsZVxyXG4vLyAgICAgICAgIH1cclxuLy8gICAgIH1cclxuLy8gfVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gYXN5bmMgY29udGV4dCA9PiB7XHJcbiAgLy8gICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcclxuICAvLyAgICAgYGh0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS9wb3N0cy8ke2NvbnRleHQucGFyYW1zLmlkfWBcclxuICAvLyAgIClcclxuICAvLyBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHtzZXJ2ZXJ9L2FwaS9hcnRpY2xlcy8ke2NvbnRleHQucGFyYW1zLmlkfWApXHJcbiAgLy8gY29uc3QgYXJ0aWNsZSA9IGF3YWl0IHJlcy5qc29uKClcclxuICBjb25zdCBhcnRpY2xlID0gYXJ0aWNsZXMuZmluZChhcnRpY2xlID0+IGFydGljbGUuaWQgPT09IGNvbnRleHQucGFyYW1zLmlkKVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgYXJ0aWNsZVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1BhdGhzID0gYXN5bmMgKCkgPT4ge1xyXG4gIC8vICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS9wb3N0c2ApXHJcbiAgLy8gY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7c2VydmVyfS9hcGkvYXJ0aWNsZXNgKVxyXG4gIC8vIGNvbnN0IGFydGljbGVzID0gYXdhaXQgcmVzLmpzb24oKVxyXG5cclxuICBjb25zdCBpZHMgPSBhcnRpY2xlcy5tYXAoYXJ0aWNsZSA9PiBhcnRpY2xlLmlkKVxyXG4gIGNvbnN0IHBhdGhzID0gaWRzLm1hcChpZCA9PiAoeyBwYXJhbXM6IHsgaWQ6IGlkLnRvU3RyaW5nKCkgfSB9KSlcclxuXHJcbiAgLy8gICBjb25zb2xlLmxvZyhwYXRocylcclxuICByZXR1cm4geyBwYXRocywgZmFsbGJhY2s6IGZhbHNlIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXJ0aWNsZVxyXG4iXSwic291cmNlUm9vdCI6IiJ9