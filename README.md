# KoraPayBooks: Your Next-Gen Book Management System

Welcome to **KoraPayBooks**, a state-of-the-art book management system built with cutting-edge technologies. Here's how you can get started:

## Installation

To install the necessary dependencies, please run the following command in your terminal:

```bash
npm install
# or
yarn install
```

## Running the Development Server

After installing the dependencies, you can start the development server by running:

```bash
npm run dev
# or
yarn dev
```

## Key Features and Technologies

1. **State Management**: We use Redux for state management. Although it might seem like an overkill for this project, a real-world application of this magnitude would definitely benefit from it.
2. **Search State**: The search parameters are stored in the browser query to manage search state efficiently.
3. **Next.JS**: The project is built with Next.JS, a popular React framework for building modern web applications.
4. **MUI**: We chose MUI as our component library due to its comprehensive set of pre-made components and customization capabilities.
5. **GitHub**: The project is hosted on GitHub, enabling easy version control and collaboration.
6. **Deployment**: The application is deployed on Vercel, ensuring high availability and performance.
7. **Broken Links**: Aside from the home page, I didn't cater for other links
8. **Recently Added**: I just used a flag to denote the recently added books, although business should give a criteria for how to filter those.
9. **Filtering Technique**: I use the search param to filter both the recently added sections and all books section, I didn't filter the slider. so both sections shows up with filtered results

We hope you enjoy using KoraPayBooks as much as we enjoyed building it! Happy coding! 🚀
