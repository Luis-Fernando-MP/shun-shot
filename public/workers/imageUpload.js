var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export var wkUpload;
(function (wkUpload) {
    wkUpload["UPLOAD"] = "UPLOAD";
})(wkUpload || (wkUpload = {}));
self.onmessage = (event) => __awaiter(void 0, void 0, void 0, function* () {
    const { bitmap, action } = event.data;
    try {
        if (!action)
            throw new Error('No action provided');
        if (action === wkUpload.UPLOAD && bitmap)
            yield generateImage(bitmap);
    }
    catch (error) {
        self.postMessage({ error: error.message });
    }
});
function generateImage(bitmap) {
    return __awaiter(this, void 0, void 0, function* () {
        self.postMessage({ blob: 'hola' });
    });
}
//# sourceMappingURL=imageUpload.js.map