sap.ui.jsview("app7_tables.tables", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf app7_tables.tables
	*/ 
	getControllerName : function() {
		return "app7_tables.tables";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf app7_tables.tables
	*/ 
	createContent : function(oController) {


		// Column Field Catalog		
// 		var oCol1 = new sap.m.Column({
// 			header: new sap.m.Label({
// 				text: "Name"
// 			})
// 		});
// 		
// 		var oCol2 = new sap.m.Column({
// 			header: new sap.m.Label({
// 				text: "Place"
// 			})
// 		});
// 		
// 		var oCol3 = new sap.m.Column({
// 			header: new sap.m.Label({
// 				text: "id"
// 			})
// 		});
// 		
//
// 		//Table Field content 		
// 		var oTable = new sap.m.Table({
// 			columns: [
// 				oCol1,
// 				oCol2,
// 				oCol3
// 			]
// 		});
// 		
//
// 		// Table item Appearance
// 		var oTableItems = new sap.m.ColumnListItem({
// 			title: "Simple Tab",
// 			cells: [
// 				new sap.m.Text({
// 					text: "{Name}"
// 				}),
// 				new sap.m.Text({
// 					text: "{Place}"
// 				}),
// 				new sap.m.Text({
// 					text: "{id}"
// 				})
// 			]
// 		});
// 		
// 		// Table Bind
// 		oTable.bindItems({
// 			path: "/names",
// 			template: oTableItems
// 		});
// 		
//// 		//Table Data Bind
////		var oModel = new sap.ui.model.json.JSONModel();
////		
////		/*Put data in*/
////		oModel.setData(oData);
////		
////		/*assign to List*/
////		oTable.setModel(oModel);
//		
//	
//		
//		var oPage = new sap.m.Page({
//			title: "Simple Table",
//			content: [
//				oTable
//			]
//		});
// 		
// 		return oPage;
//	}

});