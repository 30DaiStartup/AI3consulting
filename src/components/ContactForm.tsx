"use client";

import { useState } from "react";

interface FormData {
  name: string;
  email: string;
  company: string;
  employees: string;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    employees: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    // Simulate form submission
    // In production, you would integrate with a backend service like Resend, SendGrid, etc.
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setIsSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="p-8 bg-[var(--teal)]/10 rounded-lg text-center">
        <div className="w-16 h-16 bg-[var(--teal)] rounded-full flex items-center justify-center mx-auto mb-4">
          <svg
            className="w-8 h-8 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="text-2xl mb-2">Thank You!</h3>
        <p className="text-[var(--text-secondary)]">
          We've received your message and will be in touch within 24 business hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-2">
          Full Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-[var(--light-gray)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--teal)] focus:border-transparent transition-all"
          placeholder="John Smith"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-2">
          Email Address <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-[var(--light-gray)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--teal)] focus:border-transparent transition-all"
          placeholder="john@company.com"
        />
      </div>

      <div>
        <label htmlFor="company" className="block text-sm font-medium mb-2">
          Company Name
        </label>
        <input
          type="text"
          id="company"
          name="company"
          value={formData.company}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-[var(--light-gray)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--teal)] focus:border-transparent transition-all"
          placeholder="Acme Inc."
        />
      </div>

      <div>
        <label htmlFor="employees" className="block text-sm font-medium mb-2">
          Company Size
        </label>
        <select
          id="employees"
          name="employees"
          value={formData.employees}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-[var(--light-gray)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--teal)] focus:border-transparent transition-all bg-white"
        >
          <option value="">Select an option</option>
          <option value="1-10">1-10 employees</option>
          <option value="11-50">11-50 employees</option>
          <option value="51-200">51-200 employees</option>
          <option value="201-500">201-500 employees</option>
          <option value="500+">500+ employees</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2">
          Tell us about your challenges <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-[var(--light-gray)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--teal)] focus:border-transparent transition-all resize-none"
          placeholder="What operational challenges are you looking to solve? What tedious tasks would you like to automate?"
        />
      </div>

      {error && (
        <div className="p-4 bg-red-50 text-red-600 rounded-lg text-sm">
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full btn btn-primary py-4 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <span className="flex items-center justify-center gap-2">
            <svg
              className="animate-spin h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            Sending...
          </span>
        ) : (
          "Schedule Consultation"
        )}
      </button>

      <p className="text-sm text-[var(--text-muted)] text-center">
        By submitting this form, you agree to our privacy policy.
      </p>
    </form>
  );
}
