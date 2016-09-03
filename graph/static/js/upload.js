var getBlobURL=(window.URL&& URL.createObjectURL.bind(URL))||window.createObjectURL||(window.webkitURL&&webkitURL.revokeObjectURL.bind(webkitURL));
var revokeBlobURL=(window.URL&&URL.revokeObjectURL.bind(URL))||(window.webkitURL&&webkitURL.revokeObjectURL.bind(webkitURL))||window.revokeBlobURL;

window.onload=function () {
		 $('#id_username').attr('placeholder','UserName');
		 $('#id_C_lass').attr('placeholder','Class');
		var id_headImg=document.getElementById('id_headImg');
		var Atlas=document.getElementsByClassName('Atlas')[0];

		$('.user_list>form>input').focus(function () {
			$(this).addClass('holder');
		});
		$('.user_list>form>input').blur(function () {
			$(this).removeClass('holder');
		});

		id_headImg.onchange=function (e) {
			
			var files=this.files;
			var type=files[0].type;
			if (type.substring(0,6) !=="image/") {
				alert("ooo");	
				return false;
			};

			
			var img=document.createElement('img');
			img.src=getBlobURL(files[0]);
			$('.Atlas>img').replaceWith(
				img.onload=function () {
					this.width=100;
					Atlas.appendChild(this);
					revokeBlobURL(this.src);
					return false;
			});

			if ($('.Atlas>img')) $('.btn_a').animate({opacity:0},0);
			else $('.btn_a').animate({opacity:1},0);
		};


};