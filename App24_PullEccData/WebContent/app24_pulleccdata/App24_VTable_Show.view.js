sap.ui.jsview("app24_pulleccdata.App24_VTable_Show", {

	/**
	 * Specifies the Controller belonging to this View. In the case that it is
	 * not implemented, or that "null" is returned, this View does not have a
	 * Controller.
	 * 
	 * @memberOf App24_VTable_Show
	 */
	getControllerName : function() {
		return "app24_pulleccdata.App24_VTable_Show";
	},

	/**
	 * Is initially called once after the Controller has been instantiated. It
	 * is the place where the UI is constructed. Since the Controller is given
	 * to this method, its event handlers can be attached right away.
	 * 
	 * @memberOf App24_VTable_Show
	 */
	createContent : function(oController) {

		// client = new XMLHttpRequest()
		// var oModel = new
		// sap.ui.model.json.JSONModel("http://fdreccdev.inside.fender:8000/sap/bc/dasa_jsonfmcall/zdasa_UI5_rfc_poc?carrid=LH&connid=400&json");

		// oModel.getData().FLIGHTS_TAB.CARRID
		var oCarrid = new sap.m.Input("idCarrid",{
			required : true,
			placeholder : "Airline",
			width : "30%",
			submit : [oController.onCarrSub,oController]
		});

		var oConnid = new sap.m.Input("idConnid",{
			required : true,
			placeholder : "Flight Number",
			width : "30%",
			submit : [oController.onConnSub,oController]
		});

		var oTable = new sap.m.Table("idTable",{
			title : "Flights",

			columns : [

			new sap.m.Column({
				header : new sap.m.Label({
					text : "Airline",
					mergeDuplicates:true
				})

			}),

			new sap.m.Column({
				header : new sap.m.Label({
					text : "Flight Number",
					mergeDuplicates:true
				})
			}),

			new sap.m.Column({
				header : new sap.m.Label({
					text : "Currency"
				})
			}),

//			new sap.m.Column({
//				header : new sap.m.Label({
//					text : "Date"
//				})
//
//			}),

			new sap.m.Column({
				header : new sap.m.Label({
					text : "Airfare"
				})

			}),

			new sap.m.Column({
				header : new sap.m.Label({
					text : "Airline Currency"
				})

			}),

			new sap.m.Column({
				header : new sap.m.Label({
					text : "Plane Type"
				})

			}),

			new sap.m.Column({
				header : new sap.m.Label({
					text : "Max. capacity econ."
				})

			}),

			new sap.m.Column({
				header : new sap.m.Label({
					text : "Occupied econ."
				})

			}),

			new sap.m.Column({
				header : new sap.m.Label({
					text : "Total"
				})

			})

			]
		});

		// Table item Appearance
		var oTableItems = new sap.m.ColumnListItem({
			title : "Flights",
			cells : [ new sap.m.Text({
				text : "{table>/FLIGHTS_TAB/CARRID}"
//				text : {path: "FLIGHTS_TAB/CARRID", model:"table"}
			}),

			new sap.m.Text({
				text : "{table>/FLIGHTS_TAB/CONNID}"
			}),

			new sap.m.Text({
				text : "{table>/FLIGHTS_TAB/CURRENCY}"
			}),

//			new sap.m.Text({
//				dateValue : "{table>/FLIGHTS_TAB/DATE}"
//			}),

			new sap.ui.unified.Currency({
				value : "{table>/FLIGHTS_TAB/PRICE}",
				currency : "{table>/FLIGHTS_TAB/CURRENCY}"
			}),

			new sap.m.Text({
				text : "{table>/FLIGHTS_TAB/CURRENCY}"
			}),

			new sap.m.Text({
				text : "{table>/FLIGHTS_TAB/PLANETYPE}"
			}),

			new sap.m.ObjectNumber({
				number : "{table>/FLIGHTS_TAB/SEATSMAX}"
			}),

			new sap.m.ObjectNumber({
				number : "{table>/FLIGHTS_TAB/SEATSOCC}"
			}),

			new sap.m.ObjectNumber({
				number : "{table>/FLIGHTS_TAB/PAYMENTSUM}"
			})

			]
		});

		oTable.bindItems({
			path : "table>/FLIGHTS_TAB/",
//			path : {path: "FLIGHTS_TAB", model:"table"},
			template : oTableItems
		});

		var oPage = new sap.m.Page({
			title : "Flights",
			content : [ oCarrid, oConnid, oTable ]
		});

		return oPage;

	}
});