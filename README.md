# stylelint-config-scss

> A shareable stylelint config for SCSS used at Radical

## Installation

```bash
yarn add @radicalwebdesign/stylelint-config-scss --dev
```

## Usage

If you've installed `@radicalwebdesign/stylelint-config-scss` locally within your project, just set your `stylelint` config to:

```json
{
  "extends": "@radicalwebdesign/stylelint-config-scss"
}
```

### Extending the config

Simply add a `"rules"` key to your config, then add your overrides and additions there.

For example, to add the `unit-whitelist` rule:

```json
{
  "extends": "@radicalwebdesign/stylelint-config-scss",
  "rules": {
    "unit-whitelist": ["em", "rem", "s"]
  }
}
```

## License

Licensed under the [MIT license](http://opensource.org/licenses/MIT).