$(document).ready(function () {
  $("#step-2").hide();

  // Next Step
  $("#nextStep").click(function () {
    $("#step-1").hide();
    $("#step-2").fadeIn();
  });

  // Previous Step
  $("#prevStep").click(function () {
    $("#step-2").hide();
    $("#step-1").fadeIn();
  });

  // Active input for other business
  $("#Business").change(function () {
    if ($(this).val() === "Other") {
      $("#otherBusiness").removeClass("d-none").focus();
    } else {
      $("#otherBusiness").addClass("d-none").val("");
    }
  });

  // Add img logo for startup to review
  $("#logoUpload").change(function (event) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        $("#logoPreview").attr("src", e.target.result).removeClass("d-none");
      };
      reader.readAsDataURL(file);
    }
  });
});
