sap.ui.jsview("app11_events.event_view", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf app11_events.event_view
	*/ 
	getControllerName : function() {
		return "app11_events.event_view";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf app11_events.event_view
	*/ 
	createContent : function(oController) {
		
		var oTitle = new sap.m.Label({
			text:"Simple Form"
		}).addStyleClass("TitleCss");
		
		var oInput = new sap.m.Input("idInput",{
  			liveChange:[oController.liveChange],
			placeholder: "Enter Name"
		});
		
		var oBtn = new sap.m.Button("idButton",{
			text: "Submit"
		});
		
		var oPage = new sap.m.Page({
			title:"Events",
			content: [
				oInput,
				oBtn
				
			]
		}).addStyleClass("newView");
 		
 		return oPage;
	}

});