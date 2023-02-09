"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/webhook";
exports.ids = ["pages/api/webhook"];
exports.modules = {

/***/ "firebase-admin":
/*!*********************************!*\
  !*** external "firebase-admin" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("firebase-admin");

/***/ }),

/***/ "micro":
/*!************************!*\
  !*** external "micro" ***!
  \************************/
/***/ ((module) => {

module.exports = require("micro");

/***/ }),

/***/ "stripe":
/*!*************************!*\
  !*** external "stripe" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stripe");

/***/ }),

/***/ "(api)/./src/pages/api/webhook.js":
/*!**********************************!*\
  !*** ./src/pages/api/webhook.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"config\": () => (/* binding */ config),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var micro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! micro */ \"micro\");\n/* harmony import */ var micro__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(micro__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var firebase_admin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase-admin */ \"firebase-admin\");\n/* harmony import */ var firebase_admin__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_admin__WEBPACK_IMPORTED_MODULE_1__);\n\n\n//Secure a connection to FIREBASE from the backend\nconst serviceAccount = __webpack_require__(/*! ../../../permissions.json */ \"(api)/./permissions.json\");\nconst app = !firebase_admin__WEBPACK_IMPORTED_MODULE_1__.apps.length ? firebase_admin__WEBPACK_IMPORTED_MODULE_1__.initializeApp({\n    credential: firebase_admin__WEBPACK_IMPORTED_MODULE_1__.credential.cert(serviceAccount)\n}) : firebase_admin__WEBPACK_IMPORTED_MODULE_1__.app();\n//Establish a connection to STRIPE\nconst stripe = __webpack_require__(/*! stripe */ \"stripe\")(process.env.STRIPE_SECRET_KEY);\nconst endpointSecret = process.env.STRIPE_SIGNING_SECRET;\nconst fulfillOrder = async (session)=>{\n    //console.log('fulfilling order', session)\n    return app.firestore().collection(\"users\").doc(session.metadata.email).collection(\"orders\").doc(session.id).set({\n        //  montant: session.total_details ,\n        amount: session.amount_total,\n        amount_shipping: session.total_details.amount_shipping,\n        images: JSON.parse(session.metadata.images),\n        timestamp: firebase_admin__WEBPACK_IMPORTED_MODULE_1__.firestore.FieldValue.serverTimestamp()\n    }).then(()=>{\n        console.log(`SUCCES: Commande ${session.id} ajoute a la base de donnees`);\n    });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    if (req.method === \"POST\") {\n        const requestBuffer = await (0,micro__WEBPACK_IMPORTED_MODULE_0__.buffer)(req);\n        const payload = requestBuffer.toString();\n        const sig = req.headers[\"stripe-signature\"];\n        let event;\n        //Verify that the EVENT posted came from STRIPE \n        try {\n            event = stripe.webhooks.constructEvent(payload, sig, endpointSecret);\n        } catch (err) {\n            console.log(\"Erreur\", err.message);\n            return res.status(400).send(`webhook error: ${err.message}`);\n        }\n        //Handle the checkout..session..completed event\n        if (event.type === \"checkout.session.completed\") {\n            const session = event.data.object;\n            //Fulfill the orders\n            return fulfillOrder(session).then(()=>res.status(200)).catch((err)=>res.status(400).send(`webhook Error: ${err.message}`));\n        }\n    }\n});\nconst config = {\n    api: {\n        bodyParser: false,\n        externalResolver: true\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL3dlYmhvb2suanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQWdDO0FBQ087QUFFdkMsa0RBQWtEO0FBQ2xELE1BQU1FLGlCQUFrQkMsbUJBQU9BLENBQUM7QUFDaEMsTUFBTUMsTUFBTSxDQUFDSCx1REFBaUIsR0FDNUJBLHlEQUFtQixDQUFDO0lBQ2xCTyxZQUFZUCwyREFBcUIsQ0FBQ0M7QUFDdEMsS0FDRUQsK0NBQVMsRUFBRTtBQUViLGtDQUFrQztBQUNsQyxNQUFNUyxTQUFTUCxtQkFBT0EsQ0FBQyx3QkFBVVEsUUFBUUMsR0FBRyxDQUFDQyxpQkFBaUI7QUFDOUQsTUFBTUMsaUJBQWlCSCxRQUFRQyxHQUFHLENBQUNHLHFCQUFxQjtBQUN4RCxNQUFNQyxlQUFlLE9BQU9DLFVBQVU7SUFDbEMsMENBQTBDO0lBQzFDLE9BQU9iLElBQ05jLFNBQVMsR0FDVEMsVUFBVSxDQUFDLFNBQ1hDLEdBQUcsQ0FBQ0gsUUFBUUksUUFBUSxDQUFDQyxLQUFLLEVBQzFCSCxVQUFVLENBQUMsVUFDWEMsR0FBRyxDQUFDSCxRQUFRTSxFQUFFLEVBQ2RDLEdBQUcsQ0FBQztRQUNILG9DQUFvQztRQUNsQ0MsUUFBUVIsUUFBUVMsWUFBWTtRQUM1QkMsaUJBQWlCVixRQUFRVyxhQUFhLENBQUNELGVBQWU7UUFFdERFLFFBQVFDLEtBQUtDLEtBQUssQ0FBQ2QsUUFBUUksUUFBUSxDQUFDUSxNQUFNO1FBRTFDRyxXQUFXL0IsZ0ZBQTBDO0lBQ3pELEdBQ0NrQyxJQUFJLENBQUMsSUFBSztRQUNQQyxRQUFRQyxHQUFHLENBQUMsQ0FBQyxpQkFBaUIsRUFBRXBCLFFBQVFNLEVBQUUsQ0FBQyw0QkFBNEIsQ0FBQztJQUM1RTtBQUNKO0FBR0EsaUVBQWUsT0FBT2UsS0FBS0MsTUFBUTtJQUMvQixJQUFJRCxJQUFJRSxNQUFNLEtBQUssUUFBUTtRQUN2QixNQUFNQyxnQkFBZ0IsTUFBTXpDLDZDQUFNQSxDQUFDc0M7UUFDbkMsTUFBTUksVUFBU0QsY0FBY0UsUUFBUTtRQUNyQyxNQUFNQyxNQUFNTixJQUFJTyxPQUFPLENBQUMsbUJBQW1CO1FBRTNDLElBQUlDO1FBRVYsZ0RBQWdEO1FBQzFDLElBQUk7WUFDQUEsUUFBT3BDLE9BQU9xQyxRQUFRLENBQUNDLGNBQWMsQ0FBQ04sU0FBU0UsS0FBSzlCO1FBQ3hELEVBQUMsT0FBT21DLEtBQUk7WUFDUmIsUUFBUUMsR0FBRyxDQUFDLFVBQVVZLElBQUlDLE9BQU87WUFDakMsT0FBT1gsSUFBSVksTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQyxDQUFDLGVBQWUsRUFBRUgsSUFBSUMsT0FBTyxDQUFDLENBQUM7UUFDL0Q7UUFFQSwrQ0FBK0M7UUFFL0MsSUFBSUosTUFBTU8sSUFBSSxLQUFLLDhCQUE4QjtZQUM3QyxNQUFNcEMsVUFBVTZCLE1BQU1RLElBQUksQ0FBQ0MsTUFBTTtZQUVqQyxvQkFBb0I7WUFDcEIsT0FBT3ZDLGFBQWFDLFNBQ25Ca0IsSUFBSSxDQUFDLElBQUlJLElBQUlZLE1BQU0sQ0FBQyxNQUNwQkssS0FBSyxDQUFFUCxDQUFBQSxNQUFPVixJQUFJWSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDLENBQUMsZUFBZSxFQUFFSCxJQUFJQyxPQUFPLENBQUMsQ0FBQztRQUV2RSxDQUFDO0lBRUwsQ0FBQztBQUdMLEdBQUM7QUFFTSxNQUFNTyxTQUFTO0lBQ2xCQyxLQUFLO1FBQ0RDLFlBQVksS0FBSztRQUNqQkMsa0JBQWtCLElBQUk7SUFDMUI7QUFDSixFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2l0aC1yZWR1eC10b29sa2l0Ly4vc3JjL3BhZ2VzL2FwaS93ZWJob29rLmpzPzNmNzQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYnVmZmVyIH0gZnJvbSBcIm1pY3JvXCIgO1xuaW1wb3J0ICogYXMgYWRtaW4gZnJvbSBcImZpcmViYXNlLWFkbWluXCJcblxuLy9TZWN1cmUgYSBjb25uZWN0aW9uIHRvIEZJUkVCQVNFIGZyb20gdGhlIGJhY2tlbmRcbmNvbnN0IHNlcnZpY2VBY2NvdW50ICA9IHJlcXVpcmUoJy4uLy4uLy4uL3Blcm1pc3Npb25zLmpzb24nKTtcbmNvbnN0IGFwcCA9ICFhZG1pbi5hcHBzLmxlbmd0aCBcbj8gYWRtaW4uaW5pdGlhbGl6ZUFwcCh7XG4gICAgY3JlZGVudGlhbDogYWRtaW4uY3JlZGVudGlhbC5jZXJ0KHNlcnZpY2VBY2NvdW50KSxcbn0pIFxuOiBhZG1pbi5hcHAoKTtcblxuLy9Fc3RhYmxpc2ggYSBjb25uZWN0aW9uIHRvIFNUUklQRVxuY29uc3Qgc3RyaXBlID0gcmVxdWlyZSgnc3RyaXBlJykocHJvY2Vzcy5lbnYuU1RSSVBFX1NFQ1JFVF9LRVkpO1xuY29uc3QgZW5kcG9pbnRTZWNyZXQgPSBwcm9jZXNzLmVudi5TVFJJUEVfU0lHTklOR19TRUNSRVQ7XG5jb25zdCBmdWxmaWxsT3JkZXIgPSBhc3luYyAoc2Vzc2lvbik9PntcbiAgICAvL2NvbnNvbGUubG9nKCdmdWxmaWxsaW5nIG9yZGVyJywgc2Vzc2lvbilcbiAgICByZXR1cm4gYXBwXG4gICAgLmZpcmVzdG9yZSgpXG4gICAgLmNvbGxlY3Rpb24oJ3VzZXJzJylcbiAgICAuZG9jKHNlc3Npb24ubWV0YWRhdGEuZW1haWwpXG4gICAgLmNvbGxlY3Rpb24oJ29yZGVycycpXG4gICAgLmRvYyhzZXNzaW9uLmlkKVxuICAgIC5zZXQoe1xuICAgICAgLy8gIG1vbnRhbnQ6IHNlc3Npb24udG90YWxfZGV0YWlscyAsXG4gICAgICAgIGFtb3VudDogc2Vzc2lvbi5hbW91bnRfdG90YWwsXG4gICAgICAgIGFtb3VudF9zaGlwcGluZzogc2Vzc2lvbi50b3RhbF9kZXRhaWxzLmFtb3VudF9zaGlwcGluZyAgLC8vZnJhaXMgbGl2cmFpc29uXG4gICAgICAgXG4gICAgICAgIGltYWdlczogSlNPTi5wYXJzZShzZXNzaW9uLm1ldGFkYXRhLmltYWdlcyksXG4gICAgICAgIFxuICAgICAgICB0aW1lc3RhbXA6IGFkbWluLmZpcmVzdG9yZS5GaWVsZFZhbHVlLnNlcnZlclRpbWVzdGFtcCgpXG4gICAgfSlcbiAgICAudGhlbigoKT0+IHtcbiAgICAgICAgY29uc29sZS5sb2coYFNVQ0NFUzogQ29tbWFuZGUgJHtzZXNzaW9uLmlkfSBham91dGUgYSBsYSBiYXNlIGRlIGRvbm5lZXNgKVxuICAgIH0pXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gICAgaWYgKHJlcS5tZXRob2QgPT09ICdQT1NUJykge1xuICAgICAgICBjb25zdCByZXF1ZXN0QnVmZmVyID0gYXdhaXQgYnVmZmVyKHJlcSk7XG4gICAgICAgIGNvbnN0IHBheWxvYWQgPXJlcXVlc3RCdWZmZXIudG9TdHJpbmcoKSA7XG4gICAgICAgIGNvbnN0IHNpZyA9IHJlcS5oZWFkZXJzW1wic3RyaXBlLXNpZ25hdHVyZVwiXTtcblxuICAgICAgICBsZXQgZXZlbnQgO1xuXG4gIC8vVmVyaWZ5IHRoYXQgdGhlIEVWRU5UIHBvc3RlZCBjYW1lIGZyb20gU1RSSVBFIFxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgZXZlbnQ9IHN0cmlwZS53ZWJob29rcy5jb25zdHJ1Y3RFdmVudChwYXlsb2FkLCBzaWcsIGVuZHBvaW50U2VjcmV0ICk7XG4gICAgICAgIH1jYXRjaCAoZXJyKXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFcnJldXInLCBlcnIubWVzc2FnZSlcbiAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuc2VuZChgd2ViaG9vayBlcnJvcjogJHtlcnIubWVzc2FnZX1gKVxuICAgICAgICB9XG5cbiAgICAgICAgLy9IYW5kbGUgdGhlIGNoZWNrb3V0Li5zZXNzaW9uLi5jb21wbGV0ZWQgZXZlbnRcblxuICAgICAgICBpZiAoZXZlbnQudHlwZSA9PT0gJ2NoZWNrb3V0LnNlc3Npb24uY29tcGxldGVkJykge1xuICAgICAgICAgICAgY29uc3Qgc2Vzc2lvbiA9IGV2ZW50LmRhdGEub2JqZWN0IDtcblxuICAgICAgICAgICAgLy9GdWxmaWxsIHRoZSBvcmRlcnNcbiAgICAgICAgICAgIHJldHVybiBmdWxmaWxsT3JkZXIoc2Vzc2lvbilcbiAgICAgICAgICAgIC50aGVuKCgpPT5yZXMuc3RhdHVzKDIwMCkpXG4gICAgICAgICAgICAuY2F0Y2ggKGVyciA9PiByZXMuc3RhdHVzKDQwMCkuc2VuZChgd2ViaG9vayBFcnJvcjogJHtlcnIubWVzc2FnZX1gKSlcbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIFxuICAgIH1cblxuICAgXG59XG5cbmV4cG9ydCBjb25zdCBjb25maWcgPSB7XG4gICAgYXBpOiB7XG4gICAgICAgIGJvZHlQYXJzZXI6IGZhbHNlICxcbiAgICAgICAgZXh0ZXJuYWxSZXNvbHZlcjogdHJ1ZSAsXG4gICAgfVxufSJdLCJuYW1lcyI6WyJidWZmZXIiLCJhZG1pbiIsInNlcnZpY2VBY2NvdW50IiwicmVxdWlyZSIsImFwcCIsImFwcHMiLCJsZW5ndGgiLCJpbml0aWFsaXplQXBwIiwiY3JlZGVudGlhbCIsImNlcnQiLCJzdHJpcGUiLCJwcm9jZXNzIiwiZW52IiwiU1RSSVBFX1NFQ1JFVF9LRVkiLCJlbmRwb2ludFNlY3JldCIsIlNUUklQRV9TSUdOSU5HX1NFQ1JFVCIsImZ1bGZpbGxPcmRlciIsInNlc3Npb24iLCJmaXJlc3RvcmUiLCJjb2xsZWN0aW9uIiwiZG9jIiwibWV0YWRhdGEiLCJlbWFpbCIsImlkIiwic2V0IiwiYW1vdW50IiwiYW1vdW50X3RvdGFsIiwiYW1vdW50X3NoaXBwaW5nIiwidG90YWxfZGV0YWlscyIsImltYWdlcyIsIkpTT04iLCJwYXJzZSIsInRpbWVzdGFtcCIsIkZpZWxkVmFsdWUiLCJzZXJ2ZXJUaW1lc3RhbXAiLCJ0aGVuIiwiY29uc29sZSIsImxvZyIsInJlcSIsInJlcyIsIm1ldGhvZCIsInJlcXVlc3RCdWZmZXIiLCJwYXlsb2FkIiwidG9TdHJpbmciLCJzaWciLCJoZWFkZXJzIiwiZXZlbnQiLCJ3ZWJob29rcyIsImNvbnN0cnVjdEV2ZW50IiwiZXJyIiwibWVzc2FnZSIsInN0YXR1cyIsInNlbmQiLCJ0eXBlIiwiZGF0YSIsIm9iamVjdCIsImNhdGNoIiwiY29uZmlnIiwiYXBpIiwiYm9keVBhcnNlciIsImV4dGVybmFsUmVzb2x2ZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/webhook.js\n");

/***/ }),

/***/ "(api)/./permissions.json":
/*!**************************!*\
  !*** ./permissions.json ***!
  \**************************/
/***/ ((module) => {

module.exports = JSON.parse('{"type":"service_account","project_id":"fir-398cb","private_key_id":"f740b846bfbfd82cdcb4ba78379b284e877208fb","private_key":"-----BEGIN PRIVATE KEY-----\\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQC0+KckQW7tiIFv\\njLmtJ5y4Rc6b9iw+Kz7wvJZzYpjQ6sn3F8bMQf0VnE1qwe8IqncOTMCOtdA5a4rH\\ng/w76MUw7WuGQfxgqqx6AJ7VJfVWAT1N9B21pY5FgMkjoj4CRwdCCZG4GZWdEXVC\\nH/wyc8/5hTYBhdnHJFu7b9r000sGBANrx5rVMhPSPn/YQmWcR6JwDDlQuTkpdRIn\\nIVvk67nkMn7rZQm8WQFyp4fnx7Gxd4KyanpZN9a8xfjt69dngVLY4f74c1awlrM3\\nfi7GHE4xWiLjFyz4RlxYM+OINaRQIzjyCWHomkocBgQUagJamjd+KE8YlsPppJCE\\npJ67epBPAgMBAAECggEAE2QHPg5td9x7Xfv6qIUzji0bUmvCBCv3E61pWNYKNhcf\\nlS8Xg9Wtlq4HlOD7H0xrSFLMrnM9wJaiKUxI778PuJ/f4w6un576BHKM5519wv2M\\nAjkeISiq7LiRahTdcboG8DpSl6LU0fPHwtI8NXMM/ZlFQaGEGwntcvvXvrQ7Itrc\\nggQDSYEKPH1qu8J3eibo0VVrWB8J5Z8Ws3alKdcbwll58qRK4mv5ikMtEbiXNZSs\\nQayyOHaL4QBxBauTwPNPqhemet+Zpguj5UNe3IhAcTPEp8IakUInKUF2T0wAhTwD\\nxfBGtfgexC2tEF664zadEXwPdDgEsJD1xt1skFNgIQKBgQDvnpAGtxSiY79SQMtt\\nvhZTfJCpzo9AelFQL726iZ1uYl877lbgvNc3etX/L+ESVpowgUosoJ5FWwa34Hjr\\nvYKAAxJTX6q2AMM/E3FQWMrRWRgb1DHb5iyzQbz6yRBfHKfGd6jgnQZZy+Ovf+1X\\n13HtI96biNKfQrVdmd1UwYkAIQKBgQDBV7mLl6dGP5i+azS4FXhYD/PEiD6FEHD0\\nIL3wdeo1Hl1e0wycHLgtNGmg5HZlMHI7QSZ7Cs9/hdCOxDxP8PkMFKfrIfVlE3Md\\nZCkbBTntBw9Kx8Eu2YGl5rPhIUxMCkYFSbmDUl1ndWHPRV3k1oB2DDTmQW94rheu\\n00HNSatCbwKBgHUlZ/RgfU4GxfpIgyvbyr52H6NkwNQc+LPjIzaXIMhef4ClPQQS\\nToVpIEXp+nckr60XCFRZEgeGQPqUW4mk1LAQ0FzCYIsqREoKD1PglQdUL10rmFSR\\nazkX4nQY6FAXik6VIZLuMbSk4WNjf316btAowSP4+D+0NUbVekd9dqUBAoGAEkCg\\n4J/Jh+U7G0btrC9CtDWVUsl19YPu1e09YTUQjkE2mVwdRaOkc4gOLMVEtBrVvehR\\npK4JlsVgQgoek4FxUYWlsJn9G7SxWmX5R3a/2DOhavLetviLt8jG1IsbM9aIc7lZ\\nDR+6d6jqOfIXgiIJ8JsIZ3BoAKGW1MdW3/WDeHsCgYB78PxCH481mu59cTnfQsyG\\nPsspQ+IOrtRJQ/zGDXtA22vNGI3CGYCb07SmU6+Fc6M+7oySOSNUA+UlwnlHoxfy\\n4UC2HVwBI/whLBOkbENl9PmNNDMSnYmWPUo6gOhIgiRg7kGfkWXtIzbfF+FVrRyo\\n9fW+Tn9C9f/OQ34/XXssQg==\\n-----END PRIVATE KEY-----\\n","client_email":"firebase-adminsdk-sn7d9@fir-398cb.iam.gserviceaccount.com","client_id":"104188866226071401265","auth_uri":"https://accounts.google.com/o/oauth2/auth","token_uri":"https://oauth2.googleapis.com/token","auth_provider_x509_cert_url":"https://www.googleapis.com/oauth2/v1/certs","client_x509_cert_url":"https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-sn7d9%40fir-398cb.iam.gserviceaccount.com"}');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/webhook.js"));
module.exports = __webpack_exports__;

})();