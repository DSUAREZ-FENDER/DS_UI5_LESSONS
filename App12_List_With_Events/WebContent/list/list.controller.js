sap.ui.controller("list.list", {

	/**
	 * Called when a controller is instantiated and its View controls (if
	 * available) are already created. Can be used to modify the View before it
	 * is displayed, to bind event handlers and do other one-time
	 * initialization.
	 * 
	 * @memberOf list.list
	 */
	onInit : function() {
		var page = sap.ui.view({
			id : "idlist2",
			viewName : "list.list_p2",
			type : sap.ui.core.mvc.ViewType.JS
		});
		app.addPage(page);

		// Data
		var oData = {
			names : [ {
				Name : "Dinosaur",
				Place : "Nowhere1",
				id : 1
			}, {
				Name : "Dinosaur2",
				Place : "Nowhere2",
				id : 2
			}, {
				Name : "Dinosaur3",
				Place : "Nowhere3",
				id : 3
			}, {
				Name : "Dinosaur4",
				Place : "Nowhere4",
				id : 4
			}, {
				Name : "Dinosaur5",
				Place : "Nowhere5",
				id : 5
			}, {
				Name : "Dinosaur6",
				Place : "Nowhere6",
				id : 6
			}, ]
		};

		var oModel = new sap.ui.model.json.JSONModel(oData);
		sap.ui.getCore().setModel(oModel, "list");

	},

	selectEventHad : function(oEvt) {
		// This is the Dinosaur value retrieved from selection
		var sVal = oEvt.getParameters().listItem.getProperty("title");

		// This will be the data on a JSON Model
		var oData = {
			"data" : sVal
		};

		// Put that data on a JSON Model
		sap.ui.getCore().setModel(new sap.ui.model.json.JSONModel(oData),
				"label");

		// Go to second page
		app.to("idlist2")

	},

/**
 * Similar to onAfterRendering, but this hook is invoked before the controller's
 * View is re-rendered (NOT before the first rendering! onInit() is used for
 * that one!).
 * 
 * @memberOf list.list
 */
// onBeforeRendering: function() {
//
// },
/**
 * Called when the View has been rendered (so its HTML is part of the document).
 * Post-rendering manipulations of the HTML could be done here. This hook is the
 * same one that SAPUI5 controls get after being rendered.
 * 
 * @memberOf list.list
 */
// onAfterRendering: function() {
//
// },
/**
 * Called when the Controller is destroyed. Use this one to free resources and
 * finalize activities.
 * 
 * @memberOf list.list
 */
// onExit: function() {
//
// }
});