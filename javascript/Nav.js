document.getElementById("navbar").innerHTML = `
<nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
  <div class="container">

    <img src="assets/L2.png" style="height:40px; width:80px;">

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-auto">

        <li class="nav-item">
          <a class="nav-link" href="index.html">Home</a>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="index.html#about">About us</a>
        </li>

        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Brands</a>

          <div class="dropdown-menu">
            <a class="dropdown-item" href="product.html">Luxury Sofas</a>
            <a class="dropdown-item" href="product2.html">Grand Sofa</a>
            <a class="dropdown-item" href="product3.html">Chenone Sofa</a>
            <a class="dropdown-item" href="product4.html">Interwood Sofa</a>
            <a class="dropdown-item" href="product5.html">Habitt Sofas</a>
            <a class="dropdown-item" href="product6.html">Modern Sofa</a>
          </div>

        </li>

        <li class="nav-item">
          <a class="nav-link" href="compare.html">Comparison</a>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="contact.Html">Contact Us</a>
        </li>

      </ul>
    </div>

  </div>
</nav>
`;