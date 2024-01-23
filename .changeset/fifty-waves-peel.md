---
"@orbit-ui/transition-components": minor
---

- Fixed TextArea doesn't honor the rows property
- Fixed NumberInput component does not trigger onValueChange on Blur with null Value
- Fixed Conflict between HTML table border property and Styled System border property in Table component
- Fixed Switches don't handle the fluid props passed by the Form, resulting in forwarding fluid to a DOM element that doesn't accept the property
- Removed console.log that were accidentally released
