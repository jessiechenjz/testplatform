/**
 * Created by zhousicong on 2015/10/19.
 */
var positionvm = avalon.define({
    $id: 'positionvm',
    editStatus: false,
    posList: [],
    initRole: function () {
        var cookieUserid = model.getCookie("userid");
        var cookieToken =  model.getCookie("token");
        if (cookieUserid.length == "0" || cookieToken.length=="0") {
            window.location.href = '/html/admin/admin.html';
        }
    },
    listPosition: function () {
        $.ajax({
            type: "post",
            url: 'listPositions.action',
            dataType: "json",
            success: function (data) {
                var temArr = [];
                temArr = data.poss;
                for (var i = 0; i < data.poss.length; i++) {
                    temArr[i].modifyClass = "showIcon";
                    temArr[i].saveClass = "hideIcon";
                    temArr[i].readonly = true;
                }
                positionvm.posList = temArr;
            },
            error: function (data) {
                alert(data.retMSG);
            }
        });
    },
    initModify: function (index) {
        if (positionvm.editing) {
            alert("你还有尚未完成编辑的项目！")
            return;
        }
        positionvm.editStatus = true;
        positionvm.posList[index].readonly = false;
        positionvm.posList[index].modifyClass = "hideIcon";
        positionvm.posList[index].saveClass = "showIcon";
    },
    cancleModifyPos: function (index) {
        positionvm.posList[index].readonly = true;
        positionvm.posList[index].modifyClass = "showIcon";
        positionvm.posList[index].saveClass = "hideIcon";
        positionvm.editStatus = false;
    },
    modifyPos: function (index, posid, name) {
        $.ajax({
            type: "post",
            url: 'updatePosition.action',
            data: {
                "positionid": posid,
                "name": name
            },
            dataType: "json",
            success: function (data) {
                if (data.retCode == "1000") {
                    alert(data.retMSG);
                    positionvm.listPosition();
                    positionvm.posList[index].readonly = true;
                    positionvm.posList[index].modifyClass = "showIcon";
                    positionvm.posList[index].saveClass = "hideIcon"
                } else {
                    alert(data.retMSG);
                }
            },
            error: function (data) {
                alert(data.retMSG);
            }
        });
    },
    removePos: function (posid) {
        $.ajax({
            type: "post",
            url: 'deletePosition.action',
            data: {
                "positionid": posid
            },
            dataType: "json",
            success: function (data) {
                if (data.retCode == "1000") {
                    alert(data.retMSG);
                    positionvm.listPosition();
                } else {
                    alert(data.retMSG);
                }
            },
            error: function (data) {
                alert(data.retMSG);
            }
        });
    },
    newPosition: "",
    createPos: function () {
        $.ajax({
            type: "post",
            url: 'createPosition.action',
            data: {
                "name": positionvm.newPosition
            },
            dataType: "json",
            success: function (data) {
                alert(data.retMSG);
                positionvm.newPosition = "";
                positionvm.listPosition();
                $('#posTab a:first').tab('show');
            },
            error: function (data) {
                alert(data.retMSG);
            }
        });
    },
});
positionvm.initRole();
positionvm.listPosition();