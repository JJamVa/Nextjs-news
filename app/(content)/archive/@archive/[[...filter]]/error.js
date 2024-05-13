"use client";

export default function FilterError({ error }) {
  return (
    <div id="error">
      <h2>에러 발생!</h2>
      <p>{error.message}</p>
    </div>
  );
}
