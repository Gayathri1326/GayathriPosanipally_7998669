function Event(name, seats, category) {

    this.name = name;
    this.seats = seats;
    this.category = category;
}

Event.prototype.checkAvailability = function () {

    if (this.seats > 0) {

        return "Seats Available";

    } else {

        return "Event Full";
    }
};

const event1 = new Event("Music Fest", 20, "Music");

console.log("Event Details:");

Object.entries(event1).forEach(function([key, value]) {

    console.log(key + ": " + value);
});

console.log(event1.checkAvailability());