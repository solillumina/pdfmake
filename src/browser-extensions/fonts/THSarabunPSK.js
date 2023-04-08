var fs = require("fs");

var fontContainer = {
	vfs: {
		"THSarabunPSK-Regular.ttf": {
			data: fs.readFileSync(
				__dirname + "/../../../fonts/THSarabunPSK/THSarabunPSK-Regular.ttf",
				"base64"
			),
			encoding: "base64",
		},
		"THSarabunPSK-Medium.ttf": {
			data: fs.readFileSync(
				__dirname + "/../../../fonts/THSarabunPSK/THSarabunPSK-Medium.ttf",
				"base64"
			),
			encoding: "base64",
		},
		"THSarabunPSK-Italic.ttf": {
			data: fs.readFileSync(
				__dirname + "/../../../fonts/THSarabunPSK/THSarabunPSK-Italic.ttf",
				"base64"
			),
			encoding: "base64",
		},
		"THSarabunPSK-MediumItalic.ttf": {
			data: fs.readFileSync(
				__dirname +
					"/../../../fonts/THSarabunPSK/THSarabunPSK-MediumItalic.ttf",
				"base64"
			),
			encoding: "base64",
		},
	},
	fonts: {
		"TH SarabunPSK": {
			normal: "THSarabunPSK-Regular.ttf",
			bold: "THSarabunPSK-Medium.ttf",
			italics: "THSarabunPSK-Italic.ttf",
			bolditalics: "THSarabunPSK-MediumItalic.ttf",
		},
	},
};

var _global =
	typeof window === "object"
		? window
		: typeof global === "object"
		? global
		: typeof self === "object"
		? self
		: this;
if (
	typeof _global.pdfMake !== "undefined" &&
	typeof _global.pdfMake.addFontContainer !== "undefined"
) {
	_global.pdfMake.addFontContainer(fontContainer);
}

if (typeof module !== "undefined") {
	module.exports = fontContainer;
}
