sap.ui.jsview("app14_drag_event.Drag", {

	/**
	 * Specifies the Controller belonging to this View. In the case that it is
	 * not implemented, or that "null" is returned, this View does not have a
	 * Controller.
	 * 
	 * @memberOf app14_drag_event.Drag
	 */
	getControllerName : function() {
		return "app14_drag_event.Drag";
	},

	/**
	 * Is initially called once after the Controller has been instantiated. It
	 * is the place where the UI is constructed. Since the Controller is given
	 * to this method, its event handlers can be attached right away.
	 * 
	 * @memberOf app14_drag_event.Drag
	 */
	createContent : function(oController) {

		var oBtn = new sap.m.Button({
			type : "Accept",
			text : "Drag"

		// 2. Add Drag event
		}).addEventDelegate({

			// 3. This allows execution after rendering
			onAfterRendering : function(oBtn) {
				// 4. Create a function to make this shait draggable
				$(oBtn.srcControl.getDomRef()).draggable({

					// 5. Profit. Get documentation for fancy stuff on
					// jqueryui.com/demos
					cancel : false
				})
			}
		});

		var oPage = new sap.m.Page({
			title : "Drag App",
			content : [ oBtn ]
		});

		return oPage;
	}

});