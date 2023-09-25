/// <reference types="cypress" />
import { Chance } from "chance";
const chance = new Chance();
const email = chance.email();

describe('My_First_Test', () => {
  beforeEach(() => {
    cy.visit("http://localhost:4200");
  })

  it('Contains everything needed on the landing page', () => {
    cy.contains("Main Component");
    cy.contains("employee works!");
    cy.contains("Rick");
    cy.contains("This is from ng-content");
    cy.contains("Rooms View");
    cy.contains("Hide Rooms");
    cy.contains("Change Title");
    cy.contains("Number of rooms:");
    cy.contains("10");
    cy.contains("0");
    cy.contains("Available rooms:");
    cy.contains("delete Room");
    cy.contains("Hilton Hotel");
    cy.contains("Add Room to List");
    cy.contains("add available Room");
  })
  it("add available Room and delete Room work properly and counter doesnt go under 0", () => {
    cy.contains("Hide Rooms").click();
    cy.url().should("not.include", "Available rooms:");
    cy.url().should("not.include", "10");
    cy.url().should("not.include", "Number of rooms:");
    cy.url().should("not.include", "div", "0");
    cy.url().should("not.include", "add available Room");
    cy.url().should("not.include", "delete Room");
    cy.url().should("not.include", "Add Room to List");
    cy.contains("Hide Rooms").click();
    cy.contains("Available rooms:");
    cy.contains("0");
    cy.contains("10");
    cy.contains("Available rooms:");
    cy.contains("add available Room");
    cy.contains("delete Room");
    cy.contains("Add Room to List");
    cy.contains("add available Room").click();
    cy.contains("div", "1");
    cy.contains("delete Room").click();
    cy.contains("div", "0");
    cy.url().should("not.include", "div", "1");
    cy.contains("delete Room").click();
    cy.contains("div", "0");
    cy.url().should("not.include", "div", "1");
    cy.contains("add available Room").click();
    cy.contains("add available Room").click();
    cy.contains("div", "2");
  })
  it("List of Rooms and change Title work properly", () => {
    cy.contains("add available Room").click();
    cy.contains("ROOM LIST");
    cy.contains("Change Title").click();
    cy.contains("ROOMS LIST");
    cy.contains("tr td", "100%");
    cy.contains("tr td", "200%");
    cy.contains("tr td", "300%");
    cy.url().should("not.include", "tr td", "400%");
    cy.contains("Add Room to List").click();
    cy.contains("tr td", "400%");
    cy.url().should("not.include", "tr td", "500%");
    cy.contains("Add Room to List").click();
    cy.contains("tr td", "500%");
    // cy.contains("tr td", "Select").click();
    cy.get("tr").eq(1).contains("Select").click();
    cy.contains("div", '{ "roomId": 1, "roomType": "Deluxe Room", "amenities": "Air Conditioner, Free Wifi, TV", "price": 500, "photos": "https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80", "checkinTime": "2021-11-10T23:00:00.000Z", "checkoutTime": "2021-11-11T23:00:00.000Z", "rating": 4.5 }');
    cy.get("tr").eq(2).contains("Select").click();
    cy.url().should("not.include", "div", '{ "roomId": 1, "roomType": "Deluxe Room", "amenities": "Air Conditioner, Free Wifi, TV", "price": 500, "photos": "https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80", "checkinTime": "2021-11-10T23:00:00.000Z", "checkoutTime": "2021-11-11T23:00:00.000Z", "rating": 4.5 }');
    cy.contains("div", '{ "roomId": 2, "roomType": "Super Deluxe Room", "amenities": "Pool, Air Conditioner, Free Wifi, TV", "price": 750, "photos": "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80", "checkinTime": "2021-12-10T23:00:00.000Z", "checkoutTime": "2021-12-11T23:00:00.000Z", "rating": 2.5 }');
    cy.get("tr").eq(3).contains("Select").click();
    cy.url().should("not.include", "div", '{ "roomId": 2, "roomType": "Super Deluxe Room", "amenities": "Pool, Air Conditioner, Free Wifi, TV", "price": 750, "photos": "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80", "checkinTime": "2021-12-10T23:00:00.000Z", "checkoutTime": "2021-12-11T23:00:00.000Z", "rating": 2.5 }');
    cy.contains("div", '{ "roomId": 3, "roomType": "Private Suite", "amenities": "Pool, Air Conditioner, Free Wifi, TV, Balcony, Bathtub", "price": 2400, "photos": "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80", "checkinTime": "2021-12-23T23:00:00.000Z", "checkoutTime": "2021-12-27T23:00:00.000Z", "rating": 3.5 }')
    cy.get("tr").eq(4).contains("Select").click();
    cy.url().should("not.include", "div", '{ "roomId": 3, "roomType": "Private Suite", "amenities": "Pool, Air Conditioner, Free Wifi, TV, Balcony, Bathtub", "price": 2400, "photos": "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80", "checkinTime": "2021-12-23T23:00:00.000Z", "checkoutTime": "2021-12-27T23:00:00.000Z", "rating": 3.5 }');
    cy.contains("div", '{ "roomId": 4, "roomType": "Budget Room", "amenities": "Free Wifi, TV", "price": 200, "photos": "https://images.unsplash.com/photo-1576354302919-96748cb8299e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGhvdGVsJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60", "checkinTime": "2021-11-13T23:00:00.000Z", "checkoutTime": "2021-11-15T23:00:00.000Z", "rating": 1.6 }');
    cy.get("tr").eq(5).contains("Select").click();
    cy.url().should("not.include", "div", '{ "roomId": 3, "roomType": "Private Suite", "amenities": "Pool, Air Conditioner, Free Wifi, TV, Balcony, Bathtub", "price": 2400, "photos": "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80", "checkinTime": "2021-12-23T23:00:00.000Z", "checkoutTime": "2021-12-27T23:00:00.000Z", "rating": 3.5 }');
    cy.contains("div", '{ "roomId": 4, "roomType": "Budget Room", "amenities": "Free Wifi, TV", "price": 200, "photos": "https://images.unsplash.com/photo-1576354302919-96748cb8299e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGhvdGVsJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60", "checkinTime": "2021-11-13T23:00:00.000Z", "checkoutTime": "2021-11-15T23:00:00.000Z", "rating": 1.6 }');
  })
})