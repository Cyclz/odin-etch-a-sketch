const gridContainer = document.querySelector("#container")
const resizeButton = document.querySelector("#resize")
const resetButton = document.querySelector("#reset")
const colorButton = document.querySelector("#setColour")
const randomiseButton = document.querySelector("#randomise")

let penColour = "Black"
let pixelDensity = 16 //number of "pixels" per side 

function generateGrid () {
    for (let i = 0; i < pixelDensity; i++) {
        const pixelRow = document.createElement("div")
        pixelRow.className = "row"
        gridContainer.appendChild(pixelRow)
        for (let i = 0; i < pixelDensity; i++) {
            const unitPixel = document.createElement("div")
            unitPixel.className = "pixel"
            pixelRow.appendChild(unitPixel)
        }
    }
}

function clearGrid () {
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild)
    }
}

function genColour () {
    const cssColors = [
        "AliceBlue", "AntiqueWhite", "Aqua", "Aquamarine", "Azure", "Beige", "Bisque", "Black", 
        "BlanchedAlmond", "Blue", "BlueViolet", "Brown", "BurlyWood", "CadetBlue", "Chartreuse", 
        "Chocolate", "Coral", "CornflowerBlue", "Cornsilk", "Crimson", "Cyan", "DarkBlue", "DarkCyan", 
        "DarkGoldenRod", "DarkGray", "DarkGreen", "DarkKhaki", "DarkMagenta", "DarkOliveGreen", 
        "DarkOrange", "DarkOrchid", "DarkRed", "DarkSalmon", "DarkSeaGreen", "DarkSlateBlue", 
        "DarkSlateGray", "DarkTurquoise", "DarkViolet", "DeepPink", "DeepSkyBlue", "DimGray", 
        "DodgerBlue", "FireBrick", "FloralWhite", "ForestGreen", "Fuchsia", "Gainsboro", "GhostWhite", 
        "Gold", "GoldenRod", "Gray", "Green", "GreenYellow", "HoneyDew", "HotPink", "IndianRed", 
        "Indigo", "Ivory", "Khaki", "Lavender", "LavenderBlush", "LawnGreen", "LemonChiffon", 
        "LightBlue", "LightCoral", "LightCyan", "LightGoldenRodYellow", "LightGreen", "LightGrey", 
        "LightPink", "LightSalmon", "LightSeaGreen", "LightSkyBlue", "LightSlateGray", "LightSteelBlue", 
        "LightYellow", "Lime", "LimeGreen", "Linen", "Magenta", "Maroon", "MediumAquaMarine", 
        "MediumBlue", "MediumOrchid", "MediumPurple", "MediumSeaGreen", "MediumSlateBlue", 
        "MediumSpringGreen", "MediumTurquoise", "MediumVioletRed", "MidnightBlue", "MintCream", 
        "MistyRose", "Moccasin", "NavajoWhite", "Navy", "OldLace", "Olive", "OliveDrab", "Orange", 
        "OrangeRed", "Orchid", "PaleGoldenRod", "PaleGreen", "PaleTurquoise", "PaleVioletRed", 
        "PapayaWhip", "PeachPuff", "Peru", "Pink", "Plum", "PowderBlue", "Purple", "RebeccaPurple", 
        "Red", "RosyBrown", "RoyalBlue", "SaddleBrown", "Salmon", "SandyBrown", "SeaGreen", "SeaShell", 
        "Sienna", "Silver", "SkyBlue", "SlateBlue", "SlateGray", "Snow", "SpringGreen", "SteelBlue", 
        "Tan", "Teal", "Thistle", "Tomato", "Turquoise", "Violet", "Wheat", "White", "WhiteSmoke", 
        "Yellow", "YellowGreen"
    ];
    return cssColors[Math.floor(141*Math.random())]
}

resetButton.addEventListener("click", () => {
    clearGrid();
    generateGrid();
})

resizeButton.addEventListener("click", () => {
    let newPixelDensity = parseInt(prompt("New side length?", 16))
    if (isNaN(newPixelDensity) || newPixelDensity < 1) {
        alert("No.")
    } else if (newPixelDensity > 100) {
        alert("Nahh.....")
    } else {
        pixelDensity = newPixelDensity
        clearGrid();
        generateGrid();
    }
})

colorButton.addEventListener("click", () => {
    penColour = (penColour === "Black" ? "White" : "Black")
    colorButton.textContent = `Pen: ${penColour}`
})

randomiseButton.addEventListener("click", () => {
    let pixels = document.querySelectorAll(".pixel")
    pixels.forEach((pixel) => {
        pixel.style.backgroundColor = genColour()
    })
})

gridContainer.addEventListener("mouseout", (event) => {
    console.log("triggered")
    let pixels = document.querySelectorAll(".pixel")
    pixels.forEach((pixel) =>{
        if (event.relatedTarget === pixel) {
            console.log("matched")
            pixel.style.backgroundColor = penColour
        }
    })
})

generateGrid();


