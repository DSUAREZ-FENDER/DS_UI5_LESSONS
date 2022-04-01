sap.ui.jsview("app19_barchart.Bar", {

	/**
	 * Specifies the Controller belonging to this View. In the case that it is
	 * not implemented, or that "null" is returned, this View does not have a
	 * Controller.
	 * 
	 * @memberOf app19_barchart.Bar
	 */
	getControllerName : function() {
		return "app19_barchart.Bar";
	},

	/**
	 * Is initially called once after the Controller has been instantiated. It
	 * is the place where the UI is constructed. Since the Controller is given
	 * to this method, its event handlers can be attached right away.
	 * 
	 * @memberOf app19_barchart.Bar
	 */
	createContent : function(oController) {
		var oVizFram = new sap.viz.ui5.controls.VizFrame();

		// Data
		var oDataset = new sap.viz.ui5.data.FlattenedDataset({
			dimensions : [ {
				name : 'Name',
//	This is the nomeclature for values: "{bar>Name}"
				value : "{pie>Name}"
			} ],
			measures : [ {
				name : 'Popularity',
				value : "{pie>Popularity}"
			} ],
			data:{
				path:"pie>/names"
			}
		});
		
// Dataset measure
		var oFeedValueAxis = new sap.viz.ui5.controls.common.feeds.FeedItem({
//			'uid':"valueAxis",
			'uid':"size",
			'type': "Measure",
			'values':["Popularity"]
		});

//	Dataset dimension
		var oFeedCataAxis = new sap.viz.ui5.controls.common.feeds.FeedItem({
//			'uid':"categoryAxis",
			'uid':"color",
			'type': "Dimension",
			'values':["Name"]
		});
		
//		Add Values
		oVizFram.addFeed(oFeedValueAxis);
		oVizFram.addFeed(oFeedCataAxis);
		
//	Add main dataset that contains both dimensions and measures
		oVizFram.setDataset(oDataset);
		
// Type barchart
//		oVizFram.setVizType('bar');
		oVizFram.setVizType('pie');
		
		var oPage = new sap.m.Page({
			title : "Pie Chart",
			content : [
				oVizFram
			]
		});

		return oPage;
	}

});