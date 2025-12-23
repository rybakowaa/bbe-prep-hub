'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

type TariffId = 'standard' | 'plus';

interface TariffData {
  id: TariffId;
  label: string;
  price: string;
  title: string;
  description: string;
  features: string[];
}

const TARIFF_DATA: Record<TariffId, TariffData> = {
  standard: {
    id: 'standard',
    label: 'Standard',
    price: '70',
    title: 'Standard Package',
    description: 'Everything you need to prepare for the BBE entrance exam with comprehensive materials and practice questions.',
    features: [
      'Access to all video lessons',
      '700+ practice questions',
      'Economics, Math & English coverage',
      'Mock exam simulations',
      'Study materials & summaries',
      'Community access',
    ],
  },
  plus: {
    id: 'plus',
    label: 'Plus',
    price: '100',
    title: 'Plus Package',
    description: 'Premium preparation with personal mentorship and exclusive resources to maximize your chances of admission.',
    features: [
      'Everything in Standard',
      'Personal mentor support',
      '1-on-1 consultation sessions',
      'Priority Q&A responses',
      'Extended mock exam feedback',
      'Exclusive study resources',
      'Certificate of completion',
    ],
  },
};

const Switcher = ({
  activeId,
  onToggle,
}: {
  activeId: TariffId;
  onToggle: (id: TariffId) => void;
}) => {
  const options = Object.values(TARIFF_DATA).map((t) => ({ id: t.id, label: t.label }));

  return (
    <div className="flex justify-center mb-10">
      <div className="flex items-center gap-1 p-1.5 rounded-full bg-white border border-gray-200 shadow-lg">
        {options.map((opt) => (
          <motion.button
            key={opt.id}
            onClick={() => onToggle(opt.id)}
            whileTap={{ scale: 0.96 }}
            className="relative px-8 py-3 rounded-full flex items-center justify-center text-base font-semibold focus:outline-none transition-colors"
          >
            {activeId === opt.id && (
              <motion.div
                layoutId="tariff-switcher-bg"
                className="absolute inset-0 rounded-full gradient-bg"
                transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              />
            )}
            <span
              className={`relative z-10 transition-colors duration-300 ${
                activeId === opt.id ? 'text-slate-800' : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              {opt.label}
            </span>
          </motion.button>
        ))}
      </div>
    </div>
  );
};

const TariffCard = ({
  data,
  isSelected,
  onClick,
}: {
  data: TariffData;
  isSelected: boolean;
  onClick: () => void;
}) => {
  return (
    <motion.div
      onClick={onClick}
      animate={{
        scale: isSelected ? 1.05 : 0.95,
        opacity: isSelected ? 1 : 0.4,
      }}
      whileHover={{ scale: isSelected ? 1.05 : 1 }}
      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
      className={`relative rounded-2xl p-8 cursor-pointer transition-all duration-300 ${
        isSelected
          ? 'bg-white border-2 border-primary shadow-2xl shadow-primary/20 z-10'
          : 'bg-gray-100 border border-gray-200 grayscale'
      }`}
    >
      {data.id === 'plus' && isSelected && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 gradient-bg rounded-full text-sm font-medium text-slate-800">
          Recommended
        </div>
      )}

      <div className="text-center mb-6">
        <span className={`text-sm font-semibold uppercase tracking-widest ${isSelected ? 'text-gray-500' : 'text-gray-400'}`}>
          {data.label}
        </span>
      </div>

      <div className="flex items-baseline justify-center gap-2 mb-4">
        <span className={`text-5xl md:text-6xl font-bold ${isSelected ? 'text-slate-800' : 'text-gray-400'}`}>
          {data.price}
        </span>
        <span className={`text-xl font-medium ${isSelected ? 'text-gray-500' : 'text-gray-400'}`}>EUR</span>
      </div>

      <p className={`text-center mb-6 text-sm leading-relaxed ${isSelected ? 'text-gray-600' : 'text-gray-400'}`}>
        {data.description}
      </p>

      <div className={`border-t pt-6 ${isSelected ? 'border-gray-200' : 'border-gray-300'}`}>
        <h4 className={`text-sm font-bold mb-4 ${isSelected ? 'text-slate-800' : 'text-gray-400'}`}>
          What's included:
        </h4>
        <ul className="space-y-3">
          {data.features.map((feature, index) => (
            <motion.li
              key={feature}
              initial={false}
              animate={{
                opacity: isSelected ? 1 : 0.5,
                x: isSelected ? 0 : -5,
              }}
              transition={{ delay: isSelected ? index * 0.03 : 0 }}
              className="flex items-start gap-3"
            >
              <div
                className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                  isSelected ? 'gradient-bg' : 'bg-gray-300'
                }`}
              >
                <Check className={`w-3 h-3 ${isSelected ? 'text-slate-800' : 'text-gray-500'}`} />
              </div>
              <span className={`text-sm ${isSelected ? 'text-gray-700' : 'text-gray-400'}`}>{feature}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default function TariffShowcase() {
  const [selectedTariff, setSelectedTariff] = useState<TariffId>('standard');

  return (
    <div className="w-full py-8 px-4">
      <Switcher activeId={selectedTariff} onToggle={setSelectedTariff} />

      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        <TariffCard
          data={TARIFF_DATA.standard}
          isSelected={selectedTariff === 'standard'}
          onClick={() => setSelectedTariff('standard')}
        />
        <TariffCard
          data={TARIFF_DATA.plus}
          isSelected={selectedTariff === 'plus'}
          onClick={() => setSelectedTariff('plus')}
        />
      </div>
    </div>
  );
}
