sap.ui.controller("app8_tiles.tiles", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf app7_tables.tables
*/
	onInit: function() {
//		Data
		var oData = {
				names : [ {
					icon:"sap-icon://sap-ui5",
					Name : "Dinosaur",
					Place : "Nowhere1"
				}, {
					icon:"sap-icon://general-leave-request",
					Name : "Dinosaur2",
					Place : "Nowhere2"
				}, {
					icon:"sap-icon://map-2",
					Name : "Dinosaur3",
					Place : "Nowhere3"
				}, {
					icon:"sap-icon://travel-expense",
					Name : "Dinosaur4",
					Place : "Nowhere4"
				}, {
					icon:"sap-icon://map-2",
					Name : "Dinosaur5",
					Place : "Nowhere5"
				}, {
					icon:"sap-icon://sap-ui5",
					Name : "Dinosaur6",
					Place : "Nowhere6"
				}, ]
			};
		
		var oModel = new sap.ui.model.json.JSONModel(oData);
		sap.ui.getCore().setModel(oModel);
	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf app7_tables.tables
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf app7_tables.tables
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf app7_tables.tables
*/
//	onExit: function() {
//
//	}

});