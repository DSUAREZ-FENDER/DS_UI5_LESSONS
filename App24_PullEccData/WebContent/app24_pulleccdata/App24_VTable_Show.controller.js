sap.ui
		.controller(
				"app24_pulleccdata.App24_VTable_Show",
				{

					/**
					 * Called when a controller is instantiated and its View
					 * controls (if available) are already created. Can be used
					 * to modify the View before it is displayed, to bind event
					 * handlers and do other one-time initialization.
					 * 
					 * @memberOf App24_VTable_Show
					 */
					onInit : function() {
						// Initialize model

						var oModel = sap.ui.getCore().getModel("table");
						
						if (oModel !== undefined) {
							oModel.destroy();
							oModel = null;
						}
						;

//						oModel = new sap.ui.model.json.JSONModel(
//	"http://fdreccdev.inside.fender:8000/sap/bc/dasa_jsonfmcall/zdasa_UI5_rfc_poc?carrid=LH&connid=400&format=json")

						sap.ui.getCore().setModel(oModel, "table");

						var oData = {
							"ProductCollection" : [ {
								Name : "Monitor",
								Description : "Nowhere1",
								Price : 4500,
								Rating : 4,
								id : 1
							}, {
								Name : "Graphic Card",
								Description : "Nowhere2",
								Price : 6500,
								Rating : 3,
								id : 2
							}, {
								Name : "Mouse",
								Description : "Nowhere3",
								Price : 200,
								Rating : 3.5,
								id : 3
							}, {
								Name : "Keyboard",
								Description : "Nowhere4",
								Price : 300,
								Rating : 4.7,
								id : 4
							}, {
								Name : "Headset",
								Description : "Nowhere5",
								Price : 450,
								Rating : 3,
								id : 5
							},
							// {
							// Name : "RAM Dimm",
							// Description : "Nowhere6",
							// Price: 1050.20,
							// Rating:2.5,
							// id :6
							// },
							]
						};

						var oModel = new sap.ui.model.json.JSONModel(oData);
						sap.ui.getCore().setModel(oModel, "list");

					},

					onCarrSub : function(oEvt) {
						
						// Get both parameters/table binding
						var oConnid = sap.ui.getCore().byId("idConnid");
						var oTable = sap.ui.getCore().byId("idTable");
						// Target:
						// "http://fdreccdev.inside.fender:8000/sap/bc/dasa_jsonfmcall/zdasa_UI5_rfc_poc?carrid=LH&connid=400&format=json"

						vQuery = "http://fdreccdev.inside.fender:8000/sap/bc/dasa_jsonfmcall/zdasa_UI5_rfc_poc?"
								+ "carrid="
								+ oEvt.getParameter("value")
								+ "&connid="
								+ oConnid.getValue()
								+ "&format=json";

						// Call Function Module in ECC
						oModel = new sap.ui.model.json.JSONModel(vQuery);

						// Set newly acquired data
						sap.ui.getCore().setModel(oModel, "table");
						
						// Create an AND FILTER
						var oFilter = new sap.ui.model.Filter("Key", {
							filters : [ new sap.ui.model.Filter({
								path : 'table>/FLIGHTS_TAB/CARRID',
								operator : sap.ui.model.FilterOperator.EQ,
								value1 : oEvt.getParameter("value")
							}), new sap.ui.model.Filter({
								path : 'table>/FLIGHTS_TAB/CONNID',
								operator : sap.ui.model.FilterOperator.EQ,
								value1 : oConnid.getValue()
							})

							]
						});

						// Get binding ON which we're gonna apply this filter

						var oBinding = oTable.getBinding("items");

						// Set Filter
						oBinding.filter([ oFilter ]);
						
						sap.m.MessageToast.show("search for Flight: " + oEvt.getParameter("value") + " Airline: " + oConnid.getValue());
					},

					onConnSub : function(oEvt) {
						
						// Get both parameters/table binding
						var oCarrid = sap.ui.getCore().byId("idCarrid");
						var oTable = sap.ui.getCore().byId("idTable");
						// Target:
						// "http://fdreccdev.inside.fender:8000/sap/bc/dasa_jsonfmcall/zdasa_UI5_rfc_poc?carrid=LH&connid=400&format=json"

						vQuery = "http://fdreccdev.inside.fender:8000/sap/bc/dasa_jsonfmcall/zdasa_UI5_rfc_poc?"
								+ "carrid="
								+ oCarrid.getValue()
								+ "&connid="
								+ oEvt.getParameter("value")
								+ "&format=json";

						// Call Function Module in ECC
						oModel = new sap.ui.model.json.JSONModel(vQuery);

						// Set newly acquired data
						sap.ui.getCore().setModel(oModel, "table");

						debugger;
						// Create an AND FILTER
						var oFilter = new sap.ui.model.Filter("Key", {
							filters : [ new sap.ui.model.Filter({
								path : 'table>/FLIGHTS_TAB/CARRID',
								operator : sap.ui.model.FilterOperator.EQ,
								value1 : oCarrid.getValue()
							}), new sap.ui.model.Filter({
								path : 'table>/FLIGHTS_TAB/CONNID',
								operator : sap.ui.model.FilterOperator.EQ,
								value1 : oEvt.getParameter("value")
							})

							]
						});

						// Get binding ON which we're gonna apply this filter

						var oBinding = oTable.getBinding("items");

						// Set Filter
						oBinding.filter([ oFilter ]);
						
						sap.m.MessageToast.show("search for Flight: " + oCarrid.getValue() + " Airline: " + oEvt.getParameter("value"));
					}

				/**
				 * Similar to onAfterRendering, but this hook is invoked before
				 * the controller's View is re-rendered (NOT before the first
				 * rendering! onInit() is used for that one!).
				 * 
				 * @memberOf App24_VTable_Show
				 */
				// onBeforeRendering: function() {
				//
				// },
				/**
				 * Called when the View has been rendered (so its HTML is part
				 * of the document). Post-rendering manipulations of the HTML
				 * could be done here. This hook is the same one that SAPUI5
				 * controls get after being rendered.
				 * 
				 * @memberOf App24_VTable_Show
				 */
				// onAfterRendering: function() {
				//
				// },
				/**
				 * Called when the Controller is destroyed. Use this one to free
				 * resources and finalize activities.
				 * 
				 * @memberOf App24_VTable_Show
				 */
				// onExit: function() {
				//
				// }
				});