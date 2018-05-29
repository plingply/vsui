import template from './main.html'

let progress = {
	name: '$progress',
	template,
	data() {
		return {
			style: "",
			color: '',
			count: 0,
			show: false,
			intval: '',
			opacity: 0
		}
	},
	methods: {
		start(color) {
			clearInterval(this.intval)
			this.color = color ? color : ''
			this.show = true
			this.count = 0
			this.opacity = 1
			this.intval = setInterval(() => {
				this.count += 2
				this.opacity = this.opacity > 1 ? 1 : this.opacity
				if (this.count >= 95) {
					clearInterval(this.intval)
				}
			}, 10)
		},
		finish() {
			console.log(this.count,'fishend')
			clearInterval(this.intval)
			// this.finish()
			this.intval = setInterval(() => {
				this.count += 2
				if (this.count >= 100) {
					clearInterval(this.intval)
					this.opacity = 0
					setTimeout(() => {
						this.show = false
					}, 300)
				}
			}, 10)

		}
	},
	created() {
		this.style = this.color == 'false' ? '' : this.color
	}
}

progress.install = function (Vue) {
	const $progress = Vue.prototype.$progress = new Vue(progress).$mount()
	document.body.appendChild($progress.$el)
}

export default progress;