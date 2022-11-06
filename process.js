const express = require('express');

const app = express();

app.use(express.urlencoded());

app.get('/', function (request, response, next) {
    response.send(`
    <!-- CSS only -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
<!-- JavaScript Bundle with Popper -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossorigin="anonymous"></script>

<div class="container">
<h1 class="text-center mt-3 mb-3">Submit form data</h1>
<div class="card">

<div class="card-header">Sample Form</div>
<div class="card-body">
<form   class="row g-3 needs-validation" novalidate method="POST" action="/">
<div class="mb-3">

<label>Name</label>
<input type="text" name="Name" id="Name" class="form-control"/>
<--------------------------------------------------

<label>Date of birth</label>
<div class="form-group"> <!-- Date input -->
        <label class="control-label" for="date">Date of Birth</label>
        <input class="form-control" id="date" name="date" placeholder="MM/DD/YYY" type="text"/>
      </div>

<!------------------------------------------------------>
<div class="col-md-3">
<label for="validationCustom04" class="form-label">Country</label>
<select class="form-select" id="validationCustom04" required>
  <option selected disabled value="">Choose...</option>
  <option>India</option>
  <option>England</option>
  <option>Germany</option>
</select>
<div class="invalid-feedback">
  Please select a valid state.
</div>
</div>
<--------------------------------------------------------------

<label>File upload</label>
<div class="mb-3">
  <label for="formFile" class="form-label">Resume upload here </label>
  <input class="form-control" type="file" id="formFile">
</div>

<div>
<input type="submit" name="submit_button" class="btn btn-primary" value="Add"/>
</div>

</div>
</form>
</div>
</div>
</div>
    `);
});

app.post('/',function(request,response,next){
    response.send(request.body);
});

app.listen(2000);