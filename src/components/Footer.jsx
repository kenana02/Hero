
export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-gradient-to-r from-blue-200 to-indigo-400 text-white py-4 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} AirFlow. جميع الحقوق محفوظة.
        </p>
      </div>
    </footer>
  );
}