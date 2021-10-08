### useState ve input kullanarak yazdığımız kodu adım adım iyileştirmek

  - 1. 
```js
import { useState } from "react";

function App() {
  const [name, setName] = useState("");

  return (
    <div>
      Please enter a name: <br />
      <input value={name} onChange={(event) => setName(event.target.value)} />
      <br />
      {name}
 </div>
  );
}

export default App;
```
