
import button from './button/index'
import progress from "./Progress/index"

let components = []

components.push(button)
components.push(progress)

let install = function (vue, options = {}) {
    components.map(item => {
        if (item.name[0] === '$') {
            vue.prototype[item.name] = item
            const method = vue.prototype[item.name] = new vue(item).$mount()
	        document.body.appendChild(method.$el)
        } else {
            vue.component(item.name, item)
        }
    })

}

export default {
    button,
    progress,
    install
}