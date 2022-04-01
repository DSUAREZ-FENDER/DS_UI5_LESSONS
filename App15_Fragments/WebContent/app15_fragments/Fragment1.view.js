sap.ui.jsview("app15_fragments.Fragment1", {

	/**
	 * Specifies the Controller belonging to this View. In the case that it is
	 * not implemented, or that "null" is returned, this View does not have a
	 * Controller.
	 * 
	 * @memberOf app15_fragments.Fragment1
	 */
	getControllerName : function() {
		return "app15_fragments.Fragment1";
	},

	/**
	 * Is initially called once after the Controller has been instantiated. It
	 * is the place where the UI is constructed. Since the Controller is given
	 * to this method, its event handlers can be attached right away.
	 * 
	 * @memberOf app15_fragments.Fragment1
	 */
	createContent : function(oController) {
		var oBtn = new sap.m.Button({
			text : "Show List",
			press : [ oController.openFragment,oController ]
		});

		var oPage = new sap.m.Page({
			title : "Fragments",
			content : [ oBtn ]
		});
		return oPage;
	}

});