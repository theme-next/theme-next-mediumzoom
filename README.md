# Hexo NexT Tag

![Theme Version](https://img.shields.io/badge/NexT-v7.3.0+-blue.svg?style=flat-square)
![Package Version](https://img.shields.io/github/package-json/v/theme-next/hexo-tag-plugin?style=flat-square)

Tag plugins for NexT.

## Install

```bash
npm install theme-next/hexo-next-tag
```

## Usage

### Include Raw

This tag include any raw content into your posts. Path is relative to your site source directory.

#### Example

Let's create `include-raw.html` file in `_data` directory under site root directory with following content:

```html
Any <strong>raw content</strong> may be included with this tag.
```

Then in any post we can use this content with `include_raw` tag:

```md
{% include_raw '_data/path/to/include-raw.html' %}
```

### Link Grid

#### Example

```md
{% linkgrid %}
网站1名称 | http://yoursite.com | 网站1描述 | http://yoursite.com/favicon.jpg
网站2名称 | http://example.com | 网站2描述 | http://example.com/favicon.jpg
{% endlinkgrid %}
```
