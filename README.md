# Emergency Hotline Project

This project is a simple web application. It shows information about emergency services in Bangladesh. Users can view different emergency services, copy numbers, make simulated calls, mark their favorite services using a heart icon, and also see their call history.

## Features

- Display emergency service cards
- Call buttons with coin deduction system
- Heart icons to like services
- Copy numbers functionality
- Call history with clear option

## Questions & Answers

### 1. What is the difference between `getElementById`, `getElementsByClassName`, and `querySelector / querySelectorAll`?

- **`getElementById`**  
  - Selects an element by its **ID**.  
  - Returns a **single element**.  
  - Example:  
    ```js
    const header = document.getElementById('header');
    ```

- **`getElementsByClassName`**  
  - Selects all elements with a **specific class name**.  
  - Returns an **HTMLCollection** (live collection).  
  - Example:  
    ```js
    const cards = document.getElementsByClassName('card');
    ```

- **`querySelector`**  
  - Selects the **first element** that matches a CSS selector.  
  - Example:  
    ```js
    const firstCard = document.querySelector('.card');
    ```

- **`querySelectorAll`**  
  - Selects **all elements** that match a CSS selector.  
  - Returns a **NodeList** (static list).  
  - Example:  
    ```js
    const allCards = document.querySelectorAll('.card');
    ```

### 2. How do you create and insert a new element into the DOM?

- Use `document.createElement()` to create a new element.  
- Modify its content or attributes.  
- Insert it into the DOM using methods like `appendChild()`. 

Example:

```js
const div = document.createElement('div'); 
div.innerText = "Hello, World!"; 
div.classList.add('new-div'); 
document.body.appendChild(div);
```

### 3. What is Event Bubbling and how does it work?

Event Bubbling is when an event happens on an element, it first runs on that element and then gradually moves up to its parent elements.

Example:

```html
<div>
  <button id="btn">Click Me</button>
</div>
<script>
  document.getElementById("btn").addEventListener("click", () => alert("btn clicked"));
</script>
```

### 4. What is Event Delegation in JavaScript? Why is it useful?

Event Delegation is when you add one event listener to a parent element to handle events for its child elements.

Example:

```html
<ul id="list">
  <li>Item 1</li>
  <li>Item 2</li>
</ul>
<script>
  document.getElementById("list").addEventListener("click", (e) => {
    alert(e.target.innerText + " clicked");
  });
</script>

```
### 5 Difference between preventDefault() and stopPropagation()

- preventDefault(): Stops the browser's default action.  
  Example: Prevent a link from opening.  

```js
link.addEventListener("click", (e) => e.preventDefault());
```
- stopPropagation(): Stops the event from reaching parent elements.
Example: Stop a child button click from triggering parent click.
```js
childBtn.addEventListener("click", (e) => e.stopPropagation());


