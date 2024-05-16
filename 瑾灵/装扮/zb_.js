if (window.plus) {
	plusReady_zb();
} else {
	document.addEventListener('plusready', plusReady_zb, false);
};

function plusReady_zb() {
	dibu_ys_i_q0 = plus.io.convertLocalFileSystemURL('_doc/ZB/IMG/dibu_zb_ZsG6PH/IMG_3202.PNG')
	dibu_ys_i_q1 = plus.io.convertLocalFileSystemURL('_doc/ZB/IMG/dibu_zb_ZsG6PH/IMG_3198.PNG')
	dibu_ys_i_q2 = plus.io.convertLocalFileSystemURL('_doc/ZB/IMG/dibu_zb_ZsG6PH/IMG_3194.PNG')
	dibu_ys_i_q3 = plus.io.convertLocalFileSystemURL('_doc/ZB/IMG/dibu_zb_ZsG6PH/IMG_3198.PNG')
	dibu_ys_i_q4 = plus.io.convertLocalFileSystemURL('_doc/ZB/IMG/dibu_zb_ZsG6PH/IMG_3190.PNG')
	dibu_ys_i_h0 = plus.io.convertLocalFileSystemURL('_doc/ZB/IMG/dibu_zb_ZsG6PH/IMG_3200.PNG')
	dibu_ys_i_h1 = plus.io.convertLocalFileSystemURL('_doc/ZB/IMG/dibu_zb_ZsG6PH/IMG_3196.PNG')
	dibu_ys_i_h2 = plus.io.convertLocalFileSystemURL('_doc/ZB/IMG/dibu_zb_ZsG6PH/IMG_3192.PNG')
	dibu_ys_i_h3 = plus.io.convertLocalFileSystemURL('_doc/ZB/IMG/dibu_zb_ZsG6PH/IMG_3196.PNG')
	dibu_ys_i_h4 = plus.io.convertLocalFileSystemURL('_doc/ZB/IMG/dibu_zb_ZsG6PH/IMG_3188.PNG')

	localforage.getItem('ZB_img', function(err, value) {
		ZB_img = true
		if (value != null) {
			ZB_img = value
		}
		if (ZB_img) {
			window.top.downWgt('https://yyg66007.github.io/瑾灵/装扮/dibu_zb_ZsG6PH.zip',
				false, '_doc/ZB/IMG/')
			plus.nativeUI.toast('正在下载装扮');
			ysbxz = 0
			zbb = setInterval(() => {
				ysbxz++
				if (sessionStorage.getItem('zb_zip')) {
					clearInterval(zbb)
					plus.nativeUI.toast('下载装扮成功，开始解压');
					localforage.setItem('ZB_img', false).then(function(value) {}).catch(
						function(err) {});
					plus.zip.decompress(plus.io.convertLocalFileSystemURL('_doc/ZB/IMG/dibu_zb_ZsG6PH.zip'),
						'_doc/ZB/IMG/',
						function() {
							plus.nativeUI.toast('解压完成，正在载入装扮');
							plusReady_zb()
						},
						function(error) {
							plus.nativeUI.toast('解压失败');
						});
				} else if (ysbxz > 60) {
					clearInterval(zbb)
					plus.nativeUI.toast('下载装扮失败');
				}
			}, 1000)
		}
	})
	var fool_img = document.querySelector('.foot').querySelectorAll('img')
	var fool_span = document.querySelector('.foot').querySelectorAll('span')
	for (let i = 0; i < fool_img.length; i++) {
		fool_img[i].style.width = '62px'
		fool_img[i].style.height = '62px'
		fool_img[i].style.marginTop = '-22px'
		fool_img[i].style.marginLeft = '-15px'
		fool_span[i].style.top = '3.5rem'
	}
	fool_img[0].src = dibu_ys_i_h0
	fool_img[1].src = dibu_ys_i_q1
	fool_img[2].src = dibu_ys_i_q2
	fool_img[3].src = dibu_ys_i_q3
	fool_img[4].src = dibu_ys_i_q4

	function zb_z(num, a, b) {
		var fool_img = window.frames[num].document.querySelector('.foot').querySelectorAll('img')
		var fool_span = window.frames[num].document.querySelector('.foot').querySelectorAll('span')
		for (let i = 0; i < fool_img.length; i++) {
			fool_img[i].style.width = '62px'
			fool_img[i].style.height = '62px'
			fool_img[i].style.marginTop = '-22px'
			fool_img[i].style.marginLeft = '-15px'
			fool_span[i].style.top = '3.5rem'
		}
		fool_img[0].src = dibu_ys_i_q0
		fool_img[1].src = dibu_ys_i_q1
		fool_img[2].src = dibu_ys_i_q2
		fool_img[3].src = dibu_ys_i_q3
		fool_img[4].src = dibu_ys_i_q4
		fool_img[a].src = b
	}
	zb_z('iframe1', 1, dibu_ys_i_h1)
	zb_z('iframe2', 2, dibu_ys_i_h2)
	zb_z('iframe3', 3, dibu_ys_i_h3)
	zb_z('iframe4', 4, dibu_ys_i_h4)
}