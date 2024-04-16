---
"@orbit-ui/transition-components": major
---

- Alert is now dismissable by default. This is potentially a breaking change if you we're not expecting the alert to be closable. To fix this, either add `dismissable={false}` to the Alert, or handle the `onClose` event handler.

- Dialog small size has been slightly reduced by 84px.
