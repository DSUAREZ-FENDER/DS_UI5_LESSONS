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

		var oData = {
				names : [ {
					Name : "Dinosaur",
					Place : "Nowhere"
				}, {
					Name : "Dinosaur2",
					Place : "Nowhere"
				}, {
					Name : "Dinosaur3",
					Place : "Nowhere"
				}, {
					Name : "Dinosaur4",
					Place : "Nowhere"
				}, {
					Name : "Dinosaur5",
					Place : "Nowhere"
				}, {
					Name : "Dinosaur6",
					Place : "Nowhere"
				}, ]
			};
		
		var oList1 = new sap.m.List({
			headerText : "Animals",
			
			/** items : [ oItem1 ]*/

		});
		
		oList1.bindItems({
			path:"/names",
			template: new sap.m.StandardListItem({
				title : "{Name}",
				description : "{Place}"
			}) 
		});

		/**Set model*/
		var oModel = new sap.ui.model.json.JSONModel();
		
		/*Put data in*/
		oModel.setData(oData);
		
		/*assign to List*/
		oList1.setModel(oModel);
		
		/**Just for 1 item
		oItem1.setModel(oModel);
		*/
		
		
		var oPage = new sap.m.Page({
			title : "List Page",
			content : [ oList1 ]
		});

		return oPage;
	}

});