# Day 13: Afternoon

## Bootstrap

https://getbootstrap.com

- A front-end library to make your website mobile-responsive
- Follows mobile-first philosophy
- Prebuilt components
- Grid system
- Extensive documentation
- **Note:** Don't just drop Bootstrap into your website. If you're planning to use Bootstrap, implement it early.

## Layout: Containers

- Basic layout element
- Responsive, fixed-width container

  ```html
  <div class="container">
    <!-- Content here -->
  </div>
  ```

- Fluid-width container
  ```html
  <div class="container-fluid">
    <!-- Content here -->
  </div>
  ```

## Layout: Responsive Breakpoints

- Uses media queries to create breakpoints for layout.
- Assign classes to define how elements of a page will behave according to viewport size

| Size | `min-width` | `max-width` | Example         |
| ---- | ----------- | ----------- | --------------- |
| `xs` | ---         | 575.98px    | portrait phone  |
| `sm` | 576px       | 767.98px    | landscape phone |
| `md` | 768px       | 991.98px    | tablet          |
| `lg` | 992px       | 1199.98px   | desktop         |
| `xl` | 1200px      | ---         | large desktop   |

## Layout: Grid System

- 12 column system
- Use rows and columns of content
- Containers > Rows > Columns
- Built with flexbox (not CSS Grid)
- Columns within a row will evenly distribute themselves unless you specify widths using `.col-x` classes
- Use breakpoint classes to assign column layout specific to viewport
- Easily mix breakpoint classes

## Reboot & Styling

- Reboot: Normalizes common HTML elements' styling across browsers
- Typography, headings, lists, paragraphs, etc. have a common style within Bootstrap
- Built-in classes that allow for quick styling

## Bootstrap Components

- Bootstrap has many components that you can add to your site
- Components section of documentation has clear explanations and sample code
- Utilize the documentation to add components to your liking

## Bootstrap Utilities

- Use Bootstrap classes to apply consistent styling across site
- Some examples:
  - Colors: Common keywords with pre-defined colors
  - Borders: Classes to add/subtract borders
  - Sizing: Apply width and height to elements

## Exercise

- Create a basic webpage utilizing Bootstrap
- Make it well organized
- Avoid adding your own JavaScript or CSS files
- **Hint**: Use the Starter template found within the introduction to Bootstrap for a quick start!

## Resources

- [Bootstrap Documentation](https://getbootstrap.com/docs/4.3/getting-started/introduction/)
- [Bootstrap Approach](https://getbootstrap.com/docs/4.3/extend/approach/): A write-up of the philosophy behind Bootstrap

## jQuery

- JavaScript library that simplifies programming
- Event Handling: easier code to handle user actions
- DOM: built-in methods to manipulate the DOM
- Animations: create dynamic effects with jQuery's animation methods
- Many frameworks are built with jQuery (e.g. Bootstrap)

## CDN

- Content Delivery Network: files hosted on a distributed network of servers
- Clients only need one copy of the files.
- jQuery CDN version: client only needs to load it once for all sites using a particular version and you don't need to host it yourself

## Using jQuery

- [jQuery CDN](https://code.jquery.com/)
- Add the uncompressed copy of the latest version of jQuery to your site by placing it within the `<head>` element.
- Use a `<script>` tag at the bottom of your HTML to link to an external script file.
- Add content to your site and practice manipulating it with jQuery.
- Refer to [How jQuery Works](https://learn.jquery.com/about-jquery/how-jquery-works/) if you need help getting started.
