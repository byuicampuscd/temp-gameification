/*jslint plusplus: true, browser: true, devel: true */
/*global Handlebars*/

var context = {
    studentName: "First Last",
    units: [
        {
            name: "Renaissance",
            requiredTop: 430,
            requiredBottom: 500,
            optionalTop: 175,
            optionalBottom: 300,
            unitRequiredTop: 30,
            unitRequiredBottom: 70,
            unitOptionalTop: 15,
            unitOptionalBottom: 30,
            unitPercent: 20,
            unitGrade: "B+"
        }, {
            name: "Baroque",
            requiredTop: 0,
            requiredBottom: 500,
            optionalTop: 0,
            optionalBottom: 300,
            unitRequiredTop: 0,
            unitRequiredBottom: 70,
            unitOptionalTop: 0,
            unitOptionalBottom: 30,
            unitPercent: 0,
            unitGrade: "F"
        }, {
            name: "Techno",
            requiredTop: 500,
            requiredBottom: 500,
            optionalTop: 300,
            optionalBottom: 300,
            unitRequiredTop: 70,
            unitRequiredBottom: 70,
            unitOptionalTop: 30,
            unitOptionalBottom: 30,
            unitPercent: 100,
            unitGrade: "A+"
        }, {
            name: "Country",
            requiredTop: 500,
            requiredBottom: 500,
            optionalTop: 0,
            optionalBottom: 300,
            unitRequiredTop: 70,
            unitRequiredBottom: 70,
            unitOptionalTop: 30,
            unitOptionalBottom: 30,
            unitPercent: 100,
            unitGrade: "A+"
        }
    ]
};

Handlebars.registerHelper('width', function (fill, xStart) {
    "use strict";
    return fill - xStart;
});

Handlebars.registerHelper('fillRequired', function () {
    "use strict";
    var percent = this.requiredTop / this.requiredBottom,
        x1 = 94,
        x2 = 386,
        diff = x2 - x1;
    return x1 + (percent * diff);
});

Handlebars.registerHelper('fillOptional', function () {
    "use strict";
    var percent = this.optionalTop / this.optionalBottom,
        x1 = 419,
        x2 = 574,
        diff = x2 - x1;
    return x1 + (percent * diff);
});

Handlebars.registerHelper('fillUnitRequired', function () {
    "use strict";
    var percent = this.unitRequiredTop / this.unitRequiredBottom,
        x1 = 94,
        x2 = 574,
        diff = x2 - x1;
    return x1 + (percent * diff);
});

Handlebars.registerHelper('fillUnitOptional', function () {
    "use strict";
    var percent = this.optionalTop / this.optionalBottom,
        x1 = 419,
        x2 = 574,
        diff = x2 - x1;
    return x1 + (percent * diff);
});
