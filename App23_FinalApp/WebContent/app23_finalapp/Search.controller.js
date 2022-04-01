sap.ui.controller("app23_finalapp.Search", {

	/**
	 * Called when a controller is instantiated and its View controls (if
	 * available) are already created. Can be used to modify the View before it
	 * is displayed, to bind event handlers and do other one-time
	 * initialization.
	 * 
	 * @memberOf app23_finalapp.Search
	 */
	onInit : function() {
		var oData = {
			"ProductCollection" : [ {
				Name : "Monitor",
				Description : "Nowhere1",
				Price: 4500,
				Rating:4,
				id :1
			}, {
				Name : "Graphic Card",
				Description : "Nowhere2",
				Price: 6500,
				Rating:3,
				id :2
			}, {
				Name : "Mouse",
				Description : "Nowhere3",
				Price: 200,
				Rating:3.5,
				id :3
			}, {
				Name : "Keyboard",
				Description : "Nowhere4",
				Price: 300,
				Rating:4.7,
				id :4
			}, {
				Name : "Headset",
				Description : "Nowhere5",
				Price: 450,
				Rating:3,
				id :5
			}, 
//			{
//				Name : "RAM Dimm",
//				Description : "Nowhere6",
//				Price: 1050.20,
//				Rating:2.5,
//				id :6
//			}, 
			]
		};

		var oModel = new sap.ui.model.json.JSONModel(oData);
		sap.ui.getCore().setModel(oModel, "list");

		var oView = this.oView;

		var oList = sap.ui.getCore().byId("idList");
		oList.setVisible(false);
		
//Create item detail page
		var oPage = sap.ui.view({
			id : "idItemDetail",
			viewName : "app23_finalapp.IDetail",
			type : sap.ui.core.mvc.ViewType.JS
		});
		app.addPage(oPage);
	},

	// onSearch : function(oEvt) {
	// // add filter for search
	// // This should apply a filter to our list
	// debugger;
	// var sVal = oEvt.getParameter("value");
	// var oFilter = new sap.ui.model.Filter("Name",
	// sap.ui.model.FilterOperator.Contains, sVal);
	// var oBinding = oEvt.getSource().getBinding("items");
	// oBinding.filter([ oFilter ]);
	//		
	// },

	onSuggest : function(oEvt) {
		// (event) {
		// var value = event.getParameter("suggestValue");
		// var filters = [];
		// if (value) {
		// filters = [
		// new sap.ui.model.Filter([
		// new sap.ui.model.Filter("Id", function(sText) {
		// return (sText || "").toUpperCase().indexOf(value.toUpperCase()) > -1;
		// }),
		// new sap.ui.model.Filter("Name", function(sDes) {
		// return (sDes || "").toUpperCase().indexOf(value.toUpperCase()) > -1;
		// })
		// ], false)
		// ];
		// }
		// debugger;
		// // this.oSearch.getBinding("suggestionItems").filter(filters);
		// // this.oSearch.suggest();
		// event.getSource().getBinding("suggestionItems").filter(filters);
		// event.getSource().suggest();

		var sVal = oEvt.getParameter("suggestValue");
		var oFilter = new sap.ui.model.Filter("Name",
				sap.ui.model.FilterOperator.Contains, sVal);
		var oBinding = oEvt.getSource().getBinding("suggestionItems");
		oBinding.filter([ oFilter ]);
		oEvt.getSource().suggest();
	},

	onSearch : function(oEvt) {
		var oItem = oEvt.getParameter("suggestionItem");
		// var aFilters = [];
		var oList = sap.ui.getCore().byId("idList");
		var vVisible = oList.getVisible();

		// If value was a suggestion do this
		if (oItem) {
			sap.m.MessageToast.show("search for: " + oItem.getText());
			// Get suggested value
			var sVal = oEvt.getSource().getValue();
			var oFilter = new sap.ui.model.Filter("Name",
					sap.ui.model.FilterOperator.Contains, sVal);

			var oBinding = oList.getBinding("items");

			if (vVisible == false) {
				oList.setVisible(true);
			}
// Filter binding
			oBinding.filter([ oFilter ]);

			// If no suggestion value, do this
		} else if (oItem == undefined) {

			oItem = oEvt.getSource().getValue();

			// If still no value
			if (oItem == "") {
				sap.m.MessageToast.show("Please enter a value first ");

				if (vVisible == true) {
					oList.setVisible(false);
				}

				// If it was a typed value, do this
			} else {
				sap.m.MessageToast.show("search for: " + oItem);

				if (vVisible == false) {
					oList.setVisible(true);
				}

				var sVal = oEvt.getSource().getValue();
				var oFilter = new sap.ui.model.Filter("Name",
						sap.ui.model.FilterOperator.Contains, sVal);

				var oBinding = oList.getBinding("items");
//				
				oBinding.filter([ oFilter ]);

			}

		}

	},
	
	onPress:function(oEvt){
//	This function will trigger the third view, then show the detail of pressed item
		var oItem = oEvt.getParameters().listItem.getProperty("title");
		oPage3 = sap.ui.getCore().byId("IDetailPage");
		oPage3.setTitle("Detailed view: " + oItem);
		
//	Get Item pressed (Get binding)
		var oTable = sap.ui.getCore().byId("idDetailTable");
		
//	Filter by entered value
		var oFilter = new sap.ui.model.Filter("Name",
				sap.ui.model.FilterOperator.EQ, oItem);
		
//	Filter Table binding
//		var oBinding = oTable.getBinding("items");
//		oBinding.filter([ oFilter ]);
		
		var oBinding = oTable.getBinding("items").filter(oFilter);
		
		
		app.to("idItemDetail");
		
	}
/**
 * Similar to onAfterRendering, but this hook is invoked before the controller's
 * View is re-rendered (NOT before the first rendering! onInit() is used for
 * that one!).
 * 
 * @memberOf app23_finalapp.Search
 */
// onBeforeRendering: function() {
//
// },
/**
 * Called when the View has been rendered (so its HTML is part of the document).
 * Post-rendering manipulations of the HTML could be done here. This hook is the
 * same one that SAPUI5 controls get after being rendered.
 * 
 * @memberOf app23_finalapp.Search
 */
// onAfterRendering: function() {
//
// },
/**
 * Called when the Controller is destroyed. Use this one to free resources and
 * finalize activities.
 * 
 * @memberOf app23_finalapp.Search
 */
// onExit: function() {
//
// }
});