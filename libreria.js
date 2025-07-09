const catalogoLibri = function () {
  fetch("https://striveschool-api.herokuapp.com/books")
    .then((response) => {
      console.log("RESPONSE", response)
      if (response.ok) {
        // la risposta dal server è ok, estrapoliamo il JSON
        return response.json()
      } else {
        // la Response ha un problema!
        throw new Error("La response da Open Meteo non è ok")
      }
    })

    .then((datalibri) => {
      console.log(datalibri)

      const card = document.getElementById("book")

      datalibri.forEach((libro) => {
        card.innerHTML += `
          <div class="col col-12 col-md-6 col-lg-4 m-5 g-3 p-3">
            <div class="card bg-dark text-primary m-4">
              <img class="w-100" src="${libro.img}" class="card-img-top" id="img" alt="copertina">
              <div class="card-body">
                <h5 class="card-title" id="title">${libro.title}</h5>
                <p class="card-text" id="price">${libro.price}</p>
                <button class="btn btn-primary delete-btn">Delete</button>
              </div>
            </div>
          </div>
        `
      })

      // Prendo i bottoni dentro le card
      const buttons = document.querySelectorAll(".delete-btn")
      buttons.forEach((bottone) => {
        bottone.addEventListener("click", function () {
          // prendo la colonna più vicina al bottone
          const card = bottone.closest(".col")
          card.remove()
        })
      })
    })
}

catalogoLibri()
