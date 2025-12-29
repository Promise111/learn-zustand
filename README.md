# 📝 Todo App with Zustand

A modern, lightweight todo application built with React and Zustand to demonstrate state management patterns. This project showcases how to build a clean, type-safe state management solution using Zustand's simple and powerful API. Perfect for learning Zustand fundamentals including store creation, persistence middleware, and TypeScript integration.

![React](https://img.shields.io/badge/React-19.2.0-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-3178C6?logo=typescript&logoColor=white)
![Zustand](https://img.shields.io/badge/Zustand-5.0.9-FF6B6B?logo=zustand)
![Vite](https://img.shields.io/badge/Vite-7.2.4-646CFF?logo=vite&logoColor=white)

## ✨ Features

- ✅ **Add todos** - Create new todo items with a simple input
- ✏️ **Edit todos** - Inline editing with a clean UI
- 🗑️ **Delete todos** - Remove todos with a single click
- 💾 **Persistent storage** - Todos are automatically saved to localStorage
- 🎨 **Modern UI** - Clean interface with React Icons
- 🔒 **Type-safe** - Full TypeScript support for better developer experience

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| **React** | 19.2.0 | UI framework |
| **TypeScript** | 5.9.3 | Type safety |
| **Zustand** | 5.0.9 | State management |
| **Vite** | 7.2.4 | Build tool & dev server |
| **React Icons** | 5.5.0 | Icon library |

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/todo-zustand.git
   cd todo-zustand
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` (or the port shown in your terminal)

## 🚀 Usage

### Development

```bash
# Start development server with hot reload
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint
```

### Basic Operations

1. **Adding a Todo**: Type your todo in the input field and click "Add" or press Enter
2. **Editing a Todo**: Click the edit icon (✏️) next to any todo, modify the text, and click the checkmark (✓) to save
3. **Deleting a Todo**: Click the trash icon (🗑️) to remove a todo
4. **Canceling Edit**: While editing, click the cancel icon (✕) to discard changes

## 📁 Project Structure

```
todo-zustand/
├── src/
│   ├── components/
│   │   ├── todo/
│   │   │   ├── todo.tsx          # Individual todo item component
│   │   │   └── todo.module.css   # Todo component styles
│   │   └── todoList/
│   │       ├── todoList.tsx      # Main todo list component
│   │       └── todoList.module.css
│   ├── store/
│   │   └── todoStore.ts          # Zustand store configuration
│   ├── utils/
│   │   ├── types.ts              # TypeScript type definitions
│   │   └── helpers.ts            # Utility functions
│   ├── App.tsx                   # Root component
│   └── main.tsx                  # Application entry point
├── public/                       # Static assets
├── package.json
└── README.md
```

## 🎓 Key Concepts Demonstrated

This project serves as a practical example of:

### Zustand State Management
- **Store Creation**: Using `create()` to define state and actions
- **TypeScript Integration**: Fully typed store with interfaces
- **Persistence**: Using `persist` middleware for localStorage
- **Selective Subscriptions**: Components subscribe only to needed state slices

### React Patterns
- **Functional Components**: Modern React with hooks
- **Component Composition**: Breaking UI into reusable components
- **CSS Modules**: Scoped styling for components
- **Controlled Components**: Managing form inputs with React state

### TypeScript Best Practices
- **Type Definitions**: Centralized type definitions in `utils/types.ts`
- **Type Safety**: Full type coverage for store and components
- **Interface Design**: Clear contracts between components and store

## 🔑 Store Structure

The Zustand store (`todoStore.ts`) manages:

```typescript
{
  todos: string[]              // Array of todo items
  editing: number | null       // Index of todo being edited
  typingTodoValue: string      // Current input value
  // Actions:
  addTodo(todo: string)        // Add new todo
  removeTodo(index: number)    // Delete todo by index
  editTodo(index, newTodo)     // Update existing todo
  isEditing(index)             // Set editing state
  setTypingTodoValue(value)    // Update input value
}
```

## 📸 Screenshots

<!-- Add screenshots here when you have them -->
<!-- Example: ![Todo App Screenshot](./screenshots/todo-app.png) -->

## 🤝 Contributing

This is a learning project, but contributions are welcome! If you'd like to improve this project:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Your Name**
- GitHub: [@promise111](https://github.com/promise111)
- Email: promiseihunna@gmail.com

## 🙏 Acknowledgments

- Built following the [Zustand documentation](https://docs.pmnd.rs/zustand)
- Inspired by the official Zustand examples

---

⭐ If you found this project helpful, please consider giving it a star!
