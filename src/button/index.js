import template from './main.html';

let uiButton = {
    name: 'ui-button',
    props: {
        type: {
            type: String,
            default: 'primary'
        },
        size: {
            type: String,
            default: 'small'
        }
    },
    template,
    data() {
        return {
            className: ''
        }
    },
    methods: {
        handleClick(evt) {
            this.$emit('click', evt);
        }
    },
    created() {
        console.log(this.type.indexOf('text'))
        let str1 = 'ui-' + this.type.split(" ")[0]
        let str2 = this.type.split(" ")[1] ? (' ui-' + this.type.split(" ")[1]) : ''
        this.className = str1 + str2 + ' ' + (this.type.indexOf('text') === -1 ? ('ui-' + this.size) : 'ui-small')
    }
}

/* istanbul ignore next */
uiButton.install = function (Vue) {
    Vue.component(uiButton.name, uiButton);
};

export default uiButton;