import React, { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { supabase } from '../lib/supabase';

export default function Contact() {
  const titleRef = useScrollAnimation<HTMLHeadingElement>();
  const formRef = useScrollAnimation<HTMLFormElement>();

  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) return;

    if (!supabase) {
      setStatus('error');
      return;
    }

    setStatus('sending');

    const { error } = await supabase
      .from('contact_messages')
      .insert({ name: form.name, email: form.email, message: form.message });

    if (error) {
      setStatus('error');
    } else {
      setStatus('success');
      setForm({ name: '', email: '', message: '' });
    }
  };

  const inputClass =
    'w-full bg-[#101820] text-white text-[12px] placeholder-white/40 px-5 py-4 rounded-lg outline-none border border-[#2798c5]/60 focus:border-[#2798c5] transition-colors duration-200 resize-none';

  return (
    <section id="contact" className="bg-[#080b10] py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <h2
          ref={titleRef}
          className="fade-up text-3xl md:text-[30px] font-semibold text-center mb-12"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Contact{' '}
          <span className="text-[#2798c5]" style={{ fontFamily: "'Playfair Display', serif" }}>
            Me
          </span>
        </h2>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="fade-up flex flex-col gap-5"
          style={{ transitionDelay: '0.15s' }}
        >
          <input
            type="text"
            name="name"
            placeholder="Name :"
            value={form.name}
            onChange={handleChange}
            className={inputClass}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email :"
            value={form.email}
            onChange={handleChange}
            className={inputClass}
            required
          />
          <textarea
            name="message"
            placeholder="Message :"
            value={form.message}
            onChange={handleChange}
            rows={6}
            className={inputClass}
            required
          />

          <div className="flex justify-center mt-2">
            <button
              type="submit"
              disabled={status === 'sending' || !supabase}
              className="px-14 py-3 bg-[#2798c5] text-[#080b10] text-[11px] font-semibold rounded hover:bg-[#197da8] transition-colors duration-200 shadow-lg disabled:opacity-60"
            >
              {status === 'sending' ? 'Sending...' : supabase ? 'Send Message' : 'Contact form unavailable'}
            </button>
          </div>

          {status === 'success' && (
            <p className="text-center text-green-400 text-sm mt-1">
              Message sent successfully! I'll get back to you soon.
            </p>
          )}
          {status === 'error' && (
            <p className="text-center text-red-400 text-sm mt-1">
              {supabase ? 'Something went wrong. Please try again.' : 'Contact form is not configured yet. Add your Supabase environment variables.'}
            </p>
          )}
        </form>

        {/* Footer */}
        <div className="mt-20 flex flex-col md:flex-row items-center justify-between gap-6 text-[11px] text-white/70">
          <div className="flex items-center gap-2">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2798c5" strokeWidth="2">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.01 1.18 2 2 0 012 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14v2.92z" />
            </svg>
            <span>+91 99527 87036</span>
          </div>
          <div className="flex items-center gap-2">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2798c5" strokeWidth="2">
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <polyline points="2,4 12,13 22,4" />
            </svg>
            <span>seswari880@gmail.com</span>
          </div>
          <span>Created by @Eswari &amp; Reserved Rights @2026</span>
        </div>
      </div>
    </section>
  );
}
