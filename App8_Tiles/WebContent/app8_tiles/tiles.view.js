sap.ui.jsview("app8_tiles.tiles", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf app7_tables.tables
	*/ 
	getControllerName : function() {
		return "app8_tiles.tiles";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf app7_tables.tables
	*/ 
	createContent : function(oController) {

		var oT1 = new sap.m.StandardTile({
			title:"Dinosaur",
			info:"Mountain",
			icon:"sap-icon://sap-ui5"
		});
		
		var oT2 = new sap.m.StandardTile({
			title:"Dinosaur2",
			info:"Mountain2",
			icon:"sap-icon://general-leave-request"
		});
		
		var oT3 = new sap.m.StandardTile({
			title:"Dinosaur3",
			info:"Mountain3",
			icon:"sap-icon://map-2"
		});
		
		var oT4 = new sap.m.StandardTile({
			title:"Dinosaur4",
			info:"Mountain4",
			icon:"sap-icon://travel-expense"
		});
		
		var oTileCont = new sap.m.TileContainer({
			tiles:[
				oT1,
				oT2,
				oT3,
				oT4,
			]
		});
		
		var oPage = new sap.m.Page({
			title: "Simple Tiles",
			content: [
				oTileCont
			]
		});
 		
 		return oPage;
	}

});