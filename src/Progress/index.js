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
				this.count++
				this.opacity = this.opacity > 1 ? 1 : this.opacity
				if (this.count >= 95) {
					clearInterval(this.intval)
				}
			}, 10)
		},
		finish() {
			console.log(this.count, 'finshed')
			clearInterval(this.intval)
			// this.finish()
			this.intval = setInterval(() => {
				this.count++
				if (this.count >= 100) {
					clearInterval(this.intval)
					setTimeout(() => {
						this.show = false
						this.opacity = 0
					}, 100)
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