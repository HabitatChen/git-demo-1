!function () {
	var view = document.querySelector('nav.menu')
	var controller = {
		veiw: null,
		aTags: null,
		init: function (view) {
			this.view = view
			this.initAniamtion()
			this.bindEvents()
		},
		initAniamtion: function () {
			function animate(time) {
				requestAnimationFrame(animate);
				TWEEN.update(time);
			}
			requestAnimationFrame(animate);
		},
		scrollToElement: function (element) {
			let top = element.offsetTop
			let currentTop = window.scrollY
			let targetTop = top - 85
			let s = Math.abs(targetTop - currentTop);
			var coords = { y: currentTop };
			var t = (s / 100) * 400;
			if (t > 800) { t = 800 }
			var tween = new TWEEN.Tween(coords)
				.to({ y: targetTop }, t)
				.easing(TWEEN.Easing.Quadratic.InOut)
				.onUpdate(function () {
					window.scrollTo(0, coords.y)
				})
				.start();
		},
		bindEvents: function () {
			let aTags = this.view.querySelectorAll('nav.menu > ul > li >a')
			for (let i = 0; i < aTags.length; i++) {
				aTags[i].onclick = (x)=> {
					x.preventDefault()
					let a = x.currentTarget;
					let href = a.getAttribute('href')
					let element = document.querySelector(href)
					this.scrollToElement(element)
				}
			}
			//导航下的border-bottom
			let liTags = document.querySelectorAll('nav.menu > ul >li')

			for (let i = 0; i < liTags.length; i++) {
				liTags[i].onmouseenter = function (x) {
					let li = x.currentTarget.classList.add('active')
				}
				liTags[i].onmouseleave = function (x) {
					let li = x.currentTarget.classList.remove('active')

				}
			}
		},
	}
	controller.init.call(controller, view)
}.call()
