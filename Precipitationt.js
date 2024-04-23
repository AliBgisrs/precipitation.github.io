Map.centerObject(table);
Map.addLayer(table);

// trmm 3 hour

var trmm = ee.ImageCollection('TRMM/3B42')
.filterBounds(table)
.filterDate('2018-01-01','2019-02-01')
.map(function(img){
  var band = img.select('precipitation');
  var clip = band.clip(table);
  return clip
  .copyProperties(img,['system:time_start','system:time_end']);
});

print(trmm);

print(ui.Chart.image.series(
  trmm, table, ee.Reducer.mean(), 10000, 'system:time_start')
  .setChartType('ColumnChart')
  .setOptions({
    series : {
      0 : {color : 'black'}
    }
  }));
  

// trmm monthly

var trmm = ee.ImageCollection('TRMM/3B43V7')
.filterBounds(table)
.filterDate('2018-01-01','2019-01-01')
.map(function(img){
  var band = img.select('precipitation');
  var clip = band.clip(table);
  return clip
  .copyProperties(img,['system:time_start','system:time_end']);
});

print(trmm);

print(ui.Chart.image.series(
  trmm, table, ee.Reducer.mean(), 10000, 'system:time_start')
  .setChartType('ColumnChart')
  .setOptions({
    series : {
      0 : {color : 'black'}
    }
  }));

// gpm
  
  var gpm = ee.ImageCollection('NASA/GPM_L3/IMERG_V06')
.filterBounds(table)
.filterDate('2018-01-01','2019-01-02')
.map(function(img){
  var band = img.select('IRprecipitation');
  var clip = band.clip(table);
  return clip
  .copyProperties(img,['system:time_start','system:time_end']);
});

print(gpm);

print(ui.Chart.image.series(
  gpm, table, ee.Reducer.mean(), 10000, 'system:time_start')
  .setChartType('ColumnChart')
  .setOptions({
    series : {
      0 : {color : 'red'}
    }
  }));
  
  
// persiann model precipitation

  var per = ee.ImageCollection('NOAA/PERSIANN-CDR')
.filterBounds(table)
.filterDate('2018-01-01','2019-05-02')
.map(function(img){
  var band = img.select('precipitation');
  var clip = band.clip(table);
  return clip
  .copyProperties(img,['system:time_start','system:time_end']);
});

print(per);

print(ui.Chart.image.series(
  per, table, ee.Reducer.mean(), 10000, 'system:time_start')
  .setChartType('ColumnChart')
  .setOptions({
    series : {
      0 : {color : 'green'}
    }
  }));

  
  
