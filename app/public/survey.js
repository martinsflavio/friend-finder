
$(document).ready(()=> {

  // submit btn
  $('#submit').on('click', e =>{
    e.preventDefault();

    const valid = () => {
      var result = true;
      // validate form
      $('.form-control').each(function() {
        if ( $(this).val() === '' )
          result = false;
      });
      // validate questions
      $('.chosen-select').each(function() {

        if ( $(this).val() === '' )
          result = false;
      });
      return result;
    };

    if (valid()) {
      let newFriend = {
        name: $("#name").val(),
        photoUrl: $("#photo").val(),
        scores: [$("#q1").val(), $("#q2").val(), $("#q3").val(), $("#q4").val(), $("#q5").val(), $("#q6").val(), $("#q7").val(), $("#q8").val(), $("#q9").val(), $("#q10").val(), ]
      };

      let url = window.location.origin;

      $.ajax({
        type: "POST",
        url: url + "/api/friends",
        processData: false,
        contentType: 'application/json',
        data: JSON.stringify(newFriend),
      }).done((res,err)=>{
        $('#matchName').text(res.name);
        $('#matchImg').attr({src: res.photoUrl, alt: res.name});
        $('#resultsModal').modal();
      });

    } else {
      alert("Please fill out all fields before submitting!");
    }
  });
  $('#close').on('click', () => {
    location.reload();
  });
});


