# ExpensesTracker

A mobile application for tracking expenses built with Ionic and Capacitor.

## 🚀 Quick Start

### 1. Clone the Repository
```bash
git clone https://github.com/Elitedsi-Jayvee/ExpensesTracker.git
cd ExpensesTracker
2. Install Dependencies
bash
npm install
3. Start Development Server
bash
npm run dev
📱 Complete Mobile Build Guide
Step-by-Step Build Process
Step 1: Initial Setup


# Install dependencies
npm install

# Build the web application
ionic build
Step 2: Add Native Platforms
If android and ios directories don't exist, run:

bash
# Add iOS platform
ionic cap add ios

# Add Android platform
ionic cap add android
Step 3: Copy & Sync Changes
For every build, run these commands:

# 1. Copy web assets to native projects
ionic cap copy

# 2. Sync changes into Android/iOS
ionic cap sync
Complete Command Sequence



# Full workflow from start to sync
npm install
ionic build
ionic cap copy
ionic cap sync
📱 Platform Development
Open in Native IDEs
bash
# Open in Android Studio
ionic cap open android

# Open in Xcode
ionic cap open ios
Live Development with Hot Reload
bash
# Android with live reload
ionic cap run android -l --external

# iOS with live reload
ionic cap run ios -l --external
🛠️ Development Commands
Development
bash
# Start development server
npm run dev

# Or using Ionic CLI
ionic serve
Build Production
bash
# Production build
ionic build --prod
Update Capacitor
bash
# Update Capacitor core
npm update @capacitor/core

# Update CLI
npm update @capacitor/cli

# Update Android/iOS
npm update @capacitor/android @capacitor/ios
🔧 Troubleshooting
Common Issues & Solutions
Issue: Dependencies won't install


# Clean install
rm -rf node_modules package-lock.json
npm cache clean --force
npm install
Issue: Capacitor sync fails


# Force sync
npx cap sync
Issue: Platform files missing


# Remove and re-add platforms
rm -rf android ios
ionic cap add android
ionic cap add ios

Reset Everything


# Complete reset
rm -rf node_modules android ios www
npm install
ionic build
ionic cap add android
ionic cap add ios
ionic cap copy
ionic cap sync

