## Kanban Board – Placement Rush

A minimal Kanban-style task board built with **HTML**, **CSS**, and **vanilla JavaScript**. It is themed around “placement rush” and helps you visually organize your tasks into different stages of progress.

### Features

- **Four columns**: Backlog, To Do, In Progress, Done.
- **Add tasks**: Create new tasks via a modal form with title and details.
- **Drag and drop**: Move tasks between columns with native drag-and-drop.
- **Delete tasks**: Remove tasks from any column.
- **Task counts**: Each column shows the number of tasks it currently contains.
- **LocalStorage persistence**: Tasks are saved in the browser so they remain after page reload.
- **Login/landing screen**: Simple hero-style entry screen with a “Get Started” button.

### Tech Stack

- **HTML5** – structure
- **CSS3** – layout, animations, and styling
- **JavaScript (ES6)** – task logic, drag-and-drop, and persistence

### Getting Started

1. **Clone the repo**
   ```bash
   git clone <your-repo-url>
   cd kanban-board
   ```
2. **Open in browser**
   - Just open `index.html` directly in your browser (no build step required).

### Usage

- On the login page, click **Get Started** to open the board.
- Click the **+** button at the bottom of the board to open the **Add Task** modal.
- Enter a **task title** (required) and optional **details**, then click **Add**.
- Drag a task card to another column to update its status.
- Click **Delete** on a card to remove it.

### Project Structure

- `index.html` – main HTML file with login page and board layout.
- `style.css` – styles for the login page, board, columns, and tasks.
- `script.js` – JavaScript logic for tasks, drag-and-drop, localStorage, and UI interactions.

### Notes

- This is a front-end only project; there is **no backend** or authentication.
- All data is stored locally in the browser using `localStorage`.

### Future Improvements (Ideas)

- Add edit functionality for existing tasks.
- Add due dates, labels, or priority indicators.
- Add simple analytics (e.g., tasks completed per day/week).
- Make the layout fully responsive for mobile screens.

