sap.ui.jsview("view.View1", {

	/** Specifies the Controller belonging to this View. 
	 * In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	 * @memberOf view.View1
	 */
	getControllerName: function() {
		return "view.View1";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	 * Since the Controller is given to this method, its event handlers can be attached right away.
	 * @memberOf view.View1
	 */
	createContent: function(oController) {
		
		var oButton = new sap.m.Button("buttonId", {
			text : "Next Page",
			type : sap.m.ButtonType.Accept,
			press: [oController.onNextPage]
		});
		
		var oStandardTile = new sap.m.StandardTile();
		oStandardTile.setIcon("sap-icon://image-viewer");
		oStandardTile.setTitle("Images");
		oStandardTile.setInfo("View Images");
		oStandardTile.setInfoState("Error");
		oStandardTile.setType(sap.m.StandardTileType.Create);
		oStandardTile.firePress([oController.onNextPage]);
		oStandardTile.attachPress(oController.onNextPage);
		var oTileContainer = new sap.m.TileContainer();
		oTileContainer.addTile(oStandardTile);
		
		
		return new sap.m.Page({
			title: "First Page",
			content: [
				oTileContainer, oButton
			]
		});
	}

});