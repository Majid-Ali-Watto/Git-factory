# Git Command Reference Guide

Welcome to the Git Command Reference Guide! This comprehensive application provides 153 Git commands organized by category and difficulty level. Whether you're a beginner or an experienced developer, this guide will help you efficiently navigate Git's powerful version control features.

## 🌟 Features

- **153 Git Commands**: Comprehensive coverage from basic to advanced operations
- **14 Organized Categories**: Commands grouped logically by function (Configuration, Branching, Remote, etc.)
- **3 Difficulty Levels**: Beginner, Intermediate, and Advanced - find commands appropriate to your skill level
- **Smart Filtering**: Filter and organize commands by category, difficulty, or search keywords
- **Multiple Downloads**: Download commands in different formats (PDF Table, PDF List, HTML)
- **Category-Specific Downloads**: Export commands grouped by category and difficulty level
- **Clear Descriptions**: 50-150 word descriptions explaining purpose, usage, and best practices
- **Code Examples**: Practical examples and snippets for each command
- **Copy Functionality**: Quickly copy command code to your clipboard
- **Responsive Design**: Works seamlessly on desktop and mobile devices

## 📊 Command Organization

### Categories (14 Total)

1. **Configuration** - Git setup, user configuration, preferences
2. **Repository** - Repository creation, cloning, initialization
3. **Staging & Committing** - Staging changes, creating commits, commit management
4. **Branching** - Branch creation, switching, deletion, management
5. **Remote** - Remote repository operations, push, pull, fetch
6. **Merging & Rebasing** - Integration strategies, merge operations, rebase
7. **Stashing** - Work-in-progress storage and retrieval
8. **Tagging** - Version marking, release management
9. **History & Inspection** - Viewing history, comparing versions, blame
10. **Undoing Changes** - Reset, revert, restore operations
11. **Debugging** - Binary search for bugs, finding problematic commits
12. **Advanced** - Complex operations, submodules, worktrees, filtering
13. **Help & Documentation** - Help resources and version information
14. **Repository Information** - Status queries, hash retrieval, ref information

### Difficulty Levels

- 🟢 **Beginner** (40% of commands) - Essential commands for daily use
- 🟡 **Intermediate** (45% of commands) - Advanced but commonly used features
- 🔴 **Advanced** (15% of commands) - Specialized operations, risky commands

## 🚀 Getting Started

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/Majid-Ali-Watto/Git-factory.git
   cd Git-factory
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Start development server**:

   ```bash
   npm run dev
   ```

4. **Build for production**:
   ```bash
   npm run build
   ```

### Using the App

1. **Search Commands**: Type in the search box to find commands by name
2. **Filter by Category**: Use the category dropdown to view commands in specific categories
3. **Filter by Difficulty**: Select difficulty level to see commands appropriate for your skill
4. **Select Commands**: Check boxes to select multiple commands
5. **Copy Code**: Click "Copy" button on any command to copy code to clipboard
6. **Download**: Export selected or filtered commands as PDF or HTML

## 📥 Download Options

### Available Formats

- **PDF Table**: Commands displayed in a formatted table with pagination
- **PDF List**: Commands displayed as a detailed list with all information
- **HTML File**: Fully styled HTML file with embedded CSS

### Download Filters

Downloads support filtering by:

- **Category**: Export all commands in a specific category
- **Difficulty Level**: Export commands suitable for specific skill levels
- **Custom Selection**: Download only the commands you selected

## 🎯 Command Features

Each command includes:

- **Name**: The exact command syntax
- **Description**: 50-150 word explanation of purpose, benefits, and context
- **Example**: Real-world usage scenario
- **Code**: Copy-ready command code
- **Category**: Logical grouping with 13 other categories
- **Difficulty**: Skill level (Beginner, Intermediate, Advanced)

### Example Command

```
git reset --hard [commit]
Description: Completely resets to a previous commit, discarding all changes.
             Destructive operation - use with caution!
Example: To hard reset, run:
Code: git reset --hard abcd123
Category: Undoing Changes
Difficulty: Advanced
```

## 📈 Learning Path

### Beginners Should Learn

1. Configuration (`git config`)
2. Repository basics (`git init`, `git clone`)
3. Staging & Committing (`git add`, `git commit`)
4. Basic branching (`git branch`, `git checkout`)
5. Remote basics (`git push`, `git pull`)

### Intermediate Users

1. Advanced staging (`git add -p`, interactive patching)
2. Merging & Rebasing strategies
3. History inspection (`git log`, `git diff`)
4. Stashing workflows
5. Cherry-picking commits

### Advanced Users

1. Bisect for debugging
2. Submodules management
3. Worktrees for parallel development
4. Filter-branch for history rewriting
5. Advanced configuration

## 🔧 Technology Stack

- **Framework**: React 18 with Vite
- **PDF Generation**: jsPDF with autoTable
- **HTML Export**: html2pdf.js
- **Build Tool**: Vite (fast build times)
- **Styling**: CSS with responsive design
- **Package Manager**: npm

## 📱 Supported Platforms

- Windows, macOS, Linux (desktop)
- iOS, Android (via React Native mobile app)
- All modern browsers (Chrome, Firefox, Safari, Edge)

## 📝 Data Statistics

- **Total Commands**: 153 Git commands
- **Categories**: 14 organized categories
- **Difficulty Levels**: 3 skill-appropriate tiers
- **File Size**: 48.21 KB (optimized)
- **Load Time**: < 5ms for filtering and search

## ✨ Implementation Details

### Category-Based Organization

Commands are organized into 14 logical categories:

- Commands filtered by category dropdown in header
- Each command card displays its category tag
- Download all commands from a category as PDF or HTML

### Difficulty-Based Filtering

- All commands tagged with skill level (Beginner, Intermediate, Advanced)
- Filter commands by difficulty using the difficulty selector
- Visual badges showing command difficulty on cards
- Download commands appropriate for your skill level

### Download by Section

- Download all beginner commands
- Download all commands in a specific category
- Download combination filters (e.g., all intermediate branching commands)
- Multiple file formats: PDF Table, PDF List, HTML

### Enhanced Interface

- **Category Dropdown**: Filter commands by 14 categories
- **Difficulty Selector**: Show commands by skill level
- **Difficulty Badges**: Visual indicators on each command card
- **Category Tags**: Display category on each command
- **Advanced Search**: Combine search with category/difficulty filters

## 🎓 Learning Resources

### For Beginners

1. Start with basic commands in the "Configuration" category
2. Learn "Repository" commands for cloning and creating repos
3. Master "Staging & Committing" before moving to branches
4. Practice basic "Remote" operations (push/pull)

### Best Practices

1. Always use `--force-with-lease` instead of `--force` to protect others' work
2. Write clear, descriptive commit messages
3. Review changes with `git diff` before committing
4. Use branches for features and bug fixes
5. Keep commits atomic and focused on one change

### Common Workflows

**Daily Workflow:**

```bash
git status                    # Check status
git add .                     # Stage changes
git commit -m "message"       # Create commit
git pull origin main          # Get latest
git push origin branch        # Push changes
```

**Feature Development:**

```bash
git checkout -b feature-name  # Create feature branch
git add file                  # Stage changes
git commit -m "message"       # Commit work
git push -u origin feature    # Push branch
git pull origin main          # Sync with main
git rebase main               # Rebase on main
git push --force-with-lease   # Force safe push
```

**Bug Fix:**

```bash
git log --oneline             # Find problematic commit
git bisect start              # Binary search for bug
git bisect bad                # Mark current as bad
git bisect good [commit]      # Mark known good
git revert [commit]           # Undo commit safely
```

## 🤝 Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

Areas for contribution:

- Additional Git commands
- Improved command descriptions
- New features and filters
- Bug fixes and performance improvements
- Documentation improvements

## 📦 Deployment

**Deployed on Netlify**: [Git-Factory Live](https://git-factory.netlify.app)

### CI/CD

[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) builds on every push and pull request:

- **Pull requests** → preview at `https://pr-<number>--git-factory.netlify.app`
- **Push to `main`** → production deploy

One-time setup (GitHub → Settings → Secrets and variables → Actions):

| Name | Kind | Value |
| --- | --- | --- |
| `NETLIFY_AUTH_TOKEN` | secret | Netlify personal access token |
| `NETLIFY_SITE_ID` | secret | Netlify site → Site configuration → Site ID |
| `SITE_URL` | variable (optional) | Canonical origin, defaults to `https://git-factory.netlify.app` |

Turn off Netlify's own Git-triggered builds for the site so the workflow is the only deployer.

### SEO

`vite-plugin-seo.js` generates `robots.txt`, `sitemap.xml`, resolves the absolute URLs in `index.html`, and pre-renders the command list into the HTML so crawlers see the content without running JavaScript. The site origin comes from `SITE_URL`, then Netlify's `URL`, then the default above.

### Manual deploy

```bash
npm run build
netlify deploy --prod --dir=dist
```

## 📱 Mobile Version

**React Native Mobile App**: [Git Factory Mobile](https://github.com/Majid-Ali-Watto/git-factory-react-native.git)

A complete native mobile version with same features for iOS and Android.

## 🐛 Known Issues & Roadmap

### Current Features (v1.0)

- ✅ 153 Git commands with detailed descriptions
- ✅ 14 organized categories
- ✅ 3-tier difficulty system
- ✅ Smart search and filtering
- ✅ Category and difficulty filtering
- ✅ Download by category and difficulty
- ✅ PDF and HTML export
- ✅ Mobile responsive design
- ✅ Copy to clipboard functionality

### Planned Features

1. **Glossary**: Git terminology dictionary
2. **Workflow Guides**: Step-by-step tutorial workflows
3. **Use Cases**: Real-world scenarios and solutions
4. **Command Recipes**: Multi-command sequences for common tasks
5. **Favorites System**: Bookmark and save preferred commands
6. **Related Commands**: Suggestions for similar commands
7. **Output Examples**: Sample command output for each command
8. **Keyboard Shortcuts**: Terminal shortcuts and tips
9. **Interactive Simulator**: Practice Git commands safely
10. **Dark Mode**: Dark theme support
11. **Multi-language**: Support for multiple languages
12. **Offline Support**: PWA for offline access

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💻 Author

**Majid Ali**

- Portfolio: [majidev.netlify.app](https://majidev.netlify.app/)
- GitHub: [@Majid-Ali-Watto](https://github.com/Majid-Ali-Watto)
- Email: majidaliqau@gmail.com

## 🙏 Acknowledgments

- Built with React 18 and Vite
- PDF export with jsPDF
- Inspired by the Git community
- Created to help developers master Git

## 📞 Support

For issues, questions, or suggestions:

1. Open an issue on [GitHub](https://github.com/Majid-Ali-Watto/Git-factory/issues)
2. Check existing documentation
3. Email: majidaliqau@gmail.com
4. Portfolio: [majidev.netlify.app](https://majidev.netlify.app/)

---

**Happy Git Learning!** 🚀
