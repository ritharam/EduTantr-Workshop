import React, { useEffect } from "react";
import "./SignInSidebar.css";

export default function SignInSidebar({ show, onClose }) {
  useEffect(() => {
    const handleEsc = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  return (
    <>
      <div
        className={`signin-sidebar-overlay ${show ? "open" : ""}`}
        onClick={onClose}
      ></div>
      <div className={`signin-sidebar ${show ? "open" : ""}`}>
        <div className="p-4 h-100 d-flex flex-column justify-content-between">
          <div>
            <h3 className="fw-bold text-danger mb-3">Welcome Back!</h3>
            <p className="text-muted mb-4">
              Sign in to unlock exclusive offers & lightning-fast delivery.
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Signed in successfully!");
                onClose();
              }}
            >
              <div className="mb-3">
                <label className="form-label small">Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="you@example.com"
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label small">Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="••••••"
                  required
                />
              </div>
              <button type="submit" className="btn btn-danger w-100 mb-3">
                Continue
              </button>
            </form>
          </div>

          <div className="mt-4 text-center text-muted small">
            By signing in, you agree to our Terms & Privacy
          </div>
        </div>
      </div>
    </>
  );
}
