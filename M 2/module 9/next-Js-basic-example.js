// pages/index.js
// Basic Next.js page example

import Head from 'next/head';

export default function Home() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <Head>
        <title>My First Next.js App</title>
        <meta name="description" content="Basic Next.js example" />
      </Head>

      <h1>Welcome to Next.js 🚀</h1>
      <p>This is a basic Next.js page.</p>

      <button onClick={() => alert('Hello from Next.js!')}>
        Click Me
      </button>
    </div>
  );
}
