sap.ui.jsview("app15_shell.shellView", {

	/**
	 * Specifies the Controller belonging to this View. In the case that it is
	 * not implemented, or that "null" is returned, this View does not have a
	 * Controller.
	 * 
	 * @memberOf app15_shell.shellView
	 */
	getControllerName : function() {
		return "app15_shell.shellView";
	},

	/**
	 * Is initially called once after the Controller has been instantiated. It
	 * is the place where the UI is constructed. Since the Controller is given
	 * to this method, its event handlers can be attached right away.
	 * 
	 * @memberOf app15_shell.shellView
	 */
	createContent : function(oController) {

		var oShell = new sap.ui.ux3.Shell({
			appTitle : "demoShell",
			logoutButtonTooltip : "Bye",
			worksetItems : [ new sap.ui.ux3.NavigationItem({
				text : "Home",
				key : "Home",
				press : function(oEvt) {
					// Mensaje que aparece y desaparece
					sap.m.MessageToast.show("Menu1 pressed!");
				}
			}),

			new sap.ui.ux3.NavigationItem({
				text : "Butt2",
				key : "Butt2",
				press : function(oEvt) {
					// Mensaje que aparece y desaparece
					sap.m.MessageToast.show("Menu2 pressed!");
				}
			}),

			new sap.ui.ux3.NavigationItem({
				text : "Butt3",
				key : "Butt3",
				press : function(oEvt) {
					// Mensaje que aparece y desaparece
					sap.m.MessageToast.show("Menu3 pressed!");
				}
			})

			],

			content : [ new sap.m.Button({
				text : "Simple Button"
			}) ],
			worksetItemSelected : function(oEvt) {
				sap.m.MessageToast.show(oEvt.getParameter("id"));
			}
		});

		// oShell.setTitle("demo");
		// oShell.setTitleLevel("H1");

		var oPage = new sap.m.Page({
			title : "Shell",
			content : [ oShell ]
		});

		return oPage;

	}

});