'use client';
import Lunar from 'lunar-calendar';
import { useState, useEffect } from 'react';

function formatLunarDay(day) {
  const numbers = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九', '十'];
  
  if (day <= 10) {
    return '初' + numbers[day];
  } else if (day < 20) {
    return '十' + numbers[day - 10];
  } else if (day === 20) {
    return '二十';
  } else if (day < 30) {
    return '廿' + numbers[day - 20];
  } else {
    return '三十';
  }
}

export default function Home() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const lunar = Lunar.solarToLunar(
    time.getFullYear(),
    time.getMonth() + 1,
    time.getDate()
  );

  return (
    <main className="min-h-screen w-full flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md mx-auto px-6 py-12 space-y-12">
        {/* 农历日期 */}
        <div className="bg-white rounded-3xl shadow-lg p-8 space-y-2">
          <div className="text-4xl font-medium text-gray-600">
            农历
          </div>
          <div className="text-5xl font-bold text-gray-800">
            正月
          </div>
          <div className="text-6xl font-bold text-gray-800">
            {formatLunarDay(lunar.lunarDay)}
          </div>
          {lunar.isLeapMonth && (
            <div className="text-2xl text-gray-500">(闰)</div>
          )}
        </div>

        {/* 公历日期 */}
        <div className="space-y-4">
          <div className="text-7xl font-bold text-gray-800">
            {time.getFullYear()}年
          </div>
          <div className="text-8xl font-bold text-gray-800">
            {time.getMonth() + 1}月
          </div>
          <div className="text-9xl font-bold text-gray-800">
            {time.getDate()}日
          </div>
        </div>
      </div>
    </main>
  );
}