Ext.define("TDK.mainpage", {
    extend: "Ext.panel.Panel",
    id: "mainpage",
    alias: "widget.mainpage",
    pid: "mainpage",
    requires: [
        "TDK.Cmainpage",
        "TDK.Gridrc",
        "TDK.Fromrc"
    ],
    controller: "Cmainpage",
    layout: "fit",
    border: false,
    frame: false,
    
    items: [
       {
        xtype: 'Gridrc',
       }
    ],
      dockedItems: [
        {
          xtype: "toolbar",
          height: 30,
          dock: "top",
          items: [
            "-",
            { 
              // text: "Refresh", 
              icon: vconfig.getstyle + "/icon/refresh.gif ",
              handler: "onRefresh"
            },
            "-",
            { 
              // text: "New Input", 
              icon: vconfig.getstyle + "/icon/add.png",
              handler: "onNewInput"
            },
            "-",
            {
              icon: vconfig.getstyle + "/icon/cancel.png",
              handler: "ondelete"
            },
            "->",
            { 
              text: 'Download',
              handler: 'onDownload',
              icon: vconfig.getstyle + "/icon/excel.ico"
            }
          ]
        },
      ]
});