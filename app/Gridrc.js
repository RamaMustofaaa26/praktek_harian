Ext.define("TDK.Gridrc", {
    extend: "Ext.form.Panel",
    id: "Gridrc",
    alias: "widget.Gridrc",
    frame: false,
    border: false,
    autoScroll: true,
    layout: { type: "vbox", pack: "start", align: "stretch" },
    requires: [],

    items: [{
        xtype: 'grid',
        pid: "Gridrc", 
        reference: "Gridrc",
        flex: 1,
        pid: "Gridpk",
        autoScroll: true,
        border: false,
        frame: false,
        store: {
            autoLoad: true,
            autoSync: true,
            fields: ["NIK", "NAMA", "UMUR", "TANGGAL_LAHIR", "ALAMAT"],
            proxy: {
            type: 'localstorage',
            id: 'data-manusia'
        },
        },
        plugins: ['filterfield'],
      viewConfig: {
        enableTextSelection: true,
        columnLines: true,
      },

      columns: {
        defaults: {
          filter: { xtype: 'textfield' },
          sortable: true,
        },
        items: [
          { xtype: 'rownumberer', width: 50, filter: false },
          {
            xtype: 'actioncolumn',
            width: 35,
            align: 'center',
            menuDisabled: true,
            stopSelection: false,
            sortable: false,
            filter: false,
            items: [{
              icon: vconfig.getstyle + '/icon/grid.png',
              handler: function (xgrid, rowIndex, colIndex, e, a, rec) {
                try {
                  var Gridrc = xgrid.up('Gridrc');
                  Gridrc.Gridrc_itemclick(xgrid, rowIndex, colIndex, e, a, rec);
                } catch (ex) {
                  COMP.TipToast.msgbox('Error', ex.message, { cls: 'danger', delay: 2000 });
                }
              }
            }]
          },
          { header: 'NIK', dataIndex: 'NIK', flex:1 },
          { header: 'NAMA', dataIndex: 'NAMA', flex:1 },
          { header: 'UMUR', dataIndex: 'UMUR', flex:1 },       
          { header: 'TANGGAL LAHIR', dataIndex: 'TANGGAL_LAHIR', flex:1 },
          { header: 'ALAMAT', dataIndex: 'ALAMAT', flex:1 }
        ]},
        listeners: {
        itemdblclick: 'onGridDblClick'
      },
    }],

// Handler Actioncolumn
  Gridrc_itemclick: function (xgrid, rowIndex, colIndex, e, a, rec) {
    console.log('Action clicked for record:', rec.data);
  },
});