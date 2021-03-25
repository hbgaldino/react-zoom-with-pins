## PinchZoomWithPins

Hello, this is a component to help developers use a ZOOM with pins, like a google maps, but inside a image.

To use:

import PinchZoomWithPins from "react-zoom-with-pins"

```html
<div style={{ width: "500px", height: "500px", border: "1px dotted #000000" }}>
  <PinchZoomWithPins PinStyle={CustomPin} pins={pins} callback={callback}>
    <img alt="planta baixa" src="image"></img>
  </PinchZoomWithPins>
</div>
```


For more examples, follow the instructions on https://github.com/hbgaldino/react-zoom-with-pins