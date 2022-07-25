import css from './index.css';

import infoIcon from './svg/info.svg';
import warningIcon from './svg/warning.svg';
import spoilerIcon from './svg/spoiler.svg';

export default class NoticeTune {

    /**
     * @returns {bool}
     */
    static get isTune() {
        return true;
    }

    /**
     * Constructor
     *
     * @param api - Editor.js API
     * @param data — Previously saved data
     */
    constructor({ api, data, config, block }) {
        this.api = api;
        this.data = {
            style: undefined,
            caption: '',
        };

        /**
         * Tool's initial config
         */
        this.config = {
            captionPlaceholder: this.api.i18n.t(config.captionPlaceholder || 'Notice caption'),
        };

        this.block = block;
    }

    /**
   * CSS classes
   *
   * @returns {object}
   */
    get CSS() {
        return {
            input: this.api.styles.input,
            baseClass: 'ce-block__content',

            buttonBase: this.api.styles.settingsButton,
            buttonActive: this.api.styles.settingsButtonActive,

            baseTemplate: 'notice-tune',

            tuneWrapper: 'notice-tune__tune-wrapper',
            tuneButton: 'notice-tune__tune-button',

            blockWrapper: 'notice-tune__wrapper',
            blockContent: 'notice-tune__content',
            blockInput: 'notice-tune__input',
        };
    };

    /**
     * Available tunes
     *
     * @returns {{name: string, icon: string, title: string}[]}
     */
    static get tunes() {
        return [
            {
                name: 'spoiler',
                icon: spoilerIcon,
                title: 'Spoiler',
            },
            {
                name: 'info',
                icon: infoIcon,
                title: 'Info',
            },
            {
                name: 'warning',
                icon: warningIcon,
                title: 'Warning',
            },
        ];
    }

    /**
     * Rendering tune wrapper
     * @returns {*}
     */
    render() {
        /*this.api.blocks.getBlockByIndex(0).save().then((obj) => {
            console.log(obj);
        });*/
        const wrapper = make('div', this.CSS.tuneWrapper);

        this.buttons = [];

        NoticeTune.tunes.forEach(tune => {
            const title = this.api.i18n.t(tune.title);
            const el = make('div', [this.CSS.buttonBase, this.CSS.tuneButton], {
                innerHTML: tune.icon,
                title,
            });

            el.addEventListener('click', () => {
                this.tuneClicked(tune.name);
            });

            el.dataset.tune = tune.name;
            el.classList.toggle(this.CSS.buttonActive, this.data.style === tune.name);

            this.buttons.push(el);

            this.api.tooltip.onHover(el, title, {
                placement: 'top',
            });

            wrapper.appendChild(el);
        });

        return wrapper;
    }

    wrap(blockContent) {
        const wrapper = make('div', this.CSS.blockWrapper);

        const content = make('div', [this.CSS.baseClass, this.CSS.blockContent]);
        const input = make('input', [this.CSS.input, this.CSS.blockInput], {
            type: 'text',
            placeholder: this.config.captionPlaceholder
        });

        this.input = input;

        content.appendChild(input);

        wrapper.appendChild(content);
        wrapper.appendChild(blockContent);

        return wrapper;
    }

    /**
     * Clicks to one of the tunes
     *
     * @param {string} tuneName - clicked tune name
     */
    tuneClicked(tuneName) {
        if (this.data.style === tuneName) {
            this.data.style = undefined;

            this.input.style.backgroundImage = '';
        } else {
            let newStyle = NoticeTune.tunes.find(tune => tune.name === tuneName);
            if (newStyle) {
                this.data.style = tuneName;
                let iconBase64 = encodeURIComponent(newStyle.icon);
                this.input.style.backgroundImage = `url(data:image/svg+xml,${iconBase64})`;
            }
        }

        /*let currentIndex = this.api.blocks.getCurrentBlockIndex();
        this.api.blocks.getBlockByIndex(currentIndex - 1);*/

        this.buttons.forEach(button => {
            button.classList.toggle(this.CSS.buttonActive, button.dataset.tune === this.data.style);
            this.block.holder.classList.toggle(`${this.CSS.baseTemplate}--${button.dataset.tune}`, button.dataset.tune === this.data.style);
        });
    }

    save() {
        if (!this.style) {
            return null;
        }

        this.data.caption = this.input.value;

        return this.data;
    }
}

/**
 * Helper for making Elements with attributes
 *
 * @param  {string} tagName           - new Element tag name
 * @param  {Array|string} classNames  - list or name of CSS class
 * @param  {object} attributes        - any attributes
 * @returns {Element}
 */
export const make = function make(tagName, classNames = null, attributes = {}) {
    const el = document.createElement(tagName);

    if (Array.isArray(classNames)) {
        el.classList.add(...classNames);
    } else if (classNames) {
        el.classList.add(classNames);
    }

    for (const attrName in attributes) {
        el[attrName] = attributes[attrName];
    }

    return el;
};
