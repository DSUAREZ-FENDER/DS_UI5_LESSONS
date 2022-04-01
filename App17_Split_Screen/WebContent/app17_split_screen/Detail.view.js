sap.ui.jsview("app17_split_screen.Detail", {

	/**
	 * Specifies the Controller belonging to this View. In the case that it is
	 * not implemented, or that "null" is returned, this View does not have a
	 * Controller.
	 * 
	 * @memberOf app17_split_screen.Detail
	 */
	getControllerName : function() {
		return "app17_split_screen.Detail";
	},

	/**
	 * Is initially called once after the Controller has been instantiated. It
	 * is the place where the UI is constructed. Since the Controller is given
	 * to this method, its event handlers can be attached right away.
	 * 
	 * @memberOf app17_split_screen.Detail
	 */
	createContent : function(oController) {
		// Column Field Catalog
		var oCol1 = new sap.ui.table.Column({
			label : new sap.m.Label({
				text : "Name"
			}),
			template : new sap.m.Text({
				text : "{table>Name}"
			})
		});

		var oCol2 = new sap.ui.table.Column({
			label : new sap.m.Label({
				text : "Place"
			}),
			template : new sap.m.Text({
				text : "{table>Place}"
			})
		});

		var oCol3 = new sap.ui.table.Column({
			label : new sap.m.Label({
				text : "Id"
			}),
			template : new sap.m.Text({
				text : "{table>id}"
			})
		});

		// Table Field content
		var oTable = new sap.ui.table.Table({
			title : "Simple Tab",
//			cellClick : [ oController.fOnClick, oController ],

			columns : [ oCol1, oCol2, oCol3 ]
		});

		oTable.bindRows("table>/");

		var oPage = new sap.m.Page({
			title : "Detail",
			content : [ oTable ]
		});

		return oPage;
	}

});