<!DOCTYPE html>
<html lang="en-us">

<head>
  <meta charset="utf-8">
  <link rel="manifest" href="/manifest.json">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="">
  <meta name="keywords" content="">
  <link rel="icon" type="image/png" href="/favicon.ico" />
  <link rel="apple-touch-icon" href="/favicon.min.png">
  <script src="https://ajax.GOOGLEAPIS.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
  <script async src="/js.js"></script>

  <!-- Bootstrap CSS -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
  <!-- Bootstrap JavaScript -->
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous">
    </script>
  <!-- Custom CSS -->
  <link rel="stylesheet" href="/style.css" />
  <meta name="theme-color" content="#183820">
  <title>404 &#8211; Say Watt</title>
</head>

<body>
  <div class="container-fluid">
    <!-- Navbar -->
    <?php include 'C:\wamp64\www\SayWatt-Website\Say-Watt\navbar.php'; ?>
    <div class="jumbotron text-center">
      <h1 id="title123">
        404 &#8211; Page Not Found
      </h1>
      <hr>
      <?php include 'C:\wamp64\www\SayWatt-Website\Say-Watt\names.php'; ?>
      <hr>
    </div>
    <button onclick="window.history.go(-1)">Back</button>
  </div>
  <?php include 'C:\wamp64\www\SayWatt-Website\Say-Watt\footer.php'; ?>
</body>

</html>