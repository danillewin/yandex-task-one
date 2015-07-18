(function (app) {
    app.Flights = function () {
        var self = this;
    };

    app.Flights.prototype.airlines = ["Gazprom", "Transaero", "Turkish Airlines", "Utair"];
    app.Flights.prototype.planes = ["Boeing 747", "Airbus A350", "Sukhov SU-27", "Antonov AN-158"];
    app.Flights.prototype.airports = ["Vnukovo, Moscow", "O'Hara, Chicago", "Heathrow, London", "Haneda, Tokyo"];
    app.Flights.prototype.airportsShort = ["VNK, MOW", "OHR, CHI", "HTR, LON", "HND, TYO"];
    app.Flights.prototype.planesShort = ["B747", "A350", "SU27", "AN158"];
    app.Flights.prototype.about = ["#1445", "#1123", "#5370"];
    app.Flights.prototype.statusArrive = ["Задерживается до ", "Регистрация", "Ожидание посадки", "Посадка закончена", "Вылетел", "Отменен"];
    app.Flights.prototype.statusDepart = ["Задерживается до ", "По расписанию", "Летит", "Приземлился", "Отменен"];

    app.Flights.prototype.fetch = function (n) {
        var self = this,
            randomAirlineId,
            randomPlaneId,
            randomAirportId,
            randomTypeId,
            randomDepartMinutes,
            randomArriveMinutes,
            randomDelayedArriveMinutes,
            departTimeHours,
            departTimeMinutes,
            arriveTimeHours,
            arriveTimeMinutes,
            delayedArriveTimeHours,
            delayedArriveTimeMinutes,
            i,
            flights = [];


        for (i = 0; i < n; i++) {
            var flight = {};

            randomAirlineId = app.getRandomInt(0, 3);
            randomPlaneId = app.getRandomInt(0, 3);
            randomAirportId = app.getRandomInt(0, 3);
            randomTypeId = app.getRandomInt(0, 1);
            randomDepartMinutes = app.getRandomInt(0, 1440);
            randomArriveMinutes = app.getRandomInt(0, 1440);
            randomDelayedArriveMinutes = (app.getRandomInt(0, 1440) + app.getRandomInt(0, 360)) % 1440;
            departTimeHours = ("0" +Math.floor(randomDepartMinutes / 60)).slice(-2);
            departTimeMinutes = ("0" +randomDepartMinutes % 60).slice(-2);
            arriveTimeHours = ("0" +Math.floor(randomArriveMinutes / 60)).slice(-2);
            arriveTimeMinutes = ("0" +randomArriveMinutes % 60).slice(-2);
            delayedArriveTimeHours = ("0" +Math.floor(randomDelayedArriveMinutes / 60)).slice(-2);
            delayedArriveTimeMinutes = ("0" +randomDelayedArriveMinutes % 60).slice(-2);

            flight.type = randomTypeId ? "arrive" : "depart";
            flight.typeText = randomTypeId ? "Прилет" : "Вылет";
            flight.number = app.getRandomInt(100, 600);
            flight.airline = self.airlines[randomAirlineId];
            flight.plane = self.planes[randomPlaneId];
            flight.airport = self.airports[randomAirportId];
            flight.status = randomTypeId ? self.statusArrive[app.getRandomInt(0, 5)] : self.statusDepart[app.getRandomInt(0, 4)];
            flight.about = self.about[app.getRandomInt(0, 2)];
            flight.airportShort = self.airportsShort[randomAirportId];
            flight.planeShort = self.planesShort[randomPlaneId];
            flight.airlineLogo = "images/" + flight.airline + ".png";
            flight.arriveTime = arriveTimeHours + ":" + arriveTimeMinutes;
            flight.departTime = departTimeHours + ":" + departTimeMinutes;
            flight.delayedToTime = "00" + ":" + "00";

            flights.push(flight);
        }

        return flights;
    };

}) (window.app)
