"use client";

export default function Error({ error }) {
  return (
    <div id="error">
      <h1>An Error Occured!</h1>

      <p>{error.message}</p>
    </div>
  );
}
