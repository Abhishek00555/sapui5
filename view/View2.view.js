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
			text: "First Page",
			styled: false,
			type :	sap.m.ButtonType.Back,
			press: [oController.onBack]
		});

		// oBackButton.addStyleClass('button');

		var oCarosel = new sap.ui.commons.Carousel();
		oCarosel.setWidth("800px");
		oCarosel.setHeight("500px");
		oCarosel.setOrientation("horizontal");

		oCarosel.addContent(new sap.ui.commons.Image("image1Id", {
			src: "view/image/Koala.jpg",
			alt: "Koala",
			hieght: "500px",
			width: "800px"
		}));

		oCarosel.addContent(new sap.ui.commons.Image("image2Id", {
			src: "view/image/Desert.jpg",
			alt: "Image",
			hieght: "500px",
			width: "800px"
		}));

		return new sap.m.Page({
			title: "Title",
			content: [
				oBackButton, oCarosel
			]
		});
	}

});