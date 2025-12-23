export function Welcome() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col overflow-hidden">
      {/* Main Content Area */}
      <main className="flex-1 flex items-center justify-center px-4 py-16">
        <div className="w-full max-w-8xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16">
            {/* Left/Right Content Areas (for larger screens) */}
            <div className="hidden lg:flex flex-col items-center justify-center flex-1 min-w-0 animate-fade-in-left">
              <div className="text-center space-y-8 w-full max-w-md mx-auto">
                <h2 className="text-5xl font-extrabold bg-linear-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient">
                  DETAIL
                </h2>
                <div className="space-y-6">
                  <p className="text-gray-300 text-xl leading-relaxed font-light italic">
                    The devil is in the details
                  </p>
                </div>
                <div className="pt-4">
                  <div className="inline-block px-6 py-3 bg-linear-to-r from-blue-600/20 to-purple-600/20 rounded-full border border-blue-500/30 backdrop-blur-sm">
                    <span className="text-blue-300 text-sm font-medium">
                      Detail Matters
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Center: GIF Image */}
            <div className="shrink-0 w-full max-w-2xl animate-fade-in-up">
              <div className="relative group">
                <div className="absolute -inset-1 bg-linear-to-r from-blue-600 via-purple-600 to-pink-600 rounded-lg blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                <img
                  src="/detailgames_intro.gif"
                  alt="Detailgames Introduction"
                  className="relative w-full h-auto rounded-lg shadow-2xl transform group-hover:scale-[1.02] transition-transform duration-300"
                />
              </div>
            </div>

            {/* Right/Left Content Areas (for larger screens) */}
            <div className="hidden lg:flex flex-col items-center justify-center flex-1 min-w-0 animate-fade-in-right">
              <div className="text-center space-y-8 w-full max-w-md mx-auto">
                <h2 className="text-5xl font-extrabold bg-linear-to-r from-pink-400 via-purple-500 to-blue-500 bg-clip-text text-transparent animate-gradient">
                  EXCELLENCE
                </h2>
                <div className="space-y-6">
                  <p className="text-gray-300 text-xl leading-relaxed font-light italic">
                    Built on details
                  </p>
                </div>
                <div className="pt-4">
                  <div className="inline-block px-6 py-3 bg-linear-to-r from-pink-600/20 to-purple-600/20 rounded-full border border-pink-500/30 backdrop-blur-sm">
                    <span className="text-pink-300 text-sm font-medium">
                      Perfection in Details
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile/Tablet Content Below GIF */}
          <div className="lg:hidden mt-12 text-center space-y-12 px-4 animate-fade-in-up">
            {/* Left Section for Mobile */}
            <div className="space-y-8">
              <h2 className="text-5xl font-extrabold bg-linear-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                DETAIL
              </h2>
              <div className="space-y-6">
                <p className="text-gray-300 text-xl leading-relaxed font-light italic">
                  The devil is in the details
                </p>
              </div>
              <div className="pt-4">
                <div className="inline-block px-5 py-2.5 bg-linear-to-r from-blue-600/20 to-purple-600/20 rounded-full border border-blue-500/30 backdrop-blur-sm">
                  <span className="text-blue-300 text-sm font-medium">
                    Detail Matters
                  </span>
                </div>
              </div>
            </div>

            {/* Right Section for Mobile */}
            <div className="space-y-8">
              <h2 className="text-5xl font-extrabold bg-linear-to-r from-pink-400 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                EXCELLENCE
              </h2>
              <div className="space-y-6">
                <p className="text-gray-300 text-xl leading-relaxed font-light italic">
                  Built on details
                </p>
              </div>
              <div className="pt-4">
                <div className="inline-block px-5 py-2.5 bg-linear-to-r from-pink-600/20 to-purple-600/20 rounded-full border border-pink-500/30 backdrop-blur-sm">
                  <span className="text-pink-300 text-sm font-medium">
                    Perfection in Details
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full py-10 px-4 border-t border-gray-800/50">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col items-center justify-center gap-3 text-center animate-fade-in">
            <div className="text-gray-300 text-sm font-medium">
              © Detailgames Inc. All rights reserved.
            </div>
            <div className="text-gray-500 text-xs leading-relaxed max-w-2xl">
              602ho, Metamorpho, 89, Seongsuil-ro, Seongdong-gu, Seoul, Republic
              of Korea, 04790
            </div>
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-left {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fade-in-right {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out;
        }

        .animate-fade-in-left {
          animation: fade-in-left 0.8s ease-out 0.2s both;
        }

        .animate-fade-in-right {
          animation: fade-in-right 0.8s ease-out 0.2s both;
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out 0.4s both;
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </div>
  );
}
