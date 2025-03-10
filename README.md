# TailorMy.CV

A modern, powerful, and easy-to-use CV builder.

## About

TailorMy.CV is a modern, powerful, and easy-to-use CV builder. While it builds upon the excellent foundation of oh-my-cv, it is being actively developed in a new direction with its own unique features and improvements.

## Features

- Create and manage multiple resumes
- Real-time preview
- Export to PDF
- Highly customizable
- Easy font switching and icon adding
- And more...

## Acknowledgments

This project is a fork of [oh-my-cv](https://github.com/Renovamen/oh-my-cv), customized and enhanced to better serve our users' needs. We thank the original authors for their excellent work.

## 🌟 Features

- **Markdown-Powered**: Write your CV in simple Markdown and see it transform in real-time
- **Professional Templates**: Choose from carefully designed templates that follow industry standards
- **Smart Formatting**:
  - Automatic pagination for perfect page breaks
  - Intelligent casing corrections (e.g., 'Github' to 'GitHub')
  - LaTeX-style spacing controls (`\\[10px]`) and page breaks (`\newpage`)
- **Customization Options**:
  - Adjustable margins and line heights
  - Custom color themes
  - Google Fonts integration
  - Icon support via Iconify
  - Custom CSS capabilities
- **Multiple Export Options**:
  - PDF export in A4 and US Letter sizes
  - Responsive design for digital viewing
- **Privacy First**:
  - Local browser storage for your data
  - No data collection or tracking
  - Completely offline capable (PWA)
- **Academic Features**:
  - LaTeX math support via KaTeX
  - Cross-referencing support
  - Perfect for academic CVs and publications

## 🚀 Getting Started

1. Visit [TailorMy.CV](https://tailormy.cv)
2. Start writing your CV in Markdown
3. Customize the appearance to match your style
4. Export to PDF or share digitally

## 💾 Data Security

Your privacy matters to us:
- All CV data is stored locally in your browser
- No cloud storage or data collection
- Export your data regularly using the 'Save As' feature for backup

## 🌐 Browser Compatibility

For the best experience, we recommend using Chromium-based browsers:
- Google Chrome
- Microsoft Edge
- Other Chromium-based browsers

## 🚀 Deployment

### Deploying to Vercel

TailorMy.CV is designed to be easily deployed to Vercel. Follow these steps:

1. Fork or clone this repository
2. Connect your repo to Vercel through their dashboard
3. Use the following settings in Vercel:
   - Framework Preset: `Nuxt.js`
   - Build Command: (Vercel will automatically use `pnpm build:packages && pnpm --filter="site" build`)
   - Output Directory: `site/.output/public`
   - Install Command: `pnpm install`

If you need to use Google Fonts API:
1. Obtain a Google Fonts API key from [Google Developers Console](https://developers.google.com/fonts/docs/developer_api)
2. Add the following environment variable in Vercel:
   - Name: `NUXT_PUBLIC_GOOGLE_FONTS_KEY`
   - Value: Your Google Fonts API key

That's it! Vercel will handle the build process and deployment automatically.

## 🛠️ Development Setup

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/TailorMyCV.git
   cd TailorMyCV
   ```

2. Install dependencies
   ```bash
   pnpm install
   ```

3. Build the packages
   ```bash
   pnpm build:packages
   ```

4. Start the development server
   ```bash
   cd site && pnpm dev
   ```

## 🤝 Contributing

We welcome contributions! If you'd like to help improve TailorMy.CV:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 👤 Maintainership

TailorMy.CV is currently maintained by [vishvivero](https://github.com/vishvivero). While this project builds upon the excellent foundation of oh-my-cv, it is being actively developed in a new direction with its own unique features and improvements.

## 📄 License

This project is licensed under the GPL-3.0 License - see the [LICENSE](LICENSE) file for details.
