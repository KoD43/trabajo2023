var swiper = new Swiper(".mySwiper-1", {
    slidesPerView: 1,
    spaceBetween: 30, 
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable:true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    }
})

var swiper = new Swiper(".mySwiper-2", {
    slidesPerView: 1,
    spaceBetween: 30, 
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    breakpoints : {
        0: {
            slidesPerView: 1
        },
        550: {
            slidesPerView: 2
        },
        950: {
            slidesPerView: 3
        }
    }

}); 




//carrito
const carrito = document.getElementById("carrito");
const elementos1 = document.getElementById("lista-1");
const elementos2 = document.getElementById("lista-2");
const elementos3 = document.getElementById("lista-3");
const lista = document.querySelector("#lista-carrito tbody");
const vaciarCarritoBtn = document.getElementById("vaciar-carrito");

cargarEventlisterners() 
function cargarEventlisterners() {
    elementos1.addEventListener("click" , comprarElemento);
    elementos2.addEventListener("click" , comprarElemento);
    elementos3.addEventListener("click" , comprarElemento);
    carrito.addEventListener("click", eliminarElemento);

    vaciarCarritoBtn.addEventListener("click", vaciarCarrito);

}

function comprarElemento(e) {
    e.preventDefault();
    if(e.target.classList.contains("agregar-carrito")) {
        const elemento = e.target.parentElement.parentElement;
        leerDatosElemneto(elemento);
    
    }
}

function leerDatosElemneto(elemento) {
    const infoElemento = {
        imagen: elemento.quarySelector("img").src,
        titutlo: elemento.quarySelector("h3").textContent,
        precio: elemento.quarySelector("precio").textContent,
        id: elemento.quarySelector("a").getAttribute("data-ic")

    }

    insertarCarrito(infoElemento);

}

function insertarCarrito(elemento) {

    const row = document.createElement("tr")
    row.innerHTML = `
      <td>
          <img src="${elemento.imagen}" witdh >
      </td> 

      <td>
          ${elemento.titulo}
      </td>
      <td>
          ${elemento.precio}
      </td>
      <td>
           <a herf="#" class="borrar" data-id="${elemento.id}">x</a>
      </td>
    `;

    lista.appendChild(row);


}

function eliminarElemento(e) {
   e.preventDefault();
   let elemento,
   elementoid

   if(e.target.classList.contains("borrar")) {
    e.target.parentElement.parentElement.remove();
    elemento = e.target.parentElement.parentElement; 
    elementoid = elemento.quarySelector('a').getAttribute('data-id');
   }

}

function vaciarCarrito() {
while (lista.fir) {
    lista.removerChild(lista.firstChild);
}
return false;
}