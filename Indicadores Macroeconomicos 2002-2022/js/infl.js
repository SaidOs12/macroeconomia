new Morris.Line({
  // ID of the element in which to draw the chart.
  element: 'myfirstchart',
  // Chart data records -- each entry in this array corresponds to a point on
  // the chart.
  data: [
    { año: '2002', variacion: 1.5 },
    { año: '2006', variacion: 6.7 },
    { año: '2010', variacion: 4.5 },
    { año: '2014', variacion: 4.5 },
    { año: '2018', variacion: 2.6 },
    { año: '2022', variacion: 7.3 }
  ],
  // The name of the data record attribute that contains x-values.
  xkey: 'año',
  // A list of names of data record attributes that contain y-values.
  ykeys: ['variacion'],
  // Labels for the ykeys -- will be displayed when you hover over the
  // chart.
  labels: ['Variación porcentual']
});