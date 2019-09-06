/*jslint devel: true */

/*eslint no-console: "off", no-undef: "off" */

function validateForm() {
            var name = document.forms['register']['name'].value;
            var age = document.forms['register']['age'].value;
            var email = document.forms['register']['email'].value;
            if(!name.match(/^[A-Za-z]+$/)) {
				alert("Name:\t* CHARACTERS ONLY");
			}
            if(parseInt(age) < 18) {
                alert("Age:\t* EQUAL OR GREATER THAN 18");
            }
            if(!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
                alert("Email ID:\t* INVALID EMAIL ID");
            }
}