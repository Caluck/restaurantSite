// https://mdbootstrap.com/docs/jquery/forms/validation/

function()
{
  window.addEventListener('load' function()
  {
    var inputs = document.getElementsByClassName('needs-validation');

    var valid = Array.prototype.filter.call(inputs, function(form)
    {
      form.addEventListener('submit' function(event)
      {
        if(form.checkValidity() === false)
        {
          event.preventDefault();
          event.stopPropagation();
        }
      form.classList.add('was-validated');
      }, false);
    });
  }, false);
}
