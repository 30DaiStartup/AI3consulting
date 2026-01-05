"use client";

import { useState } from "react";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  companyName: string;
  preferredCohort: string;
}

const initialFormData: FormData = {
  firstName: "",
  lastName: "",
  email: "",
  companyName: "",
  preferredCohort: "",
};

const cohortOptions = [
  { value: "", label: "No preference" },
  { value: "feb-2026", label: "February 2026" },
  { value: "apr-2026", label: "April 2026" },
  { value: "jun-2026", label: "June 2026" },
];

export default function WaitlistForm() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [waitlistPosition, setWaitlistPosition] = useState<number | null>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};

    if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Please enter a valid email";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      // Simulate API call - in production this would call an actual endpoint
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Generate a random position for demo
      const position = Math.floor(Math.random() * 20) + 5;
      setWaitlistPosition(position);
      setIsSuccess(true);
    } catch {
      setErrors({ email: "Something went wrong. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="text-center py-8">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg
            className="w-8 h-8 text-green-600"
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
        <h3 className="text-2xl font-bold mb-2">You&apos;re on the List!</h3>
        <p className="text-[var(--text-secondary)] mb-4">
          Thanks for joining, {formData.firstName}!
        </p>
        {waitlistPosition && (
          <div className="inline-block bg-[var(--teal)]/10 text-[var(--teal)] px-6 py-3 rounded-full mb-6">
            <span className="font-bold">Position #{waitlistPosition}</span> on the
            waitlist
          </div>
        )}
        <p className="text-sm text-[var(--text-muted)]">
          We&apos;ll email you at <strong>{formData.email}</strong> when a seat becomes
          available or when we announce new cohort dates.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Name Fields */}
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="firstName"
            className="block text-sm font-semibold text-[var(--text-primary)] mb-2"
          >
            First Name *
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            className={`w-full px-4 py-3 rounded-lg border ${
              errors.firstName
                ? "border-red-500 focus:ring-red-500"
                : "border-gray-300 focus:ring-[var(--teal)]"
            } focus:outline-none focus:ring-2`}
            placeholder="Jane"
          />
          {errors.firstName && (
            <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
          )}
        </div>
        <div>
          <label
            htmlFor="lastName"
            className="block text-sm font-semibold text-[var(--text-primary)] mb-2"
          >
            Last Name *
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            className={`w-full px-4 py-3 rounded-lg border ${
              errors.lastName
                ? "border-red-500 focus:ring-red-500"
                : "border-gray-300 focus:ring-[var(--teal)]"
            } focus:outline-none focus:ring-2`}
            placeholder="Smith"
          />
          {errors.lastName && (
            <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
          )}
        </div>
      </div>

      {/* Email */}
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-semibold text-[var(--text-primary)] mb-2"
        >
          Email Address *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          className={`w-full px-4 py-3 rounded-lg border ${
            errors.email
              ? "border-red-500 focus:ring-red-500"
              : "border-gray-300 focus:ring-[var(--teal)]"
          } focus:outline-none focus:ring-2`}
          placeholder="jane@company.com"
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email}</p>
        )}
      </div>

      {/* Company */}
      <div>
        <label
          htmlFor="companyName"
          className="block text-sm font-semibold text-[var(--text-primary)] mb-2"
        >
          Company Name
        </label>
        <input
          type="text"
          id="companyName"
          name="companyName"
          value={formData.companyName}
          onChange={handleInputChange}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--teal)]"
          placeholder="Acme Inc."
        />
      </div>

      {/* Preferred Cohort */}
      <div>
        <label
          htmlFor="preferredCohort"
          className="block text-sm font-semibold text-[var(--text-primary)] mb-2"
        >
          Preferred Cohort
        </label>
        <select
          id="preferredCohort"
          name="preferredCohort"
          value={formData.preferredCohort}
          onChange={handleInputChange}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--teal)] bg-white"
        >
          {cohortOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full btn bg-[var(--teal)] text-white hover:bg-[var(--teal)]/90 text-lg py-4"
      >
        {isSubmitting ? "Joining..." : "Join the Waitlist"}
      </button>

      <p className="text-sm text-center text-[var(--text-muted)]">
        We&apos;ll notify you when seats become available. No spam, ever.
      </p>
    </form>
  );
}
