import { useState } from "react";
import { Button } from "./App";

function FormAddFriend({ onAddFriend }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");

  function handleSubmit(e) {
    e.preventDefault();

    if (!name || !image) return;

    const id = crypto.randomUUID();
    const newFriend = {
      id,
      name,
      image: `${image}?=${id}`,
      balance: 0,
    };
    setName("");
    setImage("https://i.pravatar.cc/48");

    onAddFriend(newFriend);
  }

  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label>👩🏻‍🤝‍👩🏻Friend name</label>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        type="text"
        placeholder="Add a new friend"
      />
      <label>🎁Image URL</label>
      <input
        value={image}
        onChange={(e) => setImage(e.target.value)}
        type="text"
        placeholder="Add a new friend"
      />
      <Button>Add</Button>
    </form>
  );
}
export default FormAddFriend;
