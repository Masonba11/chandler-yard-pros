import Link from "next/link";

export default function NotFound() {
  return (
    <div style={{ textAlign: "center", padding: "4rem 2rem" }}>
      <h1>404 - Page Not Found</h1>
      <p>The page you're looking for doesn't exist.</p>
      <Link
        href="/"
        className="btn"
        style={{ marginTop: "2rem", display: "inline-block" }}
      >
        Return Home
      </Link>
    </div>
  );
}
