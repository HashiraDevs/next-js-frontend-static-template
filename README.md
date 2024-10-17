# Next.js Frontend Static Template

This is a frontend template built with **Next.js**, styled with **Tailwind CSS**, and includes useful libraries such as **React Icons**, **ShadCN UI components**, and **EmailJS** for email functionality. It also features dark mode support with **next-themes** and smooth animations with **React CountUp**.

## Features

- **Next.js**: Static site generation, API routes, and more.
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development.
- **React Icons**: Scalable icons from various popular icon libraries.
- **ShadCN UI**: Pre-built accessible components to speed up UI creation.
- **EmailJS**: Send emails directly from the frontend with no backend required.
- **React CountUp**: Animated number counting effect.
- **Embla JS**: An interactive carousel slider.
- **Next Themes**: Dark mode/light mode toggling with theme persistence.

## Getting Started

### 1. Install Dependencies

Clone the repository and install the required dependencies:

```bash
git clone https://github.com/yourusername/next-js-frontend-static-template.git
cd next-js-frontend-static-template
npm install
```

### 2. Set Up Environment Variables

For **EmailJS**, create a `.env.local` file in the root of your project and add the following:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your-service-id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your-template-id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your-public-key
```

### 3. Run the Development Server

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your application in the browser.

## Usage

### Dark Mode

Dark mode is supported using **next-themes**. To switch between light and dark themes, simply use the theme toggler included in the template.

### EmailJS Integration

Send emails from forms with **EmailJS**. Simply configure your EmailJS service, template, and public keys in your environment variables.

### Interactive Carousel

A countinuous slider.

### Animated CountUp

Add animated numbers anywhere using **React CountUp** to display stats or metrics with a smooth counting effect.

## Customization

Feel free to customize the project further by:

- Editing the components under the `src/components/` directory.
- Adjusting Tailwind CSS styles in the `tailwind.config.js`.
- Replacing icons with **React Icons** from any popular library like Font Awesome, Feather, etc.

## Contributing

### How to Submit a Pull Request (PR)

We welcome contributions to improve the template! Follow these steps to submit a PR:

1. **Fork the Repository**: Click the "Fork" button at the top-right corner of the repository page to copy it to your GitHub account.

2. **Clone Your Fork**: Clone your forked repository to your local machine.

   ```bash
   git clone https://github.com/yourusername/next-js-frontend-static-template.git
   cd next-js-frontend-static-template
   ```

3. **Create a New Branch**: Create a branch for your feature or bug fix.

   ```bash
   git checkout -b feature/your-feature-name
   ```

4. **Make Your Changes**: Add your changes or improvements to the codebase.

5. **Commit Your Changes**: After making your changes, stage and commit them.

   ```bash
   git add .
   git commit -m "Add brief description of your changes"
   ```

6. **Push to Your Fork**: Push the changes to your forked repository.

   ```bash
   git push origin feature/your-feature-name
   ```

7. **Open a Pull Request**: Go to the original repository on GitHub and open a Pull Request (PR) from your branch to the `main` branch of the original repository.

8. **Write a Clear PR Description**: Describe the changes you've made and why they are beneficial. If applicable, include any issues or bugs your PR addresses.

9. **Wait for Review**: Your PR will be reviewed by the maintainers. If changes are requested, make the changes and push them to your branch, then update the PR.

10. **Merge**: Once approved, your PR will be merged into the main repository!

Thank you for contributing!
