let qs = location.search;
let qsObjLit = new URLSearchParams(qs)
let buscar = qsObjLit.get('buscar')

let busquedaPeliculas = `https://api.themoviedb.org/3/search/movie?api_key=fd6a4e605ab941f2a77d6e640f54a48d&language=en-US&query=${buscar}&page=1&include_adult=false`

let busquedaSeries = `https://api.themoviedb.org/3/search/tv?api_key=fd6a4e605ab941f2a77d6e640f54a48d&language=en-US&page=1&query=${buscar}&include_adult=false`

let haBuscado = document.querySelector('.haBuscado');
    haBuscado.innerText = buscar;

/* Fetch para la busqueda de peliculas */
fetch(busquedaPeliculas)
    .then(function (response) {
        return response.json()

    }).then(function (data) {
    //Acá ya tenemmos los datos finales y es donde debemos escribir nuestro código.
    let arrayDeBusquedaPelis = data.results;
    console.log(arrayDeBusquedaPelis);

    //1 Capturo el elemento html en donde quiero hacer una modificación
    let seccionPeliSerie = document.querySelector('#seccionPelis')
    let resultadosApi = ''

    //2 Recorro la información de la api y la organizo para mostarla en el html
    for(let i=0; i<5; i++){
        let foto = './img/imagen_not_found.jpg'
        if (arrayDeBusquedaPelis[i].poster_path != null) {
            foto = `https://image.tmdb.org/t/p/w500/${arrayDeBusquedaPelis[i].poster_path}`
        } 
        //Dentro del for voy acumulando en la variable una estructura html por cada peli del array.
        resultadosApi += `<article class="peliOSerie">
                                <p class="nombrePeliOSerie">${arrayDeBusquedaPelis[i].title}</p>
                                <img src='${foto}'  alt="img" class="tapapelicula">
                                <a href='./detalle_peliculas.html?id=${arrayDeBusquedaPelis[i].id}' class="linkadetalle">Ver más</a>
                            </article>`

        
    }
    //Con toda la estructura html completa ahora la paso al DOM
    seccionPeliSerie.innerHTML = resultadosApi;
    
    }).catch(function (error) {
        return error;
    });

/* Fetch para la busqueda de series */
fetch(busquedaSeries)
    .then(function (response) {
        return response.json()

    }).then(function (data) {
    //Acá ya tenemmos los datos finales y es donde debemos escribir nuestro código.
    let arrayDeBusquedaSeries = data.results;
    console.log(arrayDeBusquedaSeries);

    //1 Capturo el elemento html en donde quiero hacer una modificación
    let seccionPeliSerie = document.querySelector('#seccionSeries')
    let resultadosApi = ''

    //2 Recorro la información de la api y la organizo para mostarla en el html
    if (arrayDeBusquedaSeries.length>5) {
        for(let i=0; i<5; i++){
            //Dentro del for voy acumulando en la variable una estructura html por cada serie del array.
            if (arrayDeBusquedaSeries[i].poster_path != null) {
                foto = `https://image.tmdb.org/t/p/w500/${arrayDeBusquedaSeries[i].poster_path}`
            } 
            resultadosApi += `<article class="peliOSerie">
                                    <p class="nombrePeliOSerie">${arrayDeBusquedaSeries[i].name}</p>
                                    <img src='${foto}'  alt="img" class="tapapelicula">
                                    <a href="./detalle_series.html?id=${arrayDeBusquedaSeries[i].id}" class="linkadetalle">Ver más</a>
                                </article>`
        }
    }else{
        for(let i=0; i<arrayDeBusquedaSeries.length; i++){
            //Dentro del for voy acumulando en la variable una estructura html por cada serie del array.
            if (arrayDeBusquedaSeries[i].poster_path != null) {
                foto = `https://image.tmdb.org/t/p/w500/${arrayDeBusquedaSeries[i].poster_path}`
            } 
            resultadosApi += `<article class="peliOSerie">
                                    <p class="nombrePeliOSerie">${arrayDeBusquedaSeries[i].name}</p>
                                    <img src='${foto}'  alt="img" class="tapapelicula">
                                    <a href="./detalle_series.html?id=${arrayDeBusquedaSeries[i].id}" class="linkadetalle">Ver más</a>
                                </article>`
        }
    }
    
    //Con toda la estructura html completa ahora la paso al DOM
    seccionPeliSerie.innerHTML = resultadosApi;
    
    }).catch(function (error) {
        return error;
    });