(function (app) {
    
    var flightsAPI = new app.Flights();
        
    this.flights = flightsAPI.fetch(30);
    
    ko.applyBindings(this);
    
})(window.app)