function tableGenerator() {
    for (let i3 = 0; i3 < statsPlayer.length; i3++){
        tableContent +=
        `<tr>
            <th scope = "row"> ${statsPlayer[i3][0]} </th>
            <td class="centrado"> ${(statsPlayer[i3][1] / games.length).toFixed(1)} </td>
            <td class="centrado"> ${(statsPlayer[i3][2] / games.length).toFixed(1)} </td>
            <td class="centrado"> ${(statsPlayer[i3][3]/games.length).toFixed(1)} </td>
        </tr>`
    }
    statsPlayerTable.innerHTML = tableContent 
}
function average() {
    for (let i1 = 0; i1 < games.length; i1++){
        for (let i2 = 0; i2 < games[i1].length; i2++){
            statsPlayer[i2][1] += games[i1][i2].points
            statsPlayer[i2][2] += games[i1][i2].rebounds
            statsPlayer[i2][3] += games[i1][i2].assists
        }
    }
}

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
    ["Christian Wood", 0, 0, 0]
]


let tableContent=""

const statsPlayerTable = document.getElementById('statsPlayer')

let games = [
    [
        { name: 'Bertans', points: 4, rebounds: 1, assists: 0 },
        { name: 'Bullock', points: 7, rebounds: 2, assists: 1 },
        { name: 'Doncic', points: 33, rebounds: 10, assists: 7 },
        { name: 'Green', points: 10, rebounds: 2, assists: 2 },
        { name: 'Hardaway', points: 8, rebounds: 0, assists: 0 },
        { name: 'Hardy', points: 2, rebounds: 0, assists: 1 },
        { name: 'Holiday', points: 6, rebounds: 2, assists: 0 },
        { name: 'Irving', points: 25, rebounds: 4, assists: 7 },
        { name: 'Kleber', points: 8, rebounds: 4, assists: 1 },
        { name: 'Powell', points: 7, rebounds: 7, assists: 0 },
        { name: 'Wood', points: 16, rebounds: 8, assists: 2 },
    ],
    [
        { name: 'Bertans', points: 1, rebounds: 2, assists: 0 },
        { name: 'Bullock', points: 12, rebounds: 5, assists: 0 },
        { name: 'Doncic', points: 28, rebounds: 4, assists: 12 },
        { name: 'Green', points: 9, rebounds: 1, assists: 3 },
        { name: 'Hardaway', points: 10, rebounds: 1, assists: 1 },
        { name: 'Hardy', points: 6, rebounds: 1, assists: 0 },
        { name: 'Holiday', points: 3, rebounds: 4, assists: 2 },
        { name: 'Irving', points: 28, rebounds: 5, assists: 4 },
        { name: 'Kleber', points: 6, rebounds: 6, assists: 1 },
        { name: 'Powell', points: 4, rebounds: 6, assists: 0 },
        { name: 'Wood', points: 12, rebounds: 5, assists: 0 },
    ],
    [
        { name: 'Bertans', points: 0, rebounds: 2, assists: 1 },
        { name: 'Bullock', points: 13, rebounds: 4, assists: 2 },
        { name: 'Doncic', points: 38, rebounds: 12, assists: 5 },
        { name: 'Green', points: 5, rebounds: 0, assists: 1 },
        { name: 'Hardaway', points: 16, rebounds: 2, assists: 3 },
        { name: 'Hardy', points: 3, rebounds: 1, assists: 0 },
        { name: 'Holiday', points: 7, rebounds: 0, assists: 1 },
        { name: 'Irving', points: 22, rebounds: 5, assists: 3 },
        { name: 'Kleber', points: 4, rebounds: 8, assists: 0 },
        { name: 'Powell', points: 3, rebounds: 10, assists: 1 },
        { name: 'Wood', points: 12, rebounds: 7, assists: 1 },
    ],
    [
        { name: 'Bertans', points: 6, rebounds: 3, assists: 1 },
        { name: 'Bullock', points: 3, rebounds: 4, assists: 0 },
        { name: 'Doncic', points: 34, rebounds: 14, assists: 12 },
        { name: 'Green', points: 8, rebounds: 1, assists: 3 },
        { name: 'Hardaway', points: 8, rebounds: 3, assists: 2 },
        { name: 'Hardy', points: 4, rebounds: 2, assists: 0 },
        { name: 'Holiday', points: 9, rebounds: 1, assists: 1 },
        { name: 'Irving', points: 26, rebounds: 7, assists: 4 },
        { name: 'Kleber', points: 5, rebounds: 6, assists: 0 },
        { name: 'Powell', points: 8, rebounds: 4, assists: 0 },
        { name: 'Wood', points: 22, rebounds: 10, assists: 1 },
    ],
    [
        { name: 'Bertans', points: 2, rebounds: 0, assists: 0 },
        { name: 'Bullock', points: 2, rebounds: 4, assists: 1 },
        { name: 'Doncic', points: 41, rebounds: 10, assists: 15 },
        { name: 'Green', points: 6, rebounds: 3, assists: 1 },
        { name: 'Hardaway', points: 12, rebounds: 2, assists: 2 },
        { name: 'Hardy', points: 0, rebounds: 0, assists: 0 },
        { name: 'Holiday', points: 5, rebounds: 1, assists: 0 },
        { name: 'Irving', points: 33, rebounds: 6, assists: 6 },
        { name: 'Kleber', points: 4, rebounds: 4, assists: 0 },
        { name: 'Powell', points: 5, rebounds: 7, assists: 1 },
        { name: 'Wood', points: 20, rebounds: 6, assists: 1 },
    ],
    [
        { name: 'Bertans', points: 8, rebounds: 3, assists: 2 },
        { name: 'Bullock', points: 12, rebounds: 1, assists: 2 },
        { name: 'Doncic', points: 24, rebounds: 16, assists: 12 },
        { name: 'Green', points: 12, rebounds: 3, assists: 1 },
        { name: 'Hardaway', points: 5, rebounds: 0, assists: 1 },
        { name: 'Hardy', points: 6, rebounds: 1, assists: 0 },
        { name: 'Holiday', points: 8, rebounds: 4, assists: 3 },
        { name: 'Irving', points: 30, rebounds: 3, assists: 6 },
        { name: 'Kleber', points: 10, rebounds: 5, assists: 0 },
        { name: 'Powell', points: 7, rebounds: 4, assists: 2 },
        { name: 'Wood', points: 15, rebounds: 10, assists: 1 },
    ],
    [
        { name: 'Bertans', points: 0, rebounds: 0, assists: 0 },
        { name: 'Bullock', points: 4, rebounds: 2, assists: 1 },
        { name: 'Doncic', points: 30, rebounds: 10, assists: 5 },
        { name: 'Green', points: 9, rebounds: 0, assists: 3 },
        { name: 'Hardaway', points: 13, rebounds: 2, assists: 0 },
        { name: 'Hardy', points: 4, rebounds: 0, assists: 2 },
        { name: 'Holiday', points: 4, rebounds: 2, assists: 1 },
        { name: 'Irving', points: 24, rebounds: 3, assists: 5 },
        { name: 'Kleber', points: 8, rebounds: 3, assists: 2 },
        { name: 'Powell', points: 7, rebounds: 7, assists: 0 },
        { name: 'Wood', points: 20, rebounds: 12, assists: 1 },
    ],

]

average()

tableGenerator()

const pts = document.getElementById('pts')
const reb = document.getElementById('reb')
const ast = document.getElementById('ast')

