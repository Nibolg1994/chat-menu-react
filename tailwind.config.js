module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx,png}", // Пример пути к файлам
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
    },
    screens: {
      xs: "400px", // 👈 добавляем пользовательский брейкпоинт
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
  },
  plugins: [],
}