sap.ui.jsview("app8_tiles.tiles", {

	/**
	 * Specifies the Controller belonging to this View. In the case that it is
	 * not implemented, or that "null" is returned, this View does not have a
	 * Controller.
	 * 
	 * @memberOf app7_tables.tables
	 */
	getControllerName : function() {
		return "app8_tiles.tiles";
	},

	/**
	 * Is initially called once after the Controller has been instantiated. It
	 * is the place where the UI is constructed. Since the Controller is given
	 * to this method, its event handlers can be attached right away.
	 * 
	 * @memberOf app7_tables.tables
	 */
	createContent : function(oController) {

		var oTileTemp = new sap.m.StandardTile({
			icon : "{icon}",
			title : "{Name}",
			info : "{Place}"
		});

		var oTileCont = new sap.m.TileContainer({});

		oTileCont.bindAggregation("tiles", "/names", oTileTemp);

		var oPage = new sap.m.Page({
			title : "Generic Tiles",
			content : [ oTileCont ]
		});

		return oPage;
	}

});