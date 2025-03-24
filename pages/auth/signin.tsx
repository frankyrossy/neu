import { signIn } from 'next-auth/client';
import { useState } from 'react';

export default function SignIn() {
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const res = await signIn('credentials', {
      redirect: false,
      username: event.target.username.value,
      password: event.target.password.value,
    });

    if (res.error) {
      setError(res.error);
    } else {
      // ...existing code...
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* ...existing code... */}
        {error && <p>{error}</p>}
        {/* ...existing code... */}
      </form>
    </div>
  );
}
