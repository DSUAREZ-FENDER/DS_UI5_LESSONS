sap.ui.jsview("app18_i18ndemo.i18n_view", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf app18_i18ndemo.i18n_view
	*/ 
	getControllerName : function() {
		return "app18_i18ndemo.i18n_view";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf app18_i18ndemo.i18n_view
	*/ 
	createContent : function(oController) {
 		var oBtn = new sap.m.Button({
 			text: "{i18n>greet}"
 		});
		
		var oPage =  new sap.m.Page({
			title: "Title",
			content: [
				oBtn
			]
		});
 		
 		return oPage;
	}

});