<!doctype html>
<html>
</body>
  <head>
    <title>titre</title>
  </head>
  <body>
    <form id="the-form" action="formhandler.php" method="post">
      <div id="form-head">Formulaire</div>
        <label for="nom">Nom</label>
        <input type="text" name="nom" />
        <label for="prenom">Prenom</label>
        <input type="text" name="prenom"  />
        <input id="form-submit" type="submit" value="Ok" />
    </form>
    <div id="form-result">

    </div>
    <!-- <script src="https://code.jquery.com/jquery-3.1.0.slim.min.js" integrity="sha256-cRpWjoSOw5KcyIOaZNo4i6fZ9tKPhYYb6i5T9RSVJG8=" crossorigin="anonymous"></script>
    <script type="text/javascript">
      $(document).ready(function() {
        $(document).on('submit', 'form#the-form', function(e){
          e.preventDefault();
          $.ajax({
            method: 'POST',
            url: 'formhandler.php',
            data: $('#the-form').serialize(),
            datatype: 'html',
            success: function(result){
              $('#form-result').html(result);
            }
          });
        });
      });
    </script> -->
  </body>
</html>
