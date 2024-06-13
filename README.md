# Notice with caption Block Tune for Editor.js
Tune for Editor.js adding color notice with caption for any block.

Caption field will be shown only for the first block of one type.

![Preview image](https://github.com/VolgaIgor/editorjs-notice/raw/main/assets/preview.png)

## Installation
### Install via NPM
Get the package

```shell
$ npm i editorjs-notice
```

Include module at your application

```javascript
import NoticeTune from 'editorjs-notice';
```

### Load from CDN

You can load a specific version of the package from jsDelivr CDN.

Require this script on a page with Editor.js.

```html
<script src="https://cdn.jsdelivr.net/npm/editorjs-notice"></script>
```

### Download to your project's source dir
1. Upload folder `dist` from repository
2. Add `dist/bundle.js` file to your page.

## Usage
### For all blocks
```javascript
var editor = EditorJS({
  // ...
  tools: {
    // ...
    noticeTune: NoticeTune
  },
  tunes: ['noticeTune']
  // ...
});
```

### For certain blocks
```javascript
var editor = EditorJS({
  // ...
  tools: {
    // ...
    noticeTune: NoticeTune,
    header: {
      class: Header,
      tunes: ['noticeTune']
    }
  }
  // ...
});
```

## Config Params
You can add a localized string into notice caption placeholder
```javascript
new Editorjs({
  // ...
  tools: {
    noticeTune: NoticeTune
  },
  i18n: {
    tools: {
      noticeTune: {
        'Notice caption': 'Заголовок'
      }
    }
  },
})
```

## Output data
If style is not set, then the tune data will not be serialized into JSON.
Also data returns in this format:
| Field | Type     | Description        |
| ----- | -------- | ------------------ |
| style | `string` | (`spoiler` or `info` or `warning`) Notice style |
| caption | `string` | Notice caption |

```json
{
  // Block data
  "tunes": {
    "noticeTune": {
      "style": "spoiler",
      "caption": "Hidden content"
    }
  }
}
```
