
function jijsdoaf() {
        var divID = $("#dialogId");
        var dialogParent = $("#dialogId").parent();
        var dialogOwn = divID.clone();
        dialogOwn.hide();
        var productKey = $("#productkeyList").val();
        var deviceName = $("#device_name").val();
        var top = $("#tableArea").offset().top;
        var left = $("#tableArea").offset().right-600 ;
        if($("#device_name").val()==""){
            alert("请输入设备名称");
        }else if(productKey==""){
            alert("请选择产品线");
        }else{
        $("#dialogId").dialog({
                height: 250,
                width: 600,
                // 模态开启
                modal:true,
                // 是否可拖拽
                draggable: true,
                // 最小宽度
                minWidth: 300,
                positioin:[top,left],
                buttons: {
                    "提交": function() {
                        var functionName = $("#functionName").val();
                        var deviceId = $("#deviceId").val();
                        var params = $("#params").val();
                        if(deviceId==""){
                            alert("请输入设备ID");
                        }else if(functionName==""){
                             alert("请输入方法名");
                        }else{
                            $.ajax({
                            type: "POST",
                            url: "downStream",
                            data: {productKey:productKey,deviceName:deviceName,deviceId:deviceId,functionName:functionName,params:params},
                            dataType: "json",
                            success: function(data){
                               if(200==data.code){
                                alert("下发成功");
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
                    },
                    "取消": function() {
                                $(this).dialog("close");
                        }
                 },
                 close: function() {
                     dialogOwn.appendTo(dialogParent);
                     $(this).dialog("destroy").remove();
                 }
         });
        }
     }
     jijsdoaf();