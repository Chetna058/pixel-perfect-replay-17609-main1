import { n as __exportAll } from "./rolldown-runtime-DC62tzP2.js";
import { $r as _coercedString, Qr as _coercedNumber, Xr as _coercedBoolean, Y as ZodNumber, Yr as _coercedBigint, Zr as _coercedDate, _ as ZodDate, a as ZodBigInt, ot as ZodString, s as ZodBoolean } from "./schemas-DF2LF1j1.js";
//#region node_modules/zod/v4/classic/coerce.js
var coerce_exports = /* @__PURE__ */ __exportAll({
	bigint: () => bigint,
	boolean: () => boolean,
	date: () => date,
	number: () => number,
	string: () => string
});
function string(params) {
	return _coercedString(ZodString, params);
}
function number(params) {
	return _coercedNumber(ZodNumber, params);
}
function boolean(params) {
	return _coercedBoolean(ZodBoolean, params);
}
function bigint(params) {
	return _coercedBigint(ZodBigInt, params);
}
function date(params) {
	return _coercedDate(ZodDate, params);
}
//#endregion
export { number as n, coerce_exports as t };
