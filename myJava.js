        // Sample data for items
        const items = [
            {
                brand: 'Razer',
                name: 'Razer Viper V2 Pro',
                image: 'Rizer Viper V2 pro.jpg',
                link: 'https://amzn.to/44Rt2GI'
            },
            {
                brand: 'Razer',
                name: 'Razer Basilisk V3 Pro',
                image: 'Razer Basilisk V3 Pro.jpg',
                link: 'https://amzn.to/3Z7ARXs'
            },
            {
                brand: 'Logitech',
                name: 'Logitech G502 X Lightspeed',
                image: 'Logitech G502 X Lightspeed.jpg',
                link: 'https://amzn.to/489MkKi'
            },
            {
                brand: 'Logitech',
                name: 'Logitech G PRO X',
                image: 'Logitech G PRO X.png',
                link: 'https://amzn.to/44DV7RH'
            },
            {
                brand: 'Redragon',
                name: 'Steelseries Rival 5',
                image: 'Steel Series Rival 5.png',
                link: 'https://amzn.to/3Z7BRea'
            }
        ];

        // Function to show all items
        function showAllItems() {
            const itemList = document.getElementById('itemList');
            itemList.innerHTML = ''; // Clear the current item list
            items.forEach(item => {
                addItemToItemList(item);
            });
        }
        // Function to show items for a specific brand
        function showBrandItems(brand) {
            const itemList = document.getElementById('itemList');
            itemList.innerHTML = ''; // Clear the current item list

            items.forEach(item => {
                if (item.brand === brand) {
                    addItemToItemList(item);
                }
            });
        }
        // Function to add an item card to the item list
        function addItemToItemList(item) 
		{
            const itemCard = document.createElement('div');
            itemCard.classList.add('item-card');
            // Create the item card content (image, title, description, etc.)
            // You can customize this based on your data structure
            // For simplicity, I'm using item.name and item.brand
            itemCard.innerHTML = 
			`
                <img src="${item.image}" alt="${item.name}" class="item-image">
                <h2>${item.name}</h2>
                <p>See Price for more &#128071;</p>
                <button><a href="${item.link}">Amazon</a></button>
            `;
            itemList.appendChild(itemCard);
        }
        showAllItems();