var wms_layers = [];

var format_Admin_Canden_0 = new ol.format.GeoJSON();
var features_Admin_Canden_0 = format_Admin_Canden_0.readFeatures(json_Admin_Canden_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Admin_Canden_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Admin_Canden_0.addFeatures(features_Admin_Canden_0);
var lyr_Admin_Canden_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Admin_Canden_0, 
                style: style_Admin_Canden_0,
                interactive: true,
                title: '<img src="styles/legend/Admin_Canden_0.png" /> Admin_Canden'
            });
var format_Bidang_Tanah_1 = new ol.format.GeoJSON();
var features_Bidang_Tanah_1 = format_Bidang_Tanah_1.readFeatures(json_Bidang_Tanah_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bidang_Tanah_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bidang_Tanah_1.addFeatures(features_Bidang_Tanah_1);
var lyr_Bidang_Tanah_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Bidang_Tanah_1, 
                style: style_Bidang_Tanah_1,
                interactive: true,
                title: '<img src="styles/legend/Bidang_Tanah_1.png" /> Bidang_Tanah'
            });
var format_Sungai_2 = new ol.format.GeoJSON();
var features_Sungai_2 = format_Sungai_2.readFeatures(json_Sungai_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sungai_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sungai_2.addFeatures(features_Sungai_2);
var lyr_Sungai_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Sungai_2, 
                style: style_Sungai_2,
                interactive: true,
                title: '<img src="styles/legend/Sungai_2.png" /> Sungai'
            });
var format_Jalan_3 = new ol.format.GeoJSON();
var features_Jalan_3 = format_Jalan_3.readFeatures(json_Jalan_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jalan_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jalan_3.addFeatures(features_Jalan_3);
var lyr_Jalan_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Jalan_3, 
                style: style_Jalan_3,
                interactive: true,
                title: '<img src="styles/legend/Jalan_3.png" /> Jalan'
            });

lyr_Admin_Canden_0.setVisible(true);lyr_Bidang_Tanah_1.setVisible(true);lyr_Sungai_2.setVisible(true);lyr_Jalan_3.setVisible(true);
var layersList = [lyr_Admin_Canden_0,lyr_Bidang_Tanah_1,lyr_Sungai_2,lyr_Jalan_3];
lyr_Admin_Canden_0.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'SUMBER': 'SUMBER', 'Penduduk': 'Penduduk', });
lyr_Bidang_Tanah_1.set('fieldAliases', {'NIK': 'NIK', 'PEMILIK': 'PEMILIK', 'ADMINISTRA': 'ADMINISTRA', 'NIB': 'NIB', 'NOP': 'NOP', 'THN_PAJAK': 'THN_PAJAK', 'STATUS_HAK': 'STATUS_HAK', 'PL_CITRA': 'PL_CITRA', 'L_BIDANG': 'L_BIDANG', });
lyr_Sungai_2.set('fieldAliases', {'FID_Sungai': 'FID_Sungai', 'OBJECTID': 'OBJECTID', 'Id': 'Id', 'Jenis_sung': 'Jenis_sung', 'Nama_Sunga': 'Nama_Sunga', 'Sumber': 'Sumber', 'Tahun': 'Tahun', 'Wewenang': 'Wewenang', 'FID_ADMIN_': 'FID_ADMIN_', 'OBJECTID_1': 'OBJECTID_1', 'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'SUMBER_1': 'SUMBER_1', 'Penduduk': 'Penduduk', });
lyr_Jalan_3.set('fieldAliases', {'Id': 'Id', 'LEBAR2': 'LEBAR2', 'Fungsi': 'Fungsi', 'Jalan': 'Jalan', 'Ruas': 'Ruas', });
lyr_Admin_Canden_0.set('fieldImages', {'OBJECTID': '', 'KDPPUM': '', 'NAMOBJ': '', 'REMARK': '', 'KDPBPS': '', 'FCODE': '', 'LUASWH': '', 'UUPP': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'KDEBPS': '', 'KDEPUM': '', 'KDCBPS': '', 'KDCPUM': '', 'KDBBPS': '', 'KDBPUM': '', 'WADMKD': '', 'WIADKD': '', 'WADMKC': '', 'WIADKC': '', 'WADMKK': '', 'WIADKK': '', 'WADMPR': '', 'WIADPR': '', 'TIPADM': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', 'SUMBER': '', 'Penduduk': '', });
lyr_Bidang_Tanah_1.set('fieldImages', {'NIK': '', 'PEMILIK': '', 'ADMINISTRA': '', 'NIB': '', 'NOP': '', 'THN_PAJAK': '', 'STATUS_HAK': '', 'PL_CITRA': '', 'L_BIDANG': '', });
lyr_Sungai_2.set('fieldImages', {'FID_Sungai': '', 'OBJECTID': '', 'Id': '', 'Jenis_sung': '', 'Nama_Sunga': '', 'Sumber': '', 'Tahun': '', 'Wewenang': '', 'FID_ADMIN_': '', 'OBJECTID_1': '', 'KDPPUM': '', 'NAMOBJ': '', 'REMARK': '', 'KDPBPS': '', 'FCODE': '', 'LUASWH': '', 'UUPP': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'KDEBPS': '', 'KDEPUM': '', 'KDCBPS': '', 'KDCPUM': '', 'KDBBPS': '', 'KDBPUM': '', 'WADMKD': '', 'WIADKD': '', 'WADMKC': '', 'WIADKC': '', 'WADMKK': '', 'WIADKK': '', 'WADMPR': '', 'WIADPR': '', 'TIPADM': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', 'SUMBER_1': '', 'Penduduk': '', });
lyr_Jalan_3.set('fieldImages', {'Id': '', 'LEBAR2': '', 'Fungsi': '', 'Jalan': '', 'Ruas': '', });
lyr_Admin_Canden_0.set('fieldLabels', {'OBJECTID': 'no label', 'KDPPUM': 'no label', 'NAMOBJ': 'no label', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', 'SUMBER': 'no label', 'Penduduk': 'no label', });
lyr_Bidang_Tanah_1.set('fieldLabels', {'NIK': 'no label', 'PEMILIK': 'no label', 'ADMINISTRA': 'no label', 'NIB': 'no label', 'NOP': 'no label', 'THN_PAJAK': 'no label', 'STATUS_HAK': 'no label', 'PL_CITRA': 'no label', 'L_BIDANG': 'no label', });
lyr_Sungai_2.set('fieldLabels', {'FID_Sungai': 'no label', 'OBJECTID': 'no label', 'Id': 'no label', 'Jenis_sung': 'no label', 'Nama_Sunga': 'no label', 'Sumber': 'no label', 'Tahun': 'no label', 'Wewenang': 'no label', 'FID_ADMIN_': 'no label', 'OBJECTID_1': 'no label', 'KDPPUM': 'no label', 'NAMOBJ': 'no label', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', 'SUMBER_1': 'no label', 'Penduduk': 'no label', });
lyr_Jalan_3.set('fieldLabels', {'Id': 'no label', 'LEBAR2': 'no label', 'Fungsi': 'no label', 'Jalan': 'no label', 'Ruas': 'no label', });
lyr_Jalan_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});