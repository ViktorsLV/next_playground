// protecting the page with NextAuth

import { useState, useEffect } from "react";
import { getSession, signIn } from "next-auth/react";

function Protected() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    sessionCheck();
  }, []);

  // checking for session - if exists then allow user to continue, otherwise callback to SignIn
  const sessionCheck = async () => {
    const session = await getSession();
    if (!session) {
      signIn();
    } else {
      setLoading(false);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="m-4">
      <h1 className="font-bold text-xl">Protected page</h1>
    </div>
  
  )
}

export default Protected;
