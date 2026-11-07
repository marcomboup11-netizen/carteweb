var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_Centrodes_1 = new ol.format.GeoJSON();
var features_Centrodes_1 = format_Centrodes_1.readFeatures(json_Centrodes_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Centrodes_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Centrodes_1.addFeatures(features_Centrodes_1);
var lyr_Centrodes_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Centrodes_1, 
                style: style_Centrodes_1,
                popuplayertitle: 'ntroïdes',
                interactive: true,
                title: '<img src="styles/legend/Centrodes_1.png" /> troïdes'
            });
var format_Rgions_2 = new ol.format.GeoJSON();
var features_Rgions_2 = format_Rgions_2.readFeatures(json_Rgions_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rgions_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rgions_2.addFeatures(features_Rgions_2);
var lyr_Rgions_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rgions_2, 
                style: style_Rgions_2,
                popuplayertitle: 'densite  population',
                interactive: true,
    title: 'densite  population<br />\
    <img src="styles/legend/Rgions_2_0.png" /> 15 - 44<br />\
    <img src="styles/legend/Rgions_2_1.png" /> 44 - 84<br />\
    <img src="styles/legend/Rgions_2_2.png" /> 84 - 252<br />\
    <img src="styles/legend/Rgions_2_3.png" /> 252 - 428<br />\
    <img src="styles/legend/Rgions_2_4.png" /> 428 - 7277<br />' });
var format_secteursdactivits_3 = new ol.format.GeoJSON();
var features_secteursdactivits_3 = format_secteursdactivits_3.readFeatures(json_secteursdactivits_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_secteursdactivits_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_secteursdactivits_3.addFeatures(features_secteursdactivits_3);
var lyr_secteursdactivits_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_secteursdactivits_3, 
                style: style_secteursdactivits_3,
                popuplayertitle: 'secteurs d\'activités',
                interactive: true,
    title: 'secteurs d\'activités<br />\
    <img src="styles/legend/secteursdactivits_3_0.png" /> agricole<br />\
    <img src="styles/legend/secteursdactivits_3_1.png" /> minier<br />\
    <img src="styles/legend/secteursdactivits_3_2.png" /> telecom<br />' });

lyr_GoogleMaps_0.setVisible(true);lyr_Centrodes_1.setVisible(true);lyr_Rgions_2.setVisible(true);lyr_secteursdactivits_3.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_Centrodes_1,lyr_Rgions_2,lyr_secteursdactivits_3];
lyr_Centrodes_1.set('fieldAliases', {'CODE': 'CODE', 'NOM': 'NOM', 'THEME': 'THEME', 'PAYS': 'PAYS', 'IDUU': 'IDUU', 'SUM_SUPERF': 'SUM_SUPERF', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Régions': 'Régions', 'Population': 'Population', 'Densité': 'Densité', });
lyr_Rgions_2.set('fieldAliases', {'CODE': 'CODE', 'NOM': 'NOM', 'THEME': 'THEME', 'PAYS': 'PAYS', 'IDUU': 'IDUU', 'SUM_SUPERF': 'SUM_SUPERF', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Régions': 'Régions', 'Population': 'Population', 'Densité': 'Densité', });
lyr_secteursdactivits_3.set('fieldAliases', {'NOM': 'NOM', 'Population': 'Population', 'secteur': 'secteur dactivite', });
lyr_Centrodes_1.set('fieldImages', {'CODE': '', 'NOM': '', 'THEME': '', 'PAYS': '', 'IDUU': '', 'SUM_SUPERF': '', 'Shape_Leng': '', 'Shape_Area': '', 'Régions': '', 'Population': '', 'Densité': '', });
lyr_Rgions_2.set('fieldImages', {'CODE': 'TextEdit', 'NOM': 'TextEdit', 'THEME': 'TextEdit', 'PAYS': 'TextEdit', 'IDUU': 'TextEdit', 'SUM_SUPERF': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'Régions': 'TextEdit', 'Population': 'TextEdit', 'Densité': 'TextEdit', });
lyr_secteursdactivits_3.set('fieldImages', {'NOM': 'TextEdit', 'Population': 'TextEdit', 'secteur': 'ValueMap', });
lyr_Centrodes_1.set('fieldLabels', {'CODE': 'no label', 'NOM': 'no label', 'THEME': 'no label', 'PAYS': 'no label', 'IDUU': 'no label', 'SUM_SUPERF': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'Régions': 'no label', 'Population': 'no label', 'Densité': 'no label', });
lyr_Rgions_2.set('fieldLabels', {'CODE': 'no label', 'NOM': 'no label', 'THEME': 'no label', 'PAYS': 'no label', 'IDUU': 'no label', 'SUM_SUPERF': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'Régions': 'no label', 'Population': 'no label', 'Densité': 'no label', });
lyr_secteursdactivits_3.set('fieldLabels', {'NOM': 'inline label - always visible', 'Population': 'inline label - always visible', 'secteur': 'inline label - always visible', });
lyr_secteursdactivits_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});