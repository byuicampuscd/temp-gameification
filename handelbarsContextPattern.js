/*jslint plusplus: true, browser: true, devel: true */
/*global Handlebars*/

var context = {
    studentName: "First Last",
    unitRequiredBottom: 70,
    unitOptionalBottom: 30,
    units: [
        {
            name: "Renaissance",
            requiredTop: 430,
            requiredBottom: 500,
            optionalTop: 175,
            optionalBottom: 300,
            unitRequiredTop: 30,
            unitOptionalTop: 15,
            unitPercent: 20,
            unitGrade: "B+"
        }, {
            name: "Baroque",
            requiredTop: 0,
            requiredBottom: 500,
            optionalTop: 0,
            optionalBottom: 300,
            unitRequiredTop: 0,
            unitOptionalTop: 0,
            unitPercent: 20,
            unitGrade: "F"
        }, {
            name: "Techno",
            requiredTop: 500,
            requiredBottom: 500,
            optionalTop: 300,
            optionalBottom: 300,
            unitRequiredTop: 70,
            unitOptionalTop: 30,
            unitPercent: 100,
            unitGrade: "A+"
        }
    ]
};

Handlebars.registerHelper('width', function (fill, xStart) {
    "use strict";
    console.log("fill:", fill);
    console.log("xStart:", xStart);
    return fill - xStart;
});

Handlebars.registerHelper('fillRequired', function () {
    "use strict";
    var percent = this.requiredTop / this.requiredBottom,
        x1 = 96,
        x2 = 386,
        diff = x2 - x1;
    return x1 + (percent * diff);
});

Handlebars.registerHelper('fillOptional', function () {
    "use strict";
    var percent = this.optionalTop / this.optionalBottom,
        x1 = 418,
        x2 = 574,
        diff = x2 - x1;
    return x1 + (percent * diff);
});
