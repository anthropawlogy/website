/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function checkZip(zip) {
  // valid zip range
  var zips = [59821, 59863, 59865, 59808, 59834, 59802, 59824, 59831, 59868, 59807, 59806, 59826, 59812, 59801, 59851, 59864, 59804, 59846, 59847];
  // return true if zip is found, otherwise not
  return $.inArray(zip, zips) != -1 ? true : false;
}
// Valid Zip codes allowing booking form
// 59821,59863,59865,59808,59834,59802,59824,59831,59868,59807,59806,59826,59812,59801,59851,59864,59804,59846, 59847
// Arlee,Ravalli,Saint Ignatius,Missoula,Frenchtown,Charlo,Dixon,Seeley Lake,Condon,Milltown,Ronan,Huson, Lolo
// If further away, take user to email option...

// form

// Prevent enter to be used to submit form
$(window).keydown(function (event) {
  if (event.keyCode == 13) {
    event.preventDefault();
    return false;
  }
});

// Initiate nav
var nav = 0;

var contactValidation = {
  fields: {
    contactFirstName: {
      identifier: 'contactFirstName',
      rules: [{
        type: 'empty',
        prompt: 'Please enter your first name'
      }]
    },
    contactLastName: {
      identifier: 'contactLastName',
      rules: [{
        type: 'empty',
        prompt: 'Please enter your last name'
      }]
    },
    contactEmail: {
      identifier: 'contactEmail',
      rules: [{
        type: 'email',
        prompt: 'Please enter a valid email address'
      }]
    },
    contactPhone: {
      identifier: 'contactPhone',
      rules: [{
        type: 'empty',
        prompt: 'Please enter your phone number'
      }]
    },
    contactAddress: {
      identifier: 'contactAddress',
      rules: [{
        type: 'empty',
        prompt: 'Please enter your address'
      }]
    },
    contactZip: {
      identifier: 'contactZip',
      rules: [{
        type: 'empty',
        prompt: 'Please enter your zip code (5 digits)'
      }, {
        type: 'minLength[5]',
        prompt: 'Please enter your zip code (5 digits)'
      }]
    },
    contactPreference: {
      identifier: 'contactPreference',
      rules: [{
        type: 'checked',
        prompt: 'Select your preferred contact method'
      }]
    }
  }
};

var petValidation = {
  fields: {
    petName: {
      identifier: 'petName',
      rules: [{
        type: 'empty',
        prompt: 'Please enter your pet\'s name'
      }]
    },

    petSpecies: {
      identifier: 'petSpecies',
      rules: [{
        type: 'checked',
        prompt: 'Select one option'
      }]
    },

    petBreed: {
      identifier: 'petBreed',
      rules: [{
        type: 'empty',
        prompt: 'Please enter your pet\'s breed'
      }]
    },

    petGender: {
      identifier: 'petGender',
      rules: [{
        type: 'empty',
        prompt: 'Please select your pet\'s gender'
      }]
    },

    petAge: {
      identifier: 'petAge',
      rules: [{
        type: ['empty', 'number'],
        prompt: 'Please enter your pet\'s age'
      }]
    },

    petComplaint: {
      identifier: 'petComplaint',
      rules: [{
        type: 'empty',
        prompt: 'Please give us more detail'
      }]
    }
  }
};

var apptValidation = {
  fields: {
    apptDate: {
      identifier: 'apptDate',
      rules: [{
        type: 'empty',
        prompt: 'Please select a date'
      }]
    },
    apptTime: {
      identifier: 'apptTime',
      rules: [{
        type: 'checked',
        prompt: 'Select one option'
      }]
    }
  }
};

$(document).ready(function () {

  // AJAX CODE START
  // Get the form.
  var form = $('#booking-form');
  // Get the messages div.
  var formMessages = $('#form-container');

  // States depending on navigation
  function updateNav(nav) {

    var formSections = $("#booking-form").children("div");
    formSections.hide(); // hide all forms, including navigation

    var contactFields = $(formSections[0]);
    var petFields = $(formSections[1]);
    var apptFields = $(formSections[2]);
    var subFields = $(formSections[3]);
    var navBtns = $(formSections[4]);
    var prevB = navBtns.children()[0];
    var nextB = navBtns.children()[1];

    // get the steps
    var stepIndicator = $('.steps').children();

    var stepOne = stepIndicator[0];
    var stepTwo = stepIndicator[1];
    var stepThree = stepIndicator[2];
    var stepFour = stepIndicator[3];

    switch (nav) {
      case 0:
        // initial state
        // $('#form-container').transition('fade right');
        $(navBtns).show();
        $(prevB).hide();
        $(nextB).show();
        $(contactFields).show();
        //steps
        $(stepOne).addClass('active');
        $(stepTwo).removeClass('active');
        break;
      case 1:
        // $('#form-container').transition('fade right');
        $(navBtns).show();
        $(prevB).show();
        $(nextB).show();
        $(petFields).show();
        //steps
        $(stepOne).removeClass('active');
        $(stepOne).addClass('completed');
        $(stepTwo).addClass('active');
        $(stepTwo).removeClass('disabled');
        $(stepThree).removeClass('active');
        break;
      case 2:
        // $('#form-container').transition('fade right');

        $(navBtns).show();
        $(prevB).show();
        $(nextB).show();
        $(apptFields).show();
        //steps
        $(stepTwo).addClass('completed');
        $(stepTwo).removeClass('active');
        $(stepThree).removeClass('disabled');
        $(stepThree).addClass('active');
        $(stepFour).removeClass('active');
        break;
      case 3:
        // $('#form-container').transition('fade right');

        $(navBtns).hide();
        $(subFields).show();
        //steps
        $(stepThree).addClass('completed');
        $(stepThree).removeClass('active');
        $(stepFour).removeClass('disabled');
        $(stepFour).addClass('active');
        break;
      default:
        alert('form error');
    }
  }
  updateNav(nav);

  $("#nxtBtn").click(function () {
    var check = [];
    var zipValid = true;
    var zip = void 0;
    switch (nav) {
      case 0:
        $.each(contactValidation.fields, function (index, element) {
          check.push($('#booking-form').form('validate field', element.identifier));
          if (element.identifier == "contactZip") {
            zip = $('input[name=' + element.identifier + ']').val();
            if (zip != "") {
              zipValid = checkZip(parseInt($('input[name=' + element.identifier + ']').val()));
            }
          }
        });
        break;
      case 1:
        $.each(petValidation.fields, function (index, element) {
          check.push($('#booking-form').form('validate field', element.identifier));
        });
        break;
      case 2:
        $.each(apptValidation.fields, function (index, element) {
          check.push($('#booking-form').form('validate field', element.identifier));
        });
        break;
      default:
        break;
    }

    // client has a zip code outside of range
    if (!zipValid) {
      // display option to client
      var message = "<p>The zip code " + zip + " is unfortunately outside of our current house call area, but we would love to see your pet!</p><p>Please contact us directly via <a href=\"mailto:booking@anthropawlogy.com\">booking@anthropawlogy.com</a> to discuss your needs further.</p>";
      $("#form-container").html(message);
      $("#form-container").append("<a class=\"btn btn-success\" href='/booking'>Click here to return to restart your booking request </a>");
    }

    if (jQuery.inArray(false, check) == -1) {
      nav++;
      // $('#form-container').transition('fade left',function() {
      updateNav(nav);
      // });
    }
  });

  $("#prevBtn").click(function () {
    nav--;
    $('#booking-form').find('.error').removeClass('error');

    $('#booking-form').find('.prompt').remove();
    updateNav(nav);
  });
  $("#prevBtn2").click(function () {
    nav--;
    $('#booking-form').find('.error').removeClass('error');

    $('#booking-form').find('.prompt').remove();
    updateNav(nav);
  });

  // datepicker
  var localTime = new Date();
  var mTime = new Date();
  mTime.setMinutes(mTime.getMinutes() + localTime.getTimezoneOffset() - 360);
  // var dateToday = new Date();
  var dateToday = mTime; // get mountain time (local for service)
  var tomorrow = new Date();
  tomorrow.setDate(dateToday.getDate() + 1);

  // Time off
  var disabledDays = [
    //"Sunday, April 1, 2018", "Monday, April 2, 2018","Tuesday, April 3, 2018", "Wednesday, April 4, 2018", "Thursday, April 5, 2018", "Friday, April 6, 2018", "Saturday, April 7, 2018"
    // "Saturday, April 14, 2018", "Sunday, April 15, 2018", "Monday, April 16, 2018", "Tuesday, April 17, 2018", "Wednesday, April 18, 2018", "Thursday, April 19, 2018",
    // "Friday, April 20, 2018", "Saturday, April 21, 2018", "Sunday, April 22, 2018", "Monday, April 23, 2018", "Tuesday, April 24, 2018", "Wednesday, April 25, 2018", "Thursday, April 26, 2018", "Friday, April 27, 2018", "Saturday, April 28, 2018"
  ];

  $("#datepicker").datepicker({
    beforeShowDay: function beforeShowDay(date) {
      var day = date.getDay();
      var string = jQuery.datepicker.formatDate('DD, MM d, yy', date);
      var isDisabled = $.inArray(string, disabledDays) != -1;
      //day != 0 disables all Sundays
      return [day != 0 && day != 2 && day != 6 && !isDisabled];
      //return [(day != 0), ''];
    },
    minDate: tomorrow,
    dateFormat: "DD, MM d, yy",
    onSelect: function onSelect(date) {
      // only accept evening appointments Weds and Fri (and only evenings for Mondays in October due to FirstVet)
      if ($("#datepicker").datepicker('getDate').getMonth() == 9 && $("#datepicker").datepicker('getDate').getDay() == 1 || $("#datepicker").datepicker('getDate').getDay() == 3 || $("#datepicker").datepicker('getDate').getDay() == 5) {
        $("#morning").hide();
        $("#lunch").hide();
      } else {
        $("#morning").show();
        $("#lunch").show();
      }

      if ($("#datepicker").datepicker('getDate').getDay() == 6) $("#evening").hide();else $("#evening").show();
    }
  });

  // display rules for form

  // form
  $('.ui.radio.checkbox').checkbox();
  $('.ui.dropdown').dropdown();

  // form validation
  $('.ui.form').form({
    keyboardShortcuts: false,
    inline: true,
    fields: {
      contactFirstName: {
        identifier: 'contactFirstName',
        rules: [{
          type: 'empty',
          prompt: 'Please enter your first name'
        }]
      },
      contactLastName: {
        identifier: 'contactLastName',
        rules: [{
          type: 'empty',
          prompt: 'Please enter your last name'
        }]
      },
      contactEmail: {
        identifier: 'contactEmail',
        rules: [{
          type: 'email',
          prompt: 'Please enter a valid email address'
        }]
      },
      contactPhone: {
        identifier: 'contactPhone',
        rules: [{
          type: 'empty',
          prompt: 'Please enter your phone number'
        }]
      },
      contactAddress: {
        identifier: 'contactAddress',
        rules: [{
          type: 'empty',
          prompt: 'Please enter your address'
        }]
      },
      contactZip: {
        identifier: 'contactZip',
        rules: [{
          type: 'empty',
          prompt: 'Please enter your zip code (5 digits)'
        }, {
          type: 'minLength[5]',
          prompt: 'Please enter your zip code (5 digits)'
        }]
      },
      contactPreference: {
        identifier: 'contactPreference',
        rules: [{
          type: 'checked',
          prompt: 'Select your preferred contact method'
        }]
      },

      petName: {
        identifier: 'petName',
        rules: [{
          type: 'empty',
          prompt: 'Please enter your pet\'s name'
        }]
      },

      petSpecies: {
        identifier: 'petSpecies',
        rules: [{
          type: 'checked',
          prompt: 'Select one option'
        }]
      },

      petBreed: {
        identifier: 'petBreed',
        rules: [{
          type: 'empty',
          prompt: 'Please enter your pet\'s breed'
        }]
      },

      petGender: {
        identifier: 'petGender',
        rules: [{
          type: 'empty',
          prompt: 'Please select your pet\'s gender'
        }]
      },

      petAge: {
        identifier: 'petAge',
        rules: [{
          type: 'empty',
          prompt: 'Please enter your pet\'s age'
        }]
      },

      petComplaint: {
        identifier: 'petComplaint',
        rules: [{
          type: 'empty',
          prompt: 'Please give us more detail'
        }]
      },

      apptDate: {
        identifier: 'apptDate',
        rules: [{
          type: 'empty',
          prompt: 'Please select a date'
        }]
      },
      apptTime: {
        identifier: 'apptTime',
        rules: [{
          type: 'checked',
          prompt: 'Select one option'
        }]
      }
    }
  });
});

/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(1);

__webpack_require__(0);

/***/ })
/******/ ]);
//# sourceMappingURL=App.bundle.js.map