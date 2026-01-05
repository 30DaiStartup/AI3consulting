"use client";

import { useState } from "react";
import Link from "next/link";
import { STRIPE_CONFIGURED, BOOTCAMP_PRICE_DISPLAY } from "@/lib/stripe";

const painPointOptions = [
  "Manual data entry and spreadsheet management",
  "Time-consuming report generation",
  "Repetitive customer communication",
  "Inconsistent process documentation",
  "Scattered information across tools",
  "Slow decision-making from lack of data",
];

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  companyName: string;
  jobTitle: string;
  painPoints: string[];
  customPainPoint: string;
}

const initialFormData: FormData = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  companyName: "",
  jobTitle: "",
  painPoints: [],
  customPainPoint: "",
};

interface RegistrationFormProps {
  onSubmit?: (data: FormData) => void;
}

export default function RegistrationForm({ onSubmit }: RegistrationFormProps) {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPaymentNotice, setShowPaymentNotice] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handlePainPointToggle = (painPoint: string) => {
    setFormData((prev) => ({
      ...prev,
      painPoints: prev.painPoints.includes(painPoint)
        ? prev.painPoints.filter((p) => p !== painPoint)
        : prev.painPoints.length < 3
        ? [...prev.painPoints, painPoint]
        : prev.painPoints,
    }));
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};

    if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Please enter a valid email";
    if (!formData.companyName.trim()) newErrors.companyName = "Company name is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    if (!STRIPE_CONFIGURED) {
      setShowPaymentNotice(true);
      return;
    }

    setIsSubmitting(true);

    try {
      // TODO: Call Stripe checkout API
      onSubmit?.(formData);
    } catch {
      setErrors({ email: "Something went wrong. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
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

      {/* Phone */}
      <div>
        <label
          htmlFor="phone"
          className="block text-sm font-semibold text-[var(--text-primary)] mb-2"
        >
          Phone Number
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--teal)]"
          placeholder="(555) 123-4567"
        />
      </div>

      {/* Company & Job Title */}
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="companyName"
            className="block text-sm font-semibold text-[var(--text-primary)] mb-2"
          >
            Company Name *
          </label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            value={formData.companyName}
            onChange={handleInputChange}
            className={`w-full px-4 py-3 rounded-lg border ${
              errors.companyName
                ? "border-red-500 focus:ring-red-500"
                : "border-gray-300 focus:ring-[var(--teal)]"
            } focus:outline-none focus:ring-2`}
            placeholder="Acme Inc."
          />
          {errors.companyName && (
            <p className="text-red-500 text-sm mt-1">{errors.companyName}</p>
          )}
        </div>
        <div>
          <label
            htmlFor="jobTitle"
            className="block text-sm font-semibold text-[var(--text-primary)] mb-2"
          >
            Job Title
          </label>
          <input
            type="text"
            id="jobTitle"
            name="jobTitle"
            value={formData.jobTitle}
            onChange={handleInputChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--teal)]"
            placeholder="Operations Manager"
          />
        </div>
      </div>

      {/* Pain Points */}
      <div>
        <label className="block text-sm font-semibold text-[var(--text-primary)] mb-2">
          What are your top pain points? (Select up to 3)
        </label>
        <div className="grid md:grid-cols-2 gap-3">
          {painPointOptions.map((option) => (
            <label
              key={option}
              className={`flex items-start gap-3 p-3 rounded-lg border cursor-pointer transition-colors ${
                formData.painPoints.includes(option)
                  ? "border-[var(--teal)] bg-[var(--teal)]/5"
                  : "border-gray-200 hover:border-gray-300"
              }`}
            >
              <input
                type="checkbox"
                checked={formData.painPoints.includes(option)}
                onChange={() => handlePainPointToggle(option)}
                className="mt-0.5 accent-[var(--teal)]"
              />
              <span className="text-sm text-[var(--text-secondary)]">{option}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Custom Pain Point */}
      <div>
        <label
          htmlFor="customPainPoint"
          className="block text-sm font-semibold text-[var(--text-primary)] mb-2"
        >
          Other challenges you&apos;d like to solve (optional)
        </label>
        <textarea
          id="customPainPoint"
          name="customPainPoint"
          value={formData.customPainPoint}
          onChange={handleInputChange}
          rows={3}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--teal)]"
          placeholder="Tell us about specific processes you'd like to automate..."
        />
      </div>

      {/* Payment Notice (when Stripe not configured) */}
      {showPaymentNotice && (
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
          <p className="text-amber-800 text-sm">
            <strong>Payment processing coming soon!</strong> In the meantime,
            please{" "}
            <Link href="/waitlist" className="underline font-semibold">
              join our waitlist
            </Link>{" "}
            to secure your spot, or{" "}
            <Link href="/contact" className="underline font-semibold">
              contact us
            </Link>{" "}
            to arrange payment directly.
          </p>
        </div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full btn text-lg py-4 ${
          STRIPE_CONFIGURED
            ? "bg-[var(--soft-gold)] text-[var(--navy)] hover:bg-[var(--gold-hover)]"
            : "bg-gray-400 text-gray-700 cursor-not-allowed"
        }`}
      >
        {isSubmitting ? (
          "Processing..."
        ) : STRIPE_CONFIGURED ? (
          `Proceed to Payment — ${BOOTCAMP_PRICE_DISPLAY}`
        ) : (
          <>
            Payment Coming Soon — {BOOTCAMP_PRICE_DISPLAY}
          </>
        )}
      </button>

      {/* Alternative Actions */}
      {!STRIPE_CONFIGURED && (
        <div className="text-center">
          <p className="text-sm text-[var(--text-muted)] mb-3">
            Want to secure your spot now?
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/waitlist"
              className="btn bg-[var(--teal)] text-white hover:bg-[var(--teal)]/90"
            >
              Join the Waitlist
            </Link>
            <Link
              href="/contact"
              className="btn bg-transparent text-[var(--navy)] border border-[var(--navy)]/20 hover:bg-gray-50"
            >
              Contact Us to Register
            </Link>
          </div>
        </div>
      )}

      {/* Trust Elements */}
      <div className="flex flex-wrap justify-center gap-6 pt-4 text-sm text-[var(--text-muted)]">
        <div className="flex items-center gap-2">
          <svg
            className="w-5 h-5 text-green-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
            />
          </svg>
          <span>Secure payment</span>
        </div>
        <div className="flex items-center gap-2">
          <svg
            className="w-5 h-5 text-green-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>14-day refund policy</span>
        </div>
        <div className="flex items-center gap-2">
          <svg
            className="w-5 h-5 text-green-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          <span>Limited to 12 seats</span>
        </div>
      </div>
    </form>
  );
}
