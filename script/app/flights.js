(function (app) {
    app.Flights = function() {
        var self = this;
    }
    
    app.Flights.prototype.airlines = ["Gazprom", "Transaero", "Turkish Airlines", "Utair"],
    app.Flights.prototype.planes = ["Boeing 747", "Airbus A350", "Sukhov SU-27", "Antonov AN-158"],
    app.Flights.prototype.airports = ["Vnukovo, Moscow", "O'hara, Chicago", "Heathrow, London", "Haneda, Tokyo"],
    app.Flights.prototype.airportsShort = ["VNK, MOW", "OH, CHI", "HTR, LON", "HND, TYO"],
    app.Flights.prototype.planesShort = ["B747", "A350" ,"SU27", "AN158"],
    app.Flights.prototype.about = ["#1445","#1123","#5370"],
    app.Flights.prototype.statusArrive = ["Регистрация", "Ожидание посадки", "Посадка закончена", "Вылетел"],
    app.Flights.prototype.statusDepart = ["По расписанию", "Летит", "Приземлился"],
    app.Flights.prototype.statusCommon = ["Задерживается до ", "Отменен"],
    
    app.Flights.prototype.fetch = function (n) {
        var self = this,
            randomAirlineId,
            randomPlaneId,
            randomAirportId,
            flights = [];
            
        
        for (var i = 0; i < n; i++) {
            var flight = {};
        
            randomAirlineId = app.getRandomInt(0,3);
            randomPlaneId = app.getRandomInt(0,3);
            randomAirportId = app.getRandomInt(0,3);
            
            flight.type = app.getRandomInt(0,1) ? "arrive" : "depart";
            flight.number = app.getRandomInt(100,600);
            flight.airline = self.airlines[randomAirlineId];
            flight.plane = self.planes[randomPlaneId];
            flight.airport = self.airports[randomAirportId];
            flight.arriveDepart = 123;
            flight.statusArrive = self.statusArrive[app.getRandomInt(0,3)];
            flight.statusDepart = self.statusDepart[app.getRandomInt(0,2)];
            flight.statusCommon = self.statusCommon[app.getRandomInt(0,1)];
            flight.about = self.about[app.getRandomInt(0,2)];;
            flight.airportShort = self.airportsShort[randomAirportId];;
            flight.planeShort = self.planesShort[randomPlaneId];;
            flight.airlineLogo = "images/" + flight.airline +".png";
            
            flights.push(flight);
        }
        
        return flights;
    }
        
})(window.app)