sap.ui.controller("app19_barchart.Bar", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf app19_barchart.Bar
*/
	onInit: function() {
		// Data
		var oData = {
			"names" : [ {
				Popularity: 2,
				Name : "Dinosaur",
				Place : "Nowhere1",
			}, {
				Popularity: 4,
				Name : "Dinosaur2",
				Place : "Nowhere2",
			}, {
				Popularity: 1,
				Name : "Dinosaur3",
				Place : "Nowhere3",
			}, {
				Popularity: 5,
				Name : "Dinosaur4",
				Place : "Nowhere4",
			}, {
				Popularity: 3,
				Name : "Dinosaur5",
				Place : "Nowhere5",
			}, {
				Popularity: 6,
				Name : "Dinosaur6",
				Place : "Nowhere6",
			}, ]
		};
		
		var oModel = new sap.ui.model.json.JSONModel(oData);
		sap.ui.getCore().setModel(oModel, "bar");
		
	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf app19_barchart.Bar
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf app19_barchart.Bar
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf app19_barchart.Bar
*/
//	onExit: function() {
//
//	}

});