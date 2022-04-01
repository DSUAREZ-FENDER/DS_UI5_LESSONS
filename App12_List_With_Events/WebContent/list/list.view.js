sap.ui.jsview("list.list", {

	/**
	 * Specifies the Controller belonging to this View. In the case that it is
	 * not implemented, or that "null" is returned, this View does not have a
	 * Controller.
	 * 
	 * @memberOf list.list
	 */
	getControllerName : function() {
		return "list.list";
	},

	/**
	 * Is initially called once after the Controller has been instantiated. It
	 * is the place where the UI is constructed. Since the Controller is given
	 * to this method, its event handlers can be attached right away.
	 * 
	 * @memberOf list.list
	 */
	createContent : function(oController) {
		
		/**Just for 1
		var oItem1 = new sap.m.StandardListItem({
			title : "{/Name}",
			description : "{/Place}"
		});
		*/

		
		var oList1 = new sap.m.List({
			headerText : "Animals",
			itemPress: [oController.selectEventHad,oController],// this will confirm if its working function(oEvt){console.log("hey");}
			/** items : [ oItem1 ]*/

		});
		
		oList1.bindItems({
			path:"list>/names",
			template: new sap.m.StandardListItem({
				title : "{list>Name}",
				description : "{list>Place}",
				type: sap.m.ListType.Navigation,
				})
			 
		});
		
		var oPage = new sap.m.Page({
			title : "List Page",
			content : [ oList1 ]
		});

		return oPage;
	}

});