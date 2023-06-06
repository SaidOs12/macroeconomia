new Morris.Line({
  // ID of the element in which to draw the chart.
  element: 'myfirstchart',
  // Chart data records -- each entry in this array corresponds to a point on
  // the chart.
  data: [
    { año: '2002', variación: 15.64 },
    { año: '2006', variación: 12.06 },
    { año: '2010', variación: 11.9 },
    { año: '2014', variación: 9.41  },
    { año: '2018', variación: 9.97  },
    { año: '2022', variación: 11.22 }
  ],
  // The name of the data record attribute that contains x-variacións.
  xkey: 'año',
  // A list of names of data record attributes that contain y-variacións.
  ykeys: ['variación'],
  // Labels for the ykeys -- will be displayed when you hover over the
  // chart.
  labels: ['Variación porcentual']
});