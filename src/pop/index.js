import template from "./main.html"

let pop = {
	name: 'ui-pop',
	template,
	props: {
		width: {
			type: String,
			default: 400
		},
		pref: {
			type: String,
			required: true
		},
		positon: {
			type: String,
			default: "right"
		},
		canshow: {
			type: Boolean,
			default: true
		}
	},
	data() {
		return {
			show: false,
			pos: "left"
		};
	},
	methods: {
		setPosition(e) {
			if (!this.$refs.uiPopover) {
				return
			}
			let r = e.getBoundingClientRect();
			let parent = this.$refs.uiPopover.parentNode;
			let parentstyle = document.defaultView.getComputedStyle(parent)
			if (parentstyle.position === 'static') {
				parent.style.position = "relative";
			}
			let parentPosition = parent.getBoundingClientRect();
			//屏幕宽高
			let cw = document.documentElement.clientWidth;
			let ch = document.documentElement.clientHeight;
			//弹框宽高
			let w = this.width;
			let h = this.$refs.uiPopover.offsetHeight;
			//目标元素 宽高
			let elw = e.offsetWidth;
			let elh = e.offsetHeight;

			//定位基于父元素定位 因此需要减去 父元素的位置 如果有滚动条 需要加上滚动的高度
			let top = r.top - parentPosition.top + parent.scrollTop;
			let left = r.left - parentPosition.left + parent.scrollLeft;


			if (this.positon == "right") {
				let n = cw - elw - left;
				if (n < w) {
					this.$refs.uiPopover.style.left = left - 10 - w + "px";
					this.$refs.uiPopover.style.top = top + "px";
					this.pos = "left";
				} else {
					this.$refs.uiPopover.style.left = elw + left + 10 + "px";
					this.$refs.uiPopover.style.top = top + "px";
					this.pos = "right";
				}
			}
			if (this.positon == "left") {
				if (left < w) {
					this.$refs.uiPopover.style.left = left + elw + 10 + "px";
					this.$refs.uiPopover.style.top = top + "px";
					this.pos = "right";
				} else {
					this.$refs.uiPopover.style.left = left - w - 10 + "px";
					this.$refs.uiPopover.style.top = top + "px";
					this.pos = "left";
				}
			}
		},
		addClick() {
			var self = this;
			var el = "";
			document.body.addEventListener("click", function (e) {
				if (!self.canshow) {
					self.show = false;
					return
				}
				var arr = []
				function getNode(node) {
					if (!node || node.tagName == "BODY") {
						return
					}
					arr.push(node)
					getNode(node.parentNode)
				}

				getNode(e.target)
				//排除 window 和 document
				for (let i = 0; i < arr.length; i++) {
					if (arr[i].getAttribute("data-popver") == "uipopover") {
						return;
					}
					if (arr[i].getAttribute("data-" + self.pref)) {
						if (arr[i] === el) {
							self.show = !self.show;
						} else {
							self.show = true;
						}
						el = arr[i];
						self.setPosition(arr[i]);
						return;
					}
				}
				self.show = false;
			});
		}
	},
	mounted() {
		this.addClick();
	}
}

pop.install = function (Vue) {
	Vue.component(pop.name, pop);
}

export default pop;