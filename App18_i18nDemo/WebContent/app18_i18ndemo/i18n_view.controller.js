sap.ui.controller("app18_i18ndemo.i18n_view", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf app18_i18ndemo.i18n_view
*/
	onInit: function() {
		debugger;
		
		var sLoc = sap.ui.getCore().getConfiguration().getLanguage();
		var i18nPath = "i18n/i18n";
		if(sLoc === "de_DE"){
			i18nPath = i18nPath + "_de.properties";
		}else if(sLoc === "es_ES"){
			i18nPath = i18nPath + "_es.properties";
		}else {
			i18nPath = i18nPath + ".properties";
		}
		
		var o18nModel = new sap.ui.model.resource.ResourceModel({
			bundleUrl:i18nPath
		});
		
		sap.ui.getCore().setModel(o18nModel,"i18n");
	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf app18_i18ndemo.i18n_view
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf app18_i18ndemo.i18n_view
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf app18_i18ndemo.i18n_view
*/
//	onExit: function() {
//
//	}

});