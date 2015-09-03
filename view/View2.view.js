sap.ui.jsview("view.View2", {

	/** Specifies the Controller belonging to this View. 
	 * In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	 * @memberOf view.view2
	 */
	getControllerName: function() {
		return "view.View2";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	 * Since the Controller is given to this method, its event handlers can be attached right away.
	 * @memberOf view.view2
	 */
	createContent: function(oController) {
		
		var oBackButton = new sap.m.Button("backButton", {
			text : "Back to First Page",
			styled: false,
			press : [oController.onBack]
		});
		
		oBackButton.addStyleClass('button');
		
		return new sap.m.Page({
			title: "Title",
			content: [
				oBackButton
			]
		});
	}

});