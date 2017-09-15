var election = new Datamap({
  scope: 'usa',
  element: document.getElementById('container'),
  geographyConfig: {
    highlightBorderColor: '#bada55',
   popupTemplate: function(geography, data) {
      return '<div class="hoverinfo">' + geography.properties.name +  '<br>' +  data.obesityRate + '%'
    },
    highlightBorderWidth: 3
  },

  fills: {
  'Very High Obesity': '#800080',
  'High Obesity': '#FF0000',
  'Moderate Obesity': '#FFA500' ,
  'Low Obesity' : '#40FF40',
  defaultFill: '#EDDC4E'
},
data:{
  "AZ": {
      "fillKey": "Moderate Obesity",
      "obesityRate": 29 
  },
  "CO": {
      "fillKey": "Low Obesity",
      "obesityRate": 22.3
  },
  "DE": {
      "fillKey": "High Obesity",
      "obesityRate": 30.7
  },
  "FL": {
      "fillKey": "Moderate Obesity",
      "obesityRate": 27.4
  },
  "GA": {
      "fillKey": "High Obesity",
      "obesityRate": 31.4
  },
  "HI": {
      "fillKey": "Low Obesity",
      "obesityRate": 23.8
  },
  "ID": {
      "fillKey": "Moderate Obesity",
      "obesityRate": 27.4
  },
  "IL": {
      "fillKey": "High Obesity",
      "obesityRate": 31.6
  },
  "IN": {
      "fillKey": "High Obesity",
      "obesityRate": 32.5
  },
  "IA": {
      "fillKey": "High Obesity",
      "obesityRate": 32
  },
  "KS": {
      "fillKey": "High Obesity",
      "obesityRate": 31.2
  },
  "KY": {
      "fillKey": "High Obesity",
      "obesityRate": 34.2
  },
  "LA": {
      "fillKey": "Very High Obesity",
      "obesityRate": 35.5
  },
  "MD": {
      "fillKey": "Moderate Obesity",
      "obesityRate": 29.9
  },
  "ME": {
      "fillKey": "Moderate Obesity",
      "obesityRate": 29.9
  },
  "MA": {
      "fillKey": "Low Obesity",
      "obesityRate": 23.6
  },
  "MN": {
      "fillKey": "Moderate Obesity",
      "obesityRate": 27.8
  },
  "MI": {
      "fillKey": "High Obesity",
      "obesityRate": 32.5
  },
  "MS": {
      "fillKey": "Very High Obesity",
      "obesityRate": 37.3
  },
  "MO": {
      "fillKey": "High Obesity",
      "obesityRate": 31.7
  },
  "MT": {
      "fillKey": "Moderate Obesity",
      "obesityRate": 25.5
  },
  "NC": {
      "fillKey": "High Obesity",
      "obesityRate": 31.8
  },
  "NE": {
      "fillKey": "High Obesity",
      "obesityRate": 32
  },
  "NV": {
      "fillKey": "Moderate Obesity",
      "obesityRate": 25.8
  },
  "NH": {
      "fillKey": "Moderate Obesity",
      "obesityRate": 26.6
  },
  "NJ": {
      "fillKey": "Moderate Obesity",
      "obesityRate": 27.4
  },
  "NY": {
      "fillKey": "Moderate Obesity",
      "obesityRate": 25.5
  },
  "ND": {
      "fillKey": "High Obesity",
      "obesityRate": 31.9
  },
  "NM": {
      "fillKey": "Moderate Obesity",
      "obesityRate": 28.3
  },
  "OH": {
      "fillKey": "High Obesity",
      "obesityRate": 31.5
  },
  "OK": {
      "fillKey": "High Obesity",
      "obesityRate": 32.8
  },
  "OR": {
      "fillKey": "Moderate Obesity",
      "obesityRate": 28.7
  },
  "PA": {
      "fillKey": "High Obesity",
      "obesityRate": 30.3
  },
  "RI": {
      "fillKey": "Moderate Obesity",
      "obesityRate": 26.6
  },
  "SC": {
      "fillKey": "High Obesity",
      "obesityRate": 32.3
  },
  "SD": {
      "fillKey": "Moderate Obesity",
      "obesityRate": 29.6
  },
  "TN": {
      "fillKey": "High Obesity",
      "obesityRate": 34.8
  },
  "TX": {
      "fillKey": "High Obesity",
      "obesityRate": 33.7
  },
  "UT": {
      "fillKey": "Moderate Obesity",
      "obesityRate": 25.4
  },
  "WI": {
      "fillKey": "High Obesity",
      "obesityRate": 30.7
  },
  "VA": {
      "fillKey": "Moderate Obesity",
      "obesityRate": 29
  },
  "VT": {
      "fillKey": "Moderate Obesity",
      "obesityRate": 27.1
  },
  "WA": {
      "fillKey": "Moderate Obesity",
      "obesityRate": 28.6
  },
  "WV": {
      "fillKey": "Very High Obesity",
      "obesityRate": 37.7
  },
  "WY": {
      "fillKey": "Moderate Obesity",
      "obesityRate": 27.7
  },
  "CA": {
      "fillKey": "Moderate Obesity",
      "obesityRate": 25
  },
  "CT": {
      "fillKey": "Moderate Obesity",
      "obesityRate": 26
  },
  "AK": {
      "fillKey": "High Obesity",
      "obesityRate": 31.4
  },
  "AR": {
      "fillKey": "Very High Obesity",
      "obesityRate": 35.7
  },
  "AL": {
      "fillKey": "Very High Obesity",
      "obesityRate": 35.7
  }
}
});
election.labels();

// $(document).ready(function(){
//   $("#title").delay(2000).animate({ opacity: 1 }, 700);
// });