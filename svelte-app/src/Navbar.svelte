<script></script>

<nav>
    <div>
        <ul>
            <li><a href="/"> Element 1</a></li>

            <li><a href="/"> Element 2</a></li>
            
            <li><a href="/"> Element 3</a></li>

            <li><a href="/"> Element 4</a></li>

        </ul>
    </div>
</nav>


<style>
    nav {
        background-color: #333; /* Dark background */
        color: white;
        padding: 10px 0;
    }

    nav div {
        max-width: 1200px; /* Maximum width */
        margin: 0 auto;
        padding: 0 20px;
    }

    ul {
        list-style: none; /* Remove default list styling */
        padding: 0;
        margin: 0;
        display: flex; /* Align items in a row */
        justify-content: space-around; /* Even space between the items */
    }

    li {
        margin: 0 10px; /* Spacing between list items */
    }

    a {
        color: white; /* White text color for links */
        text-decoration: none; /* Remove underline from links */
        font-weight: bold;
    }

    a:hover {
        color: #ddd; /* Light grey on hover */
    }
</style>