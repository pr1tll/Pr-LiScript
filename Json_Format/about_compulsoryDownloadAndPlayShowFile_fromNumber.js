javascript:function submit() {
    var ProgramSwitch; ProgramSwitch= prompt('ProgramSwitch import');
    var projs = JSON.parse(
        '{"ShowFile":[{"fileName":"upload_1a71c155ab6436f1e7cc2248b6940d81","fileSize":224556,"fileURL":"https://pt-starfile.didistatic.com/static/starfile/node20211206/895f1e95e30aba5dd56d6f2ccf768b57/a7C7kJ6C8Y1638790891137.zip?expire=1626256263&signiture=w5ASHddEXUyP_7HAhjriWy_OfkMkY2Ho_xN3xVfm8hk=","fileMd5":"5327729c1590a8e1605cbbf77fb41ce6"},{"fileName":"upload_2f3f5712515386020f8eca94e8d5963b","fileSize":286855,"fileURL":"https://pt-starfile.didistatic.com/static/starfile/node20211206/895f1e95e30aba5dd56d6f2ccf768b57/S2QEM88PQM1638790868052.zip?expire=1626256263&signiture=w5ASHddEXUyP_7HAhjriWy_OfkMkY2Ho_xN3xVfm8hk=","fileMd5":"785fbc1df15dd0c8a5bbd76b626f4227"},{"fileName":"upload_34386a97c09857188c30532e62bfdd8c","fileSize":18546,"fileURL":"https://pt-starfile.didistatic.com/static/starfile/node20211206/895f1e95e30aba5dd56d6f2ccf768b57/rUdOrlEdzS1638790765066.zip?expire=1626256263&signiture=w5ASHddEXUyP_7HAhjriWy_OfkMkY2Ho_xN3xVfm8hk=","fileMd5":"34ab1dd5613037b659c222e473a633d2"},{"fileName":"upload_3f1494268b91fdf5328f698990feb8c8","fileSize":64769,"fileURL":"https://pt-starfile.didistatic.com/static/starfile/node20211207/895f1e95e30aba5dd56d6f2ccf768b57/nZ60unIsnj1638847947833.zip?expire=1626256263&signiture=w5ASHddEXUyP_7HAhjriWy_OfkMkY2Ho_xN3xVfm8hk=","fileMd5":"93d2bea99f4ca54d203ed40956c27c83"},{"fileName":"upload_657db3826c38f2d65647011a13da5abb","fileSize":26033,"fileURL":"https://pt-starfile.didistatic.com/static/starfile/node20211207/895f1e95e30aba5dd56d6f2ccf768b57/am9QGRo0ci1638845536587.zip?expire=1626256263&signiture=w5ASHddEXUyP_7HAhjriWy_OfkMkY2Ho_xN3xVfm8hk=","fileMd5":"6a06ed38be6cc754f6f8c5272e891137"},{"fileName":"upload_65dad7b303e598eab89ba83fafb2c73d","fileSize":64568,"fileURL":"https://pt-starfile.didistatic.com/static/starfile/node20211207/895f1e95e30aba5dd56d6f2ccf768b57/uZuMFg7GT71638845713366.zip?expire=1626256263&signiture=w5ASHddEXUyP_7HAhjriWy_OfkMkY2Ho_xN3xVfm8hk=","fileMd5":"949afbd0af57f47cd7cff59aa2d5f156"},{"fileName":"upload_86cd87c9479e6af8810c95df37a021e8","fileSize":62664,"fileURL":"https://pt-starfile.didistatic.com/static/starfile/node20211207/895f1e95e30aba5dd56d6f2ccf768b57/hef6IC4ocO1638845350263.zip?expire=1626256263&signiture=w5ASHddEXUyP_7HAhjriWy_OfkMkY2Ho_xN3xVfm8hk=","fileMd5":"1604ef02b51bbf8263cd4f6898e6548d"},{"fileName":"upload_96fe435a22e507a99d308ad48e823fab","fileSize":305321,"fileURL":"https://pt-starfile.didistatic.com/static/starfile/node20211207/895f1e95e30aba5dd56d6f2ccf768b57/KPOKxu6n891638847713975.zipexpire=1626256263&signiture=w5ASHddEXUyP_7HAhjriWy_OfkMkY2Ho_xN3xVfm8hk=","fileMd5":"c09ff227c9e7b477a8b4a4a261893750"},{"fileName":"upload_c79d0b198cad0a4065b2c9717ecd4970","fileSize":3564,"fileURL":"https://pt-starfile.didistatic.com/static/starfile/node20210628/895f1e95e30aba5dd56d6f2ccf768b57/l4qBmEi31x1624856490135.zip?expire=1626256263&signiture=w5ASHddEXUyP_7HAhjriWy_OfkMkY2Ho_xN3xVfm8hk=","fileMd5":"22dc514efb5682df3b2f56f5f7f52c25"},{"fileName":"upload_888a9118dffc9919ce05748ff87fb522","fileSize":28647,"fileURL":"https://pt-starfile.didistatic.com/static/starfile/node20211206/895f1e95e30aba5dd56d6f2ccf768b57/iqB7o2hJhs1638790743743.zip?expire=1626256263&signiture=w5ASHddEXUyP_7HAhjriWy_OfkMkY2Ho_xN3xVfm8hk=","fileMd5":"5afcaef0b7f974d531716ac37e43c0ad"}]}');
    var params = JSON.parse('{"PbVersion":"0.0.4","ShowFile":[], "Time":1626169971,"TrackId":27}');
    var arr = ProgramSwitch.split(' ');
    var i = 0,
    len = arr.length;
    for(;i<len;i++){alert(arr[i]);
    params.ShowFile[i] = projs.ShowFile[arr[i]];}    
    params.TrackId = 56;
    params = JSON.stringify(params);
    alert(params);
    var functionName = 'compulsoryDownloadAndPlayShowFile';
    alert(functionName);
    var productKey ='naN3ntfCHaj'; 
    var deviceId = -1;
    var deviceName = 'yb20210823000003';
    if(deviceId==""){
        alert("请输入设备ID");
    }else if(functionName=="")
    {
        alert("请输入方法名");
    }else{$.ajax({type: "POST",
        url: "downStream",
        data: {productKey:productKey,
        deviceName:deviceName,
        deviceId:deviceId,
        functionName:functionName,params:params
    },
    dataType: "json",
    success: function(data){
    if(200==data.code){

        }else{
            alert(data.message);
        }
    },
    error: function(data){
    var message = data.responseJSON.message;
    alert(message);
    }
    });
    } 
    alert("下发成功"); 
    }window.onload =submit();