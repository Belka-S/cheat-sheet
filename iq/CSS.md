# CSS

1. ### What is CSS?

   CSS stands for Cascading Style Sheets. CSS is used to define styles for web pages, including
   design, layout and variations in display for different devices and screen sizes.

2. ### What are the possible ways to apply CSS styles to a web page?

   There are 3 ways to apply CSS styles to a web page. They are:

   1. Inline CSS
   2. Internal CSS
   3. External CSS

3. ### What are some new features in CSS3?

   Some new features of CSS3 are:

   1. New selectors.
   2. Pseudo-classes
   3. Rounded Corners (Border-radius)
   4. Text shadow
   5. Gradient

4. ### What are the css selectors?

   CSS selector is a part of css rule which is used to apply styles to a specific target HTML
   element or group of elements.

5. ### What is universal selector in css?

   The universal selector is a css selector that can be used to apply styles to all elements on a
   page or to reset styles for all elements to their default values.

6. ### Explain the difference between classes and IDs in CSS.

   Classes are used to group together elements with similar styles, while IDs are used to target
   specific elements on a page. IDs must be unique, while classes can be used multiple times on a
   page.

7. ### Explain box model in CSS.

   The box model in CSS is a way of representing elements as boxes with content, paddings, borders,
   and margins. The content area is the actual content of the element, the padding is the space
   between the content and the border, the border is a line around the element, and the margin is
   the space between the border and the surrounding elements.

8. ### What is the difference between margin and padding in CSS?

   Margin is the space between the border of an element and the surrounding elements, while padding
   is the space between the content of an element and its border.

9. ### Explain the CSS display property and its values.

   The CSS display property controls how an element is displayed on a page. The possible values are
   block, inline, inline-block, none, and others.

10. ### What is the CSS position property and its values?

    The CSS position property controls how an element is positioned on a page. The possible values
    are static, relative, absolute, fixed, and sticky.

11. ### What is the difference between absolute and relative positioning in CSS?

    Relative positioning moves an element relative to its current position without affecting the
    position of other elements, while absolute positioning positions an element relative to its
    closest parent element, potentially affecting the position of other elements.

12. ### Explain the CSS float property and its values.

    The CSS float property controls the alignment of an element in a page layout. The possible
    values include left, right, none, and inherit. When an element is floated left or right, other
    elements will flow around it.

13. ### What is the CSS clear property?

    The CSS clear property controls whether an element is allowed to float next to another element
    or not. The possible values include left, right, both, and none. When an element is cleared, it
    will be moved below any floated elements.

14. ### What is the CSS z-index property?

    The CSS z-index property controls the stacking order of elements on a page. Elements with a
    higher z-index value are displayed on top of elements with a lower z-index value. The default
    value of z-index is auto.

15. ### What are CSS pseudo-classes? Give some examples.

    CSS pseudo-classes are selectors that target elements based on their state or position in the
    document. Some examples include :hover, :active, :focus, :first-child, :last-child,
    :nth-child...

16. ### What is CSS animation?

    CSS animation is a way to add movement and dynamism to the HTML element on a web pages using
    CSS. It is used to enhance users experience.

17. ### How do you define CSS animation?

    We can define CSS animation by creating a set of keyframes that specifies the start and end
    states of the animation. We can apply the animation to an element using the animation property
    in CSS.

18. ### How do you trigger CSS animation to start and stop?

    You can trigger CSS animation to start and stop using various CSS selectors and events. For
    example, you can use the :hover pseudo-class to start an animation when a user hovers over an
    element.

19. ### How do you create responsive CSS animation?

    We can create responsive CSS animation by using relative units like percentages instead of fixed
    units like pixels. We can also use media queries to adjust the animation properties based on the
    size of the viewport.

20. ### How do you optimize CSS animations for performance?

    We can optimize CSS animation for performance by using techniques like reducing the number of
    elements being animated, minimizing the use of box-shadow and text-shadow, and using transform
    and opacity instead of top, left, bottom, and right.

21. ### How do you debug CSS animations and troubleshoot common issues, such as animations not playing or playing too quickly?

    We can debug CSS animations by checking for typos or syntax errors, checking browser's
    compatibility if it supports the property or not, checking for code that may override the
    animation.

22. ### What is transition in CSS?

    A transition in CSS is a way to create animation effects when a property of an HTML element
    changes, allowing developers to smoothly animate changes to an element's style over a specified
    duration.

23. ### Can you specify multiple CSS transitions for an element?

    Yes, you can specify multiple CSS transitions for an element by separating them with commas in
    the "transition" property.

24. ### What are gradients in CSS?

    It is a property of CSS which allows you to display a smooth transformation between two or more
    than two specified colors. There are two types of gradients in CSS. They are: Linear gradient
    and radial gradient.

25. ### What is the difference between linear and radial gradient in CSS?

    A linear gradient creates a smooth transition between two or more colors in a straight line
    while the radial gradient creates a smooth transition between two or more colors in a circular
    shape.

26. ### What is flexbox?

    Flexbox is a CSS3 layout module which provides more flexible and efficient way to arrange and
    align the elements within the container.

27. ### Difference between flex-grow and flex-shrink properties in Flexbox?

    `flex-grow` is a property in Flexbox that specifies how much a flex item should grow relative to
    the other items in the container, while `flex-shrink` specifies how much a flex item should
    shrink relative to the other items when there is not enough space available in the container.

28. ### Difference between flex-wrap: nowrap and overflow: hidden in CSS?

    `flex-wrap: nowrap` prevents flex items from wrapping to the next line when they overflow the
    container, while `overflow: hidden` hides any content that overflows the container's boundaries.

29. ### What is the `gap` property in Flexbox, and how is it used to add spacing between flex items?

    The `gap` property in Flexbox sets the spacing between flex items, both horizontally and
    vertically. It is a shorthand for `row-gap` and `column-gap`.

30. ### How do you center an element using flexbox?

    To center an element using flexbox, we need to set the parent container's display property to
    `flex` and use the `justify-content` & `align-items` properties with the value of `center`.

31. ### What is CSS grid?

    CSS grid is a layout system in CSS that allows you to create complex, multi-dimensional grid
    layouts for web pages.

32. ### How do you use the grid-template-columns and grid-template-rows properties?

    We can use the grid-template-columns and grid-template-rows properties to define the size and
    number of columns and rows in a grid. For example, you might define a grid with three columns,
    where the first column is 100 pixels wide, the second column is 50% of the available width, and
    the third column takes up the remaining space, with the following CSS:

    ```
    grid-template-columns: 100px 50% 1fr;
    ```

33. ### How do you specify the number of columns in a grid using CSS?

    You can specify the number of columns by using the `grid-template-columns` property. For
    example, `grid-template-columns: repeat(3, 1fr)` will create a grid with three columns that are
    each one fraction of the available space.

34. ### How do you align items within a grid using CSS?

    You can align items within a grid using the `justify-items` and `align-items` properties.
    `justify-items` aligns items horizontally within a grid, while `align-items` aligns items
    vertically.

35. ### What is the difference between grid-row and grid-column in CSS Grid?

    `grid-row` is used to position an item within a row, while `grid-column` is used to position an
    item within a column. Both properties can take a value of either a number or a named grid line.

36. ### What is a CSS transition?

    A CSS transition is a way to add a gradual animation effect to an element when its CSS
    properties change.

37. ### transition-property property in CSS transitions?

    The `transition-property` property specifies which CSS property or properties should be
    transitioned when a change occurs.

38. ### transition-timing-function property in CSS transitions?

    The `transition-timing-function` property specifies the rate of change of the transition over
    time. This can be used to control the speed of the transition and how it accelerates and
    decelerates. Example: `ease-in`, `ease`, `ease-out`.

39. ### How do you delay the start of a CSS transition?

    You can delay the start of a CSS transition using the transition-delay property. This property
    specifies the amount of time to wait before starting the transition, in seconds or milliseconds.
    Example: `transition-delay: 1s;`

40. ### How do you apply a transition to multiple properties at once?

    You can apply a transition to multiple properties at once by separating the property names with
    commas in the `transition-property` property. example,
    `transition-property: background-color, color, opacity;`

41. ### What are CSS 2D Transforms?

    CSS 2D Transforms are a set of properties that allows you to transform the position, rotation,
    scaling, and skewing of an element in two dimensions, without affecting the surrounding
    elements.

42. ### Can you use negative values with CSS 2D transforms?

    Yes, we can use negative values with CSS 2D transforms. The effect of negative values depends on
    the function being used. For example, a negative value for the `rotate()` function will rotate
    the element counterclockwise instead of clockwise.

43. ### What are the properties of CSS 2D transform?

    The properties of CSS 2D transform are:

    1. transform: specifies the transformation functions to be applied to an element
    2. transform-origin: specifies the point around which the transformation should occur
    3. translate: moves an element along the x-axis and/or y-axis
    4. rotate: rotates an element clockwise or counterclockwise around a given point
    5. scale: increases or decreases the size of an element
    6. skew: skews an element along the x-axis and/or y-axis

44. ### Can you apply multiple transformations to the same element using CSS 2D transforms?

    Yes, we can apply multiple transformations to the same element using CSS 2D transforms. We can
    do this by separating each transformation function with a space in the `transform` property.

45. ### translate() and rotate() functions?

    The `translate()` function is used to move an element along the x-axis and/or y-axis, while the
    `rotate()` function is used to rotate an element clockwise or counterclockwise around a given
    point.

46. ### What are the properties of CSS 3D transform?

    The properties of CSS 3D Transforms are:

    1. transform-style: determines whether an element's children are transformed in 3D space
    2. perspective: determines the distance between the viewer and the element, affecting the
       appearance of 3D transforms
    3. perspective-origin: specifies the origin point of the perspective
    4. transform: applies a 3D transformation to an element, such as rotateX(), rotateY(),
       rotateZ(), translateX(), translateY(),translateZ(), scale(), and skew()
    5. transform-origin: specifies the origin point of the transformation
    6. backface-visibility: determines whether or not the back face of an element should be visible
       when the element is rotated.

47. ### What is the difference between RGB and RGBA colors?

    RGBA is similar to RGB, but it includes an additional alpha value that represents the opacity of
    the color. The alpha value is a number between 0 and 1, with 0 being completely transparent and
    1 being completely opaque.

48. ### What is color contrast?

    Color contrast is how much the colors of the text and the background of a website stand out from
    each other.

49. ### How does color contrast applies to accessibility in web design?

    It is important because people with visual impairments or color blindness may have trouble
    seeing things if there is not enough contrast. There are guidelines for making sure there is
    enough contrast which makes the website content more accessible to the people.

50. ### What is css filter?

    CSS filters are a set of visual effects that can be applied to HTML elements using CSS. Filters
    can be used to adjust the appearance of an element in various ways, such as changing its color,
    blurring or sharpening it, adjusting its brightness or contrast, and more.

51. ### What are some important considerations when using text effects?

    Important considerations include making sure the text remains readable and legible, ensuring the
    effect is appropriate for the overall design, and avoiding overuse of effects.

52. ### What is a CSS sprite?

    A CSS sprite is a technique used to combine multiple images into a single image file, reducing
    the number of HTTP requests required to load the page and improving loading times.

53. ### What is the :not() pseudo-class used for in CSS?

    The :not() pseudo-class is used to select all elements that do not match the specified selector.

54. ### How do you target all even or odd elements using a pseudo-selector in CSS?

    The :nth-child() pseudo-selector can be used with the "even" or "odd" keyword to target all even
    or odd elements of a parent element.

55. ### What is the :visited pseudo-class used for in CSS?

    The :visited pseudo-class is used to target a link that has been visited by the user.

56. ### How do you target the first letter of a text element using a pseudo-selector in CSS?

    The ::first-letter pseudo-element is used to target the first letter of a text element.

57. ### What is the :active pseudo-class used for in CSS?

    The :active pseudo-class is used to target an element when it is in an active state, such as
    when a user clicks on it.

58. ### What is the :lang() pseudo-class used for in CSS?

    The lang() pseudo-class is used to target elements based on the language attribute of the HTML
    document. For example, you can use :lang(en) to target all elements in English, or :lang(fr) to
    target all elements in French.

59. ### What is the :checked pseudo-class used for in CSS?

    The :checked pseudo-class is used to target form elements that have been selected by the user,
    such as checkboxes or radio buttons. This can be used to change the appearance or behavior of
    the selected element.

60. ### What is the @media rule in CSS?

    The @media rule in CSS allows developers to apply styles to a web page based on the size of the
    device or screen being used to view it, making it more responsive.

61. ### What is the difference between fluid and fixed layouts in CSS?

    A fluid layout in CSS adjusts its width and height based on the size of the screen, while a
    fixed layout has a set width and height. Fluid layouts use percentages to set their dimensions,
    while fixed layouts use pixels.

62. ### How do you make images responsive in CSS?

    To make images responsive in CSS, we can use the max-width: 100% property, which will make the
    image scale down proportionally to fit the width of its container while maintaining its aspect
    ratio.

63. ### What is the difference between min-width and max-width in CSS media queries?

    In CSS media queries, min-width sets the minimum screen width at which a set of styles will be
    applied, while max-width sets the maximum screen width at which a set of styles will be applied.
    For example, if you use min-width: 768px, the styles will only be applied to screens that are
    768 pixels wide or larger, while if you use max-width: 768px, the styles will only be applied to
    screens that are 768 pixels wide or smaller.

64. ### What is the difference between responsive and adaptive design in CSS?

    Responsive design in CSS adapts to different screen sizes and devices by using flexible grids,
    fluid images, and media queries to adjust the layout and content of the website. Adaptive design
    in CSS, on the other hand, uses predefined layout sizes and breakpoints to adjust the layout and
    content based on the screen size and device being used.

65. ### How do you optimize responsive images for faster loading in CSS?

    To optimize responsive images for faster loading in CSS, you can use smaller file formats like
    JPEG and PNG, reduce the image size and resolution, and use lazy loading to only load images
    when they are needed.

66. ### How does calc() work in css?

    The CSS3 calc() function allows us to perform mathematical operations on property values.
    Example: `div{width: calc(100px + 50px)}`

67. ### What is the overflow property in CSS used for?

    The overflow property specifies what should happen if the content overflows an element’s box.
    It's possible values are: auto, none, scroll, visible.

68. ### What is the difference between `visibility:hidden` and `display:none`?

    `visibility:hidden` means the tag is not visible, but the space is allocated for it on the page.
    `display:none` means the tag will not appear at all and there will be no space allocated for it
    between the other tags.

69. ### Are quotes mandatory in URL’s?

    Quotes are optional in URL’s, and it can be single or double.

70. ### Explain what are web-safe fonts and fallback fonts.

    Web-safe fonts are fonts that are commonly installed on most devices and web browsers. Fallback
    fonts are alternative fonts specified in case the primary font is not available on the user's
    device.

71. ### What is the purpose of CSS content property?

    The CSS content property is used to insert content before or after an HTML element using the
    ::before and ::after pseudo-elements.

72. ### How can we create custom cursor in CSS?

    To create a custom cursor in CSS, you can use the cursor property and set it to url with the
    path to the image file that you want to use as the cursor.

73. ### What is the line-height property in CSS?

    The "line-height" property in CSS is used to control the spacing between lines of the text
    within an element.

74. ### What is specificity in CSS?

    Specificity in CSS is a way of determining which CSS rule applies to an element. It is based on
    the number of selectors and their types in a CSS rule. Specificity is calculated using a
    formula: inline styles have the highest specificity, followed by IDs, classes, and then
    elements.

75. ### Which property is used to control the scrolling of an image in the background?

    The `background-attachment` property is used to control the scrolling of an image in the
    background.

76. ### Which CSS property is used to capitalize text or convert it to uppercase or lowercase?

    The text-transform property is used to capitalize it or convert text to uppercase or lowercase
    letters.

77. ### What is word-wrap property in CSS3?

    The word-wrap property allows long words to be able to be broken in order to prevent overflow
    and wrap onto the next line.

78. ### Describe rule set in CSS?

    It is an instruction that tells browser on how to render a specific element on the HTML page. It
    consists of a selector with a declaration block that follows.

79. ### How can you create a CSS-only dropdown menu?

    A CSS-only dropdown menu can be created by using the "hover" pseudo-class and the "display"
    property. When the user hovers over a parent element, the "display" property of the child
    element can be set to "block" or "inline-block" to reveal the dropdown menu.

80. ### What are the potential drawbacks of using CSS frameworks such as Bootstrap?

    Using CSS frameworks like Bootstrap can lead to bloated code, difficulties in customizing the
    design, and unoriginal or generic looks.

81. ### What is TailwindCSS?

    TailwindCSS is a utility-first CSS framework that provides pre-defined CSS classes that can be
    used to rapidly build custom user interfaces.

82. ### How do you customize TailwindCSS to match a specific design system or brand guidelines?

    TailwindCSS provides a configuration file that can be customized to match a specific design
    system or brand guidelines. This file includes variables for colors, fonts, spacing, and more,
    which can be adjusted to match the project's needs.

83. ### Can you explain the difference between utility classes and component classes in TailwindCSS?

    Utility classes in TailwindCSS are small, single-purpose classes that provide a specific styling
    utility, such as padding, margin, or text alignment. Component classes, on the other hand, are
    larger classes that provide a collection of styles for a specific component, such as a button or
    card.

84. ### How do you optimize the file size of TailwindCSS in a production environment?

    TailwindCSS provides a purge option that removes any unused classes from the final CSS file,
    reducing its size. This option should be enabled in a production environment to minimize the CSS
    file size.

85. ### What are some common performance issues with TailwindCSS and how to optimize performance?

    Common performance issues with TailwindCSS include the size of the CSS file and the number of
    classes being generated. To optimize performance, it is important to enable the purge option in
    a production environment, use a caching mechanism to speed up builds, and avoid generating
    unnecessary classes.

86. ### What is CSS preprocessor?

    A CSS preprocessor is a scripting language that extends the capabilities of CSS which makes it
    easier and more efficient to write CSS code.

87. ### What is the difference between a CSS preprocessor and a post-processor?

    A CSS preprocessor generates CSS code from source code written in a higher-level scripting
    language, whereas a post-processor takes existing CSS code and applies transformations or
    optimizations to it. In other words, a preprocessor is used during development, while a
    post-processor is used after development to optimize performance.

88. ### What is SASS?

    SASS is a CSS preprocessor that adds functionality to CSS, such as variables, nesting, and more.
    It allows us to write more efficient code and simplifies task like browser compatibility.

89. ### What is the difference between SASS and SCSS?

    SASS and SCSS are both CSS pre-processors and are very similar, but they have different syntax.
    SASS has a more concise and less verbose syntax, with no curly braces and no semicolon whereas
    SCSS has a syntax that is almost identical to standard CSS, with curly braces and semicolons

90. ### Can you describe a situation where you would choose not to use SASS?

    A developer might choose not to use SASS if they prefer to stick with standard CSS for
    simplicity or if they are working on a small project where the added features of SASS may not be
    necessary.

91. ### What is SASS nesting?

    SASS nesting is a feature that allows us to write CSS selectors that are nested within one
    another which makes our code easier to read and understand.

92. ### What are variables in SASS?

    Variables in SASS allow to assign values to a variable name, which can then be used throughout
    the stylesheet.

93. ### What are mixins in SASS?

    A mixin is the feature in SASS that allows to define a set of CSS styles that can be reused
    throughout the stylesheet. Example:

    ```
    @mixin my-text-style {
     font-size: 16px;
     font-weight: bold;
    }

    /* we can use the whole style like this now */

    h1 {
     @include my-text-style;
    }
    ```

94. ### What is SASS inheritance?

    Inheritance allows us to define a set of styles in one selector, called a "parent", and then
    extend those styles to another selector, called a "child". Example:

    ```
    @mixin button-style($bg-color, $text-color) {
        background-color: $bg-color;
        color: $text-color;
        display: inline-block;
        padding: 8px 16px;
    }

    // Use the mixin to create different button styles

    .button-primary {
        @include button-style(#007bff, #fff);
    }

    .button-secondary {
        @include button-style(#6c757d, #fff);
    }
    ```

95. ### How do you use 'if' statements in SCSS?

    In SCSS, you can use the @if directive to add conditional logic to your styles. Example:

    ```
    //declaring variable
    $background-color: #333;

    body {

    @if $background-color == #333 {
    background-color: $background-color;

    } @else {

    background-color: #fff;
        }
    }
    ```

96. ### What are some common mistakes that developers make when writing CSS?

    Common mistakes in CSS include over-reliance on frameworks, lack of organization, and using
    non-semantic HTML

97. ### How do you balance the need for visual aesthetics with application functionality?

    I balance the need for visual aesthetics with the need for functionality by designing with the
    user in mind, testing designs with real users, and incorporating feedback and data into the
    design process.

98. ### How do you ensure that your CSS is optimized for search engine optimization (SEO)?

    We can ensure CSS is optimized for SEO by minimizing code bloat to improve load time, use
    relevant class names, avoiding inline styles, etc.

99. ### How do you ensure that your CSS is scalable and maintainable for large projects?

    We can ensure that our CSS is scalable and maintainable for large project by:

    1. Using proper naming convection for ID and classes.
    2. Using preprocessor like SASS, less, etc.
    3. Using performance enhancing techniques like lazy-loading, etc.

100. ### How do you use CSS variables to create more flexible and dynamic designs, and what are some use cases where variables are particularly useful?
     CSS variables can improve maintainability and reduce repetition. Variables are particularly
     useful for theming, creating responsive designs, and making changes to global styles.
