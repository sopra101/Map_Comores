ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:32738").setExtent([221795.894374, 8558333.606747, 617713.514712, 8747622.688003]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Mayote_1 = new ol.format.GeoJSON();
var features_Mayote_1 = format_Mayote_1.readFeatures(json_Mayote_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32738'});
var jsonSource_Mayote_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mayote_1.addFeatures(features_Mayote_1);
var lyr_Mayote_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Mayote_1, 
                style: style_Mayote_1,
                interactive: true,
                title: '<img src="styles/legend/Mayote_1.png" /> Mayote'
            });
var format_Moheli_2 = new ol.format.GeoJSON();
var features_Moheli_2 = format_Moheli_2.readFeatures(json_Moheli_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32738'});
var jsonSource_Moheli_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Moheli_2.addFeatures(features_Moheli_2);
var lyr_Moheli_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Moheli_2, 
                style: style_Moheli_2,
                interactive: true,
                title: '<img src="styles/legend/Moheli_2.png" /> Moheli'
            });
var format_Anjouan_3 = new ol.format.GeoJSON();
var features_Anjouan_3 = format_Anjouan_3.readFeatures(json_Anjouan_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32738'});
var jsonSource_Anjouan_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Anjouan_3.addFeatures(features_Anjouan_3);
var lyr_Anjouan_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Anjouan_3, 
                style: style_Anjouan_3,
                interactive: true,
                title: '<img src="styles/legend/Anjouan_3.png" /> Anjouan'
            });
var format_GrandeComore_4 = new ol.format.GeoJSON();
var features_GrandeComore_4 = format_GrandeComore_4.readFeatures(json_GrandeComore_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32738'});
var jsonSource_GrandeComore_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GrandeComore_4.addFeatures(features_GrandeComore_4);
var lyr_GrandeComore_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_GrandeComore_4, 
                style: style_GrandeComore_4,
                interactive: true,
                title: '<img src="styles/legend/GrandeComore_4.png" /> Grande Comore'
            });
var format_Ilots_5 = new ol.format.GeoJSON();
var features_Ilots_5 = format_Ilots_5.readFeatures(json_Ilots_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32738'});
var jsonSource_Ilots_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ilots_5.addFeatures(features_Ilots_5);
var lyr_Ilots_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Ilots_5, 
                style: style_Ilots_5,
                interactive: true,
                title: '<img src="styles/legend/Ilots_5.png" /> Ilots'
            });
var format_RoutesMoheli_6 = new ol.format.GeoJSON();
var features_RoutesMoheli_6 = format_RoutesMoheli_6.readFeatures(json_RoutesMoheli_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32738'});
var jsonSource_RoutesMoheli_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RoutesMoheli_6.addFeatures(features_RoutesMoheli_6);
var lyr_RoutesMoheli_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RoutesMoheli_6, 
                style: style_RoutesMoheli_6,
                interactive: true,
                title: '<img src="styles/legend/RoutesMoheli_6.png" /> Routes Moheli'
            });
var format_Infrastructuresdebase_7 = new ol.format.GeoJSON();
var features_Infrastructuresdebase_7 = format_Infrastructuresdebase_7.readFeatures(json_Infrastructuresdebase_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32738'});
var jsonSource_Infrastructuresdebase_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Infrastructuresdebase_7.addFeatures(features_Infrastructuresdebase_7);
var lyr_Infrastructuresdebase_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Infrastructuresdebase_7, 
                style: style_Infrastructuresdebase_7,
                interactive: true,
                title: '<img src="styles/legend/Infrastructuresdebase_7.png" /> Infrastructures de base'
            });
var format_RoutesAnjouan_8 = new ol.format.GeoJSON();
var features_RoutesAnjouan_8 = format_RoutesAnjouan_8.readFeatures(json_RoutesAnjouan_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32738'});
var jsonSource_RoutesAnjouan_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RoutesAnjouan_8.addFeatures(features_RoutesAnjouan_8);
var lyr_RoutesAnjouan_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RoutesAnjouan_8, 
                style: style_RoutesAnjouan_8,
                interactive: true,
                title: '<img src="styles/legend/RoutesAnjouan_8.png" /> Routes Anjouan'
            });
var format_RoutesGrandeComore_9 = new ol.format.GeoJSON();
var features_RoutesGrandeComore_9 = format_RoutesGrandeComore_9.readFeatures(json_RoutesGrandeComore_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32738'});
var jsonSource_RoutesGrandeComore_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RoutesGrandeComore_9.addFeatures(features_RoutesGrandeComore_9);
var lyr_RoutesGrandeComore_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RoutesGrandeComore_9, 
                style: style_RoutesGrandeComore_9,
                interactive: true,
                title: '<img src="styles/legend/RoutesGrandeComore_9.png" /> Routes Grande Comore'
            });
var format_LocalitsGrandeComore_10 = new ol.format.GeoJSON();
var features_LocalitsGrandeComore_10 = format_LocalitsGrandeComore_10.readFeatures(json_LocalitsGrandeComore_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32738'});
var jsonSource_LocalitsGrandeComore_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LocalitsGrandeComore_10.addFeatures(features_LocalitsGrandeComore_10);
var lyr_LocalitsGrandeComore_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LocalitsGrandeComore_10, 
                style: style_LocalitsGrandeComore_10,
                interactive: true,
                title: '<img src="styles/legend/LocalitsGrandeComore_10.png" /> Localités Grande Comore'
            });
var format_LocalitsAnjouan_11 = new ol.format.GeoJSON();
var features_LocalitsAnjouan_11 = format_LocalitsAnjouan_11.readFeatures(json_LocalitsAnjouan_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32738'});
var jsonSource_LocalitsAnjouan_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LocalitsAnjouan_11.addFeatures(features_LocalitsAnjouan_11);cluster_LocalitsAnjouan_11 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_LocalitsAnjouan_11
});
var lyr_LocalitsAnjouan_11 = new ol.layer.Vector({
                declutter: true,
                source:cluster_LocalitsAnjouan_11, 
                style: style_LocalitsAnjouan_11,
                interactive: true,
                title: '<img src="styles/legend/LocalitsAnjouan_11.png" /> Localités Anjouan'
            });
var format_LocalitsMoheli_12 = new ol.format.GeoJSON();
var features_LocalitsMoheli_12 = format_LocalitsMoheli_12.readFeatures(json_LocalitsMoheli_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32738'});
var jsonSource_LocalitsMoheli_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LocalitsMoheli_12.addFeatures(features_LocalitsMoheli_12);cluster_LocalitsMoheli_12 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_LocalitsMoheli_12
});
var lyr_LocalitsMoheli_12 = new ol.layer.Vector({
                declutter: true,
                source:cluster_LocalitsMoheli_12, 
                style: style_LocalitsMoheli_12,
                interactive: true,
                title: '<img src="styles/legend/LocalitsMoheli_12.png" /> Localités Moheli'
            });
var format_PortAnjouan_13 = new ol.format.GeoJSON();
var features_PortAnjouan_13 = format_PortAnjouan_13.readFeatures(json_PortAnjouan_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32738'});
var jsonSource_PortAnjouan_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PortAnjouan_13.addFeatures(features_PortAnjouan_13);
var lyr_PortAnjouan_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PortAnjouan_13, 
                style: style_PortAnjouan_13,
                interactive: true,
                title: '<img src="styles/legend/PortAnjouan_13.png" /> Port Anjouan'
            });
var format_PortGrandeComore_14 = new ol.format.GeoJSON();
var features_PortGrandeComore_14 = format_PortGrandeComore_14.readFeatures(json_PortGrandeComore_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32738'});
var jsonSource_PortGrandeComore_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PortGrandeComore_14.addFeatures(features_PortGrandeComore_14);
var lyr_PortGrandeComore_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PortGrandeComore_14, 
                style: style_PortGrandeComore_14,
                interactive: true,
                title: '<img src="styles/legend/PortGrandeComore_14.png" /> Port Grande Comore'
            });
var format_PortMoheli_15 = new ol.format.GeoJSON();
var features_PortMoheli_15 = format_PortMoheli_15.readFeatures(json_PortMoheli_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32738'});
var jsonSource_PortMoheli_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PortMoheli_15.addFeatures(features_PortMoheli_15);
var lyr_PortMoheli_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PortMoheli_15, 
                style: style_PortMoheli_15,
                interactive: true,
                title: '<img src="styles/legend/PortMoheli_15.png" /> Port Moheli'
            });

lyr_OSMStandard_0.setVisible(true);lyr_Mayote_1.setVisible(true);lyr_Moheli_2.setVisible(true);lyr_Anjouan_3.setVisible(true);lyr_GrandeComore_4.setVisible(true);lyr_Ilots_5.setVisible(true);lyr_RoutesMoheli_6.setVisible(true);lyr_Infrastructuresdebase_7.setVisible(true);lyr_RoutesAnjouan_8.setVisible(true);lyr_RoutesGrandeComore_9.setVisible(true);lyr_LocalitsGrandeComore_10.setVisible(true);lyr_LocalitsAnjouan_11.setVisible(true);lyr_LocalitsMoheli_12.setVisible(true);lyr_PortAnjouan_13.setVisible(true);lyr_PortGrandeComore_14.setVisible(true);lyr_PortMoheli_15.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Mayote_1,lyr_Moheli_2,lyr_Anjouan_3,lyr_GrandeComore_4,lyr_Ilots_5,lyr_RoutesMoheli_6,lyr_Infrastructuresdebase_7,lyr_RoutesAnjouan_8,lyr_RoutesGrandeComore_9,lyr_LocalitsGrandeComore_10,lyr_LocalitsAnjouan_11,lyr_LocalitsMoheli_12,lyr_PortAnjouan_13,lyr_PortGrandeComore_14,lyr_PortMoheli_15];
lyr_Mayote_1.set('fieldAliases', {'ÃŽLE': 'ÃŽLE', 'CIPR': 'CIPR', 'EN_KM2': 'EN_KM2', 'PÃ©rIMÃ¨tR': 'PÃ©rIMÃ¨tR', 'MAYCIPR_ID': 'MAYCIPR_ID', 'Commune': 'Commune', 'Ile': 'Ile', });
lyr_Moheli_2.set('fieldAliases', {'COMMUNE': 'COMMUNE', 'PRÃ©fECTUR': 'PRÃ©fECTUR', 'ILE': 'ILE', 'EN_2003': 'EN_2003', 'EN_2004': 'EN_2004', 'EN_2005': 'EN_2005', 'EN_2006': 'EN_2006', 'EN_2007': 'EN_2007', 'EN_2008': 'EN_2008', 'EN_2009': 'EN_2009', 'EN_2010': 'EN_2010', 'EN_2011': 'EN_2011', 'EN_2012': 'EN_2012', 'EN_2013': 'EN_2013', 'EN_2014': 'EN_2014', 'EN_2015': 'EN_2015', 'EN_2016': 'EN_2016', 'EN_2017': 'EN_2017', 'EN_2018': 'EN_2018', 'EN_2019': 'EN_2019', 'EN_2020': 'EN_2020', 'EN_2021': 'EN_2021', 'EN_2022': 'EN_2022', 'EN_2023': 'EN_2023', 'EN_2024': 'EN_2024', 'EN_2025': 'EN_2025', });
lyr_Anjouan_3.set('fieldAliases', {'COMMUNE': 'COMMUNE', 'PRéfECTURE': 'PRéfECTURE', 'ILE': 'ILE', 'POP_2003': 'POP_2003', 'POP_2004': 'POP_2004', 'POP_2005': 'POP_2005', 'POP_2006': 'POP_2006', 'POP_2007': 'POP_2007', 'POP_2008': 'POP_2008', 'POP_2009': 'POP_2009', 'POP_2010': 'POP_2010', 'POP_2011': 'POP_2011', 'POP_2012': 'POP_2012', 'POP_2013': 'POP_2013', 'POP_2014': 'POP_2014', 'POP_2015': 'POP_2015', 'POP_2016': 'POP_2016', 'POP_2017': 'POP_2017', 'POP_2018': 'POP_2018', 'POP_2019': 'POP_2019', 'POP_2020': 'POP_2020', 'POP_2021': 'POP_2021', 'POP_2022': 'POP_2022', 'POP_2023': 'POP_2023', 'POP_2024': 'POP_2024', 'POP_2025': 'POP_2025', });
lyr_GrandeComore_4.set('fieldAliases', {'COMMUNE': 'COMMUNE', 'ZONE': 'ZONE', 'PRéfECTURE': 'PRéfECTURE', 'CIPR': 'CIPR', 'ILE': 'ILE', 'POP_2003': 'POP_2003', 'POP_2004': 'POP_2004', 'POP_2005': 'POP_2005', 'POP_2006': 'POP_2006', 'POP_2007': 'POP_2007', 'POP_2008': 'POP_2008', 'POP_2009': 'POP_2009', 'POP_2010': 'POP_2010', 'EN_2010': 'EN_2010', 'SCOLARISée': 'SCOLARISée', 'POP_2011': 'POP_2011', 'POP_2012': 'POP_2012', 'POP_2013': 'POP_2013', 'POP_2014': 'POP_2014', 'POP_2015': 'POP_2015', 'POP_2016': 'POP_2016', 'POP_2017': 'POP_2017', 'POP_2018': 'POP_2018', 'POP_2019': 'POP_2019', 'POP_2020': 'POP_2020', 'POP_2021': 'POP_2021', 'POP_2022': 'POP_2022', 'POP_2023': 'POP_2023', 'POP_2024': 'POP_2024', 'POP_2025': 'POP_2025', 'GARçoNS_NO': 'GARçoNS_NO', 'SCOLARIS0': 'SCOLARIS0', 'GARçoNS_FI': 'GARçoNS_FI', });
lyr_Ilots_5.set('fieldAliases', {'CIPR': 'CIPR', 'ILE': 'ILE', 'EN_KM2': 'EN_KM2', 'PÃ©rIMÃ¨tR': 'PÃ©rIMÃ¨tR', });
lyr_RoutesMoheli_6.set('fieldAliases', {'LAYER': 'LAYER', 'NUM': 'NUM', 'LONG': 'LONG', 'PKD': 'PKD', 'PKF': 'PKF', 'ELEVATION': 'ELEVATION', 'DEB': 'DEB', 'FIN': 'FIN', 'Name': 'Name', 'Classement': 'Classement', });
lyr_Infrastructuresdebase_7.set('fieldAliases', {'Id': 'Id', 'Type': 'Type', 'Nom': 'Nom', 'Prefecture': 'Prefecture', 'Commune': 'Commune', 'Village': 'Village', 'ZD': 'ZD', });
lyr_RoutesAnjouan_8.set('fieldAliases', {'MAP_NAME': 'MAP_NAME', 'GM_LAYER': 'GM_LAYER', 'LAYER': 'LAYER', 'Y_OBJ': 'Y_OBJ', 'NUMERO': 'NUMERO', 'NUM': 'NUM', 'LONG': 'LONG', 'ELEVATION': 'ELEVATION', 'PKD': 'PKD', 'PKF': 'PKF', 'DEB': 'DEB', 'FIN': 'FIN', });
lyr_RoutesGrandeComore_9.set('fieldAliases', {'CLASSEMENT': 'CLASSEMENT', 'NUM': 'NUM', 'LONG': 'LONG', 'ELEVATION': 'ELEVATION', 'PKD': 'PKD', 'PKF': 'PKF', 'DEB': 'DEB', 'FIN': 'FIN', 'Nom': 'Nom', });
lyr_LocalitsGrandeComore_10.set('fieldAliases', {'VILLAGE': 'VILLAGE', 'COMMUNE': 'COMMUNE', 'PRéfECTURE': 'PRéfECTURE', 'Ordre': 'Ordre', 'RégION_SAN': 'RégION_SAN', 'ILE': 'ILE', 'EN_2003': 'EN_2003', 'EN_2004': 'EN_2004', 'EN_2005': 'EN_2005', 'EN_2006': 'EN_2006', 'EN_2007': 'EN_2007', 'EN_2008': 'EN_2008', 'EN_2009': 'EN_2009', 'EN_2010': 'EN_2010', 'EN_2011': 'EN_2011', 'EN_2012': 'EN_2012', 'EN_2013': 'EN_2013', 'EN_2014': 'EN_2014', 'EN_2015': 'EN_2015', 'EN_2016': 'EN_2016', 'EN_2017': 'EN_2017', 'EN_2018': 'EN_2018', 'EN_2019': 'EN_2019', 'EN_2020': 'EN_2020', 'EN_2021': 'EN_2021', 'EN_2022': 'EN_2022', 'EN_2023': 'EN_2023', 'EN_2024': 'EN_2024', 'EN_2025': 'EN_2025', 'X_Position': 'X_Position', 'Y_Position': 'Y_Position', 'Indice': 'Indice', });
lyr_LocalitsAnjouan_11.set('fieldAliases', {'VILLAGE': 'VILLAGE', 'COMMUNE': 'COMMUNE', 'Classement': 'Classement', 'PRéfECTURE': 'PRéfECTURE', 'RégION_SAN': 'RégION_SAN', 'ILE': 'ILE', 'EN_2003': 'EN_2003', 'EN_2004': 'EN_2004', 'EN_2005': 'EN_2005', 'EN_2006': 'EN_2006', 'EN_2007': 'EN_2007', 'EN_2008': 'EN_2008', 'EN_2009': 'EN_2009', 'EN_2010': 'EN_2010', 'EN_2011': 'EN_2011', 'EN_2012': 'EN_2012', 'EN_2013': 'EN_2013', 'EN_2014': 'EN_2014', 'EN_2015': 'EN_2015', 'EN_2016': 'EN_2016', 'EN_2017': 'EN_2017', 'EN_2018': 'EN_2018', 'EN_2019': 'EN_2019', 'EN_2020': 'EN_2020', 'EN_2021': 'EN_2021', 'EN_2022': 'EN_2022', 'EN_2023': 'EN_2023', 'EN_2024': 'EN_2024', 'EN_2025': 'EN_2025', 'Chef_lieu': 'Chef_lieu', 'X_Position': 'X_Position', 'Y_Position': 'Y_Position', 'Ile1': 'Ile1', 'X': 'X', 'Y': 'Y', });
lyr_LocalitsMoheli_12.set('fieldAliases', {'VILLAGE': 'VILLAGE', 'NÂ°': 'NÂ°', 'COMMUNE': 'COMMUNE', 'PRÃ©fECTUR': 'PRÃ©fECTUR', 'RÃ©gION_SA': 'RÃ©gION_SA', 'ILE': 'ILE', 'EN_2003': 'EN_2003', 'EN_2004': 'EN_2004', 'EN_2005': 'EN_2005', 'EN_2006': 'EN_2006', 'EN_2007': 'EN_2007', 'EN_2008': 'EN_2008', 'EN_2009': 'EN_2009', 'EN_2010': 'EN_2010', 'EN_2011': 'EN_2011', 'EN_2012': 'EN_2012', 'EN_2013': 'EN_2013', 'EN_2014': 'EN_2014', 'EN_2015': 'EN_2015', 'EN_2016': 'EN_2016', 'EN_2017': 'EN_2017', 'EN_2018': 'EN_2018', 'EN_2019': 'EN_2019', 'EN_2020': 'EN_2020', 'EN_2021': 'EN_2021', 'EN_2022': 'EN_2022', 'EN_2023': 'EN_2023', 'EN_2024': 'EN_2024', 'EN_2025': 'EN_2025', 'Chef_lieux': 'Chef_lieux', 'X_Position': 'X_Position', 'Y_Position': 'Y_Position', });
lyr_PortAnjouan_13.set('fieldAliases', {'DU_PORT': 'DU_PORT', 'ILE': 'ILE', });
lyr_PortGrandeComore_14.set('fieldAliases', {'ID': 'ID', });
lyr_PortMoheli_15.set('fieldAliases', {'MOH_PORT': 'MOH_PORT', });
lyr_Mayote_1.set('fieldImages', {'ÃŽLE': 'Hidden', 'CIPR': 'Hidden', 'EN_KM2': 'Hidden', 'PÃ©rIMÃ¨tR': 'Hidden', 'MAYCIPR_ID': 'Hidden', 'Commune': 'TextEdit', 'Ile': 'Hidden', });
lyr_Moheli_2.set('fieldImages', {'COMMUNE': 'TextEdit', 'PRÃ©fECTUR': 'Hidden', 'ILE': 'Hidden', 'EN_2003': 'Hidden', 'EN_2004': 'Hidden', 'EN_2005': 'Hidden', 'EN_2006': 'Hidden', 'EN_2007': 'Hidden', 'EN_2008': 'Hidden', 'EN_2009': 'Hidden', 'EN_2010': 'Hidden', 'EN_2011': 'Hidden', 'EN_2012': 'Hidden', 'EN_2013': 'Hidden', 'EN_2014': 'Hidden', 'EN_2015': 'Hidden', 'EN_2016': 'Hidden', 'EN_2017': 'Hidden', 'EN_2018': 'Hidden', 'EN_2019': 'Hidden', 'EN_2020': 'Hidden', 'EN_2021': 'Hidden', 'EN_2022': 'Hidden', 'EN_2023': 'Hidden', 'EN_2024': 'Hidden', 'EN_2025': 'Hidden', });
lyr_Anjouan_3.set('fieldImages', {'COMMUNE': 'TextEdit', 'PRéfECTURE': 'Hidden', 'ILE': 'Hidden', 'POP_2003': 'Hidden', 'POP_2004': 'Hidden', 'POP_2005': 'Hidden', 'POP_2006': 'Hidden', 'POP_2007': 'Hidden', 'POP_2008': 'Hidden', 'POP_2009': 'Hidden', 'POP_2010': 'Hidden', 'POP_2011': 'Hidden', 'POP_2012': 'Hidden', 'POP_2013': 'Hidden', 'POP_2014': 'Hidden', 'POP_2015': 'Hidden', 'POP_2016': 'Hidden', 'POP_2017': 'Hidden', 'POP_2018': 'Hidden', 'POP_2019': 'Hidden', 'POP_2020': 'Hidden', 'POP_2021': 'Hidden', 'POP_2022': 'Hidden', 'POP_2023': 'Hidden', 'POP_2024': 'Hidden', 'POP_2025': 'Hidden', });
lyr_GrandeComore_4.set('fieldImages', {'COMMUNE': 'TextEdit', 'ZONE': 'Hidden', 'PRéfECTURE': 'Hidden', 'CIPR': 'Hidden', 'ILE': 'Hidden', 'POP_2003': 'Hidden', 'POP_2004': 'Hidden', 'POP_2005': 'Hidden', 'POP_2006': 'Hidden', 'POP_2007': 'Hidden', 'POP_2008': 'Hidden', 'POP_2009': 'Hidden', 'POP_2010': 'Hidden', 'EN_2010': 'Hidden', 'SCOLARISée': 'Hidden', 'POP_2011': 'Hidden', 'POP_2012': 'Hidden', 'POP_2013': 'Hidden', 'POP_2014': 'Hidden', 'POP_2015': 'Hidden', 'POP_2016': 'Hidden', 'POP_2017': 'Hidden', 'POP_2018': 'Hidden', 'POP_2019': 'Hidden', 'POP_2020': 'Hidden', 'POP_2021': 'Hidden', 'POP_2022': 'Hidden', 'POP_2023': 'Hidden', 'POP_2024': 'Hidden', 'POP_2025': 'Hidden', 'GARçoNS_NO': 'Hidden', 'SCOLARIS0': 'Hidden', 'GARçoNS_FI': 'Hidden', });
lyr_Ilots_5.set('fieldImages', {'CIPR': 'TextEdit', 'ILE': 'Hidden', 'EN_KM2': 'Hidden', 'PÃ©rIMÃ¨tR': 'Hidden', });
lyr_RoutesMoheli_6.set('fieldImages', {'LAYER': 'Hidden', 'NUM': 'Hidden', 'LONG': 'Hidden', 'PKD': 'Hidden', 'PKF': 'Hidden', 'ELEVATION': 'Hidden', 'DEB': 'Hidden', 'FIN': 'Hidden', 'Name': 'Hidden', 'Classement': 'Hidden', });
lyr_Infrastructuresdebase_7.set('fieldImages', {'Id': 'Hidden', 'Type': 'Hidden', 'Nom': 'TextEdit', 'Prefecture': 'Hidden', 'Commune': 'Hidden', 'Village': 'Hidden', 'ZD': 'Hidden', });
lyr_RoutesAnjouan_8.set('fieldImages', {'MAP_NAME': 'Hidden', 'GM_LAYER': 'Hidden', 'LAYER': 'Hidden', 'Y_OBJ': 'Hidden', 'NUMERO': 'Hidden', 'NUM': 'Hidden', 'LONG': 'Hidden', 'ELEVATION': 'Hidden', 'PKD': 'Hidden', 'PKF': 'Hidden', 'DEB': 'Hidden', 'FIN': 'Hidden', });
lyr_RoutesGrandeComore_9.set('fieldImages', {'CLASSEMENT': 'Hidden', 'NUM': 'Hidden', 'LONG': 'Hidden', 'ELEVATION': 'Hidden', 'PKD': 'Hidden', 'PKF': 'Hidden', 'DEB': 'Hidden', 'FIN': 'Hidden', 'Nom': 'Hidden', });
lyr_LocalitsGrandeComore_10.set('fieldImages', {'VILLAGE': 'TextEdit', 'COMMUNE': 'Hidden', 'PRéfECTURE': 'Hidden', 'Ordre': 'Hidden', 'RégION_SAN': 'Hidden', 'ILE': 'Hidden', 'EN_2003': 'Hidden', 'EN_2004': 'Hidden', 'EN_2005': 'Hidden', 'EN_2006': 'Hidden', 'EN_2007': 'Hidden', 'EN_2008': 'Hidden', 'EN_2009': 'Hidden', 'EN_2010': 'Hidden', 'EN_2011': 'Hidden', 'EN_2012': 'Hidden', 'EN_2013': 'Hidden', 'EN_2014': 'Hidden', 'EN_2015': 'Hidden', 'EN_2016': 'Hidden', 'EN_2017': 'Hidden', 'EN_2018': 'Hidden', 'EN_2019': 'Hidden', 'EN_2020': 'Hidden', 'EN_2021': 'Hidden', 'EN_2022': 'Hidden', 'EN_2023': 'Hidden', 'EN_2024': 'Hidden', 'EN_2025': 'Hidden', 'X_Position': 'Hidden', 'Y_Position': 'Hidden', 'Indice': 'Hidden', });
lyr_LocalitsAnjouan_11.set('fieldImages', {'VILLAGE': 'TextEdit', 'COMMUNE': 'Hidden', 'Classement': 'Hidden', 'PRéfECTURE': 'Hidden', 'RégION_SAN': 'Hidden', 'ILE': 'Hidden', 'EN_2003': 'Hidden', 'EN_2004': 'Hidden', 'EN_2005': 'Hidden', 'EN_2006': 'Hidden', 'EN_2007': 'Hidden', 'EN_2008': 'Hidden', 'EN_2009': 'Hidden', 'EN_2010': 'Hidden', 'EN_2011': 'Hidden', 'EN_2012': 'Hidden', 'EN_2013': 'Hidden', 'EN_2014': 'Hidden', 'EN_2015': 'Hidden', 'EN_2016': 'Hidden', 'EN_2017': 'Hidden', 'EN_2018': 'Hidden', 'EN_2019': 'Hidden', 'EN_2020': 'Hidden', 'EN_2021': 'Hidden', 'EN_2022': 'Hidden', 'EN_2023': 'Hidden', 'EN_2024': 'Hidden', 'EN_2025': 'Hidden', 'Chef_lieu': 'Hidden', 'X_Position': 'Hidden', 'Y_Position': 'Hidden', 'Ile1': 'Hidden', 'X': 'Hidden', 'Y': 'Hidden', });
lyr_LocalitsMoheli_12.set('fieldImages', {'VILLAGE': 'TextEdit', 'NÂ°': 'Hidden', 'COMMUNE': 'Hidden', 'PRÃ©fECTUR': 'Hidden', 'RÃ©gION_SA': 'Hidden', 'ILE': 'Hidden', 'EN_2003': 'Hidden', 'EN_2004': 'Hidden', 'EN_2005': 'Hidden', 'EN_2006': 'Hidden', 'EN_2007': 'Hidden', 'EN_2008': 'Hidden', 'EN_2009': 'Hidden', 'EN_2010': 'Hidden', 'EN_2011': 'Hidden', 'EN_2012': 'Hidden', 'EN_2013': 'Hidden', 'EN_2014': 'Hidden', 'EN_2015': 'Hidden', 'EN_2016': 'Hidden', 'EN_2017': 'Hidden', 'EN_2018': 'Hidden', 'EN_2019': 'Hidden', 'EN_2020': 'Hidden', 'EN_2021': 'Hidden', 'EN_2022': 'Hidden', 'EN_2023': 'Hidden', 'EN_2024': 'Hidden', 'EN_2025': 'Hidden', 'Chef_lieux': 'Hidden', 'X_Position': 'Hidden', 'Y_Position': 'Hidden', });
lyr_PortAnjouan_13.set('fieldImages', {'DU_PORT': 'TextEdit', 'ILE': 'Hidden', });
lyr_PortGrandeComore_14.set('fieldImages', {'ID': 'Hidden', });
lyr_PortMoheli_15.set('fieldImages', {'MOH_PORT': 'TextEdit', });
lyr_Mayote_1.set('fieldLabels', {'Commune': 'header label', });
lyr_Moheli_2.set('fieldLabels', {'COMMUNE': 'header label', });
lyr_Anjouan_3.set('fieldLabels', {'COMMUNE': 'header label', });
lyr_GrandeComore_4.set('fieldLabels', {'COMMUNE': 'header label', });
lyr_Ilots_5.set('fieldLabels', {'CIPR': 'header label', });
lyr_RoutesMoheli_6.set('fieldLabels', {});
lyr_Infrastructuresdebase_7.set('fieldLabels', {'Nom': 'header label', });
lyr_RoutesAnjouan_8.set('fieldLabels', {});
lyr_RoutesGrandeComore_9.set('fieldLabels', {});
lyr_LocalitsGrandeComore_10.set('fieldLabels', {'VILLAGE': 'header label', });
lyr_LocalitsAnjouan_11.set('fieldLabels', {'VILLAGE': 'header label', });
lyr_LocalitsMoheli_12.set('fieldLabels', {'VILLAGE': 'header label', });
lyr_PortAnjouan_13.set('fieldLabels', {'DU_PORT': 'header label', });
lyr_PortGrandeComore_14.set('fieldLabels', {});
lyr_PortMoheli_15.set('fieldLabels', {'MOH_PORT': 'header label', });
lyr_PortMoheli_15.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});