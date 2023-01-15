import { useState } from 'react';

//==== type inference vs type annotation

interface Address {
  street: string;
  number: number;
  zip: string;
}

interface User {
  name: string;
  age: number;
  country: string;
  address: Address;
  admin: boolean;
}

export default function TypesForUseState() {
  const [user, setUser] = useState<User | null>(null);

  const fetchUser = () => {
    setUser({
      name: 'Mitchel',
      age: 23,
      country: 'the Netherlands',
      address: {
        street: 'Main st.',
        number: 88,
        zip: '21345',
      },
      admin: false,
    });
  };

  return (
    <>
      <div style={{ border: '1px solid black', display: 'flex', flexDirection: 'column' }}>
        TypesForUseState
        <button type="button" onClick={fetchUser}>
          Fetch user
        </button>
        {user && <p>{`Welcome ${user.name}`}</p>}
      </div>
    </>
  );
}
