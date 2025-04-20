    function Show() {
      const name = document.getElementById("name").value.trim();
      if (name !== "") {
        document.getElementById("addname").innerText = name;
        document.getElementById("m1").style.display = "none";
        document.getElementById("c1").style.display = "block";
      }
    }