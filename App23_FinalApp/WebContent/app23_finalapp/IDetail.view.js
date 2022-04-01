sap.ui.jsview("app23_finalapp.IDetail", {

	/**
	 * Specifies the Controller belonging to this View. In the case that it is
	 * not implemented, or that "null" is returned, this View does not have a
	 * Controller.
	 * 
	 * @memberOf app23_finalapp.IDetail
	 */
	getControllerName : function() {
		return "app23_finalapp.IDetail";
	},

	/**
	 * Is initially called once after the Controller has been instantiated. It
	 * is the place where the UI is constructed. Since the Controller is given
	 * to this method, its event handlers can be attached right away.
	 * 
	 * @memberOf app23_finalapp.IDetail
	 */
	createContent : function(oController) {

		// Table Field content
		var oTable = new sap.m.Table("idDetailTable",{
			columns : [
			// ID
			new sap.m.Column({
				header : new sap.m.Label({
					text : "ID"
				})
			}),
			// Name
			new sap.m.Column({
				header : new sap.m.Label({
					text : "Name"
				})
			}),

			// Description
			new sap.m.Column({
				header : new sap.m.Label({
					text : "Description"
				})
			}),
			// Price
			new sap.m.Column({
				header : new sap.m.Label({
					text : "Price"
				})
			}),

			// Rating
			new sap.m.Column({
				header : new sap.m.Label({
					text : "Rating"
				})
			}),

			]
		});
		
		
 		// Table item Appearance
 		var oTableItems = new sap.m.ColumnListItem({
 			title: "Simple Tab",
 			cells: [
 				new sap.m.ObjectNumber({
 					number: "{list>id}"
 				}),
 				new sap.m.Text({
 					text: "{list>Name}"
 				}),
 				new sap.m.Text({
 					text: "{list>Description}"
 				}),
 				new sap.ui.unified.Currency({
 					value: "{list>Price}",
 					currency:"MXN"
 				}),
 				
 				new sap.m.RatingIndicator({
					value:"{list>Rating}"
				})
 				
 			]
 		});
 		
 		// Table Bind
 		oTable.bindItems({
 			path: "list>/ProductCollection",
 			template: oTableItems
 		});
		

		var oPage = new sap.m.Page("IDetailPage", {
			showNavButton : true,
			navButtonPress : function() {
				app.to("idSearch")
			},
			content : [
				oTable
			]
		});

		return oPage;
	}

});