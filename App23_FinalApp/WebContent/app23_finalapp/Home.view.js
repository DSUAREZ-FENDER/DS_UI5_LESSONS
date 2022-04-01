sap.ui.jsview("app23_finalapp.Home", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf app23_finalapp.Home
	*/ 
	getControllerName : function() {
		return "app23_finalapp.Home";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf app23_finalapp.Home
	*/ 
	createContent : function(oController) {
		
 		oTileTemp = new sap.m.StandardTile({
 			icon : "{tile>icon}",
			title : "{tile>Name}",
			info : "{tile>Place}",
			press: [oController.goToPage,oController]
		});
 		
 		var oTileCont = new sap.m.TileContainer({});
 		oTileCont.bindAggregation("tiles", "tile>/names", oTileTemp);
		
		oPage = new sap.m.Page({
			title: "Home",
			content: [
				oTileCont
			]
		});
 		
 		return oPage;
	}

});