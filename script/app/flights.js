(function (app) {
    app.Flights = function () {
        var self = this;
    };

    app.Flights.prototype.airlines = ["Gazprom", "Transaero", "Turkish Airlines", "Utair"];
    app.Flights.prototype.airlinesAbbr = ["GZ", "TR", "TA", "UT"];
    app.Flights.prototype.planes = ["Boeing 747", "Airbus A350", "Sukhov SU-27", "Antonov AN-158"];
    app.Flights.prototype.airports = ["Vnukovo, Moscow", "O'Hare, Chicago", "Heathrow, London", "Haneda, Tokyo"];
    app.Flights.prototype.airportsShort = ["VKO, MOW", "OHR, CHI", "HTR, LON", "HND, TYO"];
    app.Flights.prototype.planesShort = ["B747", "A350", "SU27", "AN158"];
    app.Flights.prototype.about = ["#1445", "#1123", "#5370"];
    app.Flights.prototype.statusDepart = ["Задерживается до ", "Регистрация", "Ожидание посадки", "Посадка закончена", "Вылетел", "Отменен"];
    app.Flights.prototype.statusArrive = ["Задерживается до ", "По расписанию", "Летит", "Приземлился", "Отменен"];

    app.Flights.prototype.fetch = function (n) {
        var self = this,
            airlineId,
            planeId,
            airportId,
            typeId,
            departMinutes,
            arriveMinutes,
            delayedArriveMinutes,
            departTimeHours,
            departTimeMinutes,
            arriveTimeHours,
            arriveTimeMinutes,
            delayedArriveTimeHours,
            delayedArriveTimeMinutes,
            isAlert,
            isPrimary,
            statusId,
            i,
            flights = [];


        for (i = 0; i < n; i++) {
            var flight = {};

            airlineId = app.getRandomInt(0, 3);
            planeId = app.getRandomInt(0, 3);
            airportId = app.getRandomInt(0, 3);
            typeId = app.getRandomInt(0, 1);
            statusId = typeId ? app.getRandomInt(0, 4) : app.getRandomInt(0, 5);
            departMinutes = app.getRandomInt(0, 1440);
            arriveMinutes = app.getRandomInt(0, 1440);
            delayedArriveMinutes = (app.getRandomInt(0, 1440) + app.getRandomInt(0, 360)) % 1440;

            isAlert = (!typeId && (statusId == 0 || statusId == 5)) || (typeId && (statusId == 0 || statusId == 4));
            isPrimary = (!typeId && (statusId == 4)) || (typeId && (statusId == 3));
            departTimeHours = ("0" + Math.floor(departMinutes / 60)).slice(-2);
            departTimeMinutes = ("0" + departMinutes % 60).slice(-2);
            arriveTimeHours = ("0" + Math.floor(arriveMinutes / 60)).slice(-2);
            arriveTimeMinutes = ("0" + arriveMinutes % 60).slice(-2);
            delayedArriveTimeHours = ("0" + Math.floor(delayedArriveMinutes / 60)).slice(-2);
            delayedArriveTimeMinutes = ("0" + delayedArriveMinutes % 60).slice(-2);

            flight.type = typeId ? "arrive" : "depart";
            flight.typeText = typeId ? "Прилет" : "Вылет";
            flight.number = self.airlinesAbbr[airlineId] + app.getRandomInt(100, 600);
            flight.airline = self.airlines[airlineId];
            flight.plane = self.planes[planeId];
            flight.airport = self.airports[airportId];
            flight.status = typeId ? self.statusArrive[statusId] : self.statusDepart[statusId];
            flight.about = self.about[app.getRandomInt(0, 2)];
            flight.airportShort = self.airportsShort[airportId];
            flight.planeShort = self.planesShort[planeId];
            flight.airlineLogo = "images/" + flight.airline + ".png";
            flight.arriveTime = arriveTimeHours + ":" + arriveTimeMinutes;
            flight.departTime = departTimeHours + ":" + departTimeMinutes;
            flight.delayedToTime = statusId === 0 ? delayedArriveTimeHours + ":" + delayedArriveTimeMinutes : "";
            flight.isAlert = isAlert;
            flight.isPrimary = isPrimary;

            flights.push(flight);
        }

        return flights;
    };

}) (window.app)
