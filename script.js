$(document).ready(function (e) {
  $("#click").click(function () {
    var name = $("#name").val();
    var email = $("#email").val();
    var number = $("#number").val();
    var password = $("#password").val();
    var confirmpassword = $("#confirmpassword").val();
    var gender = $("#gender").val();
    var program = $("#check").val();
    const emailpattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const passwordpattern =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    const numberpattern = /^[6-9]\d{9}$/;
    $(".error").remove();
    if (name.length !== 0) {
      if (name.length < 3) {
        $("#name").after('<p class="error">minimum 3 characters</p>');
      }
    } else {
      $("#name").after('<p class="error">field is empty</p>');
    }
    if (email.length !== 0) {
      if (!emailpattern.test(email)) {
        $("#email").after('<p class="error">email is invalid</p>');
      }
    } else {
      $("#email").after('<p class="error">field is empty</p>');
    }
    if (number.length !== 0) {
      if (!numberpattern.test(number)) {
        $("#number").after('<p class="error">password is invalid</p>');
      }
    } else {
      $("#number").after('<p class="error">field is empty</p>');
    }
    if (password.length !== 0) {
      if (!passwordpattern.test(password)) {
        $("#password").after('<p class="error">password is invalid</p>');
      }
    } else {
      $("#password").after('<p class="error">field is empty</p>');
    }
    if (password !== confirmpassword) {
      $("#confirmpassword").after('<p class="error">password is mismatch</p>');
    }
    var gender = $("input[name='gender']:checked");
    console.log(gender);
    if (gender.length == 0) {
      $("#g1").after('<p class="error">Please select a gender</p>');
    }
    var program = $("input[id='check']:checked");
    if (program.length < 2) {
      $("#c1").after('<p class="error">Please select one options</p>');
    }
  });
});
