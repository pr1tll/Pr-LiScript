javascript:function submit() {  
    var ShowName = prompt('ShowNameList');
    var ProgramName = ["upload_1a71c155ab6436f1e7cc2248b6940d81",
                    "upload_2f3f5712515386020f8eca94e8d5963b",
                    "upload_34386a97c09857188c30532e62bfdd8c",
                    "upload_3f1494268b91fdf5328f698990feb8c8",
                    "upload_657db3826c38f2d65647011a13da5abb",
                    "upload_65dad7b303e598eab89ba83fafb2c73d",
                    "upload_86cd87c9479e6af8810c95df37a021e8",
                    "upload_cef29ff45f0624a3b494e82473f72644",
                    "upload_f481fb3e3d991e217a95e275732bd6b5",
                    "upload_fdedc250f850808871a569694ba06673"
                        ];
    var params = {"fileName":[],"PbVersion":"0.04"};

    arr = ShowName.split(' ');
    var i = 0, len = arr.length;
    for(;i<len;i++){params.fileName[i] = ProgramName[arr[i]];}
    params.TrackId = 60;
    params = JSON.stringify(params);
    var functionName = 'playShowFile';
    alert(functionName); 
    var productKey = 'naN3ntfCHaj'; 
    var deviceId = -1; 
    var deviceName = 'yb20210823000003';
    if(deviceId==""){
    alert("请输入设备ID"); 
    }else if(functionName==""){
    alert("请输入方法名");
    }else{ 
        $.ajax({
            type: "POST",
            url: "downStream", 
            data: {productKey:productKey,deviceName:deviceName,deviceId:deviceId,functionName:functionName,params:params}, dataType:"json",
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