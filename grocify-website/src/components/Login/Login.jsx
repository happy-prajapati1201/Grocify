import React, { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

const Login = () => {
  const navigate = useNavigate();
  const { login, isLoggedIn } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    name: '',
    password: '',
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState('');

  // Validation functions
  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    }

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const result = login(formData.name, formData.password);

    if (result.success) {
      setSuccess('Login successful! Redirecting to home...');
      setTimeout(() => {
        navigate('/');
      }, 1500);
    } else {
      setErrors({ form: result.message });
    }
  };

  return (
    <div className="h-screen grid grid-cols-1 lg:grid-cols-2 overflow-hidden">
      {/* Left Side - Vegetables & Fruits Showcase */}
      <div className="hidden lg:flex flex-col bg-linear-to-br from-green-600 via-emerald-600 to-green-700 p-6 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-4 gap-6 p-8">
            {[...Array(20)].map((_, i) => (
              <div key={i} className="text-white text-7xl">
                {['🥬', '🍅', '🥕', '🫑', '🥦', '🍓', '🍎', '🍊', '🥒', '🌽'][i % 10]}
              </div>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col h-full">
          {/* Branding */}
          <div className="mb-6">
            <div className="flex items-center gap-3">
              <div className="text-5xl animate-bounce">🥬</div>
              <div>
                <h1 className="text-3xl font-bold text-white drop-shadow-xl">Grocify</h1>
                <p className="text-green-100 text-sm mt-1">Farm Fresh to Your Doorstep</p>
              </div>
            </div>
          </div>

          {/* Featured Products Grid */}
          <div className="flex-1 flex items-center justify-center">
            <div className="grid grid-cols-2 gap-4 w-full max-w-2xl">
              {/* Tomatoes */}
              <div className="group bg-white/15 backdrop-blur-lg rounded-2xl p-4 border-2 border-white/30 hover:bg-white/25 hover:scale-105 transition-all duration-300 shadow-2xl">
                <div className="text-5xl mb-2 group-hover:scale-110 transition-transform">🍅</div>
                <h3 className="text-white font-bold text-lg mb-1">Fresh Tomatoes</h3>
                <p className="text-green-100 text-sm">Organic & Vine-Ripened</p>
                <div className="mt-2 h-1 bg-white/40 rounded-full w-12"></div>
              </div>

              {/* Strawberries */}
              <div className="group bg-white/15 backdrop-blur-lg rounded-2xl p-4 border-2 border-white/30 hover:bg-white/25 hover:scale-105 transition-all duration-300 shadow-2xl">
                <div className="text-5xl mb-2 group-hover:scale-110 transition-transform">🍓</div>
                <h3 className="text-white font-bold text-lg mb-1">Strawberries</h3>
                <p className="text-green-100 text-sm">Sweet & Juicy Berries</p>
                <div className="mt-2 h-1 bg-white/40 rounded-full w-12"></div>
              </div>

              {/* Carrots */}
              <div className="group bg-white/15 backdrop-blur-lg rounded-2xl p-4 border-2 border-white/30 hover:bg-white/25 hover:scale-105 transition-all duration-300 shadow-2xl">
                <div className="text-5xl mb-2 group-hover:scale-110 transition-transform">🥕</div>
                <h3 className="text-white font-bold text-lg mb-1">Fresh Carrots</h3>
                <p className="text-green-100 text-sm">Crunchy & Nutritious</p>
                <div className="mt-2 h-1 bg-white/40 rounded-full w-12"></div>
              </div>

              {/* Apples */}
              <div className="group bg-white/15 backdrop-blur-lg rounded-2xl p-4 border-2 border-white/30 hover:bg-white/25 hover:scale-105 transition-all duration-300 shadow-2xl">
                <div className="text-5xl mb-2 group-hover:scale-110 transition-transform">🍎</div>
                <h3 className="text-white font-bold text-lg mb-1">Fresh Apples</h3>
                <p className="text-green-100 text-sm">Crisp & Delicious</p>
                <div className="mt-2 h-1 bg-white/40 rounded-full w-12"></div>
              </div>

              {/* Bell Peppers */}
              <div className="group bg-white/15 backdrop-blur-lg rounded-2xl p-4 border-2 border-white/30 hover:bg-white/25 hover:scale-105 transition-all duration-300 shadow-2xl">
                <div className="text-5xl mb-2 group-hover:scale-110 transition-transform">🫑</div>
                <h3 className="text-white font-bold text-lg mb-1">Bell Peppers</h3>
                <p className="text-green-100 text-sm">Colorful & Fresh</p>
                <div className="mt-2 h-1 bg-white/40 rounded-full w-12"></div>
              </div>

              {/* Broccoli */}
              <div className="group bg-white/15 backdrop-blur-lg rounded-2xl p-4 border-2 border-white/30 hover:bg-white/25 hover:scale-105 transition-all duration-300 shadow-2xl">
                <div className="text-5xl mb-2 group-hover:scale-110 transition-transform">🥦</div>
                <h3 className="text-white font-bold text-lg mb-1">Broccoli</h3>
                <p className="text-green-100 text-sm">Healthy & Green</p>
                <div className="mt-2 h-1 bg-white/40 rounded-full w-12"></div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-6 grid grid-cols-3 gap-4 pt-4 border-t border-white/30">
            <div className="text-center">
              <div className="text-2xl font-bold text-white mb-1">500+</div>
              <div className="text-green-100 text-xs uppercase tracking-wide">Products</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white mb-1">15K+</div>
              <div className="text-green-100 text-xs uppercase tracking-wide">Customers</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white mb-1">24/7</div>
              <div className="text-green-100 text-xs uppercase tracking-wide">Support</div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="flex items-center justify-center p-6 bg-linear-to-br from-gray-50 via-green-50 to-emerald-50 relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-10 right-10 text-9xl opacity-10 animate-pulse">🍅</div>
        <div className="absolute bottom-20 left-10 text-8xl opacity-10 animate-bounce">🥕</div>
        <div className="absolute top-1/2 right-20 text-7xl opacity-10">🍓</div>

        <div className="w-full max-w-md relative z-10">
          {/* Mobile Logo */}
          <div className="lg:hidden text-center mb-4">
            <div className="text-5xl mb-2">🥬</div>
            <h1 className="text-4xl font-bold bg-linear-to-br from-green-600 to-emerald-600 bg-clip-text text-transparent">
              Grocify
            </h1>
            <p className="text-gray-600 mt-1">Farm Fresh Delivery</p>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl p-6 border border-gray-100">
            {/* Header */}
            <div className="text-center mb-6 ">
              <div className="inline-block p-3 bg-linear-to-br from-green-100 to-emerald-100 rounded-2xl mb-4">
                <div className="text-4xl">👋</div>
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-1">Welcome Back!</h2>
              <p className="text-gray-600">Sign in to continue shopping fresh</p>
            </div>

            {success && (
              <div className="mb-4 p-3 bg-linear-to-br from-green-50 to-emerald-50 border-l-4 border-green-500 text-green-700 rounded-xl">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">✓</span>
                  <span className="font-semibold">{success}</span>
                </div>
              </div>
            )}

            {errors.form && (
              <div className="mb-4 p-3 bg-linear-to-br from-red-50 to-pink-50 border-l-4 border-red-500 text-red-700 rounded-xl">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">✕</span>
                  <span className="font-semibold">{errors.form}</span>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2 items-center gap-2">
                  <span className="text-lg">👤</span>
                  <span>Your Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-4 focus:ring-green-200 focus:border-green-500 transition-all duration-200 ${
                    errors.name ? 'border-red-400 bg-red-50' : 'border-gray-200 bg-gray-50 hover:bg-white hover:border-green-300'
                  }`}
                />
                {errors.name && (
                  <p className="text-red-600 text-sm mt-2 flex items-center gap-2 font-medium">
                    <span>⚠️</span> {errors.name}
                  </p>
                )}
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2 items-center gap-2">
                  <span className="text-lg">🔒</span>
                  <span>Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-4 focus:ring-green-200 focus:border-green-500 transition-all duration-200 ${
                    errors.password ? 'border-red-400 bg-red-50' : 'border-gray-200 bg-gray-50 hover:bg-white hover:border-green-300'
                  }`}
                />
                {errors.password && (
                  <p className="text-red-600 text-sm mt-2 flex items-center gap-2 font-medium">
                    <span>⚠️</span> {errors.password}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-linear-to-br from-green-500 via-green-600 to-emerald-600 hover:from-green-600 hover:via-green-700 hover:to-emerald-700 text-white font-bold py-3 rounded-xl transition-all duration-300 transform hover:scale-[1.02] active:scale-95 shadow-xl hover:shadow-2xl mt-6 mb-2"
              >
                <span className="flex items-center justify-center gap-2 text-lg">
                  <span>Login to Your Account</span>
                  <span className="text-xl">🚀</span>
                </span>
              </button>
            </form>

            {/* Divider */}
            <div className="my-5 flex items-center">
              <div className="flex-1 h-px bg-linear-to-br from-transparent via-gray-300 to-transparent"></div>
              <span className="px-4 text-gray-500 text-sm font-medium">OR</span>
              <div className="flex-1 h-px bg-linear-to-br from-transparent via-gray-300 to-transparent"></div>
            </div>

            {/* Register Link */}
            <p className="text-center text-gray-700 mb-5">
              New to Grocify?{' '}
              <Link to="/register" className="text-green-600 font-bold hover:text-green-700 hover:underline transition inline-flex items-center gap-1">
                Create Account <span className="text-lg">🌱</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
