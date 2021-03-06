//////CREATE PLOTS FOR HTML/////////////////////////////////////////////////////////////////////////
Plotly.d3.csv('https://raw.githubusercontent.com/fennypatel02/Project-3/main/data/stock.csv', function(err, rows){

function unpack(rows, key) {
    return rows.map(function(row) { return row[key]; });
}

var allname = unpack(rows, 'company_name'),
allDate = unpack(rows, 'date'),
alladjusted = unpack(rows, 'adjusted_close'),
allclose = unpack(rows,'close'),
allhigh = unpack(rows,'high'),
alllow = unpack(rows,'low'),
allopen = unpack(rows,'open'),
listofnames = [],
currentname,
currentadjusted = [],
currentDate = [],
currentclose =[],
currenthigh = [],
currentlow = [],
currentopen = [];

for (var i = 0; i < allname.length; i++ ){
if (listofnames.indexOf(allname[i]) === -1 ){
  listofnames.push(allname[i]);
}
}

function getnameData(chosenname) {
currentadjusted = [];
currentDate = [];
for (var i = 0 ; i < allname.length ; i++){
  if ( allname[i] === chosenname ) {
    currentadjusted.push(alladjusted[i]);
    currentDate.push(allDate[i]);
    currentclose.push(allclose[i]);
    currenthigh.push(allhigh[i]);
    currentlow.push(alllow[i]);
    currentopen.push(allopen[i]);
  } 
}
};

///////line chart//////////////////////////////////////
setBubblePlot('Apple');

function setBubblePlot(chosenname) {
getnameData(chosenname);  

var trace1 = {
  x: currentDate,
  y: currentadjusted,

  mode: 'lines+markers',
  text:'<br>Adjusted Closing Price',
  line:{color:'green'},
  marker: {
    size: 12, 
    opacity: 0.5
  }
};
var data = [trace1];

var layout = {
  title: 'Stock prices per last 6 months<br>'+ chosenname 
};

Plotly.newPlot('plotdiv', data, layout, {showSendToCloud: true});
};
///////CANDLESTICK CHART/////////////////////////////////////////////
var trace2 ={
  x:currentDate,
  close:currentclose,

  decreasing:{line:{color:'red'}},

  high:currenthigh,

  increasing:{line:{color:'blue'}},

  line:{color:'blue'},

  low: currentlow,

  open:currentopen,

  type: 'candlestick', 
  xaxis: 'x', 
  yaxis: 'y'
};

var data_ = [trace2];

var layout = {
  title:"Candlestick Chart with Rangeslider",
  dragmode: 'zoom', 
  margin: {
    r: 10, 
    t: 25, 
    b: 40, 
    l: 60
  }, 
  showlegend: false, 
  xaxis: {
    autorange: true, 
    domain: [0, 1], 
    range: ['2022-01-14 12:00', '2022-07-11 12:00'], 
    rangeslider: {range: ['2022-01-14 12:00', '2022-07-11 12:00']}, 
    title: 'Date', 
    type: 'date'
  }, 
  yaxis: {
    autorange: true, 
    domain: [0, 1], 
    range: [0, 999], 
    type: 'linear'
  }
};
Plotly.newPlot('candle', data_, layout);

/////////selector for dropdown/////////////////////////
var innerContainer = document.querySelector('[data-num="0"'),
plotEl = innerContainer.querySelector('.plot'),
stockSelector = innerContainer.querySelector('.stockdata');

function assignOptions(textArray, selector) {
for (var i = 0; i < textArray.length;  i++) {
  var currentOption = document.createElement('option');
  currentOption.text = textArray[i];
  selector.appendChild(currentOption);
}
}

assignOptions(listofnames, stockSelector);

function updateStock(){
setBubblePlot(stockSelector.value);
}

stockSelector.addEventListener('change', updateStock, false);
});
/////end of code//////////////////////////////////////////////

    </script>
            </body>