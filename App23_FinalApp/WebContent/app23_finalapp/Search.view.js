sap.ui.jsview("app23_finalapp.Search", {

	/**
	 * Specifies the Controller belonging to this View. In the case that it is
	 * not implemented, or that "null" is returned, this View does not have a
	 * Controller.
	 * 
	 * @memberOf app23_finalapp.Search
	 */
	getControllerName : function() {
		return "app23_finalapp.Search";
	},

	/**
	 * Is initially called once after the Controller has been instantiated. It
	 * is the place where the UI is constructed. Since the Controller is given
	 * to this method, its event handlers can be attached right away.
	 * 
	 * @memberOf app23_finalapp.Search
	 */
	createContent : function(oController) {

		// var oSearch = new sap.m.Input({
		// placeholder: "Search Item...",
		// startSuggestion: 1,
		// showSuggestion:true
		// }).addStyleClass("InputCss");

		var oSearch = new sap.m.SearchField("searchField", {
			enableSuggestions : true,
			search : [ oController.onSearch, oController ],
			suggest : [ oController.onSuggest, oController ],
			width : "35%",
			placeholder : "Search Product Name"
		});

		var oSuggestionItems = new sap.m.SuggestionItem({
			text : "{list>Name}",
			description : "{list>Place}",
			key : "{list>Id}"
		});

		oSearch.bindAggregation("suggestionItems", "list>/ProductCollection",
				oSuggestionItems);

		var oList = new sap.m.List("idList",{
//			items : "{list>/ProductCollection}",
//			selectionChange : "onSelectionChange",
//			mode : "SingleSelect",
//			includeItemInSelection : true,
//			infoToolbar : new sap.m.Toolbar("idInfoToolbar", {
//				visible : false,
//				label : new sap.m.Label("idFilterLabel", {})
//			}),
			itemPress:[oController.onPress,oController]
//			items : oListTemplate = new sap.m.StandardListItem({
//				title : "{list>Name}",
//				description : "{list>Place}",
//
//			})
		});

		 var oListTemplate = new sap.m.StandardListItem({
		 title : "{list>Name}",
		 description : "{list>Descripition}",
		 type: sap.m.ListType.Navigation
		 });

		 oList.bindItems({
		 path:"list>/ProductCollection",
		 template: oListTemplate
		 });

		// var oItems = new sap.m.SuggestionItem({
		// description: "{list>Name}"
		// });

		// oSearch.bindAggregation("suggestionItems","list>/ProductCollection",oItems);

		// var oSelDialog = new sap.m.SelectDialog({
		// title : "Dinosaurs",
		// type : "Active",
		// liveChange : [ oController.onSearch, oController ]
		// });
		//
		// oSelDialog.bindAggregation("items", "list>/names", oListTemplate);

		var oPage = new sap.m.Page({
			title : "Search Page",
			showNavButton : true,
			navButtonPress : function() {
				app.to("idHome1")
			},

			content : [ oSearch
			 , oList
			// oSelDialog
			]
		});

		return oPage;
	}

});