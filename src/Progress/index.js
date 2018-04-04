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
			intval: ''
		}
	},
	methods: {
		start(color) {
			this.color = color ? color : ''
			this.show = true
			this.count = 0
			this.intval = setInterval(() => {
				this.count++
				if (this.count > 95) {
					clearInterval(this.intval)
				}
			}, 10)
		},
		finish() {
			this.count = 100
			this.show = false
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