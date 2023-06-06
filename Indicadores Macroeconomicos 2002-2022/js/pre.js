new Morris.Line({
  // ID of the element in which to draw the chart.
  element: 'myfirstchart',
  // Chart data records -- each entry in this array corresponds to a point on
  // the chart.
  data: [
    { año: '2002', variacion: 33.162 },
    { año: '2006', variacion: 52.011 },
    { año: '2010', variacion: 84.184 },
    { año: '2014', variacion: 111.524 },
    { año: '2018', variacion: 146.709 },
    { año: '2022', variacion: 272.4 }
  ],
  // The name of the data record attribute that contains x-values.
  xkey: 'año',
  // A list of names of data record attributes that contain y-values.
  ykeys: ['variacion'],
  // Labels for the ykeys -- will be displayed when you hover over the
  // chart.
  labels: ['Miles de millones']
});