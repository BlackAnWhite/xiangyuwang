//先将 file类型 的input 隐藏 起来，通过 图片（头像）的onclick事件 来触发 file 的onclick事件。



function getPicture(){
    $("#change_photo").click();
    }

function setImage(docObj, localImagId, imgObjPreview) {
	
	
    var f = $(docObj).val();
    f = f.toLowerCase();
    var strRegex = ".bmp|jpg|jpeg|png$";
    var re=new RegExp(strRegex);
    if (re.test(f.toLowerCase())){
         //return true;
    }
    else{
        alert("请选择正确格式的图片");
         file = $("#change_photo");
         file.after(file.clone());
         file.remove();
        return false;
    }
    if (docObj.files && docObj.files[0]) {
        //火狐下，直接设img属性
        //imgObjPreview.style.display = 'block';
        //imgObjPreview.style.width = '140px';
        //imgObjPreview.style.height = '187px';
        //火狐7以上版本不能用上面的getAsDataURL()方式获取，需要一下方式  
        imgObjPreview.src = window.URL.createObjectURL(docObj.files[0]);

    } else {
        //IE下，使用滤镜
        docObj.select();
        var imgSrc = document.selection.createRange().text;
        //必须设置初始大小
        //localImagId.style.width = "140px";
        //localImagId.style.height = "187px";
        //图片异常的捕捉，防止用户修改后缀来伪造图片
        try {
            localImagId.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale)";
            localImagId.filters.item("DXImageTransform.Microsoft.AlphaImageLoader").src = imgSrc;
        } catch(e) {
            alert("您上传的图片格式不正确，请重新选择!");
            return false;
        }
        imgObjPreview.style.display = 'none';
        document.selection.empty();
    }
    return true;
    

    
}

