/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"DemoHTML/DemoHTML/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});