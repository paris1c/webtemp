links = [
    'https://raw.githubusercontent.com/fennypatel02/Project-3/main/Raw_Data/AAPL.csv',
    'https://raw.githubusercontent.com/fennypatel02/Project-3/main/Raw_Data/AMT.csv',
    'https://raw.githubusercontent.com/fennypatel02/Project-3/main/Raw_Data/AMZN.csv',
    'https://raw.githubusercontent.com/fennypatel02/Project-3/main/Raw_Data/BAC.csv',
    'https://raw.githubusercontent.com/fennypatel02/Project-3/main/Raw_Data/COST.csv',
    'https://raw.githubusercontent.com/fennypatel02/Project-3/main/Raw_Data/DTE.csv',
    'https://raw.githubusercontent.com/fennypatel02/Project-3/main/Raw_Data/FDX.csv',
    'https://raw.githubusercontent.com/fennypatel02/Project-3/main/Raw_Data/MRO.csv',
    'https://raw.githubusercontent.com/fennypatel02/Project-3/main/Raw_Data/NFLX.csv',
    'https://raw.githubusercontent.com/fennypatel02/Project-3/main/Raw_Data/UNH.csv',
    
    
]

function makeplot() {
    Plotly.d3.csv(links[1], function(data){ processData(data) } );
  
  }
    
  function processData(allRows) {
  
    console.log(allRows);
    var x = [], y = [], standard_deviation = [];
  
    for (var i=0; i<allRows.length; i++) {
      row = allRows[i];
      x.push( row['Date'] );
      y.push( row['Low'] );
    }
    console.log( 'X',x, 'Y',y, 'SD',standard_deviation );
    makePlotly( x, y, standard_deviation );
  }
  
  function makePlotly( x, y, standard_deviation ){
    var plotDiv = document.getElementById("plot");
    var traces = [{
      x: x, 
      y: y
    }];
  
    Plotly.newPlot('myDiv', traces, 
      {title: 'Stock Over Time'});
  };
    makeplot();