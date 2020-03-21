function start() {
console.log("Был вызван обработчик запроса START");
}
function upload() {
console.log("Был вызван обработчик запроса UPLOAD");
}
function download() {
console.log("Был вызван обработчик запроса DOWNLOAD");
}
exports.start = start;
exports.upload = upload;
exports.download = download;
