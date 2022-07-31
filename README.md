# Notice with caption (Block Tune for Editor.js)
Tune for Editor.js adding color Notice with caption for any block.

Caption field will be shown only for the first block of one type.

![Preview image](https://github.com/VolgaIgor/editorjs-notice/raw/main/assets/preview.png)

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
You can change notice caption placeholder
| Field | Type     | Description        |
| ----- | -------- | ------------------ |
| captionPlaceholder | `string` | (default: `Notice caption`) Placeholder for Caption input |

Or you can add a localized string into notice caption placeholder
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
  // Block datas
  "tunes": {
    "noticeTune": {
      "style": "spoiler",
      "caption": "Hidden content"
    }
  }
}
```