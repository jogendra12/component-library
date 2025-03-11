# Custom Gutenberg Controls Library

A custom design controls library for WordPress Gutenberg that extends the default `@wordpress/components` with a unique design system. This package provides styled versions of common Gutenberg controls to maintain a consistent UI across your block plugins.

## Features

- ✅ Customized versions of popular Gutenberg controls
- ✅ Consistent styling based on a unified design system
- ✅ Easy integration with existing Gutenberg blocks
- ✅ Fully compatible with WordPress core components

## Installation

You can install this package via npm:

```sh
npm install @your-namespace/component-library
```

## Usage

Import and use the components in your Gutenberg blocks:

```js
import { ToggleGroupControl, SelectControl } from "@your-namespace/component-library";

const MyBlock = () => {
  return (
    <div>
      <ToggleGroupControl
        label="Choose an option"
        options={[
          { label: "Option 1", value: "one" },
          { label: "Option 2", value: "two" },
        ]}
      />
    </div>
  );
};

export default MyBlock;
```

## Contributing

We welcome contributions! If you'd like to improve this library:

1. Fork this repository
2. Create a feature branch (`git checkout -b feature-name`)
3. Commit your changes (`git commit -m "Add feature"`)
4. Push to the branch (`git push origin feature-name`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
