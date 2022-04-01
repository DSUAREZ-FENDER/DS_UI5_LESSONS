sap.ui.controller("app23_finalapp.Home", {

	/**
	 * Called when a controller is instantiated and its View controls (if
	 * available) are already created. Can be used to modify the View before it
	 * is displayed, to bind event handlers and do other one-time
	 * initialization.
	 * 
	 * @memberOf app23_finalapp.Home
	 */
	onInit : function() {
		var oData = {
			"names" : [ {
				icon : "sap-icon://map-2",
				Name : "Search by",
				Place : "Product Name",
				id : 1
			}, {
				icon : "sap-icon://general-leave-request",
				Name : "Top 5",
				Place : "Rated Products",
				id : 2
			}

			]
		};

		var oModel = new sap.ui.model.json.JSONModel(oData);
		sap.ui.getCore().setModel(oModel, "tile");
		
//Create pages 2 and 3
		var oPage2 = sap.ui.view({
			id : "idSearch",
			viewName : "app23_finalapp.Search",
			type : sap.ui.core.mvc.ViewType.JS
		});
		
		app.addPage(oPage2);
		
		
		var oPage3 = sap.ui.view({
			id : "idRated",
			viewName : "app23_finalapp.Rated",
			type : sap.ui.core.mvc.ViewType.JS
		});
		app.addPage(oPage3);
	},

	goToPage : function(oEvt) {
		var oPressValue = oEvt.getSource().getProperty("title");

		if (oPressValue == "Search by") {

//	Go to page 2
			app.to("idSearch");
			
		} else {
			
			app.to("idRated");
		}
	},

/**
 * Similar to onAfterRendering, but this hook is invoked before the controller's
 * View is re-rendered (NOT before the first rendering! onInit() is used for
 * that one!).
 * 
 * @memberOf app23_finalapp.Home
 */
// onBeforeRendering: function() {
//
// },
/**
 * Called when the View has been rendered (so its HTML is part of the document).
 * Post-rendering manipulations of the HTML could be done here. This hook is the
 * same one that SAPUI5 controls get after being rendered.
 * 
 * @memberOf app23_finalapp.Home
 */
// onAfterRendering: function() {
//
// },
/**
 * Called when the Controller is destroyed. Use this one to free resources and
 * finalize activities.
 * 
 * @memberOf app23_finalapp.Home
 */
// onExit: function() {
//
// }
});