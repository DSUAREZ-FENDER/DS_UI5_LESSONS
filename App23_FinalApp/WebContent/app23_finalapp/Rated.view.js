sap.ui.jsview("app23_finalapp.Rated", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf app23_finalapp.Rated
	*/ 
	getControllerName : function() {
		return "app23_finalapp.Rated";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf app23_finalapp.Rated
	*/ 
	createContent : function(oController) {
		var oVizFram = new sap.viz.ui5.controls.VizFrame("idBar");

		// Data
		var oDataset = new sap.viz.ui5.data.FlattenedDataset({
			dimensions : [ {
				name : 'Name',
//	This is the nomeclature for values: "{bar>Name}"
				value : "{list>Name}"
			} ],
			measures : [ {
				name : 'Rating',
				value : "{list>Rating}"
			} ],
			data:{
				path:"list>/ProductCollection"
			}
		});
		
// Dataset measure
		var oFeedValueAxis = new sap.viz.ui5.controls.common.feeds.FeedItem({
			'uid':"valueAxis",
			'type': "Measure",
			'values':["Rating"]
		});

//	Dataset dimension
		var oFeedCataAxis = new sap.viz.ui5.controls.common.feeds.FeedItem({
			'uid':"categoryAxis",
			'type': "Dimension",
			'values':["Name"]
		});
		
//		Add Values
		oVizFram.addFeed(oFeedValueAxis);
		oVizFram.addFeed(oFeedCataAxis);
		
//	Add main dataset that contains both dimensions and measures
		oVizFram.setDataset(oDataset);
		
// Type barchart
		oVizFram.setVizType('bar');
		
		var oPage = new sap.m.Page({
			title : "High rated products",
			showNavButton : true,
			navButtonPress : function() {
				app.to("idHome1")
			},
			content : [
				oVizFram
			]
		});

		return oPage;
	}

});