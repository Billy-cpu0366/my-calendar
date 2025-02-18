'use client';
import Lunar from 'lunar-calendar';

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
  const today = new Date();
  const lunar = Lunar.solarToLunar(
    today.getFullYear(),
    today.getMonth() + 1,
    today.getDate()
  );

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100 p-8">
      <div className="text-center space-y-8">
        <h1 className="text-8xl font-bold text-gray-800 mb-8">
          {today.toLocaleDateString('zh-CN', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}
        </h1>
        
        <div className="bg-white rounded-2xl shadow-xl p-16">
          <h2 className="text-7xl font-semibold text-gray-700">
            农历 {lunar.lunarMonthName}{formatLunarDay(lunar.lunarDay)}
            {lunar.isLeapMonth && '(闰)'}
          </h2>
        </div>
      </div>
    </main>
  )
}