(function ($) {
	function floatLabel(inputType) {
		$(inputType).each(function () {
			var $this = $(this);
			// on focus add class active to label
			$this.focus(function () {
				$this.next().addClass("active");
			});
			// on blur check field and remove class if needed
			$this.blur(function () {
				if ($this.val() === '' || $this.val() === 'blank') {
					$this.next().removeClass("active");
				}
			});
			// on change check field and add class if needed
			$this.change(function() {
				if ($this.val() !== '' && $this.val() !== 'blank') {
					$this.next().addClass("active");
				} else {
					$this.next().removeClass("active");
				}
			});
		});
	}
	// just add a class of "floatLabel to the input field!"
	floatLabel(".floatLabel");
})(jQuery);
if (window.location.pathname.includes('/editInvoice/') || window.location.pathname.match(/\/editInvoiceLine\/\d+/)) {
var inputs = document.querySelectorAll(".floatLabel");

function validateCheckOutDate() {
	var checkInDate = new Date(document.getElementById("arrive").value);
	var checkOutDate = new Date(document.getElementById("depart").value);
	if (checkOutDate < checkInDate) {
	  alert("La fecha de salida debe ser posterior a la fecha de llegada.");
	  document.getElementById("depart").value = document.getElementById("arrive").value;
	}
  }


function validateCheckOutDate() {
	var checkInDate = new Date(document.getElementById("arrive").value);
	var checkOutDate = new Date(document.getElementById("depart").value);
	if (checkOutDate < checkInDate) {
	  alert("La fecha de salida debe ser posterior a la fecha de llegada.");
	  document.getElementById("depart").value = document.getElementById("arrive").value;
	}
  }


function validateCheckOutDate() {
	var checkInDate = new Date(document.getElementById("arrive").value);
	var checkOutDate = new Date(document.getElementById("depart").value);
	if (checkOutDate < checkInDate) {
	  alert("La fecha de salida debe ser posterior a la fecha de llegada.");
	  document.getElementById("depart").value = document.getElementById("arrive").value;
	}
  }

for (var i = 0; i < inputs.length; i++) {
	var input = inputs[i];
	if (input.value !== '') {
		input.nextElementSibling.classList.add("active");
	}

}
}



