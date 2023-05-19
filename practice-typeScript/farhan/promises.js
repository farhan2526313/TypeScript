"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function delay(millesecond) {
    return new Promise((rejected) => {
        setTimeout(() => {
            // resolve();
            rejected();
        }, millesecond);
    });
}
delay(1000)
    .then(() => {
    console.log("The promise is resolve");
})
    .catch((error) => {
    console.error("the promise is rejected", error);
})
    .finally(() => {
    console.log("the finaly statment");
});
