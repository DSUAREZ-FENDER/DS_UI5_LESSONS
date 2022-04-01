sap.ui.jsview("app10_factoryfunctions.ff", {

	/**
	 * Specifies the Controller belonging to this View. In the case that it is
	 * not implemented, or that "null" is returned, this View does not have a
	 * Controller.
	 * 
	 * @memberOf app10_factoryfunctions.ff
	 */
	getControllerName : function() {
		return "app10_factoryfunctions.ff";
	},

	/**
	 * Is initially called once after the Controller has been instantiated. It
	 * is the place where the UI is constructed. Since the Controller is given
	 * to this method, its event handlers can be attached right away.
	 * 
	 * @memberOf app10_factoryfunctions.ff
	 */
	createContent : function(oController) {

		var oList = new sap.m.List({
			headerText : "Animals"
		});

		oList.bindAggregation("items", "/names", function(sId, oContext) {
//			DEBUG
			debugger;
			
			var sValue = oContext.getProperty("Name");
			var sDec1 = "Are still roaming around"
			var sDec2 = "Are extinct";

			if (sValue === "Dinosaur") {
				return new sap.m.StandardListItem({
					title : sValue,
					description : sDec2
				});
			} else {
				return new sap.m.StandardListItem({
					title : sValue,
					description : sDec1
				});
			}

		}

		);

		var oPage = new sap.m.Page({
			title : "Factory Functions",
			content : [
				oList
			]
		});

		return oPage;
	}

});