"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, MessageCircle, Mail, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  cta?: {
    telegram?: string;
    whatsapp?: string;
    email?: string;
  };
}

export function ContactModal({ isOpen, onClose, cta }: ContactModalProps) {
  if (!cta) return null;

  const contactOptions = [
    {
      name: "Telegram",
      icon: <Send className="w-5 h-5" />,
      link: cta.telegram,
      color: "hover:bg-[#0088cc]",
      accent: "#0088cc",
    },
    {
      name: "WhatsApp",
      icon: <MessageCircle className="w-5 h-5" />,
      link: cta.whatsapp,
      color: "hover:bg-[#25D366]",
      accent: "#25D366",
    },
    {
      name: "Direct Email",
      icon: <Mail className="w-5 h-5" />,
      link: cta.email ? `mailto:${cta.email}` : undefined,
      color: "hover:bg-accent-lime hover:text-black",
      accent: "#CCFF00",
    },
  ].filter((opt) => opt.link);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative w-full max-w-md bg-bg-card border border-border-subtle rounded-[2.5rem] p-8 md:p-12 overflow-hidden shadow-[0_0_50px_-12px_rgba(204,255,0,0.15)]"
          >
            {/* Background Glow */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-accent-lime/10 blur-[80px] rounded-full pointer-events-none" />

            {/* Header */}
            <div className="flex items-center justify-between mb-8 relative z-10">
              <div className="space-y-1">
                <h2 className="text-2xl font-black text-white uppercase tracking-tighter">
                  Contact <span className="text-accent-lime">Dev</span>
                </h2>
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-text-muted">
                  Registry: Ameen (@onerandomdevv)
                </p>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-full border border-border-subtle text-text-muted hover:text-white hover:border-white transition-all group"
              >
                <X className="w-5 h-5 group-hover:rotate-90 transition-transform" />
              </button>
            </div>

            {/* Options */}
            <div className="space-y-4 relative z-10">
              {contactOptions.length > 0 ? (
                contactOptions.map((option, i) => (
                  <motion.a
                    key={option.name}
                    href={option.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.1 * (i + 1) }}
                    className={`flex items-center justify-between p-5 rounded-2xl bg-bg-glass border border-border-subtle transition-all duration-300 group ${option.color}`}
                  >
                    <div className="flex items-center gap-4">
                      <div className="text-accent-lime group-hover:text-white transition-colors">
                        {option.icon}
                      </div>
                      <span className="font-bold uppercase tracking-widest text-sm text-white transition-colors group-hover:translate-x-1 duration-300">
                        {option.name}
                      </span>
                    </div>
                    <ExternalLink className="w-4 h-4 text-text-muted group-hover:text-white transition-colors opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                  </motion.a>
                ))
              ) : (
                <p className="text-center py-8 text-text-muted text-xs uppercase tracking-widest italic">
                  No contact coordinates available for this sector.
                </p>
              )}
            </div>

            {/* Footer Tag */}
            <div className="mt-10 pt-6 border-t border-border-subtle flex items-center justify-center relative z-10">
              <span className="text-[9px] font-black uppercase tracking-[0.5em] text-text-muted/50">
                Secure Transmission Link
              </span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
