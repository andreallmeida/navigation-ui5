sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/routing/History"
], function (Controller,History) {
	"use strict";

	return Controller.extend("ovly.navigation-ui5.controller.S2", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf ovly.navigation-ui5.view.S2
		 */
		onInit: function () {
			
			// o this neste ponto não conhece o COMPONENT.JS
			
			// Usando o getOwnerComponent, recuperamos o COMPONENT.JS
			
			// No Component.JS, temos o metodo para recuperar as Rotas ---getRouter---
			
			// Podemos posicionar uma roda através do metodo - getRoute
			
			// Na rota recuperada, registramos um metodo local para ser executada via call back no evento
			// informando o próprio controller da view como LISTENER ---PatternMatched---
			this.getOwnerComponent().getRouter().getRoute("equipe").attachPatternMatched(this.onPatternMatched, this);

		},
		
		onPatternMatched: function(oEvent){
			
			// Identifica os parametros
			var oParameters = oEvent.getParameters();
			
			// Identifica o Argumento
			var oArguments = oParameters.arguments;
			
			// Identifica o parametro da Rota
			var sIdEquipe = oArguments.idEquipe;
			
			// alert("Time: " + sIdEquipe);
			
			this.getView().bindElement({
				path: "/Teams('" + sIdEquipe + "')"
			});
		},

		onNavButtonPress: function () {

			// Identifica Histórico de chamadas
			var oHistory = History.getInstance();
			
			// Busca página anterior, caso exista
			var sPreviousHash = oHistory.getPreviousHash();

			// Se existir pagina anterior, volta 1 na pilha de chamadas
			if (sPreviousHash !== undefined) {
				window.history.go(-1);
				
			// Senao, retorna para uma "rota" default
			} else {
				var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
				oRouter.navTo("");
			}

		}

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf ovly.navigation-ui5.view.S2
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf ovly.navigation-ui5.view.S2
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf ovly.navigation-ui5.view.S2
		 */
		//	onExit: function() {
		//
		//	}

	});

});