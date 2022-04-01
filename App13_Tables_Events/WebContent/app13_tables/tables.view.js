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
 		var oCol1 = new sap.ui.table.Column({
 			label: new sap.m.Label({ text: "Name" }),
 			template: new sap.m.Text({ text:"{table>Name}"})
 		});
 		
 		var oCol2 = new sap.ui.table.Column({
 			label: new sap.m.Label({ text: "Place" }),
 			template: new sap.m.Text({ text:"{table>Place}"})
 		});
 		
 		var oCol3 = new sap.ui.table.Column({
 			label: new sap.m.Label({ text: "Id" }),
 			template: new sap.m.Text({ text:"{table>id}"})
 		});

 		//Table Field content 		
 		var oTable = new sap.ui.table.Table({
 			title: "Simple Tab",
 			cellClick: [oController.fOnClick],
 			
 			columns: [
 				oCol1,
 				oCol2,
 				oCol3
 			]
 		});
 		
 		
// 		 Table Bind
// 		oTable.bindRows({
// 			path: "table>/names"
// 		});
 		oTable.bindRows("table>/names");
 		
		
		var oPage = new sap.m.Page({
			title: "Simple Table",
			content: [
				oTable
			]
		});
 		
 		return oPage;
	}

});