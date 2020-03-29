//index.js
// var config = require('../../libs/config.js');
// var amapFile = require('../../libs/amap-wx.js');//如：..­/..­/libs/amap-wx.js
// var markersData = [];
// Page({
//   data: {
//     markers: [],
//     latitude: '',
//     longitude: '',
//     textData: {}
//   },
//   makertap: function (e) {
//     var id = e.markerId;
//     var that = this;
//     that.showMarkerInfo(markersData, id);
//     that.changeMarkerColor(markersData, id);
//   },
//   onLoad: function () {
//     var that = this;
//     var myAmapFun = new amapFile.AMapWX({ key: '您的key' });
//     myAmapFun.getPoiAround({
//       iconPathSelected: '选中 marker 图标的相对路径', //如：..­/..­/img/marker_checked.png
//       iconPath: '未选中 marker 图标的相对路径', //如：..­/..­/img/marker.png
//       success: function (data) {
//         markersData = data.markers;
//         that.setData({
//           markers: markersData
//         });
//         that.setData({
//           latitude: markersData[0].latitude
//         });
//         that.setData({
//           longitude: markersData[0].longitude
//         });
//         that.showMarkerInfo(markersData, 0);
//       },
//       fail: function (info) {
//         wx.showModal({ title: info.errMsg })
//       }
//     })
//   },
//   showMarkerInfo: function (data, i) {
//     var that = this;
//     that.setData({
//       textData: {
//         name: data[i].name,
//         desc: data[i].address
//       }
//     });
//   },
//   changeMarkerColor: function (data, i) {
//     var that = this;
//     var markers = [];
//     for (var j = 0; j < data.length; j++) {
//       if (j == i) {
//         data[j].iconPath = "选中 marker 图标的相对路径"; //如：..­/..­/img/marker_checked.png
//       } else {
//         data[j].iconPath = "未选中 marker 图标的相对路径"; //如：..­/..­/img/marker.png
//       }
//       markers.push(data[j]);
//     }
//     that.setData({
//       markers: markers
//     });
//   }

// })

var amapFile = require('../../libs/amap-wx.js');  //引入高德js
var config = require('../../libs/config.js');      //引用我们的配置文件
Page({
  data: {
    markers: [],
    latitude: '',
    longitude: '',
    textData: {}
  },
  onLoad: function () {
    var that = this;
    var key = config.Config.key;
    var myAmapFun = new amapFile.AMapWX({ key: key });
    myAmapFun.getRegeo({
      iconPath: "../../images/marker.png",
      iconWidth: 22,
      iconHeight: 32,
      success: function (data) {
        console.log(data);
        var marker = [{
          id: data[0].id,
          latitude: data[0].latitude,
          longitude: data[0].longitude,
          iconPath: data[0].iconPath,
          width: data[0].width,
          height: data[0].height
        }]
        that.setData({
          markers: marker
        });
        that.setData({
          latitude: data[0].latitude
        });
        that.setData({
          longitude: data[0].longitude
        });
        that.setData({
          textData: {
            name: data[0].name,
            desc: data[0].desc
          }
        })
      },
      fail: function (info) {
        // wx.showModal({title:info.errMsg})
      }
    })
  }
})

