sap.ui.jsview("ovly.navigation-ui5.view.Empty", {

	/** Specifies the Controller belonging to this View. 
	 * In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	 * @memberOf ovly.navigation-ui5.view.Empty
	 */
	getControllerName: function () {
		return "ovly.navigation-ui5.controller.Empty";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	 * Since the Controller is given to this method, its event handlers can be attached right away. 
	 * @memberOf ovly.navigation-ui5.view.Empty
	 */
	createContent: function (oController) {
		// var oPage = new sap.m.Page({
		// 	title: "Title",
		// 	id: "page",
		// 	content: []
		// });

		// var app = new sap.m.App(this.createId("app"), {
		// 	initialPage: "oPage"
		// });
		// app.addPage(oPage);
		// return app;

		// return new sap.m.Page();		

		// Novo Botão
		var oButton = new sap.m.Button({
			text: "Ação 1"
		});
		
		// Nova Pagina
		var oMessagePage = new sap.m.MessagePage({
			icon: "sap-icon//question-mark",
			text: "Oooooops",
			description: "Registro não encontrado",
			
			buttons:[
				
				oButton,
				new sap.m.Button({text: "Ação 2"})
				]
			});
		
		return oMessagePage;
		

	}

});