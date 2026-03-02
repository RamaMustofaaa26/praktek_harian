Ext.define("TDK.Fromrc", {
  extend: "Ext.window.Window",
  alias: "widget.Fromrc",
  title: "Data Manusia",

  recordData: null,

  gridStore: null,

  modal: true,
  closable: true,
  maximizable: true,
  width: 600,
  height: 400,
  layout: 'fit',
      items: [{
        xtype: 'form',
        itemId: 'formPanel',
        bodyPadding: 15,
        scrollable: true,
        defaults: {
          labelAlign: 'left',
        },
        items: [
          {
            xtype: 'fieldset',
            title: 'Data Manusia',
            defaults: { labelWidth: 50},
            items: [
              { xtype: 'textfield', fieldLabel: 'NIK', labelWidth: 70, name: 'NIK' },
              { xtype: 'textfield', fieldLabel: 'NAMA', labelWidth: 70, name: 'NAMA'  },
              { xtype: 'textfield', fieldLabel: 'UMUR', labelWidth: 70, name: 'UMUR'  },
              { xtype: 'textfield', fieldLabel: 'TANGGAl LAHIR', labelWidth: 100, name: 'TANGGAL_LAHIR' },
              { xtype: 'textfield', fieldLabel: 'ALAMAT', labelWidth: 70, name: 'ALAMAT' },
            ]
        }],
      }],
      dockedItems: [
            {
              xtype: "toolbar",
              height: 30,
              dock: "top",
              items: [
                { 
                  text: "Save", 
                  icon: vconfig.getstyle + "/icon/save.ico",
                  handler: 'onSave'
                },
                "-",
                { 
                  text: "Cancel", 
                  icon: vconfig.getstyle + "/icon/cancel.ico ",
                  handler: "onCancel"
                }, 
            ]
        }
    ]
})