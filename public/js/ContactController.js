(function() {
'use strict';

angular
    .module('ContactPage')
    .controller('ContactController', ContactController);


function ContactController($http) {
        var vm = this;
      
        
          vm.validationOptions = {
            rules: {
                from: {
                    required: true
                },
                subject: {
                    required: true
                }
            },
            messages: {
                email: {
                    required: 'Please enter a valid email address.',
                    email: 'Your email address must be in the format of name@domain.com'
                },
                subject: {
                    required: 'Please enter your name.',
                }
            }
          };
          vm.register = function (form) {
            if(form.validate()) {
            // Form is valid!

                    console.log("TEST");
                //Request
                $http.post('/email', vm.email) 
                .success(function(data, status) {
                    console.log('Sent ok');
                    vm.message = "Thank You!";

                })
                .error(function(data, status) {
                    console.log("Error");
                    vm.message = "Error Sending Message";
                });
            }
          };
      }
})();