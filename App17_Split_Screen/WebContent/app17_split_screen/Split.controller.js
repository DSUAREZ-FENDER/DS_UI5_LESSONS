sap.ui.controller("app17_split_screen.Split", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf app17_split_screen.Split
*/
	onInit: function() {
		// Data
		var oData = {
			names : [ {
				Name : "Dinosaur",
				Place : "Nowhere1",
			}, {
				Name : "Dinosaur2",
				Place : "Nowhere2",
			}, {
				Name : "Dinosaur3",
				Place : "Nowhere3",
			}, {
				Name : "Dinosaur4",
				Place : "Nowhere4",
			}, {
				Name : "Dinosaur5",
				Place : "Nowhere5",
			}, {
				Name : "Dinosaur6",
				Place : "Nowhere6",
			}, ]
		};
		
//		Dummy table
		this.oDataTable = {
				"names" : [ {
					id : 1,
					Name : "Dinosaur",
					Place : "Nowhere1"
				}, {
					id : 2,
					Name : "Dinosaur2",
					Place : "Nowhere2"
					
				}, {
					id : 3,
					Name : "Dinosaur3",
					Place : "Nowhere3"
				}, {
					id : 4,
					Name : "Dinosaur4",
					Place : "Nowhere4"
				}, {
					id : 5,
					Name : "Dinosaur5",
					Place : "Nowhere5"
				}, {
					id : 6,
					Name : "Dinosaur6",
					Place : "Nowhere6"
				}, ]
			};

		var oModel = new sap.ui.model.json.JSONModel(oData);
		sap.ui.getCore().setModel(oModel, "list");
		
		
	},
	
	showDetails:function(oEvt){
		
		var sClickedData = oEvt.getSource().getTitle();
		var oData = this.oDataTable;
		var oNewData = [];
		for(var i = 0; i<oData["names"].length; i++){
			if(oData["names"][i]["Name"] + " : " + oData["names"][i]["Place"] === sClickedData ){
				oNewData.push(oData["names"][i]);
			}
		}
		
		console.log(oNewData);
		sap.ui.getCore().getModel("table").setData(oNewData);

	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf app17_split_screen.Split
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf app17_split_screen.Split
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf app17_split_screen.Split
*/
//	onExit: function() {
//
//	}

});