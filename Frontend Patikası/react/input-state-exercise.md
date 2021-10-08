### useState ve input kullanarak yazdığımız kodu adım adım iyileştirmek

  - input a girilen değeri aşağı yazıyor 
```js
import { useState } from "react"; // useState i kullanmak için bunu import etmek zorundayız

function App() {
  const [name, setName] = useState(""); //input un başlangıç değeri boş

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

  - Fonksiyonu yukarıda da oluşturabiliriz
```js
  const [name, setName] = useState("");
  const onChangeName = (event) => setName(event.target.value);

  return (
    <div>
      Please enter a name: <br />
      <input value={name} onChange={onChangeName} />
      <br />
      {name}
    </div>
  );
```

  - İki input kullanmak
```js
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const onChangeName = (event) => setName(event.target.value);
  const onChangeSurname = (event) => setSurname(event.target.value);

  return (
    <div>
      Please enter a name: <br />
      <input value={name} onChange={onChangeName} /> <br />
      <input value={surname} onChange={onChangeSurname} />
      <br />
      {name} {surname}
    </div>
  );
```

  - Birden fazla inputu otomatik olarak kontrol etmek
```js
  const [form, setForm] = useState({ name: "", surname: "" });

  const onChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div>
      Please enter a name: <br />
      <input name="name" value={form.name} onChange={onChangeInput} /> <br />
      <input
        name="surname"
        value={form.surname}
        onChange={onChangeInput}
      /> <br />
      {form.name} {form.surname}
    </div>
  );
```
