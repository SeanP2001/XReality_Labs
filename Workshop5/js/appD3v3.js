// Array of numbers acting as a dataset
var dataset = [ 5, 10, 13, 19, 21, 25, 22, 18, 15, 13, 11, 12, 15, 20, 18, 17, 16, 18, 23, 25, 22, 18, 15, 18, 10 ];

// Get the number of elements in the dataset (25) and print it to the console
console.log(dataset.length);

// Get the square root of the dataset length to get the grid width/heights (5x5)
var gridMax = Math.sqrt(dataset.length);

// Select the A-frame entity in the html with the id="helloworld"
var content = d3.select("#helloworld");

// Use D3's enter/update/exit pattern to draw and bind dom elements
var myBars = content.selectAll("a-box.bar")      // Create a variable (myBars), selecting all of the <a-box> elements with the class "bar" within the content element (There are none initially)
              .data(dataset)                     // Bind each element in the dataset array to one of the selected dom elements
              .enter()                           // Prepare for new elements to be appended
              .append("a-box")                   // Append children <a-box> elements for each element in the dataset array
              .classed("bar", true);             // Add the "bar" class to each newly created <a-box> elements



// Set cube attributes to determine how they are rendered

// Initialise variables
var y = 1;
var z = 1;
var m = 0;

// For each <a-box> created earlier, set the attributes
// All functions are callback functions which are invoked implicitly by D3 during attribute setting where:
//  d = The data bound to the current element (provided by D3 during execution)
//  i = The index of the current element in the selection (provided by D3 during execution)
myBars.attr({
  position: function(d,i) {
       x=i % gridMax;                   // Layout the bars in a square (5x5) grid
       z=Math.floor(i/gridMax);         // Layout the bars in a square (5x5) grid
       y=d/4;                           // Position the bars so that they all sit on a plane
       m ++;                            // Increment m (the bar count)
       console.log("Count: " + m + " - " + "x: " + x + " y: " + y + " z: " + z);
       return x + " " + y + " " + z;    // Return the position string to set the position
       },
   height: function(d){return d/2;},    // Set the height of the bar based on the data value (half scale)
   width: function(d){return 0.9;},     // Set the width to a const value (0.9)
   depth: function(d){return 0.9;},     // Set the depth to a const value (0.9)
   color: function(d){                                      // Set the colour of the bar to a random hex colour
     var letters = '0123456789ABCDEF'.split('');            // Get all of the hexadecimal characters 
     var color = '#';                                       // Start the colour string with a hash character
     for (var i = 0; i < 6; i++) {                          // Append 6 random hexadecimal characters to the color string
         color += letters[Math.floor(Math.random() * 16)];
     }
     return color;}                                         // Return the color string to set the colour of the bar
 });

