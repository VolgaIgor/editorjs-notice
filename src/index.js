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

        if (data && data.style) {
            let tuneData = NoticeTune.tunes.find(tune => tune.name === data.style);
            if (tuneData) {
                this.data = {
                    style: data.style,
                    caption: data.caption || '',
                };
            }
        }

        /**
         * Tool's initial config
         */
        this.config = {
            captionPlaceholder: this.api.i18n.t(config.captionPlaceholder || 'Notice caption'),
        };

        this.block = block;

        this.input = make('input', [this.CSS.input, this.CSS.blockInput], {
            type: 'text',
            placeholder: this.config.captionPlaceholder
        });
    }

    /**
     * CSS classes
     *
     * @returns {object}
     */
    get CSS() {
        return {
            input: this.api.styles.input,
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

    fillIcon() {
        if (this.data.style) {
            let tuneData = NoticeTune.tunes.find(tune => tune.name === this.data.style);

            let iconBase64 = encodeURIComponent(tuneData.icon);
            this.input.style.backgroundImage = `url(data:image/svg+xml,${iconBase64})`;
        } else {
            this.input.style.backgroundImage = '';
        }
    }

    fillTunes() {
        this.buttons.forEach(button => {
            button.classList.toggle(this.CSS.buttonActive, button.dataset.tune === this.data.style);
            this.block.holder.classList.toggle(`${this.CSS.baseTemplate}--${button.dataset.tune}`, button.dataset.tune === this.data.style);
        });
    }

    /**
     * Rendering tune wrapper
     * @returns {*}
     */
    render() {
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

            this.buttons.push(el);

            this.api.tooltip.onHover(el, title, {
                placement: 'top',
            });

            wrapper.appendChild(el);
        });

        this.fillTunes();

        return wrapper;
    }

    wrap(blockContent) {
        const wrapper = make('div', this.CSS.blockWrapper);

        const content = make('div', this.CSS.blockContent);
        this.input.value = this.data.caption;
        this.fillIcon();

        content.appendChild(this.input);

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
        let oldStyle = this.data.style;

        if (this.data.style === tuneName) {
            this.data.style = undefined;

            this.block.holder.classList.remove(this.CSS.baseTemplate);
        } else {
            let clickTune = NoticeTune.tunes.find(tune => tune.name === tuneName);
            if (clickTune) {
                this.data.style = tuneName;
                this.block.holder.classList.add(this.CSS.baseTemplate);
            }
        }

        let newStyle = this.data.style;
        if (oldStyle !== newStyle) {
            this.checkNeighbor(oldStyle, newStyle);

            this.fillIcon();
            this.fillTunes();
        }
    }

    checkNeighbor(oldStyle, newStyle) {
        let currentIndex = this.api.blocks.getCurrentBlockIndex();

        let aheadBlock = this.api.blocks.getBlockByIndex(currentIndex - 1);
        let behindBlock = this.api.blocks.getBlockByIndex(currentIndex + 1);

        if (oldStyle !== undefined) {
            if (
                (aheadBlock === undefined || !aheadBlock.holder.classList.contains(`${this.CSS.baseTemplate}--${oldStyle}`)) &&
                (behindBlock !== undefined && behindBlock.holder.classList.contains(`${this.CSS.baseTemplate}--${oldStyle}`)) &&
                this.input.value.length !== 0
            ) {
                let behindBlockInput = behindBlock.holder.querySelector(`.${this.CSS.blockInput}`);
                if (behindBlockInput) {
                    behindBlockInput.value = this.input.value;
                }
            }
        }

        if (newStyle !== undefined) {
            if (
                (aheadBlock === undefined || !aheadBlock.holder.classList.contains(`${this.CSS.baseTemplate}--${newStyle}`)) &&
                (behindBlock !== undefined && behindBlock.holder.classList.contains(`${this.CSS.baseTemplate}--${newStyle}`))
            ) {
                let behindBlockInput = behindBlock.holder.querySelector(`.${this.CSS.blockInput}`);
                if (behindBlockInput && behindBlockInput.value.length !== 0) {
                    this.input.value = behindBlockInput.value;
                }
            }
        }
    }

    save() {
        if (!this.data.style) {
            return undefined;
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
