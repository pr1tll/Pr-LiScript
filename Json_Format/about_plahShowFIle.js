javascript:function submit() {  
    var ShowName = prompt('ShowNameList');
    var params = {"fileName":[],"PbVersion":"0.04"};
    var reg = new RegExp('"','g');
    var regg = /\[/;var reggg = /\]/;
    var ShowName = ShowName.replace(reg,"");
    var ShowName = ShowName.replace(regg,"");
    var ShowName = ShowName.replace(reggg,"");
    arr = ShowName.split(',');
    var i = 0, len = arr.length;
    for(;i<len;i++){params.fileName[i] = arr[i];}
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