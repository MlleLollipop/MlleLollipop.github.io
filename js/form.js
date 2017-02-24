//Contact form variables
var contactForm = document.getElementById("contact-form");

//Adhesion form variables


var otherCategory = document.getElementById("otherCategory");
var otherCategoryInput = document.getElementById("otherCategoryInput");
var selectCategory = document.getElementById("selectCategory");

function validateContact() {
	contactForm.submit();
	contactForm.reset();
}

function resetForm() {
  contactForm.reset();
}

function addOtherCategory() {
	if (selectCategory.options[selectCategory.selectedIndex].value == "other") {
    window.alert("true");
		otherCategory.hidden = false;
		otherCategoryInput.required = true;

	}
	else {
    window.alert("false");
		otherCategory.hidden = true;
		otherCategoryInput.required = false;

	}
}

function popUp() {
  window.alert("test");
}
