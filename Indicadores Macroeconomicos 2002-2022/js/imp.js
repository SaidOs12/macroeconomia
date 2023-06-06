new Morris.Line({
  // ID of the element in which to draw the chart.
  element: 'myfirstchart',
  // Chart data records -- each entry in this array corresponds to a point on
  // the chart.
  data: [
    { año: '2002', variacion: 18.2 },
    { año: '2006', variacion: 21.9 },
    { año: '2010', variacion: 17.9 },
    { año: '2014', variacion: 20.9 },
    { año: '2018', variacion: 20.6 },
  ],
  // The name of the data record attribute that contains x-values.
  xkey: 'año',
  // A list of names of data record attributes that contain y-values.
  ykeys: ['variacion'],
  // Labels for the ykeys -- will be displayed when you hover over the
  // chart.
  labels: ['Variación porcentual']
});