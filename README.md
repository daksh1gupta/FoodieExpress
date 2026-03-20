## Inspiration

We noticed a significant gap in coordination between local food vendors and students, often leading to cold meals or missed orders. To bridge this gap, we decided to build a dedicated Food Delivery System that ensures a seamless, fast, and user-friendly experience with real-time tracking.


## What it does

This is a full-stack platform where users can browse diverse food items, manage their carts, and proceed through a secure checkout. The system consists of three primary modules:

User Side: Browsing menus, applying filters, and placing orders.

Admin/Merchant Side: Managing menu availability and updating order status.

Real-time Updates: Providing instant notifications as the order moves from the kitchen to the doorstep.

## How we built it

The project was developed using a modern tech stack to ensure performance and scalability:

Frontend: Built with React/Next.js and styled using Tailwind CSS for a responsive UI.

Backend: Node.js and Express handle the server-side logic and API routing.

Database: MongoDB was utilized to store user profiles, menu data, and order history.

Authentication: Secured using JSON Web Tokens (JWT) for safe user sessions.

## Challenges we ran into

One of the biggest hurdles was managing the complex state of a persistent shopping cart across different sessions. Additionally, we had to implement logic to estimate delivery times accurately based on kitchen prep and rider distance:

$$T_{total} = T_{prep} + T_{delivery}$$

Where $T_{prep}$ represents the current kitchen load and $T_{delivery}$ is calculated based on the vendor-to-user coordinates.

## Accomplishments that we're proud of

We are proud of creating a clean, intuitive UI that remains performant even on low-end devices. Successfully integrating a mock payment gateway workflow was also a major milestone for our team.

## What we learned

Through this project, we gained deep insights into backend architecture and database schema design. We also learned the critical importance of API documentation and version control (Git) while collaborating in a team environment.

## What's next for Untitled

We plan to implement an AI-based recommendation engine to suggest meals based on a user's order history. Furthermore, we aim to integrate live Map API tracking and multi-language support to make the app accessible to a wider audience.