sap.ui.jsview("app17_split_screen.Split", {

	/**
	 * Specifies the Controller belonging to this View. In the case that it is
	 * not implemented, or that "null" is returned, this View does not have a
	 * Controller.
	 * 
	 * @memberOf app17_split_screen.Split
	 */
	getControllerName : function() {
		return "app17_split_screen.Split";
	},

	/**
	 * Is initially called once after the Controller has been instantiated. It
	 * is the place where the UI is constructed. Since the Controller is given
	 * to this method, its event handlers can be attached right away.
	 * 
	 * @memberOf app17_split_screen.Split
	 */
	createContent : function(oController) {
		var oList = new sap.m.List({
			headerText : "Animals"
		});

		oList.bindItems({
			path : "list>/names",
			template : new sap.m.StandardListItem({
				// title:"{list>Name}",
				// description: "{list>Place}",
				// type: sap.m.ListType.Navigation,
				// press:[oController.showDetails, oController]

				// We're gonna apply a Formater
				title : ({
					parts : [ {
						path : "list>Name",
						type : new sap.ui.model.type.String()
					},

					{
						path : "list>Place",
						type : new sap.ui.model.type.String()
					},
					
					
					],

					formatter : function(sName, sPlace) {
						return sName + " : " + sPlace;
					}
				}),
				
				press : [ oController.showDetails, oController ],
				type : sap.m.ListType.Navigation,
				
			}),

		});

		var oPage = new sap.m.Page({
			title : "List",
			content : [ oList ]
		});

		return oPage;

	}

});