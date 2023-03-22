let games;

// Carga el array que se encuentra en el JSON y los devuelve en forma de datos

async function loadArray(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

//A la variable 'games' le carga los datos obtenidos desde el JSON

async function loadDataGames() {
  games = await loadArray('/games.json');
}

//Ejecuta la funcion 'loadDataGames' y con los partidos cargados en la variable, la utiliza para statsMainFunction()

loadDataGames().then(()=>statsMainFunction())

function statsMainFunction() {

  //Carga las estadisticas de los jugadores y luego la imprime en la pantalla

  function tableGenerator() {
    ammount();
    for (let i = 0; i < statsPlayer.length; i++) {
      tableContent += `<tr>
              <th scope = "row"> ${statsPlayer[i][0]} </th>
              <td class="centrado"> ${statsPlayer[i][1]} </td>
              <td class="centrado"> ${statsPlayer[i][2]} </td>
              <td class="centrado"> ${statsPlayer[i][3]} </td>
          </tr>`;
    }
    statsPlayerTable.innerHTML = tableContent;
    statSort();
  }

  //  PARTE ESTADISTICAS

  //  Va sumando a cada jugador la cantidad de estadisticas totales que hizo en los partidos y las guarda en una variable
  //  i1 recorre los partidos e i2 recorre los jugadores
  //  Los jugadores estan ordenados alfabeticamente y cada uno tiene una posicion fija en 'statsPlayer'
  //  En la segunda posicion de 'statsPlayer', la posicion 1 guarda los puntos, la 2 los rebotes y la 3 las asistencias

  function ammount() {
    for (let i1 = 0; i1 < games.length; i1++) {
      for (let i2 = 0; i2 < games[i1].length; i2++) {
        statsPlayer[i2][1] += games[i1][i2].points;
        statsPlayer[i2][2] += games[i1][i2].rebounds;
        statsPlayer[i2][3] += games[i1][i2].assists;
      }
    }
    average();
  }
  
  //  Despues de obtener las estadisticas totales, se las divide por la cantidad de partidos jugados


  function average() {
    for (let i = 0; i < statsPlayer.length; i++) {
      statsPlayer[i][1] = statsPlayer[i][1] / games.length;
      statsPlayer[i][2] = statsPlayer[i][2] / games.length;
      statsPlayer[i][3] = statsPlayer[i][3] / games.length;
    }
    fixed();
  }
  
  //  Al promedio de estadisticas se le asigna que solo tenga una cifra despues del punto (toFixed)
  //  Y tambien se le asigna que a los valores que no tengan 3 digitos (2 antes del punto y 1 despues) se les agregue un '0' adelante


  function fixed() {
    for (let i = 0; i < statsPlayer.length; i++) {
      statsPlayer[i][1] = statsPlayer[i][1].toFixed(1).padStart(4, "0");
      statsPlayer[i][2] = statsPlayer[i][2].toFixed(1).padStart(4, "0");
      statsPlayer[i][3] = statsPlayer[i][3].toFixed(1).padStart(4, "0");
    }
  }
  
  //  PARTE TABLA

  //  'thStats' obtiene la propiedad de las cabeceras de la tabla, estas al ser presionada una ejecuta la funcion 'statClicked'

  function statSort() {
    for (let i = 0; i < thStats.length; i++) {
      thStats[i].addEventListener("click", statClicked);
    }
  }
  
  //  Captura el click(evento) y ubica si fue en el icono o en la palabra para que ejecuten ambas la misma funcion
  //  Si la columna fue clickeada, al icono lo oscurece

  function statClicked(e) {
    const sortColumn =
      e.target.cellIndex !== undefined
        ? e.target.cellIndex
        : e.target.parentNode.cellIndex;
    const icons = document.querySelectorAll(".icon");
    icons.forEach((icon) => {
      if (icon.classList.contains("icon-active")) {
        icon.classList.remove("icon-active");
      }
      if (icon.parentNode.cellIndex === sortColumn) {
        icon.classList.add("icon-active");
      }
    });
    sortTableByStat(sortColumn);
  }
  
  //  'tableHeads' obtiene la propiedad de las cabeceras de la tabla y 'rows' las filas
  //  'ascClass' verifica si las cabeceras tienen la clase 'asc'
  //  Si las cabeceras tienen la clase, las ordena
  //  Si estan ordenadas de mayor a menor y se vuelve a clickear, las vuelve a ordenar pero de menor a mayor y viceversa
  //  Si se clickea otra cabecera, se añade la clase a esa cabecera y se quita la clase a la anterior

  function sortTableByStat(sortColumn) {
    const tableHeads = document.getElementById("statsPlayer");
    const rows = Array.from(tableHeads.rows);
    let ascClass = tableHeads.classList.contains("asc");
    let asc = !ascClass ? true : false;
    let sortedRows;
    if (asc === false) {
      sortedRows = rows.sort(function (a, b) {
        const aText = a.cells[sortColumn].textContent;
        const bText = b.cells[sortColumn].textContent;
        return aText.localeCompare(bText);
      });
    }
    if (asc === true) {
      sortedRows = rows.sort(function (a, b) {
        const aText = a.cells[sortColumn].textContent;
        const bText = b.cells[sortColumn].textContent;
        return bText.localeCompare(aText);
      });
    }
    tableHeads.innerHTML = "";
    sortedRows.forEach((row) => {
      tableHeads.appendChild(row);
    });
    if (asc === true) {
      tableHeads.classList.add("asc");
    } else {
      tableHeads.classList.remove("asc");
    }
  }
  
  //  Apenas cargue la pagina, se hace un click automaticamente en la columna de puntos para ordenarlos

  window.addEventListener("load", function () {
    document.getElementById("points").click();
  });
  
  let tableContent = "";
  
  let thStats = document.getElementsByClassName("stats-box");
  
  const statsPlayerTable = document.getElementById("statsPlayer");
  
  //  Por predeterminado, todas las estadisticas de todos los jugadores se encuentran en 0
  
  let statsPlayer = [
    ["Davis Bertans", 0, 0, 0],
    ["Reggie Bullock", 0, 0, 0],
    ["Luka Doncic", 0, 0, 0],
    ["Josh Green", 0, 0, 0],
    ["Tim Hardaway Jr.", 0, 0, 0],
    ["Jaden Hardy", 0, 0, 0],
    ["Justin Holiday", 0, 0, 0],
    ["Kyrie Irving", 0, 0, 0],
    ["Maxi Kleber", 0, 0, 0],
    ["Dwight Powell", 0, 0, 0],
    ["Christian Wood", 0, 0, 0],
  ];

  tableGenerator();

}

